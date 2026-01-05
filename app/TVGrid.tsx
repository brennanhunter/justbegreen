import Image from "next/image";

export default function TVGrid() {
  // Create array of 30 screens
  const screens = Array.from({ length: 30 }, (_, i) => i + 1);
  
  // Select which screens show the home image with logo overlay
  const homeScreens = [3, 7, 12, 15, 19, 23, 28];

  return (
    <section 
      className="w-full py-16 px-4"
      style={{
        background: 'linear-gradient(135deg, #61D095 0%, #439775 100%)'
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-5 gap-0">
          {screens.map((screen) => {
            const showHome = homeScreens.includes(screen);
            
            return (
              <div
                key={screen}
                className="relative aspect-video bg-black overflow-hidden border border-black"
              >
                <Image
                  src={showHome ? "/images/justbegreenhome.jpg" : "/images/placeholder.png"}
                  alt={`Screen ${screen}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 20vw, 15vw"
                />
                {showHome && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative backdrop-blur-sm bg-white/20 rounded-lg p-4 border border-white/30 shadow-xl">
                      <Image
                        src="/logos/logo.png"
                        alt="Logo"
                        width={200}
                        height={80}
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
