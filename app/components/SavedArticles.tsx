import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs, DocumentData } from 'firebase/firestore';

interface SavedArticlesProps {
  userId: string;
}

async function fetchSavedArticles(userId: string): Promise<DocumentData[]> {
  if (!userId) return [];
  
  const q = query(collection(db, "savedArticles"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
}

export default function SavedArticles({ userId }: SavedArticlesProps) {
  const [savedArticles, setSavedArticles] = useState<DocumentData[]>([]);

  useEffect(() => {
    fetchSavedArticles(userId).then(setSavedArticles);
  }, [userId]);

  return (
    <div className="saved-articles">
      <h2>Your Saved Articles</h2>
      {(Array.isArray(savedArticles) ? savedArticles : []).map((article: any, index: number) => (
        <div key={index} className="article">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
}