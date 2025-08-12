import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheck, FiZap, FiTarget, FiUsers, FiTrendingUp, FiStar, FiCode, FiSmartphone, FiGlobe, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const FixFlowLanding = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCaseStudies, setShowCaseStudies] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart Inc",
      content: "FixFlow transformed our business operations. They delivered a custom CRM that increased our efficiency by 300%.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director, LogiCorp",
      content: "The inventory management system FixFlow built saved us $2M annually. Absolutely game-changing!",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Founder, GreenTech Solutions",
      content: "From concept to deployment in just 6 weeks. FixFlow's agility and expertise are unmatched.",
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Revolution",
      client: "RetailMax Inc",
      challenge: "Legacy system couldn't handle 10x traffic growth",
      solution: "Built scalable microservices architecture with real-time analytics",
      results: "500% increase in conversion rate, 99.9% uptime during peak seasons",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
      timeframe: "8 weeks"
    },
    {
      title: "Healthcare Data Platform",
      client: "MedTech Solutions",
      challenge: "Patient data scattered across multiple disconnected systems",
      solution: "Unified patient data platform with AI-powered insights",
      results: "40% reduction in diagnosis time, improved patient outcomes",
      tech: ["Python", "TensorFlow", "PostgreSQL", "Docker"],
      timeframe: "12 weeks"
    },
    {
      title: "FinTech Mobile App",
      client: "PayFlow Startup",
      challenge: "Need for secure, user-friendly mobile payment solution",
      solution: "Cross-platform mobile app with biometric authentication",
      results: "1M+ downloads in first 6 months, 4.8★ app store rating",
      tech: ["React Native", "Blockchain", "Firebase", "Stripe"],
      timeframe: "6 weeks"
    }
  ];

  const services = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Custom SaaS Development",
      description: "Tailored software solutions that scale with your business needs and solve specific industry challenges."
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Mobile-First Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences on any device."
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Web Platforms",
      description: "Full-stack web applications with modern architectures, ensuring performance, security, and scalability."
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "API & Integration",
      description: "Seamless system integrations and robust APIs that connect your tools and streamline workflows."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "10+", label: "Industries Served" }
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle get started button
  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Let the form submit naturally to FormSubmit
    e.target.submit();
    setFormSubmitted(true);
    // Reset after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-white text-2xl font-bold">FixFlow</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-white/80 hover:text-white transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors">Contact</button>
              <motion.button 
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden pb-4"
              >
                <div className="flex flex-col space-y-4">
                  <button onClick={() => {scrollToSection('services'); setIsMenuOpen(false);}} className="text-white/80 hover:text-white transition-colors text-left">Services</button>
                  <button onClick={() => {scrollToSection('about'); setIsMenuOpen(false);}} className="text-white/80 hover:text-white transition-colors text-left">About</button>
                  <button onClick={() => {scrollToSection('testimonials'); setIsMenuOpen(false);}} className="text-white/80 hover:text-white transition-colors text-left">Testimonials</button>
                  <button onClick={() => {scrollToSection('contact'); setIsMenuOpen(false);}} className="text-white/80 hover:text-white transition-colors text-left">Contact</button>
                  <button onClick={() => {handleGetStarted(); setIsMenuOpen(false);}} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold w-fit">
                    Get Started
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              We <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Fix</span> What&apos;s{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Broken</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
            >
              Transform your business challenges into competitive advantages with custom SaaS solutions built for the real world.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button 
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                Start Your Project <FiArrowRight />
              </motion.button>
              <motion.button 
                onClick={() => setShowCaseStudies(!showCaseStudies)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                View Case Studies
              </motion.button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Modal */}
      <AnimatePresence>
        {showCaseStudies && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCaseStudies(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900/95 border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-white">Success Stories</h3>
                <button 
                  onClick={() => setShowCaseStudies(false)}
                  className="text-white/60 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid md:grid-cols-1 gap-8">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{study.title}</h4>
                        <p className="text-blue-400 mb-3">{study.client}</p>
                      </div>
                      <div className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                        {study.timeframe}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-white font-medium mb-2">Challenge:</h5>
                        <p className="text-white/70">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h5 className="text-white font-medium mb-2">Solution:</h5>
                        <p className="text-white/70">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h5 className="text-white font-medium mb-2">Results:</h5>
                        <p className="text-green-400 font-medium">{study.results}</p>
                      </div>
                      
                      <div>
                        <h5 className="text-white font-medium mb-2">Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {study.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <motion.button
                  onClick={() => {setShowCaseStudies(false); handleGetStarted();}}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold"
                >
                  Start Your Success Story
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Solutions That <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Scale</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              From startup MVPs to enterprise solutions, we build software that grows with your ambitions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              No hidden fees. No surprises. Just honest pricing for quality work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                name: "Hourly Rate",
                price: "$10",
                period: "per hour",
                description: "Perfect for small fixes and consultation",
                features: [
                  "Bug fixes & improvements",
                  "Code reviews",
                  "Technical consultation",
                  "Quick feature additions",
                  "No minimum hours",
                  "Pay as you go"
                ],
                popular: false,
                buttonText: "Book Hours"
              },
              {
                name: "Startup MVP",
                price: "$300-500",
                period: "Fixed Price",
                description: "Perfect for validating your idea",
                features: [
                  "MVP Development",
                  "Basic UI/UX Design",
                  "Core Features Only",
                  "Mobile Responsive",
                  "30 Days Support",
                  "Source Code Included",
                  "Basic Database Setup"
                ],
                popular: false,
                buttonText: "Start MVP"
              },
              {
                name: "Growth Package",
                price: "$500-1,000",
                period: "Fixed Price",
                description: "Scale your validated product",
                features: [
                  "Full-Stack Development",
                  "Premium UI/UX Design",
                  "Advanced Features",
                  "API Integration",
                  "Database Design",
                  "90 Days Support",
                  "Performance Optimization",
                  "SEO Optimization"
                ],
                popular: true,
                buttonText: "Scale Now"
              },
              {
                name: "Pro Package",
                price: "$1,000-1,500",
                period: "Fixed Price",
                description: "For established businesses",
                features: [
                  "Custom Architecture",
                  "Advanced Security",
                  "Third-party Integrations",
                  "Admin Dashboard",
                  "Analytics Integration",
                  "6 Months Support",
                  "Team Training",
                  "Priority Support"
                ],
                popular: false,
                buttonText: "Go Pro"
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 min-h-[580px] flex flex-col ${
                  plan.popular 
                    ? 'border-blue-400 lg:scale-105 lg:-translate-y-4' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6 flex-shrink-0">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{plan.name}</h3>
                  <p className="text-white/60 mb-4 text-sm lg:text-base min-h-[48px] flex items-center justify-center">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl lg:text-3xl font-bold text-white block mb-1">{plan.price}</span>
                    <span className="text-white/60 text-sm">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 flex-grow text-sm lg:text-base">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <FiCheck className="text-green-400 w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGetStarted}
                  className={`w-full py-3 lg:py-4 rounded-lg font-semibold text-sm lg:text-base transition-colors mt-auto ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'border border-white/30 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-white/60 mb-4">Need something custom? Let&apos;s talk!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGetStarted}
              className="text-blue-400 hover:text-blue-300 font-semibold"
            >
              Schedule a Free Consultation →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
          </motion.div>

          {/* Company Logos */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-16"
          >
            {[
              "TechStart Inc", "LogiCorp", "GreenTech Solutions", "PayFlow",
              "RetailMax", "MedTech Solutions", "DataFlow Inc", "CloudBase"
            ].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 w-full text-center"
              >
                <span className="text-white/70 font-semibold">{company}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Key Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { metric: "$500K+", label: "Revenue Generated for Clients" },
              { metric: "2x", label: "Average ROI Increase" },
              { metric: "99%", label: "Uptime Guarantee" },
              { metric: "2-4 weeks", label: "Average Project Delivery" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl p-6 border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{item.metric}</div>
                <div className="text-white/70">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">FixFlow</span>?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                We don&apos;t just build software – we solve problems. Our approach combines cutting-edge technology with deep industry expertise to deliver solutions that make a real impact.
              </p>
              <div className="space-y-4">
                {[
                  "Customer-driven development process",
                  "Agile methodology with weekly updates",
                  "24/7 post-launch support and maintenance",
                  "Scalable architecture for future growth"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <FiCheck className="text-green-400 w-5 h-5" />
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <FiTarget className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Problem-Focused</h3>
                    <p className="text-white/70 text-sm">We identify the root cause before building solutions</p>
                  </div>
                  <div className="text-center">
                    <FiUsers className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">User-Centric</h3>
                    <p className="text-white/70 text-sm">Every feature is designed with the end user in mind</p>
                  </div>
                  <div className="text-center">
                    <FiTrendingUp className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Growth-Oriented</h3>
                    <p className="text-white/70 text-sm">Built to scale from day one to millions of users</p>
                  </div>
                  <div className="text-center">
                    <FiZap className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Fast Delivery</h3>
                    <p className="text-white/70 text-sm">Rapid prototyping and iterative development</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Clients</span> Say
            </h2>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-white/90 mb-6 italic">
                &quot;{testimonials[currentTestimonial].content}&quot;
              </p>
              <div>
                <p className="text-white font-semibold">{testimonials[currentTestimonial].name}</p>
                <p className="text-white/60">{testimonials[currentTestimonial].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Fix</span> Your Flow?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Let&apos;s discuss your project and turn your vision into reality. Get a free consultation today.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <FiMail className="w-6 h-6 text-blue-400" />
                    <span className="text-white/80">fortunejite1234@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FiPhone className="w-6 h-6 text-blue-400" />
                    <span className="text-white/80">+234 913 304 0725</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <FiMapPin className="w-6 h-6 text-blue-400" />
                    <span className="text-white/80">Delta, NG & Remote</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <FiZap className="text-yellow-400" />
                  Limited Time Offer
                </h4>
                <p className="text-white/80 mb-4">
                  Book your project this month and get <span className="text-yellow-400 font-semibold">20% off</span> any package or <span className="text-yellow-400 font-semibold">first 10 hours free</span>!
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-green-400 w-4 h-4" />
                    <span className="text-white/70">Free project roadmap worth $100</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-green-400 w-4 h-4" />
                    <span className="text-white/70">Priority development slot</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-green-400 w-4 h-4" />
                    <span className="text-white/70">Extended support period</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Why Start Today?</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <FiCheck className="text-green-400 w-5 h-5" />
                    <span className="text-white/80">Free initial consultation & project estimate</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheck className="text-green-400 w-5 h-5" />
                    <span className="text-white/80">30-day money-back guarantee</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FiCheck className="text-green-400 w-5 h-5" />
                    <span className="text-white/80">Start seeing results in the first week</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <form 
                action="https://formsubmit.co/fortunejite1234@gmail.com" 
                method="POST"
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                {/* Hidden fields for FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New FixFlow Project Inquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={window.location.origin + window.location.pathname} />
                
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center"
                  >
                    <FiCheck className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <p className="text-green-400 font-semibold">Message sent successfully!</p>
                    <p className="text-white/70 text-sm">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                )}
                
                <div>
                  <label className="block text-white/80 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Project Type</label>
                  <select 
                    name="project_type"
                    required
                    className="w-full bg-slate-800 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 [&>option]:bg-slate-800 [&>option]:text-white"
                  >
                    <option value="" className="bg-slate-800 text-white">Select project type</option>
                    <option value="saas" className="bg-slate-800 text-white">SaaS Application</option>
                    <option value="mobile" className="bg-slate-800 text-white">Mobile App</option>
                    <option value="web" className="bg-slate-800 text-white">Web Platform</option>
                    <option value="integration" className="bg-slate-800 text-white">System Integration</option>
                    <option value="api" className="bg-slate-800 text-white">API Development</option>
                    <option value="ecommerce" className="bg-slate-800 text-white">E-commerce Solution</option>
                    <option value="other" className="bg-slate-800 text-white">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Budget Range</label>
                  <select 
                    name="budget"
                    required
                    className="w-full bg-slate-800 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 [&>option]:bg-slate-800 [&>option]:text-white"
                  >
                    <option value="" className="bg-slate-800 text-white">Select budget range</option>
                    <option value="hourly" className="bg-slate-800 text-white">Hourly ($10/hr)</option>
                    <option value="300-500" className="bg-slate-800 text-white">$300 - $500 (MVP)</option>
                    <option value="500-1000" className="bg-slate-800 text-white">$500 - $1,000 (Growth)</option>
                    <option value="1000-1500" className="bg-slate-800 text-white">$1,000 - $1,500 (Pro)</option>
                    <option value="custom" className="bg-slate-800 text-white">Custom Project</option>
                    <option value="not-sure" className="bg-slate-800 text-white">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Project Details</label>
                  <textarea 
                    rows="4"
                    name="message"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                    placeholder="Tell us about your project and the problems you're trying to solve..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
                >
                  Send Message <FiArrowRight />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <span className="text-white text-xl font-bold">FixFlow</span>
          </div>
          <p className="text-white/60 mb-4">
            Transforming ideas into reality, one solution at a time.
          </p>
          <p className="text-white/40 text-sm">
            © 2025 FixFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FixFlowLanding;
