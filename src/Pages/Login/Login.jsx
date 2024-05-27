import { useContext, useEffect, useState } from 'react';
import login from '../../assets/others/authentication2.png'
import bgImage from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const { signIn } = useContext(AuthContext);
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(res => {
                console.log(res.user);
                navigate(from, { replace: true })
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
            })



    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <div className='min-h-screen hero' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Helmet><title>Bistro Boss || Sign In</title></Helmet>
            <div className="xl:container xl:mx-auto card shadow-2xl p-20" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={login} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"><LoadCanvasTemplate></LoadCanvasTemplate></span>
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" placeholder="Type the characters above correctly" name='captcha' className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn bg-[#DAB884] text-white" value={'Sign In'} type="submit" />
                            </div>
                        </form>
                        <div className='flex flex-col items-center justify-center my-4'>
                            <p className='text-[#D1A054]'>New Here? <Link to={'/signup'}> <span className='font-medium'>Create an account</span> </Link></p>
                            <div className='my-3'>
                                <SocialLogin></SocialLogin>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;