"use client";
import React from "react";
import HeroSlider from "../HeroSlider";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft } from "@/lib/motion";

const HeroSection = () => {
  return (
    <section className="  w-full h-screen z-10">
      <HeroSlider />
      {/* Texto sobre o slider */}
      <div className=" absolute xl:top-52 md:top-40 top-24 flex flex-col justify-center z-20 md:px-20 px-8 text-white">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={slideInLeft(0.2)}
          className="text-5xl md:text-6xl font-semibold pt-16"
        >
          Lorem ipsum dolor si amet, consecturscing elit
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="show"
          variants={slideInLeft(0.4)}
          className="text-lg mt-10 max-w-4xl"
        >
          A Completa possui expertise nos setores de elétrica e automação em
          ambientes prediais e industriais. Buscamos constantemente soluções
          personalizadas e adequadas para atender às necessidades específicas de
          cada cliente, garantindo sua total satisfação.
        </motion.p>
        <motion.div initial="hidden" animate="show" variants={slideInLeft(0.6)}>
          <Button
            size={"lg"}
            className="bg-red-primary text-white rounded-2xl mt-10 w-fit px-6"
          >
            Saiba mais
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;