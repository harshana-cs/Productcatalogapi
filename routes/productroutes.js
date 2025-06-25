const fastify = require('fastify')({ logger: true });
const Product = require('../models/productmodel');
const { createProduct,getProductbyId,getallProducts,updateProduct } = require('../controllers/productcontrollers');
const router = fastify;
router.post('/products', createProduct);
router.get('/products', getallProducts);
router.get('/products/:id', getProductbyId);
router.put('/products/:id', updateProduct);

module.exports = router;