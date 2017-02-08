function Mostrar()
{
//tomo la edad  
var x = document.getElementById("edad").value;

if(x>=18)
{
	var x = ("Usted es mayor de edad");
	alert(x);
}
else
{
	if(x<=17 & x>=13)
	{
		var x =("Usted es un adolecente");
		alert(x);
	}
	else
	{
		var x = ("Usted es un niño");
		alert(x);
	}
}
}//FIN DE LA FUNCIÓN