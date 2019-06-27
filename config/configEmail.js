const Nodemailer = require('nodemailer')
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
    from: 'albaricoquetravels@info.com',
    headers: {

    }
}

email.transporter = Nodemailer.createTransport(loginInfo,emailInfo)

module.exports = email