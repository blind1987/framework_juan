class Interfaz{

    constructor(){
    }
  
    msj_error(msj){
      swal({
        title: `Error!`,
        text: msj,
        icon: `warning`,
        button: `Aceptar`
      });
    }
    msj_exito(msj){
      swal({
        title: `Correcto`,
        text: msj,
        icon: `success`,
        button: `Aceptar`
      });
    }
    msj_duda(msj){
      swal({
        title: `Duda`,
        text: msj,
        icon: `question`,
        button: `Aceptar`
      });
    }
  }
  
  class Validacion extends Interfaz{
    static restriccion = {
      "vacios": {
        "expresion": /(?!(^$))/,
        "msj": "No puedes dejar vacio el campo"
      },
      "letras":{
        "expresion": /^([a-zA-Záéíóú]+[\s]?)/i,
        "msj": "Solo puedes ingresar letras en el campo"
      },
      "numeros":{
        "expresion": /^([0-9])+$/,
        "msj": "Solo puedes ingresar numeros en el campo"
      },
      "email":{
        "expresion": /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
        "msj": "Correo no valido. Ingresalo de Nuevo"
      },
      "curp":{
        "expresion":/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
        "msj": "Curp no valido. Ingresa el correcto"
      },
      "rfc":{
        "expresion": /^[A-ZÑ&]{4}[0-9]{6}[A-Z0-9]{3}$/,
        "msj": "RFC no es valido. Intentalo de nuevo"
      },
      "password":{
        "expresion":  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/,
        "msj": "Contraseña no valida. No cumple con los requisitos minimos\n\n Requisitos para una contraseña: \n -Minimo 8 caracteres \n-Maximo 15 caracteres \n-Al menos una letra mayuscula \n-Al menos una letra minuscula \n-Al menos un digito \n-No dejar espacios en blacno \n-Al menos 1 carecter especial: @ $ ! % * ? &"
      }
    };
  
    Limpiar_cadena = (cadena, caracter_busqueda, caracter_remplazo) => {
      return cadena.replace(`${caracter_busqueda}`, `${caracter_remplazo}`);
    }
  
    validar_campo(input, tipo_validacion, mensaje = ""){
      let resultado = true;
      let error = "";
      let msj_final = "";
  
      const incorrecto = (nombre, msj) => {
        error = (error == "") ? nombre : error;
        msj_final = (msj_final == "") ? msj : msj_final;
        return false;
      }
      if(Array.isArray(input)){
        if(Array.isArray(tipo_validacion)){
          tipo_validacion.map(validacion =>{
            let {expresion, msj}= Validacion.restriccion[validacion];
            input.map(nombre => {
              resultado = expresion.test(document.getElementsByName(`${nombre}`)
            [0].value) ? resultado : incorrecto(document.querySelector('[for="'+nombre+'"]').textContent, msj);
            });
          });
        } else {
          const {expresion, msj} = Validacion.restriccion[tipo_validacion];
          input.map(nombre=>{
            resultado = expresion.test(document.getElementsByName(`${nombre}`)[0].value) ? resultado : incorrecto(document.querySelector('[for="'+nombre+'"]').textContent, msj);
          });
        }
      }
      error != "" ? this.msj_error(mensaje != "" ? mensaje : `${msj_final} ${error}`): error;
      return resultado;
    }
  }
  
  caracter_mayus = (input) => {
    document.getElementsByName(`${input}`)[0].addEventListener("input", () =>{
      document.getElementsByName(`${input}`)[0].value = document.getElementsByName(`${input}`)[0].value.toUpperCase();
    });
  }
  
  caracter_minus = (input) => {
    document.getElementsByName(`${input}`)[0].addEventListener("input", () =>{
      document.getElementsByName(`${input}`)[0].value = document.getElementsByName(`${input}`)[0].value.toLowerCase();
    });
  }
  
  caracter_letras = (input) => {
    document.getElementsByName(`${input}`)[0].addEventListener("input", () =>{
      document.getElementsByName(`${input}`)[0].value = document.getElementsByName(`${input}`)[0].value.replace(/([^a-zA-Záéíóú\s])/i, '');
    });
  }
  caracter_numeros = (input) => {
    document.getElementsByName(`${input}`)[0].addEventListener("input", () => {
      document.getElementsByName(`${input}`)[0].value = document.getElementsByName(`${input}`)[0].value.replace(/[^0-9]/g, '');
    });
  }
  
  caracter_varios = (input) => {
    document.getElementsByName(`${input}`)[0].addEventListener("input", () => {
      document.getElementsByName(`${input}`)[0].value = document.getElementsByName(`${input}`)[0].value.replace(/([^A-Za-z0-9ñÑ])/g, '');
    });
  }
  
  primer_mayuscula = (input) => {
    document.getElementsByName(`${input}`)[0].addEventListener("inpur", () =>{
      document.getElementsByName(`${input}`)[0].value = document.getElementsByName(`${input}`)[0].value.chartAt(0).toUpperCase() + document.getElementsByName(`${input}`)[0].value.slice(1);
    });
  }
  
  limitar_valores = (input, inicio, fin, msj) => {
    return document.getElementsByName(`${input}`)[0].value > inicio && document.getElementsByName(`${input}`)[0].value < fin ? true : this.msj_error(msj); 
  }
  
  logintud_campo = (input, inicio, fin, msj) => {
    let campo = document.getElementsByName(`${input}`)[0].value;
    return campo.length > inicio && campo.length < fin ? true : this.msj_error(msj);
  }
  
  logintud_campo_exacta = (input, longitud, msj) => {
    let campo = document.getElementsByName(`${input}`)[0].value;
    return campo.length == longitud ? true : this.msj_error(msj);
  }