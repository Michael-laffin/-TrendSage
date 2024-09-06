import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { auth } from '../firebase'; // Import auth from your firebase configuration

function Navigation({ user }) {
  return (
    <nav className="navigation">
      <div className="nav-logo">
        <img src="/logo.svg" alt="TrendSage Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/saved">Saved Content</Link></li>
        <li><Link to="/insights">Trend Insights</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
      <div className="user-profile">
        {user ? (
          <div className="dropdown">
            <img src={user.photoURL} alt={user.displayName} />
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <button onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navigation;