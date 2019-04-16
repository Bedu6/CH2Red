import axios from 'axios';
import { TRAER_USUARIOS, ERROR, CARGANDO, CAMBIO_NOMBRE, CAMBIO_APELLIDO_PATERNO,
         CAMBIO_APELLIDO_MATERNO, CAMBIO_EDAD, AGREGADO, EDITADO } from '../types/usuariosTypes.js';

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

export const traerUnUsuario = (id) => async (dispatch) => {
	dispatch({ type: CARGANDO });

	try{
		const response = await axios.get(`https://g6-ch2.herokuapp.com/api/usuarios/red/${id}`);

		dispatch({
			type: CAMBIO_NOMBRE,
			payload: response.data[0].nombre
		});

		dispatch({
			type: CAMBIO_APELLIDO_PATERNO,
			payload: response.data[0].apellidos.paterno
		});

		dispatch({
			type: CAMBIO_APELLIDO_MATERNO,
			payload: response.data[0].apellidos.materno
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

export const agregar = (usuario) => async (dispatch) => {

	dispatch({ type: CARGANDO });	
	
	try{

		console.log(usuario);

		const resp = await axios.post('https://g6-ch2.herokuapp.com/api/usuarios/red', usuario);		
		console.log(resp);

		dispatch({
			type: AGREGADO
		});		

		window.Materialize.toast(
			'Guardado correctamente', 
			1300
		);		
	}
	catch(error){
		console.log(error.message);
		window.Materialize.toast(
			'Problemas al guardar el usuario, intente de nuevo mas tarde', 
			2000
		);
		dispatch({ type: ERROR });
	}

};

export const editar = (usuario, id) => async (dispatch) => {

	dispatch({ type: CARGANDO });
	
	try{
		await axios.put(`https://g6-ch2.herokuapp.com/api/usuarios/red/${id}`, usuario);

		dispatch({ type: EDITADO });

		window.Materialize.toast(
			'Editado correctamente', 
			1300
		);
	}
	catch(error){
		window.Materialize.toast(
			'Problemas al editar su comentario, intente de nuevo mas tarde', 
			2000
		);
		dispatch({ type: ERROR });
	}

};