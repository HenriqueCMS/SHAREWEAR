const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    valor: {
      type: Number,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    tamanho: {
      type: String,
      enum: ['GG', 'G', 'M', 'P', 'PP'],
      required: true,
    },
    categoria: {
      type: String,
      enum: ['Feminino', 'Masculino', 'Infantil'],
      required: true,
    },
    colecao: {
      type: String,
      enum: ['Casual', 'Inverno', 'Social', 'Grife'],
      required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
  });

productSchema.statics.createProduct = async function (productData) {
      const {name,url,valor,descricao,tamanho,categoria,colecao} = productData;
      return this.create({
            name,
            url,
            valor,
            descricao,
            tamanho,
            categoria,
            colecao
      });
};


productSchema.statics.getProductsOfDB = async function() {
      return this.find().cursor();
      
}

// productSchema.methods.findProduct = async function(produtoId) {
//       Produto.findById(produtoId);
//   }

module.exports = mongoose.model('Product', productSchema);