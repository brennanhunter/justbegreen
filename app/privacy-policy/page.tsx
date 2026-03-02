export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-widest text-green-700">Legal</p>
        <h1 className="text-4xl font-bold text-zinc-800">Privacy Policy</h1>
        <p className="text-sm text-zinc-400">Last updated: March 2, 2026</p>
      </div>
      <div className="w-16 h-1 bg-green-700 rounded-full" />

      <section className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
        <h2 className="text-xl font-bold text-zinc-800">Information We Collect</h2>
        <p>
          We may collect information you provide directly, such as your name and email address when signing up for our newsletter or submitting a contact form. We do not sell or share your personal data with third parties for marketing purposes.
        </p>
      </section>

      <section className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
        <h2 className="text-xl font-bold text-zinc-800">How We Use Your Information</h2>
        <p>
          Information collected is used solely to communicate with you, improve our services, and fulfill the purpose for which it was provided — including sending newsletters if you have subscribed.
        </p>
      </section>

      <section className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
        <h2 className="text-xl font-bold text-zinc-800">Data Security</h2>
        <p>
          We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. In keeping with our moral culture, we commit to honesty and transparency in how your data is handled.
        </p>
      </section>

      <section className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
        <h2 className="text-xl font-bold text-zinc-800">Third-Party Services</h2>
        <p>
          We use select third-party services such as Vercel Analytics to understand website usage. These services may collect anonymized data in accordance with their own privacy policies.
        </p>
      </section>

      <section className="flex flex-col gap-4 text-zinc-600 leading-relaxed">
        <h2 className="text-xl font-bold text-zinc-800">Contact</h2>
        <p>
          For any privacy-related questions, please contact us at{" "}
          <strong className="text-zinc-700">privacy@justbegreenmedia.com</strong>.
        </p>
      </section>
    </main>
  );
}
