import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some products to get started!</p>
            <Link to="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-green-600 font-bold">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-2 border rounded-lg">
                  <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="p-2 hover:bg-gray-100">
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-100">
                    <Plus size={16} />
                  </button>
                </div>
                <div className="font-bold text-lg">
                  ₹{(item.price * item.quantity).toFixed(0)}
                </div>
                <button className="p-2 text-red-500 hover:bg-red-50 rounded" onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{getCartTotal().toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr />
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>₹{getCartTotal().toFixed(0)}</span>
              </div>
            </div>
            <Link to="/checkout" className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 block text-center hover:bg-blue-700 transition-colors">Proceed to Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;