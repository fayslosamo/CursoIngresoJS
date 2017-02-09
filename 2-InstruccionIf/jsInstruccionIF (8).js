function Mostrar()
{
var x = document.getElementById("edad").value;
var z = document.getElementById("estadoCivil").value;

if( x>17 & z=="Soltero")
{
	var z = "Es soltero y no es menor";
	alert(z);
}

}//FIN DE LA FUNCIÓN