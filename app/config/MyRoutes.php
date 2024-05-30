<?php

    namespace config;

    use config\Route;

    require_once realpath('./vendor/autoload.php');

    $router = new Route();

    //$router->get("/", ['Ejemplo', 'index']);
    $router->get("/", ["TiendaController", "index"]);
    $router->get("/nuevo", ["TiendaController", "create"]);
    $router->post("/insertar", ['TiendaController', "insert"]);
    $router->get("/editarProducto", ["TiendaController", "edit"]);
    $router->post("/actualizar", ["TiendaController", "actualizar"]);
    $router->get("/eliminarProducto", ["TiendaController", "eliminar"]);

    $router->run()

?>