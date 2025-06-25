const fastify = require('fastify')({ logger: true });
const Product = require('../models/productmodel');
const { createProduct,getProductbyId,getallProducts,updateProduct,deleteProduct } = require('../controllers/productcontrollers');
const router = fastify;
router.post('/products', createProduct);
router.get('/products', getallProducts);
router.get('/products/:id', getProductbyId);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;