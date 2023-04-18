//routes
const express = require('express');
const router = express.Router();

const { getCoisas,
        addCoisa,
        updateCoisa,
        getcoisaById,
        deletecoisa,
        getCidades
} = require('../controllers/coisas.controller')

router.get('/',getCoisas);
router.post('/',addCoisa);
router.put('/:id',updateCoisa);
router.get('/:id',getcoisaById);
router.delete('/',deletecoisa);
router.get('/cidades/list', getCidades);

module.exports = router;

