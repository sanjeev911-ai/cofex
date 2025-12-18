import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/products/${product._id || product.id}`} className="block">
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="absolute top-2 right-2">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
              <Heart size={20} />
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{product.category}</p>
          
          <div className="flex items-center gap-2">
            {product.originalPrice && (
              <span className="text-gray-400 line-through">₹{product.originalPrice}</span>
            )}
            <span className="text-xl font-bold text-green-600">₹{product.price}</span>
          </div>
        </div>
      </Link>
      
      <button 
        className="w-full bg-blue-600 text-white py-2 px-4 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
        onClick={handleAddToCart}
      >
        <ShoppingCart size={16} />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;