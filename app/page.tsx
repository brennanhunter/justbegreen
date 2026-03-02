'use client';

import { useState } from "react";
import OurMission from "@/components/OurMission";

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

      <OurMission />

      <section className="w-full py-48" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)" }}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">What We Do</h2>
          <p className="text-green-700 max-w-2xl mx-auto text-lg">Placeholder content — this section will describe our services and environmental initiatives.</p>
        </div>
      </section>

      <section className="w-full bg-zinc-100 py-48">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-zinc-800 mb-4">Our Impact</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">Placeholder content — statistics and stories about the positive change we've helped create.</p>
        </div>
      </section>

      <section className="w-full py-48" style={{ background: "linear-gradient(135deg, #61D095 0%, #439775 100%)" }}>
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Involved</h2>
          <p className="text-green-100 max-w-2xl mx-auto text-lg">Placeholder content — learn how you can partner with us and make a difference.</p>
        </div>
      </section>

      <section className="w-full bg-white py-48">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-zinc-800 mb-4">Latest News</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">Placeholder content — recent updates, blog posts, and environmental news.</p>
        </div>
      </section>
    </main>
  );
}
