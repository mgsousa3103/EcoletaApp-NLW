import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";
import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="" />
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>
            Ajudamos pessoas a encontrarem pontos de coletas de resíduos de
            forma eficiente
          </p>

          <Link to="/create-point">
            <span>
              {" "}
              <FiLogIn />
            </span>
            Cadastre um ponto de coleta
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
