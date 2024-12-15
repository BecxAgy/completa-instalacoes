"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { navVariants } from "@/lib/motion";

const Navbar = () => {
  return (
    <motion.nav initial="hidden" whileInView="show" className="navbar">
      {/* Logo: sempre visível */}
      <Image src="/assets/logo.svg" alt="logo" width={78} height={56} />

      {/* Links e botão: visíveis apenas em telas grandes */}
      <div className="hidden md:flex gap-6">
        <Link className="hover:text-red-primary font-medium" href="#">
          Início
        </Link>
        <Link className="hover:text-red-primary font-medium" href="#sobre">
          Sobre nós
        </Link>
        <Link className="hover:text-red-primary font-medium" href="#servicos">
          Serviços
        </Link>
        <Link className="hover:text-red-primary font-medium" href="#obras">
          Obras
        </Link>
        <Link className="hover:text-red-primary font-medium" href="#contato">
          Contato
        </Link>
      </div>

      <div className="hidden md:block">
        <Button className="bg-red-primary text-white rounded-2xl">
          Começar
        </Button>
      </div>

      {/* Mobile Nav: visível apenas em telas pequenas */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </motion.nav>
  );
};

export default Navbar;
