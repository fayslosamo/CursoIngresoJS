function Mostrar()
{
//tomo la edad  
var x = document.getElementById("edad").value;

if (x <= 17 & x >= 13)
{
	var x = ("adolecente");
	alert(x);
}
else
{
	var x = ("no es adolecente");
	alert(x);
}

}//FIN DE LA FUNCIÓN