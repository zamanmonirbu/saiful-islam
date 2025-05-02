// File: src/components/FormField.jsx
import React from 'react';

const FormField = ({ label, type = 'text', value, onChange, placeholder }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-300"
      />
    </div>
  );
};

export default FormField;