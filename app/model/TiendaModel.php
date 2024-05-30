<?php

namespace model;

use config\ORM;

class TiendaModel extends ORM
{
    protected $tabla = 'productos';
    protected $id_tabla = 'id_producto';
}