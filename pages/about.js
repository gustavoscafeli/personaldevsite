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
            <p className="lead">
              Im a UI developer based in Rio de Janeiro. Im interested in design
              systems, web3, user/dev experience and under engineering.
            </p>

            <p className="lead">
              Im currently building{" "}
              <a
                href="https://oicatalogo.com.br"
                target="_blank"
                rel="noreferrer"
              >
                oicatálogo
              </a>{" "}
              to help small busineses to expand.
            </p>

            <p className="lead">
              Previously, I worked at Anonimatta. Where I co-created Radix and
              led the developer team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
