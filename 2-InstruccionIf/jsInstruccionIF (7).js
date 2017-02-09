function Mostrar()
{
//tomo la edad  
var x = document.getElementById("edad").value;
var z = document.getElementById("estadoCivil").value;

if( x<18 & z!="Soltero")
{
	var z = "Es muy pequeño para NO ser soltero";
	alert(z);
}
else
{
	var z = " estas bien solo"
	alert(z)
}

}//FIN DE LA FUNCIÓN