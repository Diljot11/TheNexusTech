'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Target, Award, Globe, Sparkles, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const stats = [
  { number: '500+', label: 'Projects Completed', color: 'from-blue-500 to-purple-600' },
  { number: '98%', label: 'Client Satisfaction', color: 'from-green-500 to-teal-600' },
  { number: '50+', label: 'Enterprise Clients', color: 'from-purple-500 to-pink-600' },
  { number: '8+', label: 'Years Experience', color: 'from-orange-500 to-red-600' },
];

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on delivering measurable business outcomes and ROI for every project.',
    color: 'from-blue-500 to-purple-600',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our success. We work as an extension of your team.',
    color: 'from-green-500 to-teal-600',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in technology implementation and service delivery.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We stay ahead of technology trends to provide cutting-edge solutions.',
    color: 'from-orange-500 to-red-600',
  },
];

export default function About() {
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
                <Sparkles className="h-4 w-4 animate-bounce-subtle" />
                <span className="font-medium">About Karozen</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
                Transforming Businesses with
                <span className="block text-gradient-animated">
                  Technology Excellence
                </span>
              </h1>
              <p className="text-xl text-white/95 max-w-3xl mx-auto text-shadow">
                We're a team of technology experts specializing in MuleSoft integrations, AI-first solutions, 
                and intelligent automation that drives real business results.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer interactive-card"
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

        {/* Enhanced Our Story */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 text-primary mb-4">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-medium">Our Journey</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p className="text-xl text-gray-600">
                  Founded with a vision to bridge the gap between business needs and technology solutions
                </p>
              </div>
              
              <Card className="service-card bg-white shadow-xl group cursor-pointer">
                <div className="card-hover-effect absolute inset-0" />
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p className="group-hover:text-gray-800 transition-colors duration-300">
                      Karozen was founded on the belief that technology should be an enabler, not a barrier. 
                      We started our journey with a simple mission: to help businesses harness the power of modern 
                      technology to achieve their goals faster and more efficiently.
                    </p>
                    <p className="group-hover:text-gray-800 transition-colors duration-300">
                      Today, we specialize in MuleSoft integrations, AI-first business solutions, and intelligent 
                      automation. Our team of certified experts has helped over 500 companies transform their 
                      operations, streamline their processes, and unlock new opportunities for growth.
                    </p>
                    <p className="group-hover:text-gray-800 transition-colors duration-300">
                      What sets us apart is our commitment to understanding your business first, then applying 
                      the right technology solutions. We don't just implement systems – we create strategic 
                      partnerships that drive long-term success.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Our Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="text-center space-y-4 group cursor-pointer interactive-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with the right technology solutions.
              </p>
              <Button asChild size="lg" className="button-gradient text-white shadow-xl interactive-button px-8 py-4 text-lg font-semibold">
                <Link href="/book-consultation" className="flex items-center">
                  Book a Free Consultation
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