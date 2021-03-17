import React, {useReducer} from 'react'
import operacionesContext from './operacionesContext'
import operacionesReducer from './operacionesReducer'
import {
    OBTENER_OPERACIONES,
    AGREGAR_OPERACIONES,
    EDITAR_OPERACIONES,
    BORRAR_OPERACIONES,
    OPERACION_ACTUAL,
    ERROR_OPERACIONES
} from '../../types';
import clienteAxios from '../../config/axios';

const OperacionesState = (props) => {
    const initialState = {
        operaciones : [],
        operacion: null,
        operacionSeleccionada: null,    
        mensaje: null
    }
    const [state, dispatch] = useReducer(operacionesReducer, initialState);

    const agregarOperacion = async operacion => {
        try {
            await clienteAxios.post('/operaciones', operacion);
            dispatch({
                type: AGREGAR_OPERACIONES,
                payload: operacion
            })
        } catch (error) {
            const alerta = {
                mensaje: error.response.data.Error,
                tipo: 'error'
            }
            dispatch({
                type: ERROR_OPERACIONES,
                payload: alerta
            })
        }
    }
    const obtenerOperaciones = async () => {
        try {
            const contenido = await clienteAxios.get('/operaciones')
            dispatch({
                type: OBTENER_OPERACIONES,
                payload: contenido.data.respuesta
            })
        } catch (error) {
            console.log(error)
        }
    }
    const operacionActual = operacion => {
        dispatch({
            type: OPERACION_ACTUAL,
            payload: operacion
        })
    }
    const eliminarOperacion = async (operacionId) => {
        try {
            await clienteAxios.delete(`/operaciones/${operacionId}`);
            dispatch({
                type: BORRAR_OPERACIONES,
                payload: operacionId
            })
        } catch (error) {
            dispatch({
                type: ERROR_OPERACIONES,
                payload: error.response.data.Error
            })
        }
    }

    const actualizarOperaciones = async operacion => {
        try {
            const contenido = await clienteAxios.put(`/operaciones/${operacion.id}`, operacion);
            dispatch({
                type: EDITAR_OPERACIONES,
                payload: contenido.data.operacion
            })
        } catch (error) {
            console.log(error);
        }
    }
    // const devolverLibro = async libroId => {
    //     try {
    //         await clienteAxios.put(`/libro/devolver/${libroId}`);
    //         dispatch({
    //             type: DEVOLVER_LIBRO,
    //             payload: null,
    //         })
    //     } catch (error) {
    //         console.log(error);
    //         dispatch({
    //             type: ERROR_LIBRO,
    //             payload: error.response.data.Error
    //         })
    //     }
    // }
    // const prestarLibro = async libro => {
    //     try {
    //         const contenido = await clienteAxios.put(`/libro/prestar/${libro.id}`, libro);
    //         dispatch({
    //             type: PRESTAR_LIBRO,
    //             payload: contenido.data.libro
    //         })
    //     } catch (error) {
    //         dispatch({
    //             type: ERROR_LIBRO,
    //             payload: error.response.data.Error
    //         })
    //     }
    // }
    // const libroSinDatos = () => {
    //     dispatch({
    //         type: LIBRO_SIN_DATOS
    //     })
    // }
  
    return (  
        <operacionesContext.Provider
            value={{
                operaciones: state.operaciones,
                operacion: state.operacion,
                operacionSeleccionada: state.operacionSeleccionada,
                mensaje: state.mensaje,
                agregarOperacion,
                obtenerOperaciones,
                operacionActual,
                eliminarOperacion,
                actualizarOperaciones
                // devolverLibro,
                // prestarLibro,
                // libroSinDatos
            }}
        >
            {props.children}
        </operacionesContext.Provider>
    );
}
 
export default OperacionesState;