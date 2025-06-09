'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Eye, Database, Mail } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const privacyPrinciples = [
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'We implement industry-leading security measures to protect your personal information.',
    color: 'from-blue-500 to-purple-600',
  },
  {
    icon: Lock,
    title: 'Secure Storage',
    description: 'All data is encrypted at rest and in transit using advanced encryption standards.',
    color: 'from-green-500 to-teal-600',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We are transparent about what data we collect and how we use it.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Database,
    title: 'Data Minimization',
    description: 'We only collect data that is necessary for providing our services.',
    color: 'from-orange-500 to-red-600',
  },
];

export default function Privacy() {
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
                <Shield className="h-4 w-4 animate-bounce-subtle" />
                <span className="font-medium">Privacy Policy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
                Your Privacy is
                <span className="block text-gradient-animated">
                  Our Priority
                </span>
              </h1>
              <p className="text-xl text-white/95 max-w-3xl mx-auto text-shadow">
                We are committed to protecting your personal information and being transparent about our data practices.
              </p>
              <div className="text-white/80 text-sm">
                Last updated: January 15, 2024
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-gray-600">
                The core principles that guide our approach to data privacy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {privacyPrinciples.map((principle, index) => (
                <div 
                  key={index}
                  className="text-center space-y-4 group cursor-pointer interactive-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${principle.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <principle.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{principle.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Information We Collect */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Database className="h-6 w-6 text-primary" />
                    <span>Information We Collect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                    <p className="text-gray-600 mb-4">We collect information you provide directly to us, such as:</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Contact information (name, email, phone number)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Company information and job title</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Project requirements and business needs</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Communication preferences</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Automatically Collected Information</h4>
                    <p className="text-gray-600 mb-4">We automatically collect certain information when you visit our website:</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>IP address and device information</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Browser type and operating system</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Pages visited and time spent on our site</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>Referring website and search terms</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Information */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Eye className="h-6 w-6 text-primary" />
                    <span>How We Use Your Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Provide and improve our services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Respond to your inquiries and provide customer support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Send you important updates about our services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Analyze website usage to improve user experience</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Comply with legal obligations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Information Sharing */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <span>Information Sharing and Disclosure</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>With your explicit consent</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>With trusted service providers who assist in our operations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>When required by law or to protect our rights</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>In connection with a business transfer or merger</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Lock className="h-6 w-6 text-primary" />
                    <span>Data Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600 mb-4">We implement appropriate technical and organizational measures to protect your personal information:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Encryption of data in transit and at rest</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Regular security assessments and updates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Access controls and employee training</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Secure hosting and backup procedures</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">Your Rights and Choices</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Access and review your personal information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Request correction of inaccurate information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Request deletion of your personal information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Opt-out of marketing communications</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Data portability and restriction of processing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or our data practices, please contact us.
              </p>
              <Button asChild size="lg" className="button-gradient text-white shadow-xl interactive-button px-8 py-4 text-lg font-semibold">
                <Link href="/support" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Privacy Team
                  <ArrowRight className="ml-2 h-5 w-5" />
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