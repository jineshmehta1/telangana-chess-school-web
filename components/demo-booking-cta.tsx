import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, Star, Users, Phone } from "lucide-react";
import Link from "next/link";

export function DemoBookingCTA() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Personalized Assessment",
      description: "Get a comprehensive evaluation of your current chess level and skills",
      gradient: "from-blue-500 to-cyan-500",
      light: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      icon: Users,
      title: "Meet Your Coach",
      description: "Connect with one of our experienced instructors who matches your learning style",
      gradient: "from-purple-500 to-indigo-500",
      light: "bg-purple-50",
      border: "border-purple-200",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose a time that works best for your schedule, including evenings and weekends",
      gradient: "from-pink-500 to-rose-500",
      light: "bg-pink-50",
      border: "border-pink-200",
    },
    {
      icon: Star,
      title: "Customized Learning Plan",
      description: "Receive a tailored roadmap to improve your chess skills effectively",
      gradient: "from-emerald-500 to-teal-500",
      light: "bg-emerald-50",
      border: "border-emerald-200",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Headline + CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Chess Journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Book a free demo lesson today and discover how our expert instructors can help you master the game of chess.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r cursor-pointer from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Book Free Demo Lesson
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold text-lg px-10 py-7 rounded-2xl transition-all duration-300 flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              WHATSAPP Us: +91-9864646481
            </Button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-white border ${benefit.border} rounded-3xl p-8 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-500`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient}`} />
                
                <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-4 shadow-lg mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* What to Expect */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-14">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What to Expect in Your Demo Lesson
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                number: 1,
                title: "Skill Assessment",
                description: "We'll evaluate your current chess knowledge and playing strength",
              },
              {
                number: 2,
                title: "Interactive Lesson",
                description: "Experience our teaching methodology with a sample lesson",
              },
              {
                number: 3,
                title: "Learning Plan",
                description: "Get a personalized roadmap for your chess improvement journey",
              },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="relative inline-block">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full blur-xl -z-10" />
                </div>

                <h4 className="mt-6 text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
