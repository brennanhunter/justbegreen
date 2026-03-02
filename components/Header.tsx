import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header 
      className="w-full relative overflow-hidden"
      style={{
        background: 'linear-gradient(105deg, #FFF 0%, #FFF 66%, #F3F3F3 66%, #F3F3F3 100%)'
      }}
    >
      <div className="w-full pl-[50px] pr-[50px]">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/logos/logo.png"
              alt="Just Be Green Media"
              width={240}
              height={240}
              priority
              className="object-contain"
            />
          </Link>
          {/* Nav */}
          <nav className="flex items-center gap-8">
            <Link href="/enterprises" className="text-base font-semibold text-zinc-700 hover:text-green-700 transition-colors">
              ENTERPRISES
            </Link>
            <Link href="/industries" className="text-base font-semibold text-zinc-700 hover:text-green-700 transition-colors">
              INDUSTRIES
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
