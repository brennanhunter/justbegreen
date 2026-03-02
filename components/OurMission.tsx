"use client";

import { useState } from "react";

export default function OurMission() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: attach form submission
    setSubmitted(true);
  };

  const cards = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9M15 3c2.5 1.5 4.5 4 4.5 7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        </svg>
      ),
      title: "Sustainable Growth",
      body: "We partner with businesses to develop strategies that prioritize long-term ecological balance alongside financial performance — proving that doing good and doing well go hand in hand.",
      offset: "mt-0",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      title: "Conscious Impact",
      body: "Every initiative we champion is measured not just in dollars, but in its real-world effect on communities and ecosystems. Impact is our bottom line.",
      offset: "mt-10",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Rational Stewardship",
      body: "We cut through greenwashing with logic-driven environmental initiatives that are practical, scalable, and rooted in science — fostering a smarter relationship between industry and nature.",
      offset: "mt-20",
    },
  ];

  return (
    <section
      className="w-full py-24 px-4 relative overflow-hidden"
      style={{
        background: "#f4f4f4",
      }}
    >
      <div className="mx-auto max-w-7xl flex flex-col gap-16">
        {/* Heading block */}
        <div className="flex flex-col gap-6 items-center text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-green-700">
            Our Mission
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-800 leading-tight">
            Practicing <span className="text-green-700">Conscious Economics</span>
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            We believe that every economic decision carries an environmental consequence. By practicing conscious economics — rooted in moral culture where we don't lie, cheat, or steal — we align financial growth with ecological responsibility, making sustainability not just a value, but a standard.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed">
            From the enterprises we support to the industries we serve, our mission is to demonstrate that profitability and planetary stewardship are not opposites — they are partners. Integrity is the foundation of everything we do.
          </p>
          <div className="w-16 h-1 bg-green-700 rounded-full mt-2 mx-auto" />
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <button className="px-8 py-3 rounded-lg bg-green-700 text-white font-semibold text-base hover:bg-green-800 transition-colors shadow-md">
              Learn More
            </button>
            <button
              onClick={() => { setShowModal(true); setSubmitted(false); }}
              className="px-8 py-3 rounded-lg border-2 border-green-700 text-green-700 font-semibold text-base hover:bg-green-700 hover:text-white transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Staggered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`${card.offset} rounded-2xl bg-white shadow-xl border-t-4 border-green-600 p-8 flex flex-col gap-4 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-16 h-16 rounded-2xl bg-green-700 flex items-center justify-center shadow-md">
                <div className="text-white">{card.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-zinc-800">{card.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">{card.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 flex flex-col gap-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-1">Get In Touch</p>
              <h3 className="text-2xl font-bold text-zinc-800">Contact Us</h3>
            </div>
            {submitted ? (
              <p className="text-green-700 font-semibold text-center py-8">Thank you! We'll be in touch soon.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-zinc-600">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-lg border border-zinc-300 px-4 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-zinc-600">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="rounded-lg border border-zinc-300 px-4 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-zinc-600">Company <span className="text-zinc-400 font-normal">(optional)</span></label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="rounded-lg border border-zinc-300 px-4 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-zinc-600">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="rounded-lg border border-zinc-300 px-4 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-700 py-3 text-white font-semibold hover:bg-green-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

