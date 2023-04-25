const express = require('express')
const iPadApi = require('../controllers/ipad')

const iPad = express.Router()
iPad.route('/ipad').get(iPadApi.apiController)

module.exports = iPad

