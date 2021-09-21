//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include props
import PropTypes from "prop-types";

//include your index.scss file into the bundle
import "../styles/index.scss";

function CounterTimer(props) {
	return (
		<div className="counter">
			<div className="calendario">
				<i className="fas fa-clock"></i>
			</div>
			<div className="cuatro">{props.digitCuatro}</div>
			<div className="tres">{props.digitTres}</div>
			<div className="dos">{props.digitDos}</div>
			<div className="uno">{props.digitUno}</div>
		</div>
	);
}
CounterTimer.propTypes = {
	digitCuatro: PropTypes.number,
	digitTres: PropTypes.number,
	digitDos: PropTypes.number,
	digitUno: PropTypes.number
};

let counter = 0;
setInterval(function() {
	const cuatro = Math.floor(counter / 1000);
	const tres = Math.floor(counter / 100);
	const dos = Math.floor(counter / 10);
	const uno = Math.floor(counter / 1);
	console.log(cuatro, tres, dos, uno);
	//render your react application
	counter++;

	ReactDOM.render(
		<CounterTimer
			digitUno={uno}
			digitDos={dos}
			digitTres={tres}
			digitCuatro={cuatro}
		/>,
		document.querySelector("#app")
	);
}, 1000);
