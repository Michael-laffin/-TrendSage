import React from 'react';

export default function SearchBar() {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search for topics or trends..."
        className="w-full max-w-2xl mx-auto block p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}