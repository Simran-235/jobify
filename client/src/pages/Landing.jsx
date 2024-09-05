// import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

// const StyledBtn = styled.button`
//   font-size: 1.5rem;
//   background: red;
//   color: white;
// `;
const Landing = () => {
  return (
    <div>
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby pork belly occupy pabst, hot chicken farm-to-table twee
              literally ramps aesthetic lumber vice salvia hoodie. Green juice
              umami waistcoat cray, roof party master cleanse yes plz ascot
              subway tile neutral milk hotel snackwave tonx copper mug you
              probably haven't heard of them vinyl.
            </p>
            <Link to="/register" className="btn register-link">
              Register
            </Link>
            <Link to="/login" className="btn">
              Login / Demo User
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </div>
  );
};

export default Landing;
