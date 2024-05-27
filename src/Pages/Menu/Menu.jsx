import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover";
import menuCover from '../../assets/menu/banner3.jpg'
import desserCover from '../../assets/menu/dessert-bg.jpeg'
import soupCover from '../../assets/menu/soup-bg.jpg'
import saladCover from '../../assets/menu/salad-bg.jpg'
import pizzaCover from '../../assets/menu/pizza-bg.jpg'
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const [menu] = useMenu() ;
    const dessert = menu.filter(i => i.category === 'dessert')
    const salad = menu.filter(i => i.category === 'salad');
    const pizza = menu.filter(i => i.category === 'pizza');
    const soup = menu.filter(i => i.category === 'soup');
    const offered = menu.filter(i => i.category === 'offered');

    return (
        <div>
            <Helmet><title>Bistro Boss || Menu</title></Helmet>
            <Cover image={menuCover} title={'OUR MENU'} description={'Would you like to try a dish?'}></Cover>
            <SectionTitle heading={`TODAY'S OFFER`} subHeading={`---Don't miss---`}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert */}
            <Cover image={desserCover} title={'DESSERTS'} description={'Would you like to try our dish?'}></Cover>
            <MenuCategory category={'dessert'}  items={dessert}></MenuCategory>

            {/* soup */}
            <Cover image={soupCover} title={'SOUP'} description={'Would you like to try our dish?'}></Cover>
            <MenuCategory category={'soup'}  items={soup}></MenuCategory>

            {/* pizza */}
            <Cover image={pizzaCover} title={'PIZZA'} description={'Would you like to try our dish?'}></Cover>
            <MenuCategory category={'pizza'}  items={pizza}></MenuCategory>

            {/* salad */}
            <Cover image={saladCover} title={'SALAD'} description={'Would you like to try our dish?'}></Cover>
            <MenuCategory category={'salad'}  items={salad}></MenuCategory>

           


            
         
        </div>
    );
};

export default Menu; 