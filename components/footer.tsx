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
} from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/telanganachessacademy", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
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
    { name: "Telangana Chess Academy", href: "https://telanganachessacademy.com/", domain: "telanganachessacademy.com" },
    { name: "Telangana Chess School", href: "https://www.telanganachessschool.com", domain: "telanganachessschool.com" },
    { name: "Bharat Chess Academy", href: "https://www.bharatchessacademy.com", domain: "bharatchessacademy.com" },
    { name: "Bharat Chess Institute", href: "http://www.bharatchessinstitute.com", domain: "bharatchessinstitute.com" },
    { name: "Hyderabad Chess Institute", href: "https://www.hyderabadchessinstitute.com", domain: "hyderabadchessinstitute.com" },
  ];

  const stats = [
    { icon: Trophy, number: "500+", label: "Students Trained" },
    { icon: Crown, number: "50+", label: "Tournaments" },
    { icon: Target, number: "100+", label: "Success Stories" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      
      <div className="container mx-auto px-4 py-6 relative z-10">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-2">
          {/* Academy Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform">
                  <TrophyIcon className="w-7 h-7 text-white transform" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-gray-900"></div>
              </div>
              <div>
                <h3 className="font-bold text-xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                 Telangana Chess School
                </h3>
                <p className="text-blue-200 text-sm font-medium">Strategic Excellence in Chess</p>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-6 leading-relaxed">
              Dedicated to providing quality chess education and developing strong foundations for future success in chess.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-all duration-300 flex items-center group text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg relative inline-block">
              Contact Info
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="w-4 h-4 text-blue-300" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">+91 9864646481</p>
                  <p className="text-white/60 text-xs">Mon - Sun, 10:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                  <Mail className="w-4 h-4 text-green-300" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">telanganachessschool@gmail.com</p>
                  <p className="text-white/60 text-xs">We'll respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all duration-300">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-colors">
                  <MapPin className="w-4 h-4 text-purple-300" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Hyderabad, Telangana</p>
                  <p className="text-white/60 text-xs">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Academy Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg relative inline-block">
              Our Network
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </h4>
            <div className="space-y-3">
              {academyLinks.map((academy, index) => (
                <div
                  key={index}
                  className="group hover:bg-white/5 p-2 rounded-lg transition-all duration-300"
                >
                  <h5 className="text-white text-sm font-medium mb-1">{academy.name}</h5>
                  <a
                    href={academy.href}
                    className="text-white/60 hover:text-blue-300 transition-colors text-xs flex items-center"
                  >
                    <div className="w-1 h-1 bg-white/40 rounded-full mr-2 group-hover:bg-blue-400 transition-colors"></div>
                    {academy.domain}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-white/70 text-sm">
                © 2024 Telangana Chess School. All rights reserved. |{" "}
                <span className="text-blue-300">Master Your Strategy</span>
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-white/60 hover:text-white text-sm transition-all duration-300 hover:underline"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/contact"
                className="text-white/60 hover:text-white text-sm transition-all duration-300 hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chess Pieces */}
      <div className="absolute bottom-10 left-10 opacity-10">
        <TrophyIcon className="w-16 h-16" />
      </div>
      <div className="absolute top-20 right-20 opacity-10">
        <Crown className="w-12 h-12" />
      </div>
    </footer>
  );
}