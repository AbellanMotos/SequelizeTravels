module.exports = (sequelize, dataTypes) => {
    let hash = (sequelize.define('hash', {
        code: dataTypes.STRING
    }))
    hash.associate = function(models){
        models.hash.belongsTo(models.user)
    }
    return hash
}