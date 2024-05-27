import login from '../../assets/others/authentication2.png';
import bgImage from '../../assets/others/authentication.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            // Create user in Firebase Authentication
            const res = await createUser(data.email, data.password);
            console.log('Firebase user created:', res.user);

            // Update Firebase user profile
            await updateUserProfile(data.name, data.photo);

            // Prepare user info to be sent to the database
            const userInfo = {
                name: data.name,
                email: data.email
            };

            // Send user info to the database
            const response = await axiosPublic.post('/users', userInfo);
            console.log('User added to the database:', response.data);

            if (response.data.insertedId) {
                reset();
                // Show success message
                Swal.fire({
                    title: 'Sign Up Successful!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                }).then(() => {
                    // Navigate to home page after success message
                    navigate('/');
                });
            } else {
                // Handle case where user is not inserted into the database
                throw new Error('User was not inserted into the database');
            }
        } catch (error) {
            console.log('Error during sign up:', error);
            // Show error message
            Swal.fire({
                title: 'Error',
                text: error.message || 'Sign up failed. Please try again.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        }
    };

    return (
        <div className='min-h-screen hero' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Helmet><title>Bistro Boss || Sign Up</title></Helmet>
            <div className="xl:container xl:mx-auto card shadow-2xl p-20" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={login} alt="Authentication" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    {...register("name", { required: true })}
                                    placeholder="Name"
                                    className="input input-bordered"
                                />
                                {errors.name && <span className='text-sm text-red-800'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    {...register("email", { required: true })}
                                    placeholder="Email"
                                    className="input input-bordered"
                                />
                                {errors.email && <span className='text-sm text-red-800'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    {...register("password", { required: true, minLength: 6 })}
                                    placeholder="Password"
                                    className="input input-bordered"
                                />
                                {errors.password?.type === 'minLength' && <p className='text-sm text-red-800'>Password must be at least 6 characters long</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name='photo'
                                    {...register("photo", { required: true })}
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                />
                                {errors.photo && <span className='text-sm text-red-800'>This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#DAB884] text-white" value='Sign Up' type="submit" />
                            </div>
                        </form>
                        <div className='mx-12 mb-8'>
                            <p className='text-[#D1A054]'>Already registered? <Link to='/login'><span className='font-medium'>Go to log in</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
