import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Icon, Button, Row } from 'react-materialize';
import * as usuariosActions from '../../actions/usuariosActions';
import { CAMBIO_NOMBRE, CAMBIO_APELLIDO_PATERNO,
         CAMBIO_APELLIDO_MATERNO, CAMBIO_EDAD     } from '../../types/usuariosTypes';
import Cargando from '../General/Cargando';

class Guardar extends Component {

	componentDidMount() {

		if(this.props.match.params.id){		
			this.props.traerUnUsuario(this.props.match.params.id);
		}
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

		const usuario = {
			nombre: this.props.nombre,
			pellidos: {
				paterno: this.props.apellido_paterno,
				materno: this.props.apellido_materno
			},
			edad: this.props.edad
		}

		const id = this.props.match.params.id

		if(id)
		   this.props.editar(usuario, id);
		else
			this.props.agregar(usuario);
	};

	render() {
		return (
			<div>
				<br />
				<div className='row'>
					<Input
						s={6}
						label="Nombre"
						value={ this.props.nombre }
						onChange={
							(event) => this.localCambioInput(event, CAMBIO_NOMBRE)
						}
					>
					</Input>

					<Input
						s={6}
						label="Apellido paterno"
						value={ this.props.apellido_paterno }
						onChange={
							(event) => this.localCambioInput(event, CAMBIO_APELLIDO_PATERNO)
						}
					>
					</Input>

					<Input
						s={6}
						label="Apellido materno"
						value={ this.props.apellido_materno }
						onChange={
							(event) => this.localCambioInput(event, CAMBIO_APELLIDO_MATERNO)
						}
					>
					</Input>

					<Input
						s={6}
						label="Edad"
						value={ this.props.edad }
						onChange={
							(event) => this.localCambioInput(event, CAMBIO_EDAD)
						}
					>
					</Input>
				</div>
				<div className="flex justify_center">
					<Button className="btn btn_cancelar mr">Cancelar</Button>
					<Button className="btn btn_guardar" onClick={ this.localGuardar } >Guardar</Button>
				</div>

				{ (this.props.cargando) ? <Cargando /> : '' }
			</div>
		)
	}	
};

const mapStateToProps = ({ usuariosReducer }) => usuariosReducer;

export default connect(mapStateToProps, usuariosActions)(Guardar);