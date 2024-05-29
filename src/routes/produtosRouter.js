const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/shoppage', productController.getProducts);
router.get('/product/:id', productController.getProductById);

router.get('/form', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/form.html'));
});

module.exports = router;