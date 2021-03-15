import React, {useContext, useEffect} from 'react';
import Operaciones from './Operaciones';
import operacionesContext from '../context/operacionesContext';


const ListadoOperaciones = () => {

    const operacionContext = useContext(operacionesContext);
    const {operacion, operaciones, obtenerOperaciones } = operacionContext;

    useEffect(() => {
        obtenerOperaciones();
        
        
    }, [operacion])
    
    
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
                {operaciones.map(operation => (
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