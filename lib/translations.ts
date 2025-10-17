import type { Locale } from "./types" // Assuming Locale is defined in a types file

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Elevating Excellence",
      subtitle: "Engineering Vertical Transportation Solutions",
      description:
        "Leading provider of innovative elevator and escalator systems with over 25 years of experience in delivering safety, reliability, and cutting-edge technology.",
      cta: "Explore Our Solutions",
      ctaSecondary: "Contact Us",
    },
    stats: {
      experience: "Years of Experience",
      projects: "Completed Projects",
      clients: "Satisfied Clients",
      engineers: "Expert Engineers",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive Elevator Solutions",
      installation: {
        title: "Installation",
        description:
          "Professional installation of elevators, escalators, and moving walkways with precision engineering.",
      },
      maintenance: {
        title: "Maintenance",
        description: "24/7 maintenance services ensuring optimal performance and safety compliance.",
      },
      modernization: {
        title: "Modernization",
        description: "Upgrade existing systems with latest technology for improved efficiency and safety.",
      },
    },
    about: {
      title: "Why Choose Us",
      subtitle: "Industry-Leading Expertise",
      quality: "Premium Quality",
      qualityDesc: "International standards and certifications",
      safety: "Safety First",
      safetyDesc: "Rigorous safety protocols and testing",
      innovation: "Innovation",
      innovationDesc: "Latest technology and smart solutions",
      support: "24/7 Support",
      supportDesc: "Round-the-clock technical assistance",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's Discuss Your Project",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    },
    footer: {
      description: "Leading provider of elevator and escalator solutions with commitment to excellence and innovation.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact Information",
      rights: "All rights reserved.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      projects: "المشاريع",
      contact: "اتصل بنا",
    },
    hero: {
      title: "التميز في الارتقاء",
      subtitle: "حلول هندسية للنقل العمودي",
      description:
        "المزود الرائد لأنظمة المصاعد والسلالم المتحركة المبتكرة مع أكثر من 25 عامًا من الخبرة في تقديم الأمان والموثوقية والتكنولوجيا المتطورة.",
      cta: "استكشف حلولنا",
      ctaSecondary: "اتصل بنا",
    },
    stats: {
      experience: "سنوات من الخبرة",
      projects: "مشروع مكتمل",
      clients: "عميل راضٍ",
      engineers: "مهندس خبير",
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول شاملة للمصاعد",
      installation: {
        title: "التركيب",
        description: "تركيب احترافي للمصاعد والسلالم المتحركة والممرات المتحركة بهندسة دقيقة.",
      },
      maintenance: {
        title: "الصيانة",
        description: "خدمات صيانة على مدار الساعة لضمان الأداء الأمثل والامتثال للسلامة.",
      },
      modernization: {
        title: "التحديث",
        description: "ترقية الأنظمة الحالية بأحدث التقنيات لتحسين الكفاءة والسلامة.",
      },
    },
    about: {
      title: "لماذا تختارنا",
      subtitle: "خبرة رائدة في الصناعة",
      quality: "جودة عالية",
      qualityDesc: "معايير وشهادات دولية",
      safety: "السلامة أولاً",
      safetyDesc: "بروتوكولات واختبارات سلامة صارمة",
      innovation: "الابتكار",
      innovationDesc: "أحدث التقنيات والحلول الذكية",
      support: "دعم 24/7",
      supportDesc: "مساعدة فنية على مدار الساعة",
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "دعنا نناقش مشروعك",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      message: "رسالتك",
      send: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      success: "تم إرسال الرسالة بنجاح!",
      error: "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    },
    footer: {
      description: "المزود الرائد لحلول المصاعد والسلالم المتحركة مع الالتزام بالتميز والابتكار.",
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      contact: "معلومات الاتصال",
      rights: "جميع الحقوق محفوظة.",
    },
  },
}

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en
}
