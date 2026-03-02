"use client";

import { useState } from "react";
import Image from "next/image";

export default function NewsletterSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to kit.com
    setSubmitted(true);
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <div
        className="rounded-l-2xl px-5 py-6 shadow-xl flex flex-col gap-3 w-[200px]"
        style={{ background: "linear-gradient(160deg, #ffffff 0%, #f3f3f3 100%)" }}
      >
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logos/logo.png"
            alt="Just Be Green Media"
            width={240}
            height={240}
            className="object-contain"
          />
        </div>
        {/* Slogan */}
        <p className="text-xs italic text-zinc-500 text-center leading-snug">
          A greener world starts with staying informed.
        </p>
        <p className="text-sm font-bold text-zinc-800 uppercase tracking-wide leading-tight text-center">
          Sign Up for Our Newsletter
        </p>
        {submitted ? (
          <p className="text-sm text-green-700 font-semibold text-center">Thanks for signing up!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-green-700 px-3 py-2 text-sm font-semibold text-white hover:bg-green-800 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
