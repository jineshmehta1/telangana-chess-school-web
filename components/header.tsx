"use client";
import { useState } from "react";
import { Phone, Mail, Menu, X, ArrowUpRight, Crown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    {
      name: "ONLINE COACHING",
      href: "https://coaching.telanganachessacademy.com/",
      isExternal: true,
    },
    {
      name: "Events",
      href: "https://telanganachessacademy.com/tournaments",
      isExternal: true,
    },
    { name: "Coaches", href: "/coaches" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50 top-0 bg-white/95 backdrop-blur-md border-b border-slate-100">
      {/* Simple Top Bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 bg-slate-50 border-b border-slate-100">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <Phone className="w-3 h-3 text-[#1a5f5f]" />
            <span>+91 9864646481</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <Mail className="w-3 h-3 text-[#1a5f5f]" />
            <span>telanganachessschool@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Crown className="w-3 h-3 text-amber-500" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">
            Professional Chess Training in INDIA
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section - ONE LINE FIX HERE */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className=" flex items-center justify-center">
              <Image
                src="/logo.ico"
                alt="TCS Logo"
                width={40}
                height={40}
              />
            </div>
            <span className="text-lg md:text-xl font-black tracking-tighter text-slate-900 whitespace-nowrap uppercase">
              Telangana Chess School
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#1a5f5f] transition-all flex items-center gap-1"
                  >
                    {item.name}
                    <ArrowUpRight className="w-3 h-3 opacity-40" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-[#1a5f5f] transition-all"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA - Simple Rounded Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button className="bg-[#1a5f5f] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#134646] transition-all shadow-sm">
                Enroll Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 p-4 shadow-xl">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-4 text-sm font-bold uppercase tracking-widest text-slate-900 border-b border-slate-50 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
                {...(item.isExternal ? { target: "_blank" } : {})}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="mt-4">
              <button className="w-full bg-[#1a5f5f] text-white py-4 rounded-xl font-bold uppercase tracking-widest">
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}