export interface Fleet {
  id: string;
  name: string;
  category: string;
  image: string;
  seats: number;
  luggage: number;
  ac: boolean;
  fuel: string;
  pricePerKm: number;
  features: string[];
}

export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  highlights: string[];
  includes: string[];
}

export interface Route {
  id: string;
  from: string;
  to: string;
  distance: number;
  duration: string;
  price: number;
  description: string;
  popular: boolean;
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  image: string;
  review: string;
  date: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface Booking {
  id?: string;
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  vehicle: string;
  passengers: number;
  message?: string;
  status?: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt?: Date;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
