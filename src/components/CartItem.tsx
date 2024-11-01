import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from './Button';

interface CartItemProps {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export function CartItem({
  id,
  title,
  price,
  quantity,
  image,
  onUpdateQuantity,
  onRemove
}: CartItemProps) {
  return (
    <div className="flex items-center py-6 border-b border-gray-200">
      <img
        src={image}
        alt={title}
        className="h-20 w-20 rounded-lg object-cover"
      />
      
      <div className="ml-4 flex-1">
        <h3 className="text-base font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">₹{price}</p>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="!p-1"
            onClick={() => onUpdateQuantity(id, Math.max(0, quantity - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="text-gray-900 w-8 text-center">{quantity}</span>
          <Button
            variant="outline"
            className="!p-1"
            onClick={() => onUpdateQuantity(id, quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        <Button
          variant="outline"
          className="!p-2 text-red-500 hover:text-red-600"
          onClick={() => onRemove(id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}