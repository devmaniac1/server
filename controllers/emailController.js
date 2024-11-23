const Email = require("../models/emailModel");
const { sendEmail } = require("../helpers/emailHelper");

exports.sendEmailController = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required." });
    }
    const emailData = new Email({ name, email, phone, subject, message });

    const result = await sendEmail(emailData);
    res.status(200).json({ message: "Email sent successfully!", result });
  } catch (error) {
    console.error("Error in sendEmailController:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
};
