import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, MapPin, Trophy, Users, Zap } from "lucide-react";
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
      gradient: "from-blue-500 to-cyan-500",
      lightBg: "bg-blue-50",
      borderColor: "border-blue-200",
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
      gradient: "from-purple-500 to-indigo-500",
      lightBg: "bg-purple-50",
      borderColor: "border-purple-200",
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
      gradient: "from-pink-500 to-rose-500",
      lightBg: "bg-pink-50",
      borderColor: "border-pink-200",
    },
  ];

  return (
    <section className="py-6 md:py-8 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our exciting chess events, tournaments, and workshops designed to enhance your skills and connect with fellow players.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => {
            const Icon = event.icon;
            return (
              <Card
                key={event.id}
                className={`group relative overflow-hidden bg-white border ${event.borderColor} rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              >
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${event.gradient}`} />

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${event.lightBg} border text-sm font-semibold`}>
                      <Icon className="w-4 h-4" />
                      <span>{event.type}</span>
                    </div>
                  </div>

                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span>{event.participants}</span>
                    </div>
                  </div>

                  <Link href="/contact" className="block mt-6">
                    <Button
                      className={`w-full cursor-pointer bg-gradient-to-r ${event.gradient} hover:opacity-90 text-white font-semibold shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                    >
                      Register Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link href="/events">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 font-semibold px-10 py-6 rounded-xl transition-all"
            >
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}