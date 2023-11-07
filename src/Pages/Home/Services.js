import React from 'react';
import Service from './Service';
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {

    const servicesDetails = [
        {
            _id: 1,
            title: "Fluoride Treatment",
            img: fluoride,
            imgAlt: "Fluoride service logo.",
            discription: "A Gentle Guardian Nurturing the Natural Beauty of Your Smile. Discover the subtle yet powerful protector in your daily routine. Embrace the gentle care of fluoride for a lifetime of healthy, confident smiles.",
        },
        {
            _id: 2,
            title: "Cavity Filling",
            img: cavity,
            imgAlt: "Fluoride service logo.",
            discription: "Revive Your Smile with Expert Cavity Filling! Say goodbye to dental woes and hello to renewed confidence. Reimagine your dental journey with us today!",
        },
        {
            _id: 3,
            title: "Teeth Whitening",
            img: whitening,
            imgAlt: "Fluoride service logo.",
            discription: "Elevate Your Smile with Radiant Teeth Whitening! Unlock the brilliance of your pearly whites and embrace a brighter, more confident you. Discover the ultimate transformation for your teeth and enhance your radiant charm with us.",
        },
    ];


    return (
        <section className="my-16 px-12">
            <div>
                <h2 className="text-secondary font-bold uppercase text-lg">Our services</h2>
                <p className="capitalize text-2xl font-semibold">Services we provie</p>
            </div>

            <div className=" my-10 grid md:grid-cols-3 gap-10">
                {
                    servicesDetails.map(serviceDetails => <Service key={serviceDetails._id} serviceDetails={serviceDetails}></Service>)
                }
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl">

                <figure><img src={treatment} alt="Album" /></figure>
                <div className="card-body my-auto">
                    <h2 className="card-title  font-bold text-2xl sm:text-4xl">Exceptional Dental Care, on Your Terms.</h2>
                    <p>At our dental practice, we believe in providing Exceptional Dental Care on Your Terms. With our team of highly skilled and compassionate professionals, we're dedicated to delivering top-notch dental care that's not only effective but also convenient and comfortable for you. Experience dentistry reimagined, where your well-being and satisfaction come first.</p>
                    <div className="card-actions justify-end">
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Services;