"use client";
import React, { useState } from "react";
import ProjectsCard from "../ProjectsCard"; // Certifique-se de que este componente está funcionando corretamente.
import { fadeIn, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <section className="relative   md:py-24 py-16 md:px-20 px-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className=" pb-8"
        >
          <h2 className="md:text-5xl text-4xl font-semibold">
            Principais Obras
          </h2>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.4, 1)}
          className=" pb-8"
        >
          <ProjectsCard />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
