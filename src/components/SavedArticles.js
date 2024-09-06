import React, { useEffect, useState, useCallback } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

function SavedArticles({ userId }) {
  const [savedArticles, setSavedArticles] = useState([]);

  const fetchSavedArticles = useCallback(async () => {
    const q = query(collection(db, "savedArticles"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const articles = querySnapshot.docs.map(doc => doc.data());
    setSavedArticles(articles);
  }, []);

  useEffect(() => {
    if (userId) {
      fetchSavedArticles();
    }
  }, [userId, fetchSavedArticles]);

  return (
    <div className="saved-articles">
      <h2>Your Saved Articles</h2>
      {savedArticles.map((article, index) => (
        <div key={index} className="article">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
}

export default SavedArticles;