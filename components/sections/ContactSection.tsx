"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      id="contato"
      className="relative w-full md:py-24 py-16 md:px-20 px-10"
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="grid md:grid-cols-2 grid-cols-1 gap-16"
      >
        <motion.div variants={fadeIn("left", "tween", 0.4, 1)}>
          <h2 className="md:text-5xl text-4xl font-semibold pb-8">
            Possibilidades Completas
          </h2>
          <p className="md:text-lg my-auto  text-gray-primary">
            "A automação libera as pessoas das tarefas repetitivas, permitindo
            que elas se concentrem no que realmente importa: a criatividade, a
            inovação e a busca por soluções cada vez mais eficientes."{" "}
          </p>

          <div className="flex justify-between">
            <Link href={"https://wa.link/lv1aol"} target="_blank">
              <Button
                size={"lg"}
                className="bg-red-primary text-white rounded-2xl mt-10 w-fit px-6"
              >
                Saiba mais
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div variants={fadeIn("right", "tween", 0.4, 1)}>
          <Image
            src="/assets/location.jpg "
            alt="placa"
            width={500}
            height={500}
            className="w-full rounded-xl"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
