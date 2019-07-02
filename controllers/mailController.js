let models = require('../models')
const data = require('../config/configEmail')
const hbs = require('nodemailer-express-handlebars')
const path = require('path')
let userCont = require('../controllers/userController')

function emailConfirm(user){
    const optionsHBS = {
        viewEngine: {
            extname: '.hbs',
            partialsDir: 'views/partials',
            layoutsDir: 'views/layouts',
            defaultLayout: 'email.hbs'
        },
        extname: '.hbs',
        viewPath: path.join(__dirname, '/../views/layouts')
    }
    
    data.transporter.use('compile', hbs(optionsHBS))
    
    let message = {
        to: user.email,
        subject: 'Registro completado. Bienvenido/a ' + user.username + '!',
        template: 'sendEmail',
        context: {
            titulo: 'Bienvenido a Albaricoque Travels'
        }
    }
    data.transporter.sendMail(message)
} 



module.exports = {
    emailConfirm
}