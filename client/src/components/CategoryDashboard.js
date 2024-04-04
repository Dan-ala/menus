import React from "react";
import { Link } from "react-router-dom";
import '../assets/categoryDashboard.css'
import '../assets/img/arepas.jpg'
import '../assets/img/bebidas.jpg'
const CategoryDashboard = ({categories}) => {
    const arepasCategory = require('../assets/img/arepas.jpg');
    const bebidasCategory = require('../assets/img/bebidas.jpg')
    return (
        <div className="container">
            <h4>{categories}</h4>
            <div id="card" className="row text-center">
                <div>
                    <div>
                        <Link to={"/arepas"}><img src={arepasCategory} alt="Arepas" /></Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to={"/bebidas"}><img src={bebidasCategory} alt="Bebidas" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryDashboard
