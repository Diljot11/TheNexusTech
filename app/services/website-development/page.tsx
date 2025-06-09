'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Globe, Smartphone, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  'Custom website design and development',
  'Responsive mobile-first design',
  'E-commerce platform development',
  'Content management systems',
  'Performance optimization',
  'SEO and analytics integration',
];

const technologies = [
  {
    icon: Globe,
    title: 'Modern Frameworks',
    description: 'Built with React, Next.js, and other cutting-edge technologies.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Optimized for all devices with responsive design principles.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with advanced performance techniques.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Built with security best practices and reliable hosting.',
  },
];

export default function WebsiteDevelopment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">Web Development</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Website
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Create stunning, high-performance websites that drive results. Our expert developers 
                build modern, responsive websites optimized for user experience and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/book-consultation">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-primary hover:bg-white/10">
                  <Link href="/case-studies">
                    View Portfolio
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Web Development Services
                </h2>
                <p className="text-xl text-gray-600">
                  Comprehensive web solutions for businesses of all sizes
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Modern Web Technologies
                </h2>
                <p className="text-xl text-gray-600">
                  Built with the latest technologies for optimal performance
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {technologies.map((tech, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <tech.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{tech.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{tech.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Development Process
                </h2>
                <p className="text-xl text-gray-600">
                  A streamlined approach to deliver exceptional websites
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Discovery & Planning',
                    description: 'We understand your goals, target audience, and requirements to create a strategic plan.',
                  },
                  {
                    step: '02',
                    title: 'Design & Prototyping',
                    description: 'Create stunning designs and interactive prototypes for your approval.',
                  },
                  {
                    step: '03',
                    title: 'Development & Testing',
                    description: 'Build your website with clean code and thorough testing across all devices.',
                  },
                  {
                    step: '04',
                    title: 'Launch & Support',
                    description: 'Deploy your website and provide ongoing maintenance and support.',
                  },
                ].map((phase, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {phase.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to Build Your Website?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Let's create a website that represents your brand and drives business results.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/book-consultation">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}