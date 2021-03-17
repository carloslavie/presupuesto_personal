import React, { useState, useEffect } from 'react';


const Balance = ({traerBalance, nuevoOperaciones}) => {
        
    //console.log(operaciones);
    const [ balance, setBalance ] = useState(0);
    
    useEffect(() => {        
    
    //Para obtener el total de ingresos
   
    const resultadoIngresos = nuevoOperaciones.filter(opera=>(opera.tipo === "INGRESO"))
     //console.log(resultadoIngresos);
     //reduce
    let sumaIngresos=0;
    for(let i=0; i < resultadoIngresos.length; i++){
        sumaIngresos += resultadoIngresos[i].monto;    
    }
    //console.log(sumaIngresos);

    // Para obtener el total de egresos
     const resultadoEgresos = nuevoOperaciones.filter(opera=>(opera.tipo === "EGRESO"))
     
     let sumaEgresos=0;
     for(let i=0; i < resultadoEgresos.length; i++){
         sumaEgresos += resultadoEgresos[i].monto;    
     }
    //console.log(sumaEgresos);

    const total = sumaIngresos - sumaEgresos;

    setBalance(total);

    traerBalance(balance);
        
          
    }, [nuevoOperaciones])

    return ( 
        <p className="balance">Balance Total: ${balance}</p>
        
     );
}


export default Balance;


/*Patri Bottino19:05
momentjs
locale('ar').getDate('dd/mm/yyyy HH:mm)
Patri Bottino19:07
moment().format('MMMM Do YYYY, h:mm:ss a');
Patri Bottino19:11
Limit 10
Patri Bottino19:16
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

Patri Bottino19:17
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
*/