import axios from 'axios';
import { TRAER_BENEFICIARIOS, ERROR, CARGANDO, CAMBIO_NOMBRE, CAMBIO_RELACION, 
    CAMBIO_EDAD, AGREGADO, CAMBIO_APELLIDO_PATERNO, CAMBIO_APELLIDO_MATERNO, USUARIO_ID, EDITADO } from '../types/beneficiariosTypes.js';

export const traerBeneficiarios = (id) => async (dispatch) => {

	dispatch({ type: CARGANDO });

	try{	
		const response = await axios.get(`https://g6-ch2.herokuapp.com/api/dependientes_usuario/red/${id}`);

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


export const traerUnUsuario = (id) => async (dispatch) => {
	dispatch({ type: CARGANDO });

	try{
		const response = await axios.get(`https://g6-ch2.herokuapp.com/api/usuarios/red/${id}`);

		dispatch({
			type: CAMBIO_NOMBRE,
			payload: `${response.data[0].nombre} ${response.data[0].apellidos.paterno} ${response.data[0].apellidos.materno}`
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
		await axios.post('https://g6-ch2.herokuapp.com/api/dependientes/red', beneficiario);		

		dispatch({
			type: AGREGADO
		});		

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

export const tarerUnBeneficiario = (id) => async (dispatch) => {
	dispatch({ type: CARGANDO });

	try{
		const response = await axios.get(`https://g6-ch2.herokuapp.com/api/dependientes/red/${id}`);		

		dispatch({
			type: CAMBIO_NOMBRE,
			payload: response.data[0].nombre_completo
		});

		dispatch({
			type: CAMBIO_RELACION,
			payload: response.data[0].dependencia
		});

		dispatch({
			type: CAMBIO_EDAD,
			payload: response.data[0].edad
		});
	}
	catch(error){
		dispatch({
			type: ERROR,
			payload: error.message
		});
	}
};

export const eliminar = (id) => async (dispatch) => {
	
	try{
		await axios.delete(`https://g6-ch2.herokuapp.com/api/dependientes/red/${id}`);

		window.Materialize.toast(
			'Eliminado correctamente', 
			1300
		);
	}
	catch(error){
		window.Materialize.toast(
			'Problemas al eliminar el dependiente, intente de nuevo mas tarde', 
			2000
		);
		dispatch({ type: ERROR });
	}

};


export const editar = (dependiente, id) => async (dispatch) => {

	dispatch({ type: CARGANDO });
	
	try{
		await axios.post(`https://g6-ch2.herokuapp.com/api/dependientes/red/${id}`, dependiente);

		dispatch({ type: EDITADO });

		window.Materialize.toast(
			'Editado correctamente', 
			1300
		);
	}
	catch(error){
		window.Materialize.toast(
			'Problemas al editar el dependiente, intente de nuevo mas tarde', 
			2000
		);
		dispatch({ type: ERROR });
	}

};
