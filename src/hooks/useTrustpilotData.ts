import { useState, useEffect } from 'react';

interface TrustpilotData {
  trustScore: string;
  stars: number;
  totalReviews: number;
  isLoading: boolean;
  error: Error | null;
}

export function useTrustpilotData(templateId: string, businessUnitId: string, locale: string = 'en-US') {
  const [data, setData] = useState<TrustpilotData>({
    trustScore: '0',
    stars: 0,
    totalReviews: 0,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchTrustpilotData() {
      try {
        const response = await fetch(
          `https://widget.trustpilot.com/trustbox-data/${templateId}?businessUnitId=${businessUnitId}&locale=${locale}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch Trustpilot data: ${response.statusText}`);
        }

        const json = await response.json();

        if (isMounted && json.businessUnit) {
          setData({
            trustScore: Number(json.businessUnit.trustScore).toFixed(1),
            stars: json.businessUnit.stars,
            totalReviews: json.businessUnit.numberOfReviews?.total || 0,
            isLoading: false,
            error: null,
          });
        }
      } catch (err) {
        if (isMounted) {
          setData((prev) => ({
            ...prev,
            isLoading: false,
            error: err instanceof Error ? err : new Error('Unknown error fetching Trustpilot data'),
          }));
        }
      }
    }

    fetchTrustpilotData();

    return () => {
      isMounted = false;
    };
  }, [templateId, businessUnitId, locale]);

  return data;
}
