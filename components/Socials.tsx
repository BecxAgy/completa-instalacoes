import  Link  from "next/link";
import React from "react";
import { TbBrandInstagram, TbBrandWhatsapp } from "react-icons/tb";

const Socials = () => {
  return (
    <div className="flex gap-2 md:justify-center">
      <Link href={"https://wa.link/lv1aol"} target="_blank">
        <TbBrandWhatsapp className="text-red-primary h-8 w-8 hover:text-red-primary/50" />
      </Link>
      <Link
        href={"https://www.instagram.com/completainstalacoes/"}
        target="_blank"
      >
        <TbBrandInstagram className="text-red-primary h-8 w-8 hover:text-red-primary/50" />
      </Link>
    </div>
  );
};

export default Socials;
