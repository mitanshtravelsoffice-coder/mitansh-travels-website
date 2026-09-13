"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactSchema, type ContactFormData } from "@/lib/utils/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { sendEmail } from "@/lib/emailjs/config";
import toast from "react-hot-toast";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const emailData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      };

      const result = await sendEmail(emailData);

      if (result.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        reset();
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="shadow-xl">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold text-text mb-8">Send Us a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label required>Full Name</Label>
              <Input
                placeholder="Enter your name"
                {...register("name")}
                error={errors.name?.message}
              />
            </div>

            <div>
              <Label required>Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                error={errors.email?.message}
              />
            </div>

            <div>
              <Label required>Phone Number</Label>
              <Input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                {...register("phone")}
                error={errors.phone?.message}
              />
            </div>

            <div>
              <Label required>Subject</Label>
              <Input
                placeholder="Enter subject"
                {...register("subject")}
                error={errors.subject?.message}
              />
            </div>

            <div>
              <Label required>Message</Label>
              <Textarea
                placeholder="Enter your message"
                {...register("message")}
                error={errors.message?.message}
              />
            </div>

            <Button
              type="submit"
              variant="gold"
              size="lg"
              loading={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
