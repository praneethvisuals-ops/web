import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { fullName, phoneNumber, email, projectType, budgetRange, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${process.env.SMTP_USER}>`,
      to: 'praneethvisuals@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${projectType}`,
      text: `
        Name: ${fullName}
        Phone: ${phoneNumber}
        Email: ${email}
        Project Type: ${projectType}
        Budget Range: ${budgetRange}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; border: 1px solid #f0f0f0; border-radius: 12px; color: #333;">
          <h2 style="color: #320904; font-size: 24px; margin-bottom: 24px; border-bottom: 2px solid #320904; pb: 10px;">New Inquiry: ${projectType}</h2>
          
          <div style="margin-bottom: 15px;">
            <p style="margin: 0; color: #775751; font-size: 12px; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">From</p>
            <p style="margin: 5px 0 0 0; font-size: 16px; font-weight: 500;">${fullName}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <p style="margin: 0; color: #775751; font-size: 12px; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Email</p>
            <p style="margin: 5px 0 0 0; font-size: 16px;">${email}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <p style="margin: 0; color: #775751; font-size: 12px; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Phone</p>
            <p style="margin: 5px 0 0 0; font-size: 16px;">${phoneNumber}</p>
          </div>

          <div style="margin-bottom: 15px; display: flex; gap: 20px;">
            <div style="flex: 1;">
              <p style="margin: 0; color: #775751; font-size: 12px; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Project</p>
              <p style="margin: 5px 0 0 0; font-size: 16px;">${projectType}</p>
            </div>
            <div style="flex: 1;">
              <p style="margin: 0; color: #775751; font-size: 12px; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Budget</p>
              <p style="margin: 5px 0 0 0; font-size: 16px;">${budgetRange}</p>
            </div>
          </div>

          <div style="margin-top: 30px; padding: 25px; background-color: #fcfaf9; border-radius: 8px; border-left: 4px solid #320904;">
            <p style="margin: 0 0 10px 0; color: #775751; font-size: 12px; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">Message</p>
            <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #444;">${message.replace(/\n/g, '<br>')}</p>
          </div>

          <div style="margin-top: 40px; text-align: center; border-top: 1px solid #f0f0f0; padding-top: 20px;">
            <p style="font-size: 11px; color: #999;">This inquiry was sent from the Praneeth Visuals website.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}
