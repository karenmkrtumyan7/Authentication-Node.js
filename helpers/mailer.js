const nodemailer = require("nodemailer");
const domain = process.env.DOMAIN;

async function mailer(email, firstName, userId) {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "sash1999yy@gmail.com",
      pass: "35darikk"
    }
  });

  let info = await transporter.sendMail({
    from: '"Project 👻" <sash1999yy@gmail.com>',
    to: email, 
    subject: "Activation Link", 
    text: `Hello ${firstName}.Thank you for registering at ${domain}. Please click on the link below to complete your
           activstion: ${domain}/verify/${userId}`,
    html: `Hello <strong>${firstName}</strong>.<br>Thank you for registering at ${domain}. Please click on the link below to complete your
           activstion: <br><a href=${domain}/verify/${userId}">${domain}/verify/${userId}</a> ` // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = mailer;