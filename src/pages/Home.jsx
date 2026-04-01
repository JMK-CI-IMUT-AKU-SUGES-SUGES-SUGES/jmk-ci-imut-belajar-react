import React from 'react';
import { members } from '../data/members';
import MemberCard from '../components/ui/MemberCard';
import { Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-8">
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4 text-blue-600">
          <Users className="w-12 h-12" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Kelompok JMK CI IMUT
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Kami adalah tim mahasiswa yang berdedikasi tinggi, penuh inovasi, dan selalu siap menghadapi tantangan di dunia pengembangan web.
        </p>
      </section>

      {/* Members Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            Anggota Tim <span className="text-slate-400 font-normal text-lg">({members.length})</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {members.map((member) => (
            <MemberCard key={member.slug} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
