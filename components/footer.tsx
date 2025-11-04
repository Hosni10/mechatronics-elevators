"use client"

import { useLocale } from "@/contexts/locale-context"
import { getTranslations } from "@/lib/translations"
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6"

export function Footer() {
  const { locale } = useLocale()
  const t = getTranslations(locale)

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img 
                src="/mechatronics-elevators-logo.png" 
                alt="Mechatronics Elevators Logo" 
                className="h-12 w-auto sm:h-14 md:h-16"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">{t.footer.description}</p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Mechatronlcs.Elevators"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/mechatroni69769?s=21"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href="http://www.linkedin.com/in/mechatronics-elevators-417aa738b"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/mechatronics_elevators1?igsh=MWJvN3J2emM2Z3RxbA=="
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@mechatronicselevators1?is_from_webapp=1&sender_device=pc "
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80 text-sm">{t.services.installation.title}</li>
              <li className="text-primary-foreground/80 text-sm">{t.services.maintenance.title}</li>
              <li className="text-primary-foreground/80 text-sm">{t.services.modernization.title}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} Mechatronics Elevators. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
