import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock,
  FiSend,
  FiUser,
  FiMessageCircle,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Clear status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: t('address'),
      details: [
        "123 Main Street",
        "City, State 123456",
        "Near Bus Stand"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FiPhone,
      title: t('phone'),
      details: [
        "+91 12345 67890",
        "+91 98765 43210",
        "Toll Free: 1800-123-456"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: FiMail,
      title: t('email'),
      details: [
        "info@bcpoint.com",
        "support@bcpoint.com",
        "manager@bcpoint.com"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FiClock,
      title: t('hours'),
      details: [
        t('operatingHours'),
        "Monday to Saturday",
        "Closed on Sundays"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const services = [
    "Account Opening",
    "Money Transfer",
    "Loan Application",
    "Insurance Services",
    "Deposits & Withdrawals",
    "PAN Card Services",
    "Bill Payment",
    "E-Services"
  ];

  const faqs = [
    {
      question: "What documents are required for account opening?",
      answer: "You need Aadhaar card, PAN card, address proof, and a recent photograph."
    },
    {
      question: "What are the charges for money transfer?",
      answer: "Charges vary based on the amount and transfer type. Please contact us for detailed information."
    },
    {
      question: "How long does loan approval take?",
      answer: "Loan approval typically takes 3-7 working days depending on the loan type and documentation."
    },
    {
      question: "Do you provide home visit services?",
      answer: "Yes, we provide home visit services for senior citizens and disabled customers."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Helmet>
        <title>{t('contact')} - {t('heroTitle')}</title>
        <meta name="description" content="Contact Bank of India BC Point for all your banking needs" />
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t('contactTitle')}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with us for all your banking needs. We're here to help you 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`bg-gradient-to-r ${info.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center space-x-2">
                  <FiCheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

<form
  action="https://formsubmit.co/ee961c8bfcf08522442d4798bb910c8e"
  method="POST"
  onSubmit={handleSubmit}
  className="space-y-6"
>
  {/* 🔐 Hidden Config Fields */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://thankyoupage777.netlify.app/" />
  <input type="hidden" name="_subject" value="New Contact Form Submission!" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_autoresponse" value="Thanks for contacting us! We'll get back to you shortly." />
  <input type="hidden" name="_cc" value="samrudhhi.telenor@gmail.com" />
  <input type="hidden" name="_blacklist" value="viagra, free money, spam" />

  {/* Name Field */}
  <div>
    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
      Full Name *
    </label>
    <div className="relative">
      <FiUser className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
      <input
        type="text"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Enter your full name"
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  </div>

  {/* Email Field */}
  <div>
    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
      Email Address *
    </label>
    <div className="relative">
      <FiMail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
      <input
        type="email"
        id="email"
        name="email"
        required
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your email address"
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  </div>

  {/* Phone Field */}
  <div>
    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
      Mobile Number *
    </label>
    <div className="relative">
      <FiPhone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        pattern="[0-9]{10}"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Enter your 10-digit phone number"
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  </div>

  {/* Message Field */}
  <div>
    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
      Message *
    </label>
    <div className="relative">
      <FiMessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
      <textarea
        id="message"
        name="message"
        required
        rows={4}
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Tell us how we can help you"
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
      />
    </div>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-4 rounded-lg transition-all duration-200 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? (
      <>
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white border-opacity-75" />
        <span>Sending...</span>
      </>
    ) : (
      <>
        <FiSend className="w-5 h-5" />
        <span>Submit</span>
      </>
    )}
  </button>
</form>


            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <FiMapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                  <p className="text-gray-500 text-sm">Visit us at 123 Main Street</p>
                </div>
              </div>

              {/* Quick Services */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Services</h3>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                  <FiAlertCircle className="w-5 h-5 mr-2" />
                  Emergency Contact
                </h3>
                <p className="text-red-800 font-semibold">24/7 Helpline: 1800-123-456</p>
                <p className="text-red-700 text-sm">For urgent banking issues and card blocking</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience Premium Banking?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Visit our branch today or call us to get started with your banking journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+911234567890"
                className="btn-premium inline-flex items-center space-x-2"
              >
                <FiPhone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="mailto:info@bcpoint.com"
                className="btn-premium bg-white/20 hover:bg-white/30 inline-flex items-center space-x-2"
              >
                <FiMail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;