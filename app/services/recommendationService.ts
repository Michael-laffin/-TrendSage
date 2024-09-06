import { db } from '../config/firebase';
import { fetchNews } from './contentService';

export async function getRecommendedContent(userId: string) {
  const userPreferences = await getUserPreferences(userId);
  const savedArticles = await getSavedArticles(userId);
  
  // Fetch news based on user preferences
  const news = await fetchNews(userPreferences.categories);
  
  // Simple recommendation algorithm (can be improved with ML)
  const recommendedArticles = news.filter(article => 
    !savedArticles.some(savedArticle => savedArticle.title === article.title)
  );

  return recommendedArticles.slice(0, 10); // Return top 10 recommendations
}

async function getUserPreferences(userId: string) {
  const userDoc = await db.collection('users').doc(userId).get();
  return userDoc.data()?.preferences || {}; // Add null check and default value
}

async function getSavedArticles(userId: string) {
  const savedArticlesSnapshot = await db
    .collection('savedArticles')
    .where('userId', '==', userId)
    .get();
  return savedArticlesSnapshot.docs.map(doc => doc.data().article);
}