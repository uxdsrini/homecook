import React from 'react';
import { Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { FoodItem } from '../types';

interface FoodCardProps {
  food: FoodItem;
}

export function FoodCard({ food }: FoodCardProps) {
  return (
    <Link to={`/food/${food.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 group-hover:scale-[1.02]">
        <div className="relative h-48">
          <img
            src={food.image}
            alt={food.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-900">
            ₹{food.price}
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500">
              {food.title}
            </h3>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{food.rating}</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">
            {food.description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{food.preparationTime} mins</span>
            </div>
            <span className="text-gray-600">by {food.homemaker.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}