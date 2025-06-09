'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Bot, Zap, Clock, Shield } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const capabilities = [
  'Intelligent workflow automation',
  'Document processing agents',
  'Customer service automation',
  'Data entry and validation',
  'Report generation and distribution',
  'System monitoring and alerts',
];

const benefits = [
  {
    icon: Clock,
    title: '24/7 Operation',
    description: 'Automation agents work around the clock without breaks or downtime.',
  },
  {
    icon: Zap,
    title: 'Instant Processing',
    description: 'Process tasks in seconds that would take humans hours to complete.',
  },
  {
    icon: Shield,
    title: 'Error Reduction',
    description: 'Eliminate human errors with consistent, accurate automated processes.',
  },
  {
    icon: Bot,
    title: 'Scalable Solutions',
    description: 'Easily scale automation to handle increasing workloads.',
  },
];

export default function AutomationAgents() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">Intelligent Automation</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Automation
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Agents
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Deploy intelligent automation agents that streamline your workflows, eliminate repetitive tasks, 
                and free your team to focus on high-value activities.
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
                    See Results
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Automation Capabilities
                </h2>
                <p className="text-xl text-gray-600">
                  Comprehensive automation solutions for every business process
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
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
                  Why Choose Automation Agents
                </h2>
                <p className="text-xl text-gray-600">
                  Transform your operations with intelligent automation
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

        {/* ROI Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Automation ROI
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">70%</div>
                  <div className="text-gray-600">Time Savings</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">90%</div>
                  <div className="text-gray-600">Error Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">300%</div>
                  <div className="text-gray-600">Productivity Increase</div>
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
                Ready to Automate Your Workflows?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Let's identify the best automation opportunities for your business and implement intelligent agents.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/book-consultation">
                  Book Automation Assessment
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