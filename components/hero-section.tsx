"use client";

import { Button } from "@/components/ui/button";
import {
  Play,
  Users,
  Trophy,
  Star,
  Sparkles,
  Award,
  Video,
  Bell,
  ChevronRight,
  Crown,
  Zap,
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
      label: "G-Meet",
      bg: "from-indigo-500 to-blue-700",
      shadow: "shadow-indigo-200",
    },
    {
      href: "https://meet.jit.si/TelanganaChessAcademy",
      icon: Play,
      label: "Start Call",
      bg: "from-rose-500 to-orange-500",
      shadow: "shadow-rose-200",
    },
    {
      href: "https://meet.google.com/wuk-nfie-mgx",
      icon: Play,
      label: "Call Naresh",
      bg: "from-amber-400 to-yellow-600",
      shadow: "shadow-amber-100",
    },
    {
      href: "https://meet.google.com/atu-ziid-ojg",
      icon: Sparkles,
      label: "TCS Meeting",
      bg: "from-emerald-500 to-teal-700",
      shadow: "shadow-emerald-200",
    },
    {
      href: "https://meet.google.com/uux-vyxa-pgq",
      icon: Bell,
      label: "BCA Meeting",
      bg: "from-violet-600 to-purple-800",
      shadow: "shadow-violet-200",
    },
    {
      href: "https://meet.google.com/mxj-uwyj-vzp",
      icon: Bell,
      label: "Call Rohith",
      bg: "from-sky-400 to-blue-600",
      shadow: "shadow-sky-100",
    },
  ];

  const carouselImages = [
    "/slider1.jpg",
    "/slider3.jpg",
    "/hero-5.jpg",
    "/hero-6.jpg",
  ];

  const placeholderImages = [
    "/slider1.jpg",
    "/slider2.jpg",
    "/slider3.jpg",
    "https://www.bharatchessacademy.com/hero-6.jpg",
    "https://www.bharatchessacademy.com/hero-6.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white md:pt-25 pt-30"
    >
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40" 
           style={{ backgroundImage: `radial-gradient(#e2e8f0 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }} />
      
      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-10">
            {/* Minimal Badge */}
            

            {/* Dual CTA Buttons - Different Colors */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://telanganachessacademy.com/tournaments/" target="_blank">
                <Button
                  size="lg"
                  className="bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-black px-10 py-7 rounded-none shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 text-lg group w-full sm:w-auto uppercase tracking-tighter"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  Events
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="https://coaching.telanganachessacademy.com/login" target="_blank">
                <Button
                  size="lg"
                  className="bg-[#0066FF] hover:bg-[#0052cc] text-white font-black px-10 py-7 rounded-none shadow-[8px_8px_0px_0px_rgba(0,102,255,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 text-lg group w-full sm:w-auto uppercase tracking-tighter"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Coaching
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Meeting Links - Unique Colors Per Button */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {meetingLinks.map((link, idx) => (
                <Link key={idx} href={link.href} target="_blank">
                  <div
                    className={`relative overflow-hidden bg-gradient-to-br ${link.bg} p-5 rounded-2xl shadow-lg ${link.shadow} hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer group border border-white/20`}
                  >
                    <div className="relative flex flex-col gap-2 text-white">
                      <div className="bg-white/20 w-fit p-2 rounded-lg">
                        <link.icon className="w-5 h-5" />
                      </div>
                      <span className="font-black text-xs uppercase tracking-widest">
                        {link.label}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Heading & Text */}
            <div className="space-y-8 pt-4">
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black leading-[0.9] text-slate-900 tracking-tighter">
                BECOME A <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 uppercase italic">
                  Chess Master
                </span>
              </h1>

            </div>
          </div>

          {/* Right Side - Carousel with "Floating Frame" */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-slate-100 to-blue-50 rounded-[3rem] -z-10 transform rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative h-80 sm:h-[450px] lg:h-[550px] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
              <div className="relative w-full h-full bg-slate-200">
                {carouselImages.map((src, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      currentSlide === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Academy ${idx + 1}`}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = placeholderImages[idx];
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                ))}

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-10 left-10 right-10 text-white space-y-2">
                   <div className="flex gap-1.5 mb-4">
                      {carouselImages.map((_, idx) => (
                        <div key={idx} className={`h-1 rounded-full transition-all duration-500 ${currentSlide === idx ? "w-10 bg-white" : "w-2 bg-white/40"}`} />
                      ))}
                   </div>
                   <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">Academy Spotlight</p>
                   <h3 className="text-2xl sm:text-3xl font-bold">
                    {currentSlide === 0 && "Grandmaster Mentorship"}
                    {currentSlide === 1 && "Global Community"}
                    {currentSlide === 2 && "Elite Tournaments"}
                    {currentSlide === 3 && "Join the Legacy"}
                   </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}