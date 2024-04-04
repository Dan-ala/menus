import React, { useState, useEffect } from "react";
const Bebidas = () => {
    const [bebidas, setArepa] = useState([])

    useEffect(() =>{
      fetch('http://localhost:9000/products/bebidas')
      .then((r) => r.json())
      .then((data) => {
        setArepa(data.bebidas)
        }
      )
    },[]) //Only runs once  
  
    return (
      <div>
        {bebidas.map((bebida) => ( 
          <div key={bebida.id}>{bebida.nombre}&nbsp;{bebida.p_unitario}</div>
          ))}
      </div>
    )
}

export default Bebidas