import Navbar from "@/components/Navbar";

export default function SuperAdminAdhesionsPage() {
    // Simulation de données - à remplacer par une vraie requête API
    const adhesions = [
        {
            id: "1",
            entrepriseName: "TechCorp",
            contactName: "Jean Dupont",
            contactEmail: "jean.dupont@techcorp.com",
            requestDate: "2024-01-15",
            status: "pending",
            message: "Nous souhaitons adhérer à votre plateforme pour proposer nos quads à la location.",
        },
        {
            id: "2",
            entrepriseName: "InnovateLab",
            contactName: "Marie Martin",
            contactEmail: "marie.martin@innovatelab.com",
            requestDate: "2024-01-10",
            status: "approved",
            message: "Laboratoire de recherche intéressé par vos services de location de quads.",
        },
        {
            id: "3",
            entrepriseName: "QuadMasters Inc",
            contactName: "Pierre Durand",
            contactEmail: "pierre.durand@quadmasters.com",
            requestDate: "2024-01-20",
            status: "rejected",
            message: "Entreprise spécialisée dans la fabrication de quads souhaitant collaborer.",
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "approved":
                return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
            case "pending":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
            case "rejected":
                return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case "approved":
                return "Approuvée";
            case "pending":
                return "En attente";
            case "rejected":
                return "Rejetée";
            default:
                return status;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Gestion des Adhésions
                </h1>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Demandes d'adhésion ({adhesions.length})
                        </h2>
                    </div>

                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {adhesions.map((adhesion) => (
                            <div key={adhesion.id} className="px-6 py-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                                {adhesion.entrepriseName}
                                            </h3>
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(adhesion.status)}`}>
                                                {getStatusText(adhesion.status)}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3 text-sm text-gray-600 dark:text-gray-400">
                                            <div>
                                                <strong>Contact:</strong> {adhesion.contactName}
                                            </div>
                                            <div>
                                                <strong>Email:</strong> {adhesion.contactEmail}
                                            </div>
                                            <div>
                                                <strong>Date:</strong> {new Date(adhesion.requestDate).toLocaleDateString('fr-FR')}
                                            </div>
                                        </div>

                                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                                            {adhesion.message}
                                        </p>
                                    </div>

                                    <div className="flex flex-col space-y-2 ml-4">
                                        {adhesion.status === 'pending' && (
                                            <>
                                                <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
                                                    Approuver
                                                </button>
                                                <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors">
                                                    Rejeter
                                                </button>
                                            </>
                                        )}
                                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                                            Détails
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {adhesions.length === 0 && (
                        <div className="px-6 py-8 text-center">
                            <p className="text-gray-500 dark:text-gray-400">
                                Aucune demande d'adhésion
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}