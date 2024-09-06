import React from 'react';
import SearchBar from './components/SearchBar';
import ContentFeed from './components/ContentFeed';

export default function Home() {
  return (
    <div className="container mx-auto mt-20 p-4">
      <SearchBar />
      <ContentFeed />
    </div>
  );
}