<?php
$host = "localhost"; // o la IP de tu servidor MySQL
$user = "root";
$password = "";
$database = "web2";

try {
    // Crear la conexión con PDO
    $conexion = new PDO("mysql:host=$host;dbname=$database", $user, $password);
    // Establecer el modo de error de PDO a excepción
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexión exitosa";

    // Preparar y ejecutar la consulta SQL
    $sql = "INSERT INTO usuario (nombre, apellido1, email, fecha, password) 
            VALUES (:nombre, :apellido1, :email, :fecha, :password)";
    $stmt = $conexion->prepare($sql);
    $stmt->bindParam(':nombre', $_POST["nombre"]);
    $stmt->bindParam(':apellido1', $_POST["apellido1"]);
    $stmt->bindParam(':email', $_POST["email"]);
    $stmt->bindParam(':fecha', $_POST["fecha"]);
    // Encriptar la contraseña antes de guardarla
    $hashed_password = password_hash($_POST["password"], PASSWORD_DEFAULT);
    $stmt->bindParam(':password', $hashed_password);
    //$stmt->bindParam(':password', $_POST["password"]);
    $stmt->execute();

    echo "Registro insertado exitosamente";

    // Redirigir a la página de login   
    header("Location: login.html");
} catch (PDOException $e) {
    echo "Conexión fallida: " . $e->getMessage();
}
?>