"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  User,
  Sparkles,
  Target,
  Zap,
  Globe,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    "General Information",
    "Course Enrollment",
    "Private Coaching",
    "Tournament Registration",
    "Workshop Booking",
    "Partnership Inquiry",
    "Other",
  ];

  const faqs = [
    { question: "What age groups do you accept?", answer: "We welcome all aspiring masters from age 4 and up.", icon: User, color: "text-blue-600" },
    { question: "Do you offer trial classes?", answer: "Yes, personalized free trial classes are available upon request.", icon: Sparkles, color: "text-emerald-600" },
    { question: "What are your class timings?", answer: "Flexible scheduling across morning, afternoon, and evening slots.", icon: Clock, color: "text-amber-600" },
    { question: "Do you provide online coaching?", answer: "Yes, via our specialized interactive digital classroom system.", icon: Globe, color: "text-indigo-600" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xldwygeq", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "", inquiryType: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      alert("Error sending message.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20 pt-32 relative overflow-hidden">
      {/* Editorial Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '30px 30px' }} />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Editorial Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <ShieldCheck className="w-3 h-3 text-blue-600" /> Support HQ
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-6 uppercase">
              CONNECT WITH <br />
              <span className="text-blue-600 italic">THE MASTERS.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl border-l-2 border-slate-200 pl-6">
              Ready to start your chess journey? We're here to provide professional guidance, 
              enrollment support, and technical assistance.
            </p>
          </div>
        </div>

        {/* Contact Method Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { icon: MapPin, title: "Academy Location", detail: "Kothapet, Hyderabad", sub: "Road No 2, Alkapuri", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
            { icon: Phone, title: "Direct Line", detail: "+91-9864646481", sub: "WhatsApp Available", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
            { icon: Mail, title: "Email Support", detail: "telanganachessschool@gmail.com", sub: "24h Response Time", color: "text-rose-600", bg: "bg-rose-50", border: "border-rose-100" },
            { icon: Clock, title: "Academy Hours", detail: "10 AM - 8 PM", sub: "Open Mon - Sun", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-100" },
          ].map((item, idx) => (
            <Card key={idx} className={`group relative p-8 rounded-[2.5rem] border-2 ${item.border} ${item.bg} shadow-xl shadow-slate-100 transition-all duration-500 hover:-translate-y-2`}>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 transition-transform group-hover:rotate-12">
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{item.title}</h3>
                <p className="text-sm font-black text-slate-900 leading-tight mb-1">{item.detail}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.sub}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Interface: Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Submission Dashboard - Span 7 */}
          <div className="lg:col-span-7">
            <Card className="bg-white border-2 border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-none uppercase">Inquiry Module</h2>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Status: Active</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">MESSAGE DELIVERED</h3>
                  <p className="text-slate-500 font-medium">An academy representative will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</Label>
                      <Input 
                        required 
                        value={formData.name}
                        onChange={e => handleInputChange("name", e.target.value)}
                        className="h-14 bg-slate-50 border-none rounded-2xl text-sm font-bold focus-visible:ring-blue-600" 
                        placeholder="Grandmaster Name" 
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</Label>
                      <Input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={e => handleInputChange("email", e.target.value)}
                        className="h-14 bg-slate-50 border-none rounded-2xl text-sm font-bold focus-visible:ring-blue-600" 
                        placeholder="your@email.com" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</Label>
                      <Input 
                        value={formData.phone}
                        onChange={e => handleInputChange("phone", e.target.value)}
                        className="h-14 bg-slate-50 border-none rounded-2xl text-sm font-bold focus-visible:ring-blue-600" 
                        placeholder="+91" 
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Inquiry Type</Label>
                      <Select onValueChange={v => handleInputChange("inquiryType", v)}>
                        <SelectTrigger className="h-14 bg-slate-50 border-none rounded-2xl text-xs font-black uppercase tracking-widest">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-slate-100">
                          {inquiryTypes.map(t => <SelectItem key={t} value={t} className="font-bold">{t.toUpperCase()}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message Detail</Label>
                    <Textarea 
                      required 
                      rows={5}
                      value={formData.message}
                      onChange={e => handleInputChange("message", e.target.value)}
                      className="bg-slate-50 border-none rounded-[2rem] text-sm font-bold focus-visible:ring-blue-600 p-6 resize-none" 
                      placeholder="Tell us about your chess goals..." 
                    />
                  </div>

                  <Button type="submit" className="w-full h-16 bg-slate-900 text-white hover:bg-blue-600 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3">
                    Transmit Message <Send className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Location & Support - Span 5 */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8902674607427!2d78.50310917499912!3d17.322055904365462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9992786f1711%3A0xc2a03126f2eff5c4!2s11-13-75%20Road%20No%202%2C%20Alkapuri%2C%20Kothapet%2C%20Hyderabad%2C%20Telangana%20500035!5e0!3m2!1sen!2sin!4v1694871600000!5m2!1sen!2sin"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
              <div className="absolute top-6 left-6 pointer-events-none">
                <Badge className="bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border-none">Academy HQ</Badge>
              </div>
            </div>

            <Card className="bg-slate-900 text-white rounded-[2.5rem] p-10 overflow-hidden relative">
              <Zap className="absolute top-0 right-0 w-48 h-48 text-blue-500/10 -translate-y-12 translate-x-12" />
              <div className="relative z-10">
                <h3 className="text-xl font-black uppercase tracking-tight mb-6">Quick Response Protocol</h3>
                <div className="space-y-4">
                  {[
                    "Response within 2 hours during business sets",
                    "24/7 WhatsApp emergency academy line",
                    "Direct consultation for master-tier coaching"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Tactical Intel (FAQ) Section */}
        <div className="mt-40">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                 Tactical Intelligence
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                FREQUENT <span className="text-blue-600 italic">INTEL.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <Card key={i} className="group p-8 rounded-[2.5rem] border-2 border-slate-50 bg-slate-50/30 hover:bg-white hover:border-blue-100 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-transform group-hover:rotate-12`}>
                    <faq.icon className={`w-6 h-6 ${faq.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2 uppercase">{faq.question}</h3>
                    <p className="text-sm font-bold text-slate-500 leading-relaxed uppercase tracking-tighter">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Anchor CTA */}
        <div className="mt-32 relative bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white text-center overflow-hidden shadow-2xl shadow-blue-200">
          <Crown className="absolute top-0 left-0 w-64 h-64 text-white/10 -translate-x-20 -translate-y-20 rotate-12" />
          <div className="relative z-10">
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">STILL HAVE QUESTIONS?</h3>
            <p className="text-blue-100 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto italic">
              Our experts are standing by to help with any academy related queries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="h-16 px-10 bg-white text-blue-600 hover:bg-slate-50 rounded-2xl font-black uppercase tracking-widest text-xs gap-3">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
              <Button variant="outline" className="h-16 px-10 border-2 border-white text-white hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest text-xs gap-3">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none opacity-[0.03] translate-y-1/2">
        <h2 className="text-[20vw] font-black text-slate-900 leading-none">CONNECT</h2>
      </div>
    </div>
  );
}