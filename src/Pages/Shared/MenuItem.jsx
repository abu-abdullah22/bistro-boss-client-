const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item 
    return (
        <div className="xl:flex space-x-2 mx-2">
            <img className="w-[118px] h-[104px]" style={{borderRadius: '0px 200px 200px 200px '}} src={image} alt="item" />
            <div>
                <h3 className="uppercase text-xl text-[#151515] dark:text-white">{name}------------------</h3>
                <p className="text-[#737373] md:w-[443px]">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;