"use client";

import { Button } from "@/components/ui/button";
import {
  Play,
  Users,
  Trophy,
  Sparkles,
  Video,
  Bell,
  ChevronRight,
  Crown,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const meetingLinks = [
    {
      href: "https://meet.google.com/vjj-cfpx-dav?pli=1",
      icon: Video,
      label: "G-MEET",
      bg: "from-blue-500 to-indigo-600",
    },
    {
      href: "https://meet.jit.si/TelanganaChessAcademy",
      icon: Play,
      label: "START CALL",
      bg: "from-cyan-500 to-sky-600",
    },
    {
      href: "https://meet.google.com/wuk-nfie-mgx",
      icon: Play,
      label: "Call Naresh",
      bg: "from-purple-500 to-fuchsia-600",
    },
    {
      href: "https://meet.google.com/atu-ziid-ojg",
      icon: Sparkles,
      label: "TCS Meeting",
      bg: "from-emerald-500 to-teal-600",
    },
    {
      href: "https://meet.google.com/uux-vyxa-pgq",
      icon: Bell,
      label: "BCA MEETING",
      bg: "from-green-500 to-lime-600",
    },
    {
      href: "https://meet.google.com/mxj-uwyj-vzp",
      icon: Bell,
      label: "Call Rohith",
      bg: "from-orange-500 to-red-600",
    },
  ];

  const carouselImages = ["/slider1.jpg", "/slider3.jpg", "/hero-5.jpg", "/hero.jpeg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white md:pt-25 pt-30">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: `radial-gradient(#e2e8f0 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }} />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10">
            {/* Academy Title */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 animate-bounce-slow">
                <Crown className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Certified FIDE Coaching</span>
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-4xl font-black text-slate-900 tracking-tighter leading-none">
                TELANGANA CHESS {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">SCHOOL</span>
              </h1>
            </div>

            {/* Primary Action Buttons (Styled from Block 1) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold h-16 px-8 rounded-2xl shadow-xl transition-all duration-300 text-lg group bg-white/80 w-full sm:w-auto"
              >
                <a href="https://telanganachessacademy.com/tournaments/" target="_blank">
                  <Trophy className="w-5 h-5 mr-2" />
                  EVENTS & TOURNAMENTS
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold h-16 px-8 rounded-2xl shadow-2xl transition-all duration-300 text-lg group animate-pulse-glow w-full sm:w-auto"
              >
                <a href="https://coaching.telanganachessacademy.com/login" target="_blank">
                  <Users className="w-5 h-5 mr-2" />
                  ONLINE COACHING
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Grid of Meeting Buttons (Different Colors from Block 1) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {meetingLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block touch-manipulation" 
                >
                  <div
                    className={`relative overflow-hidden bg-gradient-to-br ${link.bg} p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer group`}
                  >
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors" />
                    <div className="relative flex items-center gap-2 text-white">
                      <link.icon className="w-4 h-4" />
                      <span className="font-bold text-[10px] sm:text-xs uppercase tracking-widest">
                        {link.label}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Carousel Section */}
          <div className="relative h-80 sm:h-[450px] lg:h-[550px] rounded-[2.5rem] overflow-hidden border-8 border-slate-50 shadow-2xl">
            {carouselImages.map((src, idx) => (
              <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === idx ? "opacity-100" : "opacity-0"}`}>
                <Image src={src} alt="Bharat Chess Academy" fill className="object-cover" priority={idx === 0} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            ))}
            
            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, idx) => (
                <div key={idx} className={`h-1.5 rounded-full transition-all ${currentSlide === idx ? "w-8 bg-white" : "w-2 bg-white/50"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes bounce-custom {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-custom 3s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 10px 30px -5px rgba(139, 92, 246, 0.4); }
          50% { box-shadow: 0 15px 45px -5px rgba(139, 92, 246, 0.6); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}