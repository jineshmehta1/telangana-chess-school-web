"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Users, Award, ShieldCheck, ArrowRight, ExternalLink, Globe } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Target,
      title: "Professional Training",
      description: "Learn from FIDE rated instructors and professional chess coaches.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      accent: "bg-indigo-600"
    },
    {
      icon: Users,
      title: "Safe Learning",
      description: "We create a secure, focused environment for students to develop skills.",
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
      accent: "bg-rose-600"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Elite training designed for local, national and international success.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      accent: "bg-emerald-600"
    },
    {
      icon: CheckCircle,
      title: "Proven Methods",
      description: "Collective master-level experience distilled into actionable lessons.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100",
      accent: "bg-amber-600"
    },
  ];

  const process = [
    "Open Official Website",
    "Visit bharatchessacademy.com",
    "Select Online Coaching",
    "Enter User Name: tca",
    "Enter Password: 0123",
    "Access Your Dashboard",
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Main Editorial Intro */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                <ShieldCheck className="w-3 h-3 text-blue-400" /> Academic Foundation
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] uppercase">
                THE PLACE FOR <br />
                <span className="text-blue-600 italic font-black">PRO TRAINING.</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
                Bharat Chess Academy is reimagining the traditional learning experience, 
                building unshakeable foundations for the next generation of masters.
              </p>
            </div>

            {/* Identity Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "Bharat Academy", url: "www.bharatchessacademy.com", color: "border-blue-600" },
                { name: "Hyderabad Institute", url: "www.hyderabadchessinstitute.com", color: "border-indigo-600" }
              ].map((site, i) => (
                <div key={i} className={`p-6 bg-white border-l-4 ${site.color} shadow-xl shadow-slate-200/50 rounded-2xl group cursor-pointer hover:bg-slate-50 transition-all`}>
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1 group-hover:text-slate-900 transition-colors">{site.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">{site.url}</span>
                    <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-blue-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Login Protocol Module */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] -z-10 transform -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <Card className="bg-white border-2 border-slate-200 rounded-[2.5rem] p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-black text-slate-900 uppercase tracking-tighter">Online Class Protocol</h4>
              </div>
              
              <div className="space-y-4">
                {process.map((step, index) => (
                  <div key={index} className="flex items-center gap-4 group/item">
                    <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-bold text-slate-600 group-hover/item:text-slate-900 transition-colors">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span>System: Active</span>
                <span className="flex items-center gap-1.5 text-emerald-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Now
                </span>
              </div>
            </Card>
          </div>
        </div>

        {/* Feature Highlights - Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
               Core Values
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
              WHY CHOOSE <span className="text-blue-600 italic">US.</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-sm font-medium border-l-2 border-slate-200 pl-6">
            Everything we do is built on a legacy of professional mentorship and proven pedagogical methods.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`group relative p-8 rounded-[2.5rem] border-2 ${feature.border} ${feature.bg} shadow-xl shadow-slate-100 transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="relative z-10">
                    <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm transition-transform group-hover:rotate-12">
                        <Icon className={`w-7 h-7 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-xs font-bold text-slate-500 leading-relaxed uppercase tracking-wider">{feature.description}</p>
                </div>
                
                {/* Decorative Dot */}
                <div className={`absolute top-6 right-6 w-1.5 h-1.5 rounded-full ${feature.accent} opacity-30 group-hover:scale-150 transition-transform`} />
              </Card>
            );
          })}
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-[0.03] translate-y-1/2">
        <h2 className="text-[20vw] font-black text-slate-900 leading-none">LEGACY</h2>
      </div>
    </section>
  );
}