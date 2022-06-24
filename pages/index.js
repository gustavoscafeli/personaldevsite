import Header from "../components/header";

import WorkList from "../components/worklist";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="hero">
        <div className="container">
          <h1>
            Im Gustavo Souza
            <br /> Frontend Developer
            <br /> based in Rio.
          </h1>
        </div>
      </div>

      <div className="container heading-section">
        <h2>Work</h2>
      </div>

      <WorkList />
    </div>
  );
}
