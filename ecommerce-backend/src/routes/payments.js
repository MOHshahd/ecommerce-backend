const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/authMiddleware');
const prisma = require('../prisma');

// Create payment record for an order
router.post('/', auth, async (req, res, next) => {
  try {
    const { orderId, paymentMethod, amount, transactionId } = req.body;
    const payment = await prisma.payment.create({
      data: {
        orderId,
        paymentMethod,
        amount,
        transactionId,
        status: 'SUCCESS'
      }
    });
    res.status(201).json(payment);
  } catch (err) {
    next(err);
  }
});

// Get all payments (admin only)
router.get('/', auth, adminOnly, async (req, res, next) => {
  try {
    const payments = await prisma.payment.findMany({ include: { order: true } });
    res.json(payments);
  } catch (err) {
    next(err);
  }
});

module.exports = router;