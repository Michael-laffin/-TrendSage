import { TrendDataPoint } from '../types/TrendDataPoint';

export async function fetchTrendData(timeRange: string): Promise<TrendDataPoint[]> {
    // Implement actual data fetching logic
    const response = await fetch(`/api/trends?timeRange=${timeRange}`);
    if (!response.ok) {
        throw new Error('Failed to fetch trend data');
    }
    return response.json();
}
