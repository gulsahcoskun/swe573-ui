(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _teach_teach_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teach/teach.component */ "./src/app/teach/teach.component.ts");
/* harmony import */ var _track_track_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./track/track.component */ "./src/app/track/track.component.ts");
/* harmony import */ var _learn_learn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./learn/learn.component */ "./src/app/learn/learn.component.ts");
/* harmony import */ var _teach_create_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teach/create/create.component */ "./src/app/teach/create/create.component.ts");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/topic/topic.component.ts");
/* harmony import */ var _teach_update_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./teach/update/update.component */ "./src/app/teach/update/update.component.ts");












var routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: 'auth/login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'teach',
        component: _teach_teach_component__WEBPACK_IMPORTED_MODULE_6__["TeachComponent"]
    },
    {
        path: 'track',
        component: _track_track_component__WEBPACK_IMPORTED_MODULE_7__["TrackComponent"]
    },
    {
        path: 'learn',
        component: _learn_learn_component__WEBPACK_IMPORTED_MODULE_8__["LearnComponent"]
    },
    {
        path: 'teach/create',
        component: _teach_create_create_component__WEBPACK_IMPORTED_MODULE_9__["CreateComponent"]
    },
    {
        path: 'teach/update',
        component: _teach_update_update_component__WEBPACK_IMPORTED_MODULE_11__["UpdateComponent"]
    },
    {
        path: 'topic',
        component: _topic_topic_component__WEBPACK_IMPORTED_MODULE_10__["TopicComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<nav class=\"navbar navbar-dark bg-dark mb-5\">\n  <div class=\"navbar-expand mr-auto\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"/assets/images/glearn-p.png\" width=\"50\" height=\"50\">\n      </a>\n    </div>\n    <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n      <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"home\">Home</a></li>\n      <li *ngIf=\"authority === 'user'\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"learn\">Learn</a>\n      </li>\n      <li *ngIf=\"authority === 'user'\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"teach\">Teach</a>\n      </li>\n      <li *ngIf=\"authority === 'user'\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"track\">Track</a>\n      </li>\n      <li *ngIf=\"!authority\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"auth/login\">Login</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n-->\n<app-header></app-header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<!--\n<nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\">\n  <div class=\"navbar-expand m-auto navbar-text\">\n    Made with <i class=\"fa fa-heart\"></i> by Gulsah Coskun\n  </div>\n</nav>\n-->\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(tokenStorage) {
        this.tokenStorage = tokenStorage;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.roles.every(function (role) {
                _this.authority = 'user';
                return true;
            });
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _teach_teach_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./teach/teach.component */ "./src/app/teach/teach.component.ts");
/* harmony import */ var _track_track_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./track/track.component */ "./src/app/track/track.component.ts");
/* harmony import */ var _learn_learn_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./learn/learn.component */ "./src/app/learn/learn.component.ts");
/* harmony import */ var _teach_create_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./teach/create/create.component */ "./src/app/teach/create/create.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _teach_create_data_formData_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./teach/create/data/formData.service */ "./src/app/teach/create/data/formData.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/topic/topic.component.ts");
/* harmony import */ var _teach_update_update_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./teach/update/update.component */ "./src/app/teach/update/update.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _teach_teach_component__WEBPACK_IMPORTED_MODULE_14__["TeachComponent"],
                _track_track_component__WEBPACK_IMPORTED_MODULE_15__["TrackComponent"],
                _learn_learn_component__WEBPACK_IMPORTED_MODULE_16__["LearnComponent"],
                _teach_create_create_component__WEBPACK_IMPORTED_MODULE_17__["CreateComponent"],
                _ui_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
                _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _topic_topic_component__WEBPACK_IMPORTED_MODULE_25__["TopicComponent"],
                _teach_update_update_component__WEBPACK_IMPORTED_MODULE_26__["UpdateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"]
            ],
            providers: [_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["httpInterceptorProviders"], _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_12__["TokenStorageService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _services_search_service__WEBPACK_IMPORTED_MODULE_24__["SearchService"],
                { provide: _teach_create_data_formData_service__WEBPACK_IMPORTED_MODULE_19__["FormDataService"], useClass: _teach_create_data_formData_service__WEBPACK_IMPORTED_MODULE_19__["FormDataService"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/auth/token-storage.service.ts");




var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token) {
        this.token = token;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.loginUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/auth/signin';
        this.signupUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/auth/signup';
    }
    AuthService.prototype.attemptAuth = function (credentials) {
        return this.http.post(this.loginUrl, credentials, httpOptions);
    };
    AuthService.prototype.signUp = function (info) {
        return this.http.post(this.signupUrl, info, httpOptions);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login-info.ts":
/*!************************************!*\
  !*** ./src/app/auth/login-info.ts ***!
  \************************************/
/*! exports provided: AuthLoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function() { return AuthLoginInfo; });
var AuthLoginInfo = /** @class */ (function () {
    function AuthLoginInfo(username, password) {
        this.username = username;
        this.password = password;
    }
    return AuthLoginInfo;
}());



/***/ }),

/***/ "./src/app/auth/signup-info.ts":
/*!*************************************!*\
  !*** ./src/app/auth/signup-info.ts ***!
  \*************************************/
/*! exports provided: SignUpInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpInfo", function() { return SignUpInfo; });
var SignUpInfo = /** @class */ (function () {
    function SignUpInfo(name, username, email, password) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }
    return SignUpInfo;
}());



/***/ }),

