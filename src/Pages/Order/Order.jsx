import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import orderCover from '../../assets/shop/banner2.jpg'
import 'react-tabs/style/react-tabs.css';
import Cover from '../Shared/Cover';
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
const Order = () => {
    const [menu] = useMenu() ;
    const {category} = useParams() ;
    const categories = ['salad', 'soup', 'pizza', 'dessert', 'drinks'] ;
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);


    const dessert = menu.filter(i => i.category === 'dessert')
    const salad = menu.filter(i => i.category === 'salad');
    const pizza = menu.filter(i => i.category === 'pizza');
    const soup = menu.filter(i => i.category === 'soup');
    const drinks = menu.filter(i => i.category === 'drinks');
    return (
        <div>
            <Helmet><title>Bistro Boss || Order </title></Helmet>
            <Cover image={orderCover} description={'WANT TO TRY OUR FOOD?'} title={'ORDER FOOD'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index)=> setTabIndex(index)} className={'container mx-auto my-20'}>
                <div className='flex items-center justify-center my-8'>    
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                </div>
                
                <TabPanel>
                   <OrderTab items={salad} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza} /> 
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert} /> 
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks} /> 
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;