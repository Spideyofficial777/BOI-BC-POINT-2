import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    about: "About Us",
    contact: "Contact",
    rules: "Rules & Regulations",
    
    // Hero Section
    heroTitle: "Bank of India BC Point",
    heroSubtitle: "Your Trusted Banking Partner",
    heroDescription: "Complete banking solutions at your doorstep. Experience seamless financial services with our authorized Banking Correspondent point.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    
    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive Banking Solutions",
    accountOpening: "Account Opening",
    moneyTransfer: "Money Transfer",
    loanServices: "Loan Services",
    insurance: "Insurance",
    deposits: "Deposits",
    withdrawals: "Withdrawals",
    
    // About
    aboutTitle: "About Us",
    aboutDescription: "We are an authorized Banking Correspondent point providing reliable banking services to our community.",
    
    // Contact
    contactTitle: "Contact Us",
    address: "Address",
    phone: "Phone",
    email: "Email",
    hours: "Working Hours",
    
    // Operating Hours
    operatingHours: "Morning 10 AM to 1 PM & Evening 6 PM to 9 PM",
    
    // Features
    panCard: "PAN Card Services",
    xerox: "Xerox & Printing",
    billPayment: "Bill Payment",
    eServices: "E-Services Form",
    
    // Footer
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    followUs: "Follow Us",
    
    // Testimonials
    testimonialsTitle: "What Our Customers Say",
    
    // Daily Quote
    dailyQuote: "Daily Quote",
    
    // Form Labels
    name: "Name",
    mobile: "Mobile",
    email: "Email",
    message: "Message",
    submit: "Submit",
    
    // Common
    readMore: "Read More",
    viewAll: "View All",
    backToTop: "Back to Top"
  },
  
  hi: {
    // Navigation
    home: "होम",
    services: "सेवाएं",
    about: "हमारे बारे में",
    contact: "संपर्क",
    rules: "नियम और विनियम",
    
    // Hero Section
    heroTitle: "बैंक ऑफ इंडिया बीसी प्वाइंट",
    heroSubtitle: "आपका विश्वसनीय बैंकिंग साझेदार",
    heroDescription: "आपके दरवाजे पर संपूर्ण बैंकिंग समाधान। हमारे अधिकृत बैंकिंग संवाददाता प्वाइंट के साथ निर्बाध वित्तीय सेवाओं का अनुभव करें।",
    getStarted: "शुरू करें",
    learnMore: "और जानें",
    
    // Services
    servicesTitle: "हमारी सेवाएं",
    servicesSubtitle: "व्यापक बैंकिंग समाधान",
    accountOpening: "खाता खोलना",
    moneyTransfer: "मनी ट्रांसफर",
    loanServices: "लोन सेवाएं",
    insurance: "बीमा",
    deposits: "जमा",
    withdrawals: "निकासी",
    
    // About
    aboutTitle: "हमारे बारे में",
    aboutDescription: "हम एक अधिकृत बैंकिंग संवाददाता प्वाइंट हैं जो हमारे समुदाय को विश्वसनीय बैंकिंग सेवाएं प्रदान करता है।",
    
    // Contact
    contactTitle: "संपर्क करें",
    address: "पता",
    phone: "फोन",
    email: "ईमेल",
    hours: "कार्य समय",
    
    // Operating Hours
    operatingHours: "सुबह 10 बजे से 1 बजे और शाम 6 बजे से 9 बजे तक",
    
    // Features
    panCard: "पैन कार्ड सेवाएं",
    xerox: "जेरॉक्स और प्रिंटिंग",
    billPayment: "बिल भुगतान",
    eServices: "ई-सेवा फॉर्म",
    
    // Footer
    quickLinks: "त्वरित लिंक",
    contactInfo: "संपर्क जानकारी",
    followUs: "हमें फॉलो करें",
    
    // Testimonials
    testimonialsTitle: "हमारे ग्राहक क्या कहते हैं",
    
    // Daily Quote
    dailyQuote: "दैनिक उद्धरण",
    
    // Form Labels
    name: "नाम",
    mobile: "मोबाइल",
    email: "ईमेल",
    message: "संदेश",
    submit: "सबमिट करें",
    
    // Common
    readMore: "और पढ़ें",
    viewAll: "सभी देखें",
    backToTop: "वापस ऊपर"
  },
  
  mr: {
    // Navigation
    home: "होम",
    services: "सेवा",
    about: "आमच्याबद्दल",
    contact: "संपर्क",
    rules: "नियम आणि नियम",
    
    // Hero Section
    heroTitle: "बँक ऑफ इंडिया बीसी पॉइंट",
    heroSubtitle: "तुमचा विश्वसनीय बँकिंग भागीदार",
    heroDescription: "तुमच्या दारात संपूर्ण बँकिंग समाधान। आमच्या अधिकृत बँकिंग संवाददाता पॉइंटसह निर्बाध आर्थिक सेवांचा अनुभव घ्या.",
    getStarted: "सुरुवात करा",
    learnMore: "अधिक जाणून घ्या",
    
    // Services
    servicesTitle: "आमच्या सेवा",
    servicesSubtitle: "व्यापक बँकिंग समाधान",
    accountOpening: "खाते उघडणे",
    moneyTransfer: "पैसे ट्रान्सफर",
    loanServices: "कर्ज सेवा",
    insurance: "विमा",
    deposits: "ठेवी",
    withdrawals: "पैसे काढणे",
    
    // About
    aboutTitle: "आमच्याबद्दल",
    aboutDescription: "आम्ही एक अधिकृत बँकिंग संवाददाता पॉइंट आहोत जो आमच्या समुदायाला विश्वसनीय बँकिंग सेवा प्रदान करतो.",
    
    // Contact
    contactTitle: "संपर्क करा",
    address: "पत्ता",
    phone: "फोन",
    email: "ईमेल",
    hours: "कामाचे तास",
    
    // Operating Hours
    operatingHours: "सकाळी 10 ते 1 व सायंकाळ 6 ते 9 सेवा",
    
    // Features
    panCard: "पॅन कार्ड सुविधा",
    xerox: "झेरॉक्स व इतर प्रिंटिंग",
    billPayment: "लाईट बिल भरणे",
    eServices: "ई-सेवा फॉर्म भरणे",
    
    // Footer
    quickLinks: "त्वरित लिंक",
    contactInfo: "संपर्क माहिती",
    followUs: "आमचे अनुसरण करा",
    
    // Testimonials
    testimonialsTitle: "आमचे ग्राहक काय म्हणतात",
    
    // Daily Quote
    dailyQuote: "दैनिक विचार",
    
    // Form Labels
    name: "नाव",
    mobile: "मोबाइल",
    email: "ईमेल",
    message: "संदेश",
    submit: "सबमिट करा",
    
    // Common
    readMore: "अधिक वाचा",
    viewAll: "सर्व पहा",
    backToTop: "वर जा"
  }
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('mr'); // Default to Marathi

  const t = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;