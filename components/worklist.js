export default function WorkList() {
  const worklist = [
    {
      name: "Disney+",
      url: "work/zapily",
      description: "Worklist 1 description",
      photo: "disneyplus.png",
    },
    {
      name: "Pokédex",
      url: "work/pokedex",
      description: "Worklist 1 description",
      photo: "pokemon.png",
    },
    {
      name: "Movier",
      url: "work/movier",
      description: "Worklist 1 description",
      photo: "movier.png",
    },
    // {
    //   name: "oimenu",
    //   url: "work/disneyplus",
    //   description: "Worklist 1 description",
    //   photo: "disneyplus.png",
    // },
  ];
  return (
    <>
      <div className="container">
        <section className="project">
          <div className="project-container">
            <div>
              <nav className="menu">
                {worklist.map((worklist) => (
                  <>
                    <div className="menu__item">
                      <a className="menu__item-link">/ {worklist.name}</a>
                      <img
                        className="menu__item-img"
                        src={worklist.photo}
                        alt={worklist.name}
                      />
                      <div className="marquee">
                        <div className="marquee__inner">
                          <span>{worklist.name}</span>
                          <span>{worklist.name}</span>
                          <span>{worklist.name}</span>
                          <span>{worklist.name}</span>
                        </div>
                      </div>
                    </div>

                    <div className="divider"></div>
                  </>
                ))}
              </nav>
            </div>
          </div>
        </section>

        <section className="clients">
          <div className="heading-section">
            <h2>Clients</h2>
          </div>

          <div className="clients-list">
            <h3>
              Anonimatta <i class="fa-solid fa-circle"></i> Universidade Federal
              do Rio de Janeiro <i class="fa-solid fa-circle"></i> Adidas{" "}
              <i class="fa-solid fa-circle"></i> Attech
            </h3>

            <h3>
              Residencial do Marquês <i class="fa-solid fa-circle"></i> MCP
              Performance <i class="fa-solid fa-circle"></i> OLGA Music{" "}
              <i class="fa-solid fa-circle"></i> CFB7 Brasil
            </h3>

            <h3>
              Academia Be Fit <i class="fa-solid fa-circle"></i> Martinica
              Digital <i class="fa-solid fa-circle"></i> Big Brain Education{" "}
              <i class="fa-solid fa-circle"></i> RR Makeup
            </h3>
          </div>
        </section>
      </div>
    </>
  );
}
