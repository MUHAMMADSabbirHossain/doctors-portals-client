import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img, email } = doctor;


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <button className='btn btn-xs btn-error' onClick={() => {
                    setDeletingDoctor(doctor);
                    document.getElementById('delete-confirm-modal').showModal()
                }}>Delete</button>


            </td>
        </tr>
    );
};

export default DoctorRow;