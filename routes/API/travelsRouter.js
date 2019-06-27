let models = require('../../models')
let express = require('express')
let router = express.Router()

router.get('/travels', async (req, res) => {
    let travels = await models.travel.findAll()
    res.send(travels)
})

router.post('/add', async (req, res, next) => {
    let travel = {
        city: req.body.city,
        price: req.body.price,
        discount: req.body.discount,
        start: req.body.start,
        finish: req.body.finish,
        image: req.body.image
    }
    let createTravel = await models.travel.create(travel)

    res.send(createTravel)
})

module.exports = router