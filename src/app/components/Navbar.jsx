"use client"
import React from 'react';
import Link from 'next/link'; // Correct import for Next.js

const Navbar = () => {
  // Toggle function for mobile menu
  const toggleMobileMenu = () => {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-300 transition-colors duration-300">MyApp</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300 transition-colors duration-300">Home</Link>
          <Link href="/hospitalform" className="hover:text-gray-300 transition-colors duration-300">Create Hospital</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="text-gray-300 hover:text-gray-100 focus:outline-none transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-50 hidden" id="mobileMenu">
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <Link href="/" className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors duration-300">Home</Link>
          <Link href="/hospitalform" className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors duration-300">Create Hospital</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
