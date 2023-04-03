<?php
  $numero = $_POST['numero'];
  $risultato = shell_exec('./doppio ' . escapeshellarg($numero));
  echo $risultato;
?>
