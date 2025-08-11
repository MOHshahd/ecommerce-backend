const prisma = require('../prisma');

exports.getCart = async (req, res, next) => {
  try {
    const cart = await prisma.cart.findUnique({ where: { userId: req.user.userId }, include: { cartProducts: { include: { product: true } } } });
    res.json(cart || { cartProducts: [] });
  } catch (err) { next(err); }
};

exports.addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    let cart = await prisma.cart.findUnique({ where: { userId: req.user.userId } });
    if (!cart) cart = await prisma.cart.create({ data: { userId: req.user.userId } });

    const existing = await prisma.cartProduct.findFirst({ where: { cartId: cart.id, productId } });
    if (existing) {
      const updated = await prisma.cartProduct.update({ where: { id: existing.id }, data: { quantity: existing.quantity + quantity } });
      return res.json(updated);
    }

    const item = await prisma.cartProduct.create({ data: { cartId: cart.id, productId, quantity } });
    res.status(201).json(item);
  } catch (err) { next(err); }
};

exports.updateItem = async (req, res, next) => {
  try {
    const { id, quantity } = req.body;
    const updated = await prisma.cartProduct.update({ where: { id }, data: { quantity } });
    res.json(updated);
  } catch (err) { next(err); }
};

exports.removeItem = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.cartProduct.delete({ where: { id } });
    res.json({ ok: true });
  } catch (err) { next(err); }
};