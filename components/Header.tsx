'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, Brain, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const services = [
  { title: 'MuleSoft Integrations', href: '/services/mulesoft-integrations', description: 'Enterprise API-led connectivity solutions' },
  { title: 'AI-First Business Solutions', href: '/services/ai-first-business-solutions', description: 'Intelligent automation and ML models' },
  { title: 'Automation Agents', href: '/services/automation-agents', description: 'Streamlined workflow automation' },
  { title: 'Website Development', href: '/services/website-development', description: 'Modern, responsive web solutions' },
  { title: 'App Development', href: '/services/app-development', description: 'Native and cross-platform apps' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the home page
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine header styling based on page and scroll position
  const getHeaderStyles = () => {
    if (isHomePage) {
      // Home page: transparent when at top, solid when scrolled
      return scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/20 backdrop-blur-md border-b border-white/20';
    } else {
      // Other pages: always solid background
      return 'bg-white shadow-lg';
    }
  };

  const getTextColor = () => {
    if (isHomePage && !scrolled) {
      return 'text-white';
    }
    return 'text-gray-900';
  };

  const getLogoStyles = () => {
    if (isHomePage && !scrolled) {
      return {
        bg: 'bg-white/20 group-hover:bg-white/30',
        iconColor: 'text-white'
      };
    }
    return {
      bg: 'bg-primary/10 group-hover:bg-primary/20',
      iconColor: 'text-primary'
    };
  };

  const getButtonStyles = () => {
    if (isHomePage && !scrolled) {
      return 'bg-white text-primary hover:bg-white/90';
    }
    return 'bg-primary hover:bg-primary/90 text-white';
  };

  const getNavLinkStyles = () => {
    if (isHomePage && !scrolled) {
      return 'text-white hover:bg-white/20 hover:text-white';
    }
    return 'text-gray-900 hover:bg-accent hover:text-accent-foreground';
  };

  const getNavTriggerStyles = () => {
    if (isHomePage && !scrolled) {
      return 'text-white hover:bg-white/20 hover:text-white data-[state=open]:bg-white/20 data-[state=open]:text-white';
    }
    return 'text-gray-900 hover:bg-accent data-[state=open]:bg-accent';
  };

  const getMobileButtonStyles = () => {
    if (isHomePage && !scrolled) {
      return 'text-white hover:bg-white/20 focus:ring-white';
    }
    return 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-primary';
  };

  const logoStyles = getLogoStyles();

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      getHeaderStyles()
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className={cn(
              "p-2 rounded-lg transition-colors",
              logoStyles.bg
            )}>
              <Brain className={cn(
                "h-6 w-6 transition-colors",
                logoStyles.iconColor
              )} />
            </div>
            <span className={cn(
              "text-xl font-bold transition-colors",
              getTextColor()
            )}>
              The Nexus Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    getNavLinkStyles()
                  )}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className={cn(
                    "transition-colors bg-transparent border-none shadow-none h-10 px-4 py-2",
                    getNavTriggerStyles()
                  )}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href={service.href}
                          >
                            <div className="text-sm font-medium leading-none text-gray-900">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    getNavLinkStyles()
                  )}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/case-studies" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    getNavLinkStyles()
                  )}>
                    Case Studies
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    getNavLinkStyles()
                  )}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild className={cn(
              "transition-colors",
              getButtonStyles()
            )}>
              <Link href="/book-consultation">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset transition-colors",
              getMobileButtonStyles()
            )}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Home
              </Link>
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-900">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Blog
              </Link>
              <Link href="/case-studies" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Case Studies
              </Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                About
              </Link>
              <div className="pt-4 pb-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/book-consultation">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}