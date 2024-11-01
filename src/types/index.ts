export interface User {
  id: string;
  name: string;
  email: string;
  role: 'homemaker' | 'customer';
  avatar?: string;
}

export interface FoodItem {
  id: string;
  title: string;
  description: string;
  price: number;
  preparationTime: number;
  image: string;
  homemakerId: string;
  homemaker: {
    name: string;
    rating: number;
    location: string;
  };
  category: string;
  rating: number;
  reviews: number;
}

export interface Order {
  id: string;
  customerId: string;
  homemakerId: string;
  items: {
    foodItemId: string;
    quantity: number;
    price: number;
  }[];
  status: 'pending' | 'preparing' | 'delivering' | 'delivered';
  total: number;
  createdAt: string;
}