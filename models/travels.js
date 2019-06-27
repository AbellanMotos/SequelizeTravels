module.exports = (sequelize, DataTypes) => {
    let travel = sequelize.define('travel', {
        city: DataTypes.STRING,
        price: DataTypes.FLOAT,
        discount: DataTypes.INTEGER,
        start: DataTypes.DATE,
        finish: DataTypes.DATE,
        image: DataTypes.STRING
    })
    travel.associate = function(models){
        models.travel.belongsTo(models.user)
    }
}