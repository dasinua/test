<?php

$to = "dasflancer@gmail.com";
$sitename = "Test site";
$pagetitle = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$hidden = trim($_POST["hidden"]);

if(empty($email)){
	$email = "no-reply@domain.com";
};

$message = "
Имя: $name <br>
Email: $email <br>
Телефон: $phone <br>
Сообщение: $text <br>
Сообщение: $hidden
";

$headers = "From: $email" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion() . "\r\n" .
	"Content-type: text/html; charset=\"utf-8\"";
	
mail($to, $pagetitle, $message, $headers);


