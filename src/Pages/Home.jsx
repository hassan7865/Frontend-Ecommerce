import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Product from '../Components/Product'
import Slider from '../Components/Slider'

const Home = () => {
  return (
    <>
    <Announcement />
    <Navbar />
    <Slider/>
    <Categories/>
    <Product/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Home