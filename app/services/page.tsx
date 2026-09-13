import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SERVICES = [
  {
    id: "airport-taxi",
    name: "Airport Taxi",
    description: "24×7 airport transfer service to and from Delhi, Agra, and Jaipur airports. Meet and greet service included.",
    features: ["Meet & Greet", "Flight Tracking", "Luggage Assistance", "Waiting Time Included"],
  },
  {
    id: "local-taxi",
    name: "Local Taxi",
    description: "Local sightseeing taxi service in Mathura, Vrindavan, and Agra. Hourly and daily packages available.",
    features: ["Hourly Packages", "Local Knowledge", "Flexible Timing", "Multiple Stops"],
  },
  {
    id: "outstation-taxi",
    name: "Outstation Taxi",
    description: "One-way and round-trip taxi service to all major cities in UP, Rajasthan, and Delhi NCR.",
    features: ["One-way Trips", "Round-trip Packages", "Inter-city Travel", "Transparent Pricing"],
  },
  {
    id: "corporate-taxi",
    name: "Corporate Taxi",
    description: "Premium corporate travel solutions for businesses. Monthly contracts and employee transportation services.",
    features: ["Monthly Contracts", "Billing Solutions", "Professional Drivers", "Luxury Fleet"],
  },
  {
    id: "wedding-taxi",
    name: "Wedding Taxi",
    description: "Special wedding transportation for bride, groom, and guests. Decorated vehicles and special packages.",
    features: ["Decorated Vehicles", "Guest Transportation", "Baraat Service", "Special Packages"],
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    description: "Group travel solution with tempo traveller. Perfect for family tours, pilgrimages, and corporate outings.",
    features: ["9-26 Seater", "Pushback Seats", "AC/Non-AC Options", "Group Discounts"],
  },
];

export const metadata: Metadata = getPageMetadata(
  "Our Services - MITANSH TOUR & TRAVELS",
  "Explore our comprehensive taxi and tour services including airport transfers, local taxi, outstation taxi, corporate travel, wedding transportation, and tempo traveller.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-gold text-white text-xs font-semibold mb-6">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive Travel Solutions
            </h1>
            <p className="text-xl text-gray-200">
              From airport transfers to pilgrimage tours, we have every travel need covered
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mb-4">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-light mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-text-light">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/#booking-form"
                    className="inline-flex items-center justify-center w-full rounded-xl font-semibold transition-all duration-200 bg-gradient-to-r from-gold to-gold-dark text-white hover:from-gold-light hover:to-gold shadow-lg shadow-gold/30 px-6 py-3 text-base"
                  >
                    Book Now
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
              Need a Custom Service?
            </h2>
            <p className="text-xl text-text-light mb-8">
              Contact us for personalized travel solutions tailored to your specific needs
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 bg-gradient-to-r from-gold to-gold-dark text-white hover:from-gold-light hover:to-gold shadow-lg shadow-gold/30 px-8 py-4 text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
