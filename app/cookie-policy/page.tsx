export default function CookiePolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-widest text-green-700">Legal</p>
        <h1 className="text-4xl font-bold text-zinc-800">Cookie Policy</h1>
        <p className="text-sm text-zinc-400">Last updated: March 2, 2026</p>
      </div>
      <div className="w-16 h-1 bg-green-700 rounded-full" />

      <section className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
        <h2 className="text-xl font-bold text-zinc-800">What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently and to provide information to website owners.
        </p>
      </section>

      <section className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
        <h2 className="text-xl font-bold text-zinc-800">How We Use Cookies</h2>
        <p>
          We use cookies to understand how visitors interact with our site, improve performance, and ensure a better experience. We do not use cookies to track you across third-party websites or serve targeted advertisements.
        </p>
      </section>

      <section className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
        <h2 className="text-xl font-bold text-zinc-800">Types of Cookies We Use</h2>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li><strong className="text-zinc-700">Essential cookies:</strong> Necessary for the website to function properly.</li>
          <li><strong className="text-zinc-700">Analytics cookies:</strong> Help us understand how visitors use the site (e.g., Vercel Analytics).</li>
        </ul>
      </section>

      <section className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
        <h2 className="text-xl font-bold text-zinc-800">Managing Cookies</h2>
        <p>
          You can control and delete cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of this website.
        </p>
      </section>

      <section className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
        <h2 className="text-xl font-bold text-zinc-800">Contact</h2>
        <p>
          For any cookie-related questions, please reach out at{" "}
          <strong className="text-zinc-700">privacy@justbegreenmedia.com</strong>.
        </p>
      </section>
    </main>
  );
}
