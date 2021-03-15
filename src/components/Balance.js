import React, { useState, useEffect, useContext } from 'react';
import operacionesContext from '../context/operacionesContext';

const Balance = () => {

    const operacionContext = useContext(operacionesContext);
    const {operaciones, obtenerOperaciones } = operacionContext;

    console.log(operaciones);
    
    const [ balance, setBalance ] = useState(0);
    
    //Para obtener el total de ingresos
   
    const resultadoIngresos = operaciones.filter(opera=>(opera.tipo === "INGRESO"))
     console.log(resultadoIngresos);
     
    let sumaIngresos=0;
    for(let i=0; i < resultadoIngresos.length; i++){
        sumaIngresos += resultadoIngresos[i].monto;    
    }
    console.log(sumaIngresos);

    // Para obtener el total de egresos
     const resultadoEgresos = operaciones.filter(opera=>(opera.tipo === "EGRESO"))
     
     let sumaEgresos=0;
     for(let i=0; i < resultadoEgresos.length; i++){
         sumaEgresos += resultadoEgresos[i].monto;    
     }
     console.log(sumaEgresos);

     const total = sumaIngresos - sumaEgresos;

     console.log (total);

    useEffect(() => {
        
        obtenerOperaciones();
        
    }, [])
    return ( 
        <p>Balance Total: ${total}</p>
     );
}
 
export default Balance;