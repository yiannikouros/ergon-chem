'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-blue-100 shadow flex items-center px-8 py-4">
      <span className="font-extrabold text-2xl text-blue-700 tracking-tight mr-8">
        Ergon Chem
      </span>
      <div className="flex gap-6">
        <Link href="/" className="text-blue-800 font-medium hover:text-blue-600 transition">Home</Link>
        <Link href="/about" className="text-blue-800 font-medium hover:text-blue-600 transition">About</Link>
        <Link href="/products" className="text-blue-800 font-medium hover:text-blue-600 transition">Products</Link>
        <Link href="/research" className="text-blue-800 font-medium hover:text-blue-600 transition">Research</Link>
        <Link href="/contact" className="text-blue-800 font-medium hover:text-blue-600 transition">Contact</Link>
      </div>
    </nav>
  );
}