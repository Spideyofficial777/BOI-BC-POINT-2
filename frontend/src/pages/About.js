import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FiUsers, 
  FiAward, 
  FiTrendingUp, 
  FiShield,
  FiTarget,
  FiHeart,
  FiStar,
  FiMapPin,
  FiPhone,
  FiMail
} from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: FiUsers,
      number: "5000+",
      label: "Happy Customers",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FiAward,
      number: "10+",
      label: "Years Experience",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FiTrendingUp,
      number: "50000+",
      label: "Transactions",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FiShield,
      number: "100%",
      label: "Secure Service",
      color: "from-red-500 to-red-600"
    }
  ];

  const values = [
    {
      icon: FiTarget,
      title: "Our Mission",
      description: "To provide accessible, reliable, and secure banking services to every individual in our community, bridging the gap between traditional banking and modern financial needs.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FiHeart,
      title: "Our Values",
      description: "We believe in transparency, integrity, and customer-first approach. Every service we provide is designed to empower our customers financially.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: FiStar,
      title: "Our Vision",
      description: "To become the most trusted Banking Correspondent point in the region, known for excellence in service delivery and customer satisfaction.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const team = [
    {
      name: "राजेश कुमार",
      role: "Branch Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      experience: "10+ Years Experience"
    },
    {
      name: "प्रिया शर्मा",
      role: "Customer Service Head",
      image: "https://images.unsplash.com/photo-1494790108755-2616b86b639c?w=300&h=300&fit=crop&crop=face",
      experience: "8+ Years Experience"
    },
    {
      name: "अमित पटेल",
      role: "Technical Support",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      experience: "5+ Years Experience"
    }
  ];

  const certifications = [
    {
      title: "Authorized BC Point",
      description: "Officially authorized by Bank of India",
      icon: FiAward
    },
    {
      title: "RBI Compliance",
      description: "Fully compliant with RBI guidelines",
      icon: FiShield
    },
    {
      title: "ISO Certified",
      description: "Quality management system certified",
      icon: FiStar
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Helmet>
        <title>{t('about')} - {t('heroTitle')}</title>
        <meta name="description" content={t('aboutDescription')} />
      </Helmet>

      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t('aboutTitle')}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{t('aboutDescription')}</p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image & Description */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1705756567686-5dbf4788d35f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBiYW5raW5nfGVufDB8fHxibHVlfDE3NTI0MjM0Njh8MA&ixlib=rb-4.1.0&q=85"
                  alt="Bank of India BC Point"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Your Trusted Banking Partner Since 2014
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We have been serving our community with dedication and integrity for over a decade. 
                As an authorized Banking Correspondent point of Bank of India, we bring banking 
                services directly to your doorstep.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence, combined with deep understanding of local needs, 
                has made us the preferred choice for thousands of customers. We believe in 
                building lasting relationships through trust, transparency, and exceptional service.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
                  Established 2014
                </div>
                <div className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold">
                  RBI Approved
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Numbers that speak for our excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-blue-100">What drives us every day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-3xl text-center"
              >
                <div className={`bg-gradient-to-r ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-blue-100 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Meet the people behind our success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-gray-300">Trusted and verified by authorities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <cert.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-300">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-12">Visit Our Branch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass p-6 rounded-2xl text-center">
                <FiMapPin className="w-8 h-8 text-blue-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Address</h3>
                <p className="text-blue-100">123 Main Street, City, State 123456</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <FiPhone className="w-8 h-8 text-blue-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                <p className="text-blue-100">+91 12345 67890</p>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <FiMail className="w-8 h-8 text-blue-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <p className="text-blue-100">info@bcpoint.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;