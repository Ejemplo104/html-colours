'use strict'

var arrayColores = ["aquamarine","red","green","blue","orange","purple","brown","white","black"];

var indiceActual = 0;

function siguienteIndice(){

	indiceActual++;

	if(arrayColores.length == indiceActual) indiceActual = 0;
}

function actualizarColor(){

	$(".bloqueMostrarColores").css("background-color",arrayColores[indiceActual]);
}

function siguienteColor(){

	siguienteIndice();

	actualizarColor();
}

// Seccion principal

actualizarColor();

$("#buttonCambioColor").click(function(){

	siguienteColor();
})

/*setInterval(function(){

	siguienteColor();

},500);*/







