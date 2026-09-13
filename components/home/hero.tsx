"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-dark/90" />
        <img
          src="/images/hoooo.png?w=1920"
          alt="Prem Mandir Vrindavan"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gold/20 border border-gold/30 mb-6"
          >
            <span className="text-gold font-semibold text-sm">
              Premium Taxi & Tour Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Premium Taxi & Tour Services in{" "}
            <span className="text-gold">Mathura, Vrindavan & Agra</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            24×7 Taxi Booking • Airport Transfers • Temple Tours • Professional Drivers • Transparent Pricing
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="gold" size="lg" onClick={scrollToBooking} className="w-full sm:w-auto">
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <a
              href={SITE_CONFIG.contactLinks.tel}
              className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-white text-white hover:bg-white hover:text-primary focus-visible:ring-white w-full sm:w-auto px-8 py-4 text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
            <a
              href={SITE_CONFIG.contactLinks.whatsappWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white focus-visible:ring-green-500 w-full sm:w-auto px-8 py-4 text-lg"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">1000+</div>
              <div className="text-gray-300 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">1+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">10+</div>
              <div className="text-gray-300 text-sm">Vehicles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">98%</div>
              <div className="text-gray-300 text-sm">Satisfaction Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
