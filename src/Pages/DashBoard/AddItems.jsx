/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY ;
const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}` ;

const AddItems = () => {
  const { register, handleSubmit,reset } = useForm() ;
  const axiosPublic = useAxiosPublic() ;
  const axiosSecure = useAxiosSecure()

  const onSubmit = async (data) => {
   //image upload to imgbb and then get a url
   const imageFile = {image: data.image[0]}
   const res =  await axiosPublic.post(image_hosting_api, imageFile, {headers: {
    'Content-Type' : 'multipart/form-data'
   }}) ;
   if(res.data.success){
    const menuItem = {
      name : data.name , 
      category : data.category ,
      price: parseFloat(data.price),
      image: res.data.data.display_url ,
      recipe : data.recipe,
    }
    const menuRes = await axiosSecure.post('/items', menuItem)
    console.log(menuRes.data);
    if(menuRes.data.insertedId){
      Swal.fire({
        title: "Added",
        text: "An item has been added.",
        icon: "success"
    });
    reset() ;
    }
   }

  }
  return (
    <div>
      <SectionTitle heading={'ADD AN ITEM'} subHeading={`---What's new?---`} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input {...register("name", {required: true})} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
          </label>
          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select defaultValue={'default'} {...register("category", {required: true})} className="select select-bordered w-full">
                <option disabled value={'default'} >Select a category</option>
                <option>Salad</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Dessert</option>
                <option>Drinks</option>
              </select>
            </label>

            {/* price */}
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input {...register("price", {required: true})} type="number" placeholder="Price" className="input input-bordered w-full " />
            </label>
          </div>

          {/* recipe details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea {...register('recipe', {required: true})} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
          </label>

          <div className="form-control w-full my-6">
          <input {...register('image', {required: true})} type="file" className="file-input file-input-bordered w-full max-w-xs" />
          </div>

         <button className="btn text-white" style={{ background: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)' }}>Add Item <FaUtensils></FaUtensils></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;