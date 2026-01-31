const Team = () => {
  const team = [
    { name: "Lucas Abreu", role: "Barbeiro", img: "/lucas.jpg" },
    { name: "Pedro Marins", role: "Barbeiro", img: "/pedro.jpg" },
    { name: "Renato Barbosa", role: "Barbeiro", img: "/renato.jpg" }
  ];

  return (
    <section
      className="
        flex overflow-hidden
        py-16
        bg-[#0a0c10]
      "
    >
      <div
        className="
          flex
          px-10
          items-center
        "
      >
         <h2
           className="
             text-gray-500 tracking-[0.5em] font-bold whitespace-nowrap
             uppercase transform -rotate-90
           "
         >
           Nossa Equipe
         </h2>
      </div>
      <div
        className="
          grid grid-cols-1 flex-1
          pr-10
          gap-6
          md:grid-cols-3
        "
      >
        {team.map((m, i) => (
          <div
            key={i}
            className="
              overflow-hidden
              relative group rounded
            "
          >
            <img
              src={m.img}
              alt={m.name}
              className="
                object-cover
                w-full h-80
                transition-all
                grayscale group-hover:grayscale-0
              "
            />
            <div
              className="
                text-center
                absolute bottom-4 left-0 right-0
              "
            >
              <p
                className="
                  text-[#f2b35c] font-bold text-sm
                "
              >{m.name}</p>
              <div
                className="
                  flex
                  mt-2
                  text-white text-xs
                  opacity-70
                  justify-center gap-3
                "
              >
                <span>Insta</span> <span>Face</span> <span>Twitter</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Team;