import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-500">
      <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 text-center max-w-md">
        <AlertCircle className="w-16 h-16 text-rose-500 mx-auto mb-6" />
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">404</h1>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Profil Tidak Ditemukan</h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Maaf, halaman atau profil anggota yang Anda cari tidak dapat ditemukan. Mungkin URL-nya salah atau anggota sudah dihapus.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors shadow-sm"
        >
          <Home className="w-5 h-5" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
