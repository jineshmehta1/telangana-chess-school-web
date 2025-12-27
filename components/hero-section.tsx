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
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const meetingLinks = [
    { label: "G-Meet", icon: Video, bg: "bg-amber-500", href: "https://meet.google.com/vjj-cfpx-dav?pli=1" },
    { label: "Start Call", icon: Play, bg: "bg-[#1a5f5f]", href: "https://meet.jit.si/TelanganaChessAcademy" },
    { label: "Call Naresh", icon: Play, bg: "bg-indigo-600", href: "https://meet.google.com/wuk-nfie-mgx" },
    { label: "TCS Meeting", icon: Sparkles, bg: "bg-emerald-600", href: "https://meet.google.com/atu-ziid-ojg" },
    { label: "BCA Meeting", icon: Bell, bg: "bg-violet-600", href: "https://meet.google.com/uux-vyxa-pgq" },
    { label: "Call Rohith", icon: Bell, bg: "bg-rose-500", href: "https://meet.google.com/mxj-uwyj-vzp" },
  ];

  const carouselImages = ["/slider1.jpg", "/slider3.jpg", "/hero-5.jpg", "/hero-6.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white md:pt-25 pt-30">
      <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: `radial-gradient(#e2e8f0 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }} />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10">
            {/* Simple Primary Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 h-14 rounded-xl text-lg shadow-sm">
                <Link href="https://telanganachessacademy.com/tournaments/" target="_blank">
                  <Trophy className="mr-2 h-5 w-5" /> Events <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>

              <Button asChild size="lg" className="bg-[#1a5f5f] hover:bg-[#134646] text-white font-bold px-8 h-14 rounded-xl text-lg shadow-sm">
                <Link href="https://coaching.telanganachessacademy.com/login" target="_blank">
                  <Users className="mr-2 h-5 w-5" /> Coaching <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Simple Grid of Meeting Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {meetingLinks.map((link, idx) => (
                <Link key={idx} href={link.href} target="_blank" className={`flex items-center gap-2 p-4 ${link.bg} text-white rounded-xl hover:opacity-90 transition-all shadow-sm active:scale-95`}>
                  <link.icon className="w-4 h-4" />
                  <span className="font-bold text-xs uppercase tracking-wider">{link.label}</span>
                </Link>
              ))}
            </div>

            <div className="space-y-8 pt-4">
              <h1 className="text-4xl sm:text-6xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-none">
                BECOME A <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a5f5f] via-indigo-600 to-purple-600 uppercase italic">Chess Master</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">World-class training from FIDE-rated coaches.</p>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative h-80 sm:h-[450px] lg:h-[550px] rounded-[2rem] overflow-hidden border-4 border-slate-100 shadow-xl">
            {carouselImages.map((src, idx) => (
              <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === idx ? "opacity-100" : "opacity-0"}`}>
                <Image src={src} alt="Academy" fill className="object-cover" priority={idx === 0} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}