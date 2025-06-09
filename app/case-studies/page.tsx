'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Clock, Users, Sparkles, Award } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const caseStudies = [
  {
    title: 'Global Bank Transforms Customer Experience with MuleSoft',
    client: 'Major Financial Institution',
    industry: 'Banking',
    challenge: 'Legacy systems preventing real-time customer data access',
    solution: 'MuleSoft Anypoint Platform integration with AI-powered analytics',
    results: [
      '70% faster customer onboarding',
      '300% improvement in data processing speed',
      '$2.5M annual cost savings',
      '99.9% system uptime'
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    duration: '8 months',
    teamSize: '12 specialists',
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Healthcare Provider Automates Patient Care with AI Agents',
    client: 'Regional Healthcare Network',
    industry: 'Healthcare',
    challenge: 'Manual patient scheduling and care coordination inefficiencies',
    solution: 'Custom AI automation agents with intelligent workflow management',
    results: [
      '60% reduction in scheduling errors',
      '45% faster patient processing',
      '85% staff satisfaction improvement',
      '$1.8M operational savings'
    ],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    duration: '6 months',
    teamSize: '8 specialists',
    color: 'from-green-500 to-teal-600',
  },
  {
    title: 'E-commerce Giant Scales with Intelligent Integration',
    client: 'Fortune 500 Retailer',
    industry: 'Retail',
    challenge: 'Disconnected systems causing inventory and fulfillment issues',
    solution: 'API-led connectivity with real-time inventory management',
    results: [
      '40% reduction in stockouts',
      '25% faster order fulfillment',
      '200% increase in API throughput',
      '$5M revenue increase'
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    duration: '10 months',
    teamSize: '15 specialists',
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Manufacturing Leader Optimizes Operations with AI',
    client: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    challenge: 'Inefficient production planning and quality control processes',
    solution: 'AI-powered predictive analytics and automated quality systems',
    results: [
      '30% improvement in production efficiency',
      '50% reduction in quality defects',
      '20% decrease in maintenance costs',
      '$3.2M annual savings'
    ],
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    duration: '12 months',
    teamSize: '10 specialists',
    color: 'from-orange-500 to-red-600',
  },
];

const statsData = [
  { number: '500+', label: 'Projects Delivered', color: 'from-blue-500 to-purple-600' },
  { number: '$50M+', label: 'Client Savings Generated', color: 'from-green-500 to-teal-600' },
  { number: '98%', label: 'Client Satisfaction', color: 'from-purple-500 to-pink-600' },
  { number: '15+', label: 'Industries Served', color: 'from-orange-500 to-red-600' },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="pt-20">
        {/* Enhanced Hero Section */}
        <section className="py-16 cta-gradient relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl floating-animation" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl floating-animation" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/30 badge-glow">
                <Award className="h-4 w-4 animate-bounce-subtle" />
                <span className="font-medium">Success Stories</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
                Real Results from
                <span className="block text-gradient-animated">
                  Real Companies
                </span>
              </h1>
              <p className="text-xl text-white/95 max-w-3xl mx-auto text-shadow">
                Discover how we've helped companies across industries transform their operations 
                with MuleSoft integrations, AI solutions, and intelligent automation.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              {statsData.map((stat, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer interactive-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{stat.label}</div>
                  <div className={`w-8 h-1 bg-gradient-to-r ${stat.color} mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Case Studies */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-12">
              {caseStudies.map((study, index) => (
                <Card 
                  key={index} 
                  className="service-card overflow-hidden shadow-2xl group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="card-hover-effect absolute inset-0" />
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Enhanced Image */}
                    <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                      <div className="absolute top-4 left-4">
                        <Badge className={`bg-gradient-to-r ${study.color} text-white border-0 shadow-lg`}>
                          {study.industry}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Enhanced Content */}
                    <div className="p-8 lg:p-12 relative z-10">
                      <div className="space-y-6">
                        {/* Enhanced Header */}
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 flex-wrap gap-2">
                            <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                              <Clock className="h-4 w-4 mr-1" />
                              {study.duration}
                            </div>
                            <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                              <Users className="h-4 w-4 mr-1" />
                              {study.teamSize}
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{study.title}</h3>
                          <p className={`font-medium bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>{study.client}</p>
                        </div>

                        {/* Enhanced Challenge & Solution */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{study.solution}</p>
                          </div>
                        </div>

                        {/* Enhanced Results */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <TrendingUp className={`h-5 w-5 mr-2 bg-gradient-to-r ${study.color} bg-clip-text text-transparent`} />
                            Key Results
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="flex items-center space-x-2 group/result cursor-pointer">
                                <div className={`w-2 h-2 bg-gradient-to-r ${study.color} rounded-full flex-shrink-0 group-hover/result:scale-150 transition-transform duration-300`} />
                                <span className="text-sm text-gray-700 group-hover/result:text-gray-900 transition-colors duration-300">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Enhanced CTA */}
                        <Button className={`w-full sm:w-auto bg-gradient-to-r ${study.color} hover:shadow-xl text-white border-0 interactive-button`}>
                          View Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results with our proven technology solutions.
              </p>
              <Button asChild size="lg" className="button-gradient text-white shadow-xl interactive-button px-8 py-4 text-lg font-semibold">
                <Link href="/book-consultation" className="flex items-center">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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