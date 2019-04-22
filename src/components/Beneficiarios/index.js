import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as beneficiariosActions from '../../actions/beneficiariosActions';
import Cargando from '../General/Cargando.js';
import Tarjeta from './Tarjeta';
import Fatal from '../General/Fatal.js';
import { Icon, Col, Row, Card, Button, Modal } from 'react-materialize';
import { Link } from 'react-router-dom';
import Guardar from './Guardar';

class index extends Component {

	componentDidMount(){				
		if(this.props.match.params.id){		
			this.props.traerUnUsuario(this.props.match.params.id);
		}

		this.props.traerBeneficiarios(this.props.match.params.id);
	}

  	desplegar = () =>(
	  this.props.beneficiarios.map((beneficiario, key) => (	

			
		<Col 
			s={6} 
			m={4} 
			key={key}>
			
			<Card
				className="white"
				textClassName="black-text"
				title={ beneficiario.nombre_completo }
				
			>
				Edad: { beneficiario.edad }
				<br/>
				Relacion: { beneficiario.dependencia }
				<br/>
				<Link to={`/beneficiarios/editar/${beneficiario._id}`} >
	  				<Icon>edit</Icon>
	  			</Link>
				<Link   onClick=
						{
							() =>{ 
									this.props.eliminar(beneficiario._id); 
								 } 
						} 
						to = { '/' }
						>
	  				<Icon>delete</Icon>
	  			</Link>
			</Card>
		</Col>
	  ))
	);


	ponerContenido = () => {
		
		if(this.props.cargando)
			return <Cargando/>;

		if(this.props.error)
			return <Fatal mensaje={this.props.error} />;

		return <Tarjeta desplegar={ this.desplegar() } />
	};

	render() {
	    return (
	      <div> 
	      	<h2>{this.props.nombre}</h2> 
	      	<div className="flex align_center">
		      	<h2>Dependientes</h2>     	
		        <Link 
		        	icon="add" 
		        	to={`/beneficiarios/guardar/${this.props.match.params.id}`} 
		        	className="btn waves-effect waves-light btn-large btn-floating red ml">
		      		<i className="material-icons" >add</i>
		      	</Link>
	      	</div>     

	      	<br/><br/>
	      	{ this.ponerContenido() }       	
	      </div>
	    );
	} //render
} //Class

const mapStateToProps = ({ beneficiariosReducer }) => beneficiariosReducer;

export default connect(mapStateToProps, beneficiariosActions)(index);