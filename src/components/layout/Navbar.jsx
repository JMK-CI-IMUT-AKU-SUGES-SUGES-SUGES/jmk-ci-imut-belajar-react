import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition">
            <Users className="w-6 h-6" />
            <span className="font-bold text-xl tracking-tight">JMK CI IMUT</span>
          </Link>
          <div className="flex gap-4">
            <Link to="/" className="text-slate-600 hover:text-blue-600 font-medium transition">
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
