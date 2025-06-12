'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Briefcase, Users, Heart, Laptop, GraduationCap, ExternalLink, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const benefits = [
  {
    icon: Heart,
    title: 'Remote-First Culture',
    description: 'Work from anywhere with flexible hours and modern equipment provided.',
    color: 'from-red-500 to-pink-600',
  },
  {
    icon: Laptop,
    title: 'Cutting-Edge Projects',
    description: 'Work on innovative AI, automation, and integration projects.',
    color: 'from-blue-500 to-purple-600',
  },
  {
    icon: Users,
    title: 'Growth & Learning',
    description: 'Professional development budget, conferences, and certification support.',
    color: 'from-green-500 to-teal-600',
  },
  {
    icon: GraduationCap,
    title: 'Mentorship Program',
    description: 'Learn from industry experts and advance your career rapidly.',
    color: 'from-orange-500 to-yellow-600',
  },
];

export default function Apply() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 cta-gradient relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl floating-animation" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl floating-animation" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/30 badge-glow">
                <Briefcase className="h-4 w-4 animate-bounce-subtle" />
                <span className="font-medium">Job Application</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
                Join Our
                <span className="block text-gradient-animated">
                  Team
                </span>
              </h1>
              <p className="text-xl text-white/95 max-w-3xl mx-auto text-shadow">
                Take the next step in your career. Apply for exciting opportunities in technology, 
                AI, and automation with Karozen.
              </p>
              
              <div className="flex items-center justify-center space-x-6 text-white/80 text-sm flex-wrap gap-4">
                {[
                  'Remote-only positions',
                  'Competitive packages',
                  'Growth opportunities'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Join Karozen?
              </h2>
              <p className="text-xl text-gray-600">
                Be part of a team that's shaping the future of enterprise technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="text-center space-y-4 group cursor-pointer interactive-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              
              {/* Form Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Submit Your Application
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Complete the form below to apply for any of our open positions. 
                  We'll review your application and get back to you within 5-7 business days.
                </p>
              </div>

              {/* Google Form Options */}
              <div className="space-y-8">
                {/* Primary Embedded Form */}
                <Card className="service-card overflow-hidden shadow-2xl">
                  <div className="card-hover-effect absolute inset-0" />
                  <CardHeader className="relative z-10 text-center">
                    <CardTitle className="flex items-center justify-center space-x-3">
                      <Briefcase className="h-6 w-6 text-primary" />
                      <span>Application Form</span>
                    </CardTitle>
                    <CardDescription>
                      Please fill out all required fields in the form below
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 p-0">
                    {/* Google Form Iframe with better configuration */}
                    <div className="w-full bg-gray-50 rounded-b-lg">
                      <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeba9uhsSw92CJWXKIT-NzTTZixoYzE-uWSLzw-lqxcToI5UQ/viewform?embedded=true"
                        width="100%"
                        height="1400"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        className="rounded-b-lg"
                        title="Job Application Form"
                        loading="lazy"
                        sandbox="allow-scripts allow-forms allow-same-origin"
                      >
                        <div className="p-8 text-center">
                          <AlertCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                          <p className="text-gray-600 mb-4">
                            The application form is loading. If it doesn't appear, please try the direct link below.
                          </p>
                        </div>
                      </iframe>
                    </div>
                  </CardContent>
                </Card>

                {/* Fallback Option */}
                <Card className="service-card border-2 border-dashed border-primary/30">
                  <div className="card-hover-effect absolute inset-0" />
                  <CardHeader className="relative z-10 text-center">
                    <CardTitle className="flex items-center justify-center space-x-3">
                      <ExternalLink className="h-6 w-6 text-primary" />
                      <span>Alternative Application Method</span>
                    </CardTitle>
                    <CardDescription>
                      If the form above doesn't load properly, use this direct link
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 text-center space-y-4">
                    <p className="text-gray-600">
                      Click the button below to open the application form in a new tab
                    </p>
                    <Button asChild size="lg" className="button-gradient text-white shadow-xl interactive-button">
                      <Link 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeba9uhsSw92CJWXKIT-NzTTZixoYzE-uWSLzw-lqxcToI5UQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Open Application Form
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Information */}
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <Card className="service-card">
                  <div className="card-hover-effect absolute inset-0" />
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span>What Happens Next?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                        <span>We'll review your application within 5-7 business days</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                        <span>Qualified candidates will be contacted for an interview</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                        <span>You'll receive updates via email throughout the process</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="service-card">
                  <div className="card-hover-effect absolute inset-0" />
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-primary" />
                      <span>Need Help?</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-4">
                    <p className="text-gray-600">
                      If you have any questions about the application process or our open positions, 
                      feel free to reach out to our HR team.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>📧 info.karozen@gmail.com</p>
                      <p>📞 +91-8591034367</p>
                      <p>💬 Available Mon-Fri, 9AM-6PM PST</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Alternative Actions */}
              <div className="text-center mt-12 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Explore Other Opportunities
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold interactive-button">
                    <Link href="/careers" className="flex items-center">
                      View All Positions
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" className="button-gradient text-white shadow-xl interactive-button px-8 py-4 text-lg font-semibold">
                    <Link href="/book-consultation" className="flex items-center">
                      Schedule a Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Join 500+ Professionals Who Trust Karozen
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600">
                {[
                  { icon: CheckCircle, text: 'Remote-First Culture', color: 'text-green-500' },
                  { icon: CheckCircle, text: 'Competitive Packages', color: 'text-blue-500' },
                  { icon: CheckCircle, text: 'Growth Opportunities', color: 'text-purple-500' },
                  { icon: CheckCircle, text: 'Cutting-Edge Projects', color: 'text-orange-500' },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium group-hover:text-gray-800 transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}