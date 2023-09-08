const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/create-product' , productController.createProduct );
router.get('/get-product' , productController.getProduct)
router.get('/getProductById/:productId' , productController.getProductById);
router.put('/update-product/:productId' , productController.updateProduct);
router.delete('/delete-product/:productId' , productController.deleteProduct);

module.exports = router;