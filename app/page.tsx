'use client';

import { useState } from "react";

export default function Home() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <main>
      {/* Our Clientelle Button Bar */}
      <section 
        className="w-full py-8 px-4"
        style={{
          background: 'linear-gradient(135deg, #61D095 0%, #439775 100%)'
        }}
      >
        <div className="mx-auto max-w-7xl text-center">
          <button 
            onClick={() => setShowComingSoon(!showComingSoon)}
            className="inline-block text-white text-lg font-normal hover:underline transition-all cursor-pointer"
          >
            Our Clientelle
          </button>
        </div>
      </section>

      {/* Coming Soon Message */}
      {showComingSoon && (
        <section className="w-full bg-gray-50 py-16 px-4">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h2>
            <p className="text-xl text-gray-600">Site Under Development</p>
          </div>
        </section>
      )}

      {/* White Background Section */}
      <section className="w-full bg-white py-48">
        <div className="mx-auto max-w-7xl px-4">
          {/* Future content goes here */}
        </div>
      </section>
    </main>
  );
}
