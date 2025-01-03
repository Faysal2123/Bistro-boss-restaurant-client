import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { MdReviews } from "react-icons/md";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading="What Our Client Say"
        heading="Testimonials"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide className="flex flex-col justify-center items-center text-center bg-base-300 lg:p-20 " key={review._id}>
            <div className=" flex flex-col items-center mx-24 my-16 space-y-2">
              <p ><MdReviews size={40}/></p>
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="lg:w-[850px]">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
