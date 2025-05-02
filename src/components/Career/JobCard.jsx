
// components/JobCard.jsx
import React from 'react';
function JobCard({ title, location, remote }) {
  return (
    <div className="bg-white rounded-md border border-gray-200 p-4 flex justify-between items-center">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
      <button className="px-4 py-2 rounded-md text-sm font-medium bg-purple-600 text-white">
        Apply
      </button>
    </div>
  );
}

export default JobCard;