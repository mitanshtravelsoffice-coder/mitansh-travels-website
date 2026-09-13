import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo/metadata";
import { BREADCRUMB_SCHEMA } from "@/lib/seo/schema";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactForm } from "@/components/contact/contact-form";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = getPageMetadata(
  "Contact Us - MITANSH TOUR & TRAVELS",
  "Get in touch with MITANSH TOUR & TRAVELS for taxi bookings, tour packages, and inquiries. Available 24×7 in Mathura, Vrindavan & Agra.",
  "/contact"
);

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: SITE_CONFIG.contact.phone,
    link: `tel:${SITE_CONFIG.contact.phone}`,
  },
  {
    icon: Phone,
    title: "Alternative Phone",
    value: SITE_CONFIG.contact.phoneAlt,
    link: `tel:${SITE_CONFIG.contact.phoneAlt}`,
  },
  {
    icon: Mail,
    title: "Email",
    value: SITE_CONFIG.contact.email,
    link: `mailto:${SITE_CONFIG.contact.email}`,
  },
  {
    icon: MapPin,
    title: "Address",
    value: SITE_CONFIG.contact.address,
    link: "#",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "24×7",
    link: "#",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            BREADCRUMB_SCHEMA([
              { name: "Home", url: "https://mitanshtourtravels.com" },
              { name: "Contact", url: "https://mitanshtourtravels.com/contact" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200">
              Have questions? We're here to help 24×7
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-text mb-8">Contact Information</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-text mb-1">{item.title}</h3>
                            <a
                              href={item.link}
                              className="text-text-light hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card className="bg-gradient-to-br from-gold to-gold-dark text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                  <div className="flex flex-col space-y-3">
                    <a
                      href={SITE_CONFIG.contactLinks.whatsappWithMessage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp Us</span>
                    </a>
                    <a
                      href={SITE_CONFIG.contactLinks.tel}
                      className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-gray-200">
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
      </section>
    </>
  );
}
