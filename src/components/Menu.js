import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-materialize';

const Menu = (props) =>(
	<div>
		<Navbar left>
			<li>
				<Link to="/">Usuarios</Link>
			</li>
		</Navbar>
	</div>
);

export default Menu;