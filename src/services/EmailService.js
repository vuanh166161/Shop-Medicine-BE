const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config()


const sendEmailOrder = async (email, orderItems) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.MAIL_ACCOUNT,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  let listOrder = ''
  orderItems.forEach((order) => {
    listOrder += `<li><strong>Product Name:</strong> ${order.name}</li>`;
    listOrder += `<li><strong>Price:</strong> ${order.price} VND</li>`;
    listOrder += `<li><strong>Quanlity:</strong> ${order.amount}</li>`;
    listOrder += `<br>`;
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.MAIL_ACCOUNT, // sender address
    to: "anhnvgcc200163@fpt.edu.vn", // list of receivers
    subject: "Order Confirmation", // Subject line
    text: `Hello,\n\nThank you for ordering from our website. Your order has been confirmed and is being processed. Please check the details of your order below:\n\n${listOrder}\nWe will notify you once your order is shipped. If you have any questions, please feel free to contact us.\n\nBest regards,\nCustomer Support Team.`, // plain text body
    html: `<p>Hello,</p><p>Thank you for ordering from our website. Your order has been confirmed and is being processed.</p><p>Please check the details of your order below:</p><ul>${listOrder}</ul><p>We will notify you once your order is shipped. If you have any questions, please feel free to contact us.</p><p>Best regards,<br>Customer Support Team.</p>`, // html body
  });
}

module.exports = {
  sendEmailOrder
}