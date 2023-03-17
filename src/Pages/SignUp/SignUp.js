import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleSignUp = (data) => {
        console.log(data)
    }
    return (
        <div className='h-[800px] flex justify-center items-center ' style={{
            backgroundImage: `url("https://i.ibb.co/nbsRBZB/abstract-digital-grid-black-background.jpg")`
        }}>
            <div className='card w-96 p-7 shadow-xl text-center bg-pink-600'>
                <h2 className='text-xl text-white'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text"{...register("name", { required: "Name is required" })}  className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-white' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email"{...register("email", { required: "Email Address is required" })}  className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-white' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "password is required",
                                minLength: { value: 6, message: 'password must be 6 character' }
                            })}

                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-white' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-3' value='Sign Up' type="submit" />
                </form>
                <p className='text-white'>Already have an account<Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider text-white">OR</div>
                <button className='btn btn-outline w-full text-white'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;