import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import Image from "next/image";

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      scrollbar={{
        hide: true,
      }}
      modules={[Autoplay, Pagination, Scrollbar]}
      className=""
    >
      <SwiperSlide>
        {" "}
        <div className="w-full h-screen ">
          <Image
            src="/assets/image-slide1.png"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="w-fit h-fit"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="w-full h-screen">
          <Image
            src="/assets/image-slide2.png"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
