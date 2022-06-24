export default function WorkList() {
  const worklist = [
    {
      name: "Disney+",
      url: "work/disneyplus",
      description: "Worklist 1 description",
      photo: "disneyplus.png",
    },
    {
      name: "MCP Performance",
      url: "work/disneyplus",
      description: "Worklist 1 description",
      photo: "disneyplus.png",
    },
    {
      name: "Disney+",
      url: "work/disneyplus",
      description: "Worklist 1 description",
      photo: "disneyplus.png",
    },
    {
      name: "Disney+",
      url: "work/disneyplus",
      description: "Worklist 1 description",
      photo: "disneyplus.png",
    },
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
                      <a href={`/${worklist.url}`} className="menu__item-link">
                        / {worklist.name}
                      </a>
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

          <div className="">
            <h3>
              Anonimatta, Universidade Federal do Rio de Janeiro, Adidas,
              Attech, Residencial do Marquês, MCP Performance, OLGA Music, CFB7
              Brasil, Academia Be Fit, Martinica Digital, Big Brain Education,
              RR Makeup
            </h3>
          </div>
        </section>
      </div>
    </>
  );
}
