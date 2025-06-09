'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight, Quote, TrendingUp, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CTO at TechFlow Solutions',
    company: 'TechFlow Solutions',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'The Nexus Tech transformed our entire data infrastructure with their MuleSoft integration expertise. We saw a 300% improvement in processing speed and 40% cost reduction within 3 months.',
    rating: 5,
    metric: '300% faster processing',
    icon: TrendingUp,
    color: 'from-blue-500 to-purple-600',
  },
  {
    name: 'Michael Chen',
    title: 'Founder & CEO',
    company: 'InnovateLab',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'Working with The Nexus Tech was a game-changer. Their AI automation solutions helped us automate 60% of our manual processes and scale from startup to enterprise level.',
    rating: 5,
    metric: '60% automation achieved',
    icon: Award,
    color: 'from-green-500 to-teal-600',
  },
  {
    name: 'Emily Rodriguez',
    title: 'VP of Operations',
    company: 'Global Dynamics',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    content: 'Exceptional expertise and delivery. The integration project was completed ahead of schedule, and our system reliability improved to 99.9%. Highly recommended!',
    rating: 5,
    metric: '99.9% uptime achieved',
    icon: Users,
    color: 'from-purple-500 to-pink-600',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-6 py-2">
            <Quote className="h-4 w-4 text-primary" />
            <span className="font-medium text-gray-700">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted by <span className="text-gradient-animated">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped companies achieve remarkable results with our technology solutions.
          </p>
        </div>

        {/* Enhanced Main Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <Card className="testimonial-card bg-white shadow-2xl border-0 overflow-hidden relative">
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.color} opacity-5`} />
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-accent/10 to-transparent rounded-full translate-x-20 translate-y-20" />
            
            <CardContent className="p-12 lg:p-16 relative z-10">
              <div className="text-center space-y-8">
                {/* Enhanced Quote Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${currentTestimonial.color} shadow-lg`}>
                  <Quote className="h-10 w-10 text-white" />
                </div>
                
                {/* Enhanced Quote */}
                <blockquote className="text-2xl md:text-3xl text-gray-900 leading-relaxed font-medium max-w-4xl mx-auto">
                  "{currentTestimonial.content}"
                </blockquote>
                
                {/* Enhanced Metric with Icon */}
                <div className={`inline-flex items-center space-x-3 bg-gradient-to-r ${currentTestimonial.color} rounded-2xl px-8 py-4 shadow-lg`}>
                  <currentTestimonial.icon className="h-6 w-6 text-white" />
                  <div className="text-xl font-bold text-white">{currentTestimonial.metric}</div>
                </div>

                {/* Enhanced Author Section */}
                <div className="flex items-center justify-center space-x-6">
                  <div className="relative">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${currentTestimonial.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <currentTestimonial.icon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
                    <p className="text-gray-600 font-medium">{currentTestimonial.title}</p>
                    <p className={`font-bold bg-gradient-to-r ${currentTestimonial.color} bg-clip-text text-transparent`}>
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>

                {/* Enhanced Rating */}
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-6 w-6 fill-yellow-400 text-yellow-400 animate-pulse" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Navigation */}
          <div className="flex items-center justify-center space-x-6 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 border-2 hover:scale-110 transition-all duration-300 interactive-button"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {/* Enhanced Dots */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex 
                      ? `w-12 h-4 bg-gradient-to-r ${testimonials[index].color}` 
                      : 'w-4 h-4 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 border-2 hover:scale-110 transition-all duration-300 interactive-button"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}