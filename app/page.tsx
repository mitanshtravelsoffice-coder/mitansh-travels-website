import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo/metadata";
import { LOCAL_BUSINESS_SCHEMA } from "@/lib/seo/schema";
import Hero from "@/components/home/hero";
import BookingForm from "@/components/home/booking-form";
import Statistics from "@/components/home/statistics";
import WhyChooseUs from "@/components/home/why-choose-us";
import Services from "@/components/home/services";
import TourPackages from "@/components/home/tour-packages";
import Gallery from "@/components/home/gallery";
import Testimonials from "@/components/home/testimonials";
import Contact from "@/components/home/contact";
import GoogleMap from "@/components/home/google-map";

export const metadata: Metadata = getPageMetadata(
  "MITANSH TOUR & TRAVELS - Premium Taxi & Tour Services in Mathura, Vrindavan & Agra",
  "Premium taxi and tour services in Mathura, Vrindavan & Agra. 24×7 airport transfers, temple tours, outstation taxi with professional drivers and transparent pricing.",
  "/"
);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
        }}
      />
      <Hero />
      <WhyChooseUs />
      <Services />
      <TourPackages />
      <Gallery />
      <Statistics />
      <Testimonials />
      <BookingForm />
      <Contact />
      <GoogleMap />
    </>
  );
}
