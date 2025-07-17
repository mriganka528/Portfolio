
const nodemailer = require("nodemailer");
import { NextResponse } from "next/server";
export async function sendMail(
    email: string,
    subject: string,
    message: string
) {

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.email",
            port: 465,
            secure: true,
            auth: {
                user: process.env.APP_USER,
                pass: process.env.APP_PASSWORD,
            },
        });
        const info = await transporter.sendMail({
            from: {
                name: "Mriganka Sarma",
                address: "mrj21012003@gmail.com"
            },
            to: email,
            subject: subject,
            html: `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 20px; background-color: #f9f9f9;">
    <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 10px; padding: 30px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <h2 style="color: #6b46c1; text-align: center; margin-bottom: 20px;">Hello from Mriganka Sarma 👋</h2>
      <p style="font-size: 1rem; line-height: 1.6;">
        We wanted to let you know that your message was sent <strong>successfully</strong>.
      </p>
      <p style="font-size: 1rem; margin-top: 20px;"><strong>Your Message:</strong></p>
      <div style="background: #f1f1f1; padding: 15px; border-left: 4px solid #6b46c1; margin: 10px 0; border-radius: 5px;">
        <p style="font-size: 0.95rem; margin: 0;">${message}</p>
      </div>
      <p style="font-size: 1rem; margin-top: 20px;">
        Thank you for connecting with us. We'll get back to you as soon as possible.
      </p>
      <p style="font-size: 0.9rem; color: #777; margin-top: 40px; text-align: center;">
        Regards, <br>
        <strong>Mriganka Sarma</strong><br>
        <a href="mailto:mrj21012003@gmail.com" style="color: #6b46c1; text-decoration: none;">mrigankasarma222@gmail.com</a>
      </p>
    </div>
  </div>
`
            ,
        });
        return NextResponse.json(
            {
                success: true,
                message: "Message sent Successfully"
            },
            {
                status: 250
            }
        )

    }
    catch (emailError) {
        console.log("Error sending email", emailError)

        return NextResponse.json(
            {
                success: false,
                message: "Failed to send message"
            },
            {
                status: 500
            }
        )
    }
}