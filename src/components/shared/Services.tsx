import corteCabelo from "../../assets/corte.jpg";
import barbaRespeito from "../../assets/barber.jpg";
import corteCabelo2 from "../../assets/cortecabelo.jpg";
import { useCart, type ServiceItem } from "../../context/CartContext";

const Services = () => {
  const { addToCart } = useCart();

  const services: ServiceItem[] = [
    { id: 1, name: "Corte de cabelo", price: 45.00, img: corteCabelo },
    { id: 2, name: "Barba de respeito", price: 35.00, img: barbaRespeito },
    { id: 3, name: "Penteado moderno", price: 45.00, img: corteCabelo2 }
  ];

  return (
    <section
      className="
        py-20 px-6
        bg-white text-gray-800
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
        >Escolha um de nossos serviços premium e sinta a diferença. Qualidade e estilo em cada detalhe.</p>
        
        <div
          className="
            grid grid-cols-1
            gap-8
            md:grid-cols-3
          "
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="
                flex flex-col
                overflow-hidden
                bg-white
                rounded-lg border border-gray-100
                shadow-md
              "
            >
              <img
                src={service.img}
                alt={service.name}
                className="
                  object-cover
                  w-full h-64
                "
              />
              <div className="p-4 flex-grow flex flex-col">
                <div
                  className="
                    flex
                    mb-4
                    justify-between items-center
                  "
                >
                  <span
                    className="
                      font-bold text-lg
                    "
                  >{service.name}</span>
                  <span
                    className="
                      py-1 px-3
                      text-white text-sm font-semibold
                      bg-black
                      rounded
                    "
                  >R$ {service.price.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => addToCart(service)}
                  className="
                    mt-auto py-2 px-4
                    w-full
                    text-white font-bold
                    bg-blue-600
                    rounded-lg
                    transition-colors
                    hover:bg-blue-700 duration-300
                  "
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;