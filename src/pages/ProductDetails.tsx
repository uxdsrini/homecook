import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, MapPin, Heart, Share2, Minus, Plus } from 'lucide-react';
import { Button } from '../components/Button';

const MOCK_PRODUCT = {
  id: '1',
  title: 'Homestyle Butter Chicken',
  description: 'Tender chicken pieces in a rich, creamy tomato-based curry made with love and traditional spices. Served with butter naan and jeera rice. Perfect for 2 people.',
  price: 299,
  preparationTime: 45,
  image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
  homemakerId: '1',
  homemaker: {
    name: 'Priya\'s Kitchen',
    rating: 4.8,
    location: 'Indiranagar, Bangalore',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  category: 'North Indian',
  rating: 4.8,
  reviews: 124,
  ingredients: [
    'Chicken', 'Tomatoes', 'Cream', 'Butter', 'Spices', 'Herbs'
  ],
  allergens: ['Dairy', 'Nuts']
};

export function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={MOCK_PRODUCT.image}
                alt={MOCK_PRODUCT.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 space-x-2">
              <Button variant="secondary" className="!p-2">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="secondary" className="!p-2">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {MOCK_PRODUCT.title}
            </h1>
            
            <div className="mt-3 flex items-center">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-500">
                  {MOCK_PRODUCT.rating} ({MOCK_PRODUCT.reviews} reviews)
                </span>
              </div>
              <span className="mx-2 text-gray-300">•</span>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-5 w-5 mr-1" />
                {MOCK_PRODUCT.preparationTime} mins
              </div>
            </div>

            <div className="mt-6">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ₹{MOCK_PRODUCT.price}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-base text-gray-500">
                {MOCK_PRODUCT.description}
              </p>
            </div>

            <div className="mt-6">
              <div className="flex items-center space-x-4">
                <img
                  src={MOCK_PRODUCT.homemaker.image}
                  alt={MOCK_PRODUCT.homemaker.name}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {MOCK_PRODUCT.homemaker.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {MOCK_PRODUCT.homemaker.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    className="!p-1"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-gray-900 w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    className="!p-1"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button className="w-full">
                Add to cart - ₹{MOCK_PRODUCT.price * quantity}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}