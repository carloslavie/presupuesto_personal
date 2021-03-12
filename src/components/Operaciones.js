import React, { Fragment } from 'react';

const Operaciones = ({operation}) => {

    const { concepto, monto, fecha, tipo} = operation;
    return ( 
        <Fragment>
        <tbody>
          <tr>
            <td> {concepto} </td>
            <td> {monto} </td>
            <td> {fecha} </td>
            <td> {tipo} </td>
            
          </tr>                    
        </tbody>     
      </Fragment>
     );
}
 
export default Operaciones;