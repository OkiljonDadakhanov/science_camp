import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Science Olympiad Center</h3>
            <p className="text-blue-200">
              Ilm olamiga birinchi qadamingizni qo'ying — kashf qilish, o'rganish va o'zgarishga tayyor bo'ling.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/163am8nss3/" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/camp_summerscience/" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://t.me/science_camp" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Send className="h-5 w-5" />
                <span className="sr-only">Telegram</span>
              </Link>
              <Link href="https://www.linkedin.com/in/summer-science-camp-858414360/" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Tezkor havolalar</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#" },
                { name: "Biz haqimizda", href: "#about" },
                { name: "Akademik o'quv dasturlari", href: "#academic" },
                { name: "Foto lavhalar", href: "#intellectual-activities" },
                { name: "Ko'p beriladigan savollar", href: "#faq" },
                { name: "Joylashuv", href: "#location" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-blue-200 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Aloqa ma'lumotlari</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-200 mt-0.5" />
                <span className="text-blue-200">100099, Otchopar-1, Darvozakent ko'chasi, 60-uy, Yunusobod tumani, Toshkent, O'zbekiston</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-200" />
                <span className="text-blue-200">+998 77 550 33 66</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-200" />
                <span className="text-blue-200">info@olympcenter.uz</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-200">
          <p>© {new Date().getFullYear()} Science Olympiad Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}