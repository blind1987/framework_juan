"use strict";

var _this2 = void 0;
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Interfaz = /*#__PURE__*/function () {
  function Interfaz() {
    _classCallCheck(this, Interfaz);
  }
  return _createClass(Interfaz, [{
    key: "msj_error",
    value: function msj_error(msj) {
      swal({
        title: "Error!",
        text: msj,
        icon: "warning",
        button: "Aceptar"
      });
    }
  }, {
    key: "msj_exito",
    value: function msj_exito(msj) {
      swal({
        title: "Correcto",
        text: msj,
        icon: "success",
        button: "Aceptar"
      });
    }
  }, {
    key: "msj_duda",
    value: function msj_duda(msj) {
      swal({
        title: "Duda",
        text: msj,
        icon: "question",
        button: "Aceptar"
      });
    }
  }]);
}();
var Validacion = /*#__PURE__*/function (_Interfaz) {
  function Validacion() {
    var _this;
    _classCallCheck(this, Validacion);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Validacion, [].concat(args));
    _defineProperty(_this, "Limpiar_cadena", function (cadena, caracter_busqueda, caracter_remplazo) {
      return cadena.replace("".concat(caracter_busqueda), "".concat(caracter_remplazo));
    });
    return _this;
  }
  _inherits(Validacion, _Interfaz);
  return _createClass(Validacion, [{
    key: "validar_campo",
    value: function validar_campo(input, tipo_validacion) {
      var mensaje = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var resultado = true;
      var error = "";
      var msj_final = "";
      var incorrecto = function incorrecto(nombre, msj) {
        error = error == "" ? nombre : error;
        msj_final = msj_final == "" ? msj : msj_final;
        return false;
      };
      if (Array.isArray(input)) {
        if (Array.isArray(tipo_validacion)) {
          tipo_validacion.map(function (validacion) {
            var _Validacion$restricci = Validacion.restriccion[validacion],
              expresion = _Validacion$restricci.expresion,
              msj = _Validacion$restricci.msj;
            input.map(function (nombre) {
              resultado = expresion.test(document.getElementsByName("".concat(nombre))[0].value) ? resultado : incorrecto(document.querySelector('[for="' + nombre + '"]').textContent, msj);
            });
          });
        } else {
          var _Validacion$restricci2 = Validacion.restriccion[tipo_validacion],
            expresion = _Validacion$restricci2.expresion,
            msj = _Validacion$restricci2.msj;
          input.map(function (nombre) {
            resultado = expresion.test(document.getElementsByName("".concat(nombre))[0].value) ? resultado : incorrecto(document.querySelector('[for="' + nombre + '"]').textContent, msj);
          });
        }
      }
      error != "" ? this.msj_error(mensaje != "" ? mensaje : "".concat(msj_final, " ").concat(error)) : error;
      return resultado;
    }
  }]);
}(Interfaz);
_defineProperty(Validacion, "restriccion", {
  "vacios": {
    "expresion": /(?!(^$))/,
    "msj": "No puedes dejar vacio el campo"
  },
  "letras": {
    "expresion": /^([a-zA-Záéíóú]+[\s]?)/i,
    "msj": "Solo puedes ingresar letras en el campo"
  },
  "numeros": {
    "expresion": /^([0-9])+$/,
    "msj": "Solo puedes ingresar numeros en el campo"
  },
  "email": {
    "expresion": /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
    "msj": "Correo no valido. Ingresalo de Nuevo"
  },
  "curp": {
    "expresion": /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
    "msj": "Curp no valido. Ingresa el correcto"
  },
  "rfc": {
    "expresion": /^[A-ZÑ&]{4}[0-9]{6}[A-Z0-9]{3}$/,
    "msj": "RFC no es valido. Intentalo de nuevo"
  },
  "password": {
    "expresion": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/,
    "msj": "Contraseña no valida. No cumple con los requisitos minimos\n\n Requisitos para una contraseña: \n -Minimo 8 caracteres \n-Maximo 15 caracteres \n-Al menos una letra mayuscula \n-Al menos una letra minuscula \n-Al menos un digito \n-No dejar espacios en blacno \n-Al menos 1 carecter especial: @ $ ! % * ? &"
  }
});
caracter_mayus = function caracter_mayus(input) {
  document.getElementsByName("".concat(input))[0].addEventListener("input", function () {
    document.getElementsByName("".concat(input))[0].value = document.getElementsByName("".concat(input))[0].value.toUpperCase();
  });
};
caracter_minus = function caracter_minus(input) {
  document.getElementsByName("".concat(input))[0].addEventListener("input", function () {
    document.getElementsByName("".concat(input))[0].value = document.getElementsByName("".concat(input))[0].value.toLowerCase();
  });
};
caracter_letras = function caracter_letras(input) {
  document.getElementsByName("".concat(input))[0].addEventListener("input", function () {
    document.getElementsByName("".concat(input))[0].value = document.getElementsByName("".concat(input))[0].value.replace(/([^a-zA-Záéíóú\s])/i, '');
  });
};
caracter_numeros = function caracter_numeros(input) {
  document.getElementsByName("".concat(input))[0].addEventListener("input", function () {
    document.getElementsByName("".concat(input))[0].value = document.getElementsByName("".concat(input))[0].value.replace(/[^0-9]/g, '');
  });
};
caracter_varios = function caracter_varios(input) {
  document.getElementsByName("".concat(input))[0].addEventListener("input", function () {
    document.getElementsByName("".concat(input))[0].value = document.getElementsByName("".concat(input))[0].value.replace(/([^A-Za-z0-9ñÑ])/g, '');
  });
};
primer_mayuscula = function primer_mayuscula(input) {
  document.getElementsByName("".concat(input))[0].addEventListener("inpur", function () {
    document.getElementsByName("".concat(input))[0].value = document.getElementsByName("".concat(input))[0].value.chartAt(0).toUpperCase() + document.getElementsByName("".concat(input))[0].value.slice(1);
  });
};
limitar_valores = function limitar_valores(input, inicio, fin, msj) {
  return document.getElementsByName("".concat(input))[0].value > inicio && document.getElementsByName("".concat(input))[0].value < fin ? true : _this2.msj_error(msj);
};
logintud_campo = function logintud_campo(input, inicio, fin, msj) {
  var campo = document.getElementsByName("".concat(input))[0].value;
  return campo.length > inicio && campo.length < fin ? true : _this2.msj_error(msj);
};
logintud_campo_exacta = function logintud_campo_exacta(input, longitud, msj) {
  var campo = document.getElementsByName("".concat(input))[0].value;
  return campo.length == longitud ? true : _this2.msj_error(msj);
};