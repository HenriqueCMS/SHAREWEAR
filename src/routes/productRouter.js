const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/shoppage', productController.getProducts);
router.get('/:id', productController.getProductById);

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../index.html'));
});



router.get('/produtos', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/produtos.html'));
});

router.get('/form', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/form.html'));
});

module.exports = router;
