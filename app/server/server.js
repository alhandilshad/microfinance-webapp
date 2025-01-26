"use server"
import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend('re_KsX2tCeo_JPvARk43J6fU5bVh5BmNdyF1');

export const handleSendEmail = async (email,password) => {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [email],
            subject: 'Saylani Welfare Microfinance Webapp',
            html: `<p>Your password is ${password}</p>`,
        });
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};