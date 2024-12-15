"use client";
import Image from "next/image";
import React from "react";
import ServicesCards from "../ServicesCards";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import ServicesSlider from "../ServicesSlider";

const ServicesSection = () => {
  return (
    <section className=" relative w-full bg-[#F6F6F6]  md:py-24 py-16 md:px-20 px-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="md:text-5xl md:pl-14 text-4xl font-semibold space-y-2 pb-8">
          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            <h2>Nossos </h2>
            <h2>Principais Serviços</h2>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <ServicesSlider />
      </motion.div>
    </section>
  );
};

export default ServicesSection;
