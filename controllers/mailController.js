let models = require('../models')
const data = require('../config/configEmail')
const path = require('path')
let userCont = require('../controllers/userController')

function emailConfirm(user, code){

    
    let message = {
        to: user.email,
        subject: 'Registro completado. Bienvenido/a ' + user.username + '!',
        template: 'sendEmail',
        context: {
            titulo: 'Bienvenido a Albaricoque Travels',
            code
        }
    }
    data.transporter.sendMail(message).then((ok) => {
        console.log(ok);
    }).catch((error) => {
        console.log('ERROR', error);
        console.log(error);
    })
} 



module.exports = {
    emailConfirm
}