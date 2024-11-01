import { create } from 'zustand';
import type { User, FoodItem, Order } from '../types';

interface Store {
  user: User | null;
  foodItems: FoodItem[];
  orders: Order[];
  setUser: (user: User | null) => void;
  addFoodItem: (item: FoodItem) => void;
  addOrder: (order: Order) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  foodItems: [],
  orders: [],
  setUser: (user) => set({ user }),
  addFoodItem: (item) => set((state) => ({ foodItems: [...state.foodItems, item] })),
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
}));