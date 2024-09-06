import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { updateUserPreferences, getUserPreferences } from '../services/userService';

export default function Settings() {
  const { user } = useAuth();
  const [preferences, setPreferences] = useState({
    categories: [],
    notificationFrequency: 'daily',
  });

  useEffect(() => {
    async function loadPreferences() {
      if (user) {
        const userPreferences = await getUserPreferences(user.uid);
        setPreferences(userPreferences);
      }
    }
    loadPreferences();
  }, [user]);

  const handlePreferenceChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPreferences(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? (checked 
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value))
        : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) { // Add null check for user
      await updateUserPreferences(user.uid, preferences);
      alert('Preferences updated successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Preferences</h2>
      <div>
        <h3>Categories</h3>
        {['Technology', 'Business', 'Sports', 'Entertainment'].map(category => (
          <label key={category}>
            <input
              type="checkbox"
              name="categories"
              value={category}
              checked={preferences.categories.includes(category)}
              onChange={handlePreferenceChange}
            />
            {category}
          </label>
        ))}
      </div>
      <div>
        <h3>Notification Frequency</h3>
        <select
          name="notificationFrequency"
          value={preferences.notificationFrequency}
          onChange={handlePreferenceChange}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <button type="submit">Save Preferences</button>
    </form>
  );
}