const prisma = require('../prisma');

exports.createPayment = async (req, res, next) => {
  try {
    const { orderId, paymentMethod, amount, transactionId } = req.body;
    const payment = await prisma.payment.create({
      data: { orderId, paymentMethod, amount, transactionId, status: 'SUCCESS' }
    });
    res.status(201).json(payment);
  } catch (err) { next(err); }
};

exports.getAllPayments = async (req, res, next) => {
  try {
    const payments = await prisma.payment.findMany({ include: { order: true } });
    res.json(payments);
  } catch (err) { next(err); }
};