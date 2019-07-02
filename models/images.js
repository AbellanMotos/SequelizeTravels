module.exports = (sequelize, dataTypes) => {
    let images = sequelize.define('image', {
        images: dataTypes.STRING,
    })
    images.associate = function(models){
        models.image.belongsTo(models.travel),
        models.image.belongsTo(models.travel, {as: "main"})
    }
    return images
}