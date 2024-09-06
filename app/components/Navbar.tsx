import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <Image src="/logo.png" alt="TrendSage Logo" width={120} height={40} />
        </Link>
        <div className="space-x-4">
          <Link href="/dashboard" className="text-blue-400 hover:text-blue-300">
            <span>Dashboard</span>
          </Link>
          <Link href="/saved" className="text-purple-400 hover:text-purple-300">
            <span>Saved Content</span>
          </Link>
          <Link href="/insights" className="text-green-400 hover:text-green-300">
            <span>Trend Insights</span>
          </Link>
          <Link href="/reports" className="text-blue-400 hover:text-blue-300">
            <span>Reports</span>
          </Link>
          <Link href="/settings" className="text-purple-400 hover:text-purple-300">
            <span>Settings</span>
          </Link>
          {/* Add user profile dropdown here */}
        </div>
      </div>
    </nav>
  );
}