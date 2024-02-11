
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kadiatou.dialo@unchk.edu.sn',
    pass: '781118769'
  }
});

const mailOptions = {
  from: 'kadiatou.dialo@unchk.edu.sn',
  to: '',
  subject: 'Test Email',
  text: 'salut!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
