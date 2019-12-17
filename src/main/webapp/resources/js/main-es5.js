(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-admin\">\r\n    <div class=\"cont-gen\">\r\n        <div class=\"w-nav-left\">\r\n            <app-navbar-left (propagatingMenu)=\"showInform($event)\"></app-navbar-left>\r\n        </div>\r\n        <div class=\"w-cont-der\">\r\n            <app-conten-der [informe]=\"informe\"></app-conten-der>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-login></app-login> -->\r\n<!-- <app-body></app-body> -->\r\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/conten-der/conten-der.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conten-der/conten-der.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"con-der\">\r\n    <div class=\"header d-flex\">\r\n        <div class=\"row  align-items-center w-100 ml-0\">\r\n                    <div class=\"col-6 col-sm-7 col-md-6\">\r\n                            <h1 class=\"title m-0\">{{ 'conten-der.title' | translate | uppercase }}</h1>\r\n                        </div>\r\n                        <div class=\"col-6 col-sm-5 col-md-6 d-flex justify-content-end pr-md-4\">\r\n                            <button class=\"btn d-flex align-items-center\" type=\"button\" (click)='toPdf()'>\r\n                                <img src=\"admin/resources/assets/icons/descargar-ic.svg\" alt=\"\" class=\"pr-2\">\r\n                                {{ 'button.informe_ejecutivo' | translate | capitalizar:false }} {{ 'general.pdf' | translate | uppercase }}\r\n                            </button>\r\n                        </div>\r\n            <!---el dia que se vaya a introducir el buscador y el usuario repasar el codigo ya que se han puesto los height fijos para que no haga scroll el grafico--- <div class=\"col-xl-5 pt-3 pt-xl-0 d-none\">\r\n                <div class=\"d-flex align-items-center justify-content-xl-end\">\r\n                    <div class=\"input-group busc-inf border-bottom\">\r\n                        <input type=\"text\" class=\"form-control border-0\" placeholder=\"Buscar informe\"\r\n                            aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\r\n                        <div class=\"input-group-append\">\r\n                            <button class=\"btn \" type=\"button\">\r\n                                <img src=\"admin/resources/assets/icons/lupa-morada.svg\" alt=\"lupa\">\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex align-items-center\">\r\n                        <p class=\"m-0 text-grey\">{{ 'general.renfe' | translate | capitalizar:false }}</p>\r\n                        <div class=\"btn-usu\">\r\n                            R\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"body\">\r\n        <div class=\"migas d-none d-lg-flex\">\r\n            <p class=\"mig-text\">{{ 'general.trenes' | translate | capitalizar }}</p>\r\n            <p *ngIf=\"tituloInformePadre\" class=\"mig-text\">{{ tituloInformePadre | translate }}</p>\r\n            <p class=\"mig-text\">{{ tituloInforme | translate }}</p>\r\n        </div>\r\n        <div class=\"naveg-intern p-lg-4 \">\r\n            <div class=\"row m-0 \">\r\n                <div class=\"col-4 col-lg-3 link-nav-act \">\r\n                    <a>{{ 'general.trenes' | translate | uppercase }}</a>\r\n                </div>\r\n                <div class=\"col-4 col-lg-3 bg-grey\">\r\n                    <a class=\"d-none\">{{ 'general.estaciones' | translate | uppercase }}</a>\r\n                </div>\r\n                <div class=\"col-4 col-lg-3 bg-grey\">\r\n                    <a class=\"d-none\">{{ 'general.cau' | translate | uppercase }}</a>\r\n                </div>\r\n                <div class=\"col-lg-3 bg-grey d-flex align-items-center justify-content-center\">\r\n                    \r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"conten-log-inf pb-2\">\r\n            <div class=\"row m-0\">\r\n                <div class=\"col-4 d-flex justify-content-center align-items-center\">\r\n                    <div class=\"cont-img-inf\">\r\n                        <img src=\"admin/resources/assets/images/logo-ave-imf.svg\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-4 d-flex justify-content-center align-items-center\">\r\n                    <p class=\"m-0 text-inf\">{{ tituloInforme | translate }}</p>\r\n                </div>\r\n                <div class=\"col-4 d-flex justify-content-center align-items-center\">\r\n                    <div class=\"cont-img-inf\">\r\n                        <img src=\"admin/resources/assets/images/logo-play-renfe-imf.svg\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"conten-iframe m-auto\">\r\n            <iframe [src]=\"urlPowerbi | sanitizar: urlInforme\" frameborder=\"0\" allowFullScreen=\"true\"></iframe>\r\n            <!-- <app-table></app-table> -->\r\n        </div>\r\n    </div>\r\n    <!-- <footer>\r\n    </footer> -->\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main class=\"login\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7 d-none d-lg-block p-0\">\r\n        <div class=\"backgr-login\">\r\n          <div class=\"text-log\">\r\n            <h1>Cuadro de mando de seguimiento de Servicio</h1>\r\n            <h4>Informes PORTAL ANALITICO</h4>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-5 d-flex login-ave\">\r\n        <div class=\"conten-log \">\r\n          <div class=\"row pb-5\">\r\n            <div class=\"col-6 d-flex justify-content-end\">\r\n              <img src=\"admin/resources/assets/images/renfe-logo.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <img src=\"admin/resources/assets/images/play-renfe-logo.png\" alt=\"\">\r\n            </div>\r\n          </div>\r\n          <p class=\"text-center inic-ses pb-2\">Inicio de sesión</p>\r\n          <form class=\"contras-ave\">\r\n            <div *ngIf=\"alerta\" class=\"form-row pb-3 animated fadeIn fast\">\r\n              <div class=\"invalid-feedback-ave w-100 p-3 d-flex justify-content-between align-items-center\">\r\n                <p class=\"m-0\">Usuario o contraseña incorrectos</p>\r\n                <img (click)=\"ocultarAlerta()\" src=\"admin/resources/assets/icons/close-ave.svg\" alt=\"cerrar\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <label class=\"mb-0\" for=\"validationServer01\">Usuario</label>\r\n              <input #username type=\"text\" class=\"form-control\" id=\"validationServer01\" required>\r\n            </div>\r\n            <div class=\"form-row pt-4 pb-5\">\r\n              <label class=\"mb-0\" for=\"validationServer03\">Contraseña</label>\r\n              <input #password type=\"password\" class=\"form-control\" id=\"validationServer03\" required>\r\n            </div>\r\n            <div class=\"w-100  pt-5 d-flex\">\r\n              <button id=\"login-button\" class=\"btn btn-primary m-auto\" type=\"submit\"\r\n                (click)=\"logIn(username.value, password.value, $event)\">ACCESO</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar-left/navbar-left.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar-left/navbar-left.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cont-navb-ave\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark p-0\">\r\n    <div class=\"bg-black\">\r\n      <a class=\"navbar-brand\">\r\n        <img src=\"admin/resources/assets/images/logo-renfe-white.svg\" alt=\"\">\r\n      </a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarAve\" aria-controls=\"navbarAve\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n    </div>\r\n    <div id=\"navbarAve\" class=\"collapse navbar-collapse pt-lg-3\">\r\n      <ul class=\"navbar-nav d-flex justify-content-lg-around w-100\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\">{{ 'general.trenes' | translate | uppercase }}</a>\r\n          <nav id=\"informes\" class=\"informes\">\r\n            <ul>\r\n              <li *ngFor=\"let menu of menus; let i = index\">\r\n                <a *ngIf=\"!menu.submenus || menu.submenus === 0\" [id]=\"menu.id\" (click)=\"show(menu.id)\" class=\"prim-niv {{ menu.clase }}\">{{ menu.texto | translate }}</a>\r\n                <ng-container *ngIf=\"menu.submenus && menu.submenus.length > 0\">\r\n                  <a [id]=\"menu.id\" (click)=\"show(menu.id, i)\" class=\"prim-niv {{ menu.clase }}\">{{ menu.texto | translate }}</a>\r\n                  <ul id=\"{{i}}\" class=\"seg-niv\">\r\n                    <li *ngFor=\"let submenu of menu.submenus\">\r\n                      <a [id]=\"submenu.id\" (click)=\"show(submenu.id, i)\" class=\"{{ submenu.clase }}\">{{ submenu.texto | translate }}</a>\r\n                    </li>\r\n                  </ul>\r\n                </ng-container>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link d-none\">{{ 'general.estaciones' | translate | uppercase }}</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link d-none\">{{ 'general.cau' | translate | uppercase }}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"conten-table-comp\">\r\n    <div class=\"w-50 m-auto\">\r\n        <div class=\"form-group row custom-upload\">\r\n               <div data-role=\"dynamic-fields\" class=\"w-100\">\r\n                   <div class=\"form-inline form-row\">\r\n                       <label for=\"\" class=\"d-xl-flex d-block w-100 justify-content-start\">\r\n                           <p class=\"mr-5 text-regul\">Subir archivo</p>\r\n                           <p class=\"text-green\">Fichero importado con éxito -\r\n                                <a href=\"\">Ver el historico</a>\r\n                           </p>\r\n                           <!-- <p class=\"text-red\">Error en fichero - \r\n                               <a href=\"\">Ver el historico</a></p> -->\r\n                       </label>\r\n                     <div class=\" wrap-input-container w-100\" >\r\n                       <label class=\"custom-file-upload form-control\">\r\n                        <div class=\"bg-morado d-inline-block\"> \r\n                            <img src=\"admin/resources/assets/icons/sub-arch-table.svg\" alt=\"\"> </div>Upload Document\r\n                       </label>\r\n                       <input class=\"file-upload w-100\" name=\"file_name\" type=\"file\">\r\n                     </div>\r\n                     <small id=\"emailHelp\" class=\"form-text text-muted\">Por favor , seleccione el archivo a importar</small>\r\n                   </div>  <!-- /div.form-inline -->\r\n               </div> \r\n        </div>\r\n    </div>\r\n    <p class=\"hist-fich text-left\">Historico ficheros</p>\r\n    <div class=\"table-responsive pt-3\">\r\n            <table class=\"table\">\r\n                    <thead>\r\n                            <tr>\r\n                              <th scope=\"col\">FICHERO</th>\r\n                              <th scope=\"col\">UBICACIÓN</th>\r\n                              <th scope=\"col\">ESTADO</th>\r\n                              <th scope=\"col\">SITUACIÓN</th>\r\n                              <th scope=\"col\">TAMAÑO</th>\r\n                              <th scope=\"col\">LOG</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr>\r\n                              <th scope=\"row\">Circulaciones.xls</th>\r\n                              <td>DATOS GENERALES DE ACCESO</td>\r\n                              <td class=\"d-flex align-items-center border-0\">\r\n                               \r\n                                        <div class=\"progress w-100 \">\r\n                                                <div class=\"progress-bar \" role=\"progressbar\" style=\"width: 0%\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                              </div>\r\n                                         <span class=\"ml-2\">10%</span>\r\n                                </td>\r\n                              <td>\r\n                                 <div class=\"text-progr err\"> Error en fichero</div>\r\n                              </td>\r\n                              <td>10K</td>\r\n                              <td class=\"center\">\r\n                                  <img src=\"admin/resources/assets/icons/log.svg\" alt=\"\"  class=\"text-center\">\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                    <th scope=\"row\">Viajeros.xls</th>\r\n                                    <td>DATOS GENERALES DE ACCESO</td>\r\n                                    <td class=\"d-flex align-items-center \">\r\n                                     \r\n                                              <div class=\"progress w-100 \">\r\n                                                      <div class=\"progress-bar green-progres\" role=\"progressbar\" style=\"width: 100%\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                    </div>\r\n                                               <span class=\"ml-2\">100%</span>\r\n                                      </td>\r\n                                    <td>\r\n                                       <div class=\"text-progr proces\"> Procesando</div>\r\n                                    </td>\r\n                                    <td>10K</td>\r\n                                    <td class=\"center\">\r\n                                        <img src=\"admin/resources/assets/icons/log.svg\" alt=\"\"  class=\"text-center\">\r\n                                      </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                        <th scope=\"row\">Viajeros.xls</th>\r\n                                        <td>DATOS GENERALES DE ACCESO</td>\r\n                                        <td class=\"d-flex align-items-center \">\r\n                                         \r\n                                                  <div class=\"progress w-100 \">\r\n                                                          <div class=\"progress-bar yellow-progres\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                                                        </div>\r\n                                                   <span class=\"ml-2\">50%</span>\r\n                                          </td>\r\n                                        <td>\r\n                                           <div class=\"text-progr en-proces\">En proceso</div>\r\n                                        </td>\r\n                                        <td>10K</td>\r\n                                        <td class=\"center\">\r\n                                            <img src=\"admin/resources/assets/icons/log.svg\" alt=\"\"  class=\"text-center\">\r\n                                          </td>\r\n                                      </tr>\r\n            </table>\r\n            <nav aria-label=\"Page navigation example\" class=\"pt-5\">\r\n                    <ul class=\"pagination justify-content-end\">\r\n                      <li class=\"page-item\">\r\n                        <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n                          <span aria-hidden=\"true\">&laquo;</span>\r\n                          <span class=\"sr-only\">Previous</span>\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"page-item\"><a class=\"page-link active\" href=\"#\">1</a></li>\r\n                      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                      <li class=\"page-item\">\r\n                        <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n                          <span aria-hidden=\"true\">&raquo;</span>\r\n                          <span class=\"sr-only\">Next</span>\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                  </nav>\r\n          </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/admin/admin.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/admin/admin.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".main-admin .cont-gen {\n  display: flex;\n}\n.main-admin .cont-gen .w-nav-left {\n  width: 18rem;\n}\n.main-admin .cont-gen .w-cont-der {\n  width: calc(100% - 18rem);\n  min-height: 100vh;\n}\n@media only screen and (max-width: 992px) {\n  .main-admin .cont-gen {\n    display: block;\n  }\n  .main-admin .cont-gen .w-nav-left {\n    width: 100%;\n  }\n  .main-admin .cont-gen .w-cont-der {\n    width: 100%;\n    min-height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vQzpcXFVzZXJzXFxYNTE0MjNaQVxcRGVzYXJyb2xsb1xcUHJveWVjdG8gUmVuZmVcXFJlbmZlRGlzZW5vL3NyY1xcYXBwXFxhZG1pblxcYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQ0FKO0FEQ0k7RUFDRSxZQUFBO0FDQ047QURDSTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUNDTjtBRElBO0VBRUk7SUFDRSxjQUFBO0VDRko7RURHSTtJQUNFLFdBQUE7RUNETjtFREdJO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYWRtaW4ge1xyXG4gIC5jb250LWdlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLnctbmF2LWxlZnQge1xyXG4gICAgICB3aWR0aDogMThyZW07XHJcbiAgICB9XHJcbiAgICAudy1jb250LWRlciB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxOHJlbSk7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5tYWluLWFkbWluIHtcclxuICAgIC5jb250LWdlbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAudy1uYXYtbGVmdCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnctY29udC1kZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLm1haW4tYWRtaW4gLmNvbnQtZ2VuIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluLWFkbWluIC5jb250LWdlbiAudy1uYXYtbGVmdCB7XG4gIHdpZHRoOiAxOHJlbTtcbn1cbi5tYWluLWFkbWluIC5jb250LWdlbiAudy1jb250LWRlciB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxOHJlbSk7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYWluLWFkbWluIC5jb250LWdlbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLm1haW4tYWRtaW4gLmNvbnQtZ2VuIC53LW5hdi1sZWZ0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubWFpbi1hZG1pbiAuY29udC1nZW4gLnctY29udC1kZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/admin/admin.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/admin/admin.component.ts ***!
          \******************************************/
        /*! exports provided: AdminComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function () { return AdminComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
            var AdminComponent = /** @class */ (function () {
                function AdminComponent(dataService) {
                    this.dataService = dataService;
                }
                AdminComponent.prototype.ngOnInit = function () {
                    this.informe = this.dataService.valores[0].id;
                };
                AdminComponent.prototype.showInform = function (mensaje) {
                    this.informe = mensaje;
                };
                return AdminComponent;
            }());
            AdminComponent.ctorParameters = function () { return [
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")).default]
                })
            ], AdminComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
            /* import { LoginComponent } from './login/login.component'; */
            var APP_ROUTES = [
                /* { path: 'login', component: LoginComponent}, */
                { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
                { path: '', pathMatch: 'full', redirectTo: 'admin' },
                { path: '**', pathMatch: 'full', redirectTo: 'admin' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(APP_ROUTES)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'renfe';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: menuFactory, translationsFactory, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuFactory", function () { return menuFactory; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translationsFactory", function () { return translationsFactory; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
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
                return function () { return provider.getData(); };
            }
            function translationsFactory(provider) {
                return function () { return provider.getData(); };
            }
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                        _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
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
            /***/ 
        }),
        /***/ "./src/app/conten-der/conten-der.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/conten-der/conten-der.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n* {\n  /* No agranda padding o border*/\n  box-sizing: border-box;\n}\n.flaticon-search-1:before {\n  content: \"\";\n}\nbody {\n  /* No margen por defecto del body */\n  margin: 0;\n  /* Better Font Rendering  */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nimg {\n  /* Quita bode por defecto del in-line*/\n  display: block;\n  /* ancho maximo el 100% del ancho del padre*/\n  max-width: 100%;\n  /* Mantiene proporcion al reescalar*/\n  height: auto;\n}\n/* Add the correct display in IE 9- */\naudio,\nvideo {\n  display: inline-block;\n}\n/* Add the correct display in iOS 4-7 */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/* Add the correct display in IE 9- */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\nfigcaption,\nfigure,\nmain {\n  display: block;\n}\nul {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n:focus {\n  outline: none;\n  box-shadow: none;\n}\n/***************************************/\nbody {\n  color: #000000;\n}\n::-webkit-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #000000;\n  font-size: 1rem;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #000000;\n  font-size: 1rem;\n}\n:-ms-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n/* Animaciones, extracto de la librería animate */\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.fast {\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n}\n.con-der {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.con-der .header {\n  height: 4rem;\n}\n.con-der .header h1.title {\n  font-weight: 500;\n  font-size: 1.125rem;\n  color: #272833;\n  text-transform: uppercase;\n}\n.con-der .header .input-group.busc-inf {\n  width: 50%;\n  margin-right: 3rem;\n}\n.con-der .header .input-group.busc-inf .form-control {\n  font-size: 1rem;\n  color: #000000;\n}\n.con-der .header .text-grey {\n  font-size: 1rem;\n  color: #737373;\n}\n.con-der .header .btn-usu {\n  width: 1.9444rem;\n  height: 1.9444rem;\n  background-color: #82005E;\n  border-radius: 4px;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0.5rem;\n}\n.con-der .header .btn {\n  background-color: #82005E;\n  color: #ffffff;\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n.con-der .body {\n  flex-grow: 1;\n}\n.con-der .body .migas {\n  background-color: #DBDBDB;\n  height: 3rem;\n  padding-left: 1rem;\n  align-items: center;\n}\n.con-der .body .migas .mig-text {\n  margin: 0;\n  font-size: 1rem;\n  margin-right: 1rem;\n  margin-left: 1rem;\n  position: relative;\n}\n.con-der .body .migas .mig-text::after {\n  content: url('migas-arrow.svg');\n  position: absolute;\n  right: -1rem;\n  top: 0.1em;\n}\n.con-der .body .migas .mig-text:first-of-type {\n  margin-left: 0;\n}\n.con-der .body .migas .mig-text:last-of-type {\n  font-weight: 700;\n}\n.con-der .body .migas .mig-text:last-of-type::after {\n  content: \"\";\n}\n.con-der .body .naveg-intern .link-nav-act {\n  border-top: 2px solid #82005E;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.con-der .body .naveg-intern .link-nav-act a {\n  color: #82005E;\n}\n.con-der .body .naveg-intern .bg-grey {\n  background-color: #DBDBDB;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.con-der .body .naveg-intern .bg-grey a {\n  color: #000000;\n}\n.con-der .body .conten-log-inf {\n  height: 7rem;\n}\n.con-der .body .conten-log-inf .text-inf {\n  font-weight: 500;\n  font-size: 1.875rem;\n}\n.con-der .body .conten-iframe {\n  width: 100%;\n}\n.con-der .body .conten-iframe iframe {\n  height: calc(100vh - 20.5rem);\n  width: 100%;\n}\n.con-der footer {\n  height: 3rem;\n  width: 100%;\n  background-color: #7D7D7D;\n}\n@media only screen and (max-width: 992px) {\n  .con-der {\n    width: 100%;\n    margin-top: 5rem;\n  }\n  .con-der .header {\n    height: 4rem;\n  }\n  .con-der .header h1.title {\n    font-weight: 500;\n    font-size: 0.9rem;\n    color: #272833;\n    text-transform: uppercase;\n  }\n  .con-der .header .input-group.busc-inf {\n    width: 50%;\n    margin-right: 3rem;\n  }\n  .con-der .header .input-group.busc-inf .form-control {\n    font-size: 1rem;\n    color: #000000;\n  }\n  .con-der .header .text-grey {\n    font-size: 1rem;\n    color: #737373;\n  }\n  .con-der .header .btn-usu {\n    width: 1.9444rem;\n    height: 1.9444rem;\n    background-color: #82005E;\n    border-radius: 4px;\n    color: #ffffff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 0.5rem;\n  }\n  .con-der .body .naveg-intern .link-nav-act {\n    padding: 0.7rem 0;\n  }\n  .con-der .body .naveg-intern .link-nav-act a {\n    font-size: 0.9rem;\n  }\n  .con-der .body .naveg-intern .bg-grey a {\n    color: #000000;\n    font-size: 0.9rem;\n  }\n  .con-der .body .naveg-intern .bg-grey .btn {\n    background-color: #82005E;\n    color: #ffffff;\n    font-size: 0.8125rem;\n    font-weight: 500;\n    margin-top: 1.5rem;\n  }\n  .con-der .body .naveg-intern .bg-grey:last-of-type {\n    background-color: transparent;\n  }\n  .con-der .body .conten-log-inf .text-inf {\n    font-weight: 500;\n    font-size: 1.3rem;\n  }\n  .con-der footer {\n    display: none;\n  }\n}\n@media only screen and (max-width: 1200px) and (min-width: 993px) {\n  .con-der .naveg-intern .bg-grey .btn {\n    background-color: #82005E;\n    color: #ffffff;\n    font-size: 0.6rem;\n    font-weight: 500;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVuLWRlci9jb250ZW4tZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250ZW4tZGVyL0M6XFxVc2Vyc1xcWDUxNDIzWkFcXERlc2Fycm9sbG9cXFByb3llY3RvIFJlbmZlXFxSZW5mZURpc2Vuby9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9jb250ZW4tZGVyL0M6XFxVc2Vyc1xcWDUxNDIzWkFcXERlc2Fycm9sbG9cXFByb3llY3RvIFJlbmZlXFxSZW5mZURpc2Vuby9zcmNcXGNvbG9ycy5zY3NzIiwic3JjL2FwcC9jb250ZW4tZGVyL0M6XFxVc2Vyc1xcWDUxNDIzWkFcXERlc2Fycm9sbG9cXFByb3llY3RvIFJlbmZlXFxSZW5mZURpc2Vuby9zcmNcXGFwcFxcY29udGVuLWRlclxcY29udGVuLWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0FEQ0Y7QUNDQTtFQUNFLFlBQUE7QURFRjtBQ0FBO0VBQ0UsbUNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FER0Y7QUNEQTtFQUNFLHNDQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBRElGO0FDRkEscUNBQUE7QUFDQTs7RUFFRSxxQkFBQTtBREtGO0FDSEEsdUNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FETUY7QUNKQSxxQ0FBQTtBQUNBOzs7Ozs7RUFNRSxjQUFBO0FET0Y7QUNMQTs7O0VBR0UsY0FBQTtBRFFGO0FDTkE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FEU0Y7QUNQQTtFQUNFLGdCQUFBO0FEVUY7QUNSQTtFQUNFLHFCQUFBO0FEV0Y7QUNUQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBRFlGO0FDVkEsd0NBQUE7QUFDQTtFQUNFLGNDN0RXO0FGMEViO0FDWEE7RUFDRSxjQ2hFVztFRGlFWCxlQUFBO0FEY0Y7QUNYQTtFQUNFLGdCQUFBO0VBQ0EsY0N0RVc7RUR1RVgsZUFBQTtBRGNGO0FDWEE7RUFDRSxnQkFBQTtFQUNBLGNDNUVXO0VENkVYLGVBQUE7QURjRjtBQ1hBO0VBQ0UsY0NqRlc7RURrRlgsZUFBQTtBRGNGO0FDWEEsaURBQUE7QUFFQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FEYUY7QUNWQTtFQUNFLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FEYUY7QUNWQTtFQUNFO0lBQ0UsVUFBQTtFRGFGO0VDVkE7SUFDRSxVQUFBO0VEWUY7QUFDRjtBQ25CQTtFQUNFO0lBQ0UsVUFBQTtFRGFGO0VDVkE7SUFDRSxVQUFBO0VEWUY7QUFDRjtBQ1RBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBRFdGO0FHM0hBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBSDhIRjtBRzdIRTtFQUNFLFlBQUE7QUgrSEo7QUc5SEk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0RSTztFQ1NQLHlCQUFBO0FIZ0lOO0FHOUhJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FIZ0lOO0FHL0hNO0VBQ0UsZUFBQTtFQUNBLGNEakJLO0FGa0piO0FHOUhJO0VBQ0UsZUFBQTtFQUNBLGNEakJNO0FGaUpaO0FHOUhJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCRDVCUztFQzZCVCxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FIZ0lOO0FHOUhJO0VBQ0UseUJEckNTO0VDc0NULGNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FIZ0lOO0FHN0hFO0VBQ0UsWUFBQTtBSCtISjtBRzlISTtFQUNFLHlCRHZDVztFQ3dDWCxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBSGdJTjtBRy9ITTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FIaUlSO0FHaElRO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FIa0lWO0FHaElRO0VBQ0UsY0FBQTtBSGtJVjtBR2hJUTtFQUNFLGdCQUFBO0FIa0lWO0FHaklVO0VBQ0UsV0FBQTtBSG1JWjtBRzdITTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FIK0hSO0FHOUhRO0VBQ0UsY0RqRks7QUZpTmY7QUc3SE07RUFDRSx5QkQ5RVM7RUMrRVQsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUgrSFI7QUc5SFE7RUFDRSxjRHpGRztBRnlOYjtBRzNISTtFQUNFLFlBQUE7QUg2SE47QUc1SE07RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FIOEhSO0FHM0hJO0VBQ0EsV0FBQTtBSDZISjtBRzVITTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtBSDhIUjtBRzFIRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJEekdXO0FGcU9mO0FHekhBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUg0SEY7RUczSEU7SUFDRSxZQUFBO0VINkhKO0VHNUhJO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGNEM0hLO0lDNEhMLHlCQUFBO0VIOEhOO0VHNUhJO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0VIOEhOO0VHN0hNO0lBQ0UsZUFBQTtJQUNBLGNEcElHO0VGbVFYO0VHNUhJO0lBQ0UsZUFBQTtJQUNBLGNEcElJO0VGa1FWO0VHNUhJO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLHlCRC9JTztJQ2dKUCxrQkFBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0VIOEhOO0VHekhNO0lBRUUsaUJBQUE7RUgwSFI7RUd6SFE7SUFDRSxpQkFBQTtFSDJIVjtFR3JIUTtJQUNFLGNEcEtDO0lDcUtELGlCQUFBO0VIdUhWO0VHckhRO0lBQ0UseUJEektHO0lDMEtILGNBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUh1SFY7RUdySFE7SUFDRSw2QkFBQTtFSHVIVjtFR2xITTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUhvSFI7RUcvR0U7SUFDRSxhQUFBO0VIaUhKO0FBQ0Y7QUc5R0E7RUFJUTtJQUNFLHlCRHRNSztJQ3VNTCxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFSDZHUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGVuLWRlci9jb250ZW4tZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuKiB7XG4gIC8qIE5vIGFncmFuZGEgcGFkZGluZyBvIGJvcmRlciovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5mbGF0aWNvbi1zZWFyY2gtMTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+GllwiO1xufVxuXG5ib2R5IHtcbiAgLyogTm8gbWFyZ2VuIHBvciBkZWZlY3RvIGRlbCBib2R5ICovXG4gIG1hcmdpbjogMDtcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nICAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW1nIHtcbiAgLyogUXVpdGEgYm9kZSBwb3IgZGVmZWN0byBkZWwgaW4tbGluZSovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiBhbmNobyBtYXhpbW8gZWwgMTAwJSBkZWwgYW5jaG8gZGVsIHBhZHJlKi9cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICAvKiBNYW50aWVuZSBwcm9wb3JjaW9uIGFsIHJlZXNjYWxhciovXG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cbmF1ZGlvLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcgKi9cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cbmFydGljbGUsXG5hc2lkZSxcbmZvb3RlcixcbmhlYWRlcixcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbm1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxudWwge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuYm9keSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4vKiBBbmltYWNpb25lcywgZXh0cmFjdG8gZGUgbGEgbGlicmVyw61hIGFuaW1hdGUgKi9cbi5hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uZmFzdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZmFkZUluIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbn1cblxuLmNvbi1kZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29uLWRlciAuaGVhZGVyIHtcbiAgaGVpZ2h0OiA0cmVtO1xufVxuLmNvbi1kZXIgLmhlYWRlciBoMS50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGNvbG9yOiAjMjcyODMzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmNvbi1kZXIgLmhlYWRlciAuaW5wdXQtZ3JvdXAuYnVzYy1pbmYge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDNyZW07XG59XG4uY29uLWRlciAuaGVhZGVyIC5pbnB1dC1ncm91cC5idXNjLWluZiAuZm9ybS1jb250cm9sIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5jb24tZGVyIC5oZWFkZXIgLnRleHQtZ3JleSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICM3MzczNzM7XG59XG4uY29uLWRlciAuaGVhZGVyIC5idG4tdXN1IHtcbiAgd2lkdGg6IDEuOTQ0NHJlbTtcbiAgaGVpZ2h0OiAxLjk0NDRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MjAwNUU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuLmNvbi1kZXIgLmhlYWRlciAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyMDA1RTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNvbi1kZXIgLmJvZHkge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uY29uLWRlciAuYm9keSAubWlnYXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJEQkRCO1xuICBoZWlnaHQ6IDNyZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb24tZGVyIC5ib2R5IC5taWdhcyAubWlnLXRleHQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbi1kZXIgLmJvZHkgLm1pZ2FzIC5taWctdGV4dDo6YWZ0ZXIge1xuICBjb250ZW50OiB1cmwoXCIuLi8uLi9hc3NldHMvaWNvbnMvbWlnYXMtYXJyb3cuc3ZnXCIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMXJlbTtcbiAgdG9wOiAwLjFlbTtcbn1cbi5jb24tZGVyIC5ib2R5IC5taWdhcyAubWlnLXRleHQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmNvbi1kZXIgLmJvZHkgLm1pZ2FzIC5taWctdGV4dDpsYXN0LW9mLXR5cGUge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmNvbi1kZXIgLmJvZHkgLm1pZ2FzIC5taWctdGV4dDpsYXN0LW9mLXR5cGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbn1cbi5jb24tZGVyIC5ib2R5IC5uYXZlZy1pbnRlcm4gLmxpbmstbmF2LWFjdCB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjODIwMDVFO1xuICBoZWlnaHQ6IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbi1kZXIgLmJvZHkgLm5hdmVnLWludGVybiAubGluay1uYXYtYWN0IGEge1xuICBjb2xvcjogIzgyMDA1RTtcbn1cbi5jb24tZGVyIC5ib2R5IC5uYXZlZy1pbnRlcm4gLmJnLWdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJEQkRCO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb24tZGVyIC5ib2R5IC5uYXZlZy1pbnRlcm4gLmJnLWdyZXkgYSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNvbi1kZXIgLmJvZHkgLmNvbnRlbi1sb2ctaW5mIHtcbiAgaGVpZ2h0OiA3cmVtO1xufVxuLmNvbi1kZXIgLmJvZHkgLmNvbnRlbi1sb2ctaW5mIC50ZXh0LWluZiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XG59XG4uY29uLWRlciAuYm9keSAuY29udGVuLWlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbi1kZXIgLmJvZHkgLmNvbnRlbi1pZnJhbWUgaWZyYW1lIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAuNXJlbSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbi1kZXIgZm9vdGVyIHtcbiAgaGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdEN0Q3RDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29uLWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgfVxuICAuY29uLWRlciAuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDRyZW07XG4gIH1cbiAgLmNvbi1kZXIgLmhlYWRlciBoMS50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBjb2xvcjogIzI3MjgzMztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5jb24tZGVyIC5oZWFkZXIgLmlucHV0LWdyb3VwLmJ1c2MtaW5mIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcbiAgfVxuICAuY29uLWRlciAuaGVhZGVyIC5pbnB1dC1ncm91cC5idXNjLWluZiAuZm9ybS1jb250cm9sIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgLmNvbi1kZXIgLmhlYWRlciAudGV4dC1ncmV5IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICM3MzczNzM7XG4gIH1cbiAgLmNvbi1kZXIgLmhlYWRlciAuYnRuLXVzdSB7XG4gICAgd2lkdGg6IDEuOTQ0NHJlbTtcbiAgICBoZWlnaHQ6IDEuOTQ0NHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODIwMDVFO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgfVxuICAuY29uLWRlciAuYm9keSAubmF2ZWctaW50ZXJuIC5saW5rLW5hdi1hY3Qge1xuICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICB9XG4gIC5jb24tZGVyIC5ib2R5IC5uYXZlZy1pbnRlcm4gLmxpbmstbmF2LWFjdCBhIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICAuY29uLWRlciAuYm9keSAubmF2ZWctaW50ZXJuIC5iZy1ncmV5IGEge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG4gIC5jb24tZGVyIC5ib2R5IC5uYXZlZy1pbnRlcm4gLmJnLWdyZXkgLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgyMDA1RTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgfVxuICAuY29uLWRlciAuYm9keSAubmF2ZWctaW50ZXJuIC5iZy1ncmV5Omxhc3Qtb2YtdHlwZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLmNvbi1kZXIgLmJvZHkgLmNvbnRlbi1sb2ctaW5mIC50ZXh0LWluZiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICAuY29uLWRlciBmb290ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogOTkzcHgpIHtcbiAgLmNvbi1kZXIgLm5hdmVnLWludGVybiAuYmctZ3JleSAuYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODIwMDVFO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi9jb2xvcnMuc2Nzc1wiO1xyXG4qIHtcclxuICAvKiBObyBhZ3JhbmRhIHBhZGRpbmcgbyBib3JkZXIqL1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmZsYXRpY29uLXNlYXJjaC0xOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGYxOTZcIjtcclxufVxyXG5ib2R5IHtcclxuICAvKiBObyBtYXJnZW4gcG9yIGRlZmVjdG8gZGVsIGJvZHkgKi9cclxuICBtYXJnaW46IDA7XHJcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nICAqL1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuaW1nIHtcclxuICAvKiBRdWl0YSBib2RlIHBvciBkZWZlY3RvIGRlbCBpbi1saW5lKi9cclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvKiBhbmNobyBtYXhpbW8gZWwgMTAwJSBkZWwgYW5jaG8gZGVsIHBhZHJlKi9cclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgLyogTWFudGllbmUgcHJvcG9yY2lvbiBhbCByZWVzY2FsYXIqL1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4vKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LSAqL1xyXG5hdWRpbyxcclxudmlkZW8ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4vKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03ICovXHJcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5uYXYsXHJcbnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmZpZ2NhcHRpb24sXHJcbmZpZ3VyZSxcclxubWFpbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxudWwge1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xyXG59XHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5ib2R5IHtcclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG46LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgLyogRmlyZWZveCAxOC0gKi9cclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG46Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLyogQW5pbWFjaW9uZXMsIGV4dHJhY3RvIGRlIGxhIGxpYnJlcsOtYSBhbmltYXRlICovXHJcblxyXG4uYW5pbWF0ZWQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG4uZmFzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbn1cclxuIiwiJGNvbG9yLXByaW1hcnk6IzgyMDA1RTtcclxuJHRleHQtY29sb3I6ICMwMDAwMDA7XHJcbiRjb2xvci1kYXJrOiAjMjcyODMzO1xyXG4kYm9yZGVyLWNvbG9yOiAjRTZFNkU2O1xyXG4kY29sb3ItYWxlcnQ6IHJnYmEoMjU1LCAyMywgMzMsIDAuMSk7XHJcbiR3aGl0ZS1zZWNvbmRhcnk6I0YwRThDMDtcclxuJGNvbG9yLWdyZXk6IzczNzM3MztcclxuJGJhY2tncm91bmQtZ3JleTojREJEQkRCO1xyXG4kZm9vdGVyLWNvbG9yOiAjN0Q3RDdEO1xyXG4kY29sb3ItZ3JlZW46ICMyQkFEMEQ7XHJcbiRjb2xvci1yZWQ6I0RDMzU0NTtcclxuJGNvbG9yLXllbGxvdzpyZ2JhKDI1NSwgMjA0LCAwLCAwLjkpOyIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4uY29uLWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAuaGVhZGVyIHtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIGgxLnRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgY29sb3I6ICRjb2xvci1kYXJrO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgLmlucHV0LWdyb3VwLmJ1c2MtaW5mIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xyXG4gICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dC1ncmV5IHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWdyZXk7XHJcbiAgICB9XHJcbiAgICAuYnRuLXVzdSB7XHJcbiAgICAgIHdpZHRoOiAxLjk0NDRyZW07XHJcbiAgICAgIGhlaWdodDogMS45NDQ0cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJvZHkge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgLm1pZ2FzIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtZ3JleTtcclxuICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5taWctdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pY29ucy9taWdhcy1hcnJvdy5zdmdcIik7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogLTFyZW07XHJcbiAgICAgICAgICB0b3A6IDAuMWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2ZWctaW50ZXJuIHtcclxuICAgICAgLmxpbmstbmF2LWFjdCB7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xyXG4gICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5iZy1ncmV5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1ncmV5O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVuLWxvZy1pbmYge1xyXG4gICAgICBoZWlnaHQ6IDdyZW07XHJcbiAgICAgIC50ZXh0LWluZiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuODc1MHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbnRlbi1pZnJhbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAuNXJlbSk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9vdGVyIHtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZvb3Rlci1jb2xvcjtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5jb24tZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgIGgxLnRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1kYXJrO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIH1cclxuICAgICAgLmlucHV0LWdyb3VwLmJ1c2MtaW5mIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtZ3JleSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JleTtcclxuICAgICAgfVxyXG4gICAgICAuYnRuLXVzdSB7XHJcbiAgICAgICAgd2lkdGg6IDEuOTQ0NHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDEuOTQ0NHJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5ib2R5IHtcclxuICAgICAgLm5hdmVnLWludGVybiB7XHJcbiAgICAgICAgLmxpbmstbmF2LWFjdCB7XHJcbiAgICAgICAgICAvLyBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iZy1ncmV5IHtcclxuICAgICAgICAgIC8vICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY29udGVuLWxvZy1pbmYge1xyXG4gICAgICAgIC50ZXh0LWluZiB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOjEuM3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICBmb290ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDk5M3B4KSB7XHJcbiAgLmNvbi1kZXIge1xyXG4gICAgLm5hdmVnLWludGVybiB7XHJcbiAgICAgIC5iZy1ncmV5IHtcclxuICAgICAgICAuYnRuIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/conten-der/conten-der.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/conten-der/conten-der.component.ts ***!
          \****************************************************/
        /*! exports provided: ContenDerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContenDerComponent", function () { return ContenDerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            var ContenDerComponent = /** @class */ (function () {
                function ContenDerComponent(dataService) {
                    this.dataService = dataService;
                    this.urlPowerbi = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urlPowerbi;
                    this.informes = this.dataService.valores;
                }
                Object.defineProperty(ContenDerComponent.prototype, "informe", {
                    set: function (value) {
                        this.informeId = value;
                        this.searchInforme();
                    },
                    enumerable: true,
                    configurable: true
                });
                ContenDerComponent.prototype.toPdf = function () {
                    /* const url = 'https://url-to-pdf-api.herokuapp.com/api/render?';
                    const params = 'pdf.landscape=true&viewport.width=900&pdf.margin.top=100&pdf.margin.left=100&url=';
                    window.open(url + params + this.urlPowerbi + this.urlInforme, '_blank'); */
                    window.open('admin/resources/assets/pdfs/PlayRenfe-Trenes-PDF.pdf', '_blank');
                };
                ContenDerComponent.prototype.searchInforme = function () {
                    for (var _i = 0, _a = this.informes; _i < _a.length; _i++) {
                        var informe = _a[_i];
                        if (informe.submenus) {
                            for (var _b = 0, _c = informe.submenus; _b < _c.length; _b++) {
                                var item = _c[_b];
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
                };
                ContenDerComponent.prototype.compareSetUrlInforme = function (informe, padre) {
                    if (Object.is(this.informeId, informe.id)) {
                        this.urlInforme = informe.iframe;
                        this.tituloInforme = informe.texto;
                        this.tituloInformePadre = padre ? padre.texto : null;
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                return ContenDerComponent;
            }());
            ContenDerComponent.ctorParameters = function () { return [
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/login/login.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/login/login.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n* {\n  /* No agranda padding o border*/\n  box-sizing: border-box;\n}\n.flaticon-search-1:before {\n  content: \"\";\n}\nbody {\n  /* No margen por defecto del body */\n  margin: 0;\n  /* Better Font Rendering  */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nimg {\n  /* Quita bode por defecto del in-line*/\n  display: block;\n  /* ancho maximo el 100% del ancho del padre*/\n  max-width: 100%;\n  /* Mantiene proporcion al reescalar*/\n  height: auto;\n}\n/* Add the correct display in IE 9- */\naudio,\nvideo {\n  display: inline-block;\n}\n/* Add the correct display in iOS 4-7 */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/* Add the correct display in IE 9- */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\nfigcaption,\nfigure,\nmain {\n  display: block;\n}\nul {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n:focus {\n  outline: none;\n  box-shadow: none;\n}\n/***************************************/\nbody {\n  color: #000000;\n}\n::-webkit-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #000000;\n  font-size: 1rem;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #000000;\n  font-size: 1rem;\n}\n:-ms-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n/* Animaciones, extracto de la librería animate */\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.fast {\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n}\n.login {\n  min-height: 100vh;\n}\n.login .backgr-login {\n  background-image: url(admin/resources/assets/images/background-login.png);\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100vh;\n  position: relative;\n}\n.login .backgr-login .text-log {\n  position: absolute;\n  width: 50%;\n  bottom: 20%;\n  right: 5%;\n}\n.login .backgr-login .text-log h1 {\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 46px;\n  text-align: right;\n  padding-bottom: 1.5rem;\n}\n.login .backgr-login .text-log h4 {\n  font-weight: 500;\n  font-size: 24px;\n  color: #F0E8C0;\n  text-align: right;\n}\n.login .conten-log {\n  width: 80%;\n  margin: auto;\n}\n.login .conten-log .inic-ses {\n  font-weight: 600;\n  font-size: 22px;\n  line-height: 23px;\n}\n.login .conten-log .contras-ave .invalid-feedback-ave {\n  background-color: rgba(255, 23, 33, 0.1);\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 21px;\n}\n.login .conten-log .contras-ave label {\n  font-size: 18px;\n  line-height: 20px;\n}\n.login .conten-log .contras-ave .form-control {\n  border: none;\n  border-bottom: #E6E6E6 1px solid;\n}\n.login .conten-log .contras-ave .btn.btn-primary {\n  background-color: #82005E;\n  border: none;\n  padding: 0.5rem 3rem;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 16px;\n}\n.login .login-ave {\n  min-height: 100vh;\n}\n@media only screen and (max-width: 1640px) {\n  .login .backgr-login .text-log {\n    width: 70%;\n  }\n}\n@media only screen and (max-width: 1200px) {\n  .login .backgr-login .text-log {\n    width: 90%;\n    bottom: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL0M6XFxVc2Vyc1xcWDUxNDIzWkFcXERlc2Fycm9sbG9cXFByb3llY3RvIFJlbmZlXFxSZW5mZURpc2Vuby9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9sb2dpbi9DOlxcVXNlcnNcXFg1MTQyM1pBXFxEZXNhcnJvbGxvXFxQcm95ZWN0byBSZW5mZVxcUmVuZmVEaXNlbm8vc3JjXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxYNTE0MjNaQVxcRGVzYXJyb2xsb1xcUHJveWVjdG8gUmVuZmVcXFJlbmZlRGlzZW5vL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0UsK0JBQUE7RUFDQSxzQkFBQTtBRENGO0FDQ0E7RUFDRSxZQUFBO0FERUY7QUNBQTtFQUNFLG1DQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBREdGO0FDREE7RUFDRSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QURJRjtBQ0ZBLHFDQUFBO0FBQ0E7O0VBRUUscUJBQUE7QURLRjtBQ0hBLHVDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBRE1GO0FDSkEscUNBQUE7QUFDQTs7Ozs7O0VBTUUsY0FBQTtBRE9GO0FDTEE7OztFQUdFLGNBQUE7QURRRjtBQ05BO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBRFNGO0FDUEE7RUFDRSxnQkFBQTtBRFVGO0FDUkE7RUFDRSxxQkFBQTtBRFdGO0FDVEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QURZRjtBQ1ZBLHdDQUFBO0FBQ0E7RUFDRSxjQzdEVztBRjBFYjtBQ1hBO0VBQ0UsY0NoRVc7RURpRVgsZUFBQTtBRGNGO0FDWEE7RUFDRSxnQkFBQTtFQUNBLGNDdEVXO0VEdUVYLGVBQUE7QURjRjtBQ1hBO0VBQ0UsZ0JBQUE7RUFDQSxjQzVFVztFRDZFWCxlQUFBO0FEY0Y7QUNYQTtFQUNFLGNDakZXO0VEa0ZYLGVBQUE7QURjRjtBQ1hBLGlEQUFBO0FBRUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBRGFGO0FDVkE7RUFDRSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBRGFGO0FDVkE7RUFDRTtJQUNFLFVBQUE7RURhRjtFQ1ZBO0lBQ0UsVUFBQTtFRFlGO0FBQ0Y7QUNuQkE7RUFDRTtJQUNFLFVBQUE7RURhRjtFQ1ZBO0lBQ0UsVUFBQTtFRFlGO0FBQ0Y7QUNUQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QURXRjtBRzNIQTtFQUNFLGlCQUFBO0FIOEhGO0FHN0hFO0VBQ0UsMERBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FIK0hKO0FHOUhJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUhnSU47QUcvSE07RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBSGlJUjtBRy9ITTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNEckJTO0VDc0JULGlCQUFBO0FIaUlSO0FHN0hFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUgrSEo7QUc5SEk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBSGdJTjtBRzdITTtFQUNFLHdDRHJDTTtFQ3NDTixnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBSCtIUjtBRzdITTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBSCtIUjtBRzdITTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtBSCtIUjtBRzdITTtFQUNFLHlCRHZETztFQ3dEUCxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBSCtIUjtBRzNIRTtFQUNFLGlCQUFBO0FINkhKO0FHMUhBO0VBR007SUFDRSxVQUFBO0VIMkhOO0FBQ0Y7QUd2SEE7RUFHTTtJQUNFLFVBQUE7SUFDQSxXQUFBO0VIdUhOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICAvKiBObyBhZ3JhbmRhIHBhZGRpbmcgbyBib3JkZXIqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZmxhdGljb24tc2VhcmNoLTE6YmVmb3JlIHtcbiAgY29udGVudDogXCLvhpZcIjtcbn1cblxuYm9keSB7XG4gIC8qIE5vIG1hcmdlbiBwb3IgZGVmZWN0byBkZWwgYm9keSAqL1xuICBtYXJnaW46IDA7XG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyAgKi9cbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmltZyB7XG4gIC8qIFF1aXRhIGJvZGUgcG9yIGRlZmVjdG8gZGVsIGluLWxpbmUqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogYW5jaG8gbWF4aW1vIGVsIDEwMCUgZGVsIGFuY2hvIGRlbCBwYWRyZSovXG4gIG1heC13aWR0aDogMTAwJTtcbiAgLyogTWFudGllbmUgcHJvcG9yY2lvbiBhbCByZWVzY2FsYXIqL1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktICovXG5hdWRpbyxcbnZpZGVvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03ICovXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktICovXG5hcnRpY2xlLFxuYXNpZGUsXG5mb290ZXIsXG5oZWFkZXIsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnVsIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbmJvZHkge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuOi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE5KyAqL1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLyogQW5pbWFjaW9uZXMsIGV4dHJhY3RvIGRlIGxhIGxpYnJlcsOtYSBhbmltYXRlICovXG4uYW5pbWF0ZWQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmZhc3Qge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmZhZGVJbiB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG59XG5cbi5sb2dpbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLmxvZ2luIC5iYWNrZ3ItbG9naW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1sb2dpbi5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvZ2luIC5iYWNrZ3ItbG9naW4gLnRleHQtbG9nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICBib3R0b206IDIwJTtcbiAgcmlnaHQ6IDUlO1xufVxuLmxvZ2luIC5iYWNrZ3ItbG9naW4gLnRleHQtbG9nIGgxIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogNDZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG59XG4ubG9naW4gLmJhY2tnci1sb2dpbiAudGV4dC1sb2cgaDQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjRjBFOEMwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5sb2dpbiAuY29udGVuLWxvZyB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5sb2dpbiAuY29udGVuLWxvZyAuaW5pYy1zZXMge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xufVxuLmxvZ2luIC5jb250ZW4tbG9nIC5jb250cmFzLWF2ZSAuaW52YWxpZC1mZWVkYmFjay1hdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjMsIDMzLCAwLjEpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuLmxvZ2luIC5jb250ZW4tbG9nIC5jb250cmFzLWF2ZSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubG9naW4gLmNvbnRlbi1sb2cgLmNvbnRyYXMtYXZlIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206ICNFNkU2RTYgMXB4IHNvbGlkO1xufVxuLmxvZ2luIC5jb250ZW4tbG9nIC5jb250cmFzLWF2ZSAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyMDA1RTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW0gM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmxvZ2luIC5sb2dpbi1hdmUge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjQwcHgpIHtcbiAgLmxvZ2luIC5iYWNrZ3ItbG9naW4gLnRleHQtbG9nIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAubG9naW4gLmJhY2tnci1sb2dpbiAudGV4dC1sb2cge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm90dG9tOiAxMCU7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi9jb2xvcnMuc2Nzc1wiO1xyXG4qIHtcclxuICAvKiBObyBhZ3JhbmRhIHBhZGRpbmcgbyBib3JkZXIqL1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmZsYXRpY29uLXNlYXJjaC0xOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXGYxOTZcIjtcclxufVxyXG5ib2R5IHtcclxuICAvKiBObyBtYXJnZW4gcG9yIGRlZmVjdG8gZGVsIGJvZHkgKi9cclxuICBtYXJnaW46IDA7XHJcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nICAqL1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuaW1nIHtcclxuICAvKiBRdWl0YSBib2RlIHBvciBkZWZlY3RvIGRlbCBpbi1saW5lKi9cclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvKiBhbmNobyBtYXhpbW8gZWwgMTAwJSBkZWwgYW5jaG8gZGVsIHBhZHJlKi9cclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgLyogTWFudGllbmUgcHJvcG9yY2lvbiBhbCByZWVzY2FsYXIqL1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4vKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LSAqL1xyXG5hdWRpbyxcclxudmlkZW8ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4vKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBpT1MgNC03ICovXHJcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5uYXYsXHJcbnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmZpZ2NhcHRpb24sXHJcbmZpZ3VyZSxcclxubWFpbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxudWwge1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xyXG59XHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG46Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5ib2R5IHtcclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG46LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgLyogRmlyZWZveCAxOC0gKi9cclxuICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG46Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIC8qIEZpcmVmb3ggMTkrICovXHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLyogQW5pbWFjaW9uZXMsIGV4dHJhY3RvIGRlIGxhIGxpYnJlcsOtYSBhbmltYXRlICovXHJcblxyXG4uYW5pbWF0ZWQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG4uZmFzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbn1cclxuIiwiJGNvbG9yLXByaW1hcnk6IzgyMDA1RTtcclxuJHRleHQtY29sb3I6ICMwMDAwMDA7XHJcbiRjb2xvci1kYXJrOiAjMjcyODMzO1xyXG4kYm9yZGVyLWNvbG9yOiAjRTZFNkU2O1xyXG4kY29sb3ItYWxlcnQ6IHJnYmEoMjU1LCAyMywgMzMsIDAuMSk7XHJcbiR3aGl0ZS1zZWNvbmRhcnk6I0YwRThDMDtcclxuJGNvbG9yLWdyZXk6IzczNzM3MztcclxuJGJhY2tncm91bmQtZ3JleTojREJEQkRCO1xyXG4kZm9vdGVyLWNvbG9yOiAjN0Q3RDdEO1xyXG4kY29sb3ItZ3JlZW46ICMyQkFEMEQ7XHJcbiRjb2xvci1yZWQ6I0RDMzU0NTtcclxuJGNvbG9yLXllbGxvdzpyZ2JhKDI1NSwgMjA0LCAwLCAwLjkpOyIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG4ubG9naW4ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIC5iYWNrZ3ItbG9naW4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtbG9naW4ucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC50ZXh0LWxvZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgYm90dG9tOiAyMCU7XHJcbiAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiA0NnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgICAgIH1cclxuICAgICAgaDQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGUtc2Vjb25kYXJ5O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb250ZW4tbG9nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAuaW5pYy1zZXMge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRyYXMtYXZlIHtcclxuICAgICAgLmludmFsaWQtZmVlZGJhY2stYXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYWxlcnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgIH1cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogJGJvcmRlci1jb2xvciAxcHggc29saWQ7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmxvZ2luLWF2ZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjQwcHgpIHtcclxuICAubG9naW4ge1xyXG4gICAgLmJhY2tnci1sb2dpbiB7XHJcbiAgICAgIC50ZXh0LWxvZyB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5sb2dpbiB7XHJcbiAgICAuYmFja2dyLWxvZ2luIHtcclxuICAgICAgLnRleHQtbG9nIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(loginService, userService, router) {
                    this.loginService = loginService;
                    this.userService = userService;
                    this.router = router;
                }
                LoginComponent.prototype.logIn = function (username, password, event) {
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
                };
                LoginComponent.prototype.ocultarAlerta = function () {
                    this.alerta = false;
                };
                LoginComponent.prototype.navigate = function () {
                    //TODO this.router.navigateByUrl('/body');
                    this.router.navigateByUrl('/admin');
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/navbar-left/navbar-left.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/navbar-left/navbar-left.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n* {\n  /* No agranda padding o border*/\n  box-sizing: border-box;\n}\n.flaticon-search-1:before {\n  content: \"\";\n}\nbody {\n  /* No margen por defecto del body */\n  margin: 0;\n  /* Better Font Rendering  */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nimg {\n  /* Quita bode por defecto del in-line*/\n  display: block;\n  /* ancho maximo el 100% del ancho del padre*/\n  max-width: 100%;\n  /* Mantiene proporcion al reescalar*/\n  height: auto;\n}\n/* Add the correct display in IE 9- */\naudio,\nvideo {\n  display: inline-block;\n}\n/* Add the correct display in iOS 4-7 */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/* Add the correct display in IE 9- */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\nfigcaption,\nfigure,\nmain {\n  display: block;\n}\nul {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n:focus {\n  outline: none;\n  box-shadow: none;\n}\n/***************************************/\nbody {\n  color: #000000;\n}\n::-webkit-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #000000;\n  font-size: 1rem;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #000000;\n  font-size: 1rem;\n}\n:-ms-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n/* Animaciones, extracto de la librería animate */\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.fast {\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n}\n.cont-navb-ave {\n  min-height: 100vh;\n  background-color: #82005E;\n  height: 100%;\n}\n.cont-navb-ave .navbar .bg-black {\n  background-color: #000000;\n  padding: 0.5rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item {\n  cursor: pointer;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item a.nav-link {\n  font-weight: bold;\n  font-size: 12px;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item.active a.nav-link {\n  border-bottom: 4px solid #ffffff;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes {\n  padding: 0rem;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  padding-top: 1.5rem;\n  background-color: #82005E;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li {\n  padding: 0.8rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv {\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 16px;\n  padding-left: 2.5rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.kpi-glob::before {\n  content: url(admin/resources//icons/kpi-glob.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.dat-acces::before {\n  content: url(admin/resources/assets/icons/dat-acces.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.conectiv-exter::before {\n  content: url(admin/resources/assets/icons/conectiv-exter.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.cerrar-sesion::before {\n  content: url(admin/resources/assets/icons/cerrar-sesion.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.disposit::before {\n  content: url(admin/resources/assets/icons/dispositivos.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.contenid::before {\n  content: url(admin/resources/assets/icons/contenidos.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.sub-arch::before {\n  content: url(admin/resources/assets/icons/subir-archivo.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv::after {\n  content: url(admin/resources/assets/icons/open-ul.svg);\n  position: absolute;\n  right: 2rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.arrowUp::after {\n  content: url(admin/resources/assets/icons/open-ul.svg);\n  position: absolute;\n  right: 2rem;\n  transform: rotate(180deg);\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv {\n  color: #F0E8C0;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv.kpi-glob::before {\n  content: url(admin/resources/assets/icons/kpi-glob-activ.svg);\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv.dat-acces::before {\n  content: url(admin/resources/assets/icons/dat-acces-activ.svg);\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv.conectiv-exter::before {\n  content: url(admin/resources/assets/icons/conectiv-exter-activ.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv.cerrar-sesion::before {\n  content: url(admin/resources/assets/icons/cerrar-sesion-activ.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv.disposit::before {\n  content: url(admin/resources/assets/icons/dispositivos-activ.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv.contenid::before {\n  content: url(admin/resources/assets/icons/contenidos-activ.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li a.prim-niv.active-prim-niv.sub-arch::before {\n  content: url(admin/resources/assets/icons/subir-archivo-activ.svg);\n  position: absolute;\n  left: 1rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li ul {\n  display: none;\n  padding-top: 0.8rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li ul li {\n  padding: 0.8rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li ul li a {\n  font-weight: normal;\n  font-size: 14px;\n  font-weight: bold;\n  color: #ffffff;\n  padding-left: 2rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li ul li a.active {\n  color: #F0E8C0;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li ul li a.active::before {\n  content: url(admin/resources/assets/icons/point.svg);\n  position: absolute;\n  left: 1.5rem;\n}\n.cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li:nth-of-type(4) a.prim-niv::after, .cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li:nth-of-type(1) a.prim-niv::after, .cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li:nth-of-type(3) a.prim-niv::after, .cont-navb-ave .navbar .collapse ul li.nav-item .informes ul li:nth-of-type(6) a.prim-niv::after {\n  content: \"\";\n}\n@media only screen and (max-width: 992px) {\n  .cont-navb-ave {\n    min-height: auto;\n    height: auto;\n    background-color: #82005E;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 10;\n  }\n  .cont-navb-ave .navbar .navbar-collapse.collapsing {\n    position: relative;\n    height: auto;\n    overflow: visible;\n    transition: none;\n  }\n  .cont-navb-ave .navbar .navbar-collapse ul li.nav-item a.nav-link {\n    padding-left: 3rem;\n  }\n  .cont-navb-ave .navbar .navbar-collapse ul li.nav-item.active a.nav-link {\n    border-bottom: none;\n  }\n  .cont-navb-ave .navbar .navbar-collapse ul li.nav-item .informes {\n    padding: 0rem;\n    position: relative;\n  }\n  .cont-navb-ave .navbar .navbar-collapse ul li.nav-item .informes ul li {\n    padding: 0.8rem;\n  }\n  .cont-navb-ave .navbar .navbar-collapse ul li.nav-item .informes ul li ul {\n    display: none;\n  }\n  .cont-navb-ave .navbar .navbar-collapse ul li.nav-item .informes ul li ul:target {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyLWxlZnQvbmF2YmFyLWxlZnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmJhci1sZWZ0L0M6XFxVc2Vyc1xcWDUxNDIzWkFcXERlc2Fycm9sbG9cXFByb3llY3RvIFJlbmZlXFxSZW5mZURpc2Vuby9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9uYXZiYXItbGVmdC9DOlxcVXNlcnNcXFg1MTQyM1pBXFxEZXNhcnJvbGxvXFxQcm95ZWN0byBSZW5mZVxcUmVuZmVEaXNlbm8vc3JjXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvbmF2YmFyLWxlZnQvQzpcXFVzZXJzXFxYNTE0MjNaQVxcRGVzYXJyb2xsb1xcUHJveWVjdG8gUmVuZmVcXFJlbmZlRGlzZW5vL3NyY1xcYXBwXFxuYXZiYXItbGVmdFxcbmF2YmFyLWxlZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0UsK0JBQUE7RUFDQSxzQkFBQTtBRENGO0FDQ0E7RUFDRSxZQUFBO0FERUY7QUNBQTtFQUNFLG1DQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBREdGO0FDREE7RUFDRSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QURJRjtBQ0ZBLHFDQUFBO0FBQ0E7O0VBRUUscUJBQUE7QURLRjtBQ0hBLHVDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBRE1GO0FDSkEscUNBQUE7QUFDQTs7Ozs7O0VBTUUsY0FBQTtBRE9GO0FDTEE7OztFQUdFLGNBQUE7QURRRjtBQ05BO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBRFNGO0FDUEE7RUFDRSxnQkFBQTtBRFVGO0FDUkE7RUFDRSxxQkFBQTtBRFdGO0FDVEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QURZRjtBQ1ZBLHdDQUFBO0FBQ0E7RUFDRSxjQzdEVztBRjBFYjtBQ1hBO0VBQ0UsY0NoRVc7RURpRVgsZUFBQTtBRGNGO0FDWEE7RUFDRSxnQkFBQTtFQUNBLGNDdEVXO0VEdUVYLGVBQUE7QURjRjtBQ1hBO0VBQ0UsZ0JBQUE7RUFDQSxjQzVFVztFRDZFWCxlQUFBO0FEY0Y7QUNYQTtFQUNFLGNDakZXO0VEa0ZYLGVBQUE7QURjRjtBQ1hBLGlEQUFBO0FBRUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBRGFGO0FDVkE7RUFDRSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBRGFGO0FDVkE7RUFDRTtJQUNFLFVBQUE7RURhRjtFQ1ZBO0lBQ0UsVUFBQTtFRFlGO0FBQ0Y7QUNuQkE7RUFDRTtJQUNFLFVBQUE7RURhRjtFQ1ZBO0lBQ0UsVUFBQTtFRFlGO0FBQ0Y7QUNUQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QURXRjtBRzNIQTtFQUNFLGlCQUFBO0VBQ0EseUJESGE7RUNJYixZQUFBO0FIOEhGO0FHNUhJO0VBQ0UseUJETk87RUNPUCxvQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FIOEhOO0FHMUhRO0VBQ0UsZUFBQTtBSDRIVjtBRzNIVTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBSDZIWjtBRzFIWTtFQUNFLGdDQUFBO0FINEhkO0FHekhVO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLHlCRGhDRztBRjJKZjtBR3pIYztFQUNFLGVBQUE7QUgySGhCO0FHMUhnQjtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBSDRIbEI7QUczSGtCO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUg2SHBCO0FHM0hrQjtFQUNFLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FINkhwQjtBRzNIa0I7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBSDZIcEI7QUczSGtCO0VBQ0UsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUg2SHBCO0FHM0hrQjtFQUNFLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FINkhwQjtBRzNIa0I7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBSDZIcEI7QUczSGtCO0VBQ0UsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUg2SHBCO0FHM0hrQjtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FINkhwQjtBRzNIa0I7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FINkhwQjtBRzNIa0I7RUFDRSxjRG5GSDtBRmdOakI7QUc1SG9CO0VBQ0UsOENBQUE7QUg4SHRCO0FHNUhvQjtFQUNFLCtDQUFBO0FIOEh0QjtBRzVIb0I7RUFDRSxvREFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBSDhIdEI7QUc1SG9CO0VBQ0UsbURBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUg4SHRCO0FHNUhvQjtFQUNFLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FIOEh0QjtBRzVIb0I7RUFDRSxnREFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBSDhIdEI7QUc1SG9CO0VBQ0UsbURBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUg4SHRCO0FHMUhnQjtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBSDRIbEI7QUczSGtCO0VBQ0UsZUFBQTtBSDZIcEI7QUc1SG9CO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUg4SHRCO0FHN0hzQjtFQUNFLGNEaklQO0FGZ1FqQjtBRzdId0I7RUFDRSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBSCtIMUI7QUdySGtCO0VBQ0UsV0FBQTtBSHVIcEI7QUc1R0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLHlCRHJLVztJQ3NLWCxlQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VIK0dGO0VHckdNO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFSHVHUjtFR25HVTtJQUdFLGtCQUFBO0VIbUdaO0VHaEdZO0lBQ0UsbUJBQUE7RUhrR2Q7RUcvRlU7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RUhpR1o7RUc5RmM7SUFDRSxlQUFBO0VIZ0doQjtFRzFEZ0I7SUFFRSxhQUFBO0VIMkRsQjtFR3pEa0I7SUFDRSxjQUFBO0VIMkRwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyLWxlZnQvbmF2YmFyLWxlZnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4qIHtcbiAgLyogTm8gYWdyYW5kYSBwYWRkaW5nIG8gYm9yZGVyKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZsYXRpY29uLXNlYXJjaC0xOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74aWXCI7XG59XG5cbmJvZHkge1xuICAvKiBObyBtYXJnZW4gcG9yIGRlZmVjdG8gZGVsIGJvZHkgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiBCZXR0ZXIgRm9udCBSZW5kZXJpbmcgICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5pbWcge1xuICAvKiBRdWl0YSBib2RlIHBvciBkZWZlY3RvIGRlbCBpbi1saW5lKi9cbiAgZGlzcGxheTogYmxvY2s7XG4gIC8qIGFuY2hvIG1heGltbyBlbCAxMDAlIGRlbCBhbmNobyBkZWwgcGFkcmUqL1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8qIE1hbnRpZW5lIHByb3BvcmNpb24gYWwgcmVlc2NhbGFyKi9cbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LSAqL1xuYXVkaW8sXG52aWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gaU9TIDQtNyAqL1xuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LSAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZm9vdGVyLFxuaGVhZGVyLFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5maWdjYXB0aW9uLFxuZmlndXJlLFxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG51bCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xufVxuXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5ib2R5IHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOC0gKi9cbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgLyogRmlyZWZveCAxOSsgKi9cbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi8qIEFuaW1hY2lvbmVzLCBleHRyYWN0byBkZSBsYSBsaWJyZXLDrWEgYW5pbWF0ZSAqL1xuLmFuaW1hdGVkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5mYXN0IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5mYWRlSW4ge1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xufVxuXG4uY29udC1uYXZiLWF2ZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODIwMDVFO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5iZy1ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIGEubmF2LWxpbmsge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0uYWN0aXZlIGEubmF2LWxpbmsge1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZmZmZmZjtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB7XG4gIHBhZGRpbmc6IDByZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MjAwNUU7XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkge1xuICBwYWRkaW5nOiAwLjhyZW07XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgYS5wcmltLW5pdiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSBhLnByaW0tbml2LmtwaS1nbG9iOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9rcGktZ2xvYi5zdmcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDFyZW07XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgYS5wcmltLW5pdi5kYXQtYWNjZXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2RhdC1hY2Nlcy5zdmcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDFyZW07XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgYS5wcmltLW5pdi5jb25lY3Rpdi1leHRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvY29uZWN0aXYtZXh0ZXIuc3ZnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIGEucHJpbS1uaXYuY2VycmFyLXNlc2lvbjo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvY2VycmFyLXNlc2lvbi5zdmcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDFyZW07XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgYS5wcmltLW5pdi5kaXNwb3NpdDo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvZGlzcG9zaXRpdm9zLnN2Zyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXJlbTtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSBhLnByaW0tbml2LmNvbnRlbmlkOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9jb250ZW5pZG9zLnN2Zyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXJlbTtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSBhLnByaW0tbml2LnN1Yi1hcmNoOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9zdWJpci1hcmNoaXZvLnN2Zyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXJlbTtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSBhLnByaW0tbml2OjphZnRlciB7XG4gIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL29wZW4tdWwuc3ZnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMnJlbTtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSBhLnByaW0tbml2LmFycm93VXA6OmFmdGVyIHtcbiAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvb3Blbi11bC5zdmcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAycmVtO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIGEucHJpbS1uaXYuYWN0aXZlLXByaW0tbml2IHtcbiAgY29sb3I6ICNGMEU4QzA7XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgYS5wcmltLW5pdi5hY3RpdmUtcHJpbS1uaXYua3BpLWdsb2I6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2twaS1nbG9iLWFjdGl2LnN2Zyk7XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgYS5wcmltLW5pdi5hY3RpdmUtcHJpbS1uaXYuZGF0LWFjY2VzOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9kYXQtYWNjZXMtYWN0aXYuc3ZnKTtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSBhLnByaW0tbml2LmFjdGl2ZS1wcmltLW5pdi5jb25lY3Rpdi1leHRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvY29uZWN0aXYtZXh0ZXItYWN0aXYuc3ZnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIGEucHJpbS1uaXYuYWN0aXZlLXByaW0tbml2LmNlcnJhci1zZXNpb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2NlcnJhci1zZXNpb24tYWN0aXYuc3ZnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIGEucHJpbS1uaXYuYWN0aXZlLXByaW0tbml2LmRpc3Bvc2l0OjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9kaXNwb3NpdGl2b3MtYWN0aXYuc3ZnKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxcmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIGEucHJpbS1uaXYuYWN0aXZlLXByaW0tbml2LmNvbnRlbmlkOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9jb250ZW5pZG9zLWFjdGl2LnN2Zyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXJlbTtcbn1cbi5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSBhLnByaW0tbml2LmFjdGl2ZS1wcmltLW5pdi5zdWItYXJjaDo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvc3ViaXItYXJjaGl2by1hY3Rpdi5zdmcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDFyZW07XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgdWwge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nLXRvcDogMC44cmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIHVsIGxpIHtcbiAgcGFkZGluZzogMC44cmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIHVsIGxpIGEge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpIHVsIGxpIGEuYWN0aXZlIHtcbiAgY29sb3I6ICNGMEU4QzA7XG59XG4uY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgdWwgbGkgYS5hY3RpdmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL3BvaW50LnN2Zyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMS41cmVtO1xufVxuLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpOm50aC1vZi10eXBlKDQpIGEucHJpbS1uaXY6OmFmdGVyLCAuY29udC1uYXZiLWF2ZSAubmF2YmFyIC5jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGk6bnRoLW9mLXR5cGUoMSkgYS5wcmltLW5pdjo6YWZ0ZXIsIC5jb250LW5hdmItYXZlIC5uYXZiYXIgLmNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaTpudGgtb2YtdHlwZSgzKSBhLnByaW0tbml2OjphZnRlciwgLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAuY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0gLmluZm9ybWVzIHVsIGxpOm50aC1vZi10eXBlKDYpIGEucHJpbS1uaXY6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udC1uYXZiLWF2ZSB7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgyMDA1RTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gIC5jb250LW5hdmItYXZlIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzaW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cbiAgLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIGEubmF2LWxpbmsge1xuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgfVxuICAuY29udC1uYXZiLWF2ZSAubmF2YmFyIC5uYXZiYXItY29sbGFwc2UgdWwgbGkubmF2LWl0ZW0uYWN0aXZlIGEubmF2LWxpbmsge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbiAgLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB7XG4gICAgcGFkZGluZzogMHJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSB7XG4gICAgcGFkZGluZzogMC44cmVtO1xuICB9XG4gIC5jb250LW5hdmItYXZlIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSB1bCBsaS5uYXYtaXRlbSAuaW5mb3JtZXMgdWwgbGkgdWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNvbnQtbmF2Yi1hdmUgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHVsIGxpLm5hdi1pdGVtIC5pbmZvcm1lcyB1bCBsaSB1bDp0YXJnZXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59IiwiQGltcG9ydCBcIi4vY29sb3JzLnNjc3NcIjtcclxuKiB7XHJcbiAgLyogTm8gYWdyYW5kYSBwYWRkaW5nIG8gYm9yZGVyKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5mbGF0aWNvbi1zZWFyY2gtMTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxmMTk2XCI7XHJcbn1cclxuYm9keSB7XHJcbiAgLyogTm8gbWFyZ2VuIHBvciBkZWZlY3RvIGRlbCBib2R5ICovXHJcbiAgbWFyZ2luOiAwO1xyXG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyAgKi9cclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcbmltZyB7XHJcbiAgLyogUXVpdGEgYm9kZSBwb3IgZGVmZWN0byBkZWwgaW4tbGluZSovXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLyogYW5jaG8gbWF4aW1vIGVsIDEwMCUgZGVsIGFuY2hvIGRlbCBwYWRyZSovXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIC8qIE1hbnRpZW5lIHByb3BvcmNpb24gYWwgcmVlc2NhbGFyKi9cclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cclxuYXVkaW8sXHJcbnZpZGVvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gaU9TIDQtNyAqL1xyXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcbi8qIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktICovXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxubmF2LFxyXG5zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5maWdjYXB0aW9uLFxyXG5maWd1cmUsXHJcbm1haW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbnVsIHtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxufVxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuYm9keSB7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG59XHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIC8qIEZpcmVmb3ggMTgtICovXHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAvKiBGaXJlZm94IDE5KyAqL1xyXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi8qIEFuaW1hY2lvbmVzLCBleHRyYWN0byBkZSBsYSBsaWJyZXLDrWEgYW5pbWF0ZSAqL1xyXG5cclxuLmFuaW1hdGVkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuLmZhc3Qge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZUluIHtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG59XHJcbiIsIiRjb2xvci1wcmltYXJ5OiM4MjAwNUU7XHJcbiR0ZXh0LWNvbG9yOiAjMDAwMDAwO1xyXG4kY29sb3ItZGFyazogIzI3MjgzMztcclxuJGJvcmRlci1jb2xvcjogI0U2RTZFNjtcclxuJGNvbG9yLWFsZXJ0OiByZ2JhKDI1NSwgMjMsIDMzLCAwLjEpO1xyXG4kd2hpdGUtc2Vjb25kYXJ5OiNGMEU4QzA7XHJcbiRjb2xvci1ncmV5OiM3MzczNzM7XHJcbiRiYWNrZ3JvdW5kLWdyZXk6I0RCREJEQjtcclxuJGZvb3Rlci1jb2xvcjogIzdEN0Q3RDtcclxuJGNvbG9yLWdyZWVuOiAjMkJBRDBEO1xyXG4kY29sb3ItcmVkOiNEQzM1NDU7XHJcbiRjb2xvci15ZWxsb3c6cmdiYSgyNTUsIDIwNCwgMCwgMC45KTsiLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuLmNvbnQtbmF2Yi1hdmUge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAubmF2YmFyIHtcclxuICAgIC5iZy1ibGFjayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNvbGxhcHNlIHtcclxuICAgICAgdWwge1xyXG4gICAgICAgIGxpLm5hdi1pdGVtIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGEubmF2LWxpbmsge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBhLm5hdi1saW5rIHtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmluZm9ybWVzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICBhLnByaW0tbml2IHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAmLmtwaS1nbG9iOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2twaS1nbG9iLnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgJi5kYXQtYWNjZXM6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvZGF0LWFjY2VzLnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgJi5jb25lY3Rpdi1leHRlcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9jb25lY3Rpdi1leHRlci5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICYuY2VycmFyLXNlc2lvbjo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2NlcnJhci1zZXNpb24uc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAmLmRpc3Bvc2l0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2Rpc3Bvc2l0aXZvcy5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICYuY29udGVuaWQ6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvY29udGVuaWRvcy5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICYuc3ViLWFyY2g6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvc3ViaXItYXJjaGl2by5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9vcGVuLXVsLnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICYuYXJyb3dVcDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL29wZW4tdWwuc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAmLmFjdGl2ZS1wcmltLW5pdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5rcGktZ2xvYjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL2twaS1nbG9iLWFjdGl2LnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYuZGF0LWFjY2VzOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvZGF0LWFjY2VzLWFjdGl2LnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYuY29uZWN0aXYtZXh0ZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9jb25lY3Rpdi1leHRlci1hY3Rpdi5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5jZXJyYXItc2VzaW9uOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoL2Fzc2V0cy9pY29ucy9jZXJyYXItc2VzaW9uLWFjdGl2LnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLmRpc3Bvc2l0OjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvZGlzcG9zaXRpdm9zLWFjdGl2LnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLmNvbnRlbmlkOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKC9hc3NldHMvaWNvbnMvY29udGVuaWRvcy1hY3Rpdi5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5zdWItYXJjaDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL3N1YmlyLWFyY2hpdm8tYWN0aXYuc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZS1zZWNvbmRhcnk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2ljb25zL3BvaW50LnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSg0KSxcclxuICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMSksXHJcbiAgICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDMpLFxyXG4gICAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSg2KSB7XHJcbiAgICAgICAgICAgICAgICAgIGEucHJpbS1uaXY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuY29udC1uYXZiLWF2ZSB7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvOyAvL2NhbWJcclxuICAgIGhlaWdodDogYXV0bzsgLy9jYW1iXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgLy8gLmJnLWJsYWNre1xyXG4gICAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjokdGV4dC1jb2xvcjtcclxuICAgICAgLy8gICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XHJcbiAgICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAvLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLy8gfVxyXG4gICAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICAmLmNvbGxhcHNpbmcge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBsaS5uYXYtaXRlbSB7XHJcbiAgICAgICAgICAgIGEubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07IC8vY2FtYmlvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGEubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluZm9ybWVzIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcmVtO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLy9jYW1iXHJcblxyXG4gICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAvLyBhLnByaW0tbml2e1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIHBhZGRpbmctbGVmdDoyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgJi5kYXQtYWNjZXM6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29udGVudDp1cmwoL2Fzc2V0cy9pY29ucy9kYXQtYWNjZXMuc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAmLmNvbmVjdGl2LWV4dGVyOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29udGVudDp1cmwoL2Fzc2V0cy9pY29ucy9jb25lY3Rpdi1leHRlci5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgICAgICAgLy8gICAmLmRpc3Bvc2l0OjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBjb250ZW50OnVybCgvYXNzZXRzL2ljb25zL2Rpc3Bvc2l0aXZvcy5zdmcpO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgJi5jb250ZW5pZDo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgY29udGVudDp1cmwoL2Fzc2V0cy9pY29ucy9jb250ZW5pZG9zLnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgICAgICAgLy8gICAmLnN1Yi1hcmNoOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBjb250ZW50OnVybCgvYXNzZXRzL2ljb25zL3N1YmlyLWFyY2hpdm8uc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIGxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAgICAgICAvLyAgICY6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgY29udGVudDp1cmwoL2Fzc2V0cy9pY29ucy9vcGVuLXVsLnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICByaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgLy8gICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAvLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6dGFyZ2V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAmOjpiZWZvcmV7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBhZGRpbmc6IC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBwYWRkaW5nLWxlZnQ6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUtc2Vjb25kYXJ5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnRlbnQ6dXJsKC9hc3NldHMvaWNvbnMvcG9pbnQuc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBsZWZ0OiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvLyAmOm50aC1vZi10eXBlKDQpe1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgYS5wcmltLW5pdjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8vICB9XHJcbiAgICAgICAgICAgICAgICAgIC8vICAmOm50aC1vZi10eXBlKDUpe1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgYS5wcmltLW5pdjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8vICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/navbar-left/navbar-left.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/navbar-left/navbar-left.component.ts ***!
          \******************************************************/
        /*! exports provided: NavbarLeftComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarLeftComponent", function () { return NavbarLeftComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
            var NavbarLeftComponent = /** @class */ (function () {
                function NavbarLeftComponent(dataService) {
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
                NavbarLeftComponent.prototype.ngAfterViewInit = function () {
                    document.getElementById(this.menus[0].id).classList.add(this.styleActivePrimNiv);
                };
                NavbarLeftComponent.prototype.show = function (anchorId, ulId) {
                    if (!this.hasUrl(anchorId)) {
                        this.elementMenu = document.getElementById(anchorId);
                        for (var _i = 0, _a = this.menus; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (item.submenus && item.submenus.length > 0) {
                                for (var _b = 0, _c = item.submenus; _b < _c.length; _b++) {
                                    var submenu = _c[_b];
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
                    else {
                        window.location.href = this.getUrl(anchorId);
                    }
                };
                NavbarLeftComponent.prototype.putUpArrow = function (anchorId) {
                    for (var _i = 0, _a = this.menus; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (Object.is(item.id, anchorId)) {
                            this.elementMenu = document.getElementById(anchorId);
                            this.elementMenu.classList.add(this.styleArrowUp);
                            for (var _b = 0, _c = this.menus; _b < _c.length; _b++) {
                                var menu = _c[_b];
                                if (!Object.is(menu.id, anchorId)) {
                                    this.elementMenu = document.getElementById(menu.id);
                                    this.elementMenu.classList.remove(this.styleArrowUp);
                                }
                            }
                            break;
                        }
                    }
                };
                NavbarLeftComponent.prototype.putDownOtherArrows = function (anchorId) {
                    for (var _i = 0, _a = this.menus; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (!Object.is(item.id, anchorId) && !item.submenus) {
                            this.elementMenu = document.getElementById(item.id);
                            this.elementMenu.classList.remove(this.styleArrowUp);
                        }
                    }
                };
                NavbarLeftComponent.prototype.putDownAllArrows = function () {
                    for (var _i = 0, _a = this.menus; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.submenus && item.submenus.length > 0) {
                            this.elementMenu = document.getElementById(item.id);
                            this.elementMenu.classList.remove(this.styleArrowUp);
                        }
                    }
                };
                NavbarLeftComponent.prototype.toogleMenu = function (ulId) {
                    this.elementMenu = document.getElementById(ulId);
                    if (Object.is(this.elementMenu.style.display, this.styleDisplayBlock)) {
                        this.elementMenu.style.display = this.styleDisplayNone;
                    }
                    else {
                        this.elementMenu.style.display = this.styleDisplayBlock;
                    }
                };
                NavbarLeftComponent.prototype.hideOtherMenus = function (ulId) {
                    var l = this.menus.length;
                    for (var i = 0; i < l; i++) {
                        if (document.getElementById(i.toString())) {
                            if (Object.is(i, parseInt(ulId, 10))) {
                                document.getElementById(i.toString()).style.display = this.styleDisplayBlock;
                            }
                            else {
                                document.getElementById(i.toString()).style.display = this.styleDisplayNone;
                            }
                        }
                    }
                };
                NavbarLeftComponent.prototype.hideAllMenus = function () {
                    var l = this.menus.length;
                    for (var i = 0; i < l; i++) {
                        if (document.getElementById(i.toString())) {
                            document.getElementById(i.toString()).style.display = this.styleDisplayNone;
                        }
                    }
                };
                NavbarLeftComponent.prototype.activeClassAddRemove = function (iterableId, pulsado) {
                    if (Object.is(iterableId, pulsado)) {
                        this.elementMenu.classList.add(this.elementMenu.classList.contains(this.stylePrimNiv) ? this.styleActivePrimNiv : this.styleActive);
                    }
                    else {
                        var htmlElement = document.getElementById(iterableId);
                        htmlElement.classList.remove(htmlElement.classList.contains(this.stylePrimNiv) ? this.styleActivePrimNiv : this.styleActive);
                    }
                };
                NavbarLeftComponent.prototype.hasUrl = function (anchorId) {
                    for (var _i = 0, _a = this.menus; _i < _a.length; _i++) {
                        var menu = _a[_i];
                        if (Object.is(anchorId, menu.id) && menu.url) {
                            return true;
                        }
                    }
                    return false;
                };
                NavbarLeftComponent.prototype.getUrl = function (anchorId) {
                    for (var _i = 0, _a = this.menus; _i < _a.length; _i++) {
                        var menu = _a[_i];
                        if (Object.is(anchorId, menu.id) && menu.url) {
                            return menu.url;
                        }
                    }
                };
                return NavbarLeftComponent;
            }());
            NavbarLeftComponent.ctorParameters = function () { return [
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/pipes/capitalizar.pipe.ts": 
        /*!*******************************************!*\
          !*** ./src/app/pipes/capitalizar.pipe.ts ***!
          \*******************************************/
        /*! exports provided: CapitalizarPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizarPipe", function () { return CapitalizarPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CapitalizarPipe = /** @class */ (function () {
                function CapitalizarPipe() {
                }
                CapitalizarPipe.prototype.transform = function (frase, todas) {
                    if (todas === void 0) { todas = true; }
                    frase = frase.toLowerCase();
                    var palabras = frase.split(' ');
                    if (todas) {
                        for (var i in palabras) {
                            if (palabras.hasOwnProperty(i)) {
                                palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substring(1);
                            }
                        }
                    }
                    else {
                        palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substr(1);
                    }
                    return palabras.join(' ');
                };
                return CapitalizarPipe;
            }());
            CapitalizarPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'capitalizar'
                })
            ], CapitalizarPipe);
            /***/ 
        }),
        /***/ "./src/app/pipes/sanitizar.pipe.ts": 
        /*!*****************************************!*\
          !*** ./src/app/pipes/sanitizar.pipe.ts ***!
          \*****************************************/
        /*! exports provided: SanitizarPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizarPipe", function () { return SanitizarPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var SanitizarPipe = /** @class */ (function () {
                function SanitizarPipe(domSanitizer) {
                    this.domSanitizer = domSanitizer;
                }
                SanitizarPipe.prototype.transform = function (urlBase, urlItem) {
                    return this.domSanitizer.bypassSecurityTrustResourceUrl(urlBase + urlItem);
                };
                return SanitizarPipe;
            }());
            SanitizarPipe.ctorParameters = function () { return [
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
            ]; };
            SanitizarPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'sanitizar'
                })
            ], SanitizarPipe);
            /***/ 
        }),
        /***/ "./src/app/pipes/translate.pipe.ts": 
        /*!*****************************************!*\
          !*** ./src/app/pipes/translate.pipe.ts ***!
          \*****************************************/
        /*! exports provided: TranslatePipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function () { return TranslatePipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/translate.service */ "./src/app/services/translate.service.ts");
            var TranslatePipe = /** @class */ (function () {
                // Inyecto el servicio translate
                function TranslatePipe(translate) {
                    this.translate = translate;
                }
                TranslatePipe.prototype.transform = function (value) {
                    return this.translate.getTranslate(value) ? this.translate.getTranslate(value) : '';
                };
                return TranslatePipe;
            }());
            TranslatePipe.ctorParameters = function () { return [
                { type: _services_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
            ]; };
            TranslatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'translate'
                })
            ], TranslatePipe);
            /***/ 
        }),
        /***/ "./src/app/services/data.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/data.service.ts ***!
          \******************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var DataService = /** @class */ (function () {
                function DataService(http) {
                    this.http = http;
                }
                DataService.prototype.getData = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.http.get('admin/resources/assets/data/menus.json')
                            .subscribe(function (data) {
                            _this.data = data;
                            resolve(true);
                        }, function (error) {
                            console.log('Error al obtener la configuracion: ' + error);
                            reject(true);
                        });
                    });
                };
                Object.defineProperty(DataService.prototype, "valores", {
                    get: function () {
                        return this.data;
                    },
                    enumerable: true,
                    configurable: true
                });
                return DataService;
            }());
            DataService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/services/login.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/login.service.ts ***!
          \*******************************************/
        /*! exports provided: LoginService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function () { return LoginService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            // import { Observable } from 'rxjs/Observable';
            var LoginService = /** @class */ (function () {
                function LoginService(http) {
                    this.http = http;
                }
                LoginService.prototype.login = function (username, password) {
                    return this.http.post('https://localhost:8080/login', { username: username, password: password });
                };
                return LoginService;
            }());
            LoginService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], LoginService);
            /***/ 
        }),
        /***/ "./src/app/services/translate.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/services/translate.service.ts ***!
          \***********************************************/
        /*! exports provided: TranslateService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function () { return TranslateService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TranslateService = /** @class */ (function () {
                function TranslateService(http) {
                    this.http = http;
                }
                TranslateService.prototype.getData = function () {
                    var _this = this;
                    this.language = this.getLanguaje();
                    return new Promise(function (resolve, reject) {
                        _this.http.get('admin/resources/assets/translations/' + _this.language + '.json')
                            .subscribe(function (data) {
                            _this.data = data;
                            resolve(true);
                        }, function (error) {
                            console.log('Error al recuperar las traducciones: ', error);
                            reject(true);
                        });
                    });
                };
                TranslateService.prototype.getTranslate = function (phrase) {
                    return this.data[phrase];
                };
                TranslateService.prototype.getLanguaje = function () {
                    if (!Object.is(navigator.language, 'es-ES')) {
                        return 'es-ES';
                    }
                    else {
                        return navigator.language;
                    }
                };
                return TranslateService;
            }());
            TranslateService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
            ]; };
            TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
                    providedIn: 'root'
                })
            ], TranslateService);
            /***/ 
        }),
        /***/ "./src/app/services/user.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/user.service.ts ***!
          \******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UserService = /** @class */ (function () {
                function UserService() {
                    this.isUserLoggedIn = false;
                }
                UserService.prototype.setUserLoggedIn = function (user) {
                    this.isUserLoggedIn = true;
                    this.usserLogged = user;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                };
                UserService.prototype.getUserLoggedIn = function () {
                    return JSON.parse(localStorage.getItem('currentUser'));
                };
                UserService.prototype.getIsUserLoggedIn = function () {
                    // return this.isUserLoggedIn;
                    return true;
                };
                return UserService;
            }());
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/table/table.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/table/table.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n* {\n  /* No agranda padding o border*/\n  box-sizing: border-box;\n}\n.flaticon-search-1:before {\n  content: \"\";\n}\nbody {\n  /* No margen por defecto del body */\n  margin: 0;\n  /* Better Font Rendering  */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nimg {\n  /* Quita bode por defecto del in-line*/\n  display: block;\n  /* ancho maximo el 100% del ancho del padre*/\n  max-width: 100%;\n  /* Mantiene proporcion al reescalar*/\n  height: auto;\n}\n/* Add the correct display in IE 9- */\naudio,\nvideo {\n  display: inline-block;\n}\n/* Add the correct display in iOS 4-7 */\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n/* Add the correct display in IE 9- */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\nfigcaption,\nfigure,\nmain {\n  display: block;\n}\nul {\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\nli {\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n:focus {\n  outline: none;\n  box-shadow: none;\n}\n/***************************************/\nbody {\n  color: #000000;\n}\n::-webkit-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #000000;\n  font-size: 1rem;\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #000000;\n  font-size: 1rem;\n}\n:-ms-input-placeholder {\n  color: #000000;\n  font-size: 1rem;\n}\n/* Animaciones, extracto de la librería animate */\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.fast {\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n          animation-name: fadeIn;\n}\n.conten-table-comp .form-inline p {\n  font-size: 1rem;\n}\n.conten-table-comp .form-inline p.text-green {\n  font-size: 0.875rem;\n  color: #2BAD0D;\n}\n.conten-table-comp .form-inline p.text-green a {\n  color: #2BAD0D;\n}\n.conten-table-comp .form-inline p.text-red {\n  font-size: 0.875rem;\n  color: #DC3545;\n}\n.conten-table-comp .form-inline p.text-red a {\n  color: #DC3545;\n}\n.conten-table-comp .form-inline p a {\n  text-decoration: underline;\n}\n.conten-table-comp .form-inline .wrap-input-container {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  text-align: left;\n}\n.conten-table-comp .form-inline .wrap-input-container .form-control.custom-file-upload {\n  border: 1px solid #DBDBDB;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 95%;\n  text-align: left;\n}\n.conten-table-comp .form-inline .wrap-input-container .form-control.custom-file-upload .bg-morado {\n  background-color: #82005E;\n  border-radius: 4px;\n  padding: 0.4rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.conten-table-comp .form-inline .wrap-input-container input {\n  position: absolute;\n  font-size: 400px;\n  opacity: 0;\n  z-index: 1;\n  top: 0;\n  left: 0;\n}\n.conten-table-comp table tbody {\n  font-size: 0.875rem;\n}\n.conten-table-comp table tbody .progress {\n  height: 0.2rem;\n}\n.conten-table-comp table tbody .progress .progress-bar.red-progres {\n  background-color: #DC3545;\n}\n.conten-table-comp table tbody .progress .progress-bar.green-progres {\n  background-color: #2BAD0D;\n}\n.conten-table-comp table tbody .progress .progress-bar.yellow-progres {\n  background-color: rgba(255, 204, 0, 0.9);\n}\n.conten-table-comp table tbody td .text-progr {\n  display: inline-flex;\n  padding: 0 0.5rem;\n}\n.conten-table-comp table tbody td .text-progr.err {\n  border: 1px solid #DC3545;\n}\n.conten-table-comp table tbody td .text-progr.proces {\n  border: 1px solid #2BAD0D;\n}\n.conten-table-comp table tbody td .text-progr.en-proces {\n  border: 1px solid rgba(255, 204, 0, 0.9);\n}\n.conten-table-comp table tbody td.center {\n  text-align: -webkit-center;\n}\n.conten-table-comp table tbody th {\n  font-size: 1rem;\n  font-weight: normal;\n}\n.conten-table-comp .pagination .page-item .page-link {\n  border: none;\n  color: #82005E;\n  font-size: 0.875rem;\n}\n.conten-table-comp .pagination .page-item .page-link.active {\n  color: #ffffff;\n  background-color: #82005E;\n}\n@media only screen and (max-width: 1800px) {\n  .form-inline .wrap-input-container {\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n    text-align: left;\n  }\n  .form-inline .wrap-input-container .form-control.custom-file-upload {\n    border: 1px solid #DBDBDB;\n    cursor: pointer;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 92%;\n    text-align: left;\n  }\n}\n@media only screen and (max-width: 1200px) {\n  .form-inline .wrap-input-container {\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n    text-align: left;\n  }\n  .form-inline .wrap-input-container .form-control.custom-file-upload {\n    border: 1px solid #DBDBDB;\n    cursor: pointer;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 85%;\n    text-align: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RhYmxlL0M6XFxVc2Vyc1xcWDUxNDIzWkFcXERlc2Fycm9sbG9cXFByb3llY3RvIFJlbmZlXFxSZW5mZURpc2Vuby9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC90YWJsZS9DOlxcVXNlcnNcXFg1MTQyM1pBXFxEZXNhcnJvbGxvXFxQcm95ZWN0byBSZW5mZVxcUmVuZmVEaXNlbm8vc3JjXFxjb2xvcnMuc2NzcyIsInNyYy9hcHAvdGFibGUvQzpcXFVzZXJzXFxYNTE0MjNaQVxcRGVzYXJyb2xsb1xcUHJveWVjdG8gUmVuZmVcXFJlbmZlRGlzZW5vL3NyY1xcYXBwXFx0YWJsZVxcdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0UsK0JBQUE7RUFDQSxzQkFBQTtBRENGO0FDQ0E7RUFDRSxZQUFBO0FERUY7QUNBQTtFQUNFLG1DQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBREdGO0FDREE7RUFDRSxzQ0FBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QURJRjtBQ0ZBLHFDQUFBO0FBQ0E7O0VBRUUscUJBQUE7QURLRjtBQ0hBLHVDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBRE1GO0FDSkEscUNBQUE7QUFDQTs7Ozs7O0VBTUUsY0FBQTtBRE9GO0FDTEE7OztFQUdFLGNBQUE7QURRRjtBQ05BO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBRFNGO0FDUEE7RUFDRSxnQkFBQTtBRFVGO0FDUkE7RUFDRSxxQkFBQTtBRFdGO0FDVEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QURZRjtBQ1ZBLHdDQUFBO0FBQ0E7RUFDRSxjQzdEVztBRjBFYjtBQ1hBO0VBQ0UsY0NoRVc7RURpRVgsZUFBQTtBRGNGO0FDWEE7RUFDRSxnQkFBQTtFQUNBLGNDdEVXO0VEdUVYLGVBQUE7QURjRjtBQ1hBO0VBQ0UsZ0JBQUE7RUFDQSxjQzVFVztFRDZFWCxlQUFBO0FEY0Y7QUNYQTtFQUNFLGNDakZXO0VEa0ZYLGVBQUE7QURjRjtBQ1hBLGlEQUFBO0FBRUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBRGFGO0FDVkE7RUFDRSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBRGFGO0FDVkE7RUFDRTtJQUNFLFVBQUE7RURhRjtFQ1ZBO0lBQ0UsVUFBQTtFRFlGO0FBQ0Y7QUNuQkE7RUFDRTtJQUNFLFVBQUE7RURhRjtFQ1ZBO0lBQ0UsVUFBQTtFRFlGO0FBQ0Y7QUNUQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QURXRjtBR3pISTtFQUNFLGVBQUE7QUg0SE47QUczSE07RUFDRSxtQkFBQTtFQUNBLGNERU07QUYySGQ7QUc1SFE7RUFDRSxjQUFBO0FIOEhWO0FHM0hNO0VBQ0UsbUJBQUE7RUFDQSxjREpHO0FGaUlYO0FHNUhRO0VBQ0UsY0ROQztBRm9JWDtBRzNITTtFQUNFLDBCQUFBO0FINkhSO0FHMUhJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUg0SE47QUczSE07RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUg2SFI7QUc1SFE7RUFDRSx5QkRyQ0s7RUNzQ0wsa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBSDhIVjtBRzNITTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FINkhSO0FHeEhJO0VBQ0UsbUJBQUE7QUgwSE47QUd6SE07RUFDRSxjQUFBO0FIMkhSO0FHekhVO0VBQ0UseUJEcEREO0FGK0tYO0FHeEhVO0VBQ0UseUJEekRFO0FGbUxkO0FHeEhVO0VBQ0Usd0NEMURFO0FGb0xkO0FHckhRO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtBSHVIVjtBR3RIVTtFQUNFLHlCQUFBO0FId0haO0FHdEhVO0VBQ0UseUJBQUE7QUh3SFo7QUd0SFU7RUFDRSx3Q0FBQTtBSHdIWjtBR3BIUTtFQUNFLDBCQUFBO0FIc0hWO0FHbkhNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FIcUhSO0FHL0dNO0VBQ0UsWUFBQTtFQUNBLGNEdEdPO0VDdUdQLG1CQUFBO0FIaUhSO0FHaEhRO0VBQ0UsY0FBQTtFQUNBLHlCRDFHSztBRjROZjtBRzNHQTtFQUVJO0lBQ0UscUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUg2R0o7RUc1R0k7SUFDRSx5QkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7RUg4R047QUFDRjtBRzFHQTtFQUVJO0lBQ0UscUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUgyR0o7RUcxR0k7SUFDRSx5QkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsdUJBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7RUg0R047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuKiB7XG4gIC8qIE5vIGFncmFuZGEgcGFkZGluZyBvIGJvcmRlciovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5mbGF0aWNvbi1zZWFyY2gtMTpiZWZvcmUge1xuICBjb250ZW50OiBcIu+GllwiO1xufVxuXG5ib2R5IHtcbiAgLyogTm8gbWFyZ2VuIHBvciBkZWZlY3RvIGRlbCBib2R5ICovXG4gIG1hcmdpbjogMDtcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nICAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW1nIHtcbiAgLyogUXVpdGEgYm9kZSBwb3IgZGVmZWN0byBkZWwgaW4tbGluZSovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiBhbmNobyBtYXhpbW8gZWwgMTAwJSBkZWwgYW5jaG8gZGVsIHBhZHJlKi9cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICAvKiBNYW50aWVuZSBwcm9wb3JjaW9uIGFsIHJlZXNjYWxhciovXG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cbmF1ZGlvLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcgKi9cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cbmFydGljbGUsXG5hc2lkZSxcbmZvb3RlcixcbmhlYWRlcixcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbm1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxudWwge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG46Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuYm9keSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTgtICovXG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4vKiBBbmltYWNpb25lcywgZXh0cmFjdG8gZGUgbGEgbGlicmVyw61hIGFuaW1hdGUgKi9cbi5hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uZmFzdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZmFkZUluIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbn1cblxuLmNvbnRlbi10YWJsZS1jb21wIC5mb3JtLWlubGluZSBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmNvbnRlbi10YWJsZS1jb21wIC5mb3JtLWlubGluZSBwLnRleHQtZ3JlZW4ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogIzJCQUQwRDtcbn1cbi5jb250ZW4tdGFibGUtY29tcCAuZm9ybS1pbmxpbmUgcC50ZXh0LWdyZWVuIGEge1xuICBjb2xvcjogIzJCQUQwRDtcbn1cbi5jb250ZW4tdGFibGUtY29tcCAuZm9ybS1pbmxpbmUgcC50ZXh0LXJlZCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGNvbG9yOiAjREMzNTQ1O1xufVxuLmNvbnRlbi10YWJsZS1jb21wIC5mb3JtLWlubGluZSBwLnRleHQtcmVkIGEge1xuICBjb2xvcjogI0RDMzU0NTtcbn1cbi5jb250ZW4tdGFibGUtY29tcCAuZm9ybS1pbmxpbmUgcCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uY29udGVuLXRhYmxlLWNvbXAgLmZvcm0taW5saW5lIC53cmFwLWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRlbi10YWJsZS1jb21wIC5mb3JtLWlubGluZSAud3JhcC1pbnB1dC1jb250YWluZXIgLmZvcm0tY29udHJvbC5jdXN0b20tZmlsZS11cGxvYWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjREJEQkRCO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogOTUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRlbi10YWJsZS1jb21wIC5mb3JtLWlubGluZSAud3JhcC1pbnB1dC1jb250YWluZXIgLmZvcm0tY29udHJvbC5jdXN0b20tZmlsZS11cGxvYWQgLmJnLW1vcmFkbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MjAwNUU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMC40cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uY29udGVuLXRhYmxlLWNvbXAgLmZvcm0taW5saW5lIC53cmFwLWlucHV0LWNvbnRhaW5lciBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiA0MDBweDtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLmNvbnRlbi10YWJsZS1jb21wIHRhYmxlIHRib2R5IHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbi5jb250ZW4tdGFibGUtY29tcCB0YWJsZSB0Ym9keSAucHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDAuMnJlbTtcbn1cbi5jb250ZW4tdGFibGUtY29tcCB0YWJsZSB0Ym9keSAucHJvZ3Jlc3MgLnByb2dyZXNzLWJhci5yZWQtcHJvZ3JlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQzM1NDU7XG59XG4uY29udGVuLXRhYmxlLWNvbXAgdGFibGUgdGJvZHkgLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIuZ3JlZW4tcHJvZ3JlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQkFEMEQ7XG59XG4uY29udGVuLXRhYmxlLWNvbXAgdGFibGUgdGJvZHkgLnByb2dyZXNzIC5wcm9ncmVzcy1iYXIueWVsbG93LXByb2dyZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjA0LCAwLCAwLjkpO1xufVxuLmNvbnRlbi10YWJsZS1jb21wIHRhYmxlIHRib2R5IHRkIC50ZXh0LXByb2dyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuLmNvbnRlbi10YWJsZS1jb21wIHRhYmxlIHRib2R5IHRkIC50ZXh0LXByb2dyLmVyciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEQzM1NDU7XG59XG4uY29udGVuLXRhYmxlLWNvbXAgdGFibGUgdGJvZHkgdGQgLnRleHQtcHJvZ3IucHJvY2VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJCQUQwRDtcbn1cbi5jb250ZW4tdGFibGUtY29tcCB0YWJsZSB0Ym9keSB0ZCAudGV4dC1wcm9nci5lbi1wcm9jZXMge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjA0LCAwLCAwLjkpO1xufVxuLmNvbnRlbi10YWJsZS1jb21wIHRhYmxlIHRib2R5IHRkLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuLmNvbnRlbi10YWJsZS1jb21wIHRhYmxlIHRib2R5IHRoIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmNvbnRlbi10YWJsZS1jb21wIC5wYWdpbmF0aW9uIC5wYWdlLWl0ZW0gLnBhZ2UtbGluayB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICM4MjAwNUU7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4uY29udGVuLXRhYmxlLWNvbXAgLnBhZ2luYXRpb24gLnBhZ2UtaXRlbSAucGFnZS1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODIwMDVFO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MDBweCkge1xuICAuZm9ybS1pbmxpbmUgLndyYXAtaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuZm9ybS1pbmxpbmUgLndyYXAtaW5wdXQtY29udGFpbmVyIC5mb3JtLWNvbnRyb2wuY3VzdG9tLWZpbGUtdXBsb2FkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREJEQkRCO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDkyJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuZm9ybS1pbmxpbmUgLndyYXAtaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAuZm9ybS1pbmxpbmUgLndyYXAtaW5wdXQtY29udGFpbmVyIC5mb3JtLWNvbnRyb2wuY3VzdG9tLWZpbGUtdXBsb2FkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREJEQkRCO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDg1JTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG59IiwiQGltcG9ydCBcIi4vY29sb3JzLnNjc3NcIjtcclxuKiB7XHJcbiAgLyogTm8gYWdyYW5kYSBwYWRkaW5nIG8gYm9yZGVyKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5mbGF0aWNvbi1zZWFyY2gtMTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxmMTk2XCI7XHJcbn1cclxuYm9keSB7XHJcbiAgLyogTm8gbWFyZ2VuIHBvciBkZWZlY3RvIGRlbCBib2R5ICovXHJcbiAgbWFyZ2luOiAwO1xyXG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyAgKi9cclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcbmltZyB7XHJcbiAgLyogUXVpdGEgYm9kZSBwb3IgZGVmZWN0byBkZWwgaW4tbGluZSovXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLyogYW5jaG8gbWF4aW1vIGVsIDEwMCUgZGVsIGFuY2hvIGRlbCBwYWRyZSovXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIC8qIE1hbnRpZW5lIHByb3BvcmNpb24gYWwgcmVlc2NhbGFyKi9cclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0gKi9cclxuYXVkaW8sXHJcbnZpZGVvIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLyogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gaU9TIDQtNyAqL1xyXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcbi8qIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktICovXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxubmF2LFxyXG5zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5maWdjYXB0aW9uLFxyXG5maWd1cmUsXHJcbm1haW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbnVsIHtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxufVxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuYm9keSB7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG59XHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIC8qIEZpcmVmb3ggMTgtICovXHJcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAvKiBGaXJlZm94IDE5KyAqL1xyXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi8qIEFuaW1hY2lvbmVzLCBleHRyYWN0byBkZSBsYSBsaWJyZXLDrWEgYW5pbWF0ZSAqL1xyXG5cclxuLmFuaW1hdGVkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuLmZhc3Qge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZmFkZUluIHtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG59XHJcbiIsIiRjb2xvci1wcmltYXJ5OiM4MjAwNUU7XHJcbiR0ZXh0LWNvbG9yOiAjMDAwMDAwO1xyXG4kY29sb3ItZGFyazogIzI3MjgzMztcclxuJGJvcmRlci1jb2xvcjogI0U2RTZFNjtcclxuJGNvbG9yLWFsZXJ0OiByZ2JhKDI1NSwgMjMsIDMzLCAwLjEpO1xyXG4kd2hpdGUtc2Vjb25kYXJ5OiNGMEU4QzA7XHJcbiRjb2xvci1ncmV5OiM3MzczNzM7XHJcbiRiYWNrZ3JvdW5kLWdyZXk6I0RCREJEQjtcclxuJGZvb3Rlci1jb2xvcjogIzdEN0Q3RDtcclxuJGNvbG9yLWdyZWVuOiAjMkJBRDBEO1xyXG4kY29sb3ItcmVkOiNEQzM1NDU7XHJcbiRjb2xvci15ZWxsb3c6cmdiYSgyNTUsIDIwNCwgMCwgMC45KTsiLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuLmNvbnRlbi10YWJsZS1jb21wIHtcclxuICAuZm9ybS1pbmxpbmUge1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgJi50ZXh0LWdyZWVuIHtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItZ3JlZW47XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLWdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLnRleHQtcmVkIHtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcmVkO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvci1yZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAud3JhcC1pbnB1dC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgLmZvcm0tY29udHJvbC5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRiYWNrZ3JvdW5kLWdyZXk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgLmJnLW1vcmFkbyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDAwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIHRib2R5IHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgLnByb2dyZXNzIHtcclxuICAgICAgICBoZWlnaHQ6IDAuMnJlbTtcclxuICAgICAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICAgICYucmVkLXByb2dyZXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYuZ3JlZW4tcHJvZ3JlcyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ncmVlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYueWVsbG93LXByb2dyZXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IteWVsbG93O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgLnRleHQtcHJvZ3Ige1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgICAgICAgICYuZXJyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXJlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYucHJvY2VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWdyZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi5lbi1wcm9jZXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3IteWVsbG93O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5jZW50ZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucGFnaW5hdGlvbiB7XHJcbiAgICAucGFnZS1pdGVtIHtcclxuICAgICAgLnBhZ2UtbGluayB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MDBweCkge1xyXG4gIC5mb3JtLWlubGluZSB7XHJcbiAgICAud3JhcC1pbnB1dC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgLmZvcm0tY29udHJvbC5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRiYWNrZ3JvdW5kLWdyZXk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuZm9ybS1pbmxpbmUge1xyXG4gICAgLndyYXAtaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIC5mb3JtLWNvbnRyb2wuY3VzdG9tLWZpbGUtdXBsb2FkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYmFja2dyb3VuZC1ncmV5O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/table/table.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/table/table.component.ts ***!
          \******************************************/
        /*! exports provided: TableComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function () { return TableComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TableComponent = /** @class */ (function () {
                function TableComponent() {
                }
                TableComponent.prototype.ngOnInit = function () {
                };
                return TableComponent;
            }());
            TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-table',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table/table.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.scss */ "./src/app/table/table.component.scss")).default]
                })
            ], TableComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\X51423ZA\Desarrollo\Proyecto Renfe\RenfeDiseno\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map