/***/ "./src/app/auth/token-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/token-storage.service.ts ***!
  \***********************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.roles = [];
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    TokenStorageService.prototype.getAuthorities = function () {
        var _this = this;
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                _this.roles.push(authority.authority);
            });
        }
        return this.roles;
    };
    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.img {\n    width: 100%;\n    margin-bottom: 18%;\n}\n.card-picture {\n    width: 30%;\n    margin-bottom: 2%;\n}\n.container {\n    min-height: 100%;\n    width: 100%;\n}\n.search-form {\n    width: 80%;\n}\nul li{\n    display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE4JTtcbn1cbi5jYXJkLXBpY3R1cmUge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG4uY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNlYXJjaC1mb3JtIHtcbiAgICB3aWR0aDogODAlO1xufVxuXG51bCBsaXtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token; else loggedOut\">\n    <div class=\"container\">\n        <mat-form-field class=\"search-form\">\n            <input matInput placeholder=\"Search Topics\" type=\"text\">\n        </mat-form-field>\n        <button button=\"submit\" mat-raised-button color=\"primary\">Search</button>\n        <br/>\n        <br/>\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.8%\" fxLayoutAlign=\"auto\">\n            <mat-card class=\"card-picture\" *ngFor=\"let material of materials\">\n                <mat-card-title fxLayout.gt-xs=\"row\" fxLayout.xs=\"column\">\n                    <span fxFlex=\"80%\">{{material.materialName}}</span>\n                    <mat-icon fxFlex=\"10%\">thumb_up</mat-icon>\n                </mat-card-title>\n                <img mat-card-image [src]=\"material.image\">\n                <mat-card-content>\n                    <p>\n                        {{material.description}}\n                    </p>\n                    <br/>\n                    {{material.keywordList}}\n                </mat-card-content>\n                <mat-card-actions>\n                    <a href=\"teach\"><button mat-button>TAKE</button></a>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n        <!--\n        <mat-card class=\"example-card\">\n            <mat-card-header>\n                <mat-card-title>Shiba Inu</mat-card-title>\n                <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"\n                 alt=\"Photo of a Shiba Inu\">\n            <mat-card-content>\n                <p>\n                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                    bred for hunting.\n                </p>\n            </mat-card-content>\n            <mat-card-actions>\n                <button mat-button>TAKE</button>\n            </mat-card-actions>\n        </mat-card>\n        -->\n\n    </div>\n\n    <ng-template #loggedOut>\n        Please login.\n    </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(token, searchService) {
        this.token = token;
        this.searchService = searchService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
        this.searchService.getAllMaterialSummaries().subscribe(function (data) {
            console.log(data);
            _this.materials = data;
        }, function (error) {
            console.log(error);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/learn/learn.component.css":
/*!*******************************************!*\
  !*** ./src/app/learn/learn.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuL2xlYXJuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/learn/learn.component.html":
/*!********************************************!*\
  !*** ./src/app/learn/learn.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token; else loggedOut\">\n    <p>\n        learn works!\n    </p>\n</div>"

/***/ }),

/***/ "./src/app/learn/learn.component.ts":
/*!******************************************!*\
  !*** ./src/app/learn/learn.component.ts ***!
  \******************************************/
/*! exports provided: LearnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnComponent", function() { return LearnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LearnComponent = /** @class */ (function () {
    function LearnComponent() {
    }
    LearnComponent.prototype.ngOnInit = function () {
    };
    LearnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-learn',
            template: __webpack_require__(/*! ./learn.component.html */ "./src/app/learn/learn.component.html"),
            styles: [__webpack_require__(/*! ./learn.component.css */ "./src/app/learn/learn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LearnComponent);
    return LearnComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-container{\n    margin-top: 15em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItY29udGFpbmVye1xuICAgIG1hcmdpbi10b3A6IDE1ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn; else loggedOut\">\n    Welcome {{username}} :)\n</div>\n\n<ng-template #loggedOut>\n    <div class=\"row col-sm-6\" style=\"max-width:350px;\">\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n                       required/>\n                <div *ngIf=\"f.submitted && username.invalid\">\n                    <div *ngIf=\"username.errors.required\">Username is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\"\n                       #password=\"ngModel\"\n                       required minlength=\"6\"/>\n                <div *ngIf=\"f.submitted && password.invalid\">\n                    <div *ngIf=\"password.errors.required\">Password is required</div>\n                    <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary\">Login</button>\n                <div *ngIf=\"f.submitted && isLoginFailed\" class=\"alert alert-danger\">\n                    Login failed: {{errorMessage}}\n                </div>\n            </div>\n        </form>\n    </div>\n        <br/>\n        <div class=\"register-container\">\n            <p>Don't have an account?</p>\n            <br/>\n            <a href=\"signup\" class=\"btn btn-success\">Sign Up</a>\n        </div>\n\n</ng-template>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_login_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/login-info */ "./src/app/auth/login-info.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenStorage, router) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.loginInfo = new _auth_login_info__WEBPACK_IMPORTED_MODULE_2__["AuthLoginInfo"](this.form.username, this.form.password);
        this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.token);
            _this.tokenStorage.saveUsername(data.username);
            _this.tokenStorage.saveAuthorities(data.authorities);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getAuthorities();
            _this.userName = _this.tokenStorage.getUsername();
            _this.reloadPage();
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isLoginFailed = true;
        });
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload();
        this.router.navigateByUrl('/home');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isSignedUp; else signupForm\">\n  Your registration is successful. Please login!\n</div>\n\n<ng-template #signupForm>\n  <div class=\"row col-sm-6\" style=\"max-width:350px;\">\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"name\">Your name</label>\n        <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"form.name\" #name=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && name.invalid\">\n          <div *ngIf=\"name.errors.required\">Name is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n               required />\n        <div *ngIf=\"f.submitted && username.invalid\">\n          <div *ngIf=\"username.errors.required\">Username is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"form.email\" #email=\"ngModel\" required email />\n        <div *ngIf=\"f.submitted && email.invalid\">\n          <div *ngIf=\"email.errors.required\">Email is required</div>\n          <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\n               required minlength=\"6\" />\n        <div *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\">Register</button>\n        <div *ngIf=\"f.submitted && isSignUpFailed\" class=\"alert alert-warning\">\n          Signup failed!<br/>{{errorMessage}}\n        </div>\n      </div>\n    </form>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_signup_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/signup-info */ "./src/app/auth/signup-info.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
        this.form = {};
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.signupInfo = new _auth_signup_info__WEBPACK_IMPORTED_MODULE_2__["SignUpInfo"](this.form.name, this.form.username, this.form.email, this.form.password);
        this.authService.signUp(this.signupInfo).subscribe(function (data) {
            console.log(data);
            _this.isSignedUp = true;
            _this.isSignUpFailed = false;
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isSignUpFailed = true;
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SearchService = /** @class */ (function () {
    function SearchService(http, token) {
        this.http = http;
        this.token = token;
        this.searchAllUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/search/';
        this.searchCreatedBy = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/search/createdBy/';
    }
    SearchService.prototype.getAllMaterialSummaries = function () {
        return this.http.get(this.searchAllUrl, { responseType: 'json' });
    };
    SearchService.prototype.getCreatedByMaterials = function () {
        return this.http.get(this.searchCreatedBy + this.token.getUsername(), httpOptions);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]])
    ], SearchService);
    return SearchService;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/api/test/user';
    }
    UserService.prototype.getUserBoard = function () {
        return this.http.get(this.userUrl, { responseType: 'text' });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/teach/create/create.component.css":
/*!***************************************************!*\
  !*** ./src/app/teach/create/create.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".material, .topics, .contents, .keywords, .questions, .options, p{\n    margin: 10px;\n}\n\ninput{\n    margin: 2px;\n}\n\ninput[type=\"button\"], p{\n    margin-top: 5px;\n}\n\n.material{\n    border: black solid 1px;\n    background-color: #ffffff;\n}\n\n.topics{\n    border: black solid 1px;\n    background-color: #f0f0f0;\n}\n\n.contents{\n    border: black solid 1px;\n    background-color: #bfbfbf;\n}\n\n.keywords{\n    border: black solid 1px;\n    background-color: #aaaaaa;\n}\n\n.questions{\n    border: black solid 1px;\n    background-color: #aaaaaa;\n}\n\n.options{\n    border: black solid 1px;\n    background-color: #8e8e8e;\n}\n\ninput[value=\"Add Material\"]{\n    background-color: #ff7f7f;\n}\n\ninput[value=\"Add Topic\"]{\n    background-color: #7fbf7f;\n}\n\ninput[value=\"Add Content\"]{\n     background-color: red;\n }\n\ninput[value=\"Add Keyword\"]{\n    background-color: cadetblue;\n}\n\ninput[value=\"Add Question\"]{\n    background-color: violet;\n}\n\ninput[value=\"Add Option\"]{\n    background-color: #a94442;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2gvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7O0FBSUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7S0FDSyxxQkFBcUI7Q0FDekI7O0FBRUQ7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC90ZWFjaC9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0ZXJpYWwsIC50b3BpY3MsIC5jb250ZW50cywgLmtleXdvcmRzLCAucXVlc3Rpb25zLCAub3B0aW9ucywgcHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbmlucHV0e1xuICAgIG1hcmdpbjogMnB4O1xufVxuXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCBwe1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuXG4ubWF0ZXJpYWx7XG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnRvcGljc3tcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuXG4uY29udGVudHN7XG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYmZiZjtcbn1cblxuLmtleXdvcmRze1xuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWFhYWE7XG59XG5cbi5xdWVzdGlvbnN7XG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcbn1cblxuLm9wdGlvbnN7XG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhlOGU4ZTtcbn1cblxuXG5cbmlucHV0W3ZhbHVlPVwiQWRkIE1hdGVyaWFsXCJde1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdmN2Y7XG59XG5cbmlucHV0W3ZhbHVlPVwiQWRkIFRvcGljXCJde1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmJmN2Y7XG59XG5cbmlucHV0W3ZhbHVlPVwiQWRkIENvbnRlbnRcIl17XG4gICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiB9XG5cbmlucHV0W3ZhbHVlPVwiQWRkIEtleXdvcmRcIl17XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xufVxuXG5pbnB1dFt2YWx1ZT1cIkFkZCBRdWVzdGlvblwiXXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7XG59XG5cbmlucHV0W3ZhbHVlPVwiQWRkIE9wdGlvblwiXXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTk0NDQyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/teach/create/create.component.html":
/*!****************************************************!*\
  !*** ./src/app/teach/create/create.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token; else loggedOut\">\n   <h2>Create Material</h2>\n</div>"

/***/ }),

