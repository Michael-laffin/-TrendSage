// User related types
export interface User {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
}

export interface UserPreferences {
  categories: string[];
  notificationFrequency: 'daily' | 'weekly' | 'monthly';
}

// Article related types
export interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
  content: string;
  category: string;
}

// Trend related types
export interface TrendDataPoint {
  date: string;
  value: number;
}

export interface Trend {
  id: string;
  name: string;
  category: string;
  data: TrendDataPoint[];
  isSignificant: boolean;
}

// Insight related types
export interface Insight {
  id: string;
  trendId: string;
  content: string;
  generatedAt: string;
}

// Subscription related types
export type SubscriptionTier = 'free' | 'premium' | 'enterprise';

export interface Subscription {
  userId: string;
  tier: SubscriptionTier;
  startDate: string;
  endDate: string;
}

// API response types
export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface TrendApiResponse {
  status: string;
  data: Trend[];
}

// Function parameter types
export interface FetchNewsParams {
  categories: string[];
  page?: number;
  pageSize?: number;
}

export interface GenerateInsightsParams {
  trendData: TrendDataPoint[];
  additionalContext?: string;
}

// State types
export interface AppState {
  user: User | null;
  preferences: UserPreferences | null;
  articles: Article[];
  trends: Trend[];
  insights: Insight[];
  isLoading: boolean;
  error: string | null;
}