export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MITANSH TOUR & TRAVELS",
  description:
    "Premium taxi and tour services in Mathura, Vrindavan & Agra. 24×7 airport transfers, temple tours, outstation taxi with professional drivers and transparent pricing.",
  url: "https://mitanshtourtravels.com",
  telephone: "+91 9027264612",
  email: "jeetubaghel91@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nikunj Vatika, Gauduli Puram",
    addressLocality: "Vrindavan",
    addressRegion: "Uttar Pradesh",
    postalCode: "281121",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "27.5650",
    longitude: "77.7000",
  },
  areaServed: [
    "Mathura",
    "Vrindavan",
    "Agra",
    "Delhi",
    "Noida",
    "Greater Noida",
    "Gurugram",
    "Jaipur",
    "Lucknow",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "5000",
    bestRating: "5",
  },
};

export const FAQ_SCHEMA = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const BREADCRUMB_SCHEMA = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const PRODUCT_SCHEMA = (product: {
  name: string;
  description: string;
  image: string;
  price: number;
  currency: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  offers: {
    "@type": "Offer",
    price: product.price,
    priceCurrency: product.currency,
    availability: "https://schema.org/InStock",
  },
});
