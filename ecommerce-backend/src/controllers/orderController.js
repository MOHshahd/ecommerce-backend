const prisma = require('../prisma');

exports.createOrder = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { shippingAddressId } = req.body;

    const cart = await prisma.cart.findUnique({ where: { userId }, include: { cartProducts: { include: { product: true } } } });
    if (!cart || cart.cartProducts.length === 0) return res.status(400).json({ message: 'Cart is empty' });

    const total = cart.cartProducts.reduce((s, p) => s + p.quantity * p.product.price, 0);

    const order = await prisma.order.create({ data: { userId, total, shippingAddress: shippingAddressId ? { connect: { id: shippingAddressId } } : undefined } });

    for (const cp of cart.cartProducts) {
      await prisma.orderProduct.create({ data: { orderId: order.id, productId: cp.productId, quantity: cp.quantity } });
      await prisma.product.update({ where: { id: cp.productId }, data: { stock: { decrement: cp.quantity } } });
    }

    await prisma.cartProduct.deleteMany({ where: { cartId: cart.id } });

    res.status(201).json(order);
  } catch (err) { next(err); }
};

exports.listUserOrders = async (req, res, next) => {
  try {
    const orders = await prisma.order.findMany({ where: { userId: req.user.userId }, include: { orderProducts: { include: { product: true } } } });
    res.json(orders);
  } catch (err) { next(err); }
};

exports.getOrder = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const order = await prisma.order.findUnique({ where: { id }, include: { orderProducts: { include: { product: true } }, payment: true } });
    if (!order) return res.status(404).json({ message: 'Not found' });
    res.json(order);
  } catch (err) { next(err); }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { status } = req.body;
    const order = await prisma.order.update({ where: { id }, data: { status } });
    res.json(order);
  } catch (err) { next(err); }
};