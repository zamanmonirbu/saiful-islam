


// File: src/components/ProfileHeader.jsx
import React, { useState } from 'react';
import LogoutButton from './LogoutButton';
import ava from '../../assets/Ava.png';

const ProfileHeader = ({ name, email, avatarUrl }) => {
  const [currentAvatar, setCurrentAvatar] = useState(avatarUrl || ava);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCurrentAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-16 rounded-md shadow-sm relative mx-32 mb-12">
      <div className="absolute top-6 left-6 bg-red-500 rounded-md  ">
        <LogoutButton />
      </div>
      
      <div className="flex flex-col items-center justify-center pt-10">
        <div className="relative mb-4">
          <img 
            src={currentAvatar} 
            alt={name} 
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 hover:text-gray-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => document.getElementById('imageInput').click()}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="hidden"
              id="imageInput"
            />
          </div>
        </div>
        <h1 className="text-xl font-medium">{name} jones</h1>
        <p className="text-gray-500 text-sm">{email}jones@gmail.com</p>
      </div>
    </div>
  );
};

export default ProfileHeader;

