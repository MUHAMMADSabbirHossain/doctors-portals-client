import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51OEFqvBXlv49BHVPSMGJfMXpd0qf6kyFlQOM8R3AkzUTZVBIEBxFYFok51Tpf2iWtFG9Y5OFA4sgIIvZTOlTOQVj00ShBjLQ7U');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery({
        queryKey: ["booking", id],
        queryFn: async () => {
            try {
                const res = await fetch(url,
                    {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                    });
                const data = await res.json()
                // console.log(data);
                return data;
            }
            catch (error) {

            }
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    };


    return (
        <section>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {appointment.patientName}</p>

                    <h2 className="card-title justify-center">Please Pay for: {appointment.treatment}</h2>

                    <p>Your Appointment: <span className="text-orage-700">{appointment.data} at  {appointment.slot}</span></p>

                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-auto">
                <form className="card-body">
                    <div className="form-control mt-6">

                        <Elements stripe={stripePromise}>
                            <CheckoutForm appointment={appointment} />
                        </Elements>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default Payment;