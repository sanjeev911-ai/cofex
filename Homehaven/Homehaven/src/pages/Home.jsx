import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {

  return (
    <div className="min-h-screen">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen px-6 max-w-7xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">Transform Your Home Into a Haven</h1>
          <p className="text-xl text-gray-600">Discover our curated collection of premium furniture and decor that brings comfort and style to every corner of your home.</p>
          <Link to="/products" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Shop Now <ArrowRight size={20} />
          </Link>
        </div>
        <div className="">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop&auto=format" alt="Beautiful living room" className="w-full h-96 object-cover rounded-lg shadow-lg" />
        </div>
      </section>
    </div>
  );
};

export default Home;