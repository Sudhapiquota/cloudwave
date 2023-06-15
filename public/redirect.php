<?php
$redirect_url = 'https://' . $_SERVER['HTTP_HOST'] . strtolower($_SERVER['REQUEST_URI']);
header('HTTP/1.1 301 Moved Permanently');
header('Location: ' . $redirect_url);
exit();
?>
