const express = require('express');
const router = express.Router();
const path = require('path');
const product = require('../controllers/productController');

router.post('/save', product.insertProduct);

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../index.html'));
});

router.get('/produtos', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/produtos.html'));
});

module.exports = router;