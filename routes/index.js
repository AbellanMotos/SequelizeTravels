var express = require('express');
var router = express.Router();
let models = require('../models')
let session = require('sessions')
let travelCont = require('../controllers/travelController')

/* GET home page. */
router.get('/', async function(req, res, next) {
  let showTravels = await models.travel.findAll({
      include: [{
          model: models.user
      }]
  })
  res.render('index', { title: 'Albaricoque Travels 1.1', showTravels, username: req.session.username });
});


module.exports = router;
