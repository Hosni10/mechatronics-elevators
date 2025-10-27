import type { Locale } from "@/lib/i18n" // Assuming Locale is defined in a types file

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      title: "Mechatronics Elevators",
    },
    hero: {
      title: "Elevating safety and quality towards excellence",
      subtitle: "Comprehensive engineering solutions for elevators and escalators",
      description:
        "Mechatronics Elevators is a leading company specialized in the installation, maintenance, and modernization of elevator and escalator systems, with over 20 years of expertise providing safety, reliability, and cutting-edge solutions to clients across diverse sectors",
      cta: "Request a Service",
      ctaSecondary: "Contact Us",
    },
    stats: {
      experience: "Years of Experience",
      projects: "Completed Projects",
      clients: "Satisfied Clients",
      engineers: "Employee",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive Elevator Solutions",
      installation: {
        title: "Installation",
        description:
          "Professional installation of elevators and escalators with precise engineering — offering a variety of custom designs to match every client’s style,ensuring both elegance and reliability",
      },
      maintenance: {
        title: "Maintenance",
        description: "Comprehensive maintenance services including 24/7 emergency support, even during holidays and official breaks, ensuring optimal performance and continuous safety",
      },
      modernization: {
        title: "Modernization",
        description: "We upgrade your existing elevator into a modern, fully compliant system that meets the latest safety standards — equipped with advanced technology for exceptional performance and efficiency",
      },
    },
    about: {
      title: "Why Choose Us",
      subtitle: "Leading expertise in elevators and escalators",
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
      title: "مصاعد ميكاترونيكس",
    },
    hero: {
      title: "نرتقي بالأمان والجودة نحو التميز",
      subtitle: "حلول هندسية متكاملة للمصاعد و السلالم المتحركة",
      description:
        "شركة ميكاترونكس المتخصصة في تركيب وصيانة وتجديد أنظمة المصاعد والسلالم المتحركة، بخبرة تمتد لأكثر من 20 عامًا في تقديم الأمان والثقة والحلول المتطورة لعملائنا في مختلف القطاعات",
      cta: "طلب معاينة",
      ctaSecondary: "اتصل بنا",
    },
    stats: {
      experience: "سنوات من الخبرة",
      projects: "مشروع مكتمل",
      clients: "عميل راضٍ",
      engineers: "موظف",
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول شاملة للمصاعد",
      installation: {
        title: "التركيب",
        description: "تركيب احترافي للمصاعد والسلالم المتحركة بهندسة دقيقة، مع إمكانية تنفيذ تصاميم متعددة تناسب ذوق كل عميل, لضمان مظهر راقٍ وأداء يعتمد عليه",
      },
      maintenance: {
        title: "الصيانة",
        description: "خدمات صيانة شاملة تشمل الطوارئ على مدار 24 ساعة، بما في ذلك الأعياد والعطلات الرسمية، لضمان الأداء الأمثل والسلامة المستمرة",
      },
      modernization: {
        title: "التحديث",
        description: "نُعيد تأهيل مصعدك القديم ليصبح نظامًا حديثًا متكاملًا يواكب أحدث المواصفات ومعايير الأمان، مستخدمين أحدث التقنيات لتحقيق أعلى كفاءة وأداء متميز",
      },
    },
    about: {
      title: "لماذا تختارنا",
      subtitle: "خبرة رائدة في مجال المصاعد والسلالم المتحركة",
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
