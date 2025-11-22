import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Star,
  Users,
  Calendar,
  Medal,
  Target,
  Sparkles,
  TrophyIcon,
  Crown,
  Award,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function CoachesPage() {
  const coaches = [
    {
      name: "Tejavath Naresh",
      title: "Head Coach & Founder",
      image: "/naresh.jpg",
      specialization: ["Opening Theory", "Endgame Mastery", "Tournament Preparation"],
      achievements: ["FIDE Arbiter", "FIDE Rated Player", "Chess Coach"],
      experience: "15+ Years",
      students: "200+",
      bio: "Tejavath Naresh is the visionary founder of our academy with over 15 years of coaching excellence.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      accentColor: "text-blue-600",
    },
    {
      name: "Tejavath Aruna",
      title: "Senior Coach",
      rating: "2450",
      image: "/coach.png",
      specialization: ["Tactical Training", "Youth Development", "Women's Chess"],
      achievements: ["FIDE Rated Player", "Chess Coach"],
      experience: "12+ Years",
      students: "150+",
      bio: "Tejavath Aruna specializes in developing young talent and has coached multiple national champions.",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      accentColor: "text-emerald-600",
    },
    {
      name: "Ranghanathan K S",
      title: "Junior Coach",
      rating: "2400",
      image: "/coach.png",
      specialization: ["Beginner Training", "School Programs", "Online Coaching"],
      achievements: ["International FIDE Rated"],
      experience: "8+ Years",
      students: "100+",
      bio: "Ranghanathan K S brings innovative teaching methods and excels in online chess education.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      accentColor: "text-purple-600",
    },
    {
      name: "Kethavath Lokesh",
      title: "Assistant Coach",
      rating: "2300",
      image: "/coach.png",
      specialization: ["Puzzle Solving", "Pattern Recognition", "Rapid Chess"],
      achievements: ["International FIDE Rated"],
      experience: "6+ Years",
      students: "80+",
      bio: "Kethavath Lokesh is known for her expertise in tactical training and rapid chess improvement.",
      color: "from-rose-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-rose-50 to-orange-50",
      accentColor: "text-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-6 py-2 text-lg shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Meet Our Master Coaches
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Expert Coaches
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Learn from internationally recognized chess masters and certified coaches dedicated to transforming your game
          </p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="relative py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coaches.map((coach, index) => (
              <Card
                key={index}
                className={`relative ${coach.bgColor} border-2 border-gray-200/50 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group`}
              >
                {/* Gradient Accent */}
                <div className={`h-2 bg-gradient-to-r ${coach.color}`}></div>
                
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Coach Image */}
                    <div className="md:w-2/5 relative">
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <img
                          src={coach.image || "/placeholder.svg"}
                          alt={coach.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-black/40 md:to-transparent"></div>
                        
                        {/* Floating Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className={`bg-gradient-to-r ${coach.color} text-white px-3 py-1 rounded-full shadow-lg`}>
                            {coach.title}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Coach Info */}
                    <div className="md:w-3/5 p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{coach.name}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{coach.bio}</p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200">
                          <Calendar className="w-5 h-5 mx-auto mb-2 text-gray-600" />
                          <div className="text-xs font-semibold text-gray-600">Experience</div>
                          <div className="text-sm font-bold text-gray-800">{coach.experience}</div>
                        </div>
                        <div className="text-center p-3 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200">
                          <Users className="w-5 h-5 mx-auto mb-2 text-gray-600" />
                          <div className="text-xs font-semibold text-gray-600">Students</div>
                          <div className="text-sm font-bold text-gray-800">{coach.students}</div>
                        </div>
                      </div>

                      {/* Specializations */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          Specializations
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {coach.specialization.map((spec, specIndex) => (
                            <Badge
                              key={specIndex}
                              variant="outline"
                              className="border-gray-300 bg-white/80 text-gray-700 hover:bg-white text-xs px-3 py-1"
                            >
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Medal className="w-4 h-4" />
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {coach.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${coach.color}`}></div>
                              <span className="text-sm text-gray-600">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link href="/contact" className="block">
                        <Button className={`w-full bg-gradient-to-r ${coach.color} hover:opacity-90 text-white py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                          Book Session with {coach.name.split(' ')[0]}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Coaches */}
      <section className="relative py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Why Train With Our Coaches?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our coaching methodology combines traditional chess wisdom with modern teaching techniques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Crown,
                title: "Master-Level Expertise",
                description: "All coaches are FIDE certified with extensive tournament experience and proven teaching methodologies.",
                color: "from-blue-400 to-cyan-400"
              },
              {
                icon: Zap,
                title: "Personalized Training",
                description: "Customized learning paths tailored to your skill level, goals, and learning style for maximum progress.",
                color: "from-emerald-400 to-green-400"
              },
              {
                icon: TrophyIcon,
                title: "Proven Results",
                description: "Track record of transforming beginners into tournament champions with measurable rating improvements.",
                color: "from-purple-400 to-pink-400"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Chess Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Book a complimentary trial session with any of our expert coaches and experience our proven teaching methods
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Book Free Trial Session
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-2xl font-semibold backdrop-blur-sm">
                  View All Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}