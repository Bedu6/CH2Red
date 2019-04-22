import { combineReducers } from 'redux';
import usuariosReducer from './usuariosReducer.js';
import beneficiariosReducer from './beneficiariosReducer.js';

export default combineReducers({
    usuariosReducer,
    beneficiariosReducer
});