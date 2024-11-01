import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { CartItem } from '../components/CartItem';
import { Button } from '../components/Button';

const MOCK_CART_ITEMS = [
  {
    id: '1',
    title: 'Homestyle Butter Chicken',
    price: 299,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'South Indian Thali',
    price: 199,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
  },
];

export function Cart() {
  const handleUpdateQuantity = (id: string, quantity: number) => {
    // Update quantity logic here
    console.log('Update quantity', id, quantity);
  };

  const handleRemoveItem = (id: string) => {
    // Remove item logic here
    console.log('Remove item', id);
  };

  const subtotal = MOCK_CART_ITEMS.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = 40;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <ShoppingBag className="h-8 w-8 text-orange-500 mr-3" />
          Your Cart
        </h1>

        <div className="mt-8">
          {MOCK_CART_ITEMS.length > 0 ? (
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 space-y-6">
                {MOCK_CART_ITEMS.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </div>

              <div className="border-t border-gray-200 p-6 space-y-4">
                <div className="flex justify-between text-base text-gray-900">
                  <p>Subtotal</p>
                  <p>₹{subtotal}</p>
                </div>
                <div className="flex justify-between text-base text-gray-900">
                  <p>Delivery Fee</p>
                  <p>₹{deliveryFee}</p>
                </div>
                <div className="flex justify-between text-lg font-medium text-gray-900">
                  <p>Total</p>
                  <p>₹{total}</p>
                </div>

                <Button className="w-full">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h3>
              <p className="mt-1 text-gray-500">Add some delicious dishes to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}