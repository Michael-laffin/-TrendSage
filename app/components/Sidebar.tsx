import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-4 hidden lg:block">
      <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
      {/* Add trending topics list */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Recommendations</h2>
      {/* Add personalized recommendations */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Trend Alerts</h2>
      {/* Add trend alerts */}
    </aside>
  );
}