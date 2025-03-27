import EmailTemplate from "../../../components/email-template";
import { Resend } from "resend";
import * as React from "react";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { senderEmail, message, send, } = await request.json();

  try {
    const { data } = await resend.emails.send({
      from: "Contact Form <azdhapk2@gmail.com>",
      to: "onedriveworld@icloud.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: EmailTemplate({
        message: message,
        senderEmail: senderEmail,
      }) as React.ReactElement,
    });

    if (send) {
      return NextResponse.json({ send });
    }

    return NextResponse.json({ data });
  } catch (send) {
    return NextResponse.json({ send });
  }
}
