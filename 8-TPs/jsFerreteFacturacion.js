/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var x = parseInt (document.getElementById ("PrecioUno").value);
	var y = parseInt (document.getElementById ("PrecioDos").value);
	var z = parseInt (document.getElementById ("PrecioTres").value);

	var n = x + y + z ;
	alert(n);
	
}
function Promedio () 
{
	var x = parseInt (document.getElementById ("PrecioUno").value);
	var y = parseInt (document.getElementById ("PrecioDos").value);
	var z = parseInt (document.getElementById ("PrecioTres").value);

	var n = ((x + y + z) / 3) ;
	alert(n);
}
function PrecioFinal () 
{
	var x = parseInt (document.getElementById ("PrecioUno").value);
	var y = parseInt (document.getElementById ("PrecioDos").value);
	var z = parseInt (document.getElementById ("PrecioTres").value);

	var n = (x + (x*21 / 100))+(y + (x*21 / 100))+(z + (x*21 / 100));
	alert(n);
}