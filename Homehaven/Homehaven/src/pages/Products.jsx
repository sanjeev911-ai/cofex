import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import { productAPI } from '../services/api';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const category = searchParams.get('category') || 'all';
    setSelectedCategory(category);
    
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  }, [searchParams, products]);

  const fetchProducts = async () => {
    try {
      const response = await productAPI.getAllProducts();
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    ...Array.from(new Set(products.map(p => p.category))).map(cat => ({
      id: cat,
      name: cat,
      count: products.filter(p => p.category === cat).length
    }))
  ];

  if (loading) return <div className="flex justify-center items-center h-64"><div className="text-xl">Loading...</div></div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600">Discover our complete collection of home furniture and decor</p>
        </div>

        <div className="flex gap-8">
          <aside className="w-64 bg-white p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-6">
              <span className="text-gray-600">{filteredProducts.length} products found</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product._id} product={{...product, id: product._id}} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;