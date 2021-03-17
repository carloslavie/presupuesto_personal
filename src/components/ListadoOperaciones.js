import React, {useContext, useEffect} from 'react';
import Operaciones from './Operaciones';
import operacionesContext from '../context/operaciones/operacionesContext';

import Balance from '../components/Balance';


const ListadoOperaciones = ({traerOperaciones}) => {

    const operacionContext = useContext(operacionesContext);
    const {operacion, operaciones, obtenerOperaciones } = operacionContext;
    //console.log(operaciones)
    useEffect(() => {
        obtenerOperaciones();        
        
    }, [])
    
    traerOperaciones(operaciones)

    //Para que liste solo los ultimos 10
    let operacionesDos = [];
    if(operaciones.length<10){
        for(let i=0;i< operaciones.length;i++){
            operacionesDos.push(operaciones[i])
        }
    }
    else {
    for(let i=0; i<10;i++){
        operacionesDos.push(operaciones[i])
    }
}
    //console.log(operacionesDos)
    return ( 
        <>
            <h3 className="">Listado de operaciones</h3>
            <table className="">
                <thead className="">
                    <tr>
                        <th>Concepto</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                        <th>Tipo</th>
                        <th>Editar</th>
                        <th>Eliminar</th>                        
                    </tr>
                </thead>
                {operacionesDos.map(operation => (
                    <Operaciones
                        key = {operation.id}
                        operation = {operation}  
                    />
                ))}
            </table>
            {/* <Balance
            operaciones = {operaciones}
            /> */}
        </>
     );
}
 
export default ListadoOperaciones;