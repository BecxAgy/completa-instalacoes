"use client";
import React, { useState } from "react";

const projects = [
  {
    id: 1,
    imgUrl: "/assets/aeroporto.jpeg", // Substitua com a imagem correta
    title: "Aeroporto de Recife",
    description: "Automação de Sistemas HVAC",
  },
  {
    id: 2,
    imgUrl: "/assets/igreja.jpeg",
    title: "IURD - Automação Predial",
    description: "Controle de toda iluminação da catedral",
  },
  {
    id: 3,
    imgUrl: "/assets/hospital.jpeg",
    title: "H. São Rafael",
    description: "Automação de sistema HVAC - Sala de Ressonância Magnética",
  },
];

const ProjectsCard = () => {
  const [activeCard, setActiveCard] = useState<number>(1); // Por padrão, o primeiro card está aberto

  return (
    <section className="flex md:flex-row flex-col justify-center items-center gap-6 ">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => setActiveCard(project.id)}
          className={`relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all duration-300 md:h-[478px] ${
            activeCard === project.id
              ? "md:min-w-[270px] h-[478px] w-full "
              : "md:max-w-[200px] h-[100px] w-full"
          }`}
        >
          <img
            src={project.imgUrl}
            alt={project.title}
            className={` w-full object-cover h-full`}
          />
          {activeCard === project.id && (
            <div className="absolute bottom-0 bg-white bg-opacity-90 py-10 px-6 w-full text-center">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProjectsCard;
