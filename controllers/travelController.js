let models = require('../models')

function addTravel(travel){
    return models.travel.create(travel);
}

let printTravels = models.travel.findAll({
      include: [{
        model: models.user
    }]  
})

module.exports = {
    addTravel,
    printTravels
}