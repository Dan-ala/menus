import React from "react";
import { Link } from "react-router-dom";
import '../assets/footer.css'

const Footer = () => {
    return (
        <div id="footer">
          <div className='text-dark'>
            © 2024 Copyright:
            <Link className='text-dark' to={'#'}>
                Arepas la Piti Rellenas con Amor
            </Link>
          </div>
        </div>
      );
};

export default Footer;
