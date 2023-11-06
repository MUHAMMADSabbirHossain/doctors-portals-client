import React from 'react';
import chair from "../../assets/images/chair.png";
import bannerBgImage from "../../assets/images/bg.png";
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: `url(${bannerBgImage})` }}>

            <div className="hero-content text-left flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm  rounded-lg shadow-2xl lg:max-w-prose 2xl:max-w-screen-md" alt="doctors portals banner." />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here.</h1>
                    <p className="py-6">"Experience the Future of Healthcare with Our Cutting-Edge Doctor Portal! Streamline your practice, enhance patient care, and stay ahead of the curve with our intuitive and comprehensive platform. Join the ranks of top-tier healthcare professionals who trust us to revolutionize their daily operations. Discover the difference today!"</p>

                    <PrimaryButton>get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;