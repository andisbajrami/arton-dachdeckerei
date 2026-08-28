<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

$name = trim($_POST['name'] ?? '');
$mail = trim($_POST['mail'] ?? '');
$phone = trim($_POST['website'] ?? '');
$comment = trim($_POST['comment'] ?? '');

if ($name === '' || $mail === '' || $comment === '') {
  echo json_encode(array('info' => 'error', 'msg' => 'Bitte füllen Sie alle Pflichtfelder aus.'));
  exit;
}

if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
  echo json_encode(array('info' => 'error', 'msg' => 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'));
  exit;
}

$to = 'info@arton-dachdeckerei.de';
$subject = 'Kontaktanfrage von der Website';
$message = "Name: $name\nE-Mail: $mail\nTelefon: $phone\n\nNachricht:\n$comment\n";
$headers = 'From: ' . $mail . "\r\n" . 'Reply-To: ' . $mail . "\r\n" . 'Content-Type: text/plain; charset=UTF-8';

if (@mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $message, $headers)) {
  echo json_encode(array('info' => 'success', 'msg' => 'Vielen Dank. Ihre Nachricht wurde gesendet.'));
} else {
  echo json_encode(array('info' => 'error', 'msg' => 'Die Nachricht konnte nicht gesendet werden. Bitte rufen Sie uns an.'));
}
