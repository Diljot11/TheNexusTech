'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Clock, DollarSign, Users, Heart, Zap, Trophy, Coffee, Laptop } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const jobOpenings = [
  {
    title: 'Senior MuleSoft Developer',
    department: 'Engineering',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    salary: '$120,000 - $160,000',
    description: 'Lead MuleSoft integration projects and mentor junior developers in API-led connectivity solutions.',
    requirements: ['5+ years MuleSoft experience', 'Anypoint Platform certification', 'API design expertise'],
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: 'AI Solutions Architect',
    department: 'AI/ML',
    location: 'Remote',
    type: 'Full-time',
    salary: '$140,000 - $180,000',
    description: 'Design and implement AI-first business solutions for enterprise clients.',
    requirements: ['Machine Learning expertise', 'Python/TensorFlow', 'Cloud platforms (AWS/Azure)'],
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Automation Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$100,000 - $130,000',
    description: 'Build intelligent automation agents and workflow solutions for clients.',
    requirements: ['RPA experience', 'Process automation', 'Python/JavaScript'],
    color: 'from-green-500 to-teal-600',
  },
  {
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    description: 'Create beautiful, responsive web applications using modern frameworks.',
    requirements: ['React/Next.js', 'TypeScript', 'Tailwind CSS'],
    color: 'from-orange-500 to-red-600',
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, dental, vision, and wellness programs.',
    color: 'from-red-500 to-pink-600',
  },
  {
    icon: Laptop,
    title: 'Remote-First',
    description: 'Work from anywhere with flexible hours and modern equipment provided.',
    color: 'from-blue-500 to-purple-600',
  },
  {
    icon: Trophy,
    title: 'Growth & Learning',
    description: 'Professional development budget, conferences, and certification support.',
    color: 'from-green-500 to-teal-600',
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Unlimited PTO, sabbatical options, and team building events.',
    color: 'from-orange-500 to-yellow-600',
  },
];

export default function Careers() {
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
                <Users className="h-4 w-4 animate-bounce-subtle" />
                <span className="font-medium">Join Our Team</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
                Build the Future of
                <span className="block text-gradient-animated">
                  Enterprise Technology
                </span>
              </h1>
              <p className="text-xl text-white/95 max-w-3xl mx-auto text-shadow">
                Join a team of passionate technologists who are transforming businesses with 
                MuleSoft integrations, AI solutions, and intelligent automation.
              </p>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Work With Us?</h2>
              <p className="text-xl text-gray-600">
                We're building the future of enterprise technology while maintaining a culture of innovation, 
                collaboration, and continuous learning.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Current Openings
                </h2>
                <p className="text-xl text-gray-600">
                  Join our growing team and make an impact from day one
                </p>
              </div>

              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <Card 
                    key={index}
                    className="service-card group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="card-hover-effect absolute inset-0" />
                    <CardHeader className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                              {job.title}
                            </CardTitle>
                            <Badge className={`bg-gradient-to-r ${job.color} text-white border-0`}>
                              {job.department}
                            </Badge>
                          </div>
                          <CardDescription className="text-lg group-hover:text-gray-700 transition-colors duration-300">
                            {job.description}
                          </CardDescription>
                        </div>
                        
                        <div className="flex flex-col space-y-2 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                          <ul className="space-y-1">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-gray-600">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button className={`bg-gradient-to-r ${job.color} hover:shadow-xl text-white border-0 interactive-button`}>
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let's talk about 
                how you can contribute to our mission.
              </p>
              <Button asChild size="lg" className="button-gradient text-white shadow-xl interactive-button px-8 py-4 text-lg font-semibold">
                <Link href="/book-consultation" className="flex items-center">
                  Send Your Resume
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