import { TRAER_USUARIOS, ERROR, CARGANDO, CAMBIO_NOMBRE, CAMBIO_APELLIDO_PATERNO,
 CAMBIO_APELLIDO_MATERNO, CAMBIO_EDAD, AGREGADO, EDITADO } from '../types/usuariosTypes.js';

const INITIAL_STATE = {
  usuarios: [],
  cargando: false,
  error: '',
  nombre: '',
  apellido_paterno: '', 
  apellido_materno: '', 
  edad: ''
};

export default (state = INITIAL_STATE, action) =>{

  switch (action.type){
     
     case TRAER_USUARIOS:
         return{ ...state, usuarios: action.payload, cargando: false };
     
     case ERROR:
         return{ ...state, error: action.payload, cargando: false };

     case CARGANDO:
         return{ ...state, cargando: true};

     case CAMBIO_NOMBRE:
         return{ ...state, nombre: action.payload, cargando: false};

     case CAMBIO_APELLIDO_PATERNO:
         return{ ...state, apellido_paterno: action.payload, cargando: false};
     
     case CAMBIO_APELLIDO_MATERNO:
         return{ ...state, apellido_materno: action.payload, cargando: false};
     
     case CAMBIO_EDAD:
         return{ ...state, edad: action.payload, cargando: false};

     case AGREGADO:
         return{ ...state, nombre: '', apellido_paterno: '',
         apellido_materno:'', edad: '', cargando: false, usuarios: []};

     case EDITADO:
         return{ ...state, cargando: false, usuarios: []};
     
     default: return state;
  }
}