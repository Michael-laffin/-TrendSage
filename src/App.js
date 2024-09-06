import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { auth } from './firebase';
import Navigation from './components/Navigation';
// Remove the unused import
// import ContentFeed from './components/ContentFeed';
import TrendingSidebar from './components/TrendingSidebar';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <h1>TrendSage App</h1>
          <Navigation user={user} />
          <main className="main-content">
            <div className="search-bar">
              <input type="text" placeholder="Search for topics or trends" />
            </div>
            <div className="content-wrapper">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                {/* Add more routes as needed */}
              </Routes>
              <TrendingSidebar />
            </div>
          </main>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
