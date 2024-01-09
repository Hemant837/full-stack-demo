const nodemailer = require("nodemailer");

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "walker.gusikowski93@ethereal.email",
    pass: "NaY4TYbkNxXyMqw5Nm",
  },
});

// contact us

exports.contactUs = (req, res) => {
  const { userName, email, message } = req.body;

  const mailOptions = {
    from: `<${userName}>`,
    to: "vermahemant837@gmail.com",
    subject: message,
    text: `Name: ${userName}\n Email: ${email}\n Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error." });
    } else {
      console.log("Email sent:" + info.response);
      res.status(200).json({ message: "Email sent successfully." });
    }
  });
};
