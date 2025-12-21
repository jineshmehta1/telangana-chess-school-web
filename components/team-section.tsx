"use client";

import { Card } from "@/components/ui/card";
import { Star, Award, ShieldCheck, GraduationCap, Trophy, ChevronRight } from "lucide-react";
import Image from "next/image";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Tejaswin Naresh",
      title: "FIDE Instructor, State Player & Coach",
      rating: "FIDE Rated",
      image: "/professional-chess-coach-male-instructor.jpg",
      achievements: ["State Champion", "FIDE Instructor", "10+ Years Exp"],
      color: "text-sky-600",
      bg: "bg-sky-50",
      accent: "bg-sky-500",
      border: "border-sky-100",
    },
    {
      name: "Tejaswin Aruna",
      title: "FIDE Rated Player & Coach",
      rating: "FIDE Rated",
      image: "/professional-chess-coach-female-instructor.jpg",
      achievements: ["FIDE Rated Player", "Tournament Winner", "8+ Years Exp"],
      color: "text-rose-600",
      bg: "bg-rose-50",
      accent: "bg-rose-500",
      border: "border-rose-100",
    },
    {
      name: "Ranghunathan K S",
      title: "International FIDE Rated",
      rating: "Intl. FIDE",
      image: "/international-chess-master-coach.jpg",
      achievements: ["International Player", "Master Level", "15+ Years Exp"],
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      accent: "bg-emerald-500",
      border: "border-emerald-100",
    },
    {
      name: "Kethavath Lokesh",
      title: "International FIDE Rated",
      rating: "Intl. FIDE",
      image: "/chess-grandmaster-coach-instructor.jpg",
      achievements: ["International Master", "Tournament Director", "12+ Years Exp"],
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      accent: "bg-indigo-500",
      border: "border-indigo-100",
    },
  ];

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-slate-50 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header - Consistent with previous sections */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3 h-3" /> Elite Mentorship
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              THE <span className="text-blue-600 italic">MASTERS</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-sm font-medium border-l-2 border-slate-200 pl-6">
            Meet the FIDE-certified professionals dedicated to transforming your tactical vision.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              <Card className="relative h-full bg-white border-none shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden transition-all duration-500 group-hover:-translate-y-3">
                
                {/* Profile Image with Dynamic Accent */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className={`absolute inset-0 opacity-20 ${member.accent} z-10 mix-blend-multiply`} />
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                      <Star className={`w-3.5 h-3.5 fill-current ${member.color}`} />
                      <span className="text-[10px] font-black uppercase tracking-tighter text-slate-900">
                        {member.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 relative">
                  {/* Background Decoration */}
                  <div className={`absolute top-0 right-0 w-24 h-24 ${member.bg} rounded-full -translate-y-12 translate-x-12 opacity-50 group-hover:scale-150 transition-transform duration-700`} />

                  <div className="relative z-10">
                    <h3 className="text-xl font-black text-slate-900 mb-1 tracking-tight">
                      {member.name}
                    </h3>
                    <p className={`text-xs font-bold ${member.color} uppercase tracking-wider mb-6`}>
                      {member.title}
                    </p>

                    <div className="space-y-3">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Credentials</p>
                      {member.achievements.map((achievement, aIdx) => (
                        <div key={aIdx} className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${member.accent}`} />
                          <span className="text-xs font-bold text-slate-600">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between group/btn cursor-pointer">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover/btn:text-slate-900 transition-colors">
                        View Bio
                      </span>
                      <ChevronRight className={`w-4 h-4 ${member.color} transform group-hover/btn:translate-x-1 transition-transform`} />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}