/***/ "./src/app/teach/create/create.component.ts":
/*!**************************************************!*\
  !*** ./src/app/teach/create/create.component.ts ***!
  \**************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");



var CreateComponent = /** @class */ (function () {
    function CreateComponent(token) {
        this.token = token;
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-multi-steps',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/teach/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/teach/create/create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/teach/create/data/formData.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/teach/create/data/formData.service.ts ***!
  \*******************************************************/
/*! exports provided: FormDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataService", function() { return FormDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormDataService = /** @class */ (function () {
    function FormDataService() {
    }
    FormDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], FormDataService);
    return FormDataService;
}());



/***/ }),

/***/ "./src/app/teach/teach.component.css":
/*!*******************************************!*\
  !*** ./src/app/teach/teach.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-nav-bar{\n    background: black;\n}\n\n.mat-tab-link{\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2gvdGVhY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoL3RlYWNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYi1uYXYtYmFye1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4ubWF0LXRhYi1saW5re1xuICAgIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/teach/teach.component.html":
/*!********************************************!*\
  !*** ./src/app/teach/teach.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token; else loggedOut\">\n\n    <!--\n    <div class=\"tabs is-medium\">\n        <ul>\n            <li class=\"is-active\">\n                <a routerLink=\"/teach/create\">\n                    <span class=\"icon is-small\"><i class=\"fas fa-image\" aria-hidden=\"true\"></i></span>\n                    <span>Create Material</span>\n                </a>\n            </li>\n            <li>\n                <a>\n                    <span class=\"icon is-small\"><i class=\"fas fa-music\" aria-hidden=\"true\"></i></span>\n                    <span>Create Topic</span>\n                </a>\n            </li>\n        </ul>\n    </div>\n\n-->\n\n    <nav mat-tab-nav-bar>\n        <a mat-tab-link [routerLink]=\"['/teach/create']\">Create</a>\n        <a mat-tab-link [routerLink]=\"['/teach/update']\">Update</a>\n    </nav>\n\n\n    <router-outlet></router-outlet>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/teach/teach.component.ts":
/*!******************************************!*\
  !*** ./src/app/teach/teach.component.ts ***!
  \******************************************/
