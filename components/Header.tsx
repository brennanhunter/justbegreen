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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/logos/logo-llc.png"
              alt="Just Be Green Media"
              width={160}
              height={160}
              priority
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
