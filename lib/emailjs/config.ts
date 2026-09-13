import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

let isInitialized = false;

if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
  isInitialized = true;
} else if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.warn(
    '\n⚠️  EmailJS configuration is missing. Email functionality will not work.\n' +
    'Please add the following environment variables to your .env.local file:\n' +
    '  NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id\n' +
    '  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id\n' +
    '  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key\n' +
    'See EMAILJS_SETUP.md for detailed instructions.\n'
  );
}

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  pickup?: string;
  drop?: string;
  date?: string;
  time?: string;
  vehicle?: string;
  passengers?: string;
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    return { success: false, error: "EmailJS configuration is missing" };
  }

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      data as unknown as Record<string, unknown>
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to send email" };
    }
  } catch (error) {
    console.error("EmailJS error:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
