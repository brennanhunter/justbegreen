export default function AccessibilityStatement() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-widest text-green-700">Legal</p>
        <h1 className="text-4xl font-bold text-zinc-800">Accessibility Statement</h1>
        <p className="text-sm text-zinc-400">Last updated: March 2, 2026</p>
      </div>
      <div className="w-16 h-1 bg-green-700 rounded-full" />

      <section className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
        <h2 className="text-xl font-bold text-zinc-800">Our Commitment</h2>
        <p>
          Just Be Green Media is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.
        </p>
      </section>

      <section className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
        <h2 className="text-xl font-bold text-zinc-800">Conformance Status</h2>
        <p>
          We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. These guidelines explain how to make web content more accessible to people with disabilities.
        </p>
      </section>

      <section className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
        <h2 className="text-xl font-bold text-zinc-800">Technical Specifications</h2>
        <p>
          This website relies on the following technologies for conformance with WCAG 2.1: HTML, CSS, JavaScript, and WAI-ARIA. These technologies are relied upon for conformance.
        </p>
      </section>

      <section className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
        <h2 className="text-xl font-bold text-zinc-800">Feedback & Contact</h2>
        <p>
          We welcome your feedback on the accessibility of this site. If you experience any accessibility barriers, please contact us so we can address the issue promptly.
        </p>
        <p>
          <strong className="text-zinc-700">Email:</strong> accessibility@justbegreenmedia.com
        </p>
      </section>
    </main>
  );
}
