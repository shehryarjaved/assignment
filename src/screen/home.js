import React, { useState } from 'react'
import Header from '../layout/header'
import Slideshow from "../layout/home/slider";
import Footer from "../layout/home/footer"
import Cate from '../layout/home/cate';
import Card from '../components/card';


function Home() {
    


    return <>
        <Header />
        <Slideshow />
        <Cate/>
        <Card/>
       <Footer/>
    </>
}
export default Home