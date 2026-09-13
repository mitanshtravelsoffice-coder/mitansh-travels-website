"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    review: "Excellent service! The driver was very professional and knowledgeable about all the temples. The car was clean and comfortable. Highly recommended for anyone visiting Mathura Vrindavan.",
    location: "Delhi",
  },
  {
    id: 2,
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    review: "We had an amazing experience with MITANSH TOUR & TRAVELS. The tour package was well-organized and covered all important places. The pricing was transparent with no hidden charges.",
    location: "Mumbai",
  },
  {
    id: 3,
    name: "Amit Patel",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 5,
    review: "Best taxi service in the Braj region! The drivers are punctual and courteous. We used their service for our family trip to Agra and it was a wonderful experience.",
    location: "Ahmedabad",
  },
  {
    id: 4,
    name: "Sunita Gupta",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    review: "The tempo traveller service was perfect for our group pilgrimage. The vehicle was spacious and well-maintained. The driver was very cooperative throughout the journey.",
    location: "Lucknow",
  },
  {
    id: 5,
    name: "Vikram Singh",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5,
    review: "Professional service at reasonable rates. The booking process was smooth and the driver arrived on time. Will definitely use their services again for future trips.",
    location: "Jaipur",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

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
            What Our Customers Say
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Real experiences from our valued customers
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative">
            <CardContent className="p-8 md:p-12">
              <div className="absolute top-6 left-8 text-gold/20">
                <Quote className="w-16 h-16" />
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-gold text-gold"
                      />
                    ))}
                  </div>

                  <p className="text-text text-lg md:text-xl text-center mb-8 leading-relaxed">
                    "{currentTestimonial.review}"
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-text">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-text-light text-sm">
                        {currentTestimonial.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors",
                        index === currentIndex
                          ? "bg-gold w-6"
                          : "bg-gray-300 hover:bg-gold"
                      )}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
