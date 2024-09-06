import React from 'react';
import './TrendingSidebar.css';

function TrendingSidebar() {
  // Placeholder data for trending topics and recommendations
  const trendingTopics = ['AI', 'Blockchain', 'Climate Change', 'Space Exploration'];
  const recommendations = ['Article 1', 'Article 2', 'Article 3'];

  return (
    <aside className="trending-sidebar">
      <section className="trending-topics">
        <h2>Trending Topics</h2>
        <ul>
          {trendingTopics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </section>
      <section className="recommendations">
        <h2>Recommended for You</h2>
        <ul>
          {recommendations.map((article, index) => (
            <li key={index}>{article}</li>
          ))}
        </ul>
      </section>
      <section className="trend-alerts">
        <h2>Trend Alerts</h2>
        <p>No new alerts</p>
      </section>
    </aside>
  );
}

export default TrendingSidebar;