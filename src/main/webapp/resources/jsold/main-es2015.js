(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-login></app-login> -->\r\n<!-- <app-body></app-body> -->\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/body/body.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/body/body.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-body\">\r\n    <div class=\"cont-gen\">\r\n        <div class=\"w-nav-left\">\r\n            <app-navbar-left (propagatingMenu)=\"showInform($event)\"></app-navbar-left>\r\n        </div>\r\n        <div class=\"w-cont-der\">\r\n            <app-conten-der [informe]=\"informe\"></app-conten-der>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/conten-der/conten-der.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conten-der/conten-der.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"con-der\">\r\n    <div class=\"header d-flex\">\r\n        <div class=\"row justify-content-between align-items-center w-100\">\r\n            <div class=\"col-12\">\r\n                <h1 class=\"title m-0\">{{ 'conten-der.title' | translate | uppercase }}</h1>\r\n            </div>\r\n            <!-- -el dia que se vaya a introducir el buscador y el usuario repasar el codigo ya que se han puesto los height fijos para que no haga scroll el grafico--- -->\r\n            <!-- <div class=\"col-xl-5 pt-3 pt-xl-0 d-none\">\r\n                <div class=\"d-flex align-items-center justify-content-xl-end\">\r\n                    <div class=\"input-group busc-inf border-bottom\">\r\n                        <input type=\"text\" class=\"form-control border-0\" placeholder=\"Buscar informe\"\r\n                            aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn \" type=\"button\">\r\n                                <img src=\"admin/resources/assets/icons/lupa-morada.svg\" alt=\"lupa\">\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex align-items-center\">\r\n                        <p class=\"m-0 text-grey\">{{ 'general.renfe' | translate | capitalizar:false }}</p>\r\n                        <div class=\"btn-usu\">\r\n                            R\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"body\">\r\n        <div class=\"migas d-none d-lg-flex\">\r\n            <p class=\"mig-text\">{{ 'general.trenes' | translate | capitalizar }}</p>\r\n            <p *ngIf=\"tituloInformePadre\" class=\"mig-text\">{{ tituloInformePadre | translate | capitalizar:false }}</p>\r\n            <p class=\"mig-text\">{{ tituloInforme | translate | capitalizar:false }}</p>\r\n        </div>\r\n        <div class=\"naveg-intern p-lg-4\">\r\n            <div class=\"row m-0 \">\r\n                <div class=\"col-4 col-lg-3 link-nav-act \">\r\n                    <a>{{ 'general.trenes' | translate | uppercase }}</a>\r\n                </div>\r\n                <div class=\"col-4 col-lg-3 bg-grey\">\r\n                    <a class=\"d-none\">{{ 'general.estaciones' | translate | uppercase }}</a>\r\n                </div>\r\n                <div class=\"col-4 col-lg-3 bg-grey\">\r\n                    <a class=\"d-none\">{{ 'general.cau' | translate | uppercase }}</a>\r\n                </div>\r\n                <div class=\"col-lg-3 bg-grey d-flex align-items-center justify-content-center\">\r\n                    <button class=\"btn d-flex align-items-center\" type=\"button\" (click)='toPdf()'>\r\n                        <img src=\"admin/resources/assets/icons/descargar-ic.svg\" alt=\"\" class=\"pr-2\">\r\n                        {{ 'button.informe_ejecutivo' | translate | capitalizar:false }} {{ 'general.pdf' | translate | uppercase }}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"conten-log-inf pb-2\">\r\n            <div class=\"row m-0\">\r\n                <div class=\"col-4 d-flex justify-content-center align-items-center\">\r\n                    <div class=\"cont-img-inf\">\r\n                        <img src=\"admin/resources/assets/images/logo-ave-imf.svg\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-4 d-flex justify-content-center align-items-center\">\r\n                    <p class=\"m-0 text-inf\">{{ tituloInforme | translate | capitalizar:false }}</p>\r\n                </div>\r\n                <div class=\"col-4 d-flex justify-content-center align-items-center\">\r\n                    <div class=\"cont-img-inf\">\r\n                        <img src=\"admin/resources/assets/images/logo-play-renfe-imf.svg\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"conten-iframe m-auto\">\r\n            <iframe [src]=\"urlPowerbi | sanitizar: urlInforme\" frameborder=\"0\" allowFullScreen=\"true\"></iframe>\r\n            <!-- <app-table></app-table> -->\r\n        </div>\r\n    </div>\r\n    <!-- <footer>\r\n    </footer> -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"login\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7 d-none d-lg-block p-0\">\r\n        <div class=\"backgr-login\">\r\n          <div class=\"text-log\">\r\n            <h1>Cuadro de mando de seguimiento de Servicio</h1>\r\n            <h4>Informes PORTAL ANALITICO</h4>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-5 d-flex login-ave\">\r\n        <div class=\"conten-log \">\r\n          <div class=\"row pb-5\">\r\n            <div class=\"col-6 d-flex justify-content-end\">\r\n              <img src=\"admin/resources/assets/images/renfe-logo.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <img src=\"admin/resources/assets/images/play-renfe-logo.png\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <p class=\"text-center inic-ses pb-2\">Inicio de sesión</p>\r\n          <form class=\"contras-ave\">\r\n            <div *ngIf=\"alerta\" class=\"form-row pb-3 animated fadeIn fast\">\r\n              <div class=\"invalid-feedback-ave w-100 p-3 d-flex justify-content-between align-items-center\">\r\n                <p class=\"m-0\">Usuario o contraseña incorrectos</p>\r\n                <img (click)=\"ocultarAlerta()\" src=\"admin/resources/assets/icons/close-ave.svg\" alt=\"cerrar\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <label class=\"mb-0\" for=\"validationServer01\">Usuario</label>\r\n              <input #username type=\"text\" class=\"form-control\" id=\"validationServer01\" required>\r\n            </div>\r\n            <div class=\"form-row pt-4 pb-5\">\r\n              <label class=\"mb-0\" for=\"validationServer03\">Contraseña</label>\r\n              <input #password type=\"password\" class=\"form-control\" id=\"validationServer03\" required>\r\n            </div>\r\n            <div class=\"w-100  pt-5 d-flex\">\r\n              <button id=\"login-button\" class=\"btn btn-primary m-auto\" type=\"submit\"\r\n                (click)=\"logIn(username.value, password.value, $event)\">ACCESO</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar-left/navbar-left.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar-left/navbar-left.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cont-navb-ave\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark p-0\">\r\n    <div class=\"bg-black\">\r\n      <a class=\"navbar-brand\">\r\n        <img src=\"admin/resources/assets/images/logo-renfe-white.svg\" alt=\"\">\r\n      </a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarAve\" aria-controls=\"navbarAve\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    </div>\r\n    <div id=\"navbarAve\" class=\"collapse navbar-collapse pt-lg-3\">\r\n      <ul class=\"navbar-nav d-flex justify-content-lg-around w-100\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\">{{ 'general.trenes' | translate | uppercase }}</a>\r\n          <nav id=\"informes\" class=\"informes\">\r\n            <ul>\r\n              <li *ngFor=\"let menu of menus; let i = index\">\r\n                <a *ngIf=\"!menu.submenus || menu.submenus === 0\" [id]=\"menu.id\" (click)=\"show(menu.id)\" class=\"prim-niv {{ menu.clase }}\">{{ menu.texto | translate }}</a>\r\n                <ng-container *ngIf=\"menu.submenus && menu.submenus.length > 0\">\r\n                  <a [id]=\"menu.id\" (click)=\"show(menu.id, i)\" class=\"prim-niv {{ menu.clase }}\">{{ menu.texto | translate }}</a>\r\n                  <ul id=\"{{i}}\" class=\"seg-niv\">\r\n                    <li *ngFor=\"let submenu of menu.submenus\">\r\n                      <a [id]=\"submenu.id\" (click)=\"show(submenu.id, i)\" class=\"{{ submenu.clase }}\">{{ submenu.texto | translate }}</a>\r\n                    </li>\r\n                  </ul>\r\n                </ng-container>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link d-none\">{{ 'general.estaciones' | translate | uppercase }}</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link d-none\">{{ 'general.cau' | translate | uppercase }}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"conten-table-comp\">\r\n    <div class=\"w-50 m-auto\">\r\n        <div class=\"form-group row custom-upload\">\r\n               <div data-role=\"dynamic-fields\" class=\"w-100\">\r\n                   <div class=\"form-inline form-row\">\r\n                       <label for=\"\" class=\"d-xl-flex d-block w-100 justify-content-start\">\r\n                           <p class=\"mr-5 text-regul\">Subir archivo</p>\r\n                           <p class=\"text-green\">Fichero importado con éxito -\r\n                                <a href=\"\">Ver el historico</a>\r\n                           </p>\r\n                           <!-- <p class=\"text-red\">Error en fichero - \r\n                               <a href=\"\">Ver el historico</a></p> -->\r\n                       </label>\r\n                     <div class=\" wrap-input-container w-100\" >\r\n                       <label class=\"custom-file-upload form-control\">\r\n                        <div class=\"bg-morado d-inline-block\"> \r\n                            <img src=\"admin/resources/assets/icons/sub-arch-table.svg\" alt=\"\"> </div>Upload Document\r\n                       </label>\r\n                       <input class=\"file-upload w-100\" name=\"file_name\" type=\"file\">\r\n                     </div>\r\n                     <small id=\"emailHelp\" class=\"form-text text-muted\">Por favor , seleccione el archivo a importar</small>\r\n                   </div>  <!-- /div.form-inline -->\r\n               </div> \r\n        </div>\r\n    </div>\r\n    <p class=\"hist-fich text-left\">Historico ficheros</p>\r\n    <div class=\"table-responsive pt-3\">\r\n            <table class=\"table\">\r\n                    <thead>\r\n                            <tr>\r\n                              <th scope=\"col\">FICHERO</th>\r\n                              <th scope=\"col\">UBICACIÓN</th>\r\n                              <th scope=\"col\">ESTADO</th>\r\n                              <th scope=\"col\">SITUACIÓN</th>\r\n                              <th scope=\"col\">TAMAÑO</th>\r\n                              <th scope=\"col\">LOG</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr>\r\n                              <th scope=\"row\">Circulaciones.xls</th>\r\n                              <td>DATOS GENERALES DE ACCESO</td>\r\n                              <td class=\"d-flex align-items-center border-0\">\r\n                               \r\n                                        <div class=\"progress w-100 \">\r\n                                                <div class=\"progress-bar \" role=\"progressbar\" style=\"width: 0%\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                              </div>\r\n                                         <span class=\"ml-2\">10%</span>\r\n                                </td>\r\n                              <td>\r\n                                 <div class=\"text-progr err\"> Error en fichero</div>\r\n                              </td>\r\n                              <td>10K</td>\r\n                              <td class=\"center\">\r\n                                  <img src=\"admin/resources/assets/icons/log.svg\" alt=\"\"  class=\"text-center\">\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                    <th scope=\"row\">Viajeros.xls</th>\r\n                                    <td>DATOS GENERALES DE ACCESO</td>\r\n                                    <td class=\"d-flex align-items-center \">\r\n                                     \r\n                                              <div class=\"progress w-100 \">\r\n                                                      <div class=\"progress-bar green-progres\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                    </div>\r\n                                               <span class=\"ml-2\">100%</span>\r\n                                      </td>\r\n                                    <td>\r\n                                       <div class=\"text-progr proces\"> Procesando</div>\r\n                                    </td>\r\n                                    <td>10K</td>\r\n                                    <td class=\"center\">\r\n                                        <img src=\"admin/resources/assets/icons/log.svg\" alt=\"\"  class=\"text-center\">\r\n                                      </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                        <th scope=\"row\">Viajeros.xls</th>\r\n                                        <td>DATOS GENERALES DE ACCESO</td>\r\n                                        <td class=\"d-flex align-items-center \">\r\n                                         \r\n                                                  <div class=\"progress w-100 \">\r\n                                                          <div class=\"progress-bar yellow-progres\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                        </div>\r\n                                                   <span class=\"ml-2\">50%</span>\r\n                                          </td>\r\n                                        <td>\r\n                                           <div class=\"text-progr en-proces\">En proceso</div>\r\n                                        </td>\r\n                                        <td>10K</td>\r\n                                        <td class=\"center\">\r\n                                            <img src=\"admin/resources/assets/icons/log.svg\" alt=\"\"  class=\"text-center\">\r\n                                          </td>\r\n                                      </tr>\r\n            </table>\r\n            <nav aria-label=\"Page navigation example\" class=\"pt-5\">\r\n                    <ul class=\"pagination justify-content-end\">\r\n                      <li class=\"page-item\">\r\n                        <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n                          <span aria-hidden=\"true\">&laquo;</span>\r\n                          <span class=\"sr-only\">Previous</span>\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"page-item\"><a class=\"page-link active\" href=\"#\">1</a></li>\r\n                      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                      <li class=\"page-item\">\r\n                        <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n                          <span aria-hidden=\"true\">&raquo;</span>\r\n                          <span class=\"sr-only\">Next</span>\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </nav>\r\n          </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");



/* import { LoginComponent } from './login/login.component'; */

