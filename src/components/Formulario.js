import React, { useState, useContext, useEffect} from 'react';
import operacionesContext from '../context/operacionesContext';
import Error from '../components/Error'


const Formulario = () => {

    const operacionContext = useContext(operacionesContext);
    const { agregarOperacion } = operacionContext;

    const [ operacion, guardarOperacion ] = useState({
        concepto : "",
        monto : 0.00,
        fecha: null,
        tipo: ""

    });

    const [ error, actualizarError ] = useState(false)
               
    const handleonChange = e =>{
        guardarOperacion ({
            ...operacion,
            [e.target.name] : e.target.value,
            
        })
    }
    const handleonMonto = e =>{
        guardarOperacion ({
            ...operacion,
            [e.target.name] : parseInt(e.target.value, 10),
            
        })
    }
            
    const { concepto, monto, tipo } = operacion;

    
   

    //Al realizar operacion
    const handleOnSubmit = e =>{
        e.preventDefault();
        if(concepto.trim() === "" || monto <= 0 || tipo === ""){
            actualizarError(true);
            return;
        }
        actualizarError(false)
        agregarOperacion(operacion)
        
        guardarOperacion({
            concepto : "",
            monto : 0,
            fecha: null,
            tipo: ""
            })
        }
        // useEffect(() => {
            
        // }, [operacion])
        

    return ( 
        <form
            onSubmit = {handleOnSubmit}
        >
            <h3>Ingrese Operación</h3>

            { error ? <Error mensaje="Los campos son obligatorios"/> : null } 

            <div className = "">
                <label>Concepto</label>
                <input 
                    type = "text"
                    name = "concepto"
                    className = "u-full-width"
                    placeholder = "Ej. Transporte"
                    value = {concepto}
                    onChange = {handleonChange}
                />
            </div>

            <div className = "">
                <label>Monto</label>
                <input 
                    type = "number"
                    //step="0.01"
                    name = "monto"
                    className = "u-full-width"
                    placeholder = "Ej. 300"
                    value = {monto}
                    onChange = {handleonMonto}
                />
            </div>
            <div>
            <select 
                className="browser-default"
                name= "tipo"
                value= {tipo}
                onChange= {handleonChange}
            >
                <option value="">Seleccione</option>
                <option value="INGRESO">Ingreso</option>
                <option value="EGRESO">Egreso</option>                
            </select>
            </div>
            <div className="button">
                <input
                    type = "submit"
                    className = "waves-effect waves-light btn-small btn-block #0277bd light-blue darken-3 accent-4"
                    value = "Guardar Operación"
                />
            </div>
               
        </form>
     );
}
 
export default Formulario;