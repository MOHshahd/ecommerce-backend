const prisma = require('../prisma');

exports.list = async (req, res, next) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const category = await prisma.category.create({ data: req.body });
    res.status(201).json(category);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const category = await prisma.category.update({ where: { id }, data: req.body });
    res.json(category);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.category.delete({ where: { id } });
    res.json({ ok: true });
  } catch (err) { next(err); }
};