"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import ServicesCards from "./ServicesCards";
import { fadeIn } from "@/lib/motion";

const ServicesSlider = () => {
  return (
    <Swiper
      navigation={true}
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        // Configurações de slides com base na largura da tela
        320: {
          // Telas pequenas (smartphones)
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          // Telas médias (tablets)
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          // Telas grandes (desktops)
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      modules={[Navigation]}
      className="mySwiper"
    >
      <div className="px-6">
        <SwiperSlide>
          <motion.div variants={fadeIn("left", "tween", 0.4, 1)}>
            <ServicesCards
              title="Automação"
              description="Especialidade e qualidade ao oferecer soluções avançadas para proteção contra incêndios."
              imageUrl="/assets/automacao.png"
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <motion.div variants={fadeIn("left", "tween", 0.4, 1)}>
            <ServicesCards
              title="SDAI"
              description="Especialidade e qualidade ao oferecer soluções avançadas para proteção contra incêndios."
              imageUrl="/assets/sdai.png"
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <motion.div variants={fadeIn("left", "tween", 0.4, 1)}>
            <ServicesCards
              title="Montagem de Quadros"
              description="Conte conosco para garantir o sucesso e a excelência na montagem de quadros elétricos. "
              imageUrl="/assets/quadros.png"
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <motion.div variants={fadeIn("left", "tween", 0.4, 1)}>
            <ServicesCards
              title="Automação"
              description="Especialidade e qualidade ao oferecer soluções avançadas para proteção contra incêndios."
              imageUrl="/assets/automacao.png"
            />
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <motion.div variants={fadeIn("left", "tween", 0.4, 1)}>
            <ServicesCards
              title="Automação"
              description="Soluções personalizadas para automação industrial."
              imageUrl="/assets/automacao.png"
            />
          </motion.div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default ServicesSlider;