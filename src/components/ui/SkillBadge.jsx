import React from 'react';

const SkillBadge = ({ skill }) => {
  return (
    <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:bg-slate-200 transition-colors cursor-default">
      {skill}
    </span>
  );
};

export default SkillBadge;
