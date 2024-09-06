import React, { useState } from 'react';
import { shareInsights } from '../services/sharingService';

export default function ShareInsights({ insights }) {
  const [shareUrl, setShareUrl] = useState('');

  const handleShare = async () => {
    const url = await shareInsights(insights);
    setShareUrl(url);
  };

  return (
    <div>
      <button onClick={handleShare}>Share Insights</button>
      {shareUrl && (
        <div>
          <p>Share this URL: {shareUrl}</p>
          <button onClick={() => navigator.clipboard.writeText(shareUrl)}>
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
}