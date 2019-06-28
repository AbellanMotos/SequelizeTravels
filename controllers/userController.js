let models = require("../models")
const bcrypt = require("bcrypt")
const SALT_ROUNDS = 10;

async function checkMail(email){
    return result = await models.user.findAll({
        where: {
            email
        }
    })
}

async function addUser(username, email, password){
    let hash = await bcrypt.hash(password, SALT_ROUNDS)
    let checkM = await checkMail(email)
    if (checkM === email){
        return null
    }
    else {
        let insert = {
            email,
            username,
            password: hash
        }
        let user = await models.user.create(insert)
        return user
    }
}

async function checkLogin(email, password){
    let result = await models.user.findOne({
        where: {
            email
        }
    })
    if (result === 0){
        return null
    } else {
        let match = await bcrypt.compare(password, result.password)
        return match ? result: null
    }
}

module.exports = {
    addUser,
    checkLogin,
    checkMail
}