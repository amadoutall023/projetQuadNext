import Navbar from "@/components/Navbar";
import MediaGallery from "@/components/MediaGallery";

interface QuadDetailPageProps {
    params: Promise<{ id: string }>;
}

export default async function QuadDetailPage({ params }: QuadDetailPageProps) {
    const { id } = await params;

    // Simulation de données - à remplacer par une vraie requête API
    const quad = {
        id,
        name: `Quad ${id}`,
        brand: "QuadMaster",
        model: `QM-${id}`,
        engine: "500cc",
        power: "45 HP",
        price: 8500,
        description: "Quad performant avec moteur 4 temps, idéal pour les loisirs et les travaux légers.",
        features: [
            "Moteur 4 temps refroidi par air",
            "Transmission automatique CVT",
            "Suspension indépendante",
            "Freins à disque hydrauliques",
            "Siège ergonomique",
        ],
        images: [
            "/quad-1.jpg",
            "/quad-2.jpg",
            "/quad-3.jpg",
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Galerie d'images */}
                    <div>
                        <MediaGallery images={quad.images} />
                    </div>

                    {/* Informations détaillées */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                {quad.brand} {quad.model}
                            </h1>
                            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                                {quad.price.toLocaleString()} €
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Caractéristiques techniques
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        <strong>Moteur:</strong> {quad.engine}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        <strong>Puissance:</strong> {quad.power}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        <strong>Marque:</strong> {quad.brand}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        <strong>Modèle:</strong> {quad.model}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Description
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {quad.description}
                            </p>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                                Équipements inclus :
                            </h3>
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                                {quad.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                                Réserver maintenant
                            </button>
                            <button className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors">
                                Contactez-nous
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}