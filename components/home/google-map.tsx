"use client";

import * as React from "react";
import { motion } from "framer-motion";

export default function GoogleMap() {
  return (
    <section className="h-96 bg-gray-200">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full h-full"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.123456789!2d77.7000!3d27.5650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDMzJzU0LjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MITANSH TOUR & TRAVELS Location"
        />
      </motion.div>
    </section>
  );
}
