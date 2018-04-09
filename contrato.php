<?php
	$to      = 'sistemas.serofca@gmail.com';
	$subject = 'Quiero trabajar con ustedes! - serofca.com';
    $name = $_GET['name'];
    $email = $_GET['mail'];
    $cel = $_GET['phone'];
    $msg = $_GET['msg'];
        
	$message = "$name ($email) quiere trabajar con nosotros\n\n$cel\n\n$msg";
	$headers = 'From: notificaciones@serofca.com' . "\r\n" .
	    'Reply-To: notificaciones@serofca.com' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
?>
<h1>Mensaje enviado</h1>
<script>setTimeout('window.history.back()',2000)</script>