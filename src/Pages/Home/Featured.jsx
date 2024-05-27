import SectionTitle from "../../Components/SectionTitle";
import featured from '../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured my-20 text-white xl:px-40 xl:py-20" >
   
            <SectionTitle subHeading={'---Check it out---'} heading={<span className={'heading'}>FROM OUR MENU</span>}></SectionTitle>
            <div className="md:flex justify-center items-center py-8 md:px-16 gap-16 text-white mx-3">
                <div>
                    <img src={featured} className="md:w-[648px] lg:h-[400px]" alt="" />
                </div>
                <div className="md:w-[604px] space-y-3">
                    <p className="text-2xl">March 20, 2023</p>
                    <p className="uppercase text-2xl" >Where can I get some?</p>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="uppercase text-xl border-b-2 border-x-0 border-t-0 btn btn-outline text-white">Read More</button>
                </div>
            </div>
            </div>
    );
};

export default Featured;