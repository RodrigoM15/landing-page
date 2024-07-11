import React from "react";
import '../styles/card_calendario.css';
import iconDownload from '../assets/download.svg'
import iconLocation from '../assets/location.svg'

export function Card_calendario({fecha, titulo, enlace, onClick, isSelected}) {
	function obtenerDiaMes(fecha){
		const mesesAbreviados = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
    
    const dia = fecha.slice(0, 2);
    const mes = parseInt(fecha.slice(2, 4), 10) - 1; // Restar 1 porque los meses en el array son de 0 a 11
    
    if (mes < 0 || mes > 11) {
        throw new Error("El mes proporcionado no es válido");
    }
    
    return {
        dia: parseInt(dia, 10),
        mes: mesesAbreviados[mes]
    };
	}

	const {dia, mes} = obtenerDiaMes(fecha);

	const cardStyle = isSelected ? 'card_calendario selected' : 'card_calendario';

	return (
    <div className={cardStyle} onClick={onClick}>
			<div className="fecha">
				<h3>{dia}</h3>
				<p>{mes}</p>
			</div>
			<div className="texto-calendario"> 
				<h3>{titulo}</h3>
				<div className="enlace-calendario">
					<img src={iconDownload}  className="icon" />
					<p className="enlace">Descargar archivos</p>
				</div>
			</div>

		</div>
	)
}

export function Card_calendario_principal ({imagen, descripcion, ubicacion}) {

	return(
		<div className="card_principal">
			<img src={imagen} alt={descripcion} className='evento-imagen' />
			<h3>{descripcion}</h3>
			<div className="ubicacion">
				<img src={iconLocation}  className="icon" />
				<p>{ubicacion}</p>
			</div>
		</div>
	)

}