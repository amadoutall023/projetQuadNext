import { Star } from 'lucide-react';
import React from 'react';

interface QuadCardProps {
  quad?: {
    name: string;
    type: string;
    price: string;
  };
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function QuadCard({ quad, title, description, icon }: QuadCardProps) {
  // Si on reçoit un objet quad (ancienne interface)
  if (quad) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        <div className="relative h-48 bg-gradient-to-br from-gray-300 to-gray-400">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">🏍️</span>
          </div>
          <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            Premium
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{quad.name}</h3>
          <div className="flex items-center text-yellow-500 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
            <span>{quad.type}</span>
            <span className="font-bold text-orange-600">{quad.price}</span>
          </div>
          <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 rounded-lg font-bold hover:shadow-lg transition">
            Réserver Maintenant
          </button>
        </div>
      </div>
    );
  }

  // Si on reçoit title et description (nouvelle interface)
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}
