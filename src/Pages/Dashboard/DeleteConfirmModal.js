import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingModal }) => {
    const { name, email } = deletingDoctor;

    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deleted) {
                    toast.success(`Doctor: ${name} is deleted.`);
                    setDeletingModal(null);
                    refetch();
                }
            })

    }
    return (
        <section>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="delete-confirm-modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete ${name}?</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => handleDelete()} className='btn btn-xs btn-error'>delete</button>
                            <button className="btn btn-xs">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </section>
    );
};

export default DeleteConfirmModal;