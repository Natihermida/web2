<?php   //envia formulario al servidor
if(isset($_POST["nombre"]) ){
var_dump($_POST);
exit();
}
 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro Web2</title>
    <!-- enlace a la hoja de estilos css (registro.css) -->
    <link rel="stylesheet" href="CSS/registro.css">
</head>
<body>
    <!-- formulario -->
    <form class= "register" action="procesar.php"   method="post">
        <label for="nombre">Nombre</label>
        <input type="texto" name="nombre" id="usuario">
        <label for="apellido1">Apellido 1</label>
        <input type="texto" name ="apellido1" id= "appellido1">
        <label for="apellido2">Apellido 2</label>
        <input type="texto" name ="apellido2" id= "appellido2">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required>
        <label for="fecha-nacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fecha-nacimiento" name="fecha" required>
        <label for="password">Contraseña:</label>
        <input id="pass"type="password" id="password" name="password" required>
        <label for="password"> Confirmar Contraseña:</label>
        <input id="repass" type="password" id="password" name="repassword" required>
         <!-- Botón de registro -->
         <span id="msg">*Las contraseñas deben ser iguales</span>
         <button id="bntCrear" >Registrarse</button>


        

    </form>
    <script src="registro.js"></script>
</body>
</html>