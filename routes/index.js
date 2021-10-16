const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');

router.get('/fetch', homeController.fetch);             //routes to get data from database

router.get('/', homeController.home);                   // routes to redirect to html page


module.exports = router;