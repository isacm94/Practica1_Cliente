//ARRAY
var Contacto; //{nom: '', apellidos: '', telefono: '', fechanac: ''};

var Agenda = new Array();

var BotonNuevoPulsado = false;

//FUNCIONES
function CargaDatosIniciales(){

	CargaContactosIniciales();


	getUnContacto(1);//Mostramos primer contacto

	MostrarResumen();

	document.getElementById('fin').innerHTML = Agenda.length;//mostramos el final del resgistro

	DeshabilitaBotonesRegistro();

}
function CargaContactosIniciales(){

		//--------------------------
		Contacto = new Array('Luís', 'López Pérez', '963258741', '29/03/1994');
		
		Agenda.push(Contacto);//Guarda Contacto en Agenda

		
		//--------------------------
		Contacto = new Array('Juan', 'Pérez López', '969555123', '23/12/1995');
		
		Agenda.push(Contacto);//Guarda Contacto en Agenda


		//--------------------------
		Contacto = new Array('Adán', 'Candeas Mozo', '600253146', '08/11/1995');
		
		Agenda.push(Contacto);//Guarda Contacto en Agenda

		
		//--------------------------
		Contacto = new Array('Amador', 'Rivas García', '977415263', '01/08/1975');
		
		Agenda.push(Contacto);//Guarda Contacto en Agenda	


		//--------------------------
		Contacto = new Array('Antonio', 'Recio Ramos', '600874146', '08/11/1995');
		
		Agenda.push(Contacto);//Guarda Contacto en Agenda
		
		
		//--------------------------
		Contacto = new Array('Coque', 'Calatrava Guerrero', '684741525', '23/04/1978');
		
		Agenda.push(Contacto);//Guarda Contacto en Agenda

}
function GuardarContacto(){

	if(ValidacionCorrecta()){

		if(BotonNuevoPulsado){//Crea un contacto nuevo
			Contacto = new Array(4);

			Contacto[0] = document.getElementById('nombre').value;
			Contacto[1] = document.getElementById('apellidos').value;
			Contacto[2] = document.getElementById('telefono').value;
			Contacto[3] = document.getElementById('fechanac').value;
			
			Agenda.push(Contacto);//guarda Contacto

			document.getElementById('fin').innerHTML = Agenda.length;//Actualiza el fin de registro
		
			
			document.getElementById('inicio').innerHTML = Agenda.length;
			BotonNuevoPulsado = false;


		}
		else{//Modificamos el contacto en el que estemos

			//Capturamos la posicion en la que está guardado el contacto
			var pos = document.getElementById('inicio').innerHTML;
			pos = pos - 1;

			var ContactoMod = Agenda[pos];

			ContactoMod[0] = document.getElementById('nombre').value;
			ContactoMod[1] = document.getElementById('apellidos').value;
			ContactoMod[2] = document.getElementById('telefono').value;
			ContactoMod[3] = document.getElementById('fechanac').value;

			Agenda[pos] = ContactoMod;


		}
		MostrarResumen();
	}

	DeshabilitaBotonesRegistro();

	document.getElementById('btn_eliminar').disabled = false;

}

function MostrarResumen(){

	document.getElementById('resumen').innerHTML = "Resumen" + "<span class='badge pull-right'>"+ Agenda.length + "<span> contactos guardados";

	tbodyresumen.innerHTML="";

	for(var i = 0; i < Agenda.length; i++) {

		// Creamos nodos de tipo Element 
	    var tr = document.createElement("tr"); 
	    var td = document.createElement("td"); 
		
		var id = document.createTextNode(i + 1); // Crear nodo de tipo Text con el id

		td.appendChild(id); // Añadimos al td el id
		tr.appendChild(td); //Añadimos al tr el td


		for(var j = 0; j < 4; j++){ //Recorre cada Contacto
			

			var contacto = Agenda[i];	
			var td = document.createElement("td"); 

			// Crear nodo de tipo Text 
			var contenido = document.createTextNode(contacto[j]); 

			// Añadir el nodo Text como hijo del nodo 	Element 
			td.appendChild(contenido); 

			tr.appendChild(td); 

			// Añadir el nodo Element como hijo de la pagina 
			document.getElementById('tbodyresumen').appendChild(tr);

		}

		
	}
}

function NuevoContacto(){
	document.getElementById('nombre').value = "";
	document.getElementById('apellidos').value = "";
	document.getElementById('telefono').value = "";
	document.getElementById('fechanac').value = "";

	BotonNuevoPulsado = true;

	document.getElementById('btn_eliminar').disabled = true;
}

