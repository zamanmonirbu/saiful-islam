// File: src/components/ProfileContent.jsx
import React, { useState } from 'react';
import TabsNavigation from './TabsNavigation';
import AccountDetailsForm from './AccountDetailsForm';
import PasswordChangeForm from './PasswordChangeForm';
import OrderHistoryTable from './OrderHistoryTable';

const ProfileContent = ({ userData }) => {
  const [activeTab, setActiveTab] = useState('account');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'password':
        return <PasswordChangeForm />;
      case 'orders':
        return <OrderHistoryTable />;
      case 'account':
        return <AccountDetailsForm userData={userData} />;
      default:
        return null;
    }
  };
  
  return (
    <div className="mt-6">
      <TabsNavigation onTabChange={setActiveTab} />
      <div className="bg-white p-6 rounded-md shadow-sm">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProfileContent;
