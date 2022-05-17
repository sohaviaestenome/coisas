const express = require('express');
const router = express.Router();

const { getCoisas } = require('../controllers/coisas.controller')

router.get('/',getCoisas);


module.exports = router;

