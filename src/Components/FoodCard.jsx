/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";


const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart() ;



  const handleAddToCart = ()=> {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image
      }
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Added to the Cart",
              showConfirmButton: false,
              timer: 1500
            });
            refetch() ;
          }
        })

    } else {
      Swal.fire({
        title: "You're not logged in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in please"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      });
    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="item" /></figure>
      <p className="bg-[#111827] p-1 text-white absolute right-0 mr-4 top-4 px-4">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button onClick={handleAddToCart} className="uppercase text-xl border-b-2 border-x-0 border-t-0 btn btn-outline bg-[#E8E8E8] border-[#BB8506] hover:bg-[#111827] hover:text-[#BB8506] ">Add to cart </button>
        </div>

      </div>
    </div>
  );
};

export default FoodCard;