import React from "react";
import '../styles/nav_bar.css';

const opciones = [
	'Opción uno',
	'Opción dos',
	'Opción tres',
	'Opción cuatro',
	'Opción cinco',
	'Opción seis'
]
    

export default function NavBar() {
	return (
		<nav className="nav-bar">
			{opciones.map((opcion, index) => (
				<a href="#" key={index} className="nav-opcion">{opcion}</a>
			))}
		</nav>
	);
}