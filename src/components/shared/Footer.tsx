import BarberLogo from '../../assets/logo-barbearia.jpg';
import Whatshap from '../../assets/whatsapp.png';
const Footer = () => {
  return (
    <footer
      className="
        py-12
        text-center
        bg-white
        relative
      "
    >
      <div
        className="
          flex
          mb-8
          text-gray-600
          justify-center gap-6
        "
      >
        <span>Insta</span> <span>Face</span> <span>Twitter</span>
      </div>
      <img
        src={BarberLogo}
        alt="Barber Logo"
        className="
          w-24
          mx-auto mb-4
        "
      />
      
      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/73993061316"
        className="
          p-4
          bg-[#25d366]
          rounded-full
          shadow-lg transition-transform
          fixed bottom-6 right-6 hover:scale-110
        "
      >
        <img
          src={Whatshap}
          alt="WhatsApp"
          className="
            w-8 h-8
          "
        />
      </a>
    </footer>
  );
};
export default Footer;