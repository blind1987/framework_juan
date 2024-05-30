<?php
namespace config;
//conexcion 
use Dotenv\Dotenv;
use PDO;
use PDOException;

$dotenv = Dotenv::createImmutable('./');
$dotenv->load();
define('SERVIDOR', $_ENV['HOST']);
define('USER', $_ENV['USUARIO']);
define('DB', $_ENV['DBNAME']);
define('PASS', $_ENV['PASSWORD']);
define('PUERTO', $_ENV['PUERTO']);
class Conexion
{
    private static $conexion;

    private static function abrir_conexion()
    {
        if (!isset(self::$conexion)) {
            try {
                self::$conexion = new PDO('mysql:host=' . SERVIDOR . ';dbname=' . DB, USER, PASS);
                self::$conexion->exec('SET CHARACTER SET utf8');
                return self::$conexion;
            } catch (PDOException $e) {
                echo "Error en la conexion: " . $e;
                die();
            }
        } else {
            return self::$conexion;
        }
    }

    public static function obtener_conexion()
    {
        $conexion = self::abrir_conexion();
        return $conexion;
    }

    public static function cerrar_conexion()
    {
        self::$conexion = null;
    }
}

?>