const APP_ROUTES = [
    /* { path: 'login', component: LoginComponent}, */
    { path: 'body', component: _body_body_component__WEBPACK_IMPORTED_MODULE_3__["BodyComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'body' },
    { path: '**', pathMatch: 'full', redirectTo: 'body' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(APP_ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'renfe';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: menuFactory, translationsFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuFactory", function() { return menuFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translationsFactory", function() { return translationsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _navbar_left_navbar_left_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar-left/navbar-left.component */ "./src/app/navbar-left/navbar-left.component.ts");
/* harmony import */ var _conten_der_conten_der_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conten-der/conten-der.component */ "./src/app/conten-der/conten-der.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _pipes_sanitizar_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/sanitizar.pipe */ "./src/app/pipes/sanitizar.pipe.ts");
/* harmony import */ var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/translate.pipe */ "./src/app/pipes/translate.pipe.ts");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/translate.service */ "./src/app/services/translate.service.ts");
/* harmony import */ var _pipes_capitalizar_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/capitalizar.pipe */ "./src/app/pipes/capitalizar.pipe.ts");

















function menuFactory(provider) {
    return () => provider.getData();
}
function translationsFactory(provider) {
    return () => provider.getData();
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _body_body_component__WEBPACK_IMPORTED_MODULE_6__["BodyComponent"],
            _navbar_left_navbar_left_component__WEBPACK_IMPORTED_MODULE_7__["NavbarLeftComponent"],
            _conten_der_conten_der_component__WEBPACK_IMPORTED_MODULE_8__["ContenDerComponent"],
            _table_table_component__WEBPACK_IMPORTED_MODULE_9__["TableComponent"],
            _pipes_sanitizar_pipe__WEBPACK_IMPORTED_MODULE_13__["SanitizarPipe"],
            _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"],
            _pipes_capitalizar_pipe__WEBPACK_IMPORTED_MODULE_16__["CapitalizarPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ],
        providers: [
            _services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"],
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                useFactory: menuFactory,
                deps: [_services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]],
                multi: true
            },
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                useFactory: translationsFactory,
                deps: [_services_translate_service__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/body/body.component.scss":
/*!******************************************!*\
  !*** ./src/app/body/body.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-body .cont-gen {\n  display: flex;\n}\n.main-body .cont-gen .w-nav-left {\n  width: 18rem;\n}\n.main-body .cont-gen .w-cont-der {\n  width: calc(100% - 18rem);\n  min-height: 100vh;\n}\n@media only screen and (max-width: 992px) {\n  .main-body .cont-gen {\n    display: block;\n  }\n  .main-body .cont-gen .w-nav-left {\n    width: 100%;\n  }\n  .main-body .cont-gen .w-cont-der {\n    width: 100%;\n    min-height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9DOlxcVXNlcnNcXFg1MTQyM1pBXFxEZXNhcnJvbGxvXFxQcm95ZWN0byBSZW5mZVxcUmVuZmVEaXNlbm8vc3JjXFxhcHBcXGJvZHlcXGJvZHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7QUNBSjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FEQ0k7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FDQ047QURJQTtFQUVJO0lBQ0UsY0FBQTtFQ0ZKO0VER0k7SUFDRSxXQUFBO0VDRE47RURHSTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ib2R5L2JvZHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1ib2R5IHtcclxuICAuY29udC1nZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC53LW5hdi1sZWZ0IHtcclxuICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgfVxyXG4gICAgLnctY29udC1kZXIge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMThyZW0pO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubWFpbi1ib2R5IHtcclxuICAgIC5jb250LWdlbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAudy1uYXYtbGVmdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnctY29udC1kZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLm1haW4tYm9keSAuY29udC1nZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW4tYm9keSAuY29udC1nZW4gLnctbmF2LWxlZnQge1xuICB3aWR0aDogMThyZW07XG59XG4ubWFpbi1ib2R5IC5jb250LWdlbiAudy1jb250LWRlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxOHJlbSk7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYWluLWJvZHkgLmNvbnQtZ2VuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAubWFpbi1ib2R5IC5jb250LWdlbiAudy1uYXYtbGVmdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm1haW4tYm9keSAuY29udC1nZW4gLnctY29udC1kZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



let BodyComponent = class BodyComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.informe = this.dataService.valores[0].id;
    }
    showInform(mensaje) {
        this.informe = mensaje;
    }
};
BodyComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-body',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./body.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/body/body.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./body.component.scss */ "./src/app/body/body.component.scss")).default]
    })
], BodyComponent);



/***/ }),

