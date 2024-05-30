<?php

namespace controller;

use config\View;
use model\TiendaModel;

require_once realpath(".../../vendor/autoload.php");

class TiendaController extends View
{
    public function index()
    {
        return parent::vista('IndexView');
    }

    public function create(){
        return parent::vista('NuevoProducto');
    }

    public function insert(){
        $producto = new TiendaModel();

        $datos = [
            'nombre' => $_POST['nombre'],
            'categoria' => $_POST['categoria'],
            'caducidad' => $_POST['caducidad'],
            'lote' => $_POST['lote'],
            'costo'=> $_POST['costo']
        ];

        $resultado = $producto->insercion($datos);
        
        if($resultado){
            $productos = new TiendaModel();
            $res = $productos->consulta()->all();  
            return parent::vista('IndexView', $res);
        }else{
            echo 'Error';
        }
    }
     public function edit($id){
        $producto = new TiendaModel();
        $resultado = $producto->consulta()->where('id_producto', $id)->first();
        //print_r($resultado);
        return parent::vista('EditProducto', $resultado);
    }

    public function actualizar(){
        $producto = new TiendaModel();

        $data = [
            'nombre' => $_POST['nombre'],
            'categoria' => $_POST['categoria'],
            'caducidad' => $_POST['caducidad'],
            'lote' => $_POST['lote'],
            'costo' => $_POST['costo']
        ]; 
        $resultado = $producto->actualizar($data)->where('id_producto', $_POST['id'])->get();

        if($resultado){
            $productos = new TiendaModel();
            $datos = $productos->consulta()->all();

            return parent::vista('IndexView', $datos);
        }else {
            echo $resultado;
        }
    }

    public function eliminar($id){
        $producto = new TiendaModel();
        $eliminar = $producto->eliminar()->where('id_producto', $id)->get();

        if($eliminar){
            $datos = $producto->consulta()->all();

            return parent::vista('IndexView', $datos);
        }
    }
}

$controlador = new TiendaController();