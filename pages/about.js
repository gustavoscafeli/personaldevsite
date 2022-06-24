import Header from "../components/header";

export default function About() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="header-page">
          <h2>About</h2>
        </div>

        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <img src="https://images.unsplash.com/photo-1548030415-e1eb1c684c9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          </div>
          <div className="col-md-6">
            <h3>Links</h3>

            <ul>
              <li>
                Twitter:{" "}
                <a
                  href="https://linkedin.com/in/gustavoscafeli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @gustavoscafeli
                </a>
              </li>
              <li>
                Github:{" "}
                <a
                  href="https://linkedin.com/in/gustavoscafeli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @gustavoscafeli
                </a>
              </li>
              <li>
                Website:{" "}
                <a
                  href="https://linkedin.com/in/gustavoscafeli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://scafeli.com
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
              I'm currently building{" "}
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
    </>
  );
}
