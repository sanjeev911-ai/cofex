export const mockProducts = [
  {
    id: 1,
    name: "Modern Sectional Sofa",
    category: "furniture",
    price: 99000,
    originalPrice: 120000,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&h=400&fit=crop&auto=format",
    description: "Comfortable and stylish sectional sofa perfect for modern living rooms.",
    features: ["Premium fabric", "Sturdy wooden frame", "Easy assembly"],
    inStock: true
  },
  {
    id: 2,
    name: "Ceramic Table Lamp",
    category: "lighting",
    price: 6500,
    rating: 4.2,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=400&fit=crop&auto=format",
    description: "Elegant ceramic table lamp with warm ambient lighting.",
    features: ["Ceramic base", "Fabric shade", "Dimmer switch"],
    inStock: true
  },
  {
    id: 3,
    name: "Wooden Coffee Table",
    category: "furniture",
    price: 25000,
    originalPrice: 32000,
    rating: 4.7,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=400&fit=crop&auto=format",
    description: "Handcrafted wooden coffee table with storage compartments.",
    features: ["Solid wood", "Hidden storage", "Scratch resistant"],
    inStock: true
  },
  {
    id: 4,
    name: "Abstract Wall Art",
    category: "decor",
    price: 12000,
    rating: 4.3,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop&auto=format",
    description: "Contemporary abstract wall art to enhance your living space.",
    features: ["Canvas print", "Ready to hang", "Fade resistant"],
    inStock: true
  },
  {
    id: 5,
    name: "Velvet Accent Chair",
    category: "furniture",
    price: 45000,
    rating: 4.6,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=400&fit=crop&auto=format",
    description: "Luxurious velvet accent chair in deep emerald green.",
    features: ["Velvet upholstery", "Solid wood legs", "Comfortable padding"],
    inStock: true
  },
  {
    id: 6,
    name: "Pendant Light Fixture",
    category: "lighting",
    price: 15000,
    originalPrice: 18000,
    rating: 4.4,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=400&fit=crop&auto=format",
    description: "Modern pendant light fixture for dining rooms and kitchens.",
    features: ["Adjustable height", "LED compatible", "Easy installation"],
    inStock: true
  },
  {
    id: 7,
    name: "Decorative Throw Pillows",
    category: "decor",
    price: 3500,
    rating: 4.1,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500&h=400&fit=crop&auto=format",
    description: "Set of 2 decorative throw pillows with geometric patterns.",
    features: ["Cotton blend", "Hidden zipper", "Machine washable"],
    inStock: true
  },
  {
    id: 8,
    name: "Dining Table Set",
    category: "furniture",
    price: 65000,
    originalPrice: 85000,
    rating: 4.8,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=500&h=400&fit=crop&auto=format",
    description: "Complete dining table set with 4 chairs, perfect for family meals.",
    features: ["Seats 4 people", "Durable construction", "Easy to clean"],
    inStock: true
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: mockProducts.length },
  { id: 'furniture', name: 'Furniture', count: mockProducts.filter(p => p.category === 'furniture').length },
  { id: 'lighting', name: 'Lighting', count: mockProducts.filter(p => p.category === 'lighting').length },
  { id: 'decor', name: 'Decor', count: mockProducts.filter(p => p.category === 'decor').length }
];