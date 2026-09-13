import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Invalid phone number"),
  pickup: z.string().min(3, "Pickup location is required"),
  destination: z.string().min(3, "Destination is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  vehicle: z.string().min(1, "Vehicle type is required"),
  passengers: z.number().min(1, "At least 1 passenger required").max(26, "Maximum 26 passengers"),
  message: z.string().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Invalid phone number"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
