"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Crown,
  Trophy,
  Target,
  TrophyIcon,
  ArrowUpRight,
  ShieldCheck,
  Globe,
} from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/telanganachessacademy", label: "Facebook", color: "hover:bg-[#1877F2]", text: "text-[#1877F2]" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-[#1DA1F2]", text: "text-[#1DA1F2]" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-[#E4405F]", text: "text-[#E4405F]" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-[#FF0000]", text: "text-[#FF0000]" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Coaches", href: "/coaches" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  const academyLinks = [
    { name: "Telangana Chess Academy", href: "https://telanganachessacademy.com/", domain: "telanganachessacademy.com", color: "group-hover:text-blue-600" },
    { name: "Telangana Chess School", href: "https://www.telanganachessschool.com", domain: "telanganachessschool.com", color: "group-hover:text-indigo-600" },
    { name: "Bharat Chess Academy", href: "https://www.bharatchessacademy.com", domain: "bharatchessacademy.com", color: "group-hover:text-emerald-600" },
    { name: "Bharat Chess Institute", href: "http://www.bharatchessinstitute.com", domain: "bharatchessinstitute.com", color: "group-hover:text-rose-600" },
    { name: "Hyderabad Chess Institute", href: "https://www.hyderabadchessinstitute.com", domain: "hyderabadchessinstitute.com", color: "group-hover:text-amber-600" },
  ];

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Top Branding Section */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl shadow-slate-200">
                <TrophyIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
                  TELANGANA <br />
                  <span className="text-blue-600 italic">CHESS SCHOOL</span>
                </h3>
              </div>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm font-medium">
              Empowering minds through strategic excellence. Join the elite community of FIDE-certified training.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center transition-all duration-300 group ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className={`w-5 h-5 text-slate-400 group-hover:text-white transition-colors`} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-12">
            {/* Quick Links Column */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-2">
                <Target className="w-3 h-3 text-blue-600" /> Platform
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors flex items-center group"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Network Column */}
            <div className="sm:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-2">
                <Globe className="w-3 h-3 text-emerald-500" /> Our Network
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {academyLinks.map((academy, index) => (
                  <a
                    key={index}
                    href={academy.href}
                    target="_blank"
                    className="group block p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300"
                  >
                    <h5 className={`text-[11px] font-black uppercase tracking-tight text-slate-900 mb-1 transition-colors ${academy.color}`}>
                      {academy.name}
                    </h5>
                    <p className="text-[10px] text-slate-400 font-bold tracking-wider flex items-center gap-1">
                      {academy.domain} <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="grid md:grid-cols-3 gap-4 mb-20">
          <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call Us</p>
              <p className="text-sm font-black text-slate-900">+91 9864646481</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-emerald-200 transition-colors">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Support</p>
              <p className="text-sm font-black text-slate-900 truncate">telanganachessschool@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-rose-200 transition-colors">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5 text-rose-600" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Visit Us</p>
              <p className="text-sm font-black text-slate-900">Hyderabad, Telangana</p>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              © 2024 Telangana Chess School. <span className="hidden sm:inline">Certified Strategy Training.</span>
            </p>
          </div>
          <div className="flex gap-8">
            <Link href="/terms" className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}