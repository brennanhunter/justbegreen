'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      heading: "Navigation",
      links: ["HOME", "NEWSROOM", "CONTACT"],
    },
    {
      heading: "Industries",
      links: ["SHRIMP", "FISH FOODS", "HATCHERY", "SEEDS", "FOODS", "FERTILIZER", "FABRICATORS", "HEMP", "PROCESSING", "WATER", "CO-OP"],
    },
    {
      heading: "JustBeGreen",
      links: ["WORLD", "VILLAGES", "AMERICA", "SMART TECH", "ACADEMY", "BUSINESS", "DEVELOPERS", "ENERGY", "FARMS", "LODGING", "CHEROKEE PATH", "WORLD NEWS"],
    },
  ];

  return (
    <motion.footer
      className="w-full px-12 py-12"
      animate={{ backgroundColor: ["#c8e6c9", "#81c784", "#c8e6c9"] }}
      transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between gap-12">
        {/* Logo + copyright */}
        <div className="flex flex-col items-start gap-4">
          <Image src="/logos/logo.png" alt="Just Be Green Media" width={160} height={160} className="object-contain" />
          <p className="text-xs text-black">&copy; {year} Just Be Green Media LLC.<br />All rights reserved.</p>
        </div>

        {/* Link columns */}
        <div className="flex flex-row gap-12 sm:gap-16">
          {cols.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <p className="text-sm font-bold text-black">{col.heading}</p>
              <div className="w-10 h-[2px] bg-black mb-1" />
              {col.links.map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="text-xs text-black hover:text-zinc-600 transition-colors font-medium tracking-wide"
                >
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legal bar */}
      <div className="mx-auto max-w-7xl mt-10 pt-6 border-t border-black/20 flex flex-wrap justify-center gap-1 text-xs text-black">
        <Link href="/accessibility" className="hover:underline">Accessibility Statement</Link>
        <span className="text-black/40">|</span>
        <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        <span className="text-black/40">|</span>
        <Link href="/cookie-policy" className="hover:underline">Cookie Policy</Link>
      </div>
    </motion.footer>
  );
}
