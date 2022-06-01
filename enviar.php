<?php 
	$nombre = $_POST['name'];
	$email = $_POST['email'];
	$asunto = 'Formulario Modo Artista';
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br> Mensaje:".$_POST['message'];


	if(mail('antoniot124@gmail.com', $asunto, $mensaje)){
		echo "Correo enviado";
	}
 ?>