import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu() ;
    const popular = menu.filter(i => i.category === 'popular')
    return (
        <section className="container mx-auto my-20">
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className="lg:grid md:grid-cols-2 gap-6 mt-12">
                {
                    popular?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center my-10">
                <button className="uppercase text-xl border-b-2 border-x-0 border-t-0 btn btn-outline">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;