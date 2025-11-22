"use client";

import { Button } from "@/components/ui/button";
import { Play, Users, Trophy, Star, Sparkles, Award, Video, Bell, ChevronRight, Crown, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [rotatingPiece, setRotatingPiece] = useState(0);

  const chessPieces = ["♔", "♕", "♖", "♗", "♘", "♙"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingPiece((prev) => (prev + 1) % chessPieces.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const meetingLinks = [
    { href: "https://meet.google.com/vjj-cfpx-dav?pli=1", icon: Video, label: "G-Meet", color: "#2B6CB0", bg: "from-blue-500 to-blue-600" },
    { href: "https://meet.jit.si/TelanganaChessAcademy", icon: Play, label: "Start Call", color: "#2B6CB0", bg: "from-cyan-500 to-blue-500" },
    { href: "https://meet.google.com/wuk-nfie-mgx", icon: Play, label: "Call Naresh", color: "#2B6CB0", bg: "from-blue-600 to-indigo-600" },
    { href: "https://meet.google.com/atu-ziid-ojg", icon: Sparkles, label: "TCS Meeting", color: "#06402B", bg: "from-emerald-600 to-teal-700" },
    { href: "https://meet.google.com/uux-vyxa-pgq", icon: Bell, label: "BCA Meeting", color: "#06402B", bg: "from-green-600 to-emerald-700" },
    { href: "https://meet.google.com/mxj-uwyj-vzp", icon: Bell, label: "Call Rohith", color: "#06402B", bg: "from-teal-600 to-green-700" },
  ];

  const stats = [
    { icon: Trophy, value: "120+", label: "Tournaments", gradient: "from-yellow-400 to-orange-500" },
    { icon: Users, value: "600+", label: "Students", gradient: "from-blue-400 to-purple-500" },
    { icon: Award, value: "60+", label: "Champions", gradient: "from-purple-400 to-pink-500" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-16 flex items-center overflow-hidden bg-slate-50"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)`
        }} />
      </div>

      {/* Floating chess pieces */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {chessPieces.map((piece, idx) => (
          <div
            key={idx}
            className="absolute text-6xl opacity-10 font-bold"
            style={{
              left: `${10 + idx * 15}%`,
              top: `${20 + (idx % 3) * 25}%`,
              animation: `floatPiece ${8 + idx}s ease-in-out infinite`,
              animationDelay: `${idx * 0.5}s`,
              color: idx % 2 === 0 ? "#3b82f6" : "#8b5cf6"
            }}
          >
            {piece}
          </div>
        ))}
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 bg-white px-3 py-2 rounded-full shadow-lg border-2 border-purple-100 animate-bounce-slow">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Crown className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-gray-800">Certified FIDE Coaches</span>
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>

            {/* Heading with animated gradient */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                <span className="text-gray-900">Become a</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Chess Master
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Telangana chess school empowers you with world-class training from FIDE-rated coaches. Build unshakeable skills, dominate the board, and rise to the top of the chess world.
              </p>
            </div>

            {/* CTA */}
            <Link href="https://coaching.telanganachessacademy.com/login" target="_blank">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold px-10 py-7 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg group animate-pulse-glow"
              >
                <Users className="w-6 h-6 mr-3" />
                Join Our Online Coaching
                <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>

            {/* Meeting Links - Compact Cards */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {meetingLinks.map((link, idx) => (
                  <Link key={idx} href={link.href} target="_blank">
                    <div className={`relative overflow-hidden bg-gradient-to-br ${link.bg} p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group`}>
                      <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors" />
                      <div className="relative flex items-center gap-2 text-white">
                        <link.icon className="w-5 h-5" />
                        <span className="font-semibold text-sm">{link.label}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Transformed Design */}
          <div className="relative flex justify-center lg:justify-end">
            
            {/* Stats Cards - Floating Around */}
            <div className="absolute -top-8 -left-8 z-20 animate-float-slow">
              <div className={`bg-gradient-to-br ${stats[0].gradient} p-6 rounded-2xl shadow-2xl text-white transform rotate-3`}>
                <Trophy className="w-8 h-8 mb-2" />
                <div className="font-black text-3xl">{stats[0].value}</div>
                <div className="text-sm font-semibold opacity-90">{stats[0].label}</div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-4 z-20 animate-float-slow" style={{ animationDelay: "1s" }}>
              <div className={`bg-gradient-to-br ${stats[1].gradient} p-6 rounded-2xl shadow-2xl text-white transform -rotate-3`}>
                <Users className="w-8 h-8 mb-2" />
                <div className="font-black text-3xl">{stats[1].value}</div>
                <div className="text-sm font-semibold opacity-90">{stats[1].label}</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 z-20 animate-float-slow" style={{ animationDelay: "0.5s" }}>
              <div className={`bg-gradient-to-br ${stats[2].gradient} p-6 rounded-2xl shadow-2xl text-white transform rotate-6`}>
                <Award className="w-8 h-8 mb-2" />
                <div className="font-black text-3xl">{stats[2].value}</div>
                <div className="text-sm font-semibold opacity-90">{stats[2].label}</div>
              </div>
            </div>

            {/* Central Feature - 3D Chess Piece Showcase */}
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-purple-100 relative overflow-hidden">
                
                {/* Rotating gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-20 animate-spin-slow" />
                
                {/* Chess pieces circle */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {chessPieces.map((piece, idx) => {
                    const angle = (idx / chessPieces.length) * 2 * Math.PI;
                    const radius = 100;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const isActive = rotatingPiece === idx;
                    
                    return (
                      <div
                        key={idx}
                        className="absolute text-6xl font-bold transition-all duration-500"
                        style={{
                          transform: `translate(${x}px, ${y}px) scale(${isActive ? 1.3 : 1})`,
                          color: isActive ? "#8b5cf6" : "#cbd5e1",
                          textShadow: isActive ? "0 0 30px rgba(139, 92, 246, 0.5)" : "none",
                          zIndex: isActive ? 10 : 1
                        }}
                      >
                        {piece}
                      </div>
                    );
                  })}
                  
                  {/* Center piece */}
                  <div className="text-9xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse-slow">
                    {chessPieces[rotatingPiece]}
                  </div>
                </div>

                {/* Orbital rings */}
                <div className="absolute inset-4 border-2 border-purple-200 rounded-full animate-spin-reverse" />
                <div className="absolute inset-8 border-2 border-blue-200 rounded-full animate-spin-slow" style={{ animationDelay: "0.5s" }} />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl opacity-30 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatPiece {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(var(--rotate, 0deg));
          }
          50% {
            transform: translateY(-20px) rotate(var(--rotate, 0deg));
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 20px 50px -10px rgba(139, 92, 246, 0.3);
          }
          50% {
            box-shadow: 0 25px 60px -10px rgba(139, 92, 246, 0.5);
          }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}