import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data)
    }

    return (
        <div className='h-[800px] flex justify-center items-center ' style={{
            backgroundImage: `url("https://i.ibb.co/nbsRBZB/abstract-digital-grid-black-background.jpg")`
        }}>
            <div className='card w-96 p-7 shadow-xl text-center bg-pink-600'>
                <h2 className='text-xl text-white'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-white' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'password must be 6 character' }
                            })}

                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text text-white">forgot password</span>
                        </label>
                        {errors.password && <p className='text-white' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                </form>
                <p className='text-white'>New to Medicare <Link className='text-secondary' to='/signup'>Create new Account</Link></p>
                <div className="divider text-white">OR</div>
                <button className='btn btn-outline w-full text-white'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;