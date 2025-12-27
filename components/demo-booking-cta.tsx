"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, Star, Users, Phone, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";

export function DemoBookingCTA() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Personalized Assessment",
      description: "Get a comprehensive evaluation of your current chess level and skills.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      accent: "bg-blue-600",
    },
    {
      icon: Users,
      title: "Meet Your Coach",
      description: "Connect with one of our experienced instructors who matches your style.",
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-100",
      accent: "bg-violet-600",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose a time that works best for your schedule, including weekends.",
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
      accent: "bg-rose-600",
    },
    {
      icon: Star,
      title: "Customized Learning Plan",
      description: "Receive a tailored roadmap to improve your skills effectively.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      accent: "bg-emerald-600",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Start Your Move
          </div>
          <h2 className="text-5xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8 uppercase">
            BEGIN YOUR <br />
            <span className="text-blue-600 italic">CHESS JOURNEY</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed mb-10">
            Book a free demo lesson today and discover how our expert instructors 
            can help you master the game of chess.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-slate-900 text-white hover:bg-blue-600 font-black uppercase tracking-widest text-xs px-10 py-7 rounded-2xl shadow-2xl shadow-slate-200 transition-all group"
              >
                Book Free Demo Lesson
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-slate-200 text-slate-900 hover:border-emerald-500 hover:text-emerald-600 font-black uppercase tracking-widest text-xs px-10 py-7 rounded-2xl transition-all flex items-center gap-3"
              onClick={() => window.open('https://wa.me/919864646481', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>

        {/* Benefits Grid - Unique Colors per Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden bg-white border-2 ${benefit.border} rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl shadow-slate-100`}
            >
              <div className={`w-14 h-14 rounded-2xl ${benefit.bg} ${benefit.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500`}>
                <benefit.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight leading-tight">
                {benefit.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Bottom Decorative Bar */}
              <div className={`absolute bottom-0 left-0 w-full h-1.5 ${benefit.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </Card>
          ))}
        </div>

        {/* What to Expect - Dashboard Phase Tracker */}
        <div className="relative bg-slate-50 rounded-[3rem] p-10 md:p-20 overflow-hidden border border-slate-100">
            {/* Background Branding */}
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                <Star className="w-64 h-64 text-slate-900" />
            </div>

            <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 tracking-tighter text-center">
                    DEMO <span className="text-blue-600 italic">PHASES</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-200 -z-0" />

                    {[
                        {
                            number: "01",
                            title: "Skill Assessment",
                            description: "We'll evaluate your current chess knowledge and playing strength.",
                            color: "bg-blue-600",
                        },
                        {
                            number: "02",
                            title: "Interactive Lesson",
                            description: "Experience our teaching methodology with a live sample lesson.",
                            color: "bg-indigo-600",
                        },
                        {
                            number: "03",
                            title: "Learning Plan",
                            description: "Get a personalized roadmap for your chess improvement journey.",
                            color: "bg-purple-600",
                        },
                    ].map((step) => (
                        <div key={step.number} className="relative text-center group">
                            <div className="flex justify-center mb-8 relative z-10">
                                <div className={`w-20 h-20 ${step.color} text-white rounded-[2rem] flex items-center justify-center text-2xl font-black shadow-xl shadow-slate-200 transition-transform group-hover:rotate-12`}>
                                    {step.number}
                                </div>
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">
                                {step.title}
                            </h4>
                            <p className="text-slate-500 font-medium leading-relaxed px-4">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}