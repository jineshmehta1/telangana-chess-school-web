"use client";

import { useEffect, useState, useRef } from "react";
import { Trophy, Users, Award, Gamepad2, Plus } from "lucide-react";

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { 
        value: "50", 
        label: "Unique Features", 
        icon: Trophy, 
        color: "text-amber-500", 
        bg: "bg-amber-50", 
        border: "border-amber-100",
        shadow: "shadow-amber-100/50"
    },
    { 
        value: "500", 
        label: "Happy Students", 
        icon: Users, 
        color: "text-blue-600", 
        bg: "bg-blue-50", 
        border: "border-blue-100",
        shadow: "shadow-blue-100/50"
    },
    { 
        value: "15", 
        label: "FIDE Rated Coaches", 
        icon: Award, 
        color: "text-emerald-600", 
        bg: "bg-emerald-50", 
        border: "border-emerald-100",
        shadow: "shadow-emerald-100/50"
    },
    { 
        value: "1000", 
        label: "Training Games", 
        icon: Gamepad2, 
        color: "text-purple-600", 
        bg: "bg-purple-50", 
        border: "border-purple-100",
        shadow: "shadow-purple-100/50"
    },
  ];

  return (
    <section
      id="stats-section"
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")` }} 
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">
              <Plus className="w-3 h-3" /> Growth Metrics
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              OUR <span className="text-blue-600 italic">ACHIEVEMENTS</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-sm font-medium border-l-2 border-slate-200 pl-6">
            Real numbers reflecting our commitment to elite chess education and student success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`group relative p-8 rounded-[2rem] border-2 ${stat.border} ${stat.bg} ${stat.shadow} shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon Circle */}
                <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm group-hover:rotate-12 transition-transform duration-300">
                  <Icon className={`w-7 h-7 ${stat.color}`} />
                </div>

                {/* Data */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-slate-900 tracking-tighter">
                      {stat.value}
                    </span>
                    <span className={`text-3xl font-bold ${stat.color}`}>+</span>
                  </div>
                  <p className="text-sm font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">
                    {stat.label}
                  </p>
                </div>

                {/* Decorative Corner Element */}
                <div className={`absolute top-6 right-6 w-2 h-2 rounded-full ${stat.color.replace('text', 'bg')} opacity-40 group-hover:scale-150 transition-transform`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}