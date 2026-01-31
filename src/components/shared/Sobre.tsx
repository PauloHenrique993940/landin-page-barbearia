import img1 from "../../assets/img1.avif";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.webp";

const About = () => {
  return (
    <section
      className="
        py-20 px-6
        text-white
        bg-[#05070a]
      "
    >
      <div
        className="
          grid grid-cols-1
          max-w-7xl
          mx-auto
          gap-12 items-center
          md:grid-cols-2
        "
      >
        
        {/* MOSAICO DE IMAGENS */}
        <div
          className="
            h-[450px] w-full
            relative
          "
        >
          {/* Imagem Principal (Topo/Centro) */}
          <div
            className="
              z-20 overflow-hidden
              w-56 h-72
              rounded-sm border border-white/5
              shadow-2xl
              absolute top-0 left-1/2 -translate-x-1/2
            "
          >
            <img
              src={img1}
              alt="Barbeiro trabalhando"
              className="
                object-cover
                w-full h-full
              "
            />
          </div>
          
          {/* Imagem Inferior Esquerda */}
          <div
            className="
              z-10 overflow-hidden
              w-52 h-40
              rounded-sm border border-white/5
              shadow-xl
              absolute bottom-10 left-0
            "
          >
            <img
              src={img2}
              alt="Corte de cabelo"
              className="
                object-cover
                w-full h-full
              "
            />
          </div>

          {/* Imagem Inferior Direita */}
          <div
            className="
              z-30 overflow-hidden
              w-44 h-56
              rounded-sm border border-white/5
              shadow-xl
              absolute bottom-0 right-10
            "
          >
            <img
              src={img3}
              alt="Máquina de corte"
              className="
                object-cover
                w-full h-full
              "
            />
          </div>
        </div>

        {/* TEXTO INFORMATIVO */}
        <div
          className="
            flex flex-col
            gap-6
          "
        >
          <h2
            className="
              text-4xl font-bold tracking-tight
            "
          >Sobre</h2>
          
          <div
            className="
              max-w-lg
              space-y-4
              text-gray-400 leading-relaxed
            "
          >
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <p
            className="
              mt-2
              text-[#f2b35c] font-semibold text-sm
            "
          >
            Horário de funcionamento das 08:00 às 19:00
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;