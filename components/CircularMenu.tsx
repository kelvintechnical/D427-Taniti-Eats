"use client";

import { useState } from "react";

export function CircularMenu() {
  const [active, setActive] = useState<string | null>(null);

  const menuItems = [
    {
      name: "Beaches",
      content:
        "Taniti has 15 pristine beaches perfect for swimming, snorkeling, and relaxing.",
    },
    {
      name: "Hiking",
      content:
        "Explore volcanic peaks and rainforest trails with guided or solo hikes.",
    },
    {
      name: "Culture",
      content:
        "Experience Polynesian heritage through local arts, dances, and festivals.",
    },
    {
      name: "Food",
      content:
        "Taste traditional dishes featuring fresh seafood and tropical fruits.",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center my-20">
      {/* Circle Menu */}
      <div className="relative w-96 h-96 rounded-full border-4 border-gray-300 flex items-center justify-center">
        {menuItems.map((item, index) => {
          const angle = (360 / menuItems.length) * index;
          return (
            <div
              key={item.name}
              onMouseEnter={() => setActive(item.content)}
              onMouseLeave={() => setActive(null)}
              className="absolute w-28 h-28 flex items-center justify-center rounded-full bg-green-500 text-white font-semibold cursor-pointer hover:bg-green-700 transition-colors text-center px-2"
              style={{
                transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`,
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>

      {/* Active Content */}
      {active && (
        <div className="mt-8 p-6 bg-white rounded shadow-lg max-w-lg text-center text-gray-700">
          {active}
        </div>
      )}
    </div>
  );
}
