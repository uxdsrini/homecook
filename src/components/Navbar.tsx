import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, ShoppingBag, User } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Navbar() {
  const user = useStore((state) => state.user);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">HomeMade</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/orders" className="p-2 hover:bg-gray-100 rounded-full">
                  <ShoppingBag className="h-6 w-6 text-gray-600" />
                </Link>
                <Link to="/profile" className="flex items-center space-x-2">
                  <img
                    src={user.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                    alt={user.name}
                    className="h-8 w-8 rounded-full"
                  />
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <User className="h-6 w-6" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}