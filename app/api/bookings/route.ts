import { NextRequest, NextResponse } from "next/server";
import { bookingSchema } from "@/lib/utils/validation";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = bookingSchema.parse(body);

    // In production, save to database here
    // const booking = await db.booking.create({ data: validatedData });

    // Send email notification
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM || "jeetubaghel91@gmail.com",
      to: "jeetubaghel91@gmail.com",
      subject: `New Booking Inquiry - ${validatedData.name}`,
      html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Pickup:</strong> ${validatedData.pickup}</p>
        <p><strong>Destination:</strong> ${validatedData.destination}</p>
        <p><strong>Date:</strong> ${validatedData.date}</p>
        <p><strong>Time:</strong> ${validatedData.time}</p>
        <p><strong>Vehicle:</strong> ${validatedData.vehicle}</p>
        <p><strong>Passengers:</strong> ${validatedData.passengers}</p>
        ${validatedData.message ? `<p><strong>Message:</strong> ${validatedData.message}</p>` : ""}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Booking submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit booking" },
      { status: 500 }
    );
  }
}
