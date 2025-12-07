import Navbar from "@/components/Navbar";
import QuadCard from "@/components/QuadCard";

interface EntrepriseDetailPageProps {
    params: Promise<{ id: string }>;
}

export default async function EntrepriseDetailPage({ params }: EntrepriseDetailPageProps) {
    const { id } = await params;

    // Simulation de données - à remplacer par une vraie requête API
    const entreprise = {
        id,
        name: `Entreprise ${id}`,
        sector: "Technologie",
        location: "Paris, France",
        description: "Entreprise leader dans le domaine des quads électriques.",
        employees: 150,
    };

    const quads = [
        { id: "1", title: "Quad Sport 500cc", description: "Quad performant pour les amateurs de vitesse" },
        { id: "2", title: "Quad Utilitaire 400cc", description: "Quad robuste pour les travaux agricoles" },
        { id: "3", title: "Quad Électrique E-Quad", description: "Quad écologique et silencieux" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {entreprise.name}
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <p className="text-gray-600 dark:text-gray-300">
                                <strong>Secteur:</strong> {entreprise.sector}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                <strong>Localisation:</strong> {entreprise.location}
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-600 dark:text-gray-300">
                                <strong>Employés:</strong> {entreprise.employees}
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                        {entreprise.description}
                    </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Quads disponibles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {quads.map((quad) => (
                        <QuadCard
                            key={quad.id}
                            title={quad.title}
                            description={quad.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}