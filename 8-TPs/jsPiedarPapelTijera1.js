/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
function comenzar()
{
	 	x =Math.floor( Math.random()*3)+1;
	
		switch(x)
		{
			case 1:
				eleccionMaquina="piedra";
				break;
			case 2:
				eleccionMaquina="papel";
				break;
			case 3:
				eleccionMaquina="tijera";
				break;

		}
		



}
function piedra()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="piedra";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");		
	}
	else if(eleccionMaquina=="tijera")
	{
		alert(" ganaste.");
	}
	else
	{
		alert("ganó la Maquina.");
	}

mostarResultado();

}
function papel()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="papel";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");	

	}
	else if(eleccionMaquina=="piedra")
	{
		alert("ganaste.");
	}
	else
	{
		alert("ganó la Maquina.");
	}
mostarResultado();
}
function tijera()
{
	alert("la maquina selecciono: "+eleccionMaquina);
	eleccionHumano="tijera";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("empate.");
		
	}
	else if(eleccionMaquina=="papel")
	{
		alert("ganaste.");
	
	}
	else
	{
		alert("ganó la Maquina.");
		
	}
mostarResultado();
}

function mostarResultado()
{

document.getElementById('empatadas').value=ContadorDeEmpates + " partidas empatadas.";
document.getElementById('perdidas').value=ContadorDePerdidas + " partidas perdidas.";
document.getElementById('ganadas').value=ContadorDeGanadas + " partidas ganadas.";

comenzar();
}