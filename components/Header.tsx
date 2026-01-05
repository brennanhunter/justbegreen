import Image from "next/image";

export default function Header() {
  return (
    <header 
      className="w-full relative overflow-hidden"
      style={{
        background: 'linear-gradient(105deg, #FFF 0%, #FFF 66%, #F3F3F3 66%, #F3F3F3 100%)'
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center" style={{ height: '146px' }}>
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/logos/logo.png"
              alt="Just Be Green Media"
              width={400}
              height={160}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
