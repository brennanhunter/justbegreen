"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { tvSlots, TVSlot } from "./tvSlotsData";

export default function TVGrid() {
  const [selectedSlot, setSelectedSlot] = useState<TVSlot | null>(null);

  return (
    <section 
      className="w-full py-16 px-4"
      style={{
        background: 'linear-gradient(135deg, #61D095 0%, #439775 100%)'
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {tvSlots.map((slot) => {
            const CardContent = (
              <>
                {/* Thumbnail */}
                <div className="p-3">
                  <div className="relative aspect-video bg-black overflow-hidden rounded-md">
                    <Image
                      src={slot.image}
                      alt={slot.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    />
                    {slot.showLogo && (
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
                </div>
                
                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {slot.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {slot.description}
                  </p>
                </div>
              </>
            );

            const cardClasses = "flex flex-col bg-transparent rounded-lg shadow-lg hover:shadow-xl hover:bg-green-50 transition-all duration-300 overflow-hidden cursor-pointer";

            // If slot has modal, render as button
            if (slot.hasModal) {
              return (
                <div
                  key={slot.id}
                  className={cardClasses}
                  onClick={() => setSelectedSlot(slot)}
                >
                  {CardContent}
                </div>
              );
            }

            // If slot has link, render as Link
            return slot.link ? (
              <Link
                key={slot.id}
                href={slot.link}
                className={cardClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CardContent}
              </Link>
            ) : (
              <div
                key={slot.id}
                className={cardClasses}
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedSlot && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedSlot(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedSlot.title}</h2>
                  <p className="text-gray-600">{selectedSlot.description}</p>
                </div>
                <button
                  onClick={() => setSelectedSlot(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Image */}
              <div className="relative aspect-video bg-black overflow-hidden rounded-lg mb-6">
                <Image
                  src={selectedSlot.image}
                  alt={selectedSlot.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>

              {selectedSlot.link && (
                <a
                  href={selectedSlot.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors mb-6"
                >
                  Visit Site
                </a>
              )}

              {selectedSlot.divisions && selectedSlot.divisions.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Divisions</h3>
                  <ul className="grid grid-cols-2 gap-4">
                    {selectedSlot.divisions.map((division, index) => {
                      const imagePath = `/images/industries/${division.name.toLowerCase().replace(/\s+/g, '-')}.png`;
                      
                      return (
                        <li key={index}>
                          {division.link ? (
                            <a
                              href={division.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block relative aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group"
                            >
                              <Image
                                src={division.image}
                                alt={division.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 320px"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white font-bold text-xl text-center drop-shadow-lg px-4">
                                  {division.name}
                                </span>
                              </div>
                            </a>
                          ) : (
                            <div className="block relative aspect-video rounded-lg overflow-hidden shadow-md">
                              <Image
                                src={division.image}
                                alt={division.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 320px"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white font-bold text-xl text-center drop-shadow-lg px-4">
                                  {division.name}
                                </span>
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
