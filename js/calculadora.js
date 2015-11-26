//VARIABLES GLOBALES------------------------------------------------------------------------------------------------
var RaizCalculada = false;
var PorcentajeCalculado = false;
var EntreXCalculado = false;
var NuevaOperacion = false;

//FUNCIONES----------------------------------------------------------------------------------------------------------

/**
 * [@description] Función que muestra las operaciones de suma, resta, división y multiplicación en la pantalla
 * [@param operador] Símbolo de la operación a mostrar
 **/
function MuestraOperacion(operador){

	if(RaizCalculada){//borra todo
		document.getElementById("resultado1").value = null;
		document.getElementById("resultado2").value = 0;
		RaizCalculada = false;
	}

	if(PorcentajeCalculado){//borra todo
		document.getElementById("resultado1").value = null;
		document.getElementById("resultado2").value = 0;
		PorcentajeCalculado = false;
	}

	if(EntreXCalculado){//borra todo
		document.getElementById("resultado1").value = null;
		document.getElementById("resultado2").value = 0;
		EntreXCalculado = false;
	}

	var rdo1 =  document.getElementById("resultado1").value;

	var rdo2 = document.getElementById("resultado2").value;	

	if(rdo1 == ''){//si esta vacio
		document.getElementById("resultado1").value = rdo2 + " " + operador + " ";
	}
	else{			
		CambioOperacion(operador);			
	}
	
	document.getElementById("resultado2").value = null; //limpio resultado2, nuevo numero para operar
}

/**
 * [@description] Función que si se pulsa dos operadores seguidos cambia el primer operador pulsado por el último
 * [@param operadorNuevo] Segundo operador pulsado
 **/
function CambioOperacion(operadorNuevo){

	var rdo1 = document.getElementById("resultado1").value;
	var rdo2 = document.getElementById("resultado2").value;

	//obtenemos el ultimo operador introducido
	var lon = rdo1.length;
	var opeIntroducido = rdo1.substring(lon - 2, lon - 1);

	var esOperador = false;

	//alert(opeIntroducido);
	if(opeIntroducido == '+' || opeIntroducido == '-' || opeIntroducido == '*' || opeIntroducido == '/')
	{
		esOperador = true;
	}

	if(esOperador && rdo2==''){//Si el operador introducido es distinto al que se quiere introducir, se cambia

		var nuevordo1 = rdo1.substring(0, lon - 2);//quitamos el operador introducido

		nuevordo1 += operadorNuevo + ' '; //escribimos el nuevo

		document.getElementById("resultado1").value = nuevordo1;
	}
	else{
		document.getElementById("resultado1").value = rdo1/*lo que tenía*/ + document.getElementById("resultado2").value + " " + operadorNuevo + " ";
	}

}

/**
 * [@description] Función que muestra los números en pantalla
 * [@param num] Número a mostar
 **/
function MuestraNumeros(num){

	if(RaizCalculada){//borra todo
		document.getElementById("resultado1").value = null;
		document.getElementById("resultado2").value = 0;
		RaizCalculada = false;
	}

	if(PorcentajeCalculado){//borra todo
		document.getElementById("resultado1").value = null;
		document.getElementById("resultado2").value = 0;
		PorcentajeCalculado = false;
	}

	if(EntreXCalculado){//borra todo
		document.getElementById("resultado1").value = null;
		document.getElementById("resultado2").value = 0;
		EntreXCalculado = false;
	}

	var rdo2 = document.getElementById("resultado2").value;

	if(rdo2 == "0"){

		if(num != 0)//Si el numero es 0, que no escriba otro 0
			document.getElementById("resultado2").value = num;
	}
	else{

		if(NuevaOperacion){
			document.getElementById("resultado2").value = num;
			NuevaOperacion = false;
		}
		else{
			rdo2 += num;
			document.getElementById("resultado2").value = rdo2;
		}
		
	}
}

/**
 * [@description] Función que calcula operación introducida en pantalla
 **/
function CalcularResultadoFinal(){//boton pulsado igual	

	var rdofinal = document.getElementById("resultado1").value + document.getElementById("resultado2").value;

	document.getElementById("resultado2").value = eval(rdofinal);	

	document.getElementById("resultado1").value = '';

	NuevaOperacion = true;
}

/**
 * [@description] Función que elimina el último número introducido
 **/
function EjecutaBotonFlecha(){
	
	var rto2 = document.getElementById("resultado2").value;
	var lon = rto2.length; //obtenemos longitud de resultado2

	if(lon == 1)//si solo existe un dígito pone 0
		document.getElementById("resultado2").value = 0;

	else//elimina el ultimo dígito
		document.getElementById("resultado2").value = rto2.substring(0, lon - 1);
}



/**
 * [@description] Función que pone a 0 el resultado
 **/
function EjecutaBotonCE(){
	document.getElementById("resultado2").value = 0;	
}


/**
 * [@description] Función que elimina inputext resultado1 y pone a 0 el imput text resultado2
 **/
function EjecutaBotonC(){
	document.getElementById("resultado1").value = null;
	document.getElementById("resultado2").value = 0;
}

/**
 * [@description] Función que cambia el signo del resultado
 **/
function EjecutaBotonMasMenos(){

	var rdo2 = document.getElementById("resultado2").value;

	var rdo2 = rdo2 * -1;

	document.getElementById("resultado2").value = rdo2;
}

/**
 * [@description] Función que evita que se escriba en la pantalla dos puntos seguidos
 **/
function MuestraPunto(){

	var rdo2 = document.getElementById("resultado2").value;
	var rdo2float;

	if(rdo2.indexOf('.') == -1){//Si devuelve -1, no está escrita la coma

		if(document.getElementById("resultado2").value == ""){
			rdo2 = rdo2 + '0';
		}
		
		rdo2 = rdo2 + ".";//Añadimos coma		

		document.getElementById("resultado2").value = rdo2;
	}
}

/**
 * [@description] Función que calcula la raíz cuadrada del número introducido 
 **/
function CalculaRaiz(){
	var rdo2 = document.getElementById("resultado2").value;

	if(rdo2 >= 0){
		var raiz = Math.sqrt(rdo2);

		document.getElementById("resultado1").value = "Raíz ("+rdo2+")";
		document.getElementById("resultado2").value = raiz;
	}
	else{
		document.getElementById("resultado1").value = "Raíz ("+rdo2+")";
		document.getElementById("resultado2").value = "Math error";
	}
	RaizCalculada = true;
}

/**
 * [@description] Función que calcula el porcentaje de un número
 **/
function CalculaPorcentaje(){

	var rdo2float = parseFloat(document.getElementById("resultado2").value);//Pasamos resultado2 a float

	var porcentaje = rdo2float / 100;//calculamos porcentaje
   	
    

    //alert("Número: "+ rdo2float);
    //alert("Porcentaje: "+ porcentaje);


    document.getElementById("resultado1").value += porcentaje;
    document.getElementById("resultado2").value = eval(document.getElementById("resultado1").value);
	PorcentajeCalculado = true; 
	
}

/**
 * [@description] Función que calcula el resultado de dividir de 1 entre el número introducido 
 **/
function CalculaDividirEntreX(){

	var X = parseFloat(document.getElementById("resultado2").value);//Pasamos resultado2 a float

	if(X != 0){
		var resultado = 1 / X;

		document.getElementById("resultado1").value = "1/"+X;

		document.getElementById("resultado2").value = resultado;	

	}
	else{//No se puede dividir entre 0
		document.getElementById("resultado1").value = "1/"+X;

		document.getElementById("resultado2").value = "Math error";
	}

	EntreXCalculado = true;
}

