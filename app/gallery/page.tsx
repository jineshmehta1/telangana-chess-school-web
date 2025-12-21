"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Trophy,
  Users,
  BookOpen,
  Grid3X3,
  List,
  Sparkles,
  Filter,
  Maximize2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryCategories = [
  { id: "all", name: "All Archives", icon: Camera, color: "text-slate-600", accent: "bg-slate-600", border: "border-slate-100" },
  { id: "tournaments", name: "Tournaments", icon: Trophy, color: "text-amber-600", accent: "bg-amber-600", border: "border-amber-100" },
  { id: "certificate", name: "Credentials", icon: ShieldCheck, color: "text-emerald-600", accent: "bg-emerald-600", border: "border-emerald-100" },
  { id: "events", name: "Academy Life", icon: BookOpen, color: "text-indigo-600", accent: "bg-indigo-600", border: "border-indigo-100" },
];

const galleryImages = [
    { id: 1, src: "/gallery-1.jpg", alt: "Chess Tournament 2024", category: "tournaments", title: "Organising Tournaments", description: "Our students competing in the championship" },
    { id: 2, src: "/gallery-2.jpg", alt: "Beginner Chess Class", category: "tournaments", title: "Tournaments", description: "Young minds learning the mastery of chess" },
    { id: 3, src: "/gallery-3.jpg", alt: "Chess Workshop", category: "tournaments", title: "Inhouse Tournaments", description: "Advanced strategy inhouse tournaments." },
    { id: 4, src: "/certificate-1.jpg", alt: "Youth Tournament", category: "certificate", title: "Fide Arbiter", description: "Tejavath Naresh Sir" },
    { id: 5, src: "/certificate-2.jpeg", alt: "Advanced Chess Class", category: "certificate", title: "Certification", description: "Tejawat Naresh Sir" },
    { id: 6, src: "/certificate-3.jpeg", alt: "Chess Seminar", category: "certificate", title: "National Arbiter", description: "Tejawat Naresh Sir" },
    { id: 7, src: "/academy.jpeg", alt: "School Tournament", category: "events", title: "Inter-School Championship", description: "Schools competing for the championship title" },
    { id: 8, src: "/certificate.jpg", alt: "School Tournament", category: "certificate", title: "Arena International Master", description: "Tejawat Naresh Sir" }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex((img) => img.id === image.id));
  };

  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20 pt-32 relative overflow-hidden">
      {/* Editorial Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '30px 30px' }} />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3 h-3 text-blue-600" /> Visual Legacy
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              THE <span className="text-blue-600 italic">GALLERY.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl border-l-2 border-slate-200 pl-6">
              Capturing the spirit of excellence through memorable moments of learning, 
              international competition, and academic achievement.
            </p>
          </div>
        </div>

        {/* Command Center - Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 bg-slate-50 p-4 rounded-[2.5rem] border border-slate-100">
          <div className="flex flex-wrap items-center gap-2">
            {galleryCategories.map(category => {
              const selected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                    selected
                      ? "bg-slate-900 text-white shadow-xl"
                      : "text-slate-400 hover:text-slate-900"
                  }`}
                >
                  <category.icon className="w-3.5 h-3.5" />
                  {category.name}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2.5 rounded-xl transition-all ${viewMode === "grid" ? "bg-slate-900 text-white" : "text-slate-300"}`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("masonry")}
              className={`p-2.5 rounded-xl transition-all ${viewMode === "masonry" ? "bg-slate-900 text-white" : "text-slate-300"}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Gallery Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${viewMode}`}
            className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" 
              : "columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8"}
          >
            {filteredImages.map((image, index) => {
              const category = galleryCategories.find(cat => cat.id === image.category);
              return (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative mb-8"
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl shadow-slate-200 transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-1">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ${
                        viewMode === "grid" ? "h-72" : "h-auto"
                      } scale-105 group-hover:scale-100`}
                    />
                    
                    {/* Hover Info Overlay */}
                    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-white">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-4 ${category?.accent}`}>
                            <Maximize2 className="w-4 h-4" />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">{category?.name}</p>
                        <h3 className="text-xl font-black tracking-tight leading-tight">{image.title}</h3>
                    </div>

                    {/* Simple Static Badge */}
                    <div className="absolute top-4 left-4 group-hover:opacity-0 transition-opacity">
                        <div className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-tighter bg-white text-slate-900 shadow-lg`}>
                            {category?.name}
                        </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-32 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
            <Camera className="w-12 h-12 text-slate-200 mx-auto mb-6" />
            <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Archives Empty</h3>
            <p className="text-slate-500 font-medium mt-2">Adjust your category to view more moments.</p>
          </div>
        )}
      </div>

      {/* Lightbox - Executive Studio View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-xl p-6"
            onClick={closeLightbox}
          >
            <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <div className="relative w-full rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl bg-black">
                <img src={selectedImage.src} className="w-full max-h-[70vh] object-contain" />
              </div>

              {/* Lightbox Controls */}
              <button onClick={closeLightbox} className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors">
                <X className="w-8 h-8" />
              </button>

              <div className="flex items-center gap-4 mt-8">
                <button onClick={prevImage} className="w-14 h-14 rounded-2xl bg-white/5 text-white hover:bg-white/10 flex items-center justify-center transition-all">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="bg-white rounded-3xl p-8 shadow-2xl text-center min-w-[300px]">
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2">
                        {galleryCategories.find(cat => cat.id === selectedImage.category)?.name}
                    </p>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-1">{selectedImage.title}</h3>
                    <p className="text-slate-500 text-sm font-medium">{selectedImage.description}</p>
                    <p className="text-[10px] font-bold text-slate-300 mt-4 uppercase tracking-[0.3em]">{currentImageIndex + 1} / {filteredImages.length}</p>
                </div>
                <button onClick={nextImage} className="w-14 h-14 rounded-2xl bg-white/5 text-white hover:bg-white/10 flex items-center justify-center transition-all">
                    <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Ghost Text */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none opacity-[0.03] translate-y-1/2">
        <h2 className="text-[20vw] font-black text-slate-900 leading-none">MOMENTS</h2>
      </div>
    </div>
  );
}

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${className}`}>
    {children}
  </span>
);