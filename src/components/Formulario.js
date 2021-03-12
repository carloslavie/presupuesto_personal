import React, { useState } from 'react';

const Formulario = () => {


    const [ operacion, guardarOperacion ] = useState({
        concepto : "",
        monto : 0,
        tipo: ""

    });
    
        
    const handleonChange = e =>{
        guardarOperacion ({
            ...operacion,
            [e.target.name] : e.target.value
        })
    }
    
        
    const { concepto, monto, tipo } = operacion;


    //Al realizar operacion
    const handleOnSubmit = e =>{
        e.preventDefault();


    }

    
    return ( 
        <form
            onSubmit = {handleOnSubmit}
        >
            <h2>Ingrese Operación</h2>

            {/* { error ? <Error mensaje="Ambos campos son obligatorios"/> : null } */}

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
                    name = "monto"
                    className = "u-full-width"
                    placeholder = "Ej. 300"
                    value = {monto}
                    onChange = {handleonChange}
                />
            </div>
            <div>
            <select 
                className="browser-default"
                name= "tipo"
                value=""
                onChange= {handleonChange}
            >
                <option value="">Seleccione</option>
                <option value="ingreso">Ingreso</option>
                <option value="egreso">Egreso</option>                
            </select>
            </div>

                <input
                    type = "submit"
                    className = "button-primary u-full-width"
                    value = "Guardar Operación"
                />
        </form>
     );
}
 
export default Formulario;