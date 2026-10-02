"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ramesh Kumar",
    avatar: "https://static.vecteezy.com/system/resources/thumbnails/049/174/246/small/a-smiling-young-indian-man-with-formal-shirts-outdoors-photo.jpg?w=100&h=100&fit=crop",
    rating: 5,
    review: "मितांश टूर एंड ट्रैवल्स की सेवा बहुत अच्छी है। दिल्ली से वृंदावन की यात्रा बहुत सुखद रही। ड्राइवर बहुत अनुभवी और सहयोगी थे। गाड़ी साफ-सुथरी थी। फिर से बुक करूंगा!",
    location: "Mathura",
  },
  {
    id: 2,
    name: "Sunita Devi",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFFjex52nKR_gx4GWeLDT431EeOVjhsrvQYc1-HtHcRYP4tjs_rKFOMc&s=10?w=100&h=100&fit=crop",
    rating: 5,
    review: "Used their service for complete Brij Darshan tour with my family. The guide was very knowledgeable about all temples. Driver waited patiently at each temple. Very satisfied with the service.",
    location: "Vrindavan",
  },
  {
    id: 3,
    name: "Mohd. Rafiq",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfpOjvWStxmECkyq0pQcpsQ31Pb9fckoJzwI80PynDqFkb9mR6Eu8xNu6W&s=10?w=100&h=100&fit=crop",
    rating: 5,
    review: "Booked Innova Crysta for Agra to Mathura trip with family. Car was brand new and AC was excellent. Driver bhaiya was very polite and knew all shortcuts. Rates were also reasonable.",
    location: "Agra",
  },
  {
    id: 4,
    name: "Anjali Singh",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop",
    rating: 5,
    review: "Delhi airport se Vrindavan ki raat mein pickup liya tha. Driver exact time par pahunch gaya tha. Raat mein bilkul safe journey rahi. Parents comfortable the. Thanks Mitansh Travels!",
    location: "Noida",
  },
  {
    id: 5,
    name: "Gaurav Sharma",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMDwiWkBQ-Fl-18-DAThMzpM00nlud4fqXDDd6qfoFg&s=10?w=100&h=100&fit=crop",
    rating: 5,
    review: "Weekend trip to Vrindavan with friends. Booked tempo traveller for 12 people. Journey was smooth and comfortable. Driver was experienced on highway routes. No hidden charges, very transparent pricing.",
    location: "Gurugram",
  },
  {
    id: 6,
    name: "Kavita Tripathi",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqRAlUri29_iDNq2bNMBE4v5I-ajLQcV3gcGExBvhCg&s=10?w=100&h=100&fit=crop",
    rating: 5,
    review: "Sasural walon ke liye VIP Darshan package book kiya tha. Banke Bihari aur Prem Mandir mein special entry se bahut time bacha. Guide ne sab kuch acche se explain kiya. Unhone bohot enjoy kiya!",
    location: "Lucknow",
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
