import { NextResponse } from "next/server";
import { sendMail } from "@/lib/sendMail";
export async function POST(request: Request, response: Response) {
    const { email, subject, message } = await request.json()
    console.log(email, subject, message);
    try {
        const EmailResponse = await sendMail(email, subject, message);
        console.log(response);
        if (EmailResponse.status == 250) {
            return NextResponse.json(
                {
                    success: true,
                    message: "Message sent successfully"
                },
                {
                    status: 200
                }
            )
        }
        return NextResponse.json(
            {
                success: false,
                message: "Failed to send message because of routing error",
            },
            {
                status: 260
            }

        )

    } catch (error) {
        console.log("Error Sending message")
        return NextResponse.json(
            {
                success: false,
                message: error,

            },
            {
                status: 500
            }
        )
    }
}