import React from 'react'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import ForumHeader from '../components/Community/ForumHeader'
import ForumGuide from '../components/Community/ForumGuide'
import CategoriesSection from '../components/Community/CategoriesSection'
import PopularPostsSection from '../components/Community/PopularPostsSection'

export default function Community() {
  return (
    <div>
       <Navbar />
        <ForumHeader/>
        <ForumGuide/>
        <CategoriesSection/>
        <PopularPostsSection/>
        <Footer/>
    </div>
  )
}
