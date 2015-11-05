//VARIABLES 
var RaizCalculada = false;
var PorcentajeCalculado = false;
var EntreXCalculado = false;
var NuevaOperacion = false;

//FUNCIONES
function EjecutaOperacion(operacion){

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

	var rto1 =  document.getElementById("resultado1").value;

	var rto2 = document.getElementById("resultado2").value;	

	if(rto1 == ''){//si esta vacio
		document.getElementById("resultado1").value = rto2 + " " + operacion + " ";
	}
	else /*if(rto1.indexOf(operacion) == -1)*/{			
			CambioOperacion(operacion);			
	}
	
	document.getElementById("resultado2").value = null; //limpio resultado2, nuevo numero para operar
}


function CambioOperacion(operadorNuevo){

	var rto1 = document.getElementById("resultado1").value;
	var rto2 = document.getElementById("resultado2").value;

	//obtenemos el ultimo operador introducido
	var lon = rto1.length;
	var opeIntroducido = rto1.substring(lon - 2, lon - 1);

	var esOperador = false;

	//alert(opeIntroducido);
	if(opeIntroducido == '+' || opeIntroducido == '-' || opeIntroducido == '*' || opeIntroducido == '/')
	{
		esOperador = true;
	}

	if(esOperador && /*(opeIntroducido != operadorNuevo) &&*/ rto2==''){//Si el operador introducido es distinto al que se quiere introducir, se cambia

		var nuevorto1 = rto1.substring(0, lon - 2);//quitamos el operador introducido

		nuevorto1 += operadorNuevo + ' '; //escribimos el nuevo

		document.getElementById("resultado1").value = nuevorto1;
		//alert('if');
	}
	else{
		document.getElementById("resultado1").value = rto1/*lo que tenía*/ + document.getElementById("resultado2").value + " " + operadorNuevo + " ";
		//alert('else');
	}

}

function EjecutaNumeros(num){

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

	var rto2 = document.getElementById("resultado2").value;

	if(/*rto2 == null || */ rto2 == "0"){

		if(num != 0)//Si el numero es 0, que no escriba otro 0
			document.getElementById("resultado2").value = num;
	}
	else{

		if(NuevaOperacion){
			document.getElementById("resultado2").value = num;
			NuevaOperacion = false;
		}
		else{
			//rto2 = rto2 * 10; //Se pasa a decimal para poder concatenar más de un número pulsado
			rto2 += num;
			document.getElementById("resultado2").value = rto2;
		}
		
	}
}


function CalcularRtoFinal(){//boton pulsado igual	

	var rtofinal = document.getElementById("resultado1").value + document.getElementById("resultado2").value;

	document.getElementById("resultado1").value = rtofinal;

	document.getElementById("resultado2").value = eval(rtofinal);	

	//sleep(2000); //dormimos 2 segundo para visualizar la operación entera en resultado1

	document.getElementById("resultado1").value = '';

	NuevaOperacion = true;
}

//http://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(milliseconds) {

  var start = new Date().getTime();

  for (var i = 0; i < 1e7; i++) {

    if ((new Date().getTime() - start) > milliseconds){
    	break;
    }
  }

}

function EjecutaBotonFlecha(){
	
	var rto2 = document.getElementById("resultado2").value;
	var lon = rto2.length; //obtenemos longitud de resultado2

	if(lon == 1)//si solo existe un dígito pone 0
		document.getElementById("resultado2").value = 0;

	else//elimina el ultimo dígito
		document.getElementById("resultado2").value = rto2.substring(0, lon - 1);
}

//Pone a 0 resultado2
function EjecutaBotonCE(){
	document.getElementById("resultado2").value = 0;	
}

//Elimina resultado1 y pone a 0 resultado2
function EjecutaBotonC(){
	document.getElementById("resultado1").value = null;
	document.getElementById("resultado2").value = 0;
}

//Cambia el signo del resultado2
function EjecutaBotonMasMenos(){

	var rto2 = document.getElementById("resultado2").value;

	var rto2 = rto2 * -1;

	document.getElementById("resultado2").value = rto2;
}

function MuestraPunto(){

	var rto2 = document.getElementById("resultado2").value;
	var rto2float;

	//document.write(rto2.indexOf("."));
	if(rto2.indexOf('.') == -1){//Si devuelve -1, no está escrita la coma

		if(document.getElementById("resultado2").value == ""){
			rto2 = rto2 + '0';
		}
		
		rto2 = rto2 + ".";//Añadimos coma		

		//rto2float = parseFloat(rto2);
		document.getElementById("resultado2").value = rto2;
	}
}

function CalculaRaiz(){
	var rto2 = document.getElementById("resultado2").value;

	if(rto2 >= 0){
		var raiz = Math.sqrt(rto2);

		document.getElementById("resultado1").value = "Raíz ("+rto2+")";
		document.getElementById("resultado2").value = raiz;
	}
	else{
		document.getElementById("resultado1").value = "Raíz ("+rto2+")";
		document.getElementById("resultado2").value = "Math error";
	}
	RaizCalculada = true;
}

function CalculaPorcentaje(){

	var rto2float = parseFloat(document.getElementById("resultado2").value);//Pasamos resultado2 a float

	var porcentaje = rto2float / 100;//calculamos porcentaje
   	
    document.getElementById("resultado1").value += porcentaje;

    document.getElementById("resultado2").value = porcentaje;

	PorcentajeCalculado = true;
	
}

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

