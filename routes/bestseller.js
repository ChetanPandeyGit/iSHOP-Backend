const express = require('express')
const bestsellerApi = require('../controllers/bestseller')

const bestseller = express.Router()
bestseller.route('/bestseller').get(bestsellerApi.apiController)

module.exports = bestseller

