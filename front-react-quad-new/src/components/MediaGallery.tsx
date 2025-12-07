"use client";

import { useState } from "react";
import Image from "next/image";

interface MediaGalleryProps {
    images?: string[];
}

export default function MediaGallery({ images }: MediaGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Images par défaut si aucune prop n'est fournie
    const defaultImages = [
        { id: 1, color: 'from-blue-400 to-blue-600' },
        { id: 2, color: 'from-green-400 to-green-600' },
        { id: 3, color: 'from-purple-400 to-purple-600' },
        { id: 4, color: 'from-pink-400 to-pink-600' },
        { id: 5, color: 'from-yellow-400 to-yellow-600' },
        { id: 6, color: 'from-red-400 to-red-600' },
    ];

    const displayImages = images || [];
    const useDefault = !images || images.length === 0;

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {useDefault ? (
                // Affichage des images par défaut
                defaultImages.map((img) => (
                    <div
                        key={img.id}
                        className={`relative h-64 bg-gradient-to-br ${img.color} rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300`}
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-6xl">🏍️</span>
                        </div>
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition"></div>
                    </div>
                ))
            ) : (
                // Affichage des images fournies
                displayImages.map((img, index) => (
                    <div
                        key={index}
                        className="relative h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
                        onClick={() => setSelectedImage(img)}
                    >
                        <Image
                            src={img}
                            alt={`Image ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition"></div>
                    </div>
                ))
            )}

            {/* Modal pour image agrandie - seulement pour les images fournies */}
            {selectedImage && !useDefault && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-full p-4">
                        <Image
                            src={selectedImage}
                            alt="Image agrandie"
                            width={800}
                            height={600}
                            className="object-contain"
                        />
                        <button
                            className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
