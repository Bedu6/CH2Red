import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Icon, Button, Row } from 'react-materialize';
import * as beneficiariosActions from '../../actions/beneficiariosActions';
import { CAMBIO_NOMBRE, CAMBIO_RELACION, CAMBIO_EDAD     } from '../../types/beneficiariosTypes';
import Cargando from '../General/Cargando';

class Guardar extends Component {

	componentDidMount() {
		if(this.props.match.params.id)
			this.props.traerBeneficiario(this.props.match.params.id);
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
		const beneficiario = {
			nombre: this.props.nombre,
			relacion: this.props.relacion,
			edad: this.props.edad
		}

		const id = this.props.match.params.id
		if(id)
		   this.props.editar(beneficiario, id);
		else
			this.props.agregar(beneficiario);
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
						label="Relacion"
						value={ this.props.relacion }
						onChange={
							(event) => this.localCambioInput(event, CAMBIO_RELACION)
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

const mapStateToProps = ({ beneficiariosReducer }) => beneficiariosReducer;

export default connect(mapStateToProps, beneficiariosActions)(Guardar);