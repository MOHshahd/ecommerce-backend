const express = require('express');
const router = express.Router();
const { auth, adminOnly } = require('../middleware/authMiddleware');
const prisma = require('../prisma');

router.get('/', async (req, res, next) => {
  try {
    const cats = await prisma.category.findMany();
    res.json(cats);
  } catch (err) {
    next(err);
  }
});

router.post('/', auth, adminOnly, async (req, res, next) => {
  try {
    const existing = await prisma.category.findUnique({ where: { name: req.body.name } });
    if (existing) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const c = await prisma.category.create({ data: req.body });
    res.status(201).json(c);
  } catch (err) {
    next(err);
  }
});


module.exports = router;