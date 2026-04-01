import React from 'react';
import { Link } from 'react-router-dom';

const MemberCard = ({ member }) => {
  return (
    <Link to={`/${member.slug}`} className="group block">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-500 w-full relative"></div>
        <div className="px-6 pb-6 relative">
          <div className="flex justify-center -mt-12 mb-4">
            <img 
              src={member.photo} 
              alt={member.name} 
              className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-sm bg-white"
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              {member.name}
            </h3>
            <p className="text-sm font-semibold text-slate-500 mb-1">{member.nim}</p>
            <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full mb-3">
              {member.badge}
            </span>
            <p className="text-sm text-slate-600 line-clamp-2">
              {member.bio}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MemberCard;
