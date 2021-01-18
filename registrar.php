<?php
include 'conexion.php';

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$telefono = $_POST["telefono"];
$personas = $_POST["personas"];
$hora = $_POST["hora"];
$fecha = $_POST["fecha"];
$nmesa = $_POST["caja-mesa"];

$insertar = "INSERT INTO reservacion(nombre, apellido, telefono, personas, hora, fecha, mesa) VALUES ('$nombre', '$apellido', '$telefono', '$personas', '$hora', '$fecha', '$nmesa')";

$resultado = mysqli_query($conexion, $insertar);
if(!$resultado){
	echo '<script type="text/javascript">
	alert("Error en la Reservación");
	window.location.href="reservaciones.html";
	</script>';
}else{
	echo '<script type="text/javascript">
	alert("Reservacion Exitosa");
	window.location.href="reservaciones.html";
	</script>';
}

mysqli_close($conexion);