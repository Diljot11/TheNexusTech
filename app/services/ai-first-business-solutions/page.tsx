'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Brain, Zap, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const solutions = [
  'Custom AI model development',
  'Machine learning implementation',
  'Predictive analytics platforms',
  'Natural language processing',
  'Computer vision solutions',
  'AI-powered automation',
];

const useCases = [
  {
    icon: Brain,
    title: 'Intelligent Decision Making',
    description: 'AI-powered analytics that provide actionable insights for strategic business decisions.',
  },
  {
    icon: Target,
    title: 'Customer Experience Enhancement',
    description: 'Personalized customer interactions through AI-driven recommendation engines.',
  },
  {
    icon: TrendingUp,
    title: 'Operational Optimization',
    description: 'Streamline operations with AI that identifies inefficiencies and optimization opportunities.',
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Automate complex business processes with intelligent AI agents and workflows.',
  },
];

export default function AIFirstBusinessSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">Artificial Intelligence</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                AI-First Business
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations. 
                Our custom AI solutions deliver measurable results and competitive advantages.
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
                    View Success Stories
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our AI Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Comprehensive AI services designed to drive business transformation
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  AI Use Cases for Your Business
                </h2>
                <p className="text-xl text-gray-600">
                  Discover how AI can transform different aspects of your operations
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <useCase.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{useCase.description}</CardDescription>
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
                Proven AI ROI
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">40%</div>
                  <div className="text-gray-600">Average Cost Reduction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">3x</div>
                  <div className="text-gray-600">Faster Decision Making</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">85%</div>
                  <div className="text-gray-600">Process Automation</div>
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
                Ready to Implement AI in Your Business?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Let's explore how AI can drive measurable results for your specific business challenges.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/book-consultation">
                  Book AI Strategy Session
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