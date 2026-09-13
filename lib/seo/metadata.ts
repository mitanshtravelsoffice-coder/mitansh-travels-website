import { Metadata } from "next";

export const DEFAULT_METADATA: Metadata = {
  title: {
    default: "MITANSH TOUR & TRAVELS - Premium Taxi & Tour Services in Mathura, Vrindavan & Agra",
    template: "%s | MITANSH TOUR & TRAVELS",
  },
  description:
    "Premium taxi and tour services in Mathura, Vrindavan & Agra. 24×7 airport transfers, temple tours, outstation taxi with professional drivers and transparent pricing.",
  keywords: [
    "taxi service Mathura",
    "taxi service Vrindavan",
    "taxi service Agra",
    "airport transfer Mathura",
    "outstation taxi",
    "tempo traveller",
    "tour packages Mathura",
    "Brij Darshan",
    "Delhi to Vrindavan taxi",
    "car rental Mathura",
    "pilgrimage tour",
  ],
  authors: [{ name: "MITANSH TOUR & TRAVELS" }],
  creator: "MITANSH TOUR & TRAVELS",
  publisher: "MITANSH TOUR & TRAVELS",
  metadataBase: new URL("https://mitanshtourtravels.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mitanshtourtravels.com",
    siteName: "MITANSH TOUR & TRAVELS",
    title: "MITANSH TOUR & TRAVELS - Premium Taxi & Tour Services",
    description:
      "Premium taxi and tour services in Mathura, Vrindavan & Agra. 24×7 airport transfers, temple tours, outstation taxi with professional drivers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MITANSH TOUR & TRAVELS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MITANSH TOUR & TRAVELS - Premium Taxi & Tour Services",
    description:
      "Premium taxi and tour services in Mathura, Vrindavan & Agra. 24×7 airport transfers, temple tours, outstation taxi with professional drivers.",
    images: ["/og-image.jpg"],
    creator: "@mitanshtours",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export function getPageMetadata(
  title: string,
  description: string,
  path: string,
  image?: string
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `https://mitanshtourtravels.com${path}`,
    },
    openGraph: {
      title,
      description,
      url: `https://mitanshtourtravels.com${path}`,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: {
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
