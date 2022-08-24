const nodemailer = require("nodemailer");
const view = require("./view");
const config = require("./config");

const transporter = nodemailer.createTransport({ ...config.smtp });

const email = async (to, data) => {
  const message = {
    to,
    from: "candidate@storicard.com",
    subject: "Transactions Report",
    html: view(data),
  };

  console.log("Sending email...");
  transporter.sendMail(message, (err) => {
    if (!err) {
      console.log("Email sent.");
      return;
    } else {
      throw err;
    }
  });
};

module.exports = email;
