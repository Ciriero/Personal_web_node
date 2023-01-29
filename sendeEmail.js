const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    service: "Outlook365",
    port: 587, //i use outlook
    auth: {
      user: process.env.USER, // email
      pass: process.env.PASSWORD, //password
    },

    tls: {
      ciphers: "SSLv3",
    },
  });
  transpoter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// send email
const EmailSender = ({ name, email, text }) => {
  const options = {
    from: `Personal web <${process.env.USER}>`,
    to: process.env.USER,
    subject: "Message to Personal Web",
    html: `
                <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
                  <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
                    Form Shoeshop Store
                  </p>
                  <div style="font-size: .8rem; margin: 0 30px">
                    <p>FullName: <b>${name}</b></p>
                    <p>Email: <b>${email}</b></p>
                    <p>Mensaje: <b>${text}</b></p>
                  </div>
                </div>
              </div>
            </div>
              `,
  };

  Email(options);
};

module.exports = EmailSender;
