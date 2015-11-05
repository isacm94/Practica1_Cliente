//ARRAY
var Contacto; //{nom: '', apellidos: '', telefono: '', fechanac: ''};

var Agenda = new Array();

//FUNCIONES
function CargaDatosIniciales(){
	Contacto = new Array(4);

	Contacto[0] = 'Luís';
	Contacto[1] = 'López Pérez'
	Contacto[2] = '963258741';
	Contacto[3] = '29/03/1994';
	
	Agenda.push(Contacto);//guarda Contacto

	MostrarResumen();

	Contacto = new Array(4);

	Contacto[0] = 'Juan';
	Contacto[1] = 'Pérez López'
	Contacto[2] = '969555123';
	Contacto[3] = '23/12/1995';
	
	Agenda.push(Contacto);//guarda Contacto

	getUnContacto(1);//Mostramos primer contacto

	MostrarResumen();

	document.getElementById('fin').innerHTML = Agenda.length;//mostramos el final del resgistro

}
function GuardarContacto(){

	if(ValidacionCorrecta()){
		Contacto = new Array(4);

		Contacto[0] = document.getElementById('nombre').value;
		Contacto[1] = document.getElementById('apellidos').value;
		Contacto[2] = document.getElementById('telefono').value;
		Contacto[3] = document.getElementById('fechanac').value;
		
		Agenda.push(Contacto);//guarda Contacto

		document.getElementById('fin').innerHTML = Agenda.length;//Actualzia el fin de registro

		MostrarResumen();
	}

}

function MostrarResumen(){

	// Creamos nodos de tipo Element 
    var tr = document.createElement("tr"); 
    var td = document.createElement("td"); 
	
	var contenido = document.createTextNode(Agenda.length); // Crear nodo de tipo Text 	

	td.appendChild(contenido); // Añadimos al td el contenido
	tr.appendChild(td); //Añadimos al tr el td

	for(var j = 0; j < 4; j++){ //Recorre cada Contacto
		
		var td = document.createElement("td"); 

		// Crear nodo de tipo Text 
		var contenido = document.createTextNode(Contacto[j]); 

		// Añadir el nodo Text como hijo del nodo 	Element 
		td.appendChild(contenido); 

		tr.appendChild(td); 

	}

	// Añadir el nodo Element como hijo de la pagina 
	document.getElementById('tbodyresumen').appendChild(tr);

	/*
	for(var i = 0; i < Agenda.length; i++){
		alert('Agenda '+ i +': '+ Agenda[i]);
	}*/
}

function NuevoContacto(){
	document.getElementById('nombre').value = "";
	document.getElementById('apellidos').value = "";
	document.getElementById('telefono').value = "";
	document.getElementById('fechanac').value = "";
}

function getContacto(){

	var pos = document.getElementById('numEntrada').value;
	pos--;//en el array es una posición menos

	if(pos >= 0 && pos < Agenda.length){//existe la posición en el array

		var contacto = new Array(4);
		contacto = Agenda[pos];//recuperamos el contacto del array
		
		//alert(contacto);
		//Pasamos el contacto al formulario
		document.getElementById('nombre').value = contacto[0];
		document.getElementById('apellidos').value = contacto[1];
		document.getElementById('telefono').value = contacto[2];
		document.getElementById('fechanac').value = contacto[3];
	}
	else{
		document.getElementById('numEntrada').value = "";
		alert("¡ERROR! No existe el contacto");

	}
}

function getUnContacto(pos){
	
	pos--;//en el array es una posición menos

	var contacto = new Array(4);
	contacto = Agenda[pos];//recuperamos el contacto del array
	
	//alert(contacto);
	//Pasamos el contacto al formulario
	document.getElementById('nombre').value = contacto[0];
	document.getElementById('apellidos').value = contacto[1];
	document.getElementById('telefono').value = contacto[2];
	document.getElementById('fechanac').value = contacto[3];
	
}

//REGISTRO
function BotonSiguiente(){

	var pos = document.getElementById('inicio').innerHTML;
	
	pos++;//siguiente posicion


	if(pos <= Agenda.length){
		document.getElementById('inicio').innerHTML = pos;
		getUnContacto(pos);
	}
}

function BotonAnterior(){

	var pos = document.getElementById('inicio').innerHTML;
	
	pos--;//siguiente posicion


	if(pos > 0){
		document.getElementById('inicio').innerHTML = pos;
		getUnContacto(pos);
	}
}

function BotonInicioRegistro(){

	document.getElementById('inicio').innerHTML = 1;
	getUnContacto(1);
}

function BotonFinRegistro(){

	document.getElementById('inicio').innerHTML = Agenda.length;
	getUnContacto(Agenda.length);
}


//Validacion
function ValidacionCorrecta(){

	var correcto = true;

	var LabelError = '<span class="label label-danger"> <span class="glyphicon glyphicon-exclamation-sign"></span> Error</span>';

	if(FormularioVacio(LabelError))
		correcto = false;
	else {
		cajanombreerror.innerHTML = "";
		cajaapellidoserror.innerHTML = "";
		cajatelefonoerror.innerHTML = "";
		cajafechanacerror.innerHTML = "";
	}

	
	if(! ValidaTelefono(LabelError))
		correcto = false;

	return correcto;
}
function FormularioVacio(LabelError){

	var correcto = false;

	if(document.getElementById('nombre').value == ""){

		cajanombreerror.innerHTML = LabelError;//Muestra mensaje de error

		correcto = true;
	}
	else{
		cajanombreerror.innerHTML = "";
	}

	if(document.getElementById('apellidos').value == ""){

		cajaapellidoserror.innerHTML = LabelError;//Muestra mensaje de error		

		correcto = true;
	}
	else{
		cajanombreerror.innerHTML = "";
	}

	if(document.getElementById('telefono').value == ""){

		cajatelefonoerror.innerHTML = LabelError;//Muestra mensaje de error

		correcto = true;
	}
	else{
		cajanombreerror.innerHTML = "";
	}

	if(document.getElementById('fechanac').value == ""){

		cajafechanacerror.innerHTML = LabelError;//Muestra mensaje de error

		correcto = true;
	}
	else{
		cajanombreerror.innerHTML = "";
	}

	if(correcto)
		alert("No puede existir campos vacíos");

	return correcto;
}

function ValidaTelefono(LabelError){	

	var telefono = document.getElementById('telefono').value;

	var regexTelefono = new RegExp("/^[9|6|7][0-9]{8}$/");

	var correcto = regexTelefono.test(telefono);

	if(! correcto)
	{
		document.getElementById('telefono').value = "";

		cajatelefono.innerHTML = LabelError;//Muestra mensaje de error

		alert("Formato de teléfono incorrecto");

		return false;
	}
	else
		return true;
}

/*<span class="label label-danger"> <span class="glyphicon glyphicon-exclamation-sign"></span> Error</span>*/