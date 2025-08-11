const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/authMiddleware');
const productController = require('../controllers/productController');

router.get('/', productController.list);
router.get('/:id', productController.getOne);
router.post('/', auth, adminOnly, productController.create);
router.put('/:id', auth, adminOnly, productController.update);
router.delete('/:id', auth, adminOnly, productController.remove);

module.exports = router;