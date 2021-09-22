import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import CategoryHeading from '../components/CategoryHeading'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import SubHeading from '../components/SubHeading'
const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider />
            <CategoryHeading/>
            <Categories/>
            <SubHeading/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
