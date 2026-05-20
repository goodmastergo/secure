"use client";

import { useState, useEffect } from 'react';
import KMAppPage from '../components/KMAppPage';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // During Server-Side Rendering (SSR), show only the empty layout shell.
  // This ensures that Ctrl+U (View Source) remains blank of content.
  if (!mounted) {
    return (
      <>
        <div className="header-decoration"></div>
        <div id="star-container"></div>
      </>
    );
  }

  // Once mounted on the client, render the interactive page.
  return <KMAppPage />;
}
