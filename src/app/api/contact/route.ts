import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const resend = new Resend(process.env.RESEND_API_KEY);
  let body: Partial<ContactPayload>;

  try {
    body = (await req.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required: name, email, subject, message" },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "daxrajani@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
