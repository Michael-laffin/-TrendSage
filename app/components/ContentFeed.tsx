import React, { useState, useEffect } from 'react';
import ContentCard from './ContentCard';
import { Article } from './ContentCard';

export default function ContentFeed() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Mock data, replace with actual data fetching
    const mockArticles: Article[] = [
      { id: 1, title: 'AI in Healthcare', source: 'TechCrunch', snippet: 'How AI is revolutionizing...' },
      { id: 2, title: 'Sustainable Fashion Trends', source: 'Vogue', snippet: 'The rise of eco-friendly...' },
      // Add more mock articles
    ];
    setArticles(mockArticles);
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map(article => (
        <ContentCard key={article.id} article={article} />
      ))}
    </div>
  );
}