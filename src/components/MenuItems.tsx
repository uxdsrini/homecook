import React from 'react';
import { Edit2, ToggleLeft, ToggleRight } from 'lucide-react';
import { Button } from './Button';

const MOCK_MENU_ITEMS = [
  {
    id: '1',
    title: 'Butter Chicken',
    description: 'Tender chicken pieces in a rich, creamy tomato-based curry.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=200&q=80',
    available: true,
    preparationTime: 45,
    category: 'Main Course'
  },
  {
    id: '2',
    title: 'Paneer Tikka',
    description: 'Marinated and grilled cottage cheese with vegetables.',
    price: 249,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=200&q=80',
    available: false,
    preparationTime: 30,
    category: 'Starters'
  }
];

export function MenuItems() {
  const handleToggleAvailability = (id: string) => {
    console.log('Toggle availability', id);
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Item
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prep Time
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {MOCK_MENU_ITEMS.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-lg object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500 line-clamp-1">
                      {item.description}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ₹{item.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.preparationTime} mins
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleToggleAvailability(item.id)}
                  className={`flex items-center text-sm font-medium ${
                    item.available ? 'text-green-600' : 'text-gray-500'
                  }`}
                >
                  {item.available ? (
                    <ToggleRight className="h-5 w-5 mr-1" />
                  ) : (
                    <ToggleLeft className="h-5 w-5 mr-1" />
                  )}
                  {item.available ? 'Available' : 'Unavailable'}
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Button variant="outline" className="!p-2">
                  <Edit2 className="h-4 w-4" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}