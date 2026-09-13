export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{5})$/);
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]}`;
  }
  return phone;
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":");
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minutes} ${ampm}`;
}

export function calculateDistancePrice(
  distance: number,
  pricePerKm: number
): number {
  return Math.round(distance * pricePerKm);
}

export function generateWhatsAppMessage(booking: {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  vehicle: string;
  passengers: number;
}): string {
  const message = `
*New Booking Inquiry*

*Name:* ${booking.name}
*Phone:* ${booking.phone}
*Pickup:* ${booking.pickup}
*Destination:* ${booking.destination}
*Date:* ${booking.date}
*Time:* ${booking.time}
*Vehicle:* ${booking.vehicle}
*Passengers:* ${booking.passengers}

Please confirm the booking.
  `.trim();

  return encodeURIComponent(message);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}
