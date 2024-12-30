import React from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed md:pt-8 pt-4 md:my-20 my-10 bg-opacity-60 backdrop-blur-3xl">
            <SectionTitle heading={<span  className='font-bold text-slate-700'>"Featured Item"</span>} subHeading="Check it out" />
            <div className=" md:flex justify-center items-center py-8 lg:px-40 mx-auto bg-slate-600 bg-opacity-40 lg:pb-20 md:pt-12 pt-6 gap-5 rounded-lg shadow-lg">
                <div>
                    <img src={featuredImg} alt="Featured Item" className=" lg:h-[350px] lg:w-[2400px] w-[350px] h-[200px] rounded-lg shadow-md mx-auto" />
                </div>
                <div className=" mt-4 md:mt-0">
                    <p className="text-2xl text-white font-semibold text-center lg:text-start">Aug 20, 2029</p>
                    <p className="text-2xl text-white font-semibold text-center lg:text-start">WHERE CAN I GET SOME?</p>
                    <p className="lg:text-xl text-base text-white text-center lg:text-start mt-4 px-6 lg:px-0">
                        Bistro Boss is your go-to destination for delicious dining with a flair for innovation. Our feature section highlights unique dishes and seasonal specials crafted to perfection. Each item is thoughtfully prepared using the finest, fresh ingredients. We pride ourselves on creating flavors that surprise and delight every palate. Bistro Boss offers a cozy ambiance perfect for gatherings or intimate meals. Our feature menu changes regularly, ensuring a new culinary experience every visit. From savory classics to creative twists, there's always something to savor. Come and discover why Bistro Boss is a favorite among food enthusiasts!
                    </p>
                    <div className="flex justify-center lg:justify-start mt-6">
                        <button className="btn btn-outline bg-slate-500  border-0 border-b-4 border-b-slate-950 text-white hover:text-slate-500 transition duration-300">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
