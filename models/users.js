module.exports = (sequelize, Datatypes) => {
    let user = sequelize.define('user',{
        username: Datatypes.STRING,
        password: Datatypes.STRING,
        email: Datatypes.STRING,
        admin: Datatypes.BOOLEAN,
        active: {type: Datatypes.BOOLEAN, defalutValue: false}
    })
    user.associate = function(models){
        models.user.hasMany(models.travel)
    }
    return user;
}