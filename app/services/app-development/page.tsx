'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Smartphone, Tablet, Monitor, Zap } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  'Native iOS and Android development',
  'Cross-platform app development',
  'Progressive Web Apps (PWAs)',
  'App store optimization',
  'Backend API development',
  'App maintenance and updates',
];

const platforms = [
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native iOS and Android apps for optimal performance and user experience.',
  },
  {
    icon: Tablet,
    title: 'Tablet Optimization',
    description: 'Optimized interfaces for tablet devices with enhanced functionality.',
  },
  {
    icon: Monitor,
    title: 'Cross-Platform',
    description: 'Single codebase apps that work seamlessly across all platforms.',
  },
  {
    icon: Zap,
    title: 'Progressive Web Apps',
    description: 'Web-based apps with native-like features and offline capabilities.',
  },
];

export default function AppDevelopment() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">Mobile Development</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                App
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Build powerful mobile applications that engage users and drive business growth. 
                Our expert developers create native and cross-platform apps with exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/book-consultation">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="/case-studies">
                    View Apps
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
                  Our App Development Services
                </h2>
                <p className="text-xl text-gray-600">
                  Complete mobile app solutions from concept to app store
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

        {/* Platforms Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Multi-Platform Development
                </h2>
                <p className="text-xl text-gray-600">
                  Reach your audience on every device and platform
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {platforms.map((platform, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <platform.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{platform.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{platform.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                App Performance Metrics
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
                  <div className="text-gray-600">Average App Store Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-gray-600">App Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">2s</div>
                  <div className="text-gray-600">Average Load Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to Build Your App?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Let's turn your app idea into reality with our expert development team.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/book-consultation">
                  Start Your App Project
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