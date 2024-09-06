import { UserPreferences } from '../types/UserPreferences';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../config/firebase'; // Assuming this exports the Firebase app

const db = getFirestore(app);

export async function getUserPreferences(uid: string): Promise<UserPreferences> {
  // Implement the logic to fetch user preferences
  // This is a placeholder implementation
  return { categories: ['technology', 'science'] };
}