/***/ "./src/app/conten-der/conten-der.component.scss":
/*!******************************************************!*\
  !*** ./src/app/conten-der/conten-der.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n* {\n  /* No agranda padding o border*/\n  box-sizing: border-box;\n}\n.flaticon-search-1:before {\n  content: \"\";\n}\nbody {\n  /* No margen por defecto del body */\n  margin: 0;\n  /* Better Font Rendering  */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nimg {\n  /* Quita bode por defecto del in-line*/\n  display: block;\n  /* ancho maximo el 100% del ancho del padre*/\n  max-width: 100%;\n  /* Mantiene proporcion al reescalar*/\n  height: auto;\n}\n/* Add the correct display in IE 9- */\naudio,\nvideo {\n  display: inline-block;\n}\n/* Add the correct display in iOS 4-7 */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/* Add the correct display in IE 9- */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\nfigcaption,\nfigure,\nmain {\n  display: block;\n}\nul {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n:focus {\n  outline: none;\n  box-shadow: none;\n}\n/***************************************/\nbody {\n  color: #000000;\n}\n::-webkit-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #000000;\n  font-size: 1rem;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #000000;\n  font-size: 1rem;\n}\n:-ms-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n/* Animaciones, extracto de la librería animate */\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.fast {\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n}\n.con-der {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.con-der .header {\n  height: 3rem;\n  padding-left: 1rem;\n}\n.con-der .header h1.title {\n  font-weight: 500;\n  font-size: 1.125rem;\n  color: #272833;\n  text-transform: uppercase;\n}\n.con-der .header .input-group.busc-inf {\n  width: 50%;\n  margin-right: 3rem;\n}\n.con-der .header .input-group.busc-inf .form-control {\n  font-size: 1rem;\n  color: #000000;\n}\n.con-der .header .text-grey {\n  font-size: 1rem;\n  color: #737373;\n}\n.con-der .header .btn-usu {\n  width: 1.9444rem;\n  height: 1.9444rem;\n  background-color: #82005E;\n  border-radius: 4px;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0.5rem;\n}\n.con-der .body {\n  flex-grow: 1;\n}\n.con-der .body .migas {\n  background-color: #DBDBDB;\n  height: 3rem;\n  padding-left: 1rem;\n  align-items: center;\n}\n.con-der .body .migas .mig-text {\n  margin: 0;\n  font-size: 1rem;\n  margin-right: 1rem;\n  margin-left: 1rem;\n  position: relative;\n}\n.con-der .body .migas .mig-text::after {\n  content: url('migas-arrow.svg');\n  position: absolute;\n  right: -1rem;\n  top: 0.1em;\n}\n.con-der .body .migas .mig-text:first-of-type {\n  margin-left: 0;\n}\n.con-der .body .migas .mig-text:last-of-type {\n  font-weight: 700;\n}\n.con-der .body .migas .mig-text:last-of-type::after {\n  content: \"\";\n}\n.con-der .body .naveg-intern .link-nav-act {\n  border-top: 2px solid #82005E;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.con-der .body .naveg-intern .link-nav-act a {\n  color: #82005E;\n}\n.con-der .body .naveg-intern .bg-grey {\n  background-color: #DBDBDB;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.con-der .body .naveg-intern .bg-grey a {\n  color: #000000;\n}\n.con-der .body .naveg-intern .bg-grey .btn {\n  background-color: #82005E;\n  color: #ffffff;\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n.con-der .body .conten-log-inf {\n  height: 7rem;\n}\n.con-der .body .conten-log-inf .text-inf {\n  font-weight: 500;\n  font-size: 1.875rem;\n}\n.con-der .body .conten-iframe {\n  width: 100%;\n}\n.con-der .body .conten-iframe iframe {\n  height: calc(100vh - 19.5rem);\n  width: 100%;\n}\n.con-der footer {\n  height: 3rem;\n  width: 100%;\n  background-color: #7D7D7D;\n}\n@media only screen and (max-width: 992px) {\n  .con-der {\n    width: 100%;\n    margin-top: 5rem;\n  }\n  .con-der .header {\n    height: 4rem;\n  }\n  .con-der .header h1.title {\n    font-weight: 500;\n    font-size: 0.9rem;\n    color: #272833;\n    text-transform: uppercase;\n  }\n  .con-der .header .input-group.busc-inf {\n    width: 50%;\n    margin-right: 3rem;\n  }\n  .con-der .header .input-group.busc-inf .form-control {\n    font-size: 1rem;\n    color: #000000;\n  }\n  .con-der .header .text-grey {\n    font-size: 1rem;\n    color: #737373;\n  }\n  .con-der .header .btn-usu {\n    width: 1.9444rem;\n    height: 1.9444rem;\n    background-color: #82005E;\n    border-radius: 4px;\n    color: #ffffff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 0.5rem;\n  }\n  .con-der .body .naveg-intern .link-nav-act {\n    padding: 0.7rem 0;\n  }\n  .con-der .body .naveg-intern .link-nav-act a {\n    font-size: 0.9rem;\n  }\n  .con-der .body .naveg-intern .bg-grey a {\n    color: #000000;\n    font-size: 0.9rem;\n  }\n  .con-der .body .naveg-intern .bg-grey .btn {\n    background-color: #82005E;\n    color: #ffffff;\n    font-size: 0.8125rem;\n    font-weight: 500;\n    margin-top: 1.5rem;\n  }\n  .con-der .body .naveg-intern .bg-grey:last-of-type {\n    background-color: transparent;\n  }\n  .con-der .body .conten-log-inf .text-inf {\n    font-weight: 500;\n    font-size: 1.3rem;\n  }\n  .con-der footer {\n    display: none;\n  }\n}\n@media only screen and (max-width: 1200px) and (min-width: 993px) {\n  .con-der .naveg-intern .bg-grey .btn {\n    background-color: #82005E;\n    color: #ffffff;\n    font-size: 0.6rem;\n    font-weight: 500;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVuLWRlci9jb250ZW4tZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250ZW4tZGVyL0M6XFxVc2Vyc1xcWDUxNDIzWkFcXERlc2Fycm9sbG9cXFByb3llY3RvIFJlbmZlXFxSZW5mZURpc2Vuby9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9jb250ZW4tZGVyL0M6XFxVc2Vyc1xcWDUxNDIzWkFcXERlc2Fycm9sbG9cXFByb3llY3RvIFJlbmZlXFxSZW5mZURpc2Vuby9zcmNcXGNvbG9ycy5zY3NzIiwic3JjL2FwcC9jb250ZW4tZGVyL0M6XFxVc2Vyc1xcWDUxNDIzWkFcXERlc2Fycm9sbG9cXFByb3llY3RvIFJlbmZlXFxSZW5mZURpc2Vuby9zcmNcXGFwcFxcY29udGVuLWRlclxcY29udGVuLWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0FEQ0Y7QUNDQTtFQUNFLFlBQUE7QURFRjtBQ0FBO0VBQ0UsbUNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FER0Y7QUNEQTtFQUNFLHNDQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBRElGO0FDRkEscUNBQUE7QUFDQTs7RUFFRSxxQkFBQTtBREtGO0FDSEEsdUNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FETUY7QUNKQSxxQ0FBQTtBQUNBOzs7Ozs7RUFNRSxjQUFBO0FET0Y7QUNMQTs7O0VBR0UsY0FBQTtBRFFGO0FDTkE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FEU0Y7QUNQQTtFQUNFLGdCQUFBO0FEVUY7QUNSQTtFQUNFLHFCQUFBO0FEV0Y7QUNUQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBRFlGO0FDVkEsd0NBQUE7QUFDQTtFQUNFLGNDN0RXO0FGMEViO0FDWEE7RUFDRSxjQ2hFVztFRGlFWCxlQUFBO0FEY0Y7QUNYQTtFQUNFLGdCQUFBO0VBQ0EsY0N0RVc7RUR1RVgsZUFBQTtBRGNGO0FDWEE7RUFDRSxnQkFBQTtFQUNBLGNDNUVXO0VENkVYLGVBQUE7QURjRjtBQ1hBO0VBQ0UsY0NqRlc7RURrRlgsZUFBQTtBRGNGO0FDWEEsaURBQUE7QUFFQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FEYUY7QUNWQTtFQUNFLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FEYUY7QUNWQTtFQUNFO0lBQ0UsVUFBQTtFRGFGO0VDVkE7SUFDRSxVQUFBO0VEWUY7QUFDRjtBQ25CQTtFQUNFO0lBQ0UsVUFBQTtFRGFGO0VDVkE7SUFDRSxVQUFBO0VEWUY7QUFDRjtBQ1RBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBRFdGO0FHM0hBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBSDhIRjtBRzdIRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBSCtISjtBRzlISTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRFRPO0VDVVAseUJBQUE7QUhnSU47QUc5SEk7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUhnSU47QUcvSE07RUFDRSxlQUFBO0VBQ0EsY0RsQks7QUZtSmI7QUc5SEk7RUFDRSxlQUFBO0VBQ0EsY0RsQk07QUZrSlo7QUc5SEk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJEN0JTO0VDOEJULGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUhnSU47QUc3SEU7RUFDRSxZQUFBO0FIK0hKO0FHOUhJO0VBQ0UseUJEbENXO0VDbUNYLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FIZ0lOO0FHL0hNO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUhpSVI7QUdoSVE7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUhrSVY7QUdoSVE7RUFDRSxjQUFBO0FIa0lWO0FHaElRO0VBQ0UsZ0JBQUE7QUhrSVY7QUdqSVU7RUFDRSxXQUFBO0FIbUlaO0FHN0hNO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUgrSFI7QUc5SFE7RUFDRSxjRDVFSztBRjRNZjtBRzdITTtFQUNFLHlCRHpFUztFQzBFVCxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBSCtIUjtBRzlIUTtFQUNFLGNEcEZHO0FGb05iO0FHOUhRO0VBQ0UseUJEeEZLO0VDeUZMLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FIZ0lWO0FHNUhJO0VBQ0UsWUFBQTtBSDhITjtBRzdITTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUgrSFI7QUc1SEk7RUFDQSxXQUFBO0FIOEhKO0FHN0hNO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0FIK0hSO0FHM0hFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkR6R1c7QUZzT2Y7QUcxSEE7RUFDRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFSDZIRjtFRzVIRTtJQUNFLFlBQUE7RUg4SEo7RUc3SEk7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsY0QzSEs7SUM0SEwseUJBQUE7RUgrSE47RUc3SEk7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7RUgrSE47RUc5SE07SUFDRSxlQUFBO0lBQ0EsY0RwSUc7RUZvUVg7RUc3SEk7SUFDRSxlQUFBO0lBQ0EsY0RwSUk7RUZtUVY7RUc3SEk7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EseUJEL0lPO0lDZ0pQLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUgrSE47RUcxSE07SUFFRSxpQkFBQTtFSDJIUjtFRzFIUTtJQUNFLGlCQUFBO0VINEhWO0VHdEhRO0lBQ0UsY0RwS0M7SUNxS0QsaUJBQUE7RUh3SFY7RUd0SFE7SUFDRSx5QkR6S0c7SUMwS0gsY0FBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFSHdIVjtFR3RIUTtJQUNFLDZCQUFBO0VId0hWO0VHbkhNO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFSHFIUjtFR2hIRTtJQUNFLGFBQUE7RUhrSEo7QUFDRjtBRy9HQTtFQUlRO0lBQ0UseUJEdE1LO0lDdU1MLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VIOEdSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250ZW4tZGVyL2NvbnRlbi1kZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4qIHtcbiAgLyogTm8gYWdyYW5kYSBwYWRkaW5nIG8gYm9yZGVyKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZsYXRpY29uLXNlYXJjaC0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74aWXCI7XG59XG5cbmJvZHkge1xuICAvKiBObyBtYXJnZW4gcG9yIGRlZmVjdG8gZGVsIGJvZHkgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiBCZXR0ZXIgRm9udCBSZW5kZXJpbmcgICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5pbWcge1xuICAvKiBRdWl0YSBib2RlIHBvciBkZWZlY3RvIGRlbCBpbi1saW5lKi9cbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qIGFuY2hvIG1heGltbyBlbCAxMDAlIGRlbCBhbmNobyBkZWwgcGFkcmUqL1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8qIE1hbnRpZW5lIHByb3BvcmNpb24gYWwgcmVlc2NhbGFyKi9cbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LSAqL1xuYXVkaW8sXG52aWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gaU9TIDQtNyAqL1xuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LSAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZm9vdGVyLFxuaGVhZGVyLFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5maWdjYXB0aW9uLFxuZmlndXJlLFxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG51bCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5ib2R5IHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOSsgKi9cbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi8qIEFuaW1hY2lvbmVzLCBleHRyYWN0byBkZSBsYSBsaWJyZXLDrWEgYW5pbWF0ZSAqL1xuLmFuaW1hdGVkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5mYXN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5mYWRlSW4ge1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xufVxuXG4uY29uLWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb24tZGVyIC5oZWFkZXIge1xuICBoZWlnaHQ6IDNyZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cbi5jb24tZGVyIC5oZWFkZXIgaDEudGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogIzI3MjgzMztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jb24tZGVyIC5oZWFkZXIgLmlucHV0LWdyb3VwLmJ1c2MtaW5mIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xufVxuLmNvbi1kZXIgLmhlYWRlciAuaW5wdXQtZ3JvdXAuYnVzYy1pbmYgLmZvcm0tY29udHJvbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uY29uLWRlciAuaGVhZGVyIC50ZXh0LWdyZXkge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNzM3MzczO1xufVxuLmNvbi1kZXIgLmhlYWRlciAuYnRuLXVzdSB7XG4gIHdpZHRoOiAxLjk0NDRyZW07XG4gIGhlaWdodDogMS45NDQ0cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODIwMDVFO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cbi5jb24tZGVyIC5ib2R5IHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmNvbi1kZXIgLmJvZHkgLm1pZ2FzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RCREJEQjtcbiAgaGVpZ2h0OiAzcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29uLWRlciAuYm9keSAubWlnYXMgLm1pZy10ZXh0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb24tZGVyIC5ib2R5IC5taWdhcyAubWlnLXRleHQ6OmFmdGVyIHtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ljb25zL21pZ2FzLWFycm93LnN2Z1wiKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTFyZW07XG4gIHRvcDogMC4xZW07XG59XG4uY29uLWRlciAuYm9keSAubWlnYXMgLm1pZy10ZXh0OmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5jb24tZGVyIC5ib2R5IC5taWdhcyAubWlnLXRleHQ6bGFzdC1vZi10eXBlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5jb24tZGVyIC5ib2R5IC5taWdhcyAubWlnLXRleHQ6bGFzdC1vZi10eXBlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4uY29uLWRlciAuYm9keSAubmF2ZWctaW50ZXJuIC5saW5rLW5hdi1hY3Qge1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzgyMDA1RTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb24tZGVyIC5ib2R5IC5uYXZlZy1pbnRlcm4gLmxpbmstbmF2LWFjdCBhIHtcbiAgY29sb3I6ICM4MjAwNUU7XG59XG4uY29uLWRlciAuYm9keSAubmF2ZWctaW50ZXJuIC5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RCREJEQjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29uLWRlciAuYm9keSAubmF2ZWctaW50ZXJuIC5iZy1ncmV5IGEge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5jb24tZGVyIC5ib2R5IC5uYXZlZy1pbnRlcm4gLmJnLWdyZXkgLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MjAwNUU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jb24tZGVyIC5ib2R5IC5jb250ZW4tbG9nLWluZiB7XG4gIGhlaWdodDogN3JlbTtcbn1cbi5jb24tZGVyIC5ib2R5IC5jb250ZW4tbG9nLWluZiAudGV4dC1pbmYge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuODc1cmVtO1xufVxuLmNvbi1kZXIgLmJvZHkgLmNvbnRlbi1pZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb24tZGVyIC5ib2R5IC5jb250ZW4taWZyYW1lIGlmcmFtZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE5LjVyZW0pO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb24tZGVyIGZvb3RlciB7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3RDdEN0Q7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbi1kZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gIH1cbiAgLmNvbi1kZXIgLmhlYWRlciB7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICB9XG4gIC5jb24tZGVyIC5oZWFkZXIgaDEudGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICMyNzI4MzM7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICAuY29uLWRlciAuaGVhZGVyIC5pbnB1dC1ncm91cC5idXNjLWluZiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gIH1cbiAgLmNvbi1kZXIgLmhlYWRlciAuaW5wdXQtZ3JvdXAuYnVzYy1pbmYgLmZvcm0tY29udHJvbCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIC5jb24tZGVyIC5oZWFkZXIgLnRleHQtZ3JleSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICB9XG4gIC5jb24tZGVyIC5oZWFkZXIgLmJ0bi11c3Uge1xuICAgIHdpZHRoOiAxLjk0NDRyZW07XG4gICAgaGVpZ2h0OiAxLjk0NDRyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgyMDA1RTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIH1cbiAgLmNvbi1kZXIgLmJvZHkgLm5hdmVnLWludGVybiAubGluay1uYXYtYWN0IHtcbiAgICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgfVxuICAuY29uLWRlciAuYm9keSAubmF2ZWctaW50ZXJuIC5saW5rLW5hdi1hY3QgYSB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbiAgLmNvbi1kZXIgLmJvZHkgLm5hdmVnLWludGVybiAuYmctZ3JleSBhIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICAuY29uLWRlciAuYm9keSAubmF2ZWctaW50ZXJuIC5iZy1ncmV5IC5idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MjAwNUU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIH1cbiAgLmNvbi1kZXIgLmJvZHkgLm5hdmVnLWludGVybiAuYmctZ3JleTpsYXN0LW9mLXR5cGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIC5jb24tZGVyIC5ib2R5IC5jb250ZW4tbG9nLWluZiAudGV4dC1pbmYge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgLmNvbi1kZXIgZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDk5M3B4KSB7XG4gIC5jb24tZGVyIC5uYXZlZy1pbnRlcm4gLmJnLWdyZXkgLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgyMDA1RTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59IiwiQGltcG9ydCBcIi4vY29sb3JzLnNjc3NcIjtcclxuKiB7XHJcbiAgLyogTm8gYWdyYW5kYSBwYWRkaW5nIG8gYm9yZGVyKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5mbGF0aWNvbi1zZWFyY2gtMTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxmMTk2XCI7XHJcbn1cclxuYm9keSB7XHJcbiAgLyogTm8gbWFyZ2VuIHBvciBkZWZlY3RvIGRlbCBib2R5ICovXHJcbiAgbWFyZ2luOiAwO1xyXG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyAgKi9cclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcbmltZyB7XHJcbiAgLyogUXVpdGEgYm9kZSBwb3IgZGVmZWN0byBkZWwgaW4tbGluZSovXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLyogYW5jaG8gbWF4aW1vIGVsIDEwMCUgZGVsIGFuY2hvIGRlbCBwYWRyZSovXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIC8qIE1hbnRpZW5lIHByb3BvcmNpb24gYWwgcmVlc2NhbGFyKi9cclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cclxuYXVkaW8sXHJcbnZpZGVvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gaU9TIDQtNyAqL1xyXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcbi8qIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktICovXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxubmF2LFxyXG5zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5maWdjYXB0aW9uLFxyXG5maWd1cmUsXHJcbm1haW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbnVsIHtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxufVxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuYm9keSB7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG59XHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIC8qIEZpcmVmb3ggMTgtICovXHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAvKiBGaXJlZm94IDE5KyAqL1xyXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi8qIEFuaW1hY2lvbmVzLCBleHRyYWN0byBkZSBsYSBsaWJyZXLDrWEgYW5pbWF0ZSAqL1xyXG5cclxuLmFuaW1hdGVkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuLmZhc3Qge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZUluIHtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG59XHJcbiIsIiRjb2xvci1wcmltYXJ5OiM4MjAwNUU7XHJcbiR0ZXh0LWNvbG9yOiAjMDAwMDAwO1xyXG4kY29sb3ItZGFyazogIzI3MjgzMztcclxuJGJvcmRlci1jb2xvcjogI0U2RTZFNjtcclxuJGNvbG9yLWFsZXJ0OiByZ2JhKDI1NSwgMjMsIDMzLCAwLjEpO1xyXG4kd2hpdGUtc2Vjb25kYXJ5OiNGMEU4QzA7XHJcbiRjb2xvci1ncmV5OiM3MzczNzM7XHJcbiRiYWNrZ3JvdW5kLWdyZXk6I0RCREJEQjtcclxuJGZvb3Rlci1jb2xvcjogIzdEN0Q3RDtcclxuJGNvbG9yLWdyZWVuOiAjMkJBRDBEO1xyXG4kY29sb3ItcmVkOiNEQzM1NDU7XHJcbiRjb2xvci15ZWxsb3c6cmdiYSgyNTUsIDIwNCwgMCwgMC45KTsiLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuLmNvbi1kZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBoMS50aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItZGFyaztcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICAgIC5pbnB1dC1ncm91cC5idXNjLWluZiB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRleHQtZ3JleSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgY29sb3I6ICRjb2xvci1ncmV5O1xyXG4gICAgfVxyXG4gICAgLmJ0bi11c3Uge1xyXG4gICAgICB3aWR0aDogMS45NDQ0cmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuOTQ0NHJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYm9keSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAubWlnYXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1ncmV5O1xyXG4gICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLm1pZy10ZXh0IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ljb25zL21pZ2FzLWFycm93LnN2Z1wiKTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAtMXJlbTtcclxuICAgICAgICAgIHRvcDogMC4xZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXZlZy1pbnRlcm4ge1xyXG4gICAgICAubGluay1uYXYtYWN0IHtcclxuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmJnLWdyZXkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWdyZXk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVuLWxvZy1pbmYge1xyXG4gICAgICBoZWlnaHQ6IDdyZW07XHJcbiAgICAgIC50ZXh0LWluZiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuODc1MHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRlbi1pZnJhbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTkuNXJlbSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9vdGVyIHtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZvb3Rlci1jb2xvcjtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5jb24tZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgIGgxLnRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1kYXJrO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgICAgLmlucHV0LWdyb3VwLmJ1c2MtaW5mIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtZ3JleSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleTtcclxuICAgICAgfVxyXG4gICAgICAuYnRuLXVzdSB7XHJcbiAgICAgICAgd2lkdGg6IDEuOTQ0NHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDEuOTQ0NHJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5ib2R5IHtcclxuICAgICAgLm5hdmVnLWludGVybiB7XHJcbiAgICAgICAgLmxpbmstbmF2LWFjdCB7XHJcbiAgICAgICAgICAvLyBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iZy1ncmV5IHtcclxuICAgICAgICAgIC8vICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY29udGVuLWxvZy1pbmYge1xyXG4gICAgICAgIC50ZXh0LWluZiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOjEuM3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICBmb290ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDk5M3B4KSB7XHJcbiAgLmNvbi1kZXIge1xyXG4gICAgLm5hdmVnLWludGVybiB7XHJcbiAgICAgIC5iZy1ncmV5IHtcclxuICAgICAgICAuYnRuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/conten-der/conten-der.component.ts":
/*!****************************************************!*\
  !*** ./src/app/conten-der/conten-der.component.ts ***!
  \****************************************************/
/*! exports provided: ContenDerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenDerComponent", function() { return ContenDerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let ContenDerComponent = class ContenDerComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.urlPowerbi = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlPowerbi;
        this.informes = this.dataService.valores;
    }
    set informe(value) {
        this.informeId = value;
        this.searchInforme();
    }
    toPdf() {
        const url = 'https://url-to-pdf-api.herokuapp.com/api/render?';
        const params = 'pdf.landscape=true&viewport.width=900&pdf.margin.top=100&pdf.margin.left=100&url=';
        window.open(url + params + this.urlPowerbi + this.urlInforme, '_blank');
    }
    searchInforme() {
        for (const informe of this.informes) {
            if (informe.submenus) {
                for (const item of informe.submenus) {
                    if (this.compareSetUrlInforme(item, informe)) {
                        break;
                    }
                }
            }
            else {
                if (this.compareSetUrlInforme(informe)) {
                    break;
                }
            }
        }
    }
    compareSetUrlInforme(informe, padre) {
        if (Object.is(this.informeId, informe.id)) {
            this.urlInforme = informe.iframe;
            this.tituloInforme = informe.texto;
            this.tituloInformePadre = padre ? padre.texto : null;
            return true;
        }
        else {
            return false;
        }
    }
};
ContenDerComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContenDerComponent.prototype, "informe", null);
ContenDerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-conten-der',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./conten-der.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/conten-der/conten-der.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./conten-der.component.scss */ "./src/app/conten-der/conten-der.component.scss")).default]
    })
], ContenDerComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n* {\n  /* No agranda padding o border*/\n  box-sizing: border-box;\n}\n.flaticon-search-1:before {\n  content: \"\";\n}\nbody {\n  /* No margen por defecto del body */\n  margin: 0;\n  /* Better Font Rendering  */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nimg {\n  /* Quita bode por defecto del in-line*/\n  display: block;\n  /* ancho maximo el 100% del ancho del padre*/\n  max-width: 100%;\n  /* Mantiene proporcion al reescalar*/\n  height: auto;\n}\n/* Add the correct display in IE 9- */\naudio,\nvideo {\n  display: inline-block;\n}\n/* Add the correct display in iOS 4-7 */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/* Add the correct display in IE 9- */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\nfigcaption,\nfigure,\nmain {\n  display: block;\n}\nul {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n:focus {\n  outline: none;\n  box-shadow: none;\n}\n/***************************************/\nbody {\n  color: #000000;\n}\n::-webkit-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #000000;\n  font-size: 1rem;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #000000;\n  font-size: 1rem;\n}\n:-ms-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n/* Animaciones, extracto de la librería animate */\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.fast {\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n}\n.login {\n  min-height: 100vh;\n}\n.login .backgr-login {\n  background-image: url(admin/resources/assets/images/background-login.png);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100vh;\n  position: relative;\n}\n.login .backgr-login .text-log {\n  position: absolute;\n  width: 50%;\n  bottom: 20%;\n  right: 5%;\n}\n.login .backgr-login .text-log h1 {\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 46px;\n  text-align: right;\n  padding-bottom: 1.5rem;\n}\n.login .backgr-login .text-log h4 {\n  font-weight: 500;\n  font-size: 24px;\n  color: #F0E8C0;\n  text-align: right;\n}\n.login .conten-log {\n  width: 80%;\n  margin: auto;\n}\n.login .conten-log .inic-ses {\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 23px;\n}\n.login .conten-log .contras-ave .invalid-feedback-ave {\n  background-color: rgba(255, 23, 33, 0.1);\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 21px;\n}\n.login .conten-log .contras-ave label {\n  font-size: 18px;\n  line-height: 20px;\n}\n.login .conten-log .contras-ave .form-control {\n  border: none;\n  border-bottom: #E6E6E6 1px solid;\n}\n.login .conten-log .contras-ave .btn.btn-primary {\n  background-color: #82005E;\n  border: none;\n  padding: 0.5rem 3rem;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 16px;\n}\n.login .login-ave {\n  min-height: 100vh;\n}\n@media only screen and (max-width: 1640px) {\n  .login .backgr-login .text-log {\n    width: 70%;\n  }\n}\n@media only screen and (max-width: 1200px) {\n  .login .backgr-login .text-log {\n    width: 90%;\n    bottom: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL0M6XFxVc2Vyc1xcWDUxNDIzWkFcXERlc2Fycm9sbG9cXFByb3llY3RvIFJlbmZlXFxSZW5mZURpc2Vuby9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9sb2dpbi9DOlxcVXNlcnNcXFg1MTQyM1pBXFxEZXNhcnJvbGxvXFxQcm95ZWN0byBSZW5mZVxcUmVuZmVEaXNlbm8vc3JjXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxYNTE0MjNaQVxcRGVzYXJyb2xsb1xcUHJveWVjdG8gUmVuZmVcXFJlbmZlRGlzZW5vL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0UsK0JBQUE7RUFDQSxzQkFBQTtBRENGO0FDQ0E7RUFDRSxZQUFBO0FERUY7QUNBQTtFQUNFLG1DQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBREdGO0FDREE7RUFDRSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QURJRjtBQ0ZBLHFDQUFBO0FBQ0E7O0VBRUUscUJBQUE7QURLRjtBQ0hBLHVDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBRE1GO0FDSkEscUNBQUE7QUFDQTs7Ozs7O0VBTUUsY0FBQTtBRE9GO0FDTEE7OztFQUdFLGNBQUE7QURRRjtBQ05BO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBRFNGO0FDUEE7RUFDRSxnQkFBQTtBRFVGO0FDUkE7RUFDRSxxQkFBQTtBRFdGO0FDVEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QURZRjtBQ1ZBLHdDQUFBO0FBQ0E7RUFDRSxjQzdEVztBRjBFYjtBQ1hBO0VBQ0UsY0NoRVc7RURpRVgsZUFBQTtBRGNGO0FDWEE7RUFDRSxnQkFBQTtFQUNBLGNDdEVXO0VEdUVYLGVBQUE7QURjRjtBQ1hBO0VBQ0UsZ0JBQUE7RUFDQSxjQzVFVztFRDZFWCxlQUFBO0FEY0Y7QUNYQTtFQUNFLGNDakZXO0VEa0ZYLGVBQUE7QURjRjtBQ1hBLGlEQUFBO0FBRUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBRGFGO0FDVkE7RUFDRSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBRGFGO0FDVkE7RUFDRTtJQUNFLFVBQUE7RURhRjtFQ1ZBO0lBQ0UsVUFBQTtFRFlGO0FBQ0Y7QUNuQkE7RUFDRTtJQUNFLFVBQUE7RURhRjtFQ1ZBO0lBQ0UsVUFBQTtFRFlGO0FBQ0Y7QUNUQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QURXRjtBRzNIQTtFQUNFLGlCQUFBO0FIOEhGO0FHN0hFO0VBQ0UsMERBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FIK0hKO0FHOUhJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUhnSU47QUcvSE07RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBSGlJUjtBRy9ITTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNEckJTO0VDc0JULGlCQUFBO0FIaUlSO0FHN0hFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUgrSEo7QUc5SEk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBSGdJTjtBRzdITTtFQUNFLHdDRHJDTTtFQ3NDTixnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBSCtIUjtBRzdITTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBSCtIUjtBRzdITTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtBSCtIUjtBRzdITTtFQUNFLHlCRHZETztFQ3dEUCxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBSCtIUjtBRzNIRTtFQUNFLGlCQUFBO0FINkhKO0FHMUhBO0VBR007SUFDRSxVQUFBO0VIMkhOO0FBQ0Y7QUd2SEE7RUFHTTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VIdUhOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICAvKiBObyBhZ3JhbmRhIHBhZGRpbmcgbyBib3JkZXIqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZmxhdGljb24tc2VhcmNoLTE6YmVmb3JlIHtcbiAgY29udGVudDogXCLvhpZcIjtcbn1cblxuYm9keSB7XG4gIC8qIE5vIG1hcmdlbiBwb3IgZGVmZWN0byBkZWwgYm9keSAqL1xuICBtYXJnaW46IDA7XG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyAgKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmltZyB7XG4gIC8qIFF1aXRhIGJvZGUgcG9yIGRlZmVjdG8gZGVsIGluLWxpbmUqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogYW5jaG8gbWF4aW1vIGVsIDEwMCUgZGVsIGFuY2hvIGRlbCBwYWRyZSovXG4gIG1heC13aWR0aDogMTAwJTtcbiAgLyogTWFudGllbmUgcHJvcG9yY2lvbiBhbCByZWVzY2FsYXIqL1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktICovXG5hdWRpbyxcbnZpZGVvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03ICovXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktICovXG5hcnRpY2xlLFxuYXNpZGUsXG5mb290ZXIsXG5oZWFkZXIsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnVsIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmJvZHkge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuOi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLyogQW5pbWFjaW9uZXMsIGV4dHJhY3RvIGRlIGxhIGxpYnJlcsOtYSBhbmltYXRlICovXG4uYW5pbWF0ZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmZhc3Qge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmZhZGVJbiB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG59XG5cbi5sb2dpbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmxvZ2luIC5iYWNrZ3ItbG9naW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1sb2dpbi5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvZ2luIC5iYWNrZ3ItbG9naW4gLnRleHQtbG9nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICBib3R0b206IDIwJTtcbiAgcmlnaHQ6IDUlO1xufVxuLmxvZ2luIC5iYWNrZ3ItbG9naW4gLnRleHQtbG9nIGgxIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogNDZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG59XG4ubG9naW4gLmJhY2tnci1sb2dpbiAudGV4dC1sb2cgaDQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjRjBFOEMwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5sb2dpbiAuY29udGVuLWxvZyB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5sb2dpbiAuY29udGVuLWxvZyAuaW5pYy1zZXMge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xufVxuLmxvZ2luIC5jb250ZW4tbG9nIC5jb250cmFzLWF2ZSAuaW52YWxpZC1mZWVkYmFjay1hdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjMsIDMzLCAwLjEpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuLmxvZ2luIC5jb250ZW4tbG9nIC5jb250cmFzLWF2ZSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubG9naW4gLmNvbnRlbi1sb2cgLmNvbnRyYXMtYXZlIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206ICNFNkU2RTYgMXB4IHNvbGlkO1xufVxuLmxvZ2luIC5jb250ZW4tbG9nIC5jb250cmFzLWF2ZSAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyMDA1RTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW0gM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmxvZ2luIC5sb2dpbi1hdmUge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjQwcHgpIHtcbiAgLmxvZ2luIC5iYWNrZ3ItbG9naW4gLnRleHQtbG9nIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAubG9naW4gLmJhY2tnci1sb2dpbiAudGV4dC1sb2cge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm90dG9tOiAxMCU7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi9jb2xvcnMuc2Nzc1wiO1xyXG4qIHtcclxuICAvKiBObyBhZ3JhbmRhIHBhZGRpbmcgbyBib3JkZXIqL1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmZsYXRpY29uLXNlYXJjaC0xOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGYxOTZcIjtcclxufVxyXG5ib2R5IHtcclxuICAvKiBObyBtYXJnZW4gcG9yIGRlZmVjdG8gZGVsIGJvZHkgKi9cclxuICBtYXJnaW46IDA7XHJcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nICAqL1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuaW1nIHtcclxuICAvKiBRdWl0YSBib2RlIHBvciBkZWZlY3RvIGRlbCBpbi1saW5lKi9cclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvKiBhbmNobyBtYXhpbW8gZWwgMTAwJSBkZWwgYW5jaG8gZGVsIHBhZHJlKi9cclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgLyogTWFudGllbmUgcHJvcG9yY2lvbiBhbCByZWVzY2FsYXIqL1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4vKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LSAqL1xyXG5hdWRpbyxcclxudmlkZW8ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4vKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03ICovXHJcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5uYXYsXHJcbnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmZpZ2NhcHRpb24sXHJcbmZpZ3VyZSxcclxubWFpbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxudWwge1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xyXG59XHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5ib2R5IHtcclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG46LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgLyogRmlyZWZveCAxOC0gKi9cclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG46Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLyogQW5pbWFjaW9uZXMsIGV4dHJhY3RvIGRlIGxhIGxpYnJlcsOtYSBhbmltYXRlICovXHJcblxyXG4uYW5pbWF0ZWQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG4uZmFzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbn1cclxuIiwiJGNvbG9yLXByaW1hcnk6IzgyMDA1RTtcclxuJHRleHQtY29sb3I6ICMwMDAwMDA7XHJcbiRjb2xvci1kYXJrOiAjMjcyODMzO1xyXG4kYm9yZGVyLWNvbG9yOiAjRTZFNkU2O1xyXG4kY29sb3ItYWxlcnQ6IHJnYmEoMjU1LCAyMywgMzMsIDAuMSk7XHJcbiR3aGl0ZS1zZWNvbmRhcnk6I0YwRThDMDtcclxuJGNvbG9yLWdyZXk6IzczNzM3MztcclxuJGJhY2tncm91bmQtZ3JleTojREJEQkRCO1xyXG4kZm9vdGVyLWNvbG9yOiAjN0Q3RDdEO1xyXG4kY29sb3ItZ3JlZW46ICMyQkFEMEQ7XHJcbiRjb2xvci1yZWQ6I0RDMzU0NTtcclxuJGNvbG9yLXllbGxvdzpyZ2JhKDI1NSwgMjA0LCAwLCAwLjkpOyIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4ubG9naW4ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIC5iYWNrZ3ItbG9naW4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtbG9naW4ucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC50ZXh0LWxvZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYm90dG9tOiAyMCU7XHJcbiAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiA0NnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgICAgaDQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGUtc2Vjb25kYXJ5O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250ZW4tbG9nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAuaW5pYy1zZXMge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRyYXMtYXZlIHtcclxuICAgICAgLmludmFsaWQtZmVlZGJhY2stYXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYWxlcnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgIH1cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlci1jb2xvciAxcHggc29saWQ7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmxvZ2luLWF2ZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjQwcHgpIHtcclxuICAubG9naW4ge1xyXG4gICAgLmJhY2tnci1sb2dpbiB7XHJcbiAgICAgIC50ZXh0LWxvZyB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5sb2dpbiB7XHJcbiAgICAuYmFja2dyLWxvZ2luIHtcclxuICAgICAgLnRleHQtbG9nIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





let LoginComponent = class LoginComponent {
    constructor(loginService, userService, router) {
        this.loginService = loginService;
        this.userService = userService;
        this.router = router;
    }
    logIn(username, password, event) {
        // Evita la acción predeterminada para el botón de enviar del formulario de inicio de sesión
        event.preventDefault();
        this.navigate(); // TODO: Eliminar
        // Llama al servicio para iniciar sesión en el usuario al resto de la API
        /* this.loginService.login(username, password).subscribe(
          res => {
            const user: User = {
              username
            };
            this.userService.setUserLoggedIn(user);
          },
          error => {
            console.error(error);
            this.alerta = true;
          },
          () => {
            this.navigate();
          }
        ); */
    }
    ocultarAlerta() {
        this.alerta = false;
    }
    navigate() {
        this.router.navigateByUrl('/body');
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/navbar-left/navbar-left.component.scss":
/*!********************************************************!*\
  !*** ./src/app/navbar-left/navbar-left.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n* {\n  /* No agranda padding o border*/\n  box-sizing: border-box;\n}\n.flaticon-search-1:before {\n  content: \"\";\n}\nbody {\n  /* No margen por defecto del body */\n  margin: 0;\n  /* Better Font Rendering  */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nimg {\n  /* Quita bode por defecto del in-line*/\n  display: block;\n  /* ancho maximo el 100% del ancho del padre*/\n  max-width: 100%;\n  /* Mantiene proporcion al reescalar*/\n  height: auto;\n}\n/* Add the correct display in IE 9- */\naudio,\nvideo {\n  display: inline-block;\n}\n/* Add the correct display in iOS 4-7 */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/* Add the correct display in IE 9- */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\nfigcaption,\nfigure,\nmain {\n  display: block;\n}\nul {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n:focus {\n  outline: none;\n  box-shadow: none;\n}\n/***************************************/\nbody {\n  color: #000000;\n}\n::-webkit-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #000000;\n  font-size: 1rem;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #000000;\n  font-size: 1rem;\n}\n:-ms-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n/* Animaciones, extracto de la librería animate */\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.fast {\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n}\n.cont-navb-ave {\n  min-height: 100vh;\n  background-color: #82005E;\n  height: 100%;\n}\n.cont-navb-ave .navbar .bg-black {\n  background-color: #000000;\n  padding: 0.5rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item {\n  cursor: pointer;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item a.nav-link {\n  font-weight: bold;\n  font-size: 12px;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item.active a.nav-link {\n  border-bottom: 4px solid #ffffff;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes {\n  padding: 0rem;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  padding-top: 1.5rem;\n  background-color: #82005E;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li {\n  padding: 0.8rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv {\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 16px;\n  padding-left: 2.5rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.kpi-glob::before {\n  content: url(admin/resources/assets/icons/kpi-glob.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.dat-acces::before {\n  content: url(admin/resources/assets/icons/dat-acces.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.conectiv-exter::before {\n  content: url(admin/resources/assets/icons/conectiv-exter.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.disposit::before {\n  content: url(admin/resources/assets/icons/dispositivos.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.contenid::before {\n  content: url(admin/resources/assets/icons/contenidos.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.sub-arch::before {\n  content: url(admin/resources/assets/icons/subir-archivo.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv::after {\n  content: url(admin/resources/assets/icons/open-ul.svg);\n  position: absolute;\n  right: 2rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.arrowUp::after {\n  content: url(admin/resources/assets/icons/open-ul.svg);\n  position: absolute;\n  right: 2rem;\n  transform: rotate(180deg);\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv {\n  color: #F0E8C0;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv.kpi-glob::before {\n  content: url(admin/resources/assets/icons/kpi-glob-activ.svg);\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv.dat-acces::before {\n  content: url(admin/resources/assets/icons/dat-acces-activ.svg);\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv.conectiv-exter::before {\n  content: url(admin/resources/assets/icons/conectiv-exter-activ.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv.disposit::before {\n  content: url(admin/resources/assets/icons/dispositivos-activ.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv.contenid::before {\n  content: url(admin/resources/assets/icons/contenidos-activ.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv.sub-arch::before {\n  content: url(admin/resources/assets/icons/subir-archivo-activ.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li ul {\n  display: none;\n  padding-top: 0.8rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li ul li {\n  padding: 0.8rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li ul li a {\n  font-weight: normal;\n  font-size: 14px;\n  font-weight: bold;\n  color: #ffffff;\n  padding-left: 2rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li ul li a.active {\n  color: #F0E8C0;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li ul li a.active::before {\n  content: url(admin/resources/assets/icons/point.svg);\n  position: absolute;\n  left: 1.5rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li:nth-of-type(4) a.prim-niv::after, .cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li:nth-of-type(1) a.prim-niv::after, .cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li:nth-of-type(3) a.prim-niv::after, .cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li:nth-of-type(6) a.prim-niv::after {\n  content: \"\";\n}\n@media only screen and (max-width: 992px) {\n  .cont-navb-ave {\n    min-height: auto;\n    height: auto;\n    background-color: #82005E;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 10;\n  }\n  .cont-navb-ave .navbar .navbar-collapse.collapsing {\n    position: relative;\n    height: auto;\n    overflow: visible;\n    transition: none;\n  }\n  .cont-navb-ave .navbar .navbar-collapse ul li.nav-item a.nav-link {\n    padding-left: 3rem;\n  }\n  .cont-navb-ave .navbar .navbar-collapse ul li.nav-item.active a.nav-link {\n    border-bottom: none;\n  }\n  .cont-navb-ave .navbar .navbar-collapse ul li.nav-item .informes {\n    padding: 0rem;\n    position: relative;\n  }\n  .cont-navb-ave .navbar .navbar-collapse ul li.nav-item .informes ul li {\n    padding: 0.8rem;\n  }\n  .cont-navb-ave .navbar .navbar-collapse ul li.nav-item .informes ul li ul {\n    display: none;\n  }\n  .cont-navb-ave .navbar .navbar-collapse ul li.nav-item .informes ul li ul:target {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyLWxlZnQvbmF2YmFyLWxlZnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmJhci1sZWZ0L0M6XFxVc2Vyc1xcWDUxNDIzWkFcXERlc2Fycm9sbG9cXFByb3llY3RvIFJlbmZlXFxSZW5mZURpc2Vuby9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9uYXZiYXItbGVmdC9DOlxcVXNlcnNcXFg1MTQyM1pBXFxEZXNhcnJvbGxvXFxQcm95ZWN0byBSZW5mZVxcUmVuZmVEaXNlbm8vc3JjXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvbmF2YmFyLWxlZnQvQzpcXFVzZXJzXFxYNTE0MjNaQVxcRGVzYXJyb2xsb1xcUHJveWVjdG8gUmVuZmVcXFJlbmZlRGlzZW5vL3NyY1xcYXBwXFxuYXZiYXItbGVmdFxcbmF2YmFyLWxlZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0UsK0JBQUE7RUFDQSxzQkFBQTtBRENGO0FDQ0E7RUFDRSxZQUFBO0FERUY7QUNBQTtFQUNFLG1DQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBREdGO0FDREE7RUFDRSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QURJRjtBQ0ZBLHFDQUFBO0FBQ0E7O0VBRUUscUJBQUE7QURLRjtBQ0hBLHVDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBRE1GO0FDSkEscUNBQUE7QUFDQTs7Ozs7O0VBTUUsY0FBQTtBRE9GO0FDTEE7OztFQUdFLGNBQUE7QURRRjtBQ05BO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBRFNGO0FDUEE7RUFDRSxnQkFBQTtBRFVGO0FDUkE7RUFDRSxxQkFBQTtBRFdGO0FDVEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QURZRjtBQ1ZBLHdDQUFBO0FBQ0E7RUFDRSxjQzdEVztBRjBFYjtBQ1hBO0VBQ0UsY0NoRVc7RURpRVgsZUFBQTtBRGNGO0FDWEE7RUFDRSxnQkFBQTtFQUNBLGNDdEVXO0VEdUVYLGVBQUE7QURjRjtBQ1hBO0VBQ0UsZ0JBQUE7RUFDQSxjQzVFVztFRDZFWCxlQUFBO0FEY0Y7QUNYQTtFQUNFLGNDakZXO0VEa0ZYLGVBQUE7QURjRjtBQ1hBLGlEQUFBO0FBRUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBRGFGO0FDVkE7RUFDRSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBRGFGO0FDVkE7RUFDRTtJQUNFLFVBQUE7RURhRjtFQ1ZBO0lBQ0UsVUFBQTtFRFlGO0FBQ0Y7QUNuQkE7RUFDRTtJQUNFLFVBQUE7RURhRjtFQ1ZBO0lBQ0UsVUFBQTtFRFlGO0FBQ0Y7QUNUQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QURXRjtBRzNIQTtFQUNFLGlCQUFBO0VBQ0EseUJESGE7RUNJYixZQUFBO0FIOEhGO0FHNUhJO0VBQ0UseUJETk87RUNPUCxvQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FIOEhOO0FHMUhRO0VBQ0UsZUFBQTtBSDRIVjtBRzNIVTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBSDZIWjtBRzFIWTtFQUNFLGdDQUFBO0FINEhkO0FHekhVO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLHlCRGhDRztBRjJKZjtBR3pIYztFQUNFLGVBQUE7QUgySGhCO0FHMUhnQjtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBSDRIbEI7QUczSGtCO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUg2SHBCO0FHM0hrQjtFQUNFLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FINkhwQjtBRzNIa0I7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBSDZIcEI7QUczSGtCO0VBQ0UsNENBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUg2SHBCO0FHM0hrQjtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FINkhwQjtBRzNIa0I7RUFDRSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBSDZIcEI7QUczSGtCO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUg2SHBCO0FHM0hrQjtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUg2SHBCO0FHM0hrQjtFQUNFLGNEOUVIO0FGMk1qQjtBRzVIb0I7RUFDRSw4Q0FBQTtBSDhIdEI7QUc1SG9CO0VBQ0UsK0NBQUE7QUg4SHRCO0FHNUhvQjtFQUNFLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FIOEh0QjtBRzVIb0I7RUFDRSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBSDhIdEI7QUc1SG9CO0VBQ0UsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUg4SHRCO0FHNUhvQjtFQUNFLG1EQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FIOEh0QjtBRzFIZ0I7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUg0SGxCO0FHM0hrQjtFQUNFLGVBQUE7QUg2SHBCO0FHNUhvQjtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FIOEh0QjtBRzdIc0I7RUFDRSxjRHZIUDtBRnNQakI7QUc3SHdCO0VBQ0UscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUgrSDFCO0FHckhrQjtFQUNFLFdBQUE7QUh1SHBCO0FHNUdBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLFlBQUE7SUFDQSx5QkQzSlc7SUM0SlgsZUFBQTtJQUNBLE1BQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtFSCtHRjtFR3JHTTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUh1R1I7RUduR1U7SUFHRSxrQkFBQTtFSG1HWjtFR2hHWTtJQUNFLG1CQUFBO0VIa0dkO0VHL0ZVO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VIaUdaO0VHOUZjO0lBQ0UsZUFBQTtFSGdHaEI7RUcxRGdCO0lBRUUsYUFBQTtFSDJEbEI7RUd6RGtCO0lBQ0UsY0FBQTtFSDJEcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci1sZWZ0L25hdmJhci1sZWZ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuKiB7XG4gIC8qIE5vIGFncmFuZGEgcGFkZGluZyBvIGJvcmRlciovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5mbGF0aWNvbi1zZWFyY2gtMTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+GllwiO1xufVxuXG5ib2R5IHtcbiAgLyogTm8gbWFyZ2VuIHBvciBkZWZlY3RvIGRlbCBib2R5ICovXG4gIG1hcmdpbjogMDtcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nICAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW1nIHtcbiAgLyogUXVpdGEgYm9kZSBwb3IgZGVmZWN0byBkZWwgaW4tbGluZSovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiBhbmNobyBtYXhpbW8gZWwgMTAwJSBkZWwgYW5jaG8gZGVsIHBhZHJlKi9cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICAvKiBNYW50aWVuZSBwcm9wb3JjaW9uIGFsIHJlZXNjYWxhciovXG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cbmF1ZGlvLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcgKi9cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cbmFydGljbGUsXG5hc2lkZSxcbmZvb3RlcixcbmhlYWRlcixcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbm1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxudWwge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuYm9keSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4vKiBBbmltYWNpb25lcywgZXh0cmFjdG8gZGUgbGEgbGlicmVyw61hIGFuaW1hdGUgKi9cbi5hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uZmFzdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZmFkZUluIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbn1cblxuLmNvbnQtbmF2Yi1hdmUge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyMDA1RTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuYmctYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSBhLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtLmFjdGl2ZSBhLm5hdi1saW5rIHtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNmZmZmZmY7XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMge1xuICBwYWRkaW5nOiAwcmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODIwMDVFO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIHtcbiAgcGFkZGluZzogMC44cmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIGEucHJpbS1uaXYge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgYS5wcmltLW5pdi5rcGktZ2xvYjo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMva3BpLWdsb2Iuc3ZnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIGEucHJpbS1uaXYuZGF0LWFjY2VzOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9kYXQtYWNjZXMuc3ZnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIGEucHJpbS1uaXYuY29uZWN0aXYtZXh0ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2NvbmVjdGl2LWV4dGVyLnN2Zyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXJlbTtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSBhLnByaW0tbml2LmRpc3Bvc2l0OjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9kaXNwb3NpdGl2b3Muc3ZnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIGEucHJpbS1uaXYuY29udGVuaWQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2NvbnRlbmlkb3Muc3ZnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIGEucHJpbS1uaXYuc3ViLWFyY2g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL3N1YmlyLWFyY2hpdm8uc3ZnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIGEucHJpbS1uaXY6OmFmdGVyIHtcbiAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvb3Blbi11bC5zdmcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAycmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIGEucHJpbS1uaXYuYXJyb3dVcDo6YWZ0ZXIge1xuICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9vcGVuLXVsLnN2Zyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDJyZW07XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgYS5wcmltLW5pdi5hY3RpdmUtcHJpbS1uaXYge1xuICBjb2xvcjogI0YwRThDMDtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSBhLnByaW0tbml2LmFjdGl2ZS1wcmltLW5pdi5rcGktZ2xvYjo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMva3BpLWdsb2ItYWN0aXYuc3ZnKTtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSBhLnByaW0tbml2LmFjdGl2ZS1wcmltLW5pdi5kYXQtYWNjZXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2RhdC1hY2Nlcy1hY3Rpdi5zdmcpO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIGEucHJpbS1uaXYuYWN0aXZlLXByaW0tbml2LmNvbmVjdGl2LWV4dGVyOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9jb25lY3Rpdi1leHRlci1hY3Rpdi5zdmcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDFyZW07XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgYS5wcmltLW5pdi5hY3RpdmUtcHJpbS1uaXYuZGlzcG9zaXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2Rpc3Bvc2l0aXZvcy1hY3Rpdi5zdmcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDFyZW07XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgYS5wcmltLW5pdi5hY3RpdmUtcHJpbS1uaXYuY29udGVuaWQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2NvbnRlbmlkb3MtYWN0aXYuc3ZnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIGEucHJpbS1uaXYuYWN0aXZlLXByaW0tbml2LnN1Yi1hcmNoOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9zdWJpci1hcmNoaXZvLWFjdGl2LnN2Zyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXJlbTtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSB1bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAwLjhyZW07XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgdWwgbGkge1xuICBwYWRkaW5nOiAwLjhyZW07XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgdWwgbGkgYSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgdWwgbGkgYS5hY3RpdmUge1xuICBjb2xvcjogI0YwRThDMDtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSB1bCBsaSBhLmFjdGl2ZTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvcG9pbnQuc3ZnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxLjVyZW07XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGk6bnRoLW9mLXR5cGUoNCkgYS5wcmltLW5pdjo6YWZ0ZXIsIC5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaTpudGgtb2YtdHlwZSgxKSBhLnByaW0tbml2OjphZnRlciwgLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpOm50aC1vZi10eXBlKDMpIGEucHJpbS1uaXY6OmFmdGVyLCAuY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGk6bnRoLW9mLXR5cGUoNikgYS5wcmltLW5pdjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250LW5hdmItYXZlIHtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODIwMDVFO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuICAuY29udC1uYXZiLWF2ZSAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gYS5uYXYtbGluayB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB9XG4gIC5jb250LW5hdmItYXZlIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbS5hY3RpdmUgYS5uYXYtbGluayB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuICAuY29udC1uYXZiLWF2ZSAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHtcbiAgICBwYWRkaW5nOiAwcmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuY29udC1uYXZiLWF2ZSAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIHtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gIH1cbiAgLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSB1bCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY29udC1uYXZiLWF2ZSAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIHVsOnRhcmdldCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi9jb2xvcnMuc2Nzc1wiO1xyXG4qIHtcclxuICAvKiBObyBhZ3JhbmRhIHBhZGRpbmcgbyBib3JkZXIqL1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmZsYXRpY29uLXNlYXJjaC0xOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGYxOTZcIjtcclxufVxyXG5ib2R5IHtcclxuICAvKiBObyBtYXJnZW4gcG9yIGRlZmVjdG8gZGVsIGJvZHkgKi9cclxuICBtYXJnaW46IDA7XHJcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nICAqL1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuaW1nIHtcclxuICAvKiBRdWl0YSBib2RlIHBvciBkZWZlY3RvIGRlbCBpbi1saW5lKi9cclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvKiBhbmNobyBtYXhpbW8gZWwgMTAwJSBkZWwgYW5jaG8gZGVsIHBhZHJlKi9cclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgLyogTWFudGllbmUgcHJvcG9yY2lvbiBhbCByZWVzY2FsYXIqL1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4vKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LSAqL1xyXG5hdWRpbyxcclxudmlkZW8ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4vKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03ICovXHJcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5uYXYsXHJcbnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmZpZ2NhcHRpb24sXHJcbmZpZ3VyZSxcclxubWFpbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxudWwge1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xyXG59XHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5ib2R5IHtcclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG46LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgLyogRmlyZWZveCAxOC0gKi9cclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG46Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLyogQW5pbWFjaW9uZXMsIGV4dHJhY3RvIGRlIGxhIGxpYnJlcsOtYSBhbmltYXRlICovXHJcblxyXG4uYW5pbWF0ZWQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG4uZmFzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbn1cclxuIiwiJGNvbG9yLXByaW1hcnk6IzgyMDA1RTtcclxuJHRleHQtY29sb3I6ICMwMDAwMDA7XHJcbiRjb2xvci1kYXJrOiAjMjcyODMzO1xyXG4kYm9yZGVyLWNvbG9yOiAjRTZFNkU2O1xyXG4kY29sb3ItYWxlcnQ6IHJnYmEoMjU1LCAyMywgMzMsIDAuMSk7XHJcbiR3aGl0ZS1zZWNvbmRhcnk6I0YwRThDMDtcclxuJGNvbG9yLWdyZXk6IzczNzM3MztcclxuJGJhY2tncm91bmQtZ3JleTojREJEQkRCO1xyXG4kZm9vdGVyLWNvbG9yOiAjN0Q3RDdEO1xyXG4kY29sb3ItZ3JlZW46ICMyQkFEMEQ7XHJcbiRjb2xvci1yZWQ6I0RDMzU0NTtcclxuJGNvbG9yLXllbGxvdzpyZ2JhKDI1NSwgMjA0LCAwLCAwLjkpOyIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4uY29udC1uYXZiLWF2ZSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC5uYXZiYXIge1xyXG4gICAgLmJnLWJsYWNrIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY29sbGFwc2Uge1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGkubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYS5uYXYtbGluayB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGEubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaW5mb3JtZXMge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIGEucHJpbS1uaXYge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICYua3BpLWdsb2I6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMva3BpLWdsb2Iuc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAmLmRhdC1hY2Nlczo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9kYXQtYWNjZXMuc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAmLmNvbmVjdGl2LWV4dGVyOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2NvbmVjdGl2LWV4dGVyLnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgJi5kaXNwb3NpdDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9kaXNwb3NpdGl2b3Muc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAmLmNvbnRlbmlkOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2NvbnRlbmlkb3Muc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAmLnN1Yi1hcmNoOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL3N1YmlyLWFyY2hpdm8uc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvb3Blbi11bC5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAmLmFycm93VXA6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9vcGVuLXVsLnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgJi5hY3RpdmUtcHJpbS1uaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtc2Vjb25kYXJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICYua3BpLWdsb2I6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9rcGktZ2xvYi1hY3Rpdi5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLmRhdC1hY2Nlczo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2RhdC1hY2Nlcy1hY3Rpdi5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLmNvbmVjdGl2LWV4dGVyOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvY29uZWN0aXYtZXh0ZXItYWN0aXYuc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYuZGlzcG9zaXQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9kaXNwb3NpdGl2b3MtYWN0aXYuc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYuY29udGVuaWQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9jb250ZW5pZG9zLWFjdGl2LnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLnN1Yi1hcmNoOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvc3ViaXItYXJjaGl2by1hY3Rpdi5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlLXNlY29uZGFyeTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvcG9pbnQuc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDQpLFxyXG4gICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgxKSxcclxuICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMyksXHJcbiAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDYpIHtcclxuICAgICAgICAgICAgICAgICAgYS5wcmltLW5pdjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5jb250LW5hdmItYXZlIHtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87IC8vY2FtYlxyXG4gICAgaGVpZ2h0OiBhdXRvOyAvL2NhbWJcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIC5uYXZiYXIge1xyXG4gICAgICAvLyAuYmctYmxhY2t7XHJcbiAgICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR0ZXh0LWNvbG9yO1xyXG4gICAgICAvLyAgICAgcGFkZGluZzogLjVyZW0gMnJlbTtcclxuICAgICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIC8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgICYuY29sbGFwc2luZyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGxpLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgYS5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTsgLy9jYW1iaW9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYS5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5mb3JtZXMge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDByZW07XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvL2NhbWJcclxuXHJcbiAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgIC8vIGEucHJpbS1uaXZ7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgcGFkZGluZy1sZWZ0OjIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAmLmRhdC1hY2Nlczo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb250ZW50OnVybCgvYXNzZXRzL2ljb25zL2RhdC1hY2Nlcy5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICYuY29uZWN0aXYtZXh0ZXI6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb250ZW50OnVybCgvYXNzZXRzL2ljb25zL2NvbmVjdGl2LWV4dGVyLnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAgICAgICAvLyAgICYuZGlzcG9zaXQ6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnRlbnQ6dXJsKC9hc3NldHMvaWNvbnMvZGlzcG9zaXRpdm9zLnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgICAgICAgLy8gICAmLmNvbnRlbmlkOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBjb250ZW50OnVybCgvYXNzZXRzL2ljb25zL2NvbnRlbmlkb3Muc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIGxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAgICAgICAvLyAgICYuc3ViLWFyY2g6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnRlbnQ6dXJsKC9hc3NldHMvaWNvbnMvc3ViaXItYXJjaGl2by5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBjb250ZW50OnVybCgvYXNzZXRzL2ljb25zL29wZW4tdWwuc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIHJpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjp0YXJnZXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBsaXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGFkZGluZzogLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHBhZGRpbmctbGVmdDoycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29udGVudDp1cmwoL2Fzc2V0cy9pY29ucy9wb2ludC5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxlZnQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8vICY6bnRoLW9mLXR5cGUoNCl7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBhLnByaW0tbml2OjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgLy8gIH1cclxuICAgICAgICAgICAgICAgICAgLy8gICY6bnRoLW9mLXR5cGUoNSl7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBhLnByaW0tbml2OjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgLy8gIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/navbar-left/navbar-left.component.ts":
/*!******************************************************!*\
  !*** ./src/app/navbar-left/navbar-left.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarLeftComponent", function() { return NavbarLeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



let NavbarLeftComponent = class NavbarLeftComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.propagatingMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.styleActive = 'active';
        this.stylePrimNiv = 'prim-niv';
        this.styleActivePrimNiv = 'active-prim-niv';
        this.styleDisplayBlock = 'block';
        this.styleDisplayNone = 'none';
        this.styleArrowUp = 'arrowUp';
        this.menus = this.dataService.valores;
    }
    ngAfterViewInit() {
        document.getElementById(this.menus[0].id).classList.add(this.styleActivePrimNiv);
    }
    show(anchorId, ulId) {
        this.elementMenu = document.getElementById(anchorId);
        for (const item of this.menus) {
            if (item.submenus && item.submenus.length > 0) {
                for (const submenu of item.submenus) {
                    this.activeClassAddRemove(submenu.id, anchorId);
                }
            }
            this.activeClassAddRemove(item.id, anchorId);
        }
        if (ulId) {
            this.toogleMenu(ulId);
            this.hideOtherMenus(ulId);
            this.putUpArrow(anchorId);
            this.putDownOtherArrows(anchorId);
        }
        else {
            this.hideAllMenus();
            this.putDownAllArrows();
        }
        this.propagatingMenu.emit(anchorId);
    }
    putUpArrow(anchorId) {
        for (const item of this.menus) {
            if (Object.is(item.id, anchorId)) {
                this.elementMenu = document.getElementById(anchorId);
                this.elementMenu.classList.add(this.styleArrowUp);
                for (const menu of this.menus) {
                    if (!Object.is(menu.id, anchorId)) {
                        this.elementMenu = document.getElementById(menu.id);
                        this.elementMenu.classList.remove(this.styleArrowUp);
                    }
                }
                break;
            }
        }
    }
    putDownOtherArrows(anchorId) {
        for (const item of this.menus) {
            if (!Object.is(item.id, anchorId) && !item.submenus) {
                this.elementMenu = document.getElementById(item.id);
                this.elementMenu.classList.remove(this.styleArrowUp);
            }
        }
    }
    putDownAllArrows() {
        for (const item of this.menus) {
            if (item.submenus && item.submenus.length > 0) {
                this.elementMenu = document.getElementById(item.id);
                this.elementMenu.classList.remove(this.styleArrowUp);
            }
        }
    }
    toogleMenu(ulId) {
        this.elementMenu = document.getElementById(ulId);
        if (Object.is(this.elementMenu.style.display, this.styleDisplayBlock)) {
            this.elementMenu.style.display = this.styleDisplayNone;
        }
        else {
            this.elementMenu.style.display = this.styleDisplayBlock;
        }
    }
    hideOtherMenus(ulId) {
        const l = this.menus.length;
        for (let i = 0; i < l; i++) {
            if (document.getElementById(i.toString())) {
                if (Object.is(i, parseInt(ulId, 10))) {
                    document.getElementById(i.toString()).style.display = this.styleDisplayBlock;
                }
                else {
                    document.getElementById(i.toString()).style.display = this.styleDisplayNone;
                }
            }
        }
    }
    hideAllMenus() {
        const l = this.menus.length;
        for (let i = 0; i < l; i++) {
            if (document.getElementById(i.toString())) {
                document.getElementById(i.toString()).style.display = this.styleDisplayNone;
            }
        }
    }
    activeClassAddRemove(iterableId, pulsado) {
        if (Object.is(iterableId, pulsado)) {
            this.elementMenu.classList.add(this.elementMenu.classList.contains(this.stylePrimNiv) ? this.styleActivePrimNiv : this.styleActive);
        }
        else {
            const htmlElement = document.getElementById(iterableId);
            htmlElement.classList.remove(htmlElement.classList.contains(this.stylePrimNiv) ? this.styleActivePrimNiv : this.styleActive);
        }
    }
};
NavbarLeftComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavbarLeftComponent.prototype, "propagatingMenu", void 0);
NavbarLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar-left',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar-left.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar-left/navbar-left.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar-left.component.scss */ "./src/app/navbar-left/navbar-left.component.scss")).default]
    })
], NavbarLeftComponent);



