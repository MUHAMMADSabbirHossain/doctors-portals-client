import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    // const { data: users, isLoading, refetch } = useQuery("users", () => fetch(`http://localhost:5000/user`).then(res => res.json()));
    // if (isLoading) {
    //     return <Loading></Loading>
    // };

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
        })
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (

        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                index={index}
                                user={user}></UserRow>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;