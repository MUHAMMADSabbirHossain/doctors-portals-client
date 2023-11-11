import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment }) => {

    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, "PP");
    const handleBooking = event => {
        event.preventDefault();

        const slot = event.target.slot.value;
        /*  const name = event.target.name.value;
         const email = event.target.email.value;
         const phone = event.target.phone.value;
         console.log(_id, slot, name, email, phone); */

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        };

        fetch(`http://localhost:5000/booking`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`);

                    // to close the  modal
                    // setTreatment(null);
                }
                else {
                    toast.error(`Already have an Appoinment on ${data.booking?.data} at ${data.booking?.slot}`);
                };
            });
    };


    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="booking-modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-accent absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg text-secondary">Booking For: {name}</h3>

                    <form
                        onSubmit={handleBooking}
                        className="mt-3 grid grid-cols-1 gap-2 justify-items-center"
                        action="">
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />

                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots?.map((slot, index) => <option
                                    key={index}
                                    value={slot}>
                                    {slot}
                                </option>)
                            }
                        </select>

                        <input type="text" name="name" disabled value={user?.displayName || ""} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ""} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Sbumit" className="btn btn-accent text-white font-bold text-lg input-bordered w-full max-w-xs" />

                    </form>

                    {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-accent text-white">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default BookingModal;