import fs, { existsSync } from "fs";

//writeFile
//existsSync
//mkdir

class Striker {
  constructor() {
    this.tipo_archivo = {
      controller: (archivo) => `<?php\n\nnamespace controller;\n\nuse config\\View;\n\nrequire_once realpath(".../../vendor/autoload.php");\n\nclass ${archivo} extends View\n{\n    public function index()\n    {\n\n    }\n}\n\n$controlador = new ${archivo}();`,
      model: (archivo) => `<?php\n\nnamespace model;\n\nuse config\\ORM;\n\nclass ${archivo} extends ORM\n{\n    protected $tabla = '';\n    protected $id_tabla = '';\n}`,
      view: () => '\n<div class="container mt-2">\n\t<div class="row mt-2 justify-content-center">\n\t\t<div class="col mt-2">\n\t\t</div>\n\t</div>\n</div>\n',
    };
  }

  comprobar_ruta(ruta, tipo) {
    if (!existsSync(`./app/${tipo}/${ruta}`)) {
      fs.mkdir(`./app/${tipo}/${ruta}`, { recursive: true }, (error) => {
        if (!error) {
          console.log("Se creó la carpeta");
        } else {
          console.error("Error al crear la carpeta");
        }
      });
    }
  }

  comprobar_vista(ruta) {
    if (!existsSync(`./view/${ruta}`)) {
      fs.mkdir(`./view/${ruta}`, { recursive: true }, (error) => {
        if (!error) {
          console.log("Se creó la carpeta");
        } else {
          console.error("Error al crear la carpeta");
        }
      });
    }
  }

  crear_archivo([tipo, archivo, ruta = ""]) {
    if (tipo === 'view') {
      this.comprobar_vista(ruta);
    } else {
      this.comprobar_ruta(ruta, tipo);
    }

    const contenido = tipo === 'view' ? this.tipo_archivo[tipo]() : this.tipo_archivo[tipo](archivo);

    const filePath = tipo === 'view' ? `./view/${ruta}/${archivo}.view.php` : `./app/${tipo}/${ruta}/${archivo}.php`;

    fs.writeFile(filePath, contenido, (error) => {
      if (!error) {
        console.log("Creación Correcta!!!");
      } else {
        console.error("Error al crear el archivo");
      }
    });
  }
}

let striker = new Striker();

let comando = process.argv.slice(2);

striker.crear_archivo(comando);
