import React, { useState, useContext, useEffect } from 'react';
import authContext from '../context/auth/authContext';
import Error from './Error';



const Login = () => {
    const aContext = useContext(authContext);
    const { iniciarSesion, usuarioAutenticado } = aContext;
    
    const [ login, setLogin ] = useState({
        usuario : "",
        clave : ""        
    });

    const [ error, actualizarError ] = useState(false)
               
    const handleonChange = e =>{
        setLogin ({
            ...login,
            [e.target.name] : e.target.value,
            
        })
    }
                
    const { usuario, clave } = login;

    
   

    //Al realizar operacion
    const handleOnSubmit = e =>{
        e.preventDefault();
        
        if(usuario.trim() === "" || clave.trim() === ""){
            actualizarError(true);
            return;
        }
        
        actualizarError(false)
        iniciarSesion(login)
        console.log("este es el login",login)
        
        //Habilita las otras paginas
        
    }
    useEffect(() => {
        usuarioAutenticado();
    }, []);
    return ( 
        <form
            onSubmit = {handleOnSubmit}
        >
            <h3>Bienvenido</h3>
            <h2>Ingrese su usuario y password</h2>

            { error ? <Error mensaje={"Los campos son obligatorios"}/> : null } 

            <div className = "">
                <label>usuario</label>
                <input 
                    type = "text"
                    name = "usuario"
                    className = "u-full-width"
                    placeholder = "Ej. carlosfernandez@gmail.com"
                    value = {usuario}
                    onChange = {handleonChange}
                />
            </div>

            <div className = "">
                <label>password</label>
                <input 
                    type = "text"
                    name = "clave"
                    className = "u-full-width"
                    value = {clave}
                    onChange = {handleonChange}
                />
            </div>
            <div className="button">
                <input
                    type = "submit"
                    className = "btn waves-effect waves-light btn-small btn-block #0277bd light-blue darken-3 accent-4"
                    value = "Enviar"
                />
            </div>
               
        </form>
     );
}
 
export default Login;