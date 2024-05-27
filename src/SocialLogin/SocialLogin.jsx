import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: "Login Successfull",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/')
                    })

            })
    }

    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn">
                <FaGoogle></FaGoogle> Google
            </button>
        </div>
    );
};

export default SocialLogin;