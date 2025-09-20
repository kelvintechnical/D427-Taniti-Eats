"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState } from "react";

// CircularMenu component - Donut/Pie Chart Style
function CircularMenu() {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  const menuItems = [
    {
      name: "Beaches",
      href: "#beaches",
      color: "fill-blue-500 dark:fill-blue-400",
      hoverColor: "fill-blue-600 dark:fill-blue-300",
      textColor: "text-white dark:text-gray-100"
    },
    {
      name: "Hiking",
      href: "#hiking",
      color: "fill-green-500 dark:fill-green-400",
      hoverColor: "fill-green-600 dark:fill-green-300",
      textColor: "text-white dark:text-gray-100"
    },
    {
      name: "Culture",
      href: "#culture",
      color: "fill-purple-500 dark:fill-purple-400",
      hoverColor: "fill-purple-600 dark:fill-purple-300",
      textColor: "text-white dark:text-gray-100"
    },
    {
      name: "Food",
      href: "#food",
      color: "fill-orange-500 dark:fill-orange-400",
      hoverColor: "fill-orange-600 dark:fill-orange-300",
      textColor: "text-white dark:text-gray-100"
    },
    {
      name: "Water Sports",
      href: "#water-sports",
      color: "fill-teal-500 dark:fill-teal-400",
      hoverColor: "fill-teal-600 dark:fill-teal-300",
      textColor: "text-white dark:text-gray-100"
    },
    {
      name: "Adventure",
      href: "#adventure",
      color: "fill-red-500 dark:fill-red-400",
      hoverColor: "fill-red-600 dark:fill-red-300",
      textColor: "text-white dark:text-gray-100"
    }
  ];

  const handleSegmentClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center my-20 min-h-[600px]">
      {/* Donut/Pie Chart Menu */}
      <div className="relative w-96 h-96">
        <svg
          width="384"
          height="384"
          viewBox="0 0 384 384"
          className="absolute inset-0"
        >
          <defs>
            <pattern id="donut-pattern" patternUnits="userSpaceOnUse" width="384" height="384">
              <circle cx="192" cy="192" r="120" fill="white" />
            </pattern>
          </defs>
          
          {menuItems.map((item, index) => {
            const anglePerSegment = 360 / menuItems.length;
            const startAngle = index * anglePerSegment - 90; // Start from top
            const endAngle = (index + 1) * anglePerSegment - 90;
            
            // Convert angles to radians
            const startAngleRad = (startAngle * Math.PI) / 180;
            const endAngleRad = (endAngle * Math.PI) / 180;
            
            // Calculate arc path
            const radius = 150;
            const innerRadius = 80;
            const centerX = 192;
            const centerY = 192;
            
            const x1 = centerX + radius * Math.cos(startAngleRad);
            const y1 = centerY + radius * Math.sin(startAngleRad);
            const x2 = centerX + radius * Math.cos(endAngleRad);
            const y2 = centerY + radius * Math.sin(endAngleRad);
            
            const x3 = centerX + innerRadius * Math.cos(endAngleRad);
            const y3 = centerY + innerRadius * Math.sin(endAngleRad);
            const x4 = centerX + innerRadius * Math.cos(startAngleRad);
            const y4 = centerY + innerRadius * Math.sin(startAngleRad);
            
            const largeArcFlag = anglePerSegment > 180 ? 1 : 0;
            
            const pathData = [
              `M ${x1} ${y1}`,
              `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              `L ${x3} ${y3}`,
              `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4}`,
              'Z'
            ].join(' ');
            
            return (
              <path
                key={item.name}
                d={pathData}
                className={`cursor-pointer transition-all duration-300 ${
                  hoveredSegment === index ? item.hoverColor : item.color
                } hover:scale-105`}
                onMouseEnter={() => setHoveredSegment(index)}
                onMouseLeave={() => setHoveredSegment(null)}
                onClick={() => handleSegmentClick(item.href)}
                style={{ 
                  filter: hoveredSegment === index ? 'brightness(1.2) drop-shadow(0 0 8px rgba(255,255,255,0.3))' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }}
              />
            );
          })}
        </svg>
        
        {/* Text Labels */}
        {menuItems.map((item, index) => {
          const anglePerSegment = 360 / menuItems.length;
          const labelAngle = (index * anglePerSegment + anglePerSegment / 2 - 90) * Math.PI / 180;
          const labelRadius = 115; // Position between inner and outer radius
          const labelX = 192 + labelRadius * Math.cos(labelAngle);
          const labelY = 192 + labelRadius * Math.sin(labelAngle);
          
          return (
            <div
              key={`label-${item.name}`}
              className="absolute pointer-events-none"
              style={{
                left: labelX - 60,
                top: labelY - 20,
                width: 120,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `rotate(${labelAngle * 180 / Math.PI + 90}deg)`,
              }}
            >
              <span className={`text-xs font-semibold ${item.textColor} text-center leading-tight`}>
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
      
      {/* Center Logo/Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-white dark:bg-gray-800 rounded-full w-32 h-32 flex items-center justify-center shadow-lg dark:shadow-2xl border border-gray-200 dark:border-gray-600">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">Activities</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Taniti</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhatToPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/taniti-island-aerial-view-showing-lush-landscape.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-300" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            What to Do on Taniti
          </h1>
          <p className="text-xl md:text-2xl text-balance opacity-90">
            Explore the best activities, adventures, and experiences our
            tropical paradise has to offer.
          </p>
        </div>
      </section>

      {/* Circular Navigation Menu */}
      <CircularMenu />

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Beaches Section */}
          <div id="beaches">
            <h2 className="text-3xl font-bold text-contrast mb-6">Beaches</h2>
            <p className="text-lg text-contrast-muted leading-relaxed">
              From powdery white sands to hidden coves, Taniti's beaches are
              perfect for swimming, snorkeling, or just lounging in the sun.
              Each beach has its own unique charm, whether you want solitude or
              lively atmosphere.
            </p>
          </div>

          {/* Hiking Section */}
          <div id="hiking">
            <h2 className="text-3xl font-bold text-contrast mb-6">
              Hiking Adventures
            </h2>
            <p className="text-lg text-contrast-muted leading-relaxed">
              Discover volcanic peaks and lush rainforest trails with guided or
              solo hikes. Don't miss sunrise from Mount Taniti for breathtaking
              views of the island.
            </p>
          </div>

          {/* Culture Section */}
          <div id="culture">
            <h2 className="text-3xl font-bold text-contrast mb-6">
              Cultural Experiences
            </h2>
            <p className="text-lg text-contrast-muted leading-relaxed">
              Dive into Polynesian heritage through local arts, dances,
              festivals, and traditional village visits.
            </p>
          </div>

          {/* Food Section */}
          <div id="food">
            <h2 className="text-3xl font-bold text-contrast mb-6">
              Local Cuisine
            </h2>
            <p className="text-lg text-contrast-muted leading-relaxed">
              Enjoy fresh seafood, tropical fruits, and authentic dishes
              prepared by local chefs. Food markets and beachfront restaurants
              offer something for every palate.
            </p>
          </div>

          {/* Water Sports Section */}
          <div id="water-sports">
            <h2 className="text-3xl font-bold text-contrast mb-6">
              Water Sports
            </h2>
            <p className="text-lg text-contrast-muted leading-relaxed">
              Experience the crystal-clear waters with snorkeling, diving, kayaking, 
              and paddleboarding. Our coral reefs are home to vibrant marine life 
              perfect for underwater exploration.
            </p>
          </div>

          {/* Adventure Section */}
          <div id="adventure">
            <h2 className="text-3xl font-bold text-contrast mb-6">
              Adventure Activities
            </h2>
            <p className="text-lg text-contrast-muted leading-relaxed">
              Get your adrenaline pumping with zip-lining through the rainforest, 
              volcano tours, and ATV adventures. Perfect for thrill-seekers looking 
              for an unforgettable island experience.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
