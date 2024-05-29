const Product = require('../models/ProductModel');
const path = require('path');

exports.insertProduct = async (req, res) => {
    console.log('Request body:', req.body);
    const { name,url,valor,descricao,tamanho,categoria,colecao } = req.body;
    try {
        await Product.createProduct({ 
            name,
            url,
            valor,
            descricao,
            tamanho,
            categoria,
            colecao 
        });
        res.redirect('/form');
        console.log(req.body)
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).send("Erro interno do servidor ao cadastrar produto");
    }
};

exports.uploadProducts = async (req, res) => {
      try {
        const products = await Product.showProducts();
        res.json(products);
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        res.status(500).json({ message: error.message });
    }
};

exports.getProducts = async (req, res) => {
    console.log("OIII")
    try {
        const products = await Product.find();
        const productsTotal = await Product.countDocuments({});
        if(products) {
            res.render(path.join(__dirname, '../views/produtos.ejs'), { products, productsTotal })
        } else {
            return res.status(404).send("Produtos não encontrados.");
        }
    } catch (error) {
        res.status(500).send("Erro interno do servidor");
        console.log(error.message)
    }
}

exports.getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).render('404', { message: 'Produto não encontrado' });
        }

        res.render(path.join(__dirname, '../views/detalhes.ejs'), {product})
    } catch (error) {
        res.status(500).render('error', { message: 'Erro ao buscar o produto' });
    }
};