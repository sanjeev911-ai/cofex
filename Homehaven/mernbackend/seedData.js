const mongoose = require('mongoose');
const Product = require('./model/Product');
require('dotenv').config();

const sampleProducts = [
  {
    name: "Modern Sofa",
    category: "Furniture", 
    price: 25000,
    originalPrice: 30000,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
    description: "Comfortable modern sofa for your living room"
  },
  {
    name: "Dining Table",
    category: "Furniture",
    price: 15000,
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=400", 
    description: "Elegant dining table for family meals"
  },
  {
    name: "Table Lamp",
    category: "Lighting",
    price: 2500,
    originalPrice: 3000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    description: "Beautiful table lamp for ambient lighting"
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to MongoDB');
    
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    
    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();