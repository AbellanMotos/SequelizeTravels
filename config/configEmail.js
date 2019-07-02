const nodemailer = require('nodemailer')
const data = require('./configDataEmail')
let email = {}

let loginInfo = {
    service: 'Gmail',
    auth: {
        user: data.mail,
        password: data.password
    },
    tls: {
        rejectUnauthorized: false
    }
}

let emailInfo = {
    from: 'Owax90@gmail.com',
    headers: {

    }
}

email.transporter = nodemailer.createTransport(loginInfo,emailInfo)

console.log('EMAIL', email);
module.exports = email