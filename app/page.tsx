import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Our Clientelle Link Bar */}
      <section 
        className="w-full py-8 px-4"
        style={{
          background: 'linear-gradient(135deg, #61D095 0%, #439775 100%)'
        }}
      >
        <div className="mx-auto max-w-7xl text-center">
          <Link 
            href="/our-clientelle"
            className="inline-block text-white text-3xl font-bold hover:underline transition-all"
          >
            Our Clientelle
          </Link>
        </div>
      </section>

      {/* White Background Section */}
      <section className="w-full bg-white py-48">
        <div className="mx-auto max-w-7xl px-4">
          {/* Future content goes here */}
        </div>
      </section>
    </main>
  );
}
