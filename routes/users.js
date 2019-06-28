var express = require('express');
let session = require('express-session')
let models = require('../models')
let Hbs = require('nodemailer-express-handlebars')
let Path = require('path')
let data = require('../config/configEmail')
let userCont = require('../controllers/userController')
let mailCont = require('../controllers/mailController')
var router = express.Router();


router.get('/login', (req, res) => {
  let error = req.flash('error')
  
  if(req.session.username){
    res.redirect('/travels')
  }else {
    res.render('login', {
      error
    });
  }
});

router.post('/login', async (req, res) =>{
  let email = req.body. email
  let password = req.body. password

  if(!email || !password){
    req.flash('error', '¡Falta usuario o contraseña!')
    res.redirect('/users/login')
  }else{
    let user = await userCont.checkLogin(email, password)
    if(user){
      req.session.email = user.email
      req.session.username = user.username
      req.session.userId = user.id
      req.session.loginDate = new Date()
      res.redirect('/travels')
    }else{
      req.flash('error', '¡Usuario o contraseña invalida!')
      res.redirect('users/login')
    }
  }
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', async function (req, res){
let {username, email, password} = req.body
await userCont.addUser(username, email, password)

res.redirect('/')
})

module.exports = router;
