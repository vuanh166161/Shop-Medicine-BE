const express = require("express");
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', ProductController.createProduct)
router.put('/update/:id', ProductController.updateProduct)
router.get('/details/:id', ProductController.detailsProduct)
router.delete('/delete/:id', ProductController.deleteProduct)
router.get('/getall', ProductController.allProduct)
router.post('/delete-many', ProductController.deleteMany)
router.get('/getall-type', ProductController.getAllType)





module.exports = router