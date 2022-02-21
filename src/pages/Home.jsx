import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Categories from '../components/Categories/Categories';
import Navbar from '../components/Navbar/Navbar'
import Slider from './../components/Slider/Slider';
import Products from './../components/Products/Products';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const Home = () => {
    return <>
        <Navbar />
        <Announcement />
        <Slider />
        <Categories />
        <Products />
        <NewsLetter />
    </>
}

export default Home