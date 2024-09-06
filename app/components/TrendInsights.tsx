import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

interface TrendInsightsProps {
  trendData: any; // Replace 'any' with a more specific type if possible
}

export default function TrendInsights({ trendData }: TrendInsightsProps) {
  const [insights, setInsights] = useState('');

  const generateInsights = useCallback(async (data: any) => {
    try {
      const response = await axios.post('https://api.anthropic.com/v1/completions', {
        prompt: `Analyze the following trend data and provide insights: ${JSON.stringify(data)}`,
        model: 'claude-v1',
        max_tokens_to_sample: 300,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY,
        },
      });
      return response.data.completion;
    } catch (error) {
      console.error('Error generating insights:', error);
      return 'Unable to generate insights at this time.';
    }
  }, []);

  useEffect(() => {
    if (Object.keys(trendData).length > 0) {
      generateInsights(trendData).then(setInsights);
    }
  }, [trendData, generateInsights]);

  return (
    <div className="trend-insights">
      <h2>AI-Generated Insights</h2>
      <p>{insights}</p>
    </div>
  );
}