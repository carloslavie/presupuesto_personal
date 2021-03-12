import {
    OBTENER_OPERACIONES,
    AGREGAR_OPERACIONES,
    EDITAR_OPERACIONES,
    BORRAR_OPERACIONES,
    OPERACION_ACTUAL,
    ERROR_OPERACIONES    
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action) => {
    switch(action.type) {
        case OBTENER_OPERACIONES : 
            return {
                ...state,
                operaciones: action.payload
            }
        case AGREGAR_OPERACIONES :
            return {
                ...state,
                operaciones: [action.payload,...state.operaciones]
            }
        case OPERACION_ACTUAL :
            return {
                ...state,
                libroSeleccionado : action.payload
            }
            case BORRAR_OPERACIONES :
            return {
                ...state,
                libros: state.libros.filter(libro => libro.id !== action.payload),
                libro: null, 
            }
        case EDITAR_OPERACIONES :
            return {
                ...state,
                libros : state.libros.map(libro => libro.id === action.payload)
            }
        case ERROR_OPERACIONES:
            return {
                ...state,
                mensaje: action.payload
            }
        // case DEVOLVER_LIBRO :
        //     return {
        //         ...state,
        //         libro: state.libros.filter(libro => libro.persona_id === action.payload),
        //     }
        // case PRESTAR_LIBRO :
        //     return {
        //         ...state,
        //         libro: state.libros.filter(libro => libro.id === action.payload)
        //     }
        // case LIBRO_SIN_DATOS:
        //     return {
        //         ...state,
        //         libroSeleccionado: null
        //     }
        default: 
           return state;
    }
}