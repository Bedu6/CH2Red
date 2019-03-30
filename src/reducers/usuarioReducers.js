import { TRAER_USUARIOS, ERROR } from '../types/usuariosTypes.js';

const INITIAL_STATE = {
    usuarios: [],
    cargando: false,
    error: '',
    nombre: '',
    apellidos: {
        paterno: '',
        materno: ''
    }, 
    edad: ''
};

export default (state = INITIAL_STATE, action) =>{

switch (action.type){
   
   case TRAER_COMENTARIOS:
       return{ ...state, comentarios: action.payload, cargando: false };
   
   case ERROR:
       return{ ...state, error: action.payload, cargando: false };

   case CARGANDO:
       return{ ...state, cargando: true};

   case CAMBIO_TITULO:
       return{ ...state, titulo: action.payload, cargando: false};

   case CAMBIO_CONTENIDO:
       return{ ...state, contenido: action.payload, cargando: false};

   case AGREGADO:
       return{ ...state, titulo: '', contenido: '', cargando: false, comentarios: []};

   case EDITADO:
       return{ ...state, cargando: false, comentarios: []};
   
   default: return state;
}
}