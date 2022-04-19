import React from "react";

import logoImage from "../../assets/images/logo.svg";

import "./styles.css"

function Login() {
  return (
    <div id="container">
      <div className="logo-container-login">
        <img src={logoImage} alt="Proffy"/>
        <h2>Sua plataforma de estudos online</h2>
      </div>
    </div>
  );
};

export default Login;