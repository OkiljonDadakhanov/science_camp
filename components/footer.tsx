import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Science Olympiad Center</h3>
            <p className="text-blue-200">
              Inspiring the next generation of scientists, engineers, and innovators through hands-on learning
              experiences.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#" },
                { name: "About", href: "#about" },
                { name: "Academic Process", href: "#academic" },
                { name: "Activities", href: "#intellectual-activities" },
                { name: "FAQ", href: "#faq" },
                { name: "Location", href: "#location" },
                { name: "Registration", href: "#" },
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
            <h3 className="text-xl font-bold">Camp Sessions</h3>
            <ul className="space-y-2">
              {[
                "June 15 - June 29, 2025",
                "July 6 - July 20, 2025",
                "July 27 - August 10, 2025",
                "August 17 - August 31, 2025",
              ].map((session, i) => (
                <li key={i} className="text-blue-200">
                  {session}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-200 mt-0.5" />
                <span className="text-blue-200">123 Science Way, Innovation City, ST 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-200" />
                <span className="text-blue-200">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-200" />
                <span className="text-blue-200">info@sciencecamp.org</span>
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
