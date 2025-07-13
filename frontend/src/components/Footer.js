import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('home') },
    { path: '/services', label: t('services') },
    { path: '/about', label: t('about') },
    { path: '/contact', label: t('contact') },
    { path: '/rules', label: t('rules') },
  ];

  const services = [
    t('accountOpening'),
    t('moneyTransfer'),
    t('loanServices'),
    t('insurance'),
    t('deposits'),
    t('withdrawals'),
  ];

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-2 rounded-full">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">{t('heroTitle')}</h3>
            </div>
            <p className="text-blue-100 text-sm">
              {t('heroSubtitle')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">{t('services')}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-blue-100 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">{t('contactInfo')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-blue-300 mt-0.5" />
                <div>
                  <p className="text-blue-100 text-sm">
                    123 Main Street, City, State 123456
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-blue-300" />
                <p className="text-blue-100 text-sm">+91 12345 67890</p>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-blue-300" />
                <p className="text-blue-100 text-sm">info@bcpoint.com</p>
              </div>
            </div>
            <div className="bg-blue-800/50 p-3 rounded-lg">
              <p className="text-blue-100 text-sm font-medium">{t('hours')}</p>
              <p className="text-blue-200 text-sm">{t('operatingHours')}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-blue-700/50 mt-8 pt-8 text-center"
        >
          <p className="text-blue-100 text-sm">
            © 2024 Bank of India BC Point. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;