/*! exports provided: TeachComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachComponent", function() { return TeachComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");



var TeachComponent = /** @class */ (function () {
    function TeachComponent(token) {
        this.token = token;
    }
    TeachComponent.prototype.ngOnInit = function () {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
    };
    TeachComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teach',
            template: __webpack_require__(/*! ./teach.component.html */ "./src/app/teach/teach.component.html"),
            styles: [__webpack_require__(/*! ./teach.component.css */ "./src/app/teach/teach.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], TeachComponent);
    return TeachComponent;
}());



/***/ }),

/***/ "./src/app/teach/update/update.component.css":
/*!***************************************************!*\
  !*** ./src/app/teach/update/update.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/teach/update/update.component.html":
/*!****************************************************!*\
  !*** ./src/app/teach/update/update.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  update works!\n</p>\n"

/***/ }),

/***/ "./src/app/teach/update/update.component.ts":
/*!**************************************************!*\
  !*** ./src/app/teach/update/update.component.ts ***!
  \**************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpdateComponent = /** @class */ (function () {
    function UpdateComponent() {
    }
    UpdateComponent.prototype.ngOnInit = function () {
    };
    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/teach/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/teach/update/update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/app/topic/topic.component.css":
/*!*******************************************!*\
  !*** ./src/app/topic/topic.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGljL3RvcGljLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/topic/topic.component.html":
/*!********************************************!*\
  !*** ./src/app/topic/topic.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  topic works!\n</p>\n"

/***/ }),

