/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var x = parseInt (document.getElementById ("importe").value);
	var y = parseInt (document.getElementById ("resultado").value);

	var n = x - (x*25 / 100);
	document.getElementById('resultado').value = n;
}
