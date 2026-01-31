import { useState } from "react";
import backgroundHero from "../../assets/heroBarber.png"; // Substitua pelo caminho da sua imagem
import Modal from "./Modal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="
        flex overflow-hidden
        h-300 w-full
        relative items-center justify-center
      "
      >
        {/* Imagem de Fundo com Overlay */}
        <div
          style={{
            backgroundImage: `url(${backgroundHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="
          z-0
          absolute inset-0
        "
        >
          {/* Overlay escuro para dar destaque ao texto */}
          <div
            className="
            bg-black/70
            absolute inset-0
          "
          ></div>
        </div>

        {/* Conteúdo Central */}
        <div
          className="
          z-10
          max-w-4xl
          px-4 mx-auto
          text-center
          relative
        "
        >
          <h1
            className="
            mb-4
            text-white text-3xl font-bold tracking-tight leading-tight
            uppercase
            md:text-5xl
          "
          >
            Estilo é um reflexo da sua atitude e <br /> sua personalidade.
          </h1>
          
          <p
            className="
            mb-8
            text-gray-300 text-sm font-medium
            md:text-base
          "
          >
            Horário de funcionamento das 09:00 às 19:00
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="
            py-3 px-10
            text-black font-bold
            bg-[#f2b35c]
            rounded-md
            transition-all
            hover:bg-[#e0a24a] duration-300 transform hover:scale-105
          "
          >
            Agendar Horário
          </button>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;