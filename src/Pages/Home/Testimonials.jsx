import SectionTitle from "../../Components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-12 container mx-auto">
            <SectionTitle heading={'TESTIMONIALS'} subHeading={'---What Our Clients Say---'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review =>
                        <SwiperSlide key={review._id}>
                            <div className="mx-24 my-16 flex flex-col items-center ">
                            
                                <Rating className="lg:w-[40px] lg:h-[40px]"
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="lg:h-[80px] lg:w-[80px] mt-[48px] mb-[40px]" />
                                <p className="text-xl text-[#444444] xl:w-[1096px] dark:text-white text-center">{review.details}</p>
                                <h3 className="text-3xl font-medium text-[#CD9003]">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;