import Header from "../../components/header";

import WorkList from "../../components/worklist";

export default function Work() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="header-page">
          <h2>Work</h2>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="lead">
              I'm a UI developer based in Rio de Janeiro. I'm interested in
              design systems, web3, user/dev experience and under engineering.
            </p>

            <p className="lead">
              Previously, I worked at Anonimatta. Where I co-created Radix and
              led the developer team.
            </p>
          </div>
        </div>
      </div>

      <WorkList />
    </>
  );
}