/***/ "./src/app/topic/topic.component.ts":
/*!******************************************!*\
  !*** ./src/app/topic/topic.component.ts ***!
  \******************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopicComponent = /** @class */ (function () {
    function TopicComponent() {
    }
    TopicComponent.prototype.ngOnInit = function () {
    };
    TopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topic',
            template: __webpack_require__(/*! ./topic.component.html */ "./src/app/topic/topic.component.html"),
            styles: [__webpack_require__(/*! ./topic.component.css */ "./src/app/topic/topic.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopicComponent);
    return TopicComponent;
}());



/***/ }),

/***/ "./src/app/track/track.component.css":
/*!*******************************************!*\
  !*** ./src/app/track/track.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWNrL3RyYWNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/track/track.component.html":
/*!********************************************!*\
  !*** ./src/app/track/track.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token; else loggedOut\">\n    <p>\n        track works!\n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/track/track.component.ts":
/*!******************************************!*\
  !*** ./src/app/track/track.component.ts ***!
  \******************************************/
/*! exports provided: TrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackComponent", function() { return TrackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrackComponent = /** @class */ (function () {
    function TrackComponent() {
    }
    TrackComponent.prototype.ngOnInit = function () {
    };
    TrackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-track',
            template: __webpack_require__(/*! ./track.component.html */ "./src/app/track/track.component.html"),
            styles: [__webpack_require__(/*! ./track.component.css */ "./src/app/track/track.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrackComponent);
    return TrackComponent;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/footer/footer.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-heart {\n    color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdWkvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWhlYXJ0IHtcbiAgICBjb2xvcjogcmVkO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"content has-text-centered\">\n        <p>\n            <strong>G-Learn</strong> by <a href=\"https://github.com/gulsahcoskun\">Gulsah Coskun</a> <br/>\n            <i> \"A Learning Space for Learners and Teachers\" </i>\n            <br/>\n            <em>The term project of SWE 573 course of Bogazici University - 2019</em>\n        </p>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/ui/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/header/header.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar is-warning\">\n    <div class=\"container\">\n\n        <!-- logo-->\n        <div class=\"navbar-brand\">\n            <a class=\"navbar-item\" href=\"#\">🐝 G-LEARN\n            </a>\n        </div>\n\n        <!--menu -->\n        <div class=\"navbar-menu\">\n            <div class=\"navbar-end\">\n                <a *ngIf=\"authority === 'user'\" class=\"navbar-item\" href=\"learn\" >📚 LEARN</a>\n                <a *ngIf=\"authority === 'user'\" href=\"teach\" class=\"navbar-item\">📝 TEACH</a>\n                <a *ngIf=\"authority === 'user'\" href=\"track\" class=\"navbar-item\">🛤 TRACK</a>\n                <a *ngIf=\"!authority\" href=\"auth/login\" class=\"navbar-item\">LOGIN</a>\n                <a *ngIf=\"authority === 'user'\" (click)=\"logout()\" class=\"navbar-item\">LOG OUT</a>\n            </div>\n        </div>\n\n\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(tokenStorage) {
        this.tokenStorage = tokenStorage;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.tokenStorage.getToken()) {
            this.roles = this.tokenStorage.getAuthorities();
            this.name = this.tokenStorage.getUsername();
            this.roles.every(function (role) {
                _this.authority = 'user';
                return true;
            });
        }
    };
    HeaderComponent.prototype.logout = function () {
        this.tokenStorage.signOut();
        window.location.reload();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/ui/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    apiUrl: 'http://localhost:8080/glearn',
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/apple/Documents/Projects/swe573-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map