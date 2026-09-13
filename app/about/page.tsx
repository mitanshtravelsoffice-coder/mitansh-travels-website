import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo/metadata";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = getPageMetadata(
  "About Us - MITANSH TOUR & TRAVELS",
  "Learn about MITANSH TOUR & TRAVELS - Your trusted partner for premium taxi and tour services in Mathura, Vrindavan & Agra since 2009.",
  "/about"
);

export default function AboutPage() {
  return (
    <>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-dark/90" />
          <img
            src="/images/hoooo.png?w=1920"
            alt="Prem Mandir Vrindavan"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-gold text-white text-xs font-semibold mb-6">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Trusted Travel Partner in the Holy Land
            </h1>
            <p className="text-xl text-gray-200">
              Serving pilgrims and tourists with dedication and excellence for over 1 year
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Our Story
              </h2>
              <p className="text-text-light mb-4 leading-relaxed">
                Founded by Jitendra Kumar and Himanshu Kumar, MITANSH TOUR & TRAVELS
                has been serving the spiritual and travel needs of pilgrims and tourists
                in the Braj region. What started as a vision to provide premium taxi
                services has grown into a comprehensive travel solutions provider.
              </p>
              <p className="text-text-light mb-4 leading-relaxed">
                Our deep understanding of the region, combined with our commitment to
                quality service, has made us the preferred choice for over 1000+
                devotees visiting Mathura, Vrindavan, and surrounding areas.
              </p>
              <p className="text-text-light leading-relaxed">
                We take pride in our team of experienced drivers who are not just
                skilled professionals but also knowledgeable guides who can enhance
                your pilgrimage experience with insights about the sacred places.
                With a fleet of 10+ well-maintained vehicles, we ensure safe and
                comfortable journeys for all our customers.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/hoooo.png?w=800"
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">1+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Our Service?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Book your ride today and experience the difference with MITANSH TOUR & TRAVELS
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#booking-form"
                className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 bg-gradient-to-r from-gold to-gold-dark text-white hover:from-gold-light hover:to-gold shadow-lg shadow-gold/30 px-8 py-4 text-lg w-full sm:w-auto"
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg w-full sm:w-auto"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
