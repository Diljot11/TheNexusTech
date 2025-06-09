'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Workflow, Brain, Bot, Globe, Smartphone, Zap, Star } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Workflow,
    title: 'MuleSoft Integrations',
    description: 'Enterprise API-led connectivity solutions that seamlessly connect your systems and applications.',
    price: 'From $25,000',
    duration: '8-16 weeks',
    popular: false,
    color: 'from-blue-500 to-purple-600',
    features: ['API-led connectivity', 'Real-time sync', 'Enterprise security'],
  },
  {
    icon: Brain,
    title: 'AI-First Business Solutions',
    description: 'Custom AI models and machine learning solutions designed for measurable business impact.',
    price: 'From $20,000',
    duration: '10-20 weeks',
    popular: false,
    color: 'from-purple-500 to-pink-600',
    features: ['Custom AI models', 'ML implementation', 'Predictive analytics'],
  },
  {
    icon: Bot,
    title: 'Automation Agents',
    description: 'Intelligent automation agents that streamline workflows and eliminate repetitive tasks.',
    price: 'From $15,000',
    duration: '6-12 weeks',
    popular: true,
    color: 'from-green-500 to-blue-600',
    features: ['Workflow automation', 'Document processing', '24/7 operation'],
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Modern, responsive websites built with cutting-edge technologies and optimized for performance.',
    price: 'From $8,000',
    duration: '4-8 weeks',
    popular: false,
    color: 'from-orange-500 to-red-600',
    features: ['Responsive design', 'SEO optimized', 'Performance focused'],
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    price: 'From $18,000',
    duration: '8-16 weeks',
    popular: false,
    color: 'from-teal-500 to-green-600',
    features: ['Native & cross-platform', 'App store optimization', 'User-centric design'],
  },
];

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 text-primary">
            <Zap className="h-4 w-4" />
            <span className="font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Transform Your Business with{' '}
            <span className="text-gradient-animated">Expert Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From MuleSoft integrations to AI-powered automation, we deliver enterprise-grade solutions 
            that transform your business operations and drive measurable results.
          </p>
        </div>

        {/* Enhanced Services Grid with proper spacing for badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative ${service.popular ? 'pt-4' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular Badge - positioned outside the card */}
              {service.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white shadow-lg animate-pulse-glow px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card 
                className={`service-card group cursor-pointer relative overflow-hidden h-full ${
                  service.popular ? 'ring-2 ring-primary shadow-2xl' : ''
                }`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Shimmer Effect */}
                <div className="card-hover-effect absolute inset-0" />
                
                <CardHeader className="text-center space-y-6 pb-4 relative z-10">
                  {/* Enhanced Icon */}
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <div>
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </CardDescription>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="text-center space-y-6 relative z-10">
                  {/* Enhanced Pricing */}
                  <div className="space-y-2">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center justify-center space-x-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  
                  {/* Enhanced Button */}
                  <Button 
                    asChild 
                    className={`w-full group/btn interactive-button bg-gradient-to-r ${service.color} hover:shadow-xl border-0 text-white`}
                  >
                    <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center mt-20 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-gray-700 font-medium">Ready to transform your business?</span>
          </div>
          <Button 
            asChild 
            size="lg" 
            className="button-gradient text-white shadow-xl interactive-button px-8 py-4 text-lg font-semibold"
          >
            <Link href="/book-consultation" className="flex items-center">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <p className="text-sm text-gray-500">
            ✨ No commitment required • Expert guidance • Actionable insights
          </p>
        </div>
      </div>
    </section>
  );
}