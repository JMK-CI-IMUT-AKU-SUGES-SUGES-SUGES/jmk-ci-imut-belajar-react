import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { members } from '../data/members';
import ProfileHeader from '../components/ui/ProfileHeader';
import SkillBadge from '../components/ui/SkillBadge';
import { Mail, Briefcase, Award } from 'lucide-react';

const Profile = () => {
  const { slug } = useParams();
  
  // Find the exact member by slug
  const member = useMemo(() => {
    return members.find(m => m.slug === slug);
  }, [slug]);

  if (!member) {
    // Redirect to NotFound page programmatically or just render the component
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="w-full max-w-4xl mx-auto animate-in fade-in duration-500 pb-12">
      {/* LinkedIn Style Profile Header */}
      <ProfileHeader member={member} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left column / Sidebar */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Mail className="w-5 h-5 text-indigo-500" /> Kontak
            </h3>
            <ul className="space-y-4">
              <li>
                <a href={member.social.email} className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-medium">Email</span>
                </a>
              </li>
              <li>
                <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors">
                  {/* <Github className="w-5 h-5" /> */}
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </li>
              <li>
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                  {/* <Linkedin className="w-5 h-5" /> */}
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-500" /> Pendidikan
            </h3>
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-800">Universitas XYZ</h4>
              <p className="text-sm text-slate-600">Teknik Informatika</p>
              <p className="text-sm text-slate-500 mt-1">2023 - Sekarang</p>
            </div>
          </div>
        </div>

        {/* Right column / Main Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-500" /> Keahlian (Skills)
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {member.skills.map(skill => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              Pengalaman & Portfolio
            </h3>
            <div className="space-y-6 pt-2">
              <div className="relative pl-6 border-l-2 border-slate-200 pb-2">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                <h4 className="font-bold text-slate-800">{member.badge} Developer</h4>
                <p className="text-sm text-slate-500 mb-2">JMK CI IMUT Projects &bull; Saat ini</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Berkontribusi aktif dalam pengembangan proyek kelompok, memastikan kualitas sesuai standar dan kolaborasi tim yang baik.
                </p>
              </div>
              <div className="relative pl-6 border-l-2 border-slate-200">
                <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                <h4 className="font-bold text-slate-800">Proyek Mandiri</h4>
                <p className="text-sm text-slate-500 mb-2">2023</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Membuat berbagai aplikasi web sederhana menggunakan {member.skills[0]} dan {member.skills[1]} sebagai sarana pembelajaran mandiri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
