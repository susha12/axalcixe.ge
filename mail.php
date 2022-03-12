<?php

$recepient = "susha-12@mail.ru";
$sitename = "axalcixe.ge";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["user_email"]);
$textarea = trim($_POST["textarea"]);
$message = "სახელი: $name \nტელეფონის ნომერი: $phone \nმაილი: $email \nშეტყობინება: $textarea";

$pagetitle = "ახალი შეტყობინება \"$sitename\" საიტიდან";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");