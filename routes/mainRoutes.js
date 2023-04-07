const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');

router.get('/', mainController.index);

router.get('/registro',mainController.register);

router.get('/login',mainController.login);

router.get('/list', mainController.list);

router.get('/search',mainController.search);

module.exports = router;