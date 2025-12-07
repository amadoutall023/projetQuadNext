import Navbar from "@/components/Navbar";

export default function SuperAdminPage() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Page Super Admin
                </h1>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <p className="text-gray-600 dark:text-gray-300">
                        Contenu de la page super administrateur
                    </p>
                </div>
            </div>
        </div>
    );
}