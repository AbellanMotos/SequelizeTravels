let models = require('../models')
let express = require('express')
let session = require('sessions')
let router = express.Router()
let travelCont = require('../controllers/travelController')
/* 
router.get('/', async (req, res) => {
    let showTravels = await models.travel.findAll({
        include: [{
            model: models.user
        }]
    })
    res.render('index', {showTravels, username: req.session.username})
})
 */
router.post('/add', async (req, res) => {
    let travel = {
        city: req.body.city,
        price: req.body.price,
        discount: req.body.discount,
        start: req.body.start,
        finish: req.body.finish,
        image: req.body.image
    }
    let addTravel = await models.travel.create(travel)

    res.send(addTravel)
    res.redirect('/')
    
    
})

router.get('/add', async (req, res) => {
    res.render('addTravel')
})

router.get('/:idtravel', async (req, res) => {
    let showTravelById = await models.travel.findByPk(req.params.idtravel)
    res.render('travelDetail', {showTravelById})
})

module.exports = router