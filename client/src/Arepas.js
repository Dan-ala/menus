import React, { useState, useEffect } from "react";
const Arepas = () => {
    const [arepas, setArepa] = useState([])

    useEffect(() =>{
      fetch('http://localhost:9000/products/arepas')
      .then((r) => r.json())
      .then((data) => {
        setArepa(data.arepas)
        }
      )
    },[]) //Only runs once  
  
    return (
      <div>
        <div>
        </div>
        {arepas.map((arepa) => ( 
          <div key={arepa.id}>{arepa.nombre}&nbsp;{arepa.p_unitario}</div>
          ))}
      </div>
    )
}

export default Arepas