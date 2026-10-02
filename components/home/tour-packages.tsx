"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";

const TOUR_PACKAGES = [
  {
    id: 1,
    title: "Mathura Vrindavan Darshan",
    image: "/images/premmandir.jpg",

    duration: "2 Days",
    description: "Complete pilgrimage tour covering all major temples in Mathura and Vrindavan.",
    highlights: ["Prem Mandir", "Banke Bihari Temple", "ISKCON Temple", "Govardhan Hill"],
    badge: "Popular",
  },
  {
    id: 2,
    title: "Agra Taj Mahal Tour",
    image: "/images/Tajmahal.webp?w=800",

    duration: "1 Day",
    description: "Witness the magnificent Taj Mahal and explore the historic city of Agra.",
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"],
    badge: "Bestseller",
  },
  {
    id: 3,
    title: "Braj Yatra Special",
    image: "/images/braj.png?w=800",

    duration: "3 Days",
    description: "Complete Braj region tour including Gokul, Govardhan, Barsana, and Nandgaon.",
    highlights: ["Gokul", "Govardhan Parikrama", "Barsana", "Nandgaon", "Radha Kund"],
    badge: "Premium",
  },
  {
    id: 4,
    title: "Ayodhya Varanasi Tour",
    image: "/images/Ayodhya.webp?w=800",

    duration: "4 Days",
    description: "Spiritual journey to the holy cities of Ayodhya and Varanasi.",
    highlights: ["Ram Janmabhoomi", "Kashi Vishwanath", "Sarnath", "Ganga Aarti"],
    badge: "Spiritual",
  },
  {
    id: 5,
    title: "Haridwar Rishikesh Tour",
    image: "/images/Rishikesh.webp?w=800",

    duration: "2 Days",
    description: "Visit the sacred cities on the banks of the holy Ganges river.",
    highlights: ["Har Ki Pauri", "Ganga Aarti", "Laxman Jhula", "Neelkanth Mahadev"],
    badge: "Adventure",
  },
  {
    id: 6,
    title: "Delhi Sightseeing Tour",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",

    duration: "1 Day",
    description: "Explore the capital city's rich history and modern attractions.",
    highlights: ["Red Fort", "India Gate", "Qutub Minar", "Lotus Temple"],
    badge: "City Tour",
  },
];

export default function TourPackages() {
  const scrollToBooking = () => {
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

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
            Tour Packages
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Discover our carefully curated tour packages for spiritual journeys and
            memorable experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <Badge
                    variant="gold"
                    className="absolute top-4 right-4"
                  >
                    {tour.badge}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-2xl font-bold text-primary">{tour.price}</span>
                    <span className="text-text-light text-sm">{tour.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-text-light mb-4">{tour.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tour.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-text-light"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={scrollToBooking}
                    className="inline-flex items-center justify-center w-full rounded-xl font-semibold transition-all duration-200 bg-gradient-to-r from-gold to-gold-dark text-white hover:from-gold-light hover:to-gold shadow-lg shadow-gold/30 px-6 py-3 text-base"
                  >
                    Book Now
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
