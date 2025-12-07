import { MapPin, Building2, Users, ArrowRight } from "lucide-react";

interface EntrepriseCardProps {
    name: string;
    sector: string;
    location: string;
    employees?: number;
}

export default function EntrepriseCard({ name, sector, location, employees }: EntrepriseCardProps) {
    return (
        <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 overflow-hidden">
            {/* Header avec gradient */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-white leading-tight">
                            {name}
                        </h3>
                        <p className="text-orange-100 text-sm font-medium">
                            {sector}
                        </p>
                    </div>
                </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
                <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                        <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span className="text-sm">{location}</span>
                    </div>

                    {employees && (
                        <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                            <Users className="w-4 h-4 text-orange-500 flex-shrink-0" />
                            <span className="text-sm">{employees} employés</span>
                        </div>
                    )}
                </div>

                {/* Bouton d'action */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 group-hover:shadow-lg">
                    <span>Voir les quads</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Effet de brillance au survol */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
    );
}