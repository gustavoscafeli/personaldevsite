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
      </div>

      <WorkList />
    </>
  );
}
