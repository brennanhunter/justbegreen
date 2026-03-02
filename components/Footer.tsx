import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-gray-500 py-6 px-8 flex flex-col items-center gap-2">
      <Image src="/logos/logo.png" alt="Just Be Green Media LLC" width={120} height={48} className="h-auto" />
      <p className="text-xs">&copy; {year} Just Be Green Media LLC. All rights reserved.</p>
    </footer>
  );
}
