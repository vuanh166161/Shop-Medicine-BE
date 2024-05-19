const express = require("express");
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const { authUserMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', OrderController.createOrder)
router.get('/get-details-all/:id',OrderController.detailsAllOrder)
router.get('/get-details-order/:id',OrderController.detailsOrder)
router.delete('/cancle-order/:id',OrderController.cancleOrder)
router.get('/get-all-order',OrderController.getAllOrder)






module.exports = router