/***/ }),

/***/ "./src/app/pipes/capitalizar.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/capitalizar.pipe.ts ***!
  \*******************************************/
/*! exports provided: CapitalizarPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizarPipe", function() { return CapitalizarPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CapitalizarPipe = class CapitalizarPipe {
    transform(frase, todas = true) {
        frase = frase.toLowerCase();
        const palabras = frase.split(' ');
        if (todas) {
            for (const i in palabras) {
                if (palabras.hasOwnProperty(i)) {
                    palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substring(1);
                }
            }
        }
        else {
            palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substr(1);
        }
        return palabras.join(' ');
    }
};
CapitalizarPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'capitalizar'
    })
], CapitalizarPipe);



/***/ }),

/***/ "./src/app/pipes/sanitizar.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/sanitizar.pipe.ts ***!
  \*****************************************/
/*! exports provided: SanitizarPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizarPipe", function() { return SanitizarPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SanitizarPipe = class SanitizarPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(urlBase, urlItem) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(urlBase + urlItem);
    }
};
SanitizarPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SanitizarPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sanitizar'
    })
], SanitizarPipe);



/***/ }),

/***/ "./src/app/pipes/translate.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/translate.pipe.ts ***!
  \*****************************************/
/*! exports provided: TranslatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return TranslatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/translate.service */ "./src/app/services/translate.service.ts");



