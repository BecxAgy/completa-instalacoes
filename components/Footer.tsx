import Image from "next/image";
import React from "react";
import Socials from "./Socials";
import { sidebarLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full relative bg-black text-white  md:py-24 py-16 md:px-20 px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-2 w-fit">
          <Image
            src={"/assets/logo-white.svg"}
            width={150}
            height={31}
            alt="Logo branca Completa"
          />
          <Socials />
        </div>
        <div className="space-y-8 md:col-span-2">
          <h5 className="font-semibold text-lg">Seções</h5>
          <div className="grid md:grid-cols-3 grid-cols-2  gap-6">
            {sidebarLinks.map((link: any) => (
              <Link
                key={link.route}
                href={link.route}
                className="   hover:text-red-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h5 className="font-semibold text-lg">Localização</h5>
          <p>Av. São Rafael - São Marcos, Salvador - BA, 41250-015</p>
        </div>
      </div>
      <p className="text-center mt-16 text-sm">
        © 2024 Completa. Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
