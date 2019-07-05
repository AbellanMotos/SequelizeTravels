const nodemailer = require('nodemailer')
const data = require('./configDataEmail')
const path = require('path')
const hbs = require('nodemailer-express-handlebars')

let email = {}

let loginInfo = {
    service: 'Gmail',
    auth: {
        user: data.mail,
        pass: data.password
    },
    tls: {
        rejectUnauthorized: false
    }
}


email.transporter = nodemailer.createTransport(loginInfo)
const optionsHBS = {
    viewEngine: {
        extname: '.hbs',
        partialsDir: 'views/partials',
        layoutsDir: 'views/layouts',
        defaultLayout: 'email.hbs'
    },
    extName: '.hbs',
    viewPath: path.join(__dirname, '/../views/layouts')
}

email.transporter.use('compile', hbs(optionsHBS))

console.log('EMAIL', email);
module.exports = email