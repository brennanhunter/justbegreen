import Image from "next/image";

export default function Footer() {
  return (
    <footer 
      className="w-full relative overflow-hidden"
      style={{
        background: 'linear-gradient(105deg, #FFF 0%, #FFF 66%, #F3F3F3 66%, #F3F3F3 100%)'
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/logos/logo.png"
              alt="Just Be Green Media"
              width={300}
              height={120}
              className="object-contain"
            />
          </div>
          
          {/* Tagline */}
          <p className="text-base font-semibold italic text-zinc-700 text-center max-w-2xl leading-relaxed">
            Striving to develop and implement logical and rational environmental initiatives that foster a more sustainable relationship between mankind and Mother Earth.
          </p>
        </div>
      </div>
    </footer>
  );
}
