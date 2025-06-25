const fastify = require('fastify')({ logger: true });
// const Product = require('./models/product');
const {
  createProduct,
  getallProducts,
  getProductbyId,
  updateProduct,
  deleteProduct
} = require('../controllers/productcontrollers');

async function productRoutes(fastify, options) {
  fastify.post('/products', createProduct);
  fastify.get('/products', getallProducts);
  fastify.get('/products/:id', getProductbyId);
  fastify.put('/products/:id', updateProduct);
  fastify.delete('/products/:id', deleteProduct);
}

module.exports = productRoutes;
