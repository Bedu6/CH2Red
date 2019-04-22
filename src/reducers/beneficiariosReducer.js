import { TRAER_BENEFICIARIOS, ERROR, CARGANDO, CAMBIO_NOMBRE, CAMBIO_RELACION, 
    CAMBIO_EDAD, AGREGADO, EDITADO, USUARIO_ID } from '../types/beneficiariosTypes.js';
   
   const INITIAL_STATE = {
     beneficiarios: [],
     cargando: false,
     error: '',
     nombre: '',
     relacion: '',  
     edad: '',
     usuario_id: ''
   };
   
   export default (state = INITIAL_STATE, action) =>{
   
     switch (action.type){
        
        case TRAER_BENEFICIARIOS:
            return{ ...state, beneficiarios: action.payload, cargando: false };
        
        case ERROR:
            return{ ...state, error: action.payload, cargando: false };
   
        case CARGANDO:
            return{ ...state, cargando: true};
   
        case CAMBIO_NOMBRE:
            return{ ...state, nombre: action.payload, cargando: false};
   
        case CAMBIO_RELACION:
            return{ ...state, relacion: action.payload, cargando: false};

        case CAMBIO_EDAD:
            return{ ...state, edad: action.payload, cargando: false};
   
        case AGREGADO:
            return{ ...state, nombre: '', relacion: '', edad: '', cargando: false, beneficiarios: []};
   
        case EDITADO:
            return{ ...state, cargando: false, beneficiarios: []};

        case USUARIO_ID:
            return{ ...state, usuario_id: action.payload, cargando: false};
        
        default: return state;
     }
   }