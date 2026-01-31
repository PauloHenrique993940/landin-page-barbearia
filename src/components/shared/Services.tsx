import corteCabelo from "../../assets/corte.jpg";
import barbaRespeito from "../../assets/barber.jpg";
import corteCabelo2 from "../../assets/cortecabelo.jpg";

const Services = () => {
  const services = [
    { name: "Corte de cabelo", price: "R$ 45,00", img: corteCabelo },
    { name: "Barba de respeito", price: "R$ 35,00", img: barbaRespeito },
    { name: "Corte de cabelo", price: "R$ 45,00", img: corteCabelo2 }
  ];

  return (
    <section
      className="
        py-20 px-6
        bg-white
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          text-center
        "
      >
        <h2
          className="
            mb-4
            text-3xl font-bold
            uppercase
          "
        >Serviços</h2>
        <p
          className="
            max-w-2xl
            mb-12 mx-auto
            text-gray-600
          "
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        
        <div
          className="
            grid grid-cols-1
            gap-8
            md:grid-cols-3
          "
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="
                overflow-hidden
                bg-white
                rounded-lg border border-gray-100
                shadow-md
              "
            >
              <img
                src={s.img}
                alt={s.name}
                className="
                  object-cover
                  w-full h-64
                "
              />
              <div
                className="
                  flex
                  p-4
                  justify-between items-center
                "
              >
                <span
                  className="
                    font-bold text-sm
                  "
                >{s.name}</span>
                <span
                  className="
                    py-1 px-3
                    text-white text-xs
                    bg-black
                    rounded
                  "
                >{s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;