const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/authMiddleware');
const orderController = require('../controllers/orderController');

router.post('/', auth, orderController.createOrder);
router.get('/', auth, orderController.listUserOrders);
router.get('/:id', auth, orderController.getOrder);
router.put('/:id/status', auth, adminOnly, orderController.updateStatus);

module.exports = router;