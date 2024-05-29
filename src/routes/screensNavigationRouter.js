const express = require('express');
const router = express.Router();
const path = require('path');
const productController = require('../controllers/productController');


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../index.html'));
});



router.get('/produtos', productController.getProducts);

router.get('/form', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/form.html'));
});

module.exports = router;