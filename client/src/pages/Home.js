import React from "react";
import ContentHeader from "../components/ContentHeader";
import Footer from "../components/Footer";
import CategoryDashboard from "../components/CategoryDashboard";
const Home = () =>{

    return( 
        <div className="wrapper">
            <ContentHeader
                titulo={"AREPAS LA PITI RELLENAS CON AMOR ❤️"}
                titulo2={"MENU"}
            />
            <section className="content">
                <CategoryDashboard
                    categories={"CATEGORIAS"}
                />
            </section>
            <Footer></Footer>
        </div>
    )

}

export default Home