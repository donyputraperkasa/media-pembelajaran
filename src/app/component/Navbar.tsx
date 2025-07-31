'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-blue-300 py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white drop-shadow-sm">
            Belajar Matematika 📘
            </h1>
            <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            </div>
            <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white font-semibold hover:underline">
                Beranda
            </Link>
            </div>
        </div>

        {isOpen && (
            <div className="md:hidden mt-2">
            <Link href="/" className="block py-2 text-white font-semibold hover:underline">
                Beranda
            </Link>
            </div>
        )}
        </nav>
    );
}