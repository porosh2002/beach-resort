import React from 'react';
import './Home.css';
import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import Services from '../../Services/services';
import FeaturedRooms from '../../FeaturedRooms/FeaturedRooms';
export default function Home() {
    return (
        <div>
            <Hero main_class={'hero_bg'} title={'Delight Rooms'} description={'Deluxe Rooms Starting At'} 
            Route={'/Rooms'} Button_txt={'Our Rooms'} offer={'$299'}
             className={'Our_Rooms_btn'}/>
             <Services />
             <FeaturedRooms />
            <Footer />
        </div>
    )
}
