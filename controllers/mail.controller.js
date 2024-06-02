import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.GOOGLE_GMAIL_ACCOUNT,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export const mailOptions = {
    from: {
        name: "Fiverr Clone Fullstack",
        address: process.env.GOOGLE_GMAIL_ACCOUNT
    }, // sender address
    // to: [mail], // list of receivers
    subject: "Account Regustered", // Subject line
    text: "Welcome to Fiverr Clone Fullstack", // plain text body
    html: "<b>Welcome to Fiverr Clone Fullstack</b>", // html body
}

// async..await is not allowed in global scope, must use a wrapper
export const sendMailNewAcc = async (transporter, mailOptions, toMail) => {
    try {
        const info = await transporter.sendMail({ ...mailOptions, to: toMail });
        console.log("mail sent :", info);
    } catch(err) {
        console.log("error while sending mail :", err);
    }
   

  
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}


