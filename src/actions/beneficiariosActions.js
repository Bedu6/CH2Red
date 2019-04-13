import axios from 'axios';
import { TRAER_BENEFICIARIOS, ERROR, CARGANDO, CAMBIO_NOMBRE, CAMBIO_RELACION, 
    CAMBIO_EDAD, AGREGADO } from '../types/beneficiariosTypes.js';

export const traerBeneficiarios = () => async (dispatch) => {

	dispatch({ type: CARGANDO });

	try{
		const response = await axios.get('https://g6-ch2.herokuapp.com/api/dependientes/red');

		dispatch({
			type: TRAER_BENEFICIARIOS,
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

export const traerUnComentario = (id) => async (dispatch) => {
	dispatch({ type: CARGANDO });

	try{
		const response = await axios.get(`https://g6-ch2.herokuapp.com/api/dependientes/red/${id}`);

		dispatch({
			type: CAMBIO_NOMBRE,
			payload: response.data.nombre
		});

		dispatch({
			type: CAMBIO_RELACION,
			payload: response.data.relacion
		});

		dispatch({
			type: CAMBIO_EDAD,
			payload: response.data.edad
		});
	}
	catch(error){
		dispatch({
			type: ERROR,
			payload: error.message
		});
	}
};

export const agregar = (beneficiario) => async (dispatch) => {

	dispatch({ type: CARGANDO });	
	
	try{
		await axios.post('https://g6-ch2.herokuapp.com/api/usuarios/red', beneficiario);		

		dispatch({
			type: AGREGADO
		});

		console.log(4);

		window.Materialize.toast(
			'Guardado correctamente', 
			1300
		);		
	}
	catch(error){
			
		window.Materialize.toast(
			'Problemas al guardar el beneficiario, intente de nuevo mas tarde', 
			2000
		);
		dispatch({ type: ERROR });
	}

};