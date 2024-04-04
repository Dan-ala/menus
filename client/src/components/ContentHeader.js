import React from "react";
import { Link } from "react-router-dom";
import '../assets/logo.png'
import '../assets/headers.css'
const ContentHeader = ({ titulo,titulo2}) => {

  const logo = require('../assets/logo.png');
  return (
    <div>
      <link
        rel="stylesheet"
        href="../assets/headers.css"
      />
      <section className="content-header">
        <div className="container-fluid">
          <div className="principal">
            <div className="header">
              <Link to={"/bebidas"}><img className="logo" src={logo} alt="Logo" /></Link>
              <h5 className="title">{titulo}</h5>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="menu">
            <div className="header2">
              <h5 className="title2">{titulo2}</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentHeader;
