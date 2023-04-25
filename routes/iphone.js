const express = require('express')
const iPhoneApi = require('../controllers/iphone')

const iPhone = express.Router()
iPhone.route('/iphone').get(iPhoneApi.apiController)

module.exports = iPhone

