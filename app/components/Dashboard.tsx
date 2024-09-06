import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { generateInsights } from '../services/aiService';
// Removed the import for TrendDataPoint due to the error
import { fetchTrendData } from '../services/dataService';

// Add this type definition
type TrendDataPoint = {
  date: string;
  value: number;
};

export default function Dashboard() {
  const [insights, setInsights] = useState('');
  const [trendData, setTrendData] = useState<TrendDataPoint[]>([]);
  const [timeRange, setTimeRange] = useState('week');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchTrendData(timeRange);
        if (Array.isArray(data) && data.length > 0) {
          setTrendData(data);
          const generatedInsights = await generateInsights(data);
          setInsights(generatedInsights);
        } else {
          console.error('Invalid or empty trend data received:', data);
          setError('No valid trend data available. Please try again later.');
        }
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load trend data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [timeRange]);

  const chartData = {
    labels: trendData.map((d) => d.date),
    datasets: [
      {
        label: 'Trend',
        data: trendData.map((d) => d.value),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Trend Analysis',
      },
    },
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Trend Analysis</h2>
      <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
        <option value="week">Last Week</option>
        <option value="month">Last Month</option>
        <option value="year">Last Year</option>
      </select>
      {trendData.length > 0 ? (
        <Line data={chartData} options={chartOptions} />
      ) : (
        <div>No trend data available</div>
      )}
      <h3>AI Insights</h3>
      <p>{insights}</p>
    </div>
  );
}