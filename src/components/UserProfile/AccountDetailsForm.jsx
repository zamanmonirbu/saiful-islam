// File: src/components/AccountDetailsForm.jsx
import React, { useState } from 'react';
import FormField from './FormField';

const AccountDetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900'
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Account details updated:', formData);
  };

  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Account Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            label="First Name"
            value={formData.firstName}
            onChange={(value) => handleChange('firstName', value)}
          />
          <FormField
            label="Last Name"
            value={formData.lastName}
            onChange={(value) => handleChange('lastName', value)}
          />
          <FormField
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(value) => handleChange('email', value)}
          />
          <FormField
            label="Phone Number"
            value={formData.phone}
            onChange={(value) => handleChange('phone', value)}
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-amber-400 text-amber-900 font-medium rounded hover:bg-amber-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountDetailsForm;
