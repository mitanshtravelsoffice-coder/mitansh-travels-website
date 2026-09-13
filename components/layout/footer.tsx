"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-dark">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{SITE_CONFIG.name}</h3>
                <p className="text-xs text-gray-300">{SITE_CONFIG.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium taxi and tour services in Mathura, Vrindavan & Agra.
              24×7 airport transfers, temple tours, outstation taxi with professional drivers.
            </p>
            <div className="space-y-3">
              <a
                href={SITE_CONFIG.contactLinks.tel}
                className="flex items-center space-x-3 text-gray-300 hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </a>
              <a
                href={SITE_CONFIG.contactLinks.mailto}
                className="flex items-center space-x-3 text-gray-300 hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-sm">{SITE_CONFIG.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300">Airport Taxi</span>
              </li>
              <li>
                <span className="text-gray-300">Local Taxi</span>
              </li>
              <li>
                <span className="text-gray-300">Outstation Taxi</span>
              </li>
              <li>
                <span className="text-gray-300">Corporate Taxi</span>
              </li>
              <li>
                <span className="text-gray-300">Wedding Taxi</span>
              </li>
              <li>
                <span className="text-gray-300">Tempo Traveller</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4 text-gold">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href={SITE_CONFIG.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={SITE_CONFIG.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={SITE_CONFIG.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={SITE_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">Book Your Ride</h4>
            <p className="text-gray-300 mb-6">
              Ready to experience premium taxi services? Contact us now for instant booking.
            </p>
            <div className="space-y-3">
              <a
                href={SITE_CONFIG.contactLinks.tel}
                className="inline-flex items-center justify-center w-full rounded-xl font-semibold transition-all duration-200 border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full rounded-xl font-semibold transition-all duration-200 bg-gold text-white hover:bg-gold-dark px-6 py-3"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-gold"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
