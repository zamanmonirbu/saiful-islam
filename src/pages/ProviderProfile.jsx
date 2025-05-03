import React from 'react';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import ProfilePage from '../components/ProviderProfile/ProfilePage';
// import ProfileHeader from '../components/UserProfile/ProfileHeader';
// import AboutSection from '../components/ProviderProfile/AboutSection';
// import ServicesSection from '../components/ProviderProfile/ServicesSection';
// import WorkingHoursSection from '../components/ProviderProfile/WorkingHoursSection';
// import ExperienceSection from '../components/ProviderProfile/ExperienceSection';

export default function ProviderProfilePage() {
  return (
    <div>
      <Navbar />
      <ProfilePage />
      {/* <ProfileHeader />
      <AboutSection />
      <ServicesSection />
      <WorkingHoursSection />
      <ExperienceSection /> */}
      <Footer />
    </div>
  );
}

