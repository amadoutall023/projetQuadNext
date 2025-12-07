"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import QuadCard from "@/components/QuadCard";
import EntrepriseCard from "@/components/EntrepriseCard";
import MediaGallery from "@/components/MediaGallery";

export default function QuadRentalApp() {
  const [openAdmin, setOpenAdmin] = useState(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
          console.log('Video playing successfully');
        } catch (error) {
          console.log('Video autoplay failed, showing first frame:', error);
        }
      }
    };

    // Try to play after a short delay to ensure video is loaded
    const timer = setTimeout(playVideo, 1000);
    return () => clearTimeout(timer);
  }, []);

  const premiumQuads = [
    { name: "Yamaha Raptor 700", type: "Sport", price: "15000 FCFA/h" },
    { name: "Honda TRX 450R", type: "Racing", price: "12000 FCFA/h" },
    { name: "Suzuki LTZ 400", type: "Performance", price: "10000 FCFA/h" },
    { name: "Kawasaki KFX 450R", type: "Sport", price: "13000 FCFA/h" },
  ];

  const admins = [
    {
      id: 1,
      name: "Aventure Quads Dakar",
      location: "Almadies, Dakar",
      quads: [
        { model: "Can-Am Outlander", specs: "570cc, Automatique", price: "8000 FCFA" },
        { model: "Polaris Sportsman", specs: "450cc, 4x4", price: "7000 FCFA" },
        { model: "Arctic Cat Alterra", specs: "500cc, EPS", price: "7500 FCFA" },
      ]
    },
    {
      id: 2,
      name: "Quad Safari Sénégal",
      location: "Saly, Mbour",
      quads: [
        { model: "Honda Foreman", specs: "500cc, Robuste", price: "6500 FCFA" },
        { model: "Yamaha Grizzly", specs: "350cc, Trail", price: "6000 FCFA" },
        { model: "Suzuki KingQuad", specs: "400cc, 4x4", price: "6500 FCFA" },
      ]
    },
    {
      id: 3,
      name: "Extreme Quad Lac Rose",
      location: "Lac Rose, Dakar",
      quads: [
        { model: "Kawasaki Brute Force", specs: "750cc, Puissant", price: "9000 FCFA" },
        { model: "Polaris Scrambler", specs: "850cc, Sport", price: "9500 FCFA" },
        { model: "Can-Am Renegade", specs: "650cc, Performance", price: "8500 FCFA" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Video Section */}
      <div className="pt-20">
        <div className="relative h-[70vh] overflow-hidden">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              console.error('Video failed to load:', e);
              // Fallback to gradient background
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.style.background = 'linear-gradient(to-br, #374151, #1f2937)';
            }}
            onLoadStart={() => console.log('Video load started')}
            onCanPlay={() => console.log('Video can play')}
            onPlay={() => console.log('Video started playing')}
            onPause={() => console.log('Video paused')}
            onLoadedData={() => console.log('Video data loaded')}
          >
            <source src="/video/moi.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white z-10">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-pulse"> QUAD ADVENTURE</h1>
              <p className="text-xl md:text-2xl mb-8">Vivez l'expérience ultime au Sénégal</p>
              <button className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-700 transform hover:scale-110 transition shadow-2xl">
                DÉCOUVRIR NOS QUADS
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      </div>

      {/* Premium Quads Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Quads Premium</h2>
          <p className="text-gray-600 text-lg">Les meilleurs quads pour une expérience inoubliable</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {premiumQuads.map((quad, index) => (
            <QuadCard key={index} quad={quad} />
          ))}
        </div>
      </section>

      {/* Admins Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Partenaires</h2>
            <p className="text-gray-600 text-lg">Découvrez les entreprises partenaires et leurs flottes</p>
          </div>
          {admins.map((admin) => (
            <EntrepriseCard
              key={admin.id}
              name={admin.name}
              sector="Location de quads"
              location={admin.location}
              employees={admin.quads.length}
            />
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Galerie</h2>
          <p className="text-gray-600 text-lg">Nos plus belles aventures en images</p>
        </div>
        <MediaGallery />
      </section>

      {/* Publicité Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Prêt pour l'aventure ?</h2>
          <p className="text-xl mb-8">Réservez maintenant et profitez de 20% de réduction sur votre première location !</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition shadow-xl">
              RÉSERVER MAINTENANT
            </button>
            <a href="tel:+221773546426" className="flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-orange-600 transition">
              <Phone className="w-5 h-5 mr-2" />
              +221 77 354 64 26
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2024 QuadXtreme Sénégal. Tous droits réservés.</p>
          <p className="text-gray-500 mt-2">Dakar, Sénégal | +221 77 354 64 26</p>
        </div>
      </footer>
    </div>
  );
}