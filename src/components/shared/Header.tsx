import { useState } from "react";
import { Link } from "react-router-dom";
import logoBarbearia from "../../assets/logo-barbearia.jpg";
import Modal from "./Modal";
import Cart from "./Cart"; // Importar o componente do carrinho
import { useCart } from "../../context/CartContext"; // Importar o hook do carrinho

const menuItems = [
  { name: "Sobre", path: "/sobre" },
  { name: "Serviços", path: "/servicos" },
  { name: "Quem somos", path: "/equipe" },
  { name: "Contatos", path: "/contatos" },
];

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para o modal do carrinho
  const { getCartItemCount } = useCart(); // Pegar a contagem de itens do carrinho
  const itemCount = getCartItemCount();

  return (
    <>
      <header className="z-50 w-full bg-[#05070a] border-b border-white/5 fixed top-0 left-0 backdrop-blur-sm">
        <div className="flex max-w-7xl mx-auto px-6 py-4 items-center justify-between">
          {/* LOGO - Link para a Home */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoBarbearia}
              alt="Logo da Barbearia"
              className="object-contain w-12 h-12"
            />
          </Link>

          {/* MENU CENTRALIZADO */}
          <nav className="hidden md:block">
            <ul className="flex text-sm font-medium tracking-wide items-center gap-10">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 cursor-pointer transition-colors duration-300 hover:text-white relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* BOTÕES DA DIREITA */}
          <div className="flex items-center gap-4">
            {/* Ícone do Carrinho */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="Abrir carrinho de compras"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                  {itemCount}
                </span>
              )}
            </button>

            {/* BOTÃO AGENDAR */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="py-2.5 px-6 text-black font-bold text-sm bg-[#f2b35c] rounded-lg transition-all hover:bg-[#e0a24a] duration-300"
            >
              Agendar horário
            </button>
          </div>
        </div>
      </header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;