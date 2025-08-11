// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create Users
  const adminPassword = await bcrypt.hash('admin123', 10);
  const userPassword = await bcrypt.hash('user123', 10);

  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      name: 'Regular User',
      password: userPassword,
      role: 'USER',
    },
  });

  // Create Categories
  const electronics = await prisma.category.create({
    data: { name: 'Electronics' },
  });

  const clothing = await prisma.category.create({
    data: { name: 'Clothing' },
  });

  // Create Products
  await prisma.product.createMany({
    data: [
      {
        name: 'Smartphone',
        description: 'Latest smartphone with awesome features',
        price: 699.99,
        stock: 50,
        categoryId: electronics.id,
      },
      {
        name: 'Laptop',
        description: 'Powerful laptop for work and gaming',
        price: 1299.99,
        stock: 30,
        categoryId: electronics.id,
      },
      {
        name: 'T-Shirt',
        description: 'Comfortable cotton t-shirt',
        price: 19.99,
        stock: 100,
        categoryId: clothing.id,
      },
    ],
  });

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
