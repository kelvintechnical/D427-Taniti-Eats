"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// CircularMenu component - Donut/Pie Chart Style
function CircularMenu() {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);

  const menuItems = [
    {
      name: "Island Facts",
      href: "#island-facts",
      color: "fill-blue-500 dark:fill-blue-400",
      hoverColor: "fill-blue-600 dark:fill-blue-300",
      textColor: "text-white dark:text-gray-100"
    },
    {
      name: "History",
      href: "#history",
      color: "fill-green-500 dark:fill-green-400",
      hoverColor: "fill-green-600 dark:fill-green-300",
      textColor: "text-white dark:text-gray-100"
    },
    {
      name: "Introduction",
      href: "#introduction",
      color: "fill-purple-500 dark:fill-purple-400",
      hoverColor: "fill-purple-600 dark:fill-purple-300",
      textColor: "text-white dark:text-gray-100"
    },
    {
      name: "Conservation & Stability",
      href: "#conservation",
      color: "fill-orange-500 dark:fill-orange-400",
      hoverColor: "fill-orange-600 dark:fill-orange-300",
      textColor: "text-white dark:text-gray-100"
    },
    {
      name: "Getting to Taniti",
      href: "#getting-here",
      color: "fill-red-500 dark:fill-red-400",
      hoverColor: "fill-red-600 dark:fill-red-300",
      textColor: "text-white dark:text-gray-100"
    },
    {
      name: "Modern Paradise",
      href: "#modern-paradise",
      color: "fill-teal-500 dark:fill-teal-400",
      hoverColor: "fill-teal-600 dark:fill-teal-300",
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
            <div className="text-2xl font-bold text-gray-800 dark:text-white">Taniti</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Island</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
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
            About Taniti Island
          </h1>
          <p className="text-xl md:text-2xl text-balance opacity-90">
            Discover the rich history and natural wonders of our tropical
            paradise
          </p>
        </div>
      </section>

      {/* Circular Navigation Menu */}
      <CircularMenu />

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div id="introduction" className="mb-16">
            <h2 className="text-3xl font-bold text-contrast mb-6">
              Welcome to Paradise
            </h2>
            <p className="text-lg text-contrast-muted leading-relaxed mb-6">
              Taniti Island is a hidden gem nestled in the heart of the Pacific
              Ocean, where pristine natural beauty meets warm island
              hospitality. With its crystal-clear turquoise waters, powdery
              white sand beaches, and lush tropical rainforests, Taniti offers
              an unparalleled escape from the everyday world.
            </p>
            <p className="text-lg text-contrast-muted leading-relaxed">
              Our island spans 500 square kilometers of diverse landscapes, from
              dramatic volcanic peaks to serene coral lagoons. Home to a vibrant
              local culture and rich biodiversity, Taniti provides the perfect
              backdrop for both adventure seekers and those looking to unwind in
              paradise.
            </p>
          </div>

          {/* Island Facts */}
          <div id="island-facts" className="mb-16">
            <h2 className="text-3xl font-bold text-contrast mb-8">
              Island Facts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-enhanced">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-contrast">
                    Geography & Climate
                  </h3>
                  <ul className="space-y-2 text-contrast-muted">
                    <li>• Total area: 500 square kilometers</li>
                    <li>• Highest point: Mount Taniti (1,247 meters)</li>
                    <li>• Average temperature: 26°C (79°F)</li>
                    <li>• Tropical climate with dry and wet seasons</li>
                    <li>• 15 pristine beaches</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-enhanced">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-contrast">
                    Culture & People
                  </h3>
                  <ul className="space-y-2 text-contrast-muted">
                    <li>• Population: 20,000 friendly locals</li>
                    <li>• Languages: English and Tanitian</li>
                    <li>• Rich Polynesian heritage</li>
                    <li>• Traditional arts and crafts</li>
                    <li>• Sustainable tourism practices</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* History Section */}
          <div id="history" className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div
                    className="w-full h-64 bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage: `url('/traditional-taniti-village-with-cultural-heritage.jpg')`,
                    }}
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">
                    Ancient Heritage
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Taniti Island has been inhabited for over 1,000 years by
                    Polynesian settlers who arrived in traditional outrigger
                    canoes. These early inhabitants developed a sophisticated
                    society based on sustainable fishing, agriculture, and deep
                    respect for the natural environment.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/2">
                  <div
                    className="w-full h-64 bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage: `url('/modern-taniti-sustainable-tourism-development.jpg')`,
                    }}
                  />
                </div>
                <div id="modern-paradise" className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4">
                    Modern Paradise
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, Taniti Island balances modern amenities with
                    traditional values. Our commitment to sustainable tourism
                    ensures that future generations can enjoy the same pristine
                    beauty that captivates visitors today. We've carefully
                    developed eco-friendly resorts and activities that showcase
                    our natural wonders while preserving them.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conservation Efforts */}
          <div id="conservation" className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Conservation & Sustainability
            </h2>
            <div className="bg-accent/10 rounded-lg p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Taniti Island, we're committed to preserving our natural
                paradise for future generations. Our comprehensive conservation
                programs protect both marine and terrestrial ecosystems while
                supporting local communities.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Marine Protected Areas</Badge>
                <Badge variant="secondary">Coral Reef Restoration</Badge>
                <Badge variant="secondary">Renewable Energy</Badge>
                <Badge variant="secondary">Waste Reduction</Badge>
                <Badge variant="secondary">Local Community Support</Badge>
                <Badge variant="secondary">Wildlife Conservation</Badge>
              </div>
            </div>
          </div>

          {/* Getting Here */}
          <div id="getting-here">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Getting to Taniti
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">By Air</h3>
                  <p className="text-muted-foreground mb-4">
                    Taniti International Airport (TNI) welcomes flights from
                    major Pacific hubs including Honolulu, Sydney, and Los
                    Angeles.
                  </p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Daily flights from Honolulu (3.5 hours)</li>
                    <li>• Weekly flights from Sydney (5 hours)</li>
                    <li>• Bi-weekly flights from Los Angeles (6 hours)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">By Sea</h3>
                  <p className="text-muted-foreground mb-4">
                    Arrive in style aboard luxury cruise ships or private yachts
                    at our modern marina facilities.
                  </p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Weekly cruise ship arrivals</li>
                    <li>• Full-service marina</li>
                    <li>• Customs and immigration on-site</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
