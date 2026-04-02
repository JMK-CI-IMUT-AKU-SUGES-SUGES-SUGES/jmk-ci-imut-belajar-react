import React from 'react';

const ProfileHeader = ({ member }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6 relative">
      {/* Banner */}
      <div className="h-48 sm:h-64 bg-slate-800 bg-gradient-to-r from-blue-600 to-sky-500"></div>
      
      {/* Profile Details */}
      <div className="px-6 sm:px-8 pb-8 relative">
        <img 
          src={member.photo} 
          alt={member.name} 
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white object-cover shadow-md -mt-16 sm:-mt-20 bg-white"
        />
        
        <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              {member.name}
            </h1>
            <p className="text-lg text-slate-600 font-medium mb-2">
              NIM: {member.nim} &bull; <span className="text-blue-600 font-semibold">{member.badge}</span>
            </p>
            <p className="text-slate-700 max-w-2xl text-base leading-relaxed">
              {member.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
