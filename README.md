# Striker Framework

## Descripción acerca del framework

**Striker Framework** 
Es un framework web para PHP que se destaca por su sintaxis expresiva y estructura organizada. 
Ofrece una excelente experiencia de desarrollo con características como un ORM avanzado, 
validación de entradas en el frontend y manejo de solicitudes asíncronas. 
Tanto para principiantes como para desarrolladores experimentados, 
Striker proporciona herramientas robustas para construir aplicaciones web profesionales.

## Características Principales
**ORM Dinámico**: Permite que el desarrollador al insertar una base de datos, permita realizar distintas busquedas o consultas personalizadas como Lectura de Datos, Insercion de Datos, Edición de Datos y Eliminación de Datos
**Validaciones**: Utiliza codigo de JavaScript para la validaciones de los formularios creados en html
**Facil de Entender**: Es practico y fácil de entender para que el flujo de trabajo se el más óptimo 

# Requisitos previos
Para utilizar **Striker Framework** se necesita los siguientes recursos para que funcione de manera más óptima:
- **PHP** 8.0 o superior
- **Composer** para la gestion de dependencias
- **Node.js version 21 o superior** y **npm** para manejar paquetes de frontend
- Un servidor **web**
- Un **Virtual Host**
- **MySQL** o **MariaDB**

# Instalación 

Sigue estos pasos para instalar el **Striker Framework**:


1. Clonar el respositorio desde GitHub
   ```sh
   git clone https://github.com/AngelCer3/strikerFramework.git
   cd strikerFramework
   ```
3. Configurar el servidor web para apuntar el directorio `raiz` del proyecto
4. Instalar las dependencias de PHP usando **Composer** con el siguiente comando:
   ```sh
   composer install
   ```
5. Configurar el archivo de entorno `env`:
   ```sh
   -HOST = "localhost"
   -PORT = "3306"
   -USER = "root"
   -PASSWORD = ""
   -DB = "example"
   ```
7. Configurar el archivo `config`:
   ```sh
      -private const SERVER = "url de tu host virtual";
      -private const DEP_IMG = self::SERVER . "/public/img/";
      -private const DEP_JS = self::SERVER . "/public/js/";
      -private const DEP_CSS = self::SERVER . "/public/css/";
   ```
9. Instalar las dependencias de Frontend:
    ```sh
    npm install
    ```

## Ejemplo de configuracion de Host Virtual en Apache
```apache
  <VirtualHost *:80>
    ServerAdmin webmaster@tu_sitio.com
    DocumentRoot "C:/websites/tu_sitio.com/public_html"
    <Directory /ruta/a/ruta_de_tu_proyecto>
      Options Indexes FollowSymLinks
      AllowOverride All
      Require all granted
    </Directory>
</VirtualHost>
```

### Al terminar la instalación se tendra la siguiente estructura de carpetas
```
Framework-Coquita/
├── app/
│   └── config/
│       └── Conexion.php
│       └── Config.php
│       └── MyRoutes.php
│       └── ORM.php
│       └── View.php
│   └── controller/  
│   └── model/
├── controller/
│       └── striker.controller.js
├── node_modules/
├── public/
│       └── css/
│       └── img/
│       └── js/
├── src/
│       └── striker.controller.js
├── vendor/
├── view/
├── .babelrc
├── .env
├── .htaccess
├── composer.json
├── composer.lock
├── striker.js
├── index.php
├── package-lock.json
└── package.json
```
## Generador de archivos de Striker Framework
Striker Framework utiliza comandos Comandos de Linea Internos(CLI) para facilitar la creación de controladores, modelos y vistas

## Creación de un Controlador
Para crear un nuevo controlador se utiliza el siguiente comando:
  ```sh
    node striker controller NombredelControlador NombredelaCarpeta
  ```
## Creación de un modelo
Para crear un nuevo modelo se utiliza el siguiente comando:
  ```sh
    node striker model NombredelModelo NombredelaCarpeta
  ```
## Creación de una vista
Para crear una nueva vista se utiliza el siguiente comando:
  ```sh
    node striker controller NombredeVista NombredelaCarpeta
  ```
## Licencias
Este proyecto está licenciado bajo la Licencia MIT. Para mayor información revisa el archivo LICENSE

## Autores
Autores:
-Angel Cerezo - AngelCer3
-Diego Bollas - Yakumo-sahashi

