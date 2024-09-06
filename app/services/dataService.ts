import axios from 'axios';
import { TrendDataPoint } from '../types/TrendDataPoint';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com';

export async function fetchTrendData(timeRange: string): Promise<TrendDataPoint[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/trends`, {
      params: { timeRange },
    });

    if (response.status !== 200) {
      throw new Error('Failed to fetch trend data');
    }

    return response.data.map((item: any) => ({
      date: new Date(item.date).toISOString(),
      value: Number(item.value),
    }));
  } catch (error) {
    console.error('Error fetching trend data:', error);
    throw error;
  }
}

export async function fetchCategoryTrends(category: string): Promise<TrendDataPoint[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/trends/${category}`);

    if (response.status !== 200) {
      throw new Error(`Failed to fetch trends for category: ${category}`);
    }

    return response.data.map((item: any) => ({
      date: new Date(item.date).toISOString(),
      value: Number(item.value),
    }));
  } catch (error) {
    console.error(`Error fetching trends for category ${category}:`, error);
    throw error;
  }
}

// Add more data fetching functions as needed