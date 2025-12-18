import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Truck, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { productAPI } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await productAPI.getProductById(id);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="flex justify-center items-center h-64"><div className="text-xl">Loading...</div></div>;
  if (!product) return <div className="flex justify-center items-center h-64"><div className="text-xl">Product not found</div></div>;

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail-grid">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="product-info-section">
            <h1>{product.name}</h1>

            
            <div className="price-section">
              {product.originalPrice && <span className="original-price">₹{product.originalPrice}</span>}
              <span className="current-price">₹{product.price}</span>
            </div>
            
            <p className="description">{product.description}</p>
            
            <div className="features">
              <h3>Features:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="purchase-section">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              
              <div className="action-buttons">
                <button className="add-to-cart" onClick={handleAddToCart}>
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="wishlist">
                  <Heart size={20} />
                </button>
              </div>
            </div>
            
            <div className="product-guarantees">
              <div className="guarantee">
                <Truck size={20} />
                <span>Free shipping on orders over ₹40000</span>
              </div>
              <div className="guarantee">
                <Shield size={20} />
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;