'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Calendar, CheckCircle, Sparkles, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  { icon: Calendar, text: 'Free 30-minute strategy session' },
  { icon: Zap, text: 'Custom solution roadmap' },
  { icon: CheckCircle, text: 'ROI projection & timeline' },
  { icon: Shield, text: 'No-obligation consultation' },
];

export default function CTA() {
  const [email, setEmail] = useState('');

  return (
    <section className="py-24 cta-gradient relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/8 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-2xl floating-animation" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-white/3 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }} />
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Enhanced Header */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/30 badge-glow">
              <Sparkles className="h-4 w-4 animate-bounce-subtle" />
              <span className="font-medium">Transform Your Business Today</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white text-shadow">
              Ready to <span className="text-gradient-animated">Transform</span> Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed text-shadow">
              Join <span className="font-bold text-yellow-300">500+ companies</span> that have accelerated their growth with our 
              <span className="font-bold text-orange-300"> MuleSoft integrations</span> and 
              <span className="font-bold text-green-300"> AI-first solutions</span>.
            </p>
          </div>

          {/* Enhanced Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center space-y-3 text-white group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 border border-white/30">
                  <benefit.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-center font-medium group-hover:text-yellow-300 transition-colors duration-300">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* Enhanced Main CTA */}
          <div className="space-y-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/95 shadow-2xl group px-12 py-6 text-xl font-bold interactive-button glow-effect"
            >
              <Link href="/book-consultation" className="flex items-center">
                <Calendar className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Book Your Free Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>

            {/* Enhanced Quick Contact Card */}
            <Card className="bg-white/15 backdrop-blur-md border border-white/30 max-w-md mx-auto shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Get Started Instantly</h3>
                    <p className="text-white/80 text-sm">Receive a personalized strategy guide within 24 hours</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder-white/60 backdrop-blur-sm focus:bg-white/30 focus:border-white/50 transition-all duration-300"
                    />
                    <Button 
                      className="bg-white text-primary hover:bg-white/90 whitespace-nowrap interactive-button shadow-lg"
                      onClick={() => {
                        console.log('Email submitted:', email);
                        setEmail('');
                      }}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-xs text-white/70">
                    <Shield className="h-3 w-3" />
                    <span>100% secure • No spam • Unsubscribe anytime</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/90">
            {[
              { icon: CheckCircle, text: '500+ Projects Delivered', color: 'text-green-300' },
              { icon: CheckCircle, text: '98% Client Satisfaction', color: 'text-blue-300' },
              { icon: CheckCircle, text: 'Enterprise Security', color: 'text-purple-300' },
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <item.icon className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}