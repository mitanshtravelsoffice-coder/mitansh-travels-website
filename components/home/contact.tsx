"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: SITE_CONFIG.contact.phone,
      link: SITE_CONFIG.contactLinks.tel,
      description: "24×7 customer support",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: SITE_CONFIG.contact.email,
      link: SITE_CONFIG.contactLinks.mailto,
      description: "Quick response guaranteed",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Vrindavan, UP",
      link: "https://maps.google.com",
      description: SITE_CONFIG.contact.address,
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "24×7",
      link: "#",
      description: "Always available for you",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Get In Touch
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Have questions? We're here to help 24×7
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-text mb-2">
                      {item.title}
                    </h3>
                    <p className="text-primary font-semibold mb-1">
                      {item.value}
                    </p>
                    <p className="text-text-light text-sm mb-4">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center justify-center w-full rounded-xl font-semibold transition-all duration-200 border-2 border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 text-sm"
                    >
                      Contact
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 bg-gradient-to-r from-gold to-gold-dark text-white hover:from-gold-light hover:to-gold shadow-lg shadow-gold/30 px-8 py-4 text-lg"
          >
            Send Us a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
