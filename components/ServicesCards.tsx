import Image from "next/image";
import React from "react";

const ServicesCards = ({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) => {
  return (
    <div className="md:space-y-4 space-y-2 mx-4">
      <div className=" w-full rounded-xl">
        <Image
          src={imageUrl}
          width={1000}
          height={1000}
          alt="Automação"
          className=""
        />
      </div>
      <h4 className="md:text-xl text-lg font-semibold">{title}</h4>
      <p className="md:text-lg   text-gray-primary">{description}</p>
    </div>
  );
};

export default ServicesCards;
