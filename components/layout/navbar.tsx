"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Car, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { SITE_CONFIG } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#booking-form", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/50"
            : "bg-white/90 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light">
                <Car className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">
                  {SITE_CONFIG.name}
                </h1>
                <p className="text-xs text-text-light">
                  {SITE_CONFIG.tagline}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-semibold transition-colors",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-text hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href={SITE_CONFIG.contactLinks.tel}
                className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary px-4 py-2 text-sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <a
                href={SITE_CONFIG.contactLinks.whatsappWithMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white focus-visible:ring-green-500 px-4 py-2 text-sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
              <LinkButton variant="gold" size="sm" href="/#booking-form">
                Book Now
              </LinkButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-text hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-gray-200 lg:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
                      pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-text hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href={SITE_CONFIG.contactLinks.tel}
                  className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary w-full px-6 py-3 text-base"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                <a
                  href={SITE_CONFIG.contactLinks.whatsappWithMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white focus-visible:ring-green-500 w-full px-6 py-3 text-base"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
                <LinkButton variant="gold" size="md" href="/#booking-form" className="w-full">
                  Book Now
                </LinkButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
