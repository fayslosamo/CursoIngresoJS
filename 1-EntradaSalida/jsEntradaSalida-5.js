/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{		
	var a = document.getElementById ('elNombre').value;
	var b = document.getElementById ("laEdad").value;

	alert("Usted se llama" + a);
    alert("tiene" + b);
}

//con el getelementbyId obtener los datos edad y nombre y mostrrlos con alert

