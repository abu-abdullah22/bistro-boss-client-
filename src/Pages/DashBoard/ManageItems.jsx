import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import { FiEdit } from "react-icons/fi";

const ManageItems = () => {
    const [menu] = useMenu() ;
    const handleDelete = item => {

    }
    return (
        <div>
            <SectionTitle subHeading={`---Hurry Up!---`} heading={'MANAGE ALL ITEMS'}></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            menu.map((item,index) =>
                                <tr key={item._id}>
                                    <th>{index + 1 }</th>
                                    <td><img className="w-[80px] rounded-md" src={item.image} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>

                                    <th> <button className="btn btn-ghost  bg-[#D1A054] text-white"><FiEdit /></button></th>

                                    <th> <button onClick={() => handleDelete(item)} className="btn btn-ghost  bg-[#B91C1C] text-white"><FaTrashAlt></FaTrashAlt></button></th>
                                </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageItems;