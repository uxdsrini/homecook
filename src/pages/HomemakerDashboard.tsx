import React, { useState } from 'react';
import { ChefHat, Package, Clock, DollarSign, TrendingUp, Plus } from 'lucide-react';
import { Button } from '../components/Button';
import { OrderList } from '../components/OrderList';
import { MenuItems } from '../components/MenuItems';
import { AddDishModal } from '../components/AddDishModal';

const MOCK_STATS = [
  { label: 'Total Orders', value: '156', icon: Package, change: '+12%' },
  { label: 'Active Orders', value: '8', icon: Clock, change: '+3%' },
  { label: 'Revenue', value: '₹45,690', icon: DollarSign, change: '+8%' },
  { label: 'Rating', value: '4.8', icon: TrendingUp, change: '+0.2' },
];

export function HomemakerDashboard() {
  const [activeTab, setActiveTab] = useState<'orders' | 'menu'>('orders');
  const [isAddDishModalOpen, setIsAddDishModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">Kitchen Dashboard</h1>
                <p className="text-sm text-gray-500">Manage your orders and menu</p>
              </div>
            </div>
            <Button onClick={() => setIsAddDishModalOpen(true)}>
              <Plus className="h-5 w-5 mr-2" />
              Add New Dish
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MOCK_STATS.map((stat) => (
            <div key={stat.label} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.label}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                          {stat.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('orders')}
                className={`${
                  activeTab === 'orders'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Active Orders
              </button>
              <button
                onClick={() => setActiveTab('menu')}
                className={`${
                  activeTab === 'menu'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Menu Items
              </button>
            </nav>
          </div>

          <div className="mt-6">
            {activeTab === 'orders' ? <OrderList /> : <MenuItems />}
          </div>
        </div>
      </div>

      <AddDishModal
        isOpen={isAddDishModalOpen}
        onClose={() => setIsAddDishModalOpen(false)}
      />
    </div>
  );
}