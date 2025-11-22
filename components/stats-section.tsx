"use client";

import { useEffect, useState } from "react";
import { Trophy, Users, Award, Gamepad2 } from "lucide-react";

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    const el = document.getElementById("stats-section");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "50", suffix: "+", label: "Unique Features", icon: Trophy, color: "text-amber-600" },
    { value: "500", suffix: "+", label: "Happy Students", icon: Users, color: "text-blue-600" },
    { value: "15", suffix: "+", label: "FIDE Rated Coaches", icon: Award, color: "text-emerald-600" },
    { value: "1000", suffix: "+", label: "Training Games", icon: Gamepad2, color: "text-purple-600" },
  ];

  return (
    <section
      id="stats-section"
      className="py-10 md:py-18 bg-white"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence in chess education
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`text-center ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } transition-all duration-700 ease-out`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-50">
                  <Icon className={`w-10 h-10 ${stat.color}`} />
                </div>

                {/* Number */}
                <div className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2">
                  {stat.value}
                  <span className={`text-4xl md:text-5xl ${stat.color}`}>
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-lg md:text-xl font-medium text-gray-600">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Optional subtle divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </section>
  );
}