let TranslatePipe = class TranslatePipe {
    // Inyecto el servicio translate
    constructor(translate) {
        this.translate = translate;
    }
    transform(value) {
        return this.translate.getTranslate(value) ? this.translate.getTranslate(value) : '';
    }
};
TranslatePipe.ctorParameters = () => [
    { type: _services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TranslatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'translate'
    })
], TranslatePipe);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataService = class DataService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return new Promise((resolve, reject) => {
            this.http.get('admin/resources/assets/data/menus.json')
                .subscribe(data => {
                this.data = data;
                resolve(true);
            }, error => {
                console.log('Error al obtener la configuracion: ' + error);
                reject(true);
            });
        });
    }
    get valores() {
        return this.data;
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataService);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



// import { Observable } from 'rxjs/Observable';
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
    }
    login(username, password) {
        return this.http.post('https://localhost:8080/login', { username, password });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoginService);



/***/ }),

/***/ "./src/app/services/translate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/translate.service.ts ***!
  \***********************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TranslateService = class TranslateService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return new Promise((resolve, reject) => {
            this.http.get('admin/resources/assets/translations/' + navigator.language + '.json')
                .subscribe(data => {
                this.data = data;
                resolve(true);
            }, error => {
                console.log('Error al recuperar las traducciones: ', error);
                reject(true);
            });
        });
    }
    getTranslate(phrase) {
        return this.data[phrase];
    }
};
TranslateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TranslateService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserService = class UserService {
    constructor() {
        this.isUserLoggedIn = false;
    }
    setUserLoggedIn(user) {
        this.isUserLoggedIn = true;
        this.usserLogged = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
    getUserLoggedIn() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
    getIsUserLoggedIn() {
        // return this.isUserLoggedIn;
        return true;
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/table/table.component.scss":
/*!********************************************!*\
  !*** ./src/app/table/table.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n* {\n  /* No agranda padding o border*/\n  box-sizing: border-box;\n}\n.flaticon-search-1:before {\n  content: \"\";\n}\nbody {\n  /* No margen por defecto del body */\n  margin: 0;\n  /* Better Font Rendering  */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nimg {\n  /* Quita bode por defecto del in-line*/\n  display: block;\n  /* ancho maximo el 100% del ancho del padre*/\n  max-width: 100%;\n  /* Mantiene proporcion al reescalar*/\n  height: auto;\n}\n/* Add the correct display in IE 9- */\naudio,\nvideo {\n  display: inline-block;\n}\n/* Add the correct display in iOS 4-7 */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/* Add the correct display in IE 9- */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\nfigcaption,\nfigure,\nmain {\n  display: block;\n}\nul {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n:focus {\n  outline: none;\n  box-shadow: none;\n}\n/***************************************/\nbody {\n  color: #000000;\n}\n::-webkit-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #000000;\n  font-size: 1rem;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #000000;\n  font-size: 1rem;\n}\n:-ms-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n/* Animaciones, extracto de la librería animate */\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.fast {\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n}\n.conten-table-comp .form-inline p {\n  font-size: 1rem;\n}\n.conten-table-comp .form-inline p.text-green {\n  font-size: 0.875rem;\n  color: #2BAD0D;\n}\n.conten-table-comp .form-inline p.text-green a {\n  color: #2BAD0D;\n}\n.conten-table-comp .form-inline p.text-red {\n  font-size: 0.875rem;\n  color: #DC3545;\n}\n.conten-table-comp .form-inline p.text-red a {\n  color: #DC3545;\n}\n.conten-table-comp .form-inline p a {\n  text-decoration: underline;\n}\n.conten-table-comp .form-inline .wrap-input-container {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  text-align: left;\n}\n.conten-table-comp .form-inline .wrap-input-container .form-control.custom-file-upload {\n  border: 1px solid #DBDBDB;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 95%;\n  text-align: left;\n}\n.conten-table-comp .form-inline .wrap-input-container .form-control.custom-file-upload .bg-morado {\n  background-color: #82005E;\n  border-radius: 4px;\n  padding: 0.4rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.conten-table-comp .form-inline .wrap-input-container input {\n  position: absolute;\n  font-size: 400px;\n  opacity: 0;\n  z-index: 1;\n  top: 0;\n  left: 0;\n}\n.conten-table-comp table tbody {\n  font-size: 0.875rem;\n}\n.conten-table-comp table tbody .progress {\n  height: 0.2rem;\n}\n.conten-table-comp table tbody .progress .progress-bar.red-progres {\n  background-color: #DC3545;\n}\n.conten-table-comp table tbody .progress .progress-bar.green-progres {\n  background-color: #2BAD0D;\n}\n.conten-table-comp table tbody .progress .progress-bar.yellow-progres {\n  background-color: rgba(255, 204, 0, 0.9);\n}\n.conten-table-comp table tbody td .text-progr {\n  display: inline-flex;\n  padding: 0 0.5rem;\n}\n.conten-table-comp table tbody td .text-progr.err {\n  border: 1px solid #DC3545;\n}\n.conten-table-comp table tbody td .text-progr.proces {\n  border: 1px solid #2BAD0D;\n}\n.conten-table-comp table tbody td .text-progr.en-proces {\n  border: 1px solid rgba(255, 204, 0, 0.9);\n}\n.conten-table-comp table tbody td.center {\n  text-align: -webkit-center;\n}\n.conten-table-comp table tbody th {\n  font-size: 1rem;\n  font-weight: normal;\n}\n.conten-table-comp .pagination .page-item .page-link {\n  border: none;\n  color: #82005E;\n  font-size: 0.875rem;\n}\n.conten-table-comp .pagination .page-item .page-link.active {\n  color: #ffffff;\n  background-color: #82005E;\n}\n@media only screen and (max-width: 1800px) {\n  .form-inline .wrap-input-container {\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n    text-align: left;\n  }\n  .form-inline .wrap-input-container .form-control.custom-file-upload {\n    border: 1px solid #DBDBDB;\n    cursor: pointer;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 92%;\n    text-align: left;\n  }\n}\n@media only screen and (max-width: 1200px) {\n  .form-inline .wrap-input-container {\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n    text-align: left;\n  }\n  .form-inline .wrap-input-container .form-control.custom-file-upload {\n    border: 1px solid #DBDBDB;\n    cursor: pointer;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 85%;\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RhYmxlL0M6XFxVc2Vyc1xcWDUxNDIzWkFcXERlc2Fycm9sbG9cXFByb3llY3RvIFJlbmZlXFxSZW5mZURpc2Vuby9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC90YWJsZS9DOlxcVXNlcnNcXFg1MTQyM1pBXFxEZXNhcnJvbGxvXFxQcm95ZWN0byBSZW5mZVxcUmVuZmVEaXNlbm8vc3JjXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvdGFibGUvQzpcXFVzZXJzXFxYNTE0MjNaQVxcRGVzYXJyb2xsb1xcUHJveWVjdG8gUmVuZmVcXFJlbmZlRGlzZW5vL3NyY1xcYXBwXFx0YWJsZVxcdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0UsK0JBQUE7RUFDQSxzQkFBQTtBRENGO0FDQ0E7RUFDRSxZQUFBO0FERUY7QUNBQTtFQUNFLG1DQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBREdGO0FDREE7RUFDRSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QURJRjtBQ0ZBLHFDQUFBO0FBQ0E7O0VBRUUscUJBQUE7QURLRjtBQ0hBLHVDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBRE1GO0FDSkEscUNBQUE7QUFDQTs7Ozs7O0VBTUUsY0FBQTtBRE9GO0FDTEE7OztFQUdFLGNBQUE7QURRRjtBQ05BO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBRFNGO0FDUEE7RUFDRSxnQkFBQTtBRFVGO0FDUkE7RUFDRSxxQkFBQTtBRFdGO0FDVEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QURZRjtBQ1ZBLHdDQUFBO0FBQ0E7RUFDRSxjQzdEVztBRjBFYjtBQ1hBO0VBQ0UsY0NoRVc7RURpRVgsZUFBQTtBRGNGO0FDWEE7RUFDRSxnQkFBQTtFQUNBLGNDdEVXO0VEdUVYLGVBQUE7QURjRjtBQ1hBO0VBQ0UsZ0JBQUE7RUFDQSxjQzVFVztFRDZFWCxlQUFBO0FEY0Y7QUNYQTtFQUNFLGNDakZXO0VEa0ZYLGVBQUE7QURjRjtBQ1hBLGlEQUFBO0FBRUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBRGFGO0FDVkE7RUFDRSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBRGFGO0FDVkE7RUFDRTtJQUNFLFVBQUE7RURhRjtFQ1ZBO0lBQ0UsVUFBQTtFRFlGO0FBQ0Y7QUNuQkE7RUFDRTtJQUNFLFVBQUE7RURhRjtFQ1ZBO0lBQ0UsVUFBQTtFRFlGO0FBQ0Y7QUNUQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QURXRjtBR3pISTtFQUNFLGVBQUE7QUg0SE47QUczSE07RUFDRSxtQkFBQTtFQUNBLGNERU07QUYySGQ7QUc1SFE7RUFDRSxjQUFBO0FIOEhWO0FHM0hNO0VBQ0UsbUJBQUE7RUFDQSxjREpHO0FGaUlYO0FHNUhRO0VBQ0UsY0ROQztBRm9JWDtBRzNITTtFQUNFLDBCQUFBO0FINkhSO0FHMUhJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUg0SE47QUczSE07RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUg2SFI7QUc1SFE7RUFDRSx5QkRyQ0s7RUNzQ0wsa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBSDhIVjtBRzNITTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FINkhSO0FHeEhJO0VBQ0UsbUJBQUE7QUgwSE47QUd6SE07RUFDRSxjQUFBO0FIMkhSO0FHekhVO0VBQ0UseUJEcEREO0FGK0tYO0FHeEhVO0VBQ0UseUJEekRFO0FGbUxkO0FHeEhVO0VBQ0Usd0NEMURFO0FGb0xkO0FHckhRO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtBSHVIVjtBR3RIVTtFQUNFLHlCQUFBO0FId0haO0FHdEhVO0VBQ0UseUJBQUE7QUh3SFo7QUd0SFU7RUFDRSx3Q0FBQTtBSHdIWjtBR3BIUTtFQUNFLDBCQUFBO0FIc0hWO0FHbkhNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FIcUhSO0FHL0dNO0VBQ0UsWUFBQTtFQUNBLGNEdEdPO0VDdUdQLG1CQUFBO0FIaUhSO0FHaEhRO0VBQ0UsY0FBQTtFQUNBLHlCRDFHSztBRjROZjtBRzNHQTtFQUVJO0lBQ0UscUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUg2R0o7RUc1R0k7SUFDRSx5QkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7RUg4R047QUFDRjtBRzFHQTtFQUVJO0lBQ0UscUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUgyR0o7RUcxR0k7SUFDRSx5QkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7RUg0R047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuKiB7XG4gIC8qIE5vIGFncmFuZGEgcGFkZGluZyBvIGJvcmRlciovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5mbGF0aWNvbi1zZWFyY2gtMTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+GllwiO1xufVxuXG5ib2R5IHtcbiAgLyogTm8gbWFyZ2VuIHBvciBkZWZlY3RvIGRlbCBib2R5ICovXG4gIG1hcmdpbjogMDtcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nICAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW1nIHtcbiAgLyogUXVpdGEgYm9kZSBwb3IgZGVmZWN0byBkZWwgaW4tbGluZSovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiBhbmNobyBtYXhpbW8gZWwgMTAwJSBkZWwgYW5jaG8gZGVsIHBhZHJlKi9cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICAvKiBNYW50aWVuZSBwcm9wb3JjaW9uIGFsIHJlZXNjYWxhciovXG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cbmF1ZGlvLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcgKi9cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cbmFydGljbGUsXG5hc2lkZSxcbmZvb3RlcixcbmhlYWRlcixcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbm1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxudWwge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuYm9keSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4vKiBBbmltYWNpb25lcywgZXh0cmFjdG8gZGUgbGEgbGlicmVyw61hIGFuaW1hdGUgKi9cbi5hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uZmFzdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZmFkZUluIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbn1cblxuLmNvbnRlbi10YWJsZS1jb21wIC5mb3JtLWlubGluZSBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmNvbnRlbi10YWJsZS1jb21wIC5mb3JtLWlubGluZSBwLnRleHQtZ3JlZW4ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogIzJCQUQwRDtcbn1cbi5jb250ZW4tdGFibGUtY29tcCAuZm9ybS1pbmxpbmUgcC50ZXh0LWdyZWVuIGEge1xuICBjb2xvcjogIzJCQUQwRDtcbn1cbi5jb250ZW4tdGFibGUtY29tcCAuZm9ybS1pbmxpbmUgcC50ZXh0LXJlZCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiAjREMzNTQ1O1xufVxuLmNvbnRlbi10YWJsZS1jb21wIC5mb3JtLWlubGluZSBwLnRleHQtcmVkIGEge1xuICBjb2xvcjogI0RDMzU0NTtcbn1cbi5jb250ZW4tdGFibGUtY29tcCAuZm9ybS1pbmxpbmUgcCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uY29udGVuLXRhYmxlLWNvbXAgLmZvcm0taW5saW5lIC53cmFwLWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRlbi10YWJsZS1jb21wIC5mb3JtLWlubGluZSAud3JhcC1pbnB1dC1jb250YWluZXIgLmZvcm0tY29udHJvbC5jdXN0b20tZmlsZS11cGxvYWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjREJEQkRCO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogOTUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRlbi10YWJsZS1jb21wIC5mb3JtLWlubGluZSAud3JhcC1pbnB1dC1jb250YWluZXIgLmZvcm0tY29udHJvbC5jdXN0b20tZmlsZS11cGxvYWQgLmJnLW1vcmFkbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MjAwNUU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMC40cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uY29udGVuLXRhYmxlLWNvbXAgLmZvcm0taW5saW5lIC53cmFwLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiA0MDBweDtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLmNvbnRlbi10YWJsZS1jb21wIHRhYmxlIHRib2R5IHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi5jb250ZW4tdGFibGUtY29tcCB0YWJsZSB0Ym9keSAucHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDAuMnJlbTtcbn1cbi5jb250ZW4tdGFibGUtY29tcCB0YWJsZSB0Ym9keSAucHJvZ3Jlc3MgLnByb2dyZXNzLWJhci5yZWQtcHJvZ3JlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQzM1NDU7XG59XG4uY29udGVuLXRhYmxlLWNvbXAgdGFibGUgdGJvZHkgLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIuZ3JlZW4tcHJvZ3JlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQkFEMEQ7XG59XG4uY29udGVuLXRhYmxlLWNvbXAgdGFibGUgdGJvZHkgLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIueWVsbG93LXByb2dyZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjA0LCAwLCAwLjkpO1xufVxuLmNvbnRlbi10YWJsZS1jb21wIHRhYmxlIHRib2R5IHRkIC50ZXh0LXByb2dyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuLmNvbnRlbi10YWJsZS1jb21wIHRhYmxlIHRib2R5IHRkIC50ZXh0LXByb2dyLmVyciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEQzM1NDU7XG59XG4uY29udGVuLXRhYmxlLWNvbXAgdGFibGUgdGJvZHkgdGQgLnRleHQtcHJvZ3IucHJvY2VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJCQUQwRDtcbn1cbi5jb250ZW4tdGFibGUtY29tcCB0YWJsZSB0Ym9keSB0ZCAudGV4dC1wcm9nci5lbi1wcm9jZXMge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjA0LCAwLCAwLjkpO1xufVxuLmNvbnRlbi10YWJsZS1jb21wIHRhYmxlIHRib2R5IHRkLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuLmNvbnRlbi10YWJsZS1jb21wIHRhYmxlIHRib2R5IHRoIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmNvbnRlbi10YWJsZS1jb21wIC5wYWdpbmF0aW9uIC5wYWdlLWl0ZW0gLnBhZ2UtbGluayB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICM4MjAwNUU7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4uY29udGVuLXRhYmxlLWNvbXAgLnBhZ2luYXRpb24gLnBhZ2UtaXRlbSAucGFnZS1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODIwMDVFO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MDBweCkge1xuICAuZm9ybS1pbmxpbmUgLndyYXAtaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuZm9ybS1pbmxpbmUgLndyYXAtaW5wdXQtY29udGFpbmVyIC5mb3JtLWNvbnRyb2wuY3VzdG9tLWZpbGUtdXBsb2FkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREJEQkRCO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDkyJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuZm9ybS1pbmxpbmUgLndyYXAtaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuZm9ybS1pbmxpbmUgLndyYXAtaW5wdXQtY29udGFpbmVyIC5mb3JtLWNvbnRyb2wuY3VzdG9tLWZpbGUtdXBsb2FkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREJEQkRCO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDg1JTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59IiwiQGltcG9ydCBcIi4vY29sb3JzLnNjc3NcIjtcclxuKiB7XHJcbiAgLyogTm8gYWdyYW5kYSBwYWRkaW5nIG8gYm9yZGVyKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5mbGF0aWNvbi1zZWFyY2gtMTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxmMTk2XCI7XHJcbn1cclxuYm9keSB7XHJcbiAgLyogTm8gbWFyZ2VuIHBvciBkZWZlY3RvIGRlbCBib2R5ICovXHJcbiAgbWFyZ2luOiAwO1xyXG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyAgKi9cclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcbmltZyB7XHJcbiAgLyogUXVpdGEgYm9kZSBwb3IgZGVmZWN0byBkZWwgaW4tbGluZSovXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLyogYW5jaG8gbWF4aW1vIGVsIDEwMCUgZGVsIGFuY2hvIGRlbCBwYWRyZSovXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIC8qIE1hbnRpZW5lIHByb3BvcmNpb24gYWwgcmVlc2NhbGFyKi9cclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cclxuYXVkaW8sXHJcbnZpZGVvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gaU9TIDQtNyAqL1xyXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcbi8qIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktICovXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxubmF2LFxyXG5zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5maWdjYXB0aW9uLFxyXG5maWd1cmUsXHJcbm1haW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbnVsIHtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxufVxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuYm9keSB7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG59XHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIC8qIEZpcmVmb3ggMTgtICovXHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAvKiBGaXJlZm94IDE5KyAqL1xyXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi8qIEFuaW1hY2lvbmVzLCBleHRyYWN0byBkZSBsYSBsaWJyZXLDrWEgYW5pbWF0ZSAqL1xyXG5cclxuLmFuaW1hdGVkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuLmZhc3Qge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZUluIHtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG59XHJcbiIsIiRjb2xvci1wcmltYXJ5OiM4MjAwNUU7XHJcbiR0ZXh0LWNvbG9yOiAjMDAwMDAwO1xyXG4kY29sb3ItZGFyazogIzI3MjgzMztcclxuJGJvcmRlci1jb2xvcjogI0U2RTZFNjtcclxuJGNvbG9yLWFsZXJ0OiByZ2JhKDI1NSwgMjMsIDMzLCAwLjEpO1xyXG4kd2hpdGUtc2Vjb25kYXJ5OiNGMEU4QzA7XHJcbiRjb2xvci1ncmV5OiM3MzczNzM7XHJcbiRiYWNrZ3JvdW5kLWdyZXk6I0RCREJEQjtcclxuJGZvb3Rlci1jb2xvcjogIzdEN0Q3RDtcclxuJGNvbG9yLWdyZWVuOiAjMkJBRDBEO1xyXG4kY29sb3ItcmVkOiNEQzM1NDU7XHJcbiRjb2xvci15ZWxsb3c6cmdiYSgyNTUsIDIwNCwgMCwgMC45KTsiLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuLmNvbnRlbi10YWJsZS1jb21wIHtcclxuICAuZm9ybS1pbmxpbmUge1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgJi50ZXh0LWdyZWVuIHtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JlZW47XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLWdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLnRleHQtcmVkIHtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcmVkO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvci1yZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAud3JhcC1pbnB1dC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgLmZvcm0tY29udHJvbC5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRiYWNrZ3JvdW5kLWdyZXk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgLmJnLW1vcmFkbyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDAwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIHRib2R5IHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgLnByb2dyZXNzIHtcclxuICAgICAgICBoZWlnaHQ6IDAuMnJlbTtcclxuICAgICAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICAgICYucmVkLXByb2dyZXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuZ3JlZW4tcHJvZ3JlcyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmVlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYueWVsbG93LXByb2dyZXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IteWVsbG93O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgLnRleHQtcHJvZ3Ige1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgICAgICAgICYuZXJyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXJlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYucHJvY2VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWdyZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5lbi1wcm9jZXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3IteWVsbG93O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5jZW50ZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucGFnaW5hdGlvbiB7XHJcbiAgICAucGFnZS1pdGVtIHtcclxuICAgICAgLnBhZ2UtbGluayB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MDBweCkge1xyXG4gIC5mb3JtLWlubGluZSB7XHJcbiAgICAud3JhcC1pbnB1dC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgLmZvcm0tY29udHJvbC5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRiYWNrZ3JvdW5kLWdyZXk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuZm9ybS1pbmxpbmUge1xyXG4gICAgLndyYXAtaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIC5mb3JtLWNvbnRyb2wuY3VzdG9tLWZpbGUtdXBsb2FkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYmFja2dyb3VuZC1ncmV5O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TableComponent = class TableComponent {
    constructor() { }
    ngOnInit() {
    }
};
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.scss */ "./src/app/table/table.component.scss")).default]
    })
], TableComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    urlPowerbi: 'https://app.powerbi.com/view?'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\X51423ZA\Desarrollo\Proyecto Renfe\RenfeDiseno\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map