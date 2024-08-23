
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
               <h1>Hi there!</h1>
               <br>
               <p style="font-size: 1rem;">Your message is sent successfully </p> 
               <br>
               <p style="font-size: 1rem; font-weight:bold;">Message: ${message}</p>
               <br>
               <p style="font-size: 1rem;">Thanks for connecting with us. We will try to catch you as soon as possible.😊😊</p>
            ` ,
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