import React from 'react';
import { Search, Filter } from 'lucide-react';
import { FoodCard } from '../components/FoodCard';

const MOCK_FOODS = [
  {
    id: '1',
    title: 'Homestyle Butter Chicken',
    description: 'Tender chicken pieces in a rich, creamy tomato-based curry made with love and traditional spices.',
    price: 299,
    preparationTime: 45,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    homemakerId: '1',
    homemaker: {
      name: 'Priya\'s Kitchen',
      rating: 4.8,
      location: 'Indiranagar, Bangalore'
    },
    category: 'North Indian',
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    title: 'South Indian Thali',
    description: 'Complete meal with rice, sambar, rasam, vegetables, and homemade chutneys.',
    price: 199,
    preparationTime: 30,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    homemakerId: '2',
    homemaker: {
      name: 'Amma\'s Kitchen',
      rating: 4.9,
      location: 'Jayanagar, Bangalore'
    },
    category: 'South Indian',
    rating: 4.9,
    reviews: 89
  }
];

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Authentic Homemade Food
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Connect with local home chefs and enjoy delicious, home-cooked meals delivered to your doorstep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl bg-white rounded-lg p-2">
            <div className="flex-1 flex items-center px-4 py-2 bg-gray-50 rounded-md">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search for dishes or home chefs..."
                className="w-full bg-transparent focus:outline-none text-gray-900"
              />
            </div>
            <button className="flex items-center justify-center px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Food Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">Popular Today</h2>
          <div className="flex space-x-2">
            {['All', 'North Indian', 'South Indian', 'Chinese', 'Continental'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm rounded-full border border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_FOODS.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
}