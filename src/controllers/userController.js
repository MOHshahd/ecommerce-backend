const prisma = require('../prisma');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({ select: { id: true, email: true, name: true, role: true, createdAt: true } });
    res.json(users);
  } catch (err) { next(err); }
};

exports.getUserById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    if (req.user.role !== 'ADMIN' && req.user.userId !== id) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    const user = await prisma.user.findUnique({ where: { id }, select: { id: true, email: true, name: true, role: true, createdAt: true } });
    if (!user) return res.status(404).json({ message: 'Not found' });
    res.json(user);
  } catch (err) { next(err); }
};