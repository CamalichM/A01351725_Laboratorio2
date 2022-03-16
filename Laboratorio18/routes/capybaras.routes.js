const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth.js');

const capybarasController = require('../controllers/capybaras_controller');

router.get('/cerveza', isAuth, capybarasController.cerveza);
router.get('/nuevo', isAuth, capybarasController.get_nuevo);
router.post('/nuevo', capybarasController.post_nuevo);
router.get('/:capybara_id', isAuth, capybarasController.filtrar);
router.get('/actualizar',  isAuth, capybarasController.get_cambio);
router.post('/actualizar',  isAuth, capybarasController.post_cambio);
router.get('/', isAuth, capybarasController.listar);

module.exports = router;