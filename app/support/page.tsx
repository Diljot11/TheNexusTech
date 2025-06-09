'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search, MessageCircle, Book, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqCategories = [
  {
    title: 'MuleSoft Integrations',
    icon: MessageCircle,
    color: 'from-blue-500 to-purple-600',
    faqs: [
      {
        question: 'How long does a typical MuleSoft integration project take?',
        answer: 'Most MuleSoft integration projects take 8-16 weeks depending on complexity, number of systems, and data volume.'
      },
      {
        question: 'Do you provide ongoing support after implementation?',
        answer: 'Yes, we offer comprehensive support packages including monitoring, maintenance, and optimization services.'
      },
      {
        question: 'Can you integrate with legacy systems?',
        answer: 'Absolutely. We specialize in connecting modern applications with legacy systems using MuleSoft\'s extensive connector library.'
      }
    ]
  },
  {
    title: 'AI Solutions',
    icon: Book,
    color: 'from-purple-500 to-pink-600',
    faqs: [
      {
        question: 'What types of AI solutions do you develop?',
        answer: 'We develop custom AI models, machine learning solutions, predictive analytics, NLP systems, and computer vision applications.'
      },
      {
        question: 'How do you ensure AI model accuracy?',
        answer: 'We use rigorous testing methodologies, cross-validation, and continuous monitoring to maintain high accuracy levels.'
      },
      {
        question: 'Can AI solutions integrate with existing systems?',
        answer: 'Yes, our AI solutions are designed to seamlessly integrate with your existing infrastructure and workflows.'
      }
    ]
  },
  {
    title: 'Automation Agents',
    icon: CheckCircle,
    color: 'from-green-500 to-teal-600',
    faqs: [
      {
        question: 'What processes can be automated?',
        answer: 'We can automate document processing, data entry, customer service workflows, reporting, and many other repetitive tasks.'
      },
      {
        question: 'How quickly can automation agents be deployed?',
        answer: 'Simple automation agents can be deployed in 2-4 weeks, while complex workflows may take 6-12 weeks.'
      },
      {
        question: 'What ROI can I expect from automation?',
        answer: 'Most clients see 40-70% time savings and 300% productivity increases within the first year.'
      }
    ]
  }
];

const supportChannels = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    contact: '+1 (555) 123-4567',
    hours: 'Mon-Fri, 9AM-6PM PST',
    color: 'from-blue-500 to-purple-600',
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get detailed responses to complex questions',
    contact: 'support@nexustech.com',
    hours: '24/7 response within 4 hours',
    color: 'from-green-500 to-teal-600',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Instant help for quick questions',
    contact: 'Available on website',
    hours: 'Mon-Fri, 8AM-8PM PST',
    color: 'from-purple-500 to-pink-600',
  },
];

export default function Support() {
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
                <MessageCircle className="h-4 w-4 animate-bounce-subtle" />
                <span className="font-medium">Support Center</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
                How Can We
                <span className="block text-gradient-animated">
                  Help You?
                </span>
              </h1>
              <p className="text-xl text-white/95 max-w-3xl mx-auto text-shadow">
                Find answers to common questions, access documentation, or get in touch with our expert support team.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search for help articles, guides, or FAQs..."
                    className="pl-12 pr-4 py-4 text-lg bg-white/20 border-white/30 text-white placeholder-white/60 backdrop-blur-sm focus:bg-white/30 focus:border-white/50"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Support
              </h2>
              <p className="text-xl text-gray-600">
                Choose the support channel that works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {supportChannels.map((channel, index) => (
                <Card 
                  key={index}
                  className="service-card text-center group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-hover-effect absolute inset-0" />
                  <CardHeader className="relative z-10">
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg mb-4`}>
                      <channel.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {channel.title}
                    </CardTitle>
                    <CardDescription className="text-base group-hover:text-gray-700 transition-colors duration-300">
                      {channel.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-2">
                    <div className={`font-semibold bg-gradient-to-r ${channel.color} bg-clip-text text-transparent`}>
                      {channel.contact}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center justify-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{channel.hours}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600">
                  Quick answers to common questions about our services
                </p>
              </div>

              <div className="space-y-8">
                {faqCategories.map((category, categoryIndex) => (
                  <Card 
                    key={categoryIndex}
                    className="service-card"
                    style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                  >
                    <div className="card-hover-effect absolute inset-0" />
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                          <category.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="space-y-6">
                        {category.faqs.map((faq, faqIndex) => (
                          <div key={faqIndex} className="border-l-4 border-gray-200 pl-6 group cursor-pointer">
                            <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                              {faq.question}
                            </h4>
                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Need More Help?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Access our comprehensive documentation or schedule a consultation with our experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="button-gradient text-white shadow-xl interactive-button px-8 py-4 text-lg font-semibold">
                  <Link href="/blog" className="flex items-center">
                    View Documentation
                    <Book className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold interactive-button">
                  <Link href="/book-consultation" className="flex items-center">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}