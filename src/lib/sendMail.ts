import { resend } from "./resend";
import EmailStruct from "@/components/emails/EmailStruct";
import { NextResponse } from "next/server";
export async function sendMail(
    email: string,
    subject: string,
    message: string
) {

    try {
        await resend.emails.send({
            from: 'Mriganka Sarma <mrigankasarma@resend.dev>',
            to: [email],
            subject: subject,
            react: EmailStruct({ subject, message }),
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
                message: "Failed to send Successfully"
            },
            {
                status: 500
            }
        )
    }
}