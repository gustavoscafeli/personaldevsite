import Header from "../components/header";

export default function About() {
  return (
    <div className="about-page">
      <Header />
      <div className="container">
        <div className="header-page">
          <h2>About</h2>
        </div>

        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <img className="about-img" src="/about.jpg" />
          </div>
          <div className="col-md-6">
            <h3>Links</h3>

            <ul className="about-links">
              <li>
                Twitter:{" "}
                <a
                  href="https://twitter.com/gustavoscafeli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @gustavoscafeli
                </a>
              </li>
              <li>
                Github:{" "}
                <a
                  href="https://github.com/gustavoscafeli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @gustavoscafeli
                </a>
              </li>
              <li>
                Linkedin:{" "}
                <a
                  href="https://linkedin.com/in/gustavoscafeli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://linkedin.com/in/gustavoscafeli
                </a>
              </li>
            </ul>

            <h3>Bio</h3>
            <p className="lead">
              I&apos;m a software developer based in Rio de Janeiro.
            </p>

            <p className="lead">
              I&apos;m currently building{" "}
              <a href="https://zapily.com.br" target="_blank" rel="noreferrer">
                Zapily
              </a>
              , a digital catalog for small businesses with WhatsApp and
              Telegram integration.
            </p>

            <h3>Education</h3>

            <p className="lead">
              Gustavo gratuated from UFRJ with a degree in Applied Mathematics
              and is currently studying .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
