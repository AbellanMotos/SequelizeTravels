userCont = require('../controllers/userController')

function isAdmin(req, res, next){
    if (req.session.admin = false){
    res.redirect('/')
} else{
    next()
    }
}

exports.module = isAdmin;