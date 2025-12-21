"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Star,
  Users,
  Clock,
  BookOpen,
  Target,
  Zap,
  Crown,
  ChevronDown,
  ChevronUp,
  Play,
  CheckCircle,
  Award,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Layout,
} from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {
  const [expandedCourses, setExpandedCourses] = useState<{ [key: number]: boolean }>({});
  const [activeLevel, setActiveLevel] = useState("all");

  const toggleFeatures = (index: number) => {
    setExpandedCourses((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const courses = [
    {
      title: "Beginner Level –1",
      level: "beginner",
      duration: "3 Months",
      price: "₹15,000",
      students: "50+",
      rating: "4.9",
      icon: BookOpen,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      accent: "bg-blue-600",
      description: "Perfect for complete beginners starting their chess journey.",
      features: ["Chess Board setup", "Movement of Pieces", "Value of Pieces", "Rules", "Capture and Exchange", "Checkmate and Stalemate", "Castling & Promotion"],
      schedule: "2 classes / week",
      ageGroup: "6+ years",
      popular: true,
    },
    {
        title: "Beginner Level –2",
        level: "beginner",
        duration: "3 Months",
        price: "₹15,000",
        students: "45+",
        rating: "4.8",
        icon: BookOpen,
        color: "text-sky-600",
        bg: "bg-sky-50",
        border: "border-sky-100",
        accent: "bg-sky-600",
        description: "Builds on basics with focus on checkmates and simple tactics.",
        features: ["Elementary Checkmates", "King + Rook Vs King", "King + 2 Bishops Vs King", "Check Combination", "Checkmate in 1-2 moves", "Pin & Fork Basics"],
        schedule: "2 classes / week",
        ageGroup: "6+ years",
      },
    {
      title: "Intermediate Level –1",
      level: "intermediate",
      duration: "4 Months",
      price: "₹20,000",
      students: "40+",
      rating: "4.8",
      icon: Target,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      accent: "bg-emerald-600",
      description: "Introduces intermediate players to advanced tactics.",
      features: ["Absolute & Relative Pin", "Fork Motifs", "Checkmate in 3-4 moves", "Double Attack", "Discovered Check"],
      schedule: "3 classes / week",
      ageGroup: "8+ years",
      popular: true,
    },
    {
        title: "Intermediate Level –4",
        level: "intermediate",
        duration: "4 Months",
        price: "₹20,000",
        students: "35+",
        rating: "4.8",
        icon: Target,
        color: "text-teal-600",
        bg: "bg-teal-50",
        border: "border-teal-100",
        accent: "bg-teal-600",
        description: "Covers opening preparation and pawn structures.",
        features: ["Opening Repertoire", "Open files and Diagonals", "Pawn Structure Mastery", "Passed Pawns", "Zugzwang & Clearance"],
        schedule: "3 classes / week",
        ageGroup: "8+ years",
      },
    {
      title: "Advanced Level –1",
      level: "advanced",
      duration: "6 Months",
      price: "₹30,000",
      students: "25+",
      rating: "4.9",
      icon: Trophy,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
      accent: "bg-purple-600",
      description: "Intensive training for competitive players.",
      features: ["Types of Centre Control", "In-depth Opening Analysis", "Prophylaxis", "Positional Sacrifices", "Greek Gift Sacrifice"],
      schedule: "4 classes / week",
      ageGroup: "12+ years",
      popular: true,
    },
    {
      title: "Advanced Level –2",
      level: "expert",
      duration: "6 Months",
      price: "₹30,000",
      students: "20+",
      rating: "4.9",
      icon: Crown,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
      accent: "bg-amber-600",
      description: "Elite training for aspiring masters with focus on discipline.",
      features: ["Elite Tournament Prep", "Master Homework Discipline", "Advanced Practice Metrics", "Psychological Prep"],
      schedule: "4 classes / week",
      ageGroup: "12+ years",
    }
  ];

  const levelFilters = [
    { id: "all", label: "All Curriculums" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
    { id: "expert", label: "Expert" },
  ];

  const filteredCourses = activeLevel === "all" ? courses : courses.filter(c => c.level === activeLevel);

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20 pt-32 relative overflow-hidden">
      {/* Editorial Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '30px 30px' }} />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Editorial Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <ShieldCheck className="w-3 h-3 text-blue-600" /> Syllabus 2024-25
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-6 uppercase">
              STRATEGIC <br />
              <span className="text-blue-600 italic">CURRICULUM.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl border-l-2 border-slate-200 pl-6">
              Learning paths designed by FIDE masters to transform students from casual players into ranked competitive masters.
            </p>
          </div>
        </div>

        {/* Filter Command Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-16 bg-slate-50 p-2 rounded-[2rem] border border-slate-100 w-fit mx-auto lg:mx-0">
          {levelFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveLevel(filter.id)}
              className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeLevel === filter.id
                  ? "bg-slate-900 text-white shadow-xl"
                  : "text-slate-400 hover:text-slate-900"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredCourses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-white border-2 ${course.border} rounded-[3rem] shadow-2xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2`}
              >
                {/* Visual Accent */}
                <div className={`absolute top-0 right-0 p-12 opacity-[0.03] ${course.color}`}>
                  <Icon className="w-48 h-48 rotate-12" />
                </div>

                <div className="p-8 md:p-12 relative z-10">
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-[1.5rem] ${course.bg} ${course.color} flex items-center justify-center shadow-sm transition-transform group-hover:rotate-12`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none uppercase">{course.title}</h3>
                        <p className={`text-[10px] font-black uppercase tracking-widest mt-2 ${course.color}`}>{course.level} training phase</p>
                      </div>
                    </div>
                    {course.popular && (
                      <Badge className="bg-amber-400 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border-none shadow-lg">
                        <Sparkles className="w-3 h-3 mr-1" /> Essential
                      </Badge>
                    )}
                  </div>

                  <p className="text-slate-500 font-medium italic mb-10 leading-relaxed text-lg border-l-2 border-slate-100 pl-6">
                    {course.description}
                  </p>

                  {/* Syllabus Stats Hub */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Tuition</p>
                      <p className="text-xl font-black text-slate-900 tracking-tighter">{course.price}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                      <p className="text-xl font-black text-slate-900 tracking-tighter">{course.duration}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 hidden sm:block">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Community</p>
                      <p className="text-xl font-black text-slate-900 tracking-tighter">{course.students}</p>
                    </div>
                  </div>

                  {/* Curriculum Details */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                        <span>Modules Covered</span>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {course.ageGroup}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.schedule}</span>
                        </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-1 gap-3">
                      {course.features.slice(0, expandedCourses[index] ? undefined : 4).map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 animate-in fade-in slide-in-from-left-2 duration-300">
                          <CheckCircle className={`w-4 h-4 ${course.color} opacity-40`} />
                          <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => toggleFeatures(index)}
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 hover:gap-3 transition-all mt-4"
                    >
                      {expandedCourses[index] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      {expandedCourses[index] ? "Collapse Syllabus" : `View Full ${course.features.length} Modules`}
                    </button>
                  </div>

                  {/* Footer CTA */}
                  <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="flex-1">
                      <Button className={`w-full h-14 rounded-2xl ${course.accent} text-white font-black uppercase tracking-widest text-xs gap-2 group/btn`}>
                        Enroll Now <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all" />
                      </Button>
                    </Link>
                    <Link href="/contact" className="flex-1">
                      <Button variant="outline" className="w-full h-14 rounded-2xl border-2 border-slate-100 font-black uppercase tracking-widest text-xs text-slate-500 hover:text-slate-900">
                        Request Trial
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Advantage Grid */}
      <section className="mt-32 py-24 bg-slate-50 relative overflow-hidden border-y border-slate-100">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase mb-6">
              THE ACADEMY <span className="text-blue-600 italic">EDGE.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Users, title: "Elite Batches", detail: "Maximum 10 students ensuring one-to-one master feedback.", color: "text-blue-600", bg: "bg-blue-600/10" },
              { icon: Trophy, title: "Proven Victory", detail: "500+ students transformed from enthusiasts to ranked players.", color: "text-emerald-600", bg: "bg-emerald-600/10" },
              { icon: Zap, title: "Pro Curriculum", detail: "Tactical learning designed by FIDE coaches and chess masters.", color: "text-purple-600", bg: "bg-purple-600/10" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 ${feature.bg} ${feature.color} rounded-[2rem] flex items-center justify-center mx-auto mb-8 transition-transform group-hover:rotate-12`}>
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed px-4">{feature.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action Hub */}
      <section className="py-32 container max-w-7xl mx-auto px-6 text-center">
        <div className="bg-slate-900 text-white rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
          <Sparkles className="absolute top-0 right-0 w-64 h-64 text-white/5 -translate-y-20 translate-x-20 rotate-12" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-8 leading-none">
              READY TO <span className="text-blue-400 italic">ASCEND?</span>
            </h2>
            <p className="text-slate-400 text-xl font-medium mb-12 max-w-2xl mx-auto italic leading-relaxed">
              Unlock your grandmaster potential with our world-class syllabus. Start with a free trial class today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="h-16 px-12 bg-white text-slate-900 hover:bg-blue-500 hover:text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl">
                  Book Free Trial Session
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="h-16 px-12 border-2 border-white/20 text-white hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest text-xs">
                  Speak with a Coach
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Background ghost text */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none opacity-[0.03] translate-y-1/2">
        <h2 className="text-[20vw] font-black text-slate-900 leading-none">SYLLABUS</h2>
      </div>
    </div>
  );
}