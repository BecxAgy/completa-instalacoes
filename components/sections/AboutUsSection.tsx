"use client";
import React from "react";
import FeatureCard from "../FeatureCard";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { TbClockStar, TbShieldCheck } from "react-icons/tb";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
const AboutUsSection = () => {
  return (
    <section className="w-full  md:py-24 py-16 md:px-20 px-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex justify-between md:gap-32 gap-10 flex-col md:flex-row"
      >
        <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
          <div className="bg-red-primary w-20 h-[0.4rem] rounded-sm mb-8"></div>
          <h2 className="md:text-5xl text-3xl font-semibold">Quem somos?</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("left", "tween", 0.4, 1)}
          className="md:text-lg my-auto md:w-1/2 w-full text-gray-primary"
        >
          Somos uma empresa de engenharia especializada em soluções
          personalizadas de automação e elétrica que visa atender necessidades
          especificas de cada cliente, garantindo sua total satisfação.
        </motion.p>
      </motion.div>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 pt-20">
          <motion.div variants={fadeIn("left", "tween", 0.6, 1)}>
            <FeatureCard
              icon={
                <MdOutlineBusinessCenter className="text-white h-8 w-8 hover:text-slate-50" />
              }
              title="Visão"
              description="Ser referência no setores elétrica e automação, 
            reconhecidos pela excelência em serviços e aplicação da tecnologia."
            />
          </motion.div>
          <motion.div variants={fadeIn("left", "tween", 0.8, 1)}>
            <FeatureCard
              icon={
                <TbClockStar className="text-white h-8 w-8 hover:text-slate-50" />
              }
              title="Missão"
              description="Prover soluções inovadoras e eficientes, com foco na qualidade e satisfação do cliente."
            />
          </motion.div>
          <motion.div variants={fadeIn("left", "tween", 1, 1)}>
            <FeatureCard
              icon={
                <TbShieldCheck className="text-white h-8 w-8 hover:text-slate-50" />
              }
              title="Valores"
              description="Compromisso, ética, inovação e excelência em tudo o que fazemos."
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
