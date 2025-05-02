// File: src/components/AccountDetailsForm.jsx
import React, { useState } from 'react';
import FormField from './FormField';

const AccountDetailsForm = ({ userData }) => {
  const [formData, setFormData] = useState({
    name: userData.name || '',
    email: userData.email || '',
    address: userData.address || ''
  });
  
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic would go here
    console.log('Form submitted:', formData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <FormField 
        label="Name" 
        value={formData.name} 
        onChange={(e) => handleChange('name', e.target.value)}
      />
      
      <FormField 
        label="Email" 
        type="email"
        value={formData.email} 
        onChange={(e) => handleChange('email', e.target.value)}
      />
      
      <FormField 
        label="Address" 
        value={formData.address} 
        onChange={(e) => handleChange('address', e.target.value)}
        placeholder="Enter your address"
      />
      
      <div className="flex justify-center mt-8">
        <button 
          type="submit" 
          className="bg-amber-100 text-gray-800 px-12 py-2 rounded-md hover:bg-amber-200 transition-colors"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AccountDetailsForm;