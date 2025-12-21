"use client";
import { useState } from "react";
import { Phone, Mail, Menu, X, ArrowUpRight, Crown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string }[];
  isExternal?: boolean;
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    {
      name: "Online Coaching",
      href: "https://coaching.telanganachessacademy.com/",
      isExternal: true,
    },
    {
      name: "Events",
      href: "https://telanganachessacademy.com/tournaments",
      isExternal: true,
    },
    { name: "Courses", href: "/courses" },
    { name: "Our Coaches", href: "/coaches" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50 top-0 md:top-">
      <div className="mx-auto  ">
        {/* Navigation Block - Static Rounded Design */}
        <div className="relative bg-white/90 backdrop-blur-md border border-slate-200/60 shadow-2xl shadow-slate-200/50 overflow-visible">
          
          {/* Top Info Bar - Always visible on desktop */}
          <div className="hidden md:flex items-center justify-between px-10 py-2 border-b border-slate-100/50 bg-slate-50/50 rounded-t-[2rem]">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <Phone className="w-3 h-3 text-blue-600" />
                <span>+91 9864646481</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <Mail className="w-3 h-3 text-blue-600" />
                <span>telanganachessschool@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-3 h-3 text-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                Professional Chess Training in INDIA
              </span>
            </div>
          </div>

          {/* Main Navigation Area */}
          <div className="px-6 md:px-10 py-4 flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6">
                <Image
                  src="/logo.ico"
                  alt="TCS Logo"
                  width={28}
                  height={28}
                  className="invert"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter text-slate-900 leading-none">
                  TELANGANA <span className="text-blue-600 italic font-black">CHESS</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Strategic Excellence
                </span>
              </div>
            </Link>

            {/* Desktop Nav - Dashboard Style */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-100">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 text-[11px] font-black uppercase tracking-wider text-slate-500 hover:text-blue-600 hover:bg-white rounded-xl transition-all flex items-center gap-1.5"
                    >
                      {item.name}
                      <ArrowUpRight className="w-3 h-3 opacity-50" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2.5 text-[11px] font-black uppercase tracking-wider text-slate-500 hover:text-slate-900 hover:bg-white rounded-xl transition-all block"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link href="/contact" className="hidden lg:block">
              <button className="bg-slate-900 text-white px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg shadow-slate-200">
                Enroll Now
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-3 rounded-2xl bg-slate-50 text-slate-900 border border-slate-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-4 bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl p-6 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-900"
                      >
                        {item.name}
                        <ArrowUpRight className="w-4 h-4 text-blue-600" />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="block p-4 hover:bg-slate-50 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-4 pt-6 border-t border-slate-100 space-y-4">
                  <div className="flex items-center gap-3 text-slate-500">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs font-bold">+91 9864646481</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs font-bold text-wrap truncate">telanganachessschool@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}