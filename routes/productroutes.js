const fastify = require('fastify')({ logger: true });
const Product = require('../models/productmodel');
const { createProduct,getProductbyId,getallProducts } = require('../controllers/productcontrollers');
const router = fastify;
router.post('/products', createProduct);
router.get('/products', getallProducts);
router.get('/products/:id', getProductbyId);

module.exports = router;