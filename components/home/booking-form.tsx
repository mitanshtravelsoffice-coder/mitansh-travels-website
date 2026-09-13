"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { bookingSchema, type BookingFormData } from "@/lib/utils/validation";
import { FLEET, SITE_CONFIG } from "@/lib/constants";
import { sendEmail } from "@/lib/emailjs/config";
import toast from "react-hot-toast";

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    try {
      const emailData = {
        name: data.name,
        email: data.email || "Not provided",
        phone: data.phone,
        subject: "New Booking Request",
        message: data.message || "No additional message",
        pickup: data.pickup,
        drop: data.destination,
        date: data.date,
        time: data.time,
        vehicle: data.vehicle,
        passengers: data.passengers?.toString(),
      };

      const result = await sendEmail(emailData);

      if (result.success) {
        toast.success("Booking submitted successfully! We'll contact you soon.");
        reset();

        // Open WhatsApp with pre-filled message
        const whatsappMessage = `*राधे राधे | Radhe Radhe*

MITANSH TOURS & TRAVELS
Vrindavan | Mathura | Agra | Outstation Taxi

==================================

नई यात्रा पूछताछ | NEW TRAVEL ENQUIRY

----------------------------------

नाम | Name
${data.name}

मोबाइल | Phone
${data.phone}

ईमेल | Email
${data.email || "Not Provided"}

----------------------------------

पिकअप स्थान | Pickup Location
${data.pickup}

गंतव्य | Destination
${data.destination}

यात्रा की तारीख | Travel Date
${data.date}

पिकअप समय | Pickup Time
${data.time}

यात्रियों की संख्या | Number of Passengers
${data.passengers}

वाहन | Vehicle Required
${data.vehicle}

विशेष आवश्यकता | Special Requirement
${data.message || "कोई विशेष आवश्यकता नहीं | No Special Requirement"}

==================================

कृपया इस यात्रा के लिए अपना सर्वोत्तम किराया (Quotation) भेजें।

Please share your best quotation for this trip.

धन्यवाद!

Mitansh Tours & Travels

Mobile:
+91 9027264612
+91 8534829750

Email:
mitanshtravels.office@gmail.com

Address:
Nikunj Vatika,
Gauduli Puram,
Vrindavan,
Uttar Pradesh`;

        const encodedMessage = encodeURIComponent(whatsappMessage);

// Get the phone number from your constants
const phoneNumber = SITE_CONFIG.contactLinks.whatsapp
  .replace("https://wa.me/", "")
  .replace("+", "")
  .replace(/\s/g, "");

// Build proper WhatsApp URL
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

// Open WhatsApp
window.location.href = whatsappUrl;
      } else {
        toast.error(result.error || "Failed to submit booking. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to submit booking. Please try again.");
    }
  };

  const vehicleOptions = FLEET.map((vehicle) => ({
    value: vehicle.id,
    label: `${vehicle.name} (${vehicle.category})`,
  }));

  return (
    <section id="booking-form" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Book Your Ride
            </h2>
            <p className="text-text-light text-lg">
              Fill in the details below and we'll get back to you instantly
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card rounded-2xl shadow-xl shadow-gray-200/50 p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <Label required>Full Name</Label>
                <Input
                  placeholder="Enter your name"
                  {...register("name")}
                  error={errors.name?.message}
                />
              </div>

              {/* Email */}
              <div>
                <Label>Email (Optional)</Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  error={errors.email?.message}
                />
              </div>

              {/* Phone */}
              <div>
                <Label required>Phone Number</Label>
                <Input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  {...register("phone")}
                  error={errors.phone?.message}
                />
              </div>

              {/* Pickup */}
              <div>
                <Label required>Pickup Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    className="pl-10"
                    placeholder="Enter pickup location"
                    {...register("pickup")}
                    error={errors.pickup?.message}
                  />
                </div>
              </div>

              {/* Destination */}
              <div>
                <Label required>Destination</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    className="pl-10"
                    placeholder="Enter destination"
                    {...register("destination")}
                    error={errors.destination?.message}
                  />
                </div>
              </div>

              {/* Date */}
              <div>
                <Label required>Travel Date</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="date"
                    className="pl-10"
                    {...register("date")}
                    error={errors.date?.message}
                  />
                </div>
              </div>

              {/* Time */}
              <div>
                <Label required>Pickup Time</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="time"
                    className="pl-10"
                    {...register("time")}
                    error={errors.time?.message}
                  />
                </div>
              </div>

              {/* Vehicle */}
              <div>
                <Label required>Vehicle Type</Label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                  <Select
                    className="pl-10 appearance-none"
                    options={[{ value: "", label: "Select vehicle" }, ...vehicleOptions]}
                    {...register("vehicle")}
                    error={errors.vehicle?.message}
                  />
                </div>
              </div>

              {/* Passengers */}
              <div>
                <Label required>Number of Passengers</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="number"
                    className="pl-10"
                    placeholder="Enter number of passengers"
                    {...register("passengers", { valueAsNumber: true })}
                    error={errors.passengers?.message}
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <Label>Additional Message (Optional)</Label>
              <Textarea
                placeholder="Any special requirements or instructions..."
                {...register("message")}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="gold"
              size="lg"
              loading={isSubmitting}
              className="w-full mt-8"
            >
              {isSubmitting ? "Submitting..." : "Book Now"}
            </Button>

            <p className="text-center text-sm text-text-light mt-4">
              By submitting this form, you agree to our terms and privacy policy.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
