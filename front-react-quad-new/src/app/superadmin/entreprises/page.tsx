import Link from "next/link";
import Navbar from "@/components/Navbar";
import EntrepriseCard from "@/components/EntrepriseCard";

export default function SuperAdminEntreprisesPage() {
    // Simulation de données - à remplacer par une vraie requête API
    const entreprises = [
        {
            id: "1",
            name: "TechCorp",
            sector: "Technologie",
            location: "Paris, France",
            employees: 150,
            status: "active",
        },
        {
            id: "2",
            name: "InnovateLab",
            sector: "Recherche & Développement",
            location: "Lyon, France",
            employees: 75,
            status: "active",
        },
        {
            id: "3",
            name: "QuadMasters Inc",
            sector: "Sports Motorisés",
            location: "Marseille, France",
            employees: 45,
            status: "pending",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Gestion des Entreprises
                    </h1>
                    <Link
                        href="/superadmin/new-entreprise"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                        Nouvelle Entreprise
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {entreprises.map((entreprise) => (
                        <div key={entreprise.id} className="relative">
                            <EntrepriseCard
                                name={entreprise.name}
                                sector={entreprise.sector}
                                location={entreprise.location}
                                employees={entreprise.employees}
                            />
                            <div className="absolute top-2 right-2 flex space-x-1">
                                <Link
                                    href={`/entreprise/${entreprise.id}`}
                                    className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded"
                                >
                                    Voir
                                </Link>
                                <button className="bg-gray-500 hover:bg-gray-600 text-white text-xs px-2 py-1 rounded">
                                    Modifier
                                </button>
                            </div>
                            <div className="absolute bottom-2 right-2">
                                <span className={`text-xs px-2 py-1 rounded ${entreprise.status === 'active'
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                                    }`}>
                                    {entreprise.status === 'active' ? 'Active' : 'En attente'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {entreprises.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400 mb-4">
                            Aucune entreprise enregistrée
                        </p>
                        <Link
                            href="/superadmin/new-entreprise"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                            Créer la première entreprise
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}