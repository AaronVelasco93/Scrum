var numero = 0;
var cantidadSignos = 0;
var signos = '';
var resultado = document.querySelector("#operaciones");

// Agregar numeros
function operacion(e) {

	numero = e.innerHTML;
	cantidadSignos = 0;
	
	if (resultado.innerHTML == "0") {
		resultado.innerHTML = numero; //agrega el primer numero
	}else{
		resultado.innerHTML += numero; //agrega los demás numeros
	}
}
// Termina Agregar numeros

// Agregar operadores
function digitos (e) {

	cantidadSignos++;
	signos= e.innerHTML;

	if (cantidadSignos == 1) {
		if (resultado.innerHTML == 0) {
			resultado.innerHTML = 0;
		} else {
			resultado .innerHTML += signos;
		}
	}
}
//Termina agregar operadores

// Agregar decimal
function decimal() {
	resultado .innerHTML += ".";
}
// Termina agregar decimal

// Borrar calculadora
function borrar () {
	resultado.innerHTML = 0;
}
// Termina borrar calculadora

// Inicia fun Resultado
function result () {

	resultado.innerHTML = eval(resultado.innerHTML);
}
// Rermina fun Resultado