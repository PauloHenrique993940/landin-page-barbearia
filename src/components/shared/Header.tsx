import logoBarbearia from "../../assets/logo-barbearia.jpg";

const Header = () => {
  return (
    <header
      className="
        z-50
        w-full
        bg-[#05070a]
        border-b border-white/5
        fixed top-0 left-0 backdrop-blur-sm
      "
    >
      <div
        className="
          flex
          max-w-7xl
          mx-auto px-6 py-4
          items-center justify-between
        "
      >
        {/* LOGO */}
        <div
          className="
            flex
            items-center gap-3
          "
        >
          <img
            src={logoBarbearia}
            alt="Logo da Barbearia"
            className="
              object-contain
              w-12 h-12
            "
          />
        </div>

        {/* MENU CENTRALIZADO */}
        <nav
          className="
            hidden
            md:block
          "
        >
          <ul
            className="
              flex
              text-sm font-medium tracking-wide
              items-center gap-10
            "
          >
            {["Sobre", "Serviços", "Quem somos", "Contatos"].map((item) => (
              <li
                key={item}
                className="
                  text-gray-300
                  cursor-pointer transition-colors
                  duration-300 hover:text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full
                "
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* BOTÃO AGENDAR */}
        <div>
          <button
            className="
              py-2.5 px-6
              text-black font-bold text-sm
              bg-[#f2b35c]
              rounded-lg
              transition-all
              hover:bg-[#e0a24a] duration-300
            "
          >
            Agendar horário
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;