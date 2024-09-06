import { db } from '../config/firebase';

export async function saveArticle(userId: string, article: any) {
  await db.collection('savedArticles').add({
    userId,
    article,
    savedAt: new Date(),
  });
}

export async function generateReport(userId: string) {
  const savedArticles = await db
    .collection('savedArticles')
    .where('userId', '==', userId)
    .get();

  // Generate report logic here
  // You can use the AI service to summarize the articles
  // Return the generated report
  return "Report placeholder"; // Add a return statement
}