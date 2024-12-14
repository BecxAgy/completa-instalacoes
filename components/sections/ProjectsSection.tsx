"use client";
import React, { useState } from "react";
import ProjectsCard from "../ProjectsCard"; // Certifique-se de que este componente está funcionando corretamente.

export const projects = [
  {
    id: 1,
    imgUrl: "/assets/automacao.png",
    title: "Projeto 1",
    description: "Descrição do Projeto 1",
  },
  {
    id: 2,
    imgUrl: "/assets/sdai.png",
    title: "Projeto 2",
    description: "Descrição do Projeto 2",
  },
  {
    id: 3,
    imgUrl: "/assets/quadros.png",
    title: "Projeto 3",
    description: "Descrição do Projeto 3",
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <section className="relative   md:py-24 py-16 md:px-20 px-10">
      <div className=" pb-8">
        <h2 className="md:text-5xl text-4xl font-semibold">Principais Obras</h2>
      </div>

      <ProjectsCard />
    </section>
  );
};

export default ProjectsSection;
