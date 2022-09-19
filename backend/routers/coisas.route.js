const express = require('express');
const router = express.Router();

const { getCoisas,
        addCoisa,
        updateCoisa,
        getcoisaById,
        deletecoisa
} = require('../controllers/coisas.controller')

router.get('/',getCoisas);
router.post('/',addCoisa);
router.put('/:id',updateCoisa);
router.get('/:id',getcoisaById);
router.delete('/',deletecoisa);


module.exports = router;

