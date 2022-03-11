const express = require('express');
const path = require('path');
const router = express.Router();
const capybarasController = require('../controllers/capybaras_controller');

router.get('/nuevo', capybarasController.get_nuevo);
router.post('/nuevo',capybarasController.post_nuevo);
router.get('/borrar', capybarasController.get_borrar);
router.post('/borrar', capybarasController.post_borrar);
router.get('/person', capybarasController.get_person);
router.post('/person', capybarasController.post_person);
router.get('/original', capybarasController.get_original);
router.post('/original', capybarasController.post_original);
router.use('/', capybarasController.use_menu);
module.exports = router;