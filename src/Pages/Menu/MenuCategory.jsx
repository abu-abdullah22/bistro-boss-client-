import { Link } from "react-router-dom";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ items, category }) => {
    console.log(category);
    return (
        <div className="container mx-auto my-20">
            <div className="lg:grid md:grid-cols-2 gap-6">
                {
                    items?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center my-10">
                { category && <Link to={`/order/${category}`}>  <button className="uppercase text-xl border-b-2 border-x-0 border-t-0 btn btn-outline">Order Now</button></Link>}
            </div>
        </div>
    );
};

export default MenuCategory;