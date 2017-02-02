/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var x = parseInt (document.getElementById ("numeroUno").value);
	var y = parseInt (document.getElementById ("numeroDos").value);

	var n = x + y
	alert(n);
	}

// para sacar la informacion de las casillas por id y sumarlas por parseInt