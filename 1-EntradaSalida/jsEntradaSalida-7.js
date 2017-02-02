/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var x = parseInt (document.getElementById ("numeroUno").value);
	var y = parseInt (document.getElementById ("numeroDos").value);

	var n = x + y;
	alert(n);
}

function restar()
{
	var x = parseInt (document.getElementById ("numeroUno").value);
	var y = parseInt (document.getElementById ("numeroDos").value);

	var n = x - y;
	alert(n);
}

function multiplicar()
{ 
	var x = parseInt (document.getElementById ("numeroUno").value);
	var y = parseInt (document.getElementById ("numeroDos").value);

	var n = x * y;
	alert(n);
}

function dividir()
{
	var x = parseInt (document.getElementById ("numeroUno").value);
	var y = parseInt (document.getElementById ("numeroDos").value);

	var n = x / y;
	alert(n);
}

