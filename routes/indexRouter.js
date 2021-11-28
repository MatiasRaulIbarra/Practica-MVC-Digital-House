const express= require('express');
const router = express.Router();
const controller = require('../controllers/indexControllers');

router.get('/', controller.index)
router.get('/contactos', controller.contacto)
router.get('/products', controller.products)

module.exports = router;
