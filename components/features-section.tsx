"use client";

import { Card } from "@/components/ui/card";
import { Gamepad2, Monitor, Users, Sparkles, ChevronRight, Layout } from "lucide-react";
import Image from "next/image";

export function FeaturesSection() {
  const features = [
    {
      icon: Gamepad2,
      title: "Game Area",
      description:
        "Invite players to real-time matches or sharpen your skills against our advanced engine. Coaches maintain a 'Grandmaster View' to analyze student games as they happen.",
      image: "/chess-game-area-interface.jpg",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      accent: "bg-indigo-500",
      tag: "Live Play"
    },
    {
      icon: Monitor,
      title: "Online Classes",
      description:
        'Experience seamless interactive learning. From personalized One-to-One sessions to dynamic "Open Classrooms," our digital boards make every tactic crystal clear.',
      image: "/online-chess-class-interface.jpg",
      color: "text-rose-600",
      bg: "bg-rose-50",
      accent: "bg-rose-500",
      tag: "Interactive"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "A centralized hub for academy growth. Effortlessly manage professional coaching staff, monitor student progression, and scale your chess community.",
      image: "/chess-team-management-dashboard.jpg",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      accent: "bg-emerald-500",
      tag: "Admin Suite"
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Section Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Editorial Header - Consistent with previous sections */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <Layout className="w-3 h-3" /> Digital Ecosystem
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
              SMARTER <span className="text-blue-600 italic">TRAINING.</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-sm font-medium border-l-2 border-slate-200 pl-6">
            Our platform integrates professional coaching tools with an immersive game environment for rapid improvement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group flex flex-col h-full">
              {/* Image Frame - Floating Style */}
              <div className="relative mb-8 aspect-video rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl shadow-slate-200 transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay Tag */}
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-white ${feature.accent}`}>
                    {feature.tag}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col px-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl ${feature.bg} ${feature.color} transition-transform group-hover:scale-110 duration-300`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">{feature.title}</h3>
                </div>

                <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                  {feature.description}
                </p>

                {/* Micro-Interaction Link */}
                <div className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest cursor-pointer transition-colors ${feature.color} group-hover:gap-4`}>
                  Explore Module <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Background Text */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-[0.03] translate-y-1/2">
        <h2 className="text-[20vw] font-black text-slate-900 leading-none">SYSTEM</h2>
      </div>
    </section>
  );
}