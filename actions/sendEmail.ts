"use server"
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString=(value: unknown,maxLength:number) =>
{
    if(!value || typeof value !== "string" || value.length > maxLength)
    {
        return false;
                
    }

    return true;


}

export const sendEmail = async (FormData: FormData) => {
    
    const message =FormData.get('message');
    const senderEmail =FormData.get('senderEmail');

   

    if(!validateString(senderEmail,500))
    {
        return{
            error: "invalid Sender Email"
        }
    }

    if(!validateString(message,5000))
    {
        return{
            error: "invalid Message"
        }
    }

    console.log("Running on server")
    console.log(FormData.get("senderEmail"));
    console.log(FormData.get("message"));

    resend.emails.send
        ({
        from: "Contact Form <onboarding@resend.dev>",
        to: 'ahmed69800869@gmail.com',
        subject:'Message from contact form',
        reply_to: senderEmail as string,
        text:message as string
        })

} 