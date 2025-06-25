const fastify = require('fastify')({ logger: true });
const Product = require('../models/productmodel');
async function createProduct(req, res) {
  try {
    const product = new Product(req.body);
    await product.save();
    reply.status(201).send(product);
  } catch (error) {
    req.log.error(error);
    res.status(500).send({ error: 'Failed to create product' });
  }
}
module.exports={createProduct};