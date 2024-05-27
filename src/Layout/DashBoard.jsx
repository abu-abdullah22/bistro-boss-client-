import { FaCalendar, FaHome, FaRegBookmark, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { FaBagShopping } from "react-icons/fa6";
import { MdEmail, MdReviews } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {

    const [isAdmin] = useAdmin() ;

    return (
        <div className="flex container mx-auto">
            <div className="w-64 min-h-screen bg-base-300">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li><NavLink to={'/dashboard/adminHome'}> <FaHome></FaHome>AdminHome</NavLink></li>
                            <li><NavLink to={'/dashboard/addItems'}> <FaUtensils /> Add Items</NavLink></li>
                            <li><NavLink to={'/dashboard/manageItems'}> <TfiMenuAlt />Manage Items</NavLink></li>
                            <li><NavLink to={'/dashboard/manageBookings'}> <FaRegBookmark /> Manage Bookings</NavLink></li>
                            <li><NavLink to={'/dashboard/allUsers'}> <FaUsers /> All Users</NavLink></li>
                        </> : <>

                            <li><NavLink to={'/dashboard/reservation'}> <FaCalendar></FaCalendar> Reservation</NavLink></li>
                            <li><NavLink to={'/dashboard/userHome'}> <FaHome></FaHome>UserHome</NavLink></li>
                            <li><NavLink to={'/dashboard/cart'}> <FaShoppingCart></FaShoppingCart>MyCart</NavLink></li>
                            <li><NavLink to={'/dashboard/rating'}> <MdReviews /> Add Review</NavLink></li>
                            <li><NavLink to={'/dashboard/booking'}> <FaRegBookmark /> My Bookings</NavLink></li></>
                    }
                    <div className="divider"></div>
                    {/* shared navlinks */}
                    <li><NavLink to={'/'}> <FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={'/menu'}> <CiMenuBurger />  Menu</NavLink></li>
                    <li><NavLink to={'/order/salad'}> <FaBagShopping /> Orders</NavLink></li>
                    <li><NavLink to={'/contact'}> <MdEmail /> Contact</NavLink></li>
                </ul>

            </div>
            <div className="flex-1 p-8" >
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;