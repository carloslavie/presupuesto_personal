import React, {useContext, useEffect} from 'react';
import Operaciones from './Operaciones';
import operacionesContext from '../context/operaciones/operacionesContext';

const ListadoOperaciones = ({traerOperaciones}) => {

    const operacionContext = useContext(operacionesContext);
    const {operaciones, obtenerOperaciones } = operacionContext;
    
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
   
    return ( 
        <>
            <h3 className="subtitulos">Listado de operaciones</h3>
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
        </>
     );
}
 
export default ListadoOperaciones;