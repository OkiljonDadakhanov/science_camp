"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Navigation links array - defined once for reuse
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Biz haqimizda", href: "#about" },
    { name: "Akademik o'quv dasturlari", href: "#academic" },
    { name: "Foto lavhalar", href: "#intellectual-activities" },
    { name: "Ijtimoiy hayot ", href: "#non-academic" },
    { name: "Joylashuv", href: "#location" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isOpen ? "bg-white border-b shadow-sm py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-28 w-28 overflow-hidden">
              <div className="h-full flex items-center justify-center rounded-md">
                <Image
                  src="/images/logo.png"
                  width={200}
                  height={200}
                  alt="Logo"
                  className="object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Mobile Registration Button - Show only on mobile next to logo */}
          <div className="md:hidden flex items-center gap-2">
            <Link href="https://t.me/ScienceCampbot">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Ro'yxatdan o'tish
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="flex items-center p-2 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-blue-600"
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            ))}

            <Link href="https://t.me/ScienceCampbot">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Ro'yxatdan o'tish
              </Button>
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 bg-white">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="py-2 px-4 rounded-md hover:bg-blue-50 transition-colors"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}