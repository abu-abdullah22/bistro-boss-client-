import { Parallax } from 'react-parallax';
const Cover = ({image, title, description}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={image}
        bgImageAlt="menu"
        strength={-200}
        
    > 
          <div className="hero lg:min-h-[800px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-[88px] font-bold text-white ">{title}</h1>
                    <p className="mb-5 text-2xl text-white font-semibold">{description}</p>
                </div>
            </div>
        </div>
        {/* <div style={{ height: '200px' }} /> */}
    </Parallax>
     
    );
};

export default Cover;