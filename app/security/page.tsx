'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Eye, Server, AlertTriangle, CheckCircle, Mail } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const securityMeasures = [
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.',
    color: 'from-blue-500 to-purple-600',
  },
  {
    icon: Shield,
    title: 'Access Controls',
    description: 'Multi-factor authentication and role-based access controls protect sensitive information.',
    color: 'from-green-500 to-teal-600',
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Our infrastructure is hosted on SOC 2 compliant cloud platforms with 99.9% uptime.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Eye,
    title: 'Continuous Monitoring',
    description: '24/7 security monitoring and threat detection to identify and respond to potential risks.',
    color: 'from-orange-500 to-red-600',
  },
];

const certifications = [
  { name: 'SOC 2 Type II', status: 'Certified', color: 'bg-green-100 text-green-800' },
  { name: 'ISO 27001', status: 'In Progress', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'GDPR Compliant', status: 'Certified', color: 'bg-green-100 text-green-800' },
  { name: 'CCPA Compliant', status: 'Certified', color: 'bg-green-100 text-green-800' },
];

export default function Security() {
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
                <span className="font-medium">Security</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
                Enterprise-Grade
                <span className="block text-gradient-animated">
                  Security
                </span>
              </h1>
              <p className="text-xl text-white/95 max-w-3xl mx-auto text-shadow">
                Your data security is our top priority. We implement comprehensive security measures to protect your information and maintain your trust.
              </p>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Security Measures
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive protection at every level of our infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {securityMeasures.map((measure, index) => (
                <div 
                  key={index}
                  className="text-center space-y-4 group cursor-pointer interactive-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${measure.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <measure.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{measure.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {measure.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Details */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Data Protection */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Lock className="h-6 w-6 text-primary" />
                    <span>Data Protection</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Encryption</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>AES-256 encryption at rest</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>TLS 1.3 encryption in transit</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>End-to-end encryption for sensitive data</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Data Handling</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Data minimization practices</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Secure data deletion</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Regular data audits</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Access Controls */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <span>Access Controls & Authentication</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Authentication</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Multi-factor authentication (MFA)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Single Sign-On (SSO) integration</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Strong password policies</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Authorization</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Role-based access control (RBAC)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Principle of least privilege</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Regular access reviews</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Infrastructure Security */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Server className="h-6 w-6 text-primary" />
                    <span>Infrastructure Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cloud Security</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>SOC 2 compliant cloud providers</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Virtual private clouds (VPC)</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Network segmentation</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Monitoring</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>24/7 security monitoring</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Intrusion detection systems</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Automated threat response</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Incident Response */}
              <Card className="service-card">
                <div className="card-hover-effect absolute inset-0" />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <AlertTriangle className="h-6 w-6 text-orange-500" />
                    <span>Incident Response</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <p className="text-gray-600 mb-4">We have a comprehensive incident response plan to quickly address any security issues:</p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Detection & Analysis</h4>
                        <p className="text-gray-600">Immediate identification and assessment of security incidents</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Containment</h4>
                        <p className="text-gray-600">Rapid containment to prevent further damage or data exposure</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Recovery & Communication</h4>
                        <p className="text-gray-600">System restoration and transparent communication with affected parties</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Post-Incident Review</h4>
                        <p className="text-gray-600">Thorough analysis and implementation of preventive measures</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Security Certifications & Compliance
              </h2>
              <p className="text-xl text-gray-600">
                We maintain industry-standard certifications and compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="service-card text-center group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-hover-effect absolute inset-0" />
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {cert.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <Badge className={cert.color}>
                      {cert.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Security Questions or Concerns?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our security team is here to address any questions or concerns about our security practices.
              </p>
              <Button asChild size="lg" className="button-gradient text-white shadow-xl interactive-button px-8 py-4 text-lg font-semibold">
                <Link href="/support" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Security Team
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