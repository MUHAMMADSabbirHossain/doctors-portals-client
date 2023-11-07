import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;