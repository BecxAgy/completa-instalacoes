import React from "react";
import { TbBusinessplan } from "react-icons/tb";

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="">
      <div className="bg-red-primary/30 rounded-full p-2 w-fit">
        <div className="flex justify-center items-center bg-red-primary hover:bg-red-primary/90 h-16 w-16 rounded-full">
          {icon}
        </div>
      </div>
      <div className="pl-2">
        <h3 className="text-2xl font-semibold mt-6">{title}</h3>
        <p className="md:text-lg  text-gray-primary">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
