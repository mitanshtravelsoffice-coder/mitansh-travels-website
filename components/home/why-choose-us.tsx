"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  HeadphonesIcon,
  Wallet,
  Car as CarIcon,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "All vehicles are regularly serviced and drivers are background-verified for your safety.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Round-the-clock service available for airport transfers, outstation trips, and local travel.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description:
      "Dedicated customer support team available 24×7 to assist with bookings and queries.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description:
      "No hidden charges. Clear pricing with detailed breakdown before you book.",
  },
  {
    icon: CarIcon,
    title: "Premium Fleet",
    description:
      "Well-maintained fleet of sedans, SUVs, and tempo travellers for every travel need.",
  },
  {
    icon: Star,
    title: "Experienced Drivers",
    description:
      "Professional drivers with years of experience and excellent knowledge of local routes.",
  },
];

export default function WhyChooseUs() {
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
            Why Choose Us
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            We are committed to providing the best travel experience with our
            premium services and customer-first approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-light">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