function getContacto(){

	var pos = document.getElementById('numEntrada').value;	

	pos--;//en el array es una posición menos

	if(pos >= 0 && pos < Agenda.length){//existe la posición en el array

		document.getElementById('inicio').innerHTML = pos + 1;

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

//REGISTRO-------------------------------------------------------------------------------------------------------
function BotonSiguiente(){
	
	

	var pos = document.getElementById('inicio').innerHTML;
	
	pos++;//siguiente posicion


	if(pos <= Agenda.length){
		document.getElementById('inicio').innerHTML = pos;
		getUnContacto(pos);
	}

	DeshabilitaBotonesRegistro();
}

function BotonAnterior(){	

	var pos = document.getElementById('inicio').innerHTML;
	
	pos--;//siguiente posicion


	if(pos > 0){
		document.getElementById('inicio').innerHTML = pos;
		getUnContacto(pos);
	}

	DeshabilitaBotonesRegistro();
}

function BotonInicioRegistro(){	

	document.getElementById('inicio').innerHTML = 1;
	getUnContacto(1);

	DeshabilitaBotonesRegistro();
}

function BotonFinRegistro(){

	document.getElementById('inicio').innerHTML = Agenda.length;
	getUnContacto(Agenda.length);

	DeshabilitaBotonesRegistro();
}

function DeshabilitaBotonesRegistro(){

	var pos = document.getElementById('inicio').innerHTML;


	//Cuando llegue a la ultima posición q se deshabilite el boton
	if(pos >= Agenda.length){
		document.getElementById('btn_siguiente').disabled = true;
		document.getElementById('btn_finregistro').disabled = true;
	}
	else{
		document.getElementById('btn_siguiente').disabled = false;
		document.getElementById('btn_finregistro').disabled = false;
	}

	if(pos <= 1){
		document.getElementById('btn_anterior').disabled = true;
		document.getElementById('btn_inicioregistro').disabled = true;
	}
	else{
		document.getElementById('btn_anterior').disabled = false;
		document.getElementById('btn_inicioregistro').disabled = false;
	}

}

//VALIDACION-------------------------------------------------------------------------------------------------------
function ValidacionCorrecta(){

	var correcto = true;

	var LabelError = '<span class="label label-danger"> <span class="glyphicon glyphicon-exclamation-sign"></span> Error</span>';

	if(FormularioVacio(LabelError))
		correcto = false;

	if(document.getElementById('telefono').value != "" && ! ValidaTelefono(LabelError))
		correcto = false;


	
	if(document.getElementById('fechanac').value != "" && ! ValidaFecha(LabelError)){
		correcto = false;
	}	
	else if (! FechaReal(LabelError))
		correcto = false;

	if(correcto) {//Si no hay errores, borramos los mensajes de error
		cajanombreerror.innerHTML = "";
		cajaapellidoserror.innerHTML = "";
		cajatelefonoerror.innerHTML = "";
		cajafechanacerror.innerHTML = "";
	}

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
		cajaapellidoserror.innerHTML = "";
	}

	if(document.getElementById('telefono').value == ""){

		cajatelefonoerror.innerHTML = LabelError;//Muestra mensaje de error

		correcto = true;
	}
	else{
		cajatelefonoerror.innerHTML = "";
	}

	if(document.getElementById('fechanac').value == ""){

		cajafechanacerror.innerHTML = LabelError;//Muestra mensaje de error

		correcto = true;
	}
	else{
		cajafechanacerror.innerHTML = "";
	}

	if(correcto)
		alert("No puede existir campos vacíos");

	return correcto;
}

function ValidaTelefono(LabelError){	

	var telefono = "";
	telefono = document.getElementById('telefono').value;

	var regexTelefono = new RegExp("^[9|6|7]\\d{8}$");//Tiene que empezar por 9, 6 o 7, seguido de 8 dígitos(del 0 al 9)

	if(! regexTelefono.test(telefono))
	{
		//document.getElementById('telefono').value = "";

		cajatelefonoerror.innerHTML = LabelError;//Muestra mensaje de error

		alert("Formato de teléfono incorrecto");

		return false;
	}
	else{ //correcto
		cajatelefonoerror.innerHTML = "";
		return true;
	}
}

function ValidaFecha(LabelError) {
	var fecha = document.getElementById("fechanac") .value;
	
	var RegExPattern = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

	if ((fecha.match(RegExPattern)) && (fecha != ''))  {
		cajafechanacerror.innerHTML = "";
		return true;
	}

	else {
		//document.getElementById('fechanac').value = "";

		cajafechanacerror.innerHTML = LabelError;//Muestra mensaje de error

		alert("Formato de fecha de nacimiento incorrecto");

		return false;
	}
	
}
	
function FechaReal(LabelError) {
		var fecha = document.getElementById("fechanac") .value;
		var fechaf = fecha.split("/");
		var d = fechaf[0];
		var m = fechaf[1];
		var y = fechaf[2];
		
		var correcto =  m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();
		
		if(correcto)
		{
			cajafechanacerror.innerHTML = "";
			return true;
		}
		else{
			//document.getElementById('fechanac').value = "";

			cajafechanacerror.innerHTML = LabelError;//Muestra mensaje de error

			alert("Fecha inexistente");

			return false;
		}
		
		return correcto;
	}

//ELIMINAR------------------------------------------------------------------------------------------------------
function EliminarContacto(){

	var pos = document.getElementById('inicio').innerHTML;

	pos--;//En el array está guardado en una posición menos

	if(! BotonNuevoPulsado){//si esta el botón nuevo ha sido pulsado no se puede borrar
		Agenda.splice(pos, 1);

		document.getElementById('fin').innerHTML = Agenda.length;
		MostrarResumen();

		if(Agenda.length == 0){//Si la agenda se queda sin contactos
			document.getElementById('inicio').innerHTML = 0;

			document.getElementById('nombre').value = "";
			document.getElementById('apellidos').value = "";
			document.getElementById('telefono').value = "";
			document.getElementById('fechanac').value = "";

			document.getElementById('btn_eliminar').disabled = true;//Desactivamos botón eliminar

			BotonNuevoPulsado = true;//Se puede guardar
		}
		else{

			var pos = Agenda.length - 1;

			var contacto = new Array(4);
			contacto = Agenda[pos];
			
			document.getElementById('nombre').value = contacto[0];
			document.getElementById('apellidos').value = contacto[1];
			document.getElementById('telefono').value = contacto[2];
			document.getElementById('fechanac').value = contacto[3];

			document.getElementById('inicio').innerHTML = Agenda.length;

		}

		if(document.getElementById('inicio').innerHTML > Agenda.length)
		{
			document.getElementById('inicio').innerHTML = Agenda.length;
		}

		
	}
}