import axios from 'axios';

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/completions';

export async function generateInsights(data: any) {
  try {
    const response = await axios.post(
      ANTHROPIC_API_URL,
      {
        prompt: `Analyze the following trend data and provide insights: ${JSON.stringify(data)}`,
        max_tokens_to_sample: 300,
        model: 'claude-2.0',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': ANTHROPIC_API_KEY,
        },
      }
    );
    return response.data.completion;
  } catch (error) {
    console.error('Error generating insights:', error);
    return '';
  }
}