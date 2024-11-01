import React from 'react';
import { Clock, CheckCircle, Truck, Package } from 'lucide-react';

const STATUS_STYLES = {
  pending: {
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    icon: Clock
  },
  preparing: {
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    icon: Package
  },
  ready: {
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    icon: CheckCircle
  },
  delivering: {
    color: 'text-purple-700',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    icon: Truck
  },
  delivered: {
    color: 'text-gray-700',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    icon: CheckCircle
  }
};

interface OrderStatusProps {
  status: keyof typeof STATUS_STYLES;
}

export function OrderStatus({ status }: OrderStatusProps) {
  const style = STATUS_STYLES[status];
  const Icon = style.icon;

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${style.color} ${style.bgColor} border ${style.borderColor}`}
    >
      <Icon className="h-4 w-4 mr-1" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}