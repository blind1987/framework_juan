<?php

namespace controller;

use config\View;

require_once realpath(".../../vendor/autoload.php");

class Ejemplo extends View
{
    public function index()
    {
        return parent::vista('ejemplo');
    }
}

$controlador = new Ejemplo();