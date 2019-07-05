module.exports = (sequelize, Datatypes) => {
    let user = sequelize.define('user',{
        username: Datatypes.STRING,
        password: Datatypes.STRING,
        email: {
            type: Datatypes.STRING,
            unique: true
        },
        admin: Datatypes.BOOLEAN,
        active: {
            type: Datatypes.BOOLEAN, 
            defaultValue: false
        }
    })
    user.associate = function(models){
        models.user.hasMany(models.travel)
    }
    return user;
}