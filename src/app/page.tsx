'use client';

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-screen w-full">
      <div className="flex-1 w-full min-w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-green-100 to-yellow-100 animate-gradient text-center">
        <h1 className="text-4xl font-bold text-blue-800 drop-shadow-md mb-4">
          Selamat Datang!
        </h1>
        <div className="flex flex-wrap gap-6 mt-6 justify-center">
          <Link href="/admin" className="text-2xl font-semibold text-blue-800 underline hover:text-blue-600 max-w-xs mx-auto">
            <img src="/images/admin.png" alt="Logo" className="w-48 h-48 hover:scale-105 transition-transform duration-300 mx-auto" />
          </Link>
          <Link href="/flip-card" className="text-2xl font-semibold text-blue-800 underline hover:text-blue-600 max-w-xs mx-auto">
            <img src="/images/flipcard.png" alt="Logo" className="w-48 h-48 hover:scale-105 transition-transform duration-300 mx-auto" />
          </Link>
          <Link href="/support" className="text-2xl font-semibold text-blue-800 underline hover:text-blue-600 max-w-xs mx-auto">
            <img src="/images/support.png" alt="Logo" className="w-48 h-48 hover:scale-105 transition-transform duration-300 mx-auto" />
          </Link>
        </div>
      </div>
    </main>
  );
}