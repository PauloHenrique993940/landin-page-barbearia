import Unidade1 from '../../assets/unidades/unidade.jpg';
import Unidade2 from '../../assets/unidades/unidade2.webp'
const Units = () => {
  return (
    <section
      className="
        py-20 px-6
        bg-white
      "
    >
      <h2
        className="
          mb-12
          text-center text-2xl font-bold
          uppercase
          text-black
        "
      >Nossas Unidades</h2>
      <div
        className="
          grid grid-cols-1
          max-w-5xl
          mx-auto
          gap-8
          md:grid-cols-2
        "
      >
        {/* Unidade 1 */}
        <div
          className="
            overflow-hidden
            h-80
            rounded-xl
            relative
          "
        >
          <img
            src= {Unidade1}
            alt="Unidade 1"
            className="
              object-cover
              w-full h-full
            "
          />
          <div
            className="
              p-3
              text-white text-xs leading-relaxed
              bg-black/80
              absolute bottom-4 left-4 rounded
            "
          >
            Rua Itaguari, nº 23 <br /> Campinas Goiânia - GO
          </div>
        </div>
        {/* Unidade 2 */}
        <div
          className="
            overflow-hidden
            h-80
            rounded-xl
            relative
          "
        >
          <img
            src={Unidade2}
            alt="Unidade 2"
            className="
              object-cover
              w-full h-full
            "
          />
          <div
            className="
              p-3
              text-white text-xs leading-relaxed
              bg-black/80
              absolute bottom-4 left-4 rounded
            "
          >
            Rua do Comércio, nº 104 <br /> Guia Tutóia - MA
          </div>
        </div>
      </div>
    </section>
  );
};
export default Units;