import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';

interface AddDishModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddDishModal({ isOpen, onClose }: AddDishModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Add New Dish</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Dish Name"
                type="text"
                required
                placeholder="Enter dish name"
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Price (₹)"
                  type="number"
                  required
                  placeholder="Enter price"
                />
                <Input
                  label="Preparation Time (mins)"
                  type="number"
                  required
                  placeholder="Enter time"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                  rows={3}
                  placeholder="Enter dish description"
                  required
                />
              </div>

              <Input
                label="Image URL"
                type="url"
                required
                placeholder="Enter image URL"
              />

              <div className="mt-5 sm:mt-6">
                <Button type="submit" className="w-full">
                  Add Dish
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}