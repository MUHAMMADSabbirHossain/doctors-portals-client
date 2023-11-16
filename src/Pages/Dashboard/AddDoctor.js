import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { toast } from 'react-toastify';


const AddDoctor = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();

    /* const { data: services, isLoading } = useQuery("services", () => fetch(`http://localhost:5000/service`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    } */

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const imageStorageKey = `7e8cfab1a7e91d931a338d7c431d0e06`;

    /* 
    * 3 ways to store images
    * 1. Third party storage // free open public storage is ok for Practice project
    * 2. Your own storage in your own server (file system)
    * 3. Database: Mongodb
    * 
    * YUP: To validate file: Search: Yup file validation for react file form
    */

    const onSubmit = async (data) => {
        console.log("data", data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img,
                    }
                    // send to your database\
                    fetch(`http://localhost:5000/doctor`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                        body: JSON.stringify(doctor),
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log("doctor", inserted);
                            if (inserted.insertedId) {
                                toast.success("Doctor added Successfully.");
                                reset();
                            }
                            else {
                                toast.error("Failed to add the doctor.");
                            }
                        })
                }
                console.log("imgbb", result);
            });
    };

    return (
        <section>
            <h2 className='text-2xl my-6'>Add a New Doctor.</h2>
            <div className='flex h-screen justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is Required.",
                                },
                            })}
                            aria-invalid={errors.firstName ? "true" : "false"}
                        />
                        <label className="label">
                            {errors.name?.type === "required" && (
                                <p className="label-text-alt text-red-500" role="alert">{errors.name.message}</p>
                            )}
                            {/*  <span className="label-text-alt">Bottom Left label</span> */}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is Required.",
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email.',
                                }
                            })}
                            aria-invalid={errors.firstName ? "true" : "false"}
                        />
                        <label className="label">
                            {errors.email?.type === "required" && (
                                <p className="label-text-alt text-red-500" role="alert">{errors.email.message}</p>
                            )}
                            {errors.email?.type === "pattern" && (
                                <p className="label-text-alt text-red-500" role="alert">{errors.email.message}</p>
                            )}
                            {/*  <span className="label-text-alt">Bottom Left label</span> */}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select {...register("specialty")} className="select  input-bordered w-full max-w-xs">

                            {
                                services.map(service => <option
                                    key={service._id}
                                    value={service.name}>
                                    {service.name}
                                </option>)
                            }
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: "Image is Required.",
                                },
                            })}
                            aria-invalid={errors.firstName ? "true" : "false"}
                        />
                        <label className="label">
                            {errors.name?.type === "required" && (
                                <p className="label-text-alt text-red-500" role="alert">{errors.name.message}</p>
                            )}
                            {/*  <span className="label-text-alt">Bottom Left label</span> */}
                        </label>
                    </div>


                    <input className="btn btn-accent text-white w-full max-w-xs" type="submit" value="Add" />
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;