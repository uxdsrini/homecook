import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';
import { Button } from './Button';
import { OrderStatus } from './OrderStatus';

const MOCK_ORDERS = [
  {
    id: '1',
    customer: {
      name: 'Sarah Wilson',
      address: '123 Main St, Indiranagar, Bangalore',
      phone: '+91 98765 43210'
    },
    items: [
      { name: 'Butter Chicken', quantity: 2, price: 299 },
      { name: 'Naan', quantity: 4, price: 40 }
    ],
    total: 758,
    status: 'preparing',
    time: '25 mins ago'
  },
  {
    id: '2',
    customer: {
      name: 'Mike Johnson',
      address: '456 Park Road, Koramangala, Bangalore',
      phone: '+91 98765 12345'
    },
    items: [
      { name: 'Paneer Tikka', quantity: 1, price: 249 },
      { name: 'Jeera Rice', quantity: 2, price: 149 }
    ],
    total: 547,
    status: 'pending',
    time: '5 mins ago'
  }
];

export function OrderList() {
  const handleUpdateStatus = (orderId: string, status: string) => {
    console.log('Update status', orderId, status);
  };

  return (
    <div className="space-y-6">
      {MOCK_ORDERS.map((order) => (
        <div key={order.id} className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Order #{order.id}
                </h3>
                <p className="text-sm text-gray-500 flex items-center mt-1">
                  <Clock className="h-4 w-4 mr-1" />
                  {order.time}
                </p>
              </div>
              <OrderStatus status={order.status} />
            </div>

            <div className="border-t border-b border-gray-200 py-4 my-4">
              <div className="flex items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Customer Details</h4>
                  <p className="text-gray-500 mt-1">{order.customer.name}</p>
                  <p className="text-gray-500">{order.customer.phone}</p>
                  <p className="text-gray-500">{order.customer.address}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Total Amount</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    ₹{order.total}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    {item.quantity}x {item.name}
                  </span>
                  <span className="text-gray-900">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              {order.status === 'pending' && (
                <Button
                  onClick={() => handleUpdateStatus(order.id, 'preparing')}
                >
                  Start Preparing
                </Button>
              )}
              {order.status === 'preparing' && (
                <Button
                  onClick={() => handleUpdateStatus(order.id, 'ready')}
                >
                  Mark as Ready
                </Button>
              )}
              {order.status === 'ready' && (
                <Button
                  onClick={() => handleUpdateStatus(order.id, 'delivered')}
                >
                  Mark as Delivered
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}