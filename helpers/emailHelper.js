const nodemailer = require("nodemailer");

exports.sendEmail = async (emailData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.EMAIL}`,
      pass: `${process.env.APP_PASSWORD}`,
    },
  });

  const mailOptions = {
    from: emailData.email,
    to: `${process.env.EMAIL}`,
    subject: emailData.subject || `Message from ${emailData.name}`,
    text: `
      Name: ${emailData.name}
      Email: ${emailData.email}
      Phone: ${emailData.phone}

      Message:
      ${emailData.message}
    `,
  };

  const result = await transporter.sendMail(mailOptions);
  return result;
};
