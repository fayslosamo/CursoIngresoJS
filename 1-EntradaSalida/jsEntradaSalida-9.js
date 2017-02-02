/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var x = parseInt (document.getElementById ("sueldo").value);
	var y = parseInt (document.getElementById ("resultado").value);

	var n = x + (x*10 / 100);
	document.getElementById('resultado').value = n;

	
}

//Para poder poner el resultado en la caja se tiene que hacer a la inversa como si quisieramos extraer el ID
