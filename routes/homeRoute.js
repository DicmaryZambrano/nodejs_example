const router = require('express').Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.homeRoute);
router.get('/dicmary', homeController.dicmaryRoute)

module.exports = router;