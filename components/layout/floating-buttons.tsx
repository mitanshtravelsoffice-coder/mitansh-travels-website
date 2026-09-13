"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

export function FloatingButtons() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={SITE_CONFIG.contactLinks.whatsappWithMessage}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={SITE_CONFIG.contactLinks.tel}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-light transition-colors"
        aria-label="Call"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-gold text-white shadow-lg shadow-gold/30 hover:bg-gold-light transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
