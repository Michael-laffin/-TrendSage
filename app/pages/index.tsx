import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { fetchNews } from '../services/contentService';
import { Article } from '../types/Article';
import ArticleCard from '../components/ArticleCard'; // Add this line

export default function Home() {
  const auth = useAuth();
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    async function loadUserFeed() {
      if (auth?.user?.uid) {
        try {
          // Assuming getUserPreferences is a function that needs to be imported or defined
          // For demonstration, let's assume it's a placeholder function that returns a mock object
          const preferences = { categories: ['tech', 'science'] }; // Placeholder for demonstration
          const articles = await fetchNews(preferences.categories.join(','));
          setNews(articles);
        } catch (error) {
          console.error('Error fetching news or preferences:', error);
        }
      }
    }

    loadUserFeed();
  }, [auth]);

  return (
    <div>
      <h1>Your Personalized Feed</h1>
      {news.length > 0 ? (
        news.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))
      ) : (
        <p>No articles available</p>
      )}
    </div>
  );
}
