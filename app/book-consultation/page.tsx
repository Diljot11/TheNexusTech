'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, CheckCircle, ArrowRight, Brain, Users, Target, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const consultationTypes = [
  {
    title: 'MuleSoft Integration Strategy',
    duration: '60 minutes',
    price: 'Free',
    description: 'Comprehensive assessment of your integration needs and MuleSoft implementation roadmap',
    features: ['Integration architecture review', 'API strategy planning', 'ROI projections', 'Implementation timeline'],
    popular: true,
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: 'AI-First Business Assessment',
    duration: '90 minutes',
    price: 'Free',
    description: 'In-depth analysis of AI opportunities and custom solution planning',
    features: ['AI readiness assessment', 'Use case identification', 'Technology recommendations', 'Business case development'],
    popular: false,
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Automation Discovery Session',
    duration: '45 minutes',
    price: 'Free',
    description: 'Identify automation opportunities and agent deployment strategies',
    features: ['Process analysis', 'Automation potential mapping', 'Agent architecture planning', 'Cost-benefit analysis'],
    popular: false,
    color: 'from-green-500 to-teal-600',
  },
  {
    title: 'Technical Architecture Review',
    duration: '90 minutes',
    price: '$500',
    description: 'Comprehensive technical assessment for complex enterprise solutions',
    features: ['System architecture review', 'Technology stack analysis', 'Security assessment', 'Scalability planning'],
    popular: false,
    color: 'from-orange-500 to-red-600',
  },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
];

const whyChooseReasons = [
  {
    icon: Brain,
    title: 'Expert Guidance',
    description: 'Work with certified MuleSoft and AI specialists who understand your industry and challenges.',
    color: 'from-blue-500 to-purple-600',
  },
  {
    icon: Target,
    title: 'Actionable Strategy',
    description: 'Receive a detailed roadmap with specific recommendations and next steps.',
    color: 'from-green-500 to-teal-600',
  },
  {
    icon: Users,
    title: 'Proven Results',
    description: 'Join 500+ companies that have successfully transformed with our guidance.',
    color: 'from-purple-500 to-pink-600',
  },
];

export default function BookConsultation() {
  const [selectedType, setSelectedType] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    primaryService: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation booking:', {
      type: consultationTypes[selectedType],
      date: selectedDate,
      time: selectedTime,
      ...formData,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="pt-20">
        {/* Enhanced Header Section */}
        <section className="py-16 cta-gradient relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl floating-animation" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl floating-animation" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/30 badge-glow">
                <Calendar className="h-4 w-4 animate-bounce-subtle" />
                <span className="font-medium">Free Consultation</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
                Book Your Free Consultation
              </h1>
              <p className="text-xl text-white/95 max-w-2xl mx-auto text-shadow">
                Get expert guidance on your digital transformation journey. Our specialists will help you 
                identify opportunities and create a strategic roadmap for MuleSoft, AI, and automation success.
              </p>
              <div className="flex items-center justify-center space-x-6 text-white/80 text-sm flex-wrap gap-4">
                {[
                  'No commitment required',
                  'Expert consultants',
                  'Actionable insights'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white mt-6 badge-glow">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Trusted by 500+ Companies Worldwide</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Enhanced Consultation Types */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">Choose Your Consultation Type</h2>
                  
                  {consultationTypes.map((type, index) => (
                    <Card 
                      key={index}
                      className={`service-card cursor-pointer transition-all duration-300 ${
                        selectedType === index 
                          ? 'ring-2 ring-primary shadow-2xl scale-105' 
                          : ''
                      }`}
                      onClick={() => setSelectedType(index)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="card-hover-effect absolute inset-0" />
                      {type.popular && (
                        <div className="absolute -top-3 -right-3 z-10">
                          <Badge className={`bg-gradient-to-r ${type.color} text-white shadow-lg animate-pulse-glow`}>
                            <Star className="h-3 w-3 mr-1" />
                            Most Popular
                          </Badge>
                        </div>
                      )}
                      
                      <CardHeader className="relative z-10">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{type.title}</CardTitle>
                          <div className="text-right">
                            <div className={`text-lg font-bold bg-gradient-to-r ${type.color} bg-clip-text text-transparent`}>{type.price}</div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {type.duration}
                            </div>
                          </div>
                        </div>
                        <CardDescription className="group-hover:text-gray-700 transition-colors duration-300">{type.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <ul className="space-y-2">
                          {type.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="group-hover:text-gray-700 transition-colors duration-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Enhanced Booking Form */}
                <div className="lg:col-span-2">
                  <Card className="service-card">
                    <div className="card-hover-effect absolute inset-0" />
                    <CardHeader className="relative z-10">
                      <CardTitle className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5" />
                        <span>Schedule Your {consultationTypes[selectedType].title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Enhanced Date and Time Selection */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="date">Preferred Date</Label>
                            <Input
                              type="date"
                              id="date"
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              min={new Date().toISOString().split('T')[0]}
                              required
                              className="form-input transition-all duration-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="time">Preferred Time (PST)</Label>
                            <Select value={selectedTime} onValueChange={setSelectedTime} required>
                              <SelectTrigger className="form-input transition-all duration-300">
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* Enhanced Personal Information */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                              required
                              className="form-input transition-all duration-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                              required
                              className="form-input transition-all duration-300"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              type="email"
                              id="email"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              required
                              className="form-input transition-all duration-300"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              type="tel"
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              required
                              className="form-input transition-all duration-300"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            required
                            className="form-input transition-all duration-300"
                          />
                        </div>

                        {/* Enhanced Primary Service Interest */}
                        <div className="space-y-2">
                          <Label htmlFor="primaryService">Primary Service Interest</Label>
                          <Select 
                            value={formData.primaryService} 
                            onValueChange={(value) => setFormData({...formData, primaryService: value})}
                          >
                            <SelectTrigger className="form-input transition-all duration-300">
                              <SelectValue placeholder="Select primary service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mulesoft">MuleSoft Integrations</SelectItem>
                              <SelectItem value="ai-solutions">AI-First Business Solutions</SelectItem>
                              <SelectItem value="automation">Automation Agents</SelectItem>
                              <SelectItem value="website">Website Development</SelectItem>
                              <SelectItem value="app">App Development</SelectItem>
                              <SelectItem value="multiple">Multiple Services</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Enhanced Project Details */}
                        <div className="space-y-2">
                          <Label htmlFor="project">Project Description</Label>
                          <Textarea
                            id="project"
                            placeholder="Tell us about your project, goals, and challenges..."
                            value={formData.projectDescription}
                            onChange={(e) => setFormData({...formData, projectDescription: e.target.value})}
                            rows={4}
                            className="form-input transition-all duration-300"
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="budget">Project Budget Range</Label>
                            <Select 
                              value={formData.budget} 
                              onValueChange={(value) => setFormData({...formData, budget: value})}
                            >
                              <SelectTrigger className="form-input transition-all duration-300">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-25k">Under $25,000</SelectItem>
                                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                                <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                                <SelectItem value="over-250k">Over $250,000</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="timeline">Expected Timeline</Label>
                            <Select 
                              value={formData.timeline} 
                              onValueChange={(value) => setFormData({...formData, timeline: value})}
                            >
                              <SelectTrigger className="form-input transition-all duration-300">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="asap">ASAP</SelectItem>
                                <SelectItem value="1-3-months">1-3 months</SelectItem>
                                <SelectItem value="3-6-months">3-6 months</SelectItem>
                                <SelectItem value="6-12-months">6-12 months</SelectItem>
                                <SelectItem value="over-1-year">Over 1 year</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className={`w-full button-gradient text-white shadow-xl interactive-button bg-gradient-to-r ${consultationTypes[selectedType].color}`}
                        >
                          Book Consultation
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 text-primary mb-4">
                <Sparkles className="h-4 w-4" />
                <span className="font-medium">Why Choose Us</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Companies Trust Our Consultations
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our consultation process is designed to deliver maximum value and actionable insights 
                for your digital transformation journey.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {whyChooseReasons.map((reason, index) => (
                <div 
                  key={index}
                  className="text-center space-y-4 group cursor-pointer interactive-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <reason.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{reason.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}