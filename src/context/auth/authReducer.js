import {REGISTRO_EXITOSO, 
    REGISTRO_ERROR, 
    OCULTAR_ALERTA, 
    LOGIN_ERROR,
    LOGIN_EXITOSO,
    USUARIO_AUTENTICADO,
    CERRAR_SESION
} from '../../types';

export default (state, action) => {
switch(action.type) {

    case REGISTRO_EXITOSO:
    case REGISTRO_ERROR: 
    case LOGIN_ERROR:
        return {
        ...state,
        //paso  el payload del action desde authState
        mensaje: action.payload,
    }
    case LOGIN_EXITOSO:
        localStorage.setItem('get_token', action.payload)
        return {
            ...state,
            token: action.payload,
            autenticado: true
        }
    case USUARIO_AUTENTICADO:
        return {
            ...state,
            usuario: action.payload,
            autenticado: true
        }
    case OCULTAR_ALERTA:
        return {
            ...state,
            mensaje: null
        }
    case CERRAR_SESION:
        //limpiar localStorage
        localStorage.removeItem('get_token');
        return {
            ...state,
            usuario: null,
            token: null,
            autenticado: null,
        }
        default:
        return state;
}
}

// import {
//     ENVIAR_LOGIN,
//     ENVIAR_REGISTRO,
       
// } from '../../types';

// // eslint-disable-next-line import/no-anonymous-default-export
// export default (state,action) => {
//     switch(action.type) {
//         case ENVIAR_LOGIN :
//             return {
//                 ...state,
//                 login: [action.payload]
//             }
//         case ENVIAR_REGISTRO :
//             return {
//                 ...state,
//                 registro: [action.payload,...state.registro]
//             }
        
        
//         default: 
//            return state;
//     }
// }