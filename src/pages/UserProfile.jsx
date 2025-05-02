import React from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
// import LogoutButton from '../components/UserProfile/LogoutButton'
import ProfileHeader from '../components/UserProfile/ProfileHeader'
import TabsNavigation from '../components/UserProfile/TabsNavigation'
// import ProfileContent from '../components/UserProfile/ProfileContent'
import FormField from '../components/UserProfile/FormField'



export default function CustomersChatsPage() {
  return (
    <div >
      <Navbar/>
      <ProfileHeader/>
      <TabsNavigation/>
      <FormField/>

      <Footer/>
    </div>
  )
}

