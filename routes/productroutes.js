const fastify = require('fastify')({ logger: true });
const Product = require('../models/productmodel');
const { createProduct } = require('../controllers/productcontrollers');
const router = fastify;
router.post('/products', createProduct);


module.exports = router;