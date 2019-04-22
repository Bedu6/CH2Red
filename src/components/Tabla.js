import React from 'react';
import { Table } from 'react-materialize';

const Tabla = (props) =>(
	<div>
		<Table hoverable>
		  <thead>
		    <tr>
		      <th>Nombre</th>
		      <th>Apellido Paterno</th>	
		      <th>Apellido Materno</th>				      
		      <th>Edad</th>				      
		      <th>Ver</th>		
		      <th>Editar</th>		
		      <th>Eliminar</th>		
		    </tr>
		  </thead>
		   <tbody>
		    { props.desplegar }
		  </tbody>
		</Table>
	</div>
);

export default Tabla;