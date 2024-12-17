"use client";
import React from "react";
import HeroSlider from "../HeroSlider";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { slideInLeft } from "@/lib/motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="" className=" w-screen h-screen  m-0">
      <HeroSlider />
      {/* Texto sobre o slider */}
      <div className=" absolute xl:top-52 md:top-40 top-24 flex flex-col justify-center z-20 md:px-20 px-4 text-white">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={slideInLeft(0.2)}
          className="text-4xl md:text-6xl font-semibold pt-16 w-full"
        >
          Lorem ipsum dolor si amet, consecturscing elit
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="show"
          variants={slideInLeft(0.4)}
          className="md:text-lg  mt-10 max-w-4xl"
        >
          A Completa possui expertise nos setores de elétrica e automação em
          ambientes prediais e industriais. Buscamos constantemente soluções
          personalizadas e adequadas para atender às necessidades específicas de
          cada cliente, garantindo sua total satisfação.
        </motion.p>
        <motion.div initial="hidden" animate="show" variants={slideInLeft(0.6)}>
          <Link href={"https://wa.link/lv1aol"} target="_blank">
            <Button
              size={"lg"}
              className="bg-red-primary text-white rounded-2xl mt-10 w-fit px-6"
            >
              Saiba mais
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
