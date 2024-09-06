import React from 'react';

export interface Article {
  id: number;
  title: string;
  source: string;
  snippet: string;
}

export default function ContentCard({ article }: { article: Article }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
        <p className="text-sm text-gray-400 mb-2">{article.source}</p>
        <p className="text-gray-300 mb-4">{article.snippet}</p>
        <div className="flex justify-between">
          <button className="text-blue-400 hover:text-blue-300">Save</button>
          <button className="text-purple-400 hover:text-purple-300">Share</button>
          <button className="text-green-400 hover:text-green-300">Open</button>
        </div>
      </div>
    </div>
  );
}