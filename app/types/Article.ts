export interface Article {
  title: string;
  description: string;
  id: string;
  summary: string;
  content: string;
  author: string;
  publishDate: Date;
  lastModified: Date;
  category: string;
  tags: string[];
  imageUrl?: string;
  // Add other properties as needed
}