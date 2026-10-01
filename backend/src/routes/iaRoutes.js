const express = require('express');

const {gerarDescricao} = require('../controllers/iaController');

const router = express.Router();

router.post('/descricao', gerarDescricao);

module.exports = router;

