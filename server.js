const nodemailer = require('nodemailer');
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'simranaggarwal738@gmail.com',
        pass: 'dchbvdqyjgierjvu'
    }
});

let mailDetails = {
    from: 'simranaggarwal738@gmail.com',
    to: 'simranaggarwal738@gmail.com',
    subject: 'Patient Prescription',
    text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
}); 