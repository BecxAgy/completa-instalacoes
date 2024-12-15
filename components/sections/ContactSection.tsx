import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const ContactSection = () => {
  return (
    <section className="relative w-full md:py-24 py-16 md:px-20 px-10">
      <div className="grid grid-cols-2 gap-16">
        <div>
          <h2 className="md:text-5xl text-4xl font-semibold pb-8">
            Possibilidades Completas
          </h2>
          <p className="md:text-lg my-auto  text-gray-primary">
            "A automação libera as pessoas das tarefas repetitivas, permitindo
            que elas se concentrem no que realmente importa: a criatividade, a
            inovação e a busca por soluções cada vez mais eficientes."{" "}
          </p>

          <div className="flex justify-between">
            <Button
              size={"lg"}
              className="bg-red-primary text-white rounded-2xl mt-10 w-fit px-6"
            >
              Saiba mais
            </Button>
          </div>
        </div>
        <div>
          <Image
            src="/assets/tecnology.png "
            alt="placa"
            width={500}
            height={500}
            className="w-fit rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
