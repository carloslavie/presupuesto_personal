import React, { useState, useEffect } from 'react';


const Balance = ({traerBalance, nuevoOperaciones}) => {
        
    
    const [ balance, setBalance ] = useState(0);
    
    useEffect(() => {        
    
    //Obtener el total de ingresos   
    const resultadoIngresos = nuevoOperaciones.filter(opera=>(opera.tipo === "INGRESO"))
    
    let sumaIngresos = 0;
    for(let i = 0; i < resultadoIngresos.length; i++){
        sumaIngresos += resultadoIngresos[i].monto;    
    }
    //Obtener el total de egresos
     const resultadoEgresos = nuevoOperaciones.filter(opera=>(opera.tipo === "EGRESO"))
     
     let sumaEgresos = 0;
     for(let i = 0; i < resultadoEgresos.length; i++){
         sumaEgresos += resultadoEgresos[i].monto;    
     }
    
     //Obtener balance
     const total = sumaIngresos - sumaEgresos;

    //Actualiza state de balance
    setBalance(total);

    //Pasa el balance al componente principal
    traerBalance(balance);
        
          
    }, [nuevoOperaciones])

    return ( 
        <p className="balance">Balance Total: ${balance}</p>        
     );
}


export default Balance;

