import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const SHEET_CSV_URL = import.meta.env.VITE_SHEET_CSV_URL || "";
const PAGE_KEY = "join";

function parseCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') {
            if (inQuotes && line[i + 1] === '"') {
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

async function fetchMeetingLink(): Promise<string | null> {
    if (!SHEET_CSV_URL) return null;
    try {
        const res = await fetch(SHEET_CSV_URL);
        if (!res.ok) return null;
        const csv = await res.text();
        const lines = csv.trim().split(/\r?\n/);
        if (lines.length < 2) return null;

        const headers = parseCSVLine(lines[0]).map((h) => h.toLowerCase());
        const pageIdx = headers.indexOf("page");
        const linkIdx = headers.indexOf("link");

        if (pageIdx === -1 || linkIdx === -1) return null;

        for (let i = 1; i < lines.length; i++) {
            const cols = parseCSVLine(lines[i]);
            const page = cols[pageIdx]?.toLowerCase().trim();
            if (page === PAGE_KEY) {
                return cols[linkIdx]?.trim() || null;
            }
        }
    } catch (_) {
        return null;
    }
    return null;
}

const JoinRedirect = () => {
    const [status, setStatus] = useState<"loading" | "redirecting" | "error">("loading");

    useEffect(() => {
        fetchMeetingLink().then((url) => {
            if (url) {
                setStatus("redirecting");
                window.location.replace(url);
            } else {
                setStatus("error");
            }
        });
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-warm-beige to-gold/20 px-4">
            <img
                src={logo}
                alt="Bamboo Melody Weavers"
                className="h-20 w-20 rounded-full bg-white p-1.5 drop-shadow-xl mb-8"
            />

            {status === "loading" && (
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        {/* Animated spinner */}
                        <svg
                            className="animate-spin h-10 w-10 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                        </svg>
                    </div>
                    <p className="text-lg font-semibold text-foreground">Fetching your meeting link…</p>
                    <p className="text-sm text-muted-foreground mt-2">You'll be redirected in just a moment.</p>
                </div>
            )}

            {status === "redirecting" && (
                <div className="text-center">
                    <p className="text-lg font-semibold text-foreground">Redirecting you now…</p>
                    <p className="text-sm text-muted-foreground mt-2">If nothing happens, please check back shortly.</p>
                </div>
            )}

            {status === "error" && (
                <div className="text-center">
                    <p className="text-xl font-bold text-foreground mb-3">Meeting link not found</p>
                    <p className="text-sm text-muted-foreground max-w-xs">
                        No meeting link has been configured yet. Please check back closer to the session time or contact us directly.
                    </p>
                    <a
                        href="/"
                        className="mt-6 inline-block text-primary underline underline-offset-4 text-sm font-medium"
                    >
                        ← Back to home
                    </a>
                </div>
            )}
        </div>
    );
};

export default JoinRedirect;
