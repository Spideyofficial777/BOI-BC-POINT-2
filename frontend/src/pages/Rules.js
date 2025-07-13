import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FiBook, 
  FiShield, 
  FiUsers, 
  FiCreditCard,
  FiDollarSign,
  FiClock,
  FiAlertTriangle,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp,
  FiFileText,
  FiLock,
  FiEye
} from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Rules = () => {
  const { t } = useLanguage();
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const ruleCategories = [
    {
      icon: FiUsers,
      title: "Account Opening Rules",
      color: "from-blue-500 to-blue-600",
      rules: [
        "Minimum age requirement: 18 years for individual accounts",
        "Valid KYC documents are mandatory",
        "Initial minimum deposit as per account type",
        "Monthly average balance requirements apply",
        "Account holder must provide complete accurate information",
        "Joint account holders must be present during opening",
        "Minor accounts require guardian consent",
        "PAN card mandatory for deposits above ₹50,000"
      ]
    },
    {
      icon: FiCreditCard,
      title: "Transaction Rules",
      color: "from-green-500 to-green-600",
      rules: [
        "Daily transaction limits as per RBI guidelines",
        "Cash transactions above ₹2 lakh require PAN verification",
        "Transaction fees as per bank's schedule",
        "Cut-off timings for same-day processing",
        "Beneficiary verification mandatory for transfers",
        "OTP verification required for online transactions",
        "Transaction reversal process within 24 hours",
        "Dispute resolution within 7 working days"
      ]
    },
    {
      icon: FiDollarSign,
      title: "Charges & Fees",
      color: "from-purple-500 to-purple-600",
      rules: [
        "Service charges as per bank's tariff schedule",
        "Monthly maintenance charges for accounts",
        "ATM usage charges beyond free limits",
        "Cheque book charges as applicable",
        "SMS alert charges monthly",
        "Account closure charges if applicable",
        "Penalty charges for minimum balance non-maintenance",
        "Foreign exchange charges for international transactions"
      ]
    },
    {
      icon: FiShield,
      title: "Security Guidelines",
      color: "from-red-500 to-red-600",
      rules: [
        "Keep ATM PIN and passwords confidential",
        "Immediately report lost/stolen cards",
        "Regular monitoring of account statements",
        "Never share OTP with anyone",
        "Use only official bank channels for transactions",
        "Keep contact information updated",
        "Report suspicious activities immediately",
        "Follow safe internet banking practices"
      ]
    },
    {
      icon: FiClock,
      title: "Operating Hours & Timings",
      color: "from-orange-500 to-orange-600",
      rules: [
        "Branch timings: Morning 10 AM to 1 PM, Evening 6 PM to 9 PM",
        "Closed on Sundays and public holidays",
        "Cash transactions processed during business hours",
        "Online services available 24/7",
        "Customer service helpline available 24/7",
        "Cheque clearance as per RBI guidelines",
        "Monthly account statements generated",
        "Quarterly review of accounts"
      ]
    },
    {
      icon: FiFileText,
      title: "Documentation Requirements",
      color: "from-indigo-500 to-indigo-600",
      rules: [
        "Original documents required for verification",
        "Self-attested copies to be submitted",
        "Address proof not older than 3 months",
        "Income proof required for loan applications",
        "Photograph as per bank specifications",
        "Signature verification mandatory",
        "Periodic KYC updates required",
        "Document retention policy as per regulations"
      ]
    }
  ];

  const importantNotices = [
    {
      type: "warning",
      title: "Important Security Notice",
      content: "Never share your banking credentials with anyone. Bank officials will never ask for your PIN or password over phone or email.",
      icon: FiAlertTriangle
    },
    {
      type: "info",
      title: "RBI Guidelines",
      content: "All transactions are subject to RBI guidelines and regulations. Please ensure compliance with all banking rules.",
      icon: FiBook
    },
    {
      type: "success",
      title: "Customer Protection",
      content: "Your deposits are protected under the Deposit Insurance and Credit Guarantee Corporation (DICGC) scheme.",
      icon: FiShield
    }
  ];

  const privacyPolicy = [
    "We collect and process your personal information in accordance with applicable laws",
    "Your data is stored securely and used only for banking purposes",
    "We do not share your information with third parties without consent",
    "You have the right to access and correct your personal information",
    "We implement robust security measures to protect your data",
    "Regular audits ensure compliance with privacy regulations",
    "Data retention policies are strictly followed",
    "You can opt-out of marketing communications at any time"
  ];

  const termsConditions = [
    "These terms and conditions govern your relationship with our BC Point",
    "By using our services, you agree to comply with all applicable rules",
    "The bank reserves the right to modify terms with prior notice",
    "Disputes will be resolved through proper legal channels",
    "Account holders must maintain updated contact information",
    "Unauthorized transactions should be reported immediately",
    "The bank is not liable for third-party service failures",
    "Force majeure events may affect service availability"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Helmet>
        <title>{t('rules')} - {t('heroTitle')}</title>
        <meta name="description" content="Rules and regulations for Bank of India BC Point services" />
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t('rules')}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Important guidelines and regulations for our banking services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {importantNotices.map((notice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-2xl p-6 ${
                  notice.type === 'warning' ? 'bg-red-50 border-l-4 border-red-500' :
                  notice.type === 'info' ? 'bg-blue-50 border-l-4 border-blue-500' :
                  'bg-green-50 border-l-4 border-green-500'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <notice.icon className={`w-6 h-6 ${
                    notice.type === 'warning' ? 'text-red-500' :
                    notice.type === 'info' ? 'text-blue-500' :
                    'text-green-500'
                  }`} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{notice.title}</h3>
                    <p className="text-gray-700">{notice.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Banking Rules & Regulations</h2>
            <p className="text-xl text-gray-600">Click on each category to view detailed rules</p>
          </motion.div>

          <div className="space-y-6">
            {ruleCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`bg-gradient-to-r ${category.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  {expandedSection === index ? (
                    <FiChevronUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <FiChevronDown className="w-6 h-6 text-gray-500" />
                  )}
                </button>
                
                {expandedSection === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="bg-white rounded-xl p-6">
                      <ul className="space-y-3">
                        {category.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start space-x-3">
                            <FiCheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center">
                    <FiLock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Privacy Policy</h3>
                </div>
                <ul className="space-y-3">
                  {privacyPolicy.map((policy, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FiCheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{policy}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center">
                    <FiEye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Terms & Conditions</h3>
                </div>
                <ul className="space-y-3">
                  {termsConditions.map((term, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FiCheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact for Queries */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Have Questions About Our Rules?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team is here to help you understand all banking regulations and answer your queries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-premium inline-flex items-center space-x-2"
              >
                <FiFileText className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
              <a
                href="tel:+911234567890"
                className="btn-premium bg-white/20 hover:bg-white/30 inline-flex items-center space-x-2"
              >
                <FiClock className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong>Disclaimer:</strong> All banking services are subject to RBI guidelines and regulations. 
              Rules and charges may be updated from time to time. Please check with our branch for the latest information. 
              The bank reserves the right to modify terms and conditions with prior notice to customers.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Rules;