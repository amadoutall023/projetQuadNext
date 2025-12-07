import Link from "next/link";
import React from "react";

interface Quad {
  id: string;
  name: string;
  brand: string;
  price: number;
  status: "available" | "rented" | "maintenance";
  createdAt: string;
}

interface AdminQuadItemProps {
  quad: Quad;
}

export default function AdminQuadItem({ quad }: AdminQuadItemProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "rented":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "maintenance":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "available":
        return "Disponible";
      case "rented":
        return "Loué";
      case "maintenance":
        return "Maintenance";
      default:
        return status;
    }
  };

  return (
    <div className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {quad.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {quad.brand}
              </p>
            </div>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(quad.status)}`}>
              {getStatusText(quad.status)}
            </span>
          </div>
          <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span>Prix: {quad.price.toLocaleString()} €</span>
            <span>Créé le: {new Date(quad.createdAt).toLocaleDateString('fr-FR')}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Link
            href={`/quad/${quad.id}`}
            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
          >
            Voir
          </Link>
          <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 text-sm font-medium">
            Modifier
          </button>
          <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
