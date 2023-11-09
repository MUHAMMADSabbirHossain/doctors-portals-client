import React from 'react';

const BookingModal = ({ treatment }) => {
    const { name } = treatment;
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="booking-modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg text-secondary">Booking For: {name}</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default BookingModal;