import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm, SubmitHandler } from "react-hook-form"


const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    if (user) {
        console.log(user);
    }

    const onSubmit = (data) => {
        console.log(data);
    };


    return (
        <section className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

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
                                <span className="label-text-alt">Bottom Left label</span>
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required.",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer.',
                                    }
                                })}
                                aria-invalid={errors.firstName ? "true" : "false"}
                            />
                            <label className="label">
                                {errors.password?.type === "required" && (
                                    <p className="label-text-alt text-red-500" role="alert">{errors.password.message}</p>
                                )}
                                {errors.passowrd?.type === "minLength" && (
                                    <p className="label-text-alt text-red-500" role="alert">{errors.password.message}</p>
                                )}
                                <span className="label-text-alt">Bottom Left label</span>
                            </label>
                        </div>


                        <input className="btn btn-accent text-white w-full max-w-xs" type="submit" value="Login" />
                    </form>

                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">
                        Continue with Google
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Login;