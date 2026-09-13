"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/images/prem.jpeg?w=800",
    alt: "Prem Mandir Vrindavan",
    title: "Prem Mandir",
  },
  {
    id: 2,
    src: "/images/banke.jpg?w=800",
    alt: "Banke Bihari Temple",
    title: "Banke Bihari Temple",
  },
  {
    id: 3,
    src: "/images/iskon.jpg?w=800",
    alt: "ISKCON Temple",
    title: "ISKCON Temple",
  },
  {
    id: 4,
    src: "/images/Tajmahal.webp?w=800",
    alt: "Taj Mahal",
    title: "Taj Mahal",
  },
  {
    id: 5,
    src: "/images/ganga.jpeg?w=800",
    alt: "Ganga Aarti",
    title: "Ganga Aarti",
  },
  {
    id: 6,
    src: "/images/redfort.jpg?w=800",
    alt: "Red Fort",
    title: "Red Fort",
  },
  {
    id: 7,
    src: "/images/govardhan.webp?w=800",
    alt: "Govardhan Hill",
    title: "Govardhan Hill",
  },
  {
    id: 8,
    src: "/images/Radha Kund.jpeg?w=800",
    alt: "Radha Kund",
    title: "Radha Kund",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = React.useState<typeof GALLERY_IMAGES[0] | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Our Gallery
          </h2>
          <p className="text-text-light text-lg max-w-2xl mx-auto">
            Explore our journey through beautiful destinations and memorable experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-semibold">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
