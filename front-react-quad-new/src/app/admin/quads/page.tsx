import Link from "next/link";
import Navbar from "@/components/Navbar";
import AdminQuadItem from "../../../components/AdminQuadItem";

export default function AdminQuadsPage() {
    // Simulation de données - à remplacer par une vraie requête API
    const quads = [
      {
        id: "1",
        name: "Quad Sport 500cc",
        brand: "QuadMaster",
        price: 8500,
        status: "available" as const,
        createdAt: "2024-01-15",
      },
      {
        id: "2",
        name: "Quad Utilitaire 400cc",
        brand: "WorkQuad",
        price: 7200,
        status: "rented" as const,
        createdAt: "2024-01-10",
      },
      {
        id: "3",
        name: "Quad Électrique E-Quad",
        brand: "EcoQuad",
        price: 9500,
        status: "maintenance" as const,
        createdAt: "2024-01-20",
      },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Gestion des Quads
                    </h1>
                    <Link
                        href="/admin/new-quad"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                        Nouveau Quad
                    </Link>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Liste des Quads ({quads.length})
                        </h2>
                    </div>

                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {quads.map((quad) => (
                            <AdminQuadItem
                                key={quad.id}
                                quad={quad}
                            />
                        ))}
                    </div>

                    {quads.length === 0 && (
                        <div className="px-6 py-8 text-center">
                            <p className="text-gray-500 dark:text-gray-400">
                                Aucun quad enregistré
                            </p>
                            <Link
                                href="/admin/new-quad"
                                className="inline-block mt-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                            >
                                Créer le premier quad
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}