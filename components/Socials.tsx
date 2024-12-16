import React from "react";
import { TbBrandInstagram, TbBrandWhatsapp } from "react-icons/tb";

const Socials = () => {
  return (
    <div className="flex gap-2 md:justify-center">
      <TbBrandWhatsapp className="text-red-primary h-8 w-8 hover:text-red-primary/50" />
      <TbBrandInstagram className="text-red-primary h-8 w-8 hover:text-red-primary/50" />
    </div>
  );
};

export default Socials;
