'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Scale, Shield, AlertTriangle, Mail } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Terms() {
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
                <Scale className="h-4 w-4 animate-bounce-subtle" />
                <span className="font-medium">Terms of Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
                Terms of
                <span className="block text-gradient-animated">
                  Service
                </span>
              </h1>
              <p className="text-xl text-white/95 max-w-3xl mx-auto text-shadow">
                Please read these terms carefully before using our services. By accessing our website and services, you agree to be bound by these terms.
              </p>
              <div className="text-white/80 text-sm">
                Last updated: January 15, 2024
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Acceptance of Terms */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <span>Acceptance of Terms</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600">
                    By accessing and using The Nexus Tech's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p className="text-gray-600">
                    These Terms of Service ("Terms") govern your use of our website located at nexustech.com (the "Service") operated by The Nexus Tech ("us", "we", or "our").
                  </p>
                </CardContent>
              </Card>

              {/* Use License */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <span>Use License</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600 mb-4">Permission is granted to temporarily download one copy of the materials on The Nexus Tech's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Modify or copy the materials</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Use the materials for any commercial purpose or for any public display</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Attempt to reverse engineer any software contained on the website</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Remove any copyright or other proprietary notations from the materials</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Service Terms */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">Service Terms</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Service Availability</h4>
                    <p className="text-gray-600 mb-4">We strive to provide uninterrupted access to our services, but we do not guarantee that our services will be available at all times. We may suspend or discontinue any part of our services at any time.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">User Accounts</h4>
                    <p className="text-gray-600 mb-4">When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Prohibited Uses</h4>
                    <p className="text-gray-600 mb-4">You may not use our services:</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span>For any unlawful purpose or to solicit others to perform unlawful acts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">Intellectual Property Rights</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600">
                    The Service and its original content, features, and functionality are and will remain the exclusive property of The Nexus Tech and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                  </p>
                  <p className="text-gray-600">
                    You retain ownership of any intellectual property rights that you hold in content that you submit to us. However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content in connection with our services.
                  </p>
                </CardContent>
              </Card>

              {/* Limitation of Liability */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <AlertTriangle className="h-6 w-6 text-orange-500" />
                    <span>Limitation of Liability</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600">
                    In no event shall The Nexus Tech, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                  </p>
                  <p className="text-gray-600">
                    Our total liability to you for any damages arising out of or related to these Terms or the Service shall not exceed the amount you have paid us in the twelve (12) months preceding the claim.
                  </p>
                </CardContent>
              </Card>

              {/* Termination */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">Termination</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600">
                    We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                  </p>
                  <p className="text-gray-600">
                    If you wish to terminate your account, you may simply discontinue using the Service or contact us directly.
                  </p>
                </CardContent>
              </Card>

              {/* Changes to Terms */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                  <p className="text-gray-600">
                    What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p>Email: legal@nexustech.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
                  </div>
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
                Questions About These Terms?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                If you have any questions about these Terms of Service, please don't hesitate to contact our legal team.
              </p>
              <Button asChild size="lg" className="button-gradient text-white shadow-xl interactive-button px-8 py-4 text-lg font-semibold">
                <Link href="/support" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Legal Team
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