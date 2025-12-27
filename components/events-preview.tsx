"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, MapPin, Trophy, Users, Zap, ChevronRight, ArrowUpRight, Ticket } from "lucide-react";
import Link from "next/link";

export function EventsPreview() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Monthly Chess Tournament",
      date: "October 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Main Academy Hall",
      type: "Tournament",
      participants: "32 players",
      icon: Trophy,
      description: "Compete against fellow chess enthusiasts in our monthly tournament with exciting prizes.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      accent: "bg-indigo-600",
      border: "border-indigo-100",
      shadow: "shadow-indigo-100/50",
    },
    {
      id: 2,
      title: "Beginner's Workshop",
      date: "October 20, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Training Room A",
      type: "Workshop",
      participants: "15 students",
      icon: Users,
      description: "A foundational session designed for new players to master basic movements and strategies.",
      color: "text-violet-600",
      bg: "bg-violet-50",
      accent: "bg-violet-600",
      border: "border-violet-100",
      shadow: "shadow-violet-100/50",
    },
    {
      id: 3,
      title: "Grandmaster Masterclass",
      date: "November 05, 2025",
      time: "11:00 AM - 1:00 PM",
      location: "Conference Hall",
      type: "Masterclass",
      participants: "50 attendees",
      icon: Zap,
      description: "Learn high-level tactical patterns and opening theories from an elite chess grandmaster.",
      color: "text-rose-600",
      bg: "bg-rose-50",
      accent: "bg-rose-600",
      border: "border-rose-100",
      shadow: "shadow-rose-100/50",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 -z-10" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Editorial Header - Consistent with previous sections */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <Calendar className="w-3 h-3" /> Event Calendar
            </div>
            <h2 className="text-5xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none uppercase">
              STRATEGIC <span className="text-blue-600 italic font-black">EVENTS</span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-sm font-medium border-l-2 border-slate-200 pl-6">
            Join our competitive tournaments and expert-led workshops to put your training into practice.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => {
            const Icon = event.icon;
            return (
              <Card
                key={event.id}
                className={`group relative overflow-hidden bg-white border-2 ${event.border} rounded-[2.5rem] shadow-xl ${event.shadow} transition-all duration-500 hover:-translate-y-3`}
              >
                {/* Visual Accent Badge */}
                <div className={`absolute top-0 right-0 p-8 opacity-[0.03] ${event.color}`}>
                  <Icon className="w-32 h-32 rotate-12" />
                </div>

                <CardHeader className="p-8 pb-4 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${event.bg} ${event.color} text-[10px] font-black uppercase tracking-widest`}>
                      <Icon className="w-3.5 h-3.5" />
                      {event.type}
                    </div>
                    <Ticket className="w-5 h-5 text-slate-200" />
                  </div>

                  <CardTitle className="text-3xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                    {event.title}
                  </CardTitle>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                    {event.description || "Join us for this premier academy event."}
                  </p>
                </CardHeader>

                <CardContent className="p-8 pt-4 space-y-6 relative z-10">
                  {/* Event Data Grid */}
                  <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Date</p>
                      <p className="text-xs font-bold text-slate-900">{event.date}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Time</p>
                      <p className="text-xs font-bold text-slate-900">{event.time}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Location</p>
                      <p className="text-xs font-bold text-slate-900">{event.location}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Capacity</p>
                      <p className="text-xs font-bold text-slate-900">{event.participants}</p>
                    </div>
                  </div>

                  <Link href="/contact" className="block">
                    <Button
                      className={`w-full h-14 rounded-2xl ${event.accent} hover:scale-[1.02] transition-all text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-slate-200`}
                    >
                      Register Now <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button - Brutalist Link Style */}
        <div className="flex flex-col items-center mt-20">
          <Link href="/events" className="group flex items-center gap-4">
            <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-900 transition-colors">
              Explore All Academy Events
            </span>
            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white transition-all group-hover:bg-blue-600 group-hover:translate-x-2">
              <ChevronRight className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}