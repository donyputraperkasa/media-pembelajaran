'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full bg-blue-300 py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white drop-shadow-sm">
            Belajar Matematika 📘
            </h1>
            <Link href="/" className="text-white font-semibold hover:underline">
                Beranda
            </Link>
        </div>
        </nav>
    );
}