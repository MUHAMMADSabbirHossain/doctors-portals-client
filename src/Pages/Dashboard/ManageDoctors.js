import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';
import DeleteConfirmModal from './DeleteConfirmModal';

const ManageDoctors = () => {

    const [deletingDoctor, setDeletingDoctor] = useState(null);
    // const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch(`http://localhost:5000/doctor`), {
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //     },
    // }).then(res => res.json())
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ["doctors"],
        queryFn: () =>
            fetch(`http://localhost:5000/doctor`, {
                headers: {
                    authorizaiton: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
                .then(res => res.json()),
    });

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(doctors, localStorage.getItem("accessToken"));
    /*  const [doctors, setDoctors] = useState([]);
     useEffect(() => {
         fetch(`http://localhost:5000/doctor`, {
             headers: {
                 authorization: `Bearer ${localStorage.getItem("accessToken")}`,
             },
         })
             .then(res => res.json())
             .then(data => {
                 setDoctors(data);
                 console.log(doctors);
             });
     }, []); */


    return (
        <div>
            <h2 className='text-2xl'>Manage Doctors: {doctors.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, index) => <DoctorRow
                                key={doctor._key}
                                doctor={doctor}
                                index={index}
                                /* refetch={refetch }*/
                                setDeletingDoctor={deletingDoctor}>
                            </DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <DeleteConfirmModal
                    deletingDoctor={deletingDoctor}
                    // refetch={refetch}
                    setDeletingDoctor={setDeletingDoctor}>

                </DeleteConfirmModal>
            }
        </div >
    );
};

export default ManageDoctors;