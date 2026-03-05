import { useState, useEffect } from "react";

// ==========================================
// GOOGLE SHEETS CMS URL
// To set up:
// 1. Create a Google Sheet with columns: page, date, time, embed
// 2. File → Share → Publish to web → CSV → Publish
// 3. Set VITE_SHEET_CSV_URL in your .env file or GitHub Secrets
// ==========================================
const SHEET_CSV_URL = import.meta.env.VITE_SHEET_CSV_URL || "";

interface SheetConfig {
    date: string;
    time: string;
    embed: string;
}

interface UseSheetConfigResult extends SheetConfig {
    loading: boolean;
}

// In-memory cache so multiple components don't re-fetch
let cachedData: Record<string, SheetConfig> | null = null;
let fetchPromise: Promise<Record<string, SheetConfig>> | null = null;

function parseCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            if (inQuotes && line[i + 1] === '"') {
                // Escaped double-quote inside a quoted field
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (ch === "," && !inQuotes) {
            result.push(current.trim());
            current = "";
        } else {
            current += ch;
        }
    }
    result.push(current.trim());
    return result;
}

/**
 * Extracts the src URL from a full <iframe> HTML string.
 * If the value is already a plain URL, returns it as-is.
 */
function extractEmbedSrc(value: string): string {
    const trimmed = value.trim();
    if (!trimmed) return "";
    // Try to extract src from iframe - handles src="url", src='url', or src=url
    const match = trimmed.match(/src=["']?([^"'\s>]+)["']?/i);
    if (match) return match[1];
    // Otherwise return as-is (already a URL)
    return trimmed;
}

function parseCSV(csv: string): Record<string, SheetConfig> {
    const lines = csv.trim().split(/\r?\n/);
    if (lines.length < 2) return {};

    const headers = parseCSVLine(lines[0]).map((h) => h.toLowerCase());
    const pageIdx = headers.indexOf("page");
    const dateIdx = headers.indexOf("date");
    const timeIdx = headers.indexOf("time");
    const embedIdx = headers.indexOf("embed");

    if (pageIdx === -1 || dateIdx === -1 || timeIdx === -1) return {};

    const result: Record<string, SheetConfig> = {};
    for (let i = 1; i < lines.length; i++) {
        const cols = parseCSVLine(lines[i]);
        const page = cols[pageIdx]?.toLowerCase();
        if (page) {
            result[page] = {
                date: cols[dateIdx] || "",
                time: cols[timeIdx] || "",
                embed: (embedIdx !== -1 ? extractEmbedSrc(cols[embedIdx] || "") : "") || "",
            };
        }
    }
    return result;
}

async function fetchSheetData(): Promise<Record<string, SheetConfig>> {
    if (cachedData) return cachedData;
    if (fetchPromise) return fetchPromise;

    fetchPromise = fetch(SHEET_CSV_URL)
        .then((res) => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.text();
        })
        .then((csv) => {
            cachedData = parseCSV(csv);
            // Persist to localStorage for next page load
            try {
                localStorage.setItem("sheet_cms_cache", JSON.stringify(cachedData));
            } catch (_) { /* ignore storage errors */ }
            return cachedData;
        })
        .catch((err) => {
            console.warn("Failed to fetch sheet config:", err);
            fetchPromise = null;
            return {};
        });

    return fetchPromise;
}

function getCachedConfig(page: string): SheetConfig | null {
    try {
        const raw = localStorage.getItem("sheet_cms_cache");
        if (!raw) return null;
        const data = JSON.parse(raw) as Record<string, SheetConfig>;
        return data[page.toLowerCase()] || null;
    } catch (_) {
        return null;
    }
}

/**
 * Fetches masterclass config from a published Google Sheet.
 * Uses localStorage cache as initial value to avoid content flash on refresh.
 * Falls back to `defaults` only on first-ever visit.
 */
export function useSheetConfig(
    page: string,
    defaults: SheetConfig
): UseSheetConfigResult {
    const [config, setConfig] = useState<SheetConfig>(() => {
        const cached = getCachedConfig(page);
        if (cached?.date && cached?.time) return cached;
        return defaults;
    });
    const [loading, setLoading] = useState(!!SHEET_CSV_URL);

    useEffect(() => {
        if (!SHEET_CSV_URL) {
            setLoading(false);
            return;
        }

        let cancelled = false;
        fetchSheetData().then((data) => {
            if (cancelled) return;
            const pageConfig = data[page.toLowerCase()];
            if (pageConfig) {
                setConfig({
                    date: pageConfig.date || defaults.date,
                    time: pageConfig.time || defaults.time,
                    embed: pageConfig.embed || defaults.embed,
                });
            }
            setLoading(false);
        });

        return () => {
            cancelled = true;
        };
    }, [page]);

    return { ...config, loading };
}
