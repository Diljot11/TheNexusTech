'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { number: '500+', label: 'Projects Delivered' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Enterprise Clients' },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-25 lg:pb-20">
      {/* Enhanced Background Gradient with Animation */}
      <div className="absolute inset-0 cta-gradient opacity-95" />
      
      {/* Interactive Mouse Follower */}
      <div 
        className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      {/* Top Border/Separator with Glow */}
      <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-72 h-72 bg-white/8 rounded-full blur-3xl floating-animation animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl floating-animation animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Floating Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/30 badge-glow">
              <Sparkles className="h-4 w-4 animate-bounce-subtle" />
              <span className="font-medium">AI-Powered Enterprise Solutions</span>
            </div>

            {/* Main Headline with Enhanced Animation */}
            <div className="mt-8 lg:mt-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-shadow">
                Enterprise Integration &
                <span className="block text-gradient-animated">
                  AI Solutions
                </span>
              </h1>
            </div>
            
            {/* Subtitle with Enhanced Styling */}
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto text-shadow">
              Transform your business with <span className="font-semibold text-yellow-300">MuleSoft integrations</span>, 
              <span className="font-semibold text-orange-300"> AI-powered automation</span>, 
              and intelligent solutions that drive <span className="font-semibold text-green-300">measurable results</span>.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-white/95 shadow-xl group px-8 py-4 text-lg font-semibold interactive-button glow-effect"
              >
                <Link href="/book-consultation" className="flex items-center">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold transition-all duration-300 border-2 border-white text-primary hover:bg-white hover:text-primary interactive-button backdrop-blur-sm"
              >
                <Link 
                  href="#services" 
                  className="flex items-center group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  View Our Services
                </Link>
              </Button>
            </div>

            {/* Enhanced Stats with Interactive Elements */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 text-shadow">
                    {stat.number}
                  </div>
                  <div className="text-white/90 mt-1 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                  <div className="w-8 h-1 bg-white/30 mx-auto mt-2 rounded-full group-hover:bg-yellow-300 group-hover:w-12 transition-all duration-300" />
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}