import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  const [recommendedData, setRecommendedData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const code = import.meta.env.VITE_API_CODE1;
  useEffect(() => {
    const recommendedHandler = async () => {
      try {
        const response = await axios.get(`${apiUrl}?code=${code}&type="reco"`
        );
        // if (response) {
        //   console.log("RESPONSE is ", response);
        // }
        setRecommendedData(response.data.events);
      } catch (err) {
        console.log("Error While fetching Recommended Shows", err);
      }
    };
    recommendedHandler();
  }, []);

  return (
    <div
      className="w-full h-[70%] md:h-full bg-cover text-white relative font-inter bg-transparent mb-10"
      style={{ backgroundImage: "url('/Banner.svg')" }}
    >
      <div className="flex flex-col pt-20 md:pt-36 items-center h-full ">
        <h1 className="text-2xl md:text-6xl max-w-[300px] md:max-w-[1100px] md:leading-normal leading-relaxed text-center">
          Discover Exciting Events Happening Near You - Stay tuned for Updates !
        </h1>
        <p className="text-base max-w-[400px] md:max-w-[800px] text-center mt-8 md:mt-5 text-borderColor">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          labore distinctio obcaecati officia voluptatem ipsam doloribus qui
          dolorem voluptates possimus?
        </p>
      </div>

      {/* Recommended Shows */}
      <div className=" md:h-[300px] w-full mx-auto max-w-maxContentTab lg:max-w-maxContent z-10 absolute -bottom-72  md:-bottom-32 inset-x-0">
        <div className="text-white flex justify-around md:justify-between mb-4 ">
          <div className="text-[14px] md:text-[16px] font-semibold flex gap-1 md:gap-3 items-center ">Recommended Shows <FaArrowRightLong size={20}/></div>
          <div className="text-[14px] font-bold text-fontSubtitle underline leading-6 ">See all</div>
        </div>
        <Swiper
          spaceBetween={1}
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full "
        >
          {recommendedData?.map((ele, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Card idx={idx} ele={ele} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;