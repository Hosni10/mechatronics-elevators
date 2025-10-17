import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically send an email using a service like:
    // - Resend
    // - SendGrid
    // - Nodemailer
    // For now, we'll just log the data and return success

    console.log("Contact form submission:", {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending
    // In production, replace this with actual email sending logic
    // Example with Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'Elite Elevators <onboarding@resend.dev>',
    //   to: ['info@eliteelevators.com'],
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
