import React, { useReducer} from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import {REGISTRO_EXITOSO,
     REGISTRO_ERROR, 
     OCULTAR_ALERTA, 
     LOGIN_ERROR, 
     LOGIN_EXITOSO,
     USUARIO_AUTENTICADO,
     CERRAR_SESION
} from '../../types';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';
const AuthState = ({children}) => {

    //state inicial
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('get_token') : '',
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    //definicion del reducer
    const [state, dispatch] = useReducer(authReducer, initialState);

    //registrar nuevos usuarios
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/registro', datos);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.message //respuesta que tengo en el backend 
            })
            
        } catch (error) {
            // console.log(error.response.data.msg);
            dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.message //respuesta que tengo en el backend 
            })
        }
        //limpiar alerta
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        },3000);
    }


    //autenticar usuario
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/login', datos);
            // console.log(respuesta)
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data.token
            })
        } catch (error) {
            console.log(error.response.data.message);
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.message
            })
        }

         //limpiar alerta
         setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        },3000);
    }

    //retornar el usuario autenticado en base a jwt
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('get_token');
        if(token){
            tokenAuth(token)
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');
            if(respuesta.data.usuario){
                dispatch({
                    type: USUARIO_AUTENTICADO,
                    payload: respuesta.data.usuario
                })
            }
            
        } catch (error) {
            console.log(error.response.data.message);
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.message
            })
        }
    }

    //cerrar sesion
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }


    
    return ( 
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion
            }}
        >
            {children}
        </authContext.Provider>
     );
}
 
export default AuthState;
// import React, {useReducer} from 'react'
// import loginContext from './authContext'
// import loginReducer from './authReducer'
// import {
//     ENVIAR_LOGIN,
//     ENVIAR_REGISTRO,
//     ERROR_OPERACIONES
// } from '../../types';
// import clienteAxios from '../../config/axios';

// const LoginState = (props) => {
//     const initialState = {
//         login : {},
//         registro: null,
//         mensaje: null
//     }
//     const [state, dispatch] = useReducer(loginReducer, initialState);

//     const enviarLogin = async login => {
//         try {
//             await clienteAxios.post('/login', login);
//             dispatch({
//                 type: ENVIAR_LOGIN,
//                 payload: login
//             })
//         } catch (error) {
//             const alerta = {
//                 mensaje: error.response.data.Error,
//                 tipo: 'error'
//             }
//             dispatch({
//                 type: ERROR_OPERACIONES,
//                 payload: alerta
//             })
//         }
//     }
//     const enviarRegistro = async registracion => {
//         try {
//             await clienteAxios.post('/registro', registracion);
//             dispatch({
//                 type: ENVIAR_REGISTRO,
//                 payload: registracion
//             })
//         } catch (error) {
//             const alerta = {
//                 mensaje: error.response.data.Error,
//                 tipo: 'error'
//             }
//             dispatch({
//                 type: ERROR_OPERACIONES,
//                 payload: alerta
//             })
//         }
//     }
    
  
//     return (  
//         <loginContext.Provider
//             value={{
//                 login: state.login,
//                 registro: state.registro,
//                 mensaje: state.mensaje,
//                 enviarLogin,
//                 enviarRegistro
//             }}
//         >
//             {props.children}
//         </loginContext.Provider>
//     );
// }
 
// export default LoginState;