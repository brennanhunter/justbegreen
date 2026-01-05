import Image from "next/image";

export default function TVGrid() {
  // Create array of 30 screens
  const screens = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <section 
      className="w-full py-16 px-4"
      style={{
        background: 'linear-gradient(135deg, #61D095 0%, #439775 100%)'
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-5 gap-0">
          {screens.map((screen) => (
            <div
              key={screen}
              className="relative aspect-video bg-black overflow-hidden border border-black"
            >
              <Image
                src="/images/placeholder.png"
                alt={`Screen ${screen}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 20vw, 15vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
