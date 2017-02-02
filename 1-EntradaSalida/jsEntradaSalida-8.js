/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var x = parseInt (document.getElementById ("numeroDividendo").value);
	var y = parseInt (document.getElementById ("numeroDivisor").value);

	var n = x % y;
	alert(n);
}

// para calcular es resto de una divicion se utiliza el %
