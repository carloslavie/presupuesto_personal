import {
    OBTENER_OPERACIONES,
    AGREGAR_OPERACIONES,
    EDITAR_OPERACIONES,
    BORRAR_OPERACIONES,
    OPERACION_ACTUAL,
    ERROR_OPERACIONES    
} from '../../types';

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
                operacionSeleccionada : action.payload
            }
            case BORRAR_OPERACIONES :
            return {
                ...state,
                operaciones: state.operaciones.filter(operacion => operacion.id !== action.payload),
                operacion: null, 
            }
        case EDITAR_OPERACIONES :
            return {
                ...state,
                operaciones : state.operaciones.map(operacion => operacion.id === action.payload)
            }
        case ERROR_OPERACIONES:
            return {
                ...state,
                mensaje: action.payload
            }
        default: 
           return state;
    }
}