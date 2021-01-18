let nombre = document.getElementById('nom').value;
	let apellido = document.getElementById('ape').value;
	let telefono = document.getElementById('tel').value;
	let personas = document.getElementById('num').value;
	let hora = document.getElementById('hrs').value;
	let fecha = document.getElementById('fec').value;

function validar(){
	


	if(nombre === "" || apellido === "" || telefono === "" || personas === "" || hora === "" || fecha === ""){
		alert('Hay campos vacios, favor de verificar');
		return false;
	}else if(nombre.length > 20){
		alert('El nombre es muy grande');
		return false;
	}else if(apellido.length > 40){
		alert('El apellido es muy grande');
		return false;
	}else if(telefono.length > 10){
		alert('El telefono es muy grande');
		return false;
	}else if(isNaN(telefono)){
		alert('Error al ingresar el telefono');
		return false;
	}else if(personas.length > 2){
		alert('La cantidad de personas es mayor');
		return false;
	}else if(hora.length > 6){
		alert('Error en la hora');
		return false;
	}	

	
}

