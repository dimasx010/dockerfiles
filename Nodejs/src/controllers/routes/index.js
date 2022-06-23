const express = require('express')

const { getPhrase } = require('../controllers/phrasesController')


const router = express.Router()

router.get('/phrases', getPhrase)
/*
    Routers
*/

module.exports = router