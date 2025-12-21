"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Clock,
  Search,
  Eye,
  Heart,
  Share2,
  BookOpen,
  ArrowRight,
  Sparkles,
  Crown,
  Layout,
  ChevronRight,
  Filter,
} from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Chess Pieces: Understanding Their Powers and Movements",
      content: `
# Chess Pieces
![Starting chess board](https://c4.wallpaperflare.com/wallpaper/51/1017/286/playing-chess-wallpaper-thumb.jpg)

Each piece in chess has its own unique powers. To become great at chess you must understand these powers and how they can be used to win the game.

## The King
The king is the piece with a cross at the top. This may not be the most powerful piece in chess, but it certainly is the most important. If you lose your king, you have lost the game.

### Movement
The king can move one square in any direction. It can't jump over material so at the start of a chess game there are no legal moves for the king.

## The Rook
The rook is the piece that looks like a castle. This is a very strong piece, also referred to as a major piece.

### Movement
The rook can move any number of squares up, down, and across. It can't jump over material.

## The Queen
The queen is the most powerful piece. It combines the moves of the rook and the bishop.

### Overview
The queens begin on the d1 and d8 squares. The queen is worth 9 points.
      `, // Truncated for display code brevity
      author: "Tejavath Naresh",
      authorImage: "/naresh.jpg",
      date: "2025-09-10",
      readTime: "12 min read",
      category: "basics",
      tags: ["Chess Pieces", "Beginner", "Rules"],
      image: "https://www.shutterstock.com/image-photo/chess-pieces-arranged-on-chessboard-600nw-1994555414.jpg",
      views: 1500,
      likes: 120,
      color: "text-blue-600",
      accent: "bg-blue-600",
      bg: "bg-blue-50/50",
      border: "border-blue-100",
    },
  ];

  const categories = [
    { id: "all", name: "All Archives", count: blogPosts.length, icon: Layout },
    { id: "basics", name: "Fundamentals", count: blogPosts.filter((p) => p.category === "basics").length, icon: Crown },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20 pt-32 relative overflow-hidden">
      {/* Editorial Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`, backgroundSize: '30px 30px' }} />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header - Editorial Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3 h-3 text-blue-600" /> Grandmaster Insights
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              THE <span className="text-blue-600 italic">ARCHIVES.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl border-l-2 border-slate-200 pl-6">
              Master the game with expert insights, strategic guides, and technical breakdowns from our FIDE-certified coaches.
            </p>
          </div>
        </div>

        {/* Command Center - Search & Filter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100">
          <div className="lg:col-span-8 relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              placeholder="Search tactics, openings, or guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-14 h-16 bg-white border-2 border-slate-100 focus:border-blue-600 rounded-2xl text-sm font-bold shadow-sm"
            />
          </div>
          <div className="lg:col-span-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="h-16 bg-white border-2 border-slate-100 focus:border-blue-600 rounded-2xl text-xs font-black uppercase tracking-widest">
                <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-blue-600" />
                    <SelectValue placeholder="Category" />
                </div>
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-slate-200 shadow-2xl">
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id} className="font-bold py-3">
                    {cat.name.toUpperCase()} ({cat.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Blog Post - Reading Dashboard Layout */}
        <div className="grid grid-cols-1 gap-12">
          {filteredPosts.map((post) => (
            <div key={post.id} className="group grid lg:grid-cols-12 gap-0 bg-white rounded-[3rem] border-2 border-slate-100 overflow-hidden shadow-2xl shadow-slate-200/50 hover:border-blue-100 transition-all duration-500">
              
              {/* Cover Image - Span 4 */}
              <div className="lg:col-span-4 relative h-80 lg:h-auto overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute top-6 left-6">
                  <Badge className={`${post.accent} text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border-none shadow-xl`}>
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* Main Reading Area - Span 8 */}
              <div className="lg:col-span-8 p-8 md:p-16 relative">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-50 pb-6">
                   <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {format(new Date(post.date), "MMM dd")}</div>
                   <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {post.readTime}</div>
                   <div className="flex items-center gap-2"><Eye className="w-3.5 h-3.5" /> {post.views} Views</div>
                   <div className="flex items-center gap-2 text-rose-500"><Heart className="w-3.5 h-3.5 fill-current" /> {post.likes}</div>
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-8">
                  {post.title}
                </h2>

                {/* Markdown Content - Styled as Editorial Studio */}
                <div className="prose prose-slate max-w-none">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]} 
                    components={{
                      img: ({node, ...props}) => (
                        <div className="relative aspect-video my-10 rounded-[2rem] overflow-hidden border-8 border-slate-50 shadow-xl">
                            <img className="w-full h-full object-cover" {...props} />
                        </div>
                      ),
                      h1: ({node, ...props}) => <h1 className="text-3xl font-black tracking-tight text-slate-900 mt-12 mb-6 uppercase" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-xl font-black tracking-tight text-slate-900 mt-10 mb-4 border-l-4 border-blue-600 pl-6 uppercase" {...props} />,
                      h3: ({node, ...props}) => <h3 className="text-lg font-bold text-slate-800 mt-8 mb-2" {...props} />,
                      p: ({node, ...props}) => <p className="text-slate-600 leading-relaxed font-medium mb-6" {...props} />,
                      li: ({node, ...props}) => <li className="text-slate-600 font-bold mb-2 list-none flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-600" /> {props.children}</li>
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Author Info & Tags */}
                <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <img src={post.authorImage} alt={post.author} className="w-14 h-14 rounded-2xl object-cover ring-4 ring-slate-50 shadow-lg" />
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Written By</p>
                      <h4 className="text-lg font-black text-slate-900 leading-none">{post.author}</h4>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <Button variant="outline" className="rounded-2xl h-14 px-8 border-2 border-slate-100 font-black uppercase tracking-widest text-xs gap-3 hover:bg-slate-900 hover:text-white transition-all">
                        <Share2 className="w-4 h-4" /> Share Archive
                    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-32 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
            <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-200">
              <Search className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tighter">No Archives Found</h3>
            <p className="text-slate-500 font-medium mt-2 mb-8">Adjust your tactics or search for a different keyword.</p>
            <Button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="bg-slate-900 text-white px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-xs"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Background ghost text */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-[0.03] translate-y-1/2">
        <h2 className="text-[20vw] font-black text-slate-900 leading-none">INSIGHT</h2>
      </div>
    </div>
  );
}