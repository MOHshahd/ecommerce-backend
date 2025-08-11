const prisma = require('../prisma');

exports.list = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({ include: { category: true } });
    res.json(products);
  } catch (err) { next(err); }
};

exports.getOne = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const product = await prisma.product.findUnique({ where: { id }, include: { category: true } });
    if (!product) return res.status(404).json({ message: 'Not found' });
    res.json(product);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const data = req.body;
    const product = await prisma.product.create({ data });
    res.status(201).json(product);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const product = await prisma.product.update({ where: { id }, data });
    res.json(product);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.product.delete({ where: { id } });
    res.json({ ok: true });
  } catch (err) { next(err); }
};