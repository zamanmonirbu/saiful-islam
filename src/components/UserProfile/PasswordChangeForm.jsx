// File: src/components/PasswordChangeForm.jsx
import React, { useState } from 'react';
import FormField from './FormField';

const PasswordChangeForm = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Password change logic would go here
    console.log('Password change submitted');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <FormField 
        label="Current Password" 
        type="password"
        value={formData.currentPassword} 
        onChange={(e) => handleChange('currentPassword', e.target.value)}
      />
      
      <FormField 
        label="New Password" 
        type="password"
        value={formData.newPassword} 
        onChange={(e) => handleChange('newPassword', e.target.value)}
      />
      
      <FormField 
        label="Confirm New Password" 
        type="password"
        value={formData.confirmPassword} 
        onChange={(e) => handleChange('confirmPassword', e.target.value)}
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

export default PasswordChangeForm;