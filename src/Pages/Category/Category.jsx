import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./category.css";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../component/SectionTitle/SectionTitle";

const Category = () => {
  return (
   <section>
     <div className="lg:w-8/12 w-11/12  mx-auto lg:mb-20 ">
     <SectionTitle 
     subHeading={"From 11:00am to 10:00pm"} 
     heading={"Order Online"}>
       
      
     </SectionTitle>
     <Swiper
  slidesPerView={4}
  spaceBetween={20}

  pagination={{
    clickable: true,
  }}
  breakpoints={{
    320: {
      slidesPerView: 3, 
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3, 
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }}
  modules={[Pagination]}
  className="mySwiper"
>
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="lg:text-4xl  text-2xl font-semibold text-white text-center -mt-14  ">SALADS</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="lg:text-4xl text-2xl font-semibold text-white text-center -mt-14 uppercase">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="lg:text-4xl text-2xl font-semibold text-white text-center -mt-14 uppercase">pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="lg:text-4xl text-2xl font-semibold text-white text-center -mt-14 uppercase">desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="lg:text-4xl text-2xl font-semibold text-white text-center -mt-14 uppercase">soups</h3>
        </SwiperSlide>
      </Swiper>
    </div>
   </section>
  );
};

export default Category;
