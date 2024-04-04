import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Arepas from "./Arepas";
import Bebidas from "./Bebidas";
import Home from "./pages/Home";
function App(){
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/arepas" exact element={<Arepas/>}/>
          <Route path="/bebidas" exact element={<Bebidas/>}/>
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App