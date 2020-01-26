const nodemailer = require("nodemailer");
module.exports = async function(options) {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "simranaggarwal738@gmail.com",
      pass: "dchbvdqyjgierjvu"
    }
  });
  let mailDetails = {
    from: "simranaggarwal738@gmail.com",
    to: options.recieversEmailId,
    subject: options.subject,
    html: options.html
  };
  try {
    await mailTransporter.sendMail(mailDetails);
    console.log("Email was send")
  } catch (err) {
    console.log(err);
    console.log("Email could not be send");
  }
};
