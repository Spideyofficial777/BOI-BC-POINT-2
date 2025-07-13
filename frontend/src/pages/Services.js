import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FiUser, 
  FiSend, 
  FiCreditCard, 
  FiShield, 
  FiTrendingUp, 
  FiDownload,
  FiArrowRight,
  FiCheck,
  FiClock,
  FiDollarSign,
  FiFileText,
  FiPhone
} from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: FiUser,
      title: t('accountOpening'),
      description: "Open savings and current accounts with minimal documentation",
      features: [
        "Savings Account",
        "Current Account", 
        "Minor Account",
        "Joint Account"
      ],
      documents: [
        "Aadhaar Card",
        "PAN Card",
        "Address Proof",
        "Photo"
      ],
      process: [
        "Document Verification",
        "KYC Completion",
        "Account Opening",
        "Welcome Kit"
      ],
      color: "from-blue-500 to-blue-600",
      bgImage: "https://images.unsplash.com/photo-1587372540719-8f87444337b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxiYW5rJTIwb2ZmaWNlfGVufDB8fHxibHVlfDE3NTI0MjM0NzZ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: FiSend,
      title: t('moneyTransfer'),
      description: "Fast and secure money transfer services across India",
      features: [
        "NEFT Transfer",
        "RTGS Transfer",
        "UPI Payments",
        "Cash Deposits"
      ],
      documents: [
        "Account Details",
        "Beneficiary Info",
        "Valid ID",
        "Transfer Amount"
      ],
      process: [
        "Verify Details",
        "Enter Amount",
        "Confirm Transfer",
        "Receipt Generation"
      ],
      color: "from-green-500 to-green-600",
      bgImage: "https://images.unsplash.com/photo-1657670251024-0738506e9bf2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxiYW5rJTIwb2ZmaWNlfGVufDB8fHxibHVlfDE3NTI0MjM0NzZ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: FiCreditCard,
      title: t('loanServices'),
      description: "Various loan options with competitive interest rates",
      features: [
        "Personal Loan",
        "Home Loan",
        "Vehicle Loan",
        "Business Loan"
      ],
      documents: [
        "Income Proof",
        "Credit Score",
        "Bank Statements",
        "Property Papers"
      ],
      process: [
        "Loan Application",
        "Document Review",
        "Approval Process",
        "Loan Disbursal"
      ],
      color: "from-purple-500 to-purple-600",
      bgImage: "https://images.unsplash.com/photo-1577312891106-b39a179bfab6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxiYW5rJTIwb2ZmaWNlfGVufDB8fHxibHVlfDE3NTI0MjM0NzZ8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: FiShield,
      title: t('insurance'),
      description: "Comprehensive insurance solutions for your security",
      features: [
        "Life Insurance",
        "Health Insurance",
        "Vehicle Insurance",
        "Property Insurance"
      ],
      documents: [
        "Age Proof",
        "Medical Reports",
        "Income Certificate",
        "Nominee Details"
      ],
      process: [
        "Policy Selection",
        "Premium Calculation",
        "Documentation",
        "Policy Activation"
      ],
      color: "from-red-500 to-red-600",
      bgImage: "https://images.pexels.com/photos/11158027/pexels-photo-11158027.jpeg"
    },
    {
      icon: FiTrendingUp,
      title: t('deposits'),
      description: "Secure deposit services with attractive interest rates",
      features: [
        "Fixed Deposits",
        "Recurring Deposits",
        "Cash Deposits",
        "Cheque Deposits"
      ],
      documents: [
        "Account Details",
        "Deposit Amount",
        "Tenure Selection",
        "Nominee Info"
      ],
      process: [
        "Amount Deposit",
        "Receipt Generation",
        "Account Update",
        "Confirmation SMS"
      ],
      color: "from-yellow-500 to-yellow-600",
      bgImage: "https://images.pexels.com/photos/418285/pexels-photo-418285.jpeg"
    },
    {
      icon: FiDownload,
      title: t('withdrawals'),
      description: "Easy and secure cash withdrawal services",
      features: [
        "Cash Withdrawal",
        "Mini Statement",
        "Balance Inquiry",
        "PIN Change"
      ],
      documents: [
        "Account Number",
        "ATM PIN",
        "Valid ID",
        "Withdrawal Slip"
      ],
      process: [
        "Identity Verification",
        "Amount Entry",
        "Transaction Processing",
        "Cash Dispensing"
      ],
      color: "from-indigo-500 to-indigo-600",
      bgImage: "https://images.pexels.com/photos/9169180/pexels-photo-9169180.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Helmet>
        <title>{t('services')} - {t('heroTitle')}</title>
        <meta name="description" content={t('servicesSubtitle')} />
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t('servicesTitle')}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{t('servicesSubtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeService === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                <service.icon className="w-5 h-5" />
                <span className="font-medium">{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Service Image */}
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={services[activeService].bgImage}
                alt={services[activeService].title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className={`bg-gradient-to-r ${services[activeService].color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                  {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{services[activeService].title}</h3>
                <p className="text-white/90">{services[activeService].description}</p>
              </div>
            </div>

            {/* Service Details */}
            <div className="space-y-8">
              {/* Features */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FiCheck className="w-6 h-6 text-green-500 mr-2" />
                  Service Features
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <FiArrowRight className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FiFileText className="w-6 h-6 text-purple-500 mr-2" />
                  Required Documents
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {services[activeService].documents.map((doc, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <FiArrowRight className="w-4 h-4 text-purple-500" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FiClock className="w-6 h-6 text-orange-500 mr-2" />
                  Process Steps
                </h4>
                <div className="space-y-3">
                  {services[activeService].process.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <div className="pt-4">
                <button className="btn-premium inline-flex items-center space-x-2">
                  <FiPhone className="w-5 h-5" />
                  <span>Get Started Today</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">{t('hours')}</h2>
            <div className="glass p-8 rounded-3xl max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <FiClock className="w-8 h-8 text-blue-300" />
                <span className="text-2xl font-semibold text-white">{t('operatingHours')}</span>
              </div>
              <p className="text-blue-100 text-lg">
                Visit us during these hours for all your banking needs
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;