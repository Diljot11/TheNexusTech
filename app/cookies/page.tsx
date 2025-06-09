'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cookie, Settings, BarChart, Shield, Mail } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cookieTypes = [
  {
    icon: Shield,
    title: 'Essential Cookies',
    description: 'Required for basic website functionality and security.',
    color: 'from-green-500 to-teal-600',
    examples: ['Session management', 'Security tokens', 'Load balancing'],
    canDisable: false,
  },
  {
    icon: BarChart,
    title: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website.',
    color: 'from-blue-500 to-purple-600',
    examples: ['Google Analytics', 'Page views', 'User behavior'],
    canDisable: true,
  },
  {
    icon: Settings,
    title: 'Functional Cookies',
    description: 'Enable enhanced functionality and personalization.',
    color: 'from-purple-500 to-pink-600',
    examples: ['Language preferences', 'Theme settings', 'Form data'],
    canDisable: true,
  },
  {
    icon: Cookie,
    title: 'Marketing Cookies',
    description: 'Used to track visitors across websites for marketing purposes.',
    color: 'from-orange-500 to-red-600',
    examples: ['Ad targeting', 'Social media', 'Campaign tracking'],
    canDisable: true,
  },
];

export default function Cookies() {
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
                <Cookie className="h-4 w-4 animate-bounce-subtle" />
                <span className="font-medium">Cookie Policy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
                Cookie
                <span className="block text-gradient-animated">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-white/95 max-w-3xl mx-auto text-shadow">
                Learn about how we use cookies and similar technologies to improve your experience on our website.
              </p>
              <div className="text-white/80 text-sm">
                Last updated: January 15, 2024
              </div>
            </div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Cookie className="h-6 w-6 text-primary" />
                    <span>What Are Cookies?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                  </p>
                  <p className="text-gray-600">
                    Cookies allow websites to remember your preferences, login status, and other information that makes your browsing experience more convenient and personalized.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <p className="text-xl text-gray-600">
                We use different types of cookies for various purposes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {cookieTypes.map((type, index) => (
                <Card 
                  key={index}
                  className="service-card group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-hover-effect absolute inset-0" />
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                        <type.icon className="h-8 w-8 text-white" />
                      </div>
                      <Badge variant={type.canDisable ? "outline" : "default"} className={type.canDisable ? "border-orange-500 text-orange-600" : "bg-green-100 text-green-800"}>
                        {type.canDisable ? "Optional" : "Required"}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {type.title}
                    </CardTitle>
                    <CardDescription className="text-base group-hover:text-gray-700 transition-colors duration-300">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Settings className="h-6 w-6 text-primary" />
                    <span>Managing Your Cookie Preferences</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600 mb-4">You have several options for managing cookies:</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Browser Settings</h4>
                      <p className="text-gray-600 mb-2">Most web browsers allow you to control cookies through their settings preferences. You can:</p>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Block all cookies</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Block third-party cookies</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Delete cookies when you close your browser</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Get notified when a cookie is set</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cookie Consent Banner</h4>
                      <p className="text-gray-600">
                        When you first visit our website, you'll see a cookie consent banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time by clicking the cookie settings link in our footer.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Third-Party Opt-Outs</h4>
                      <p className="text-gray-600">
                        For analytics and advertising cookies, you can opt out directly through the service providers:
                      </p>
                      <ul className="space-y-1 text-gray-600 mt-2">
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline">Google Analytics Opt-out</a></span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Digital Advertising Alliance: <a href="http://optout.aboutads.info/" className="text-primary hover:underline">DAA Opt-out</a></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">Impact of Disabling Cookies</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600 mb-4">Please note that disabling certain cookies may impact your experience on our website:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Some features may not work properly</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>You may need to re-enter information more frequently</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Personalized content and recommendations may not be available</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>We may not be able to remember your preferences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">Updates to This Policy</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
                  </p>
                  <p className="text-gray-600">
                    We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies and related technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Questions About Cookies?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us.
              </p>
              <Button asChild size="lg" className="button-gradient text-white shadow-xl interactive-button px-8 py-4 text-lg font-semibold">
                <Link href="/support" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Support
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