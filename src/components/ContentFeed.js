import React from 'react';
import './ContentFeed.css';

function ContentFeed() {
  // This is a placeholder for the actual content fetching logic
  const articles = [
    { id: 1, title: 'Article 1', source: 'Source 1', snippet: 'Snippet 1', thumbnail: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Article 2', source: 'Source 2', snippet: 'Snippet 2', thumbnail: 'https://via.placeholder.com/150' },
    // Add more placeholder articles
  ];

  return (
    <div className="content-feed">
      {articles.map(article => (
        <div key={article.id} className="content-card">
          <img src={article.thumbnail} alt={article.title} className="card-thumbnail" />
          <div className="card-content">
            <h3>{article.title}</h3>
            <p className="card-source">{article.source}</p>
            <p className="card-snippet">{article.snippet}</p>
          </div>
          <div className="card-actions">
            <button className="action-btn save-btn">Save</button>
            <button className="action-btn share-btn">Share</button>
            <button className="action-btn open-btn">Open</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentFeed;