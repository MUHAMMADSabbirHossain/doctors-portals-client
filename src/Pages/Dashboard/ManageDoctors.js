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
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/doctor`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                });
                const data = await res.json()
                return data;
            }
            catch (error) {

            }
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }
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

    console.log(doctors, localStorage.getItem("accessToken"));

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
                                setDeletingDoctor={setDeletingDoctor}>
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