"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Users, Star, ArrowRight, ShieldCheck, Layers, BookOpen, Crown } from "lucide-react";
import Link from "next/link";

export function CoursesSection() {
  const courses = [
    {
      title: "Beginner Chess Course",
      description: "Perfect for those starting their chess journey. Learn basic rules, piece movements, and fundamental strategies.",
      duration: "4 weeks",
      students: "50+",
      rating: 4.9,
      price: "₹2,999",
      features: ["Basic rules and movements", "Opening principles", "Tactical patterns", "Endgame basics"],
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-100",
      accent: "bg-sky-600",
      shadow: "shadow-sky-100/50",
      icon: BookOpen
    },
    {
      title: "Intermediate Training",
      description: "Advance your skills with complex strategies, positional play, and professional tournament preparation.",
      duration: "8 weeks",
      students: "30+",
      rating: 4.8,
      price: "₹4,999",
      features: ["Advanced tactics", "Positional understanding", "Opening repertoire", "Tournament play"],
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      accent: "bg-indigo-600",
      shadow: "shadow-indigo-100/50",
      icon: Layers
    },
    {
      title: "Advanced Masterclass",
      description: "Elite training for serious players aiming for competitive chess and significant rating improvement.",
      duration: "12 weeks",
      students: "15+",
      rating: 5.0,
      price: "₹7,999",
      features: ["Master-level analysis", "Psychological prep", "Advanced endgames", "Personal coaching"],
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
      accent: "bg-rose-600",
      shadow: "shadow-rose-100/50",
      icon: Crown
    },
  ];

  return (
    <section id="courses" className="py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Editorial Header - Consistent with previous sections */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <ShieldCheck className="w-3 h-3" /> Professional Curriculum
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
              LEVEL UP <span className="text-blue-600 italic">TACTICS.</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-sm font-medium border-l-2 border-slate-200 pl-6">
            Choose a training program tailored to your current strength and future ambitions.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card
                key={index}
                className={`group relative flex flex-col h-full bg-white border-2 ${course.border} rounded-[2.5rem] p-8 shadow-xl ${course.shadow} transition-all duration-500 hover:-translate-y-3 overflow-hidden`}
              >
                {/* Visual Background Decoration */}
                <div className={`absolute top-0 right-0 p-10 opacity-[0.03] ${course.color}`}>
                  <Icon className="w-40 h-40 rotate-12" />
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Rating & Level Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${course.bg} ${course.color} text-[10px] font-black uppercase tracking-widest`}>
                      <Star className="w-3 h-3 fill-current" />
                      {course.rating} Rating
                    </div>
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                      Level {index + 1}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                      {course.description}
                    </p>
                  </div>

                  {/* Course Stats Dashboard */}
                  <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100 mb-8">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${course.bg} ${course.color}`}>
                        <Clock className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none">Duration</p>
                        <p className="text-xs font-bold text-slate-900">{course.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${course.bg} ${course.color}`}>
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none">Students</p>
                        <p className="text-xs font-bold text-slate-900">{course.students}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-10 flex-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Modules Included</p>
                    {course.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${course.accent}`} />
                        <span className="text-xs font-bold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-8 border-t border-slate-100 mt-auto">
                    <div className="flex items-center justify-between mb-6">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Price</p>
                        <p className="text-3xl font-black text-slate-900 tracking-tighter">{course.price}</p>
                      </div>
                    </div>
                    
                    <Link href="/contact" className="block">
                      <Button className={`w-full h-14 rounded-2xl ${course.accent} hover:scale-[1.02] transition-all text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-slate-200 group/btn`}>
                        Enroll Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Subtle Background Text */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none opacity-[0.03] translate-y-1/2">
        <h2 className="text-[20vw] font-black text-slate-900 leading-none uppercase">Level</h2>
      </div>
    </section>
  );
}