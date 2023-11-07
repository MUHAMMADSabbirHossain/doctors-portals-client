import React from 'react';
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from './Review';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "Dr. Smith is a fantastic physician! She's incredibly knowledgeable and takes the time to explain everything in a way that's easy to understand. I always leave her office feeling confident in my treatment plan. Highly recommend!",
            img: people1,
            location: "California",
        },
        {
            _id: 2,
            name: "Olivia Anderson",
            review: "I had a great experience with Dr. Johnson. She was very empathetic and made me feel comfortable throughout the entire appointment. Her staff was also friendly and efficient. I'll definitely be returning for future check-ups.",
            img: people2,
            location: "Washington, D.C.",
        },
        {
            _id: 3,
            name: "Sophia Williams",
            review: "Dr. Martinez was a true lifesaver. His quick diagnosis and effective treatment plan helped me recover from a serious illness. He's not only a brilliant doctor but also a caring and compassionate person. I can't thank him enough for his exceptional care.",
            img: people3,
            location: "New York",
        },
    ];


    return (
        <section className="px-12" >

            <div className="flex justify-between">
                <div >
                    <h3 className="text-secondary font-semibold ">Testtimonial</h3>
                    <h2 className="font-semibold text-2xl capitalize">What Our Patients Says</h2>
                </div>
                <div>
                    <img className="w-24 lg:w-48" src={quote} alt="" />
                </div>

            </div>

            <div className="grid grid-cold-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;