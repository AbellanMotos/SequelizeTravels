userCont = require('../controllers/userController')

function isAdmin(req, res, next){
    if (req.session.admin){
        next()
    } else{
        res.redirect('/')
    }
}

module.exports = isAdmin;