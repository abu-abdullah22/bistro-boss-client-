import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth() ;
  const [cart] = useCart() ;
  const navlink =
    <div className="lg:flex items-center">
      <li> <Link className="mr-4" to={'/'}>Home</Link></li>
      <li><Link className="mr-4" to={'/menu'}>Our Menu</Link> </li>
      <li><Link className="mr-4" to={`/order/salad`}>Order</Link> </li>
      <li><Link className="mr-4" to={`/dashboard/cart`}><button className="btn ml-4"><FaShoppingCart></FaShoppingCart><div className="badge badge-secondary">+{cart.length}</div></button></Link> </li>

      {!user && <li><Link className="mr-4" to={`/login`}>Login</Link> </li>}
    </div>

  const handleLogOut = () => {
    logOut()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="navbar text-white bg-black bg-opacity-30 fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navlink}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-xl">Bistro Boss</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlink}
        </ul>
      </div>
      <div className="navbar-end">
        {user && <div className="flex gap-2 items-center">
          <img className="w-[50px] rounded-md" referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
          <button onClick={handleLogOut} className="uppercase btn text-white bg-transparent border-none hover:text-black hover:bg-white">Sign Out</button>
        </div>}

      </div>
    </div>
  );
};

export default Navbar;