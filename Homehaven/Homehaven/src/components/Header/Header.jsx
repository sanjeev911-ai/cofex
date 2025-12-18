import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, User, Heart, LogOut } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const { getCartItemsCount } = useCart();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            <h1>HomeHaven</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</Link>
            <Link to="/products?category=furniture" className="text-gray-700 hover:text-blue-600 transition-colors">Furniture</Link>
            <Link to="/products?category=decor" className="text-gray-700 hover:text-blue-600 transition-colors">Decor</Link>
            <Link to="/products?category=lighting" className="text-gray-700 hover:text-blue-600 transition-colors">Lighting</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <Search size={20} className="text-gray-500 mr-2" />
              <input type="text" placeholder="Search products..." className="bg-transparent outline-none" />
            </div>
            
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Heart size={20} />
            </button>
            
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <ShoppingCart size={20} />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{getCartItemsCount()}</span>
              )}
            </Link>
            
            {isLoggedIn ? (
              <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                <LogOut size={18} />
                Logout
              </button>
            ) : (
              <Link to="/login" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <User size={18} />
                Login
              </Link>
            )}
            
            <button className="md:hidden p-2 text-gray-700">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;