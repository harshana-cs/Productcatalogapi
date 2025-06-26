const fastify = require('fastify')({ logger: true });
const Product = require('../models/product');
async function createProduct(req, reply) {
  try {
    const product = new Product(req.body);
    await product.save();
    reply.code(201).send(product);
  } catch (error) {
    console.error('❌ Error creating product:', error.message);
    reply.code(500).send({ error: error.message });
  }
}
async function getallProducts(req, reply) {
  try {
    const products = await Product.find();
    reply.send(products);
  } catch (error) {
    req.log.error(error);
    reply.status(500).send({ error: 'Failed to retrieve products' });
  }
}
async function getProductbyId(req, reply) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return reply.code(404).send({ error: 'Product not found' });
    }
    reply.send(product);
  } catch (error) {
    req.log.error(error);
    reply.code(500).send({ error: 'Failed to retrieve product' });
  }
}
async function updateProduct(req, reply) {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) {
      return reply.code(404).send({ error: 'Product not found' });
    }
    reply.send(product);
  } catch (error) {
    req.log.error(error);
    reply.code(500).send({ error: 'Failed to update product' });
  }
}

async function deleteProduct(req, reply) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return reply.code(404).send({ error: 'Product not found' });
    }
    reply.send({ message: 'Product deleted successfully' });
  } catch (error) {
    req.log.error(error);
    reply.code(500).send({ error: 'Failed to delete product' });
  }
}
async function getProductbyCategory(req, reply) {
  try {
    const products = await Product.find({ category: req.params.category });
    if (products.length === 0) {
      return reply.code(404).send({ error: 'No products found in this category' });
    }
    reply.send(products);
  } catch (error) {
    req.log.error(error);
    reply.code(500).send({ error: 'Failed to retrieve products by category' });
  }
}

async function filterproductsbycategoriesandprice(req,reply){
  try{
    const products =await Products.find({category: req.params.category, price: req.params.price});
  if(products.lengthength==0){
    return reply.code(404).send({error:'No products found'});
  }
  reply.send(products);
  } catch (error) {
    req.log.error(error);
    reply.code(500).send({ error: 'Failed to filter products' });
  }
}
module.exports={createProduct,getallProducts,getProductbyId,updateProduct,deleteProduct,getProductbyCategory,filterproductsbycategoriesandprice};
