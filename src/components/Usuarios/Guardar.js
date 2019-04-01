import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Icon, Button, Row } from 'react-materialize';
import * as usuariosActions from '../../actions/usuariosActions';
import { CAMBIO_NOMBRE, CAMBIO_APELLIDO_PATERNO,
    CAMBIO_APELLIDO_MATERNO, CAMBIO_EDAD } from '../../types/usuariosTypes';
import Cargando from '../General/Cargando';

class Guardar extends Component {

	componentDidMount() {
		if(this.props.match.params.id)
			this.props.traerUnComentario(this.props.match.params.id);
		else {
			this.props.cambioInput(CAMBIO_NOMBRE, '');
			this.props.cambioInput(CAMBIO_APELLIDO_PATERNO	, '');
			this.props.cambioInput(CAMBIO_APELLIDO_MATERNO	, '');
			this.props.cambioInput(CAMBIO_EDAD	, '');
		}
	}

	 localCambioInput = (event, caso) => {
		this.props.cambioInput(caso, event.target.value);
	};

	 localGuardar = (event) => {
		const cuerpo = {
			title: this.props.titulo,
			body: this.props.contenido
		}

		const id = this.props.match.params.id
		if(id)
		   this.props.editar(cuerpo, id);
		else
			this.props.agregar(cuerpo);
	};

render() {
	return (
		<div>
			<br />
			<div className='row'>
				<Input
					s={12}
					label="Título"
					value={ this.props.titulo }
					onChange={
						(event) => this.localCambioInput(event, CAMBIO_NOMBRE)
					}
				>
					<Icon>input</Icon>
				</Input>
				<Input
					s={12}
					label="Contenido"
					type='textarea'
					value={ this.props.contenido }
					onChange={
						(event) => this.localCambioInput(event, CAMBIO_APELLIDO_PATERNO)
					}
				>
					<Icon>account_circle</Icon>
				</Input>
			</div>
			
			{ this.props.mensaje }
			<div className='center-align'>
				<Button
					className={
						(this.props.cargando) ? 'disabled' : ''
					}
					waves='light'
					onClick={ this.localGuardar }
				>
					Guardar
					<Icon left>save</Icon>
				</Button>
			</div>

			{ (this.props.cargando) ? <Cargando /> : '' }
		</div>
	)
}
	
};

const mapStateToProps = ({ usuarioReducers }) => usuarioReducers;

export default connect(mapStateToProps, usuariosActions)(Guardar);