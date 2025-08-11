const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/authMiddleware');
const cartController = require('../controllers/cartController');

router.get('/', auth, cartController.getCart);
router.post('/add', auth, cartController.addToCart);
router.put('/update', auth, cartController.updateItem);
router.delete('/remove/:id', auth, cartController.removeItem);

module.exports = router;