'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User, Clock, Sparkles, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    title: 'MuleSoft Integration Best Practices for Enterprise',
    excerpt: 'Learn the essential strategies for implementing MuleSoft integrations that scale with your business needs.',
    category: 'MuleSoft',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: 'AI-First Business Strategy: A Complete Guide',
    excerpt: 'Discover how to build an AI-first business strategy that drives measurable results and competitive advantage.',
    category: 'AI Strategy',
    author: 'Michael Chen',
    date: '2024-01-12',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Automation Agents: The Future of Business Process',
    excerpt: 'Explore how intelligent automation agents are revolutionizing business processes across industries.',
    category: 'Automation',
    author: 'Emily Rodriguez',
    date: '2024-01-10',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    color: 'from-green-500 to-teal-600',
  },
  {
    title: 'API-Led Connectivity: Building Scalable Integrations',
    excerpt: 'Understanding the principles of API-led connectivity and how it transforms enterprise architecture.',
    category: 'Integration',
    author: 'David Park',
    date: '2024-01-08',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'Machine Learning in Business: Real-World Applications',
    excerpt: 'Practical examples of how machine learning is solving real business problems across different sectors.',
    category: 'Machine Learning',
    author: 'Lisa Thompson',
    date: '2024-01-05',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    color: 'from-teal-500 to-green-600',
  },
  {
    title: 'Digital Transformation ROI: Measuring Success',
    excerpt: 'Key metrics and strategies for measuring the return on investment of your digital transformation initiatives.',
    category: 'Digital Transformation',
    author: 'Robert Kim',
    date: '2024-01-03',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    color: 'from-indigo-500 to-purple-600',
  },
];

const categories = ['All', 'MuleSoft', 'AI Strategy', 'Automation', 'Integration', 'Machine Learning', 'Digital Transformation'];

export default function Blog() {
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
                <BookOpen className="h-4 w-4 animate-bounce-subtle" />
                <span className="font-medium">Technology Insights</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
                Latest Insights &
                <span className="block text-gradient-animated">
                  Industry Trends
                </span>
              </h1>
              <p className="text-xl text-white/95 max-w-3xl mx-auto text-shadow">
                Stay ahead with expert insights on MuleSoft integrations, AI solutions, automation, 
                and digital transformation strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Enhanced Category Filter */}
              <div className="flex flex-wrap gap-3 mb-12 justify-center">
                {categories.map((category, index) => (
                  <Badge 
                    key={category} 
                    variant={category === 'All' ? 'default' : 'outline'}
                    className={`cursor-pointer transition-all duration-300 px-4 py-2 text-sm font-medium interactive-button ${
                      category === 'All' 
                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                        : 'hover:bg-primary hover:text-white border-2'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {category}
                  </Badge>
                ))}
              </div>

              {/* Enhanced Blog Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <Card 
                    key={index} 
                    className="service-card group cursor-pointer overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="card-hover-effect absolute inset-0" />
                    <div className="aspect-video overflow-hidden rounded-t-lg relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${post.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    </div>
                    <CardHeader className="space-y-3 relative z-10">
                      <div className="flex items-center justify-between">
                        <Badge 
                          variant="outline" 
                          className={`bg-gradient-to-r ${post.color} text-white border-0 shadow-sm`}
                        >
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-base group-hover:text-gray-700 transition-colors duration-300">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className={`w-full group/btn transition-all duration-300 hover:bg-gradient-to-r ${post.color} hover:text-white hover:border-transparent interactive-button`}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Enhanced Load More */}
              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="interactive-button px-8 py-3 text-lg font-medium hover:bg-primary hover:text-white transition-all duration-300">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Newsletter CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 text-primary">
                <Sparkles className="h-4 w-4" />
                <span className="font-medium">Stay Updated</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Stay Updated</h2>
              <p className="text-gray-600">
                Get the latest insights delivered to your inbox. No spam, just valuable content.
              </p>
              <Button asChild size="lg" className="button-gradient text-white shadow-xl interactive-button px-8 py-4 text-lg font-semibold">
                <Link href="/book-consultation" className="flex items-center">
                  Subscribe to Newsletter
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