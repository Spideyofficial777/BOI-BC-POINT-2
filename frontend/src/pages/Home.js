import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiUser, 
  FiSend, 
  FiCreditCard, 
  FiShield, 
  FiTrendingUp, 
  FiDownload,
  FiPrinter,
  FiZap,
  FiFileText,
  FiChevronLeft,
  FiChevronRight,
  FiStar,
  FiArrowRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock
} from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dailyQuote, setDailyQuote] = useState(0);

  // Hero Images Carousel
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1587372540719-8f87444337b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxiYW5rJTIwb2ZmaWNlfGVufDB8fHxibHVlfDE3NTI0MjM0NzZ8MA&ixlib=rb-4.1.0&q=85",
      title: t('heroTitle'),
      subtitle: t('heroSubtitle')
    },
    {
      url: "https://images.unsplash.com/photo-1657670251024-0738506e9bf2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxiYW5rJTIwb2ZmaWNlfGVufDB8fHxibHVlfDE3NTI0MjM0NzZ8MA&ixlib=rb-4.1.0&q=85",
      title: t('servicesTitle'),
      subtitle: t('servicesSubtitle')
    },
    {
      url: "https://images.unsplash.com/photo-1577312891106-b39a179bfab6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxiYW5rJTIwb2ZmaWNlfGVufDB8fHxibHVlfDE3NTI0MjM0NzZ8MA&ixlib=rb-4.1.0&q=85",
      title: t('contactTitle'),
      subtitle: t('operatingHours')
    }
  ];

  // Daily Quotes
  const quotes = [
    {
      en: "Your financial security is our priority",
      hi: "आपकी वित्तीय सुरक्षा हमारी प्राथमिकता है",
      mr: "तुमची आर्थिक सुरक्षा आमची प्राथमिकता आहे"
    },
    {
      en: "Banking made simple and secure",
      hi: "बैंकिंग को सरल और सुरक्षित बनाया गया",
      mr: "बँकिंग सोपी आणि सुरक्षित बनवली"
    },
    {
      en: "Your trusted banking partner",
      hi: "आपका विश्वसनीय बैंकिंग साझेदार",
      mr: "तुमचा विश्वसनीय बँकिंग भागीदार"
    }
  ];

  // Services Data
  const services = [
    {
      icon: FiUser,
      title: t('accountOpening'),
      description: "Quick and easy account opening process",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FiSend,
      title: t('moneyTransfer'),
      description: "Secure money transfer services",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FiCreditCard,
      title: t('loanServices'),
      description: "Various loan options available",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FiShield,
      title: t('insurance'),
      description: "Comprehensive insurance plans",
      color: "from-red-500 to-red-600"
    },
    {
      icon: FiTrendingUp,
      title: t('deposits'),
      description: "Secure deposit services",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: FiDownload,
      title: t('withdrawals'),
      description: "Easy withdrawal process",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  // Additional Features
  const additionalFeatures = [
    {
      icon: FiCreditCard,
      title: t('panCard'),
      description: "PAN card application and services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FiPrinter,
      title: t('xerox'),
      description: "Photocopy and printing services",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: FiZap,
      title: t('billPayment'),
      description: "Utility bill payment services",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FiFileText,
      title: t('eServices'),
      description: "Government e-service forms",
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "राम शर्मा",
      text: "Excellent service and very helpful staff. Banking made easy!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "सुनीता पाटील",
      text: "Quick money transfer and great customer support. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b86b639c?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "मोहन कुमार",
      text: "Professional service and secure transactions. Very satisfied!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    const quoteInterval = setInterval(() => {
      setDailyQuote((prev) => (prev + 1) % quotes.length);
    }, 8000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(quoteInterval);
    };
  }, [heroImages.length, quotes.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Sliding Images */}
      <section className="relative h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60" />
          </div>
        ))}
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass p-8 rounded-3xl"
            >
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                {heroImages[currentSlide].title}
              </motion.h1>
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-blue-100 mb-8"
              >
                {heroImages[currentSlide].subtitle}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto"
              >
                {t('heroDescription')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/services" className="btn-premium inline-flex items-center space-x-2">
                  <span>{t('getStarted')}</span>
                  <FiArrowRight />
                </Link>
                <Link to="/about" className="btn-premium bg-white/20 hover:bg-white/30 inline-flex items-center space-x-2">
                  <span>{t('learnMore')}</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Slide Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 z-10"
        >
          <FiChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 z-10"
        >
          <FiChevronRight className="w-6 h-6 text-white" />
        </button>
      </section>

      {/* Daily Quote Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-dark p-8 rounded-3xl max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">{t('dailyQuote')}</h2>
            <motion.p
              key={dailyQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg text-blue-800 italic"
            >
              "{quotes[dailyQuote][useLanguage().language]}"
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">{t('servicesTitle')}</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">{t('servicesSubtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card card-hover group"
              >
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-blue-100">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">वैशिष्ट्ये</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Additional services we provide</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">{t('testimonialsTitle')}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Customer success stories</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours & Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl font-bold text-white mb-6">{t('hours')}</h2>
              <div className="glass p-6 rounded-2xl">
                <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                  <FiClock className="w-8 h-8 text-blue-300" />
                  <span className="text-xl font-semibold text-white">{t('operatingHours')}</span>
                </div>
                <div className="space-y-3 text-blue-100">
                  <div className="flex items-center space-x-3">
                    <FiPhone className="w-5 h-5" />
                    <span>+91 12345 67890</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiMail className="w-5 h-5" />
                    <span>info@bcpoint.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiMapPin className="w-5 h-5" />
                    <span>123 Main Street, City</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Ready to get started?</h3>
              <p className="text-blue-100 mb-8 text-lg">
                Contact us today for all your banking needs
              </p>
              <Link
                to="/contact"
                className="btn-premium inline-flex items-center space-x-2 text-lg px-8 py-4"
              >
                <span>{t('contactTitle')}</span>
                <FiArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;