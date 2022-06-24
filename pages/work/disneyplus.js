import Header from "../../components/header";

export default function DisneyPlus() {
  return (
    <>
      <Header />

      <div className="work-page">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>LANDING PAGE</p>
              <h2>Luca, Disney+</h2>
            </div>
            <div className="col-md-6">
              <img src="/disneyplus.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
