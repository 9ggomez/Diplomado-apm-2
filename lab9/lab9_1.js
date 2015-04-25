/* Callbacks en JavaScript */

/* 
* Un Callback en JS es una función, que por
* parametro se le envia otra función, y la función que lo
* recibe, espera a que se ejecute esa función
*/

// Creación del Callback
function operaciones(suma, resta){
	suma(3,4);
	resta(5,3);
}


operaciones(
	function(a,b){
	alert(a+b);
},

	function(a,b){
	alert(a-b);
});

