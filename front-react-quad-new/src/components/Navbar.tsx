"use client";
import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown, ChevronUp, Star, MapPin } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <span className="text-orange-600 font-bold text-xl">A</span>
                        </div>
                        <span className="text-2xl font-bold">AmQuad</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#accueil" className="hover:text-orange-200 transition font-medium">Accueil</a>
                        <a href="#forfaits" className="hover:text-orange-200 transition font-medium">Forfaits</a>
                        <a href="#galerie" className="hover:text-orange-200 transition font-medium">Galerie</a>
                        <a href="#reserver" className="hover:text-orange-200 transition font-medium">Réserver</a>
                        <a href="#contact" className="hover:text-orange-200 transition font-medium">Contact</a>
                        <a href="tel:+221773546426" className="flex items-center hover:text-orange-200 transition">
                            <Phone className="w-4 h-4 mr-2" />
                            +221 77 354 64 26
                        </a>
                        <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-bold hover:bg-orange-100 transition transform hover:scale-105">
                            RÉSERVER
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-3">
                            <a href="#accueil" className="hover:text-orange-200 transition">Accueil</a>
                            <a href="#forfaits" className="hover:text-orange-200 transition">Forfaits</a>
                            <a href="#galerie" className="hover:text-orange-200 transition">Galerie</a>
                            <a href="#reserver" className="hover:text-orange-200 transition">Réserver</a>
                            <a href="#contact" className="hover:text-orange-200 transition">Contact</a>
                            <a href="tel:+221773546426" className="flex items-center hover:text-orange-200 transition">
                                <Phone className="w-4 h-4 mr-2" />
                                +221 77 354 64 26
                            </a>
                            <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-bold w-full">
                                RÉSERVER
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
