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
async function getallProducts(req, res) {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    req.log.error(error);
    res.status(500).send({ error: 'Failed to retrieve products' });
  }
}
async function getProductbyId(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send({ error: 'Product not found' });
    }
    res.send(product);
  } catch (error) {
    req.log.error(error);
    res.status(500).send({ error: 'Failed to retrieve product' });
  }
}
async function updateProduct(req, res) {
  try { 
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) {     
        return res.status(404).send({ error: 'Product not found' });
        }
    res.send(product);
  } catch (error) {
    req.log.error(error);
    res.status(500).send({ error: 'Failed to update product' });
  }
}

module.exports={createProduct,getallProducts,getProductbyId,updateProduct};