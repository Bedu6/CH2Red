import axios from 'axios';
import { TRAER_USUARIOS, ERROR, CARGANDO } from '../types/usuariosTypes.js';

export const traerUsuarios = () => async (dispatch) => {

	dispatch({ type: CARGANDO });

	try{
		const response = await axios.get('https://g6-ch2.herokuapp.com/api/usuarios/red');

		dispatch({
			type: TRAER_USUARIOS,
			payload: response.data
		});
	}
	catch(error){
		dispatch({
			type: ERROR,
			payload: error.message
		});
	}
};

export const cambioInput = (caso, texto) => (dispatch) => {
	dispatch({
		type: caso,
		payload: texto
	});
};