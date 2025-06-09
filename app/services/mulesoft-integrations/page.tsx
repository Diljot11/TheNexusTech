'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Workflow, Zap, Shield, Target } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const features = [
  'API-led connectivity architecture',
  'Real-time data synchronization',
  'Enterprise security compliance',
  'Scalable integration patterns',
  'Cloud and on-premise connectivity',
  'Legacy system modernization',
];

const benefits = [
  {
    icon: Zap,
    title: 'Faster Time to Market',
    description: 'Accelerate project delivery with pre-built connectors and reusable assets.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Built-in security features ensure your integrations meet compliance requirements.',
  },
  {
    icon: Target,
    title: 'Improved Efficiency',
    description: 'Streamline operations with automated data flows and reduced manual processes.',
  },
  {
    icon: Workflow,
    title: 'Seamless Connectivity',
    description: 'Connect any system, application, or data source with ease.',
  },
];

export default function MuleSoftIntegrations() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">Enterprise Integration</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                MuleSoft Integration
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Transform your enterprise with API-led connectivity. Our MuleSoft experts design and implement 
                scalable integration solutions that connect your systems, applications, and data seamlessly.
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
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What We Deliver
                </h2>
                <p className="text-xl text-gray-600">
                  Comprehensive MuleSoft integration services tailored to your business needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Our MuleSoft Services
                </h2>
                <p className="text-xl text-gray-600">
                  Experience the benefits of expert MuleSoft implementation
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <benefit.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{benefit.description}</CardDescription>
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
                  Our Implementation Process
                </h2>
                <p className="text-xl text-gray-600">
                  A proven methodology for successful MuleSoft implementations
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Discovery & Assessment',
                    description: 'We analyze your current systems, identify integration requirements, and design the optimal architecture.',
                  },
                  {
                    step: '02',
                    title: 'Design & Planning',
                    description: 'Create detailed integration designs, API specifications, and implementation roadmaps.',
                  },
                  {
                    step: '03',
                    title: 'Development & Testing',
                    description: 'Build and rigorously test all integrations to ensure reliability and performance.',
                  },
                  {
                    step: '04',
                    title: 'Deployment & Support',
                    description: 'Deploy to production with minimal disruption and provide ongoing support and optimization.',
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
                Ready to Transform Your Integrations?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Let's discuss how MuleSoft can streamline your operations and accelerate your digital transformation.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/book-consultation">
                  Book Free Consultation
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