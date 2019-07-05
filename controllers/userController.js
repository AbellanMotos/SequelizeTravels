let models = require("../models")
const bcrypt = require("bcrypt")
const SALT_ROUNDS = 10;
let mailCont = require('../controllers/mailController')



async function addUser(username, email, password){
    let hash = await bcrypt.hash(password, SALT_ROUNDS)

    let insert = {
        email,
        username,
        password: hash,
        active: false
    }
    let user;
    try{
       user = await models.user.create(insert)
    }catch(err){
        return null
    }
    let code =  Date.now()
    models.hash.create({
        userId: user.id,
        code: code
    }) 
    await mailCont.emailConfirm(user, code)

    return user
}

async function checkLogin(email, password){
    let result = await models.user.findOne({
        where: {
            email
        }
    })
    if (!result){
        return null
    } else {
        let match = await bcrypt.compare(password, result.password)
        return match ? result: null
    }
}

async function getAdmin(admin, userId){
    if(admin){
        return await models.user.update({admin: true},
            {where:{
                id: userId
            }})
    } else {
        return await models.user.update({admin: false}),
        {where:{
            id: userId
        }}
    }
}

async function activateUser(code){
   let activation = await models.hash.findOne({
        where: {
            code
        }
    })
    let user = await models.user.findByPk(activation.userId)
    user.active = true;
    return await user.save()

}
let printUsers = models.user.findAll()

module.exports = {
    addUser,
    checkLogin,
    getAdmin,
    printUsers,
    activateUser
}