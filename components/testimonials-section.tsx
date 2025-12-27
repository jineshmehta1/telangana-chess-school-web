"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageSquare, Plus, ArrowRight } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Jyothi Yadav",
      role: "Intermediate Player",
      content: "My daughter has improved tremendously since joining the academy. The instructors are patient, knowledgeable, and make learning chess fun and engaging.",
      image: "/jyothi.png",
      color: "text-purple-600",
      accent: "bg-purple-500",
      bg: "bg-purple-50/50",
      border: "border-purple-100",
    },
    {
      id: 2,
      name: "Khilend Sahu",
      role: "Adult Beginner",
      content: "I started as a complete beginner and now I'm competing in local tournaments. The structured curriculum and personalized attention made all the difference.",
      image: "/khilend.png",
      color: "text-blue-600",
      accent: "bg-blue-500",
      bg: "bg-blue-50/50",
      border: "border-blue-100",
    },
    {
      id: 3,
      name: "Arjun Biru",
      role: "Intermediate Player",
      content: "The online coaching sessions are fantastic! I can learn from expert coaches from the comfort of my home. My rating has increased by 300 points in 6 months.",
      image: "/arjun.png",
      color: "text-emerald-600",
      accent: "bg-emerald-500",
      bg: "bg-emerald-50/50",
      border: "border-emerald-100",
    },
    {
      id: 4,
      name: "Dandu Ravi",
      role: "Tournament Player",
      content: "The academy's focus on both tactical and strategic understanding has elevated my game to the next level. I recently won my first regional tournament!",
      image: "/dandu.png",
      color: "text-pink-600",
      accent: "bg-pink-500",
      bg: "bg-pink-50/50",
      border: "border-pink-100",
    },
    {
      id: 5,
      name: "Krarjun gaud",
      role: "Parent of 8-year-old",
      content: "The coaches here understand how to work with young children. My son looks forward to every lesson and has developed excellent concentration skills.",
      image: "/gaud.png",
      color: "text-amber-600",
      accent: "bg-amber-500",
      bg: "bg-amber-50/50",
      border: "border-amber-100",
    },
    {
      id: 6,
      name: "Chandu Shekhar",
      role: "Student",
      content: "Never thought I could learn chess, but the patient instructors proved me wrong. Chess has become my favorite hobby and mental exercise.",
      image: "/andu.png",
      color: "text-indigo-600",
      accent: "bg-indigo-500",
      bg: "bg-indigo-50/50",
      border: "border-indigo-100",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-slate-50/50 -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Editorial Header - Matches Hero/Stats/Team */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <MessageSquare className="w-3 h-3" /> Student Voices
            </div>
            <h2 className="text-5xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
              VOICES OF <span className="text-blue-600 italic">SUCCESS</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-sm font-medium border-l-2 border-slate-200 pl-6">
            Hear from our diverse community of players and parents about their transformative journey with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <Card
              key={t.id}
              className={`group relative bg-white border-2 ${t.border} rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2`}
            >
              <CardContent className="p-0 space-y-6">
                {/* Large Decorative Quote Icon */}
                <div className={`absolute top-8 right-8 opacity-10 ${t.color}`}>
                  <Quote className="w-16 h-16 fill-current rotate-180" />
                </div>

                {/* Stars with Unique Color Branding */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 fill-current ${t.color}`} />
                  ))}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-slate-700 font-medium italic leading-relaxed text-lg">
                    "{t.content}"
                  </p>
                </div>

                {/* Divider */}
                <div className={`h-1 w-12 rounded-full ${t.accent} opacity-30`} />

                {/* Profile Header */}
                <div className="flex items-center gap-4 pt-2">
                  <div className="relative">
                    <img
                      src={t.image || "/placeholder.svg"}
                      alt={t.name}
                      className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${t.accent}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 leading-none mb-1">
                      {t.name}
                    </h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {t.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories CTA Card - Brutalist Light Design */}
        <div className="mt-24 relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl">
          {/* Background Highlight */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-none">
              READY TO BE OUR NEXT <br />
              <span className="text-blue-400 italic">GRANDMASTER?</span>
            </h3>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 font-medium">
              Join 500+ students already mastering the game. Whether you're a 
              beginner or a pro, your victory starts here.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full max-w-4xl mb-12 pt-8 border-t border-white/10">
              <div className="space-y-1">
                <p className="text-5xl font-black tracking-tighter">500+</p>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Global Students</p>
              </div>
              <div className="space-y-1">
                <p className="text-5xl font-black tracking-tighter">95%</p>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Success Rate</p>
              </div>
              <div className="space-y-1">
                <p className="text-5xl font-black tracking-tighter">50+</p>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Awards Won</p>
              </div>
            </div>

            <button className="group relative flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-500 hover:text-white transition-all duration-300">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}