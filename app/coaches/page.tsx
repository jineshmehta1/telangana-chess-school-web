"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Star,
  Users,
  Calendar,
  Medal,
  Target,
  Sparkles,
  TrophyIcon,
  Crown,
  Award,
  Zap,
  ChevronRight,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function CoachesPage() {
  const coaches = [
    {
      name: "Tejavath Naresh",
      title: "Head Coach & Founder",
      image: "/naresh.jpg",
      specialization: ["Opening Theory", "Endgame Mastery", "Tournament Prep"],
      achievements: ["FIDE Arbiter", "FIDE Rated Player", "Chess Coach"],
      experience: "15+ Years",
      students: "200+",
      bio: "The visionary founder with over 15 years of coaching excellence in opening theory.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      accent: "bg-blue-600",
      border: "border-blue-100",
    },
    {
      name: "Tejavath Aruna",
      title: "Senior Master Coach",
      image: "/coach.png",
      specialization: ["Tactical Training", "Youth Development", "Women's Chess"],
      achievements: ["FIDE Rated Player", "Chess Coach"],
      experience: "12+ Years",
      students: "150+",
      bio: "Specializes in developing young talent and coaching national champions.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      accent: "bg-emerald-600",
      border: "border-emerald-100",
    },
    {
      name: "Ranghanathan K S",
      title: "Master Coach",
      image: "/coach.png",
      specialization: ["Beginner Training", "School Programs", "Online Coaching"],
      achievements: ["International FIDE Rated"],
      experience: "8+ Years",
      students: "100+",
      bio: "Brings innovative teaching methods and excels in online chess education.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      accent: "bg-indigo-600",
      border: "border-indigo-100",
    },
    {
      name: "Kethavath Lokesh",
      title: "Assistant Master",
      image: "/coach.png",
      specialization: ["Puzzle Solving", "Pattern Recognition", "Rapid Chess"],
      achievements: ["International FIDE Rated"],
      experience: "6+ Years",
      students: "80+",
      bio: "Known for expertise in tactical training and rapid chess improvement.",
      color: "text-rose-600",
      bg: "bg-rose-50",
      accent: "bg-rose-600",
      border: "border-rose-100",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20 pt-32 relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '30px 30px' }} />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <ShieldCheck className="w-3 h-3 text-blue-600" /> Elite Mentorship
            </div>
            <h1 className="text-5xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              THE <span className="text-blue-600 italic font-black">MASTERS.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl border-l-2 border-slate-200 pl-6">
              Learn from internationally recognized chess masters and certified coaches 
              dedicated to transforming your tactical vision.
            </p>
          </div>
        </div>

        {/* Coaches Grid - Profile Dossier Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {coaches.map((coach, index) => (
            <div key={index} className="group relative">
              <Card className={`relative bg-white border-2 ${coach.border} rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 transition-all duration-500 group-hover:-translate-y-3`}>
                <div className="flex flex-col lg:flex-row">
                  {/* Left Side: Profile Photo */}
                  <div className="lg:w-2/5 relative aspect-[4/5] lg:aspect-auto">
                    <img
                      src={coach.image || "/placeholder.svg"}
                      alt={coach.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent lg:hidden" />
                    
                    {/* Level/Rank Badge */}
                    <div className="absolute top-6 left-6">
                      <Badge className={`${coach.accent} text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border-none shadow-xl`}>
                        {coach.title}
                      </Badge>
                    </div>
                  </div>

                  {/* Right Side: Tactical Intel */}
                  <div className="lg:w-3/5 p-8 md:p-12 relative">
                    {/* Background Decorative Element */}
                    <div className={`absolute top-0 right-0 p-10 opacity-[0.05] ${coach.color}`}>
                        <Crown className="w-32 h-32 rotate-12" />
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight mb-2">
                        {coach.name}
                      </h3>
                      <p className="text-slate-500 font-medium italic mb-8 leading-relaxed">
                        "{coach.bio}"
                      </p>

                      {/* Stats Hub */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className={`p-4 rounded-2xl ${coach.bg} border ${coach.border}`}>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Experience</p>
                          <p className={`text-lg font-black ${coach.color}`}>{coach.experience}</p>
                        </div>
                        <div className={`p-4 rounded-2xl ${coach.bg} border ${coach.border}`}>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Student Reach</p>
                          <p className={`text-lg font-black ${coach.color}`}>{coach.students}</p>
                        </div>
                      </div>

                      {/* Specialization Checklist */}
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tactical Expertise</p>
                          <div className="flex flex-wrap gap-2">
                            {coach.specialization.map((spec, i) => (
                              <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-[10px] font-bold uppercase tracking-tighter">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Credentials</p>
                            <div className="space-y-2">
                                {coach.achievements.map((ach, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className={`w-1.5 h-1.5 rounded-full ${coach.accent}`} />
                                        <span className="text-xs font-bold text-slate-700">{ach}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                      </div>

                      <Link href="/contact" className="block mt-10">
                        <Button className={`w-full h-14 rounded-2xl ${coach.accent} text-white font-black uppercase tracking-widest text-xs gap-3 group/btn`}>
                          Book Session <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Tactical Advantages Section */}
        <div className="bg-slate-50 rounded-[4rem] p-12 md:p-24 relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 right-0 p-20 opacity-[0.03] text-slate-900 pointer-events-none">
            <Target className="w-64 h-64" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
                WHY TRAIN <span className="text-blue-600 italic">WITH US.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Crown, title: "FIDE Level Expertise", detail: "All coaches are internationally certified with tournament-proven methodologies.", color: "text-blue-600", bg: "bg-blue-600/10" },
                { icon: Zap, title: "Personalized Training", detail: "Custom learning paths tailored to your specific tactical vision and goals.", color: "text-rose-600", bg: "bg-rose-600/10" },
                { icon: TrophyIcon, title: "Proven Victory", detail: "A track record of transforming absolute beginners into state and national champions.", color: "text-emerald-600", bg: "bg-emerald-600/10" }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className={`w-20 h-20 ${item.bg} ${item.color} rounded-[2rem] flex items-center justify-center mx-auto mb-8 transition-transform group-hover:rotate-12`}>
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase">{item.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed px-4">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Anchor CTA */}
        <div className="mt-32 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
               Start Your Move
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-12 leading-none">
              READY TO <span className="text-blue-600 italic">DOMINATE?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <Button className="h-16 px-12 bg-slate-900 text-white hover:bg-blue-600 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl transition-all">
                    Book Free Trial Session
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button variant="outline" className="h-16 px-12 border-2 border-slate-200 text-slate-900 hover:border-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs transition-all">
                    View All Courses
                  </Button>
                </Link>
            </div>
        </div>
      </div>

      {/* Background Ghost Text */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none opacity-[0.03] translate-y-1/2">
        <h2 className="text-[20vw] font-black text-slate-900 leading-none">MASTER</h2>
      </div>
    </div>
  );
}