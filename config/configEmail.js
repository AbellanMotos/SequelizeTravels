const Nodemailer = require('nodemailer')
const datos = require('./configDataEmail')
let email = {}

let loginInfo = {
    service: 'Gmail',
    auth: {
        user: datos.mail,
        password: datos.password
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