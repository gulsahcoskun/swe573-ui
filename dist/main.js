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
/* harmony import */ var _teach_update_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./teach/update/update.component */ "./src/app/teach/update/update.component.ts");
/* harmony import */ var _teach_create_material_material_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./teach/create/material/material.component */ "./src/app/teach/create/material/material.component.ts");
/* harmony import */ var _teach_create_topic_topic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./teach/create/topic/topic.component */ "./src/app/teach/create/topic/topic.component.ts");
/* harmony import */ var _teach_create_question_question_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./teach/create/question/question.component */ "./src/app/teach/create/question/question.component.ts");
/* harmony import */ var _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material-detail/material-detail.component */ "./src/app/material-detail/material-detail.component.ts");















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
        component: _teach_teach_component__WEBPACK_IMPORTED_MODULE_6__["TeachComponent"],
        children: [
            {
                path: '',
                redirectTo: 'create',
                pathMatch: 'full'
            },
            {
                path: 'create',
                component: _teach_create_create_component__WEBPACK_IMPORTED_MODULE_9__["CreateComponent"],
                children: [
                    {
                        path: '',
                        redirectTo: 'material',
                        pathMatch: 'full'
                    },
                    {
                        path: 'material',
                        component: _teach_create_material_material_component__WEBPACK_IMPORTED_MODULE_11__["MaterialComponent"]
                    },
                    {
                        path: 'content',
                        component: _teach_create_topic_topic_component__WEBPACK_IMPORTED_MODULE_12__["TopicComponent"]
                    },
                    {
                        path: 'question',
                        component: _teach_create_question_question_component__WEBPACK_IMPORTED_MODULE_13__["QuestionComponent"]
                    }
                ]
            },
            {
                path: 'update',
                component: _teach_update_update_component__WEBPACK_IMPORTED_MODULE_10__["UpdateComponent"]
            },
        ]
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
        path: 'detail/:id',
        component: _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_14__["MaterialDetailComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _teach_update_update_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./teach/update/update.component */ "./src/app/teach/update/update.component.ts");
/* harmony import */ var _teach_create_material_material_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./teach/create/material/material.component */ "./src/app/teach/create/material/material.component.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./material-detail/material-detail.component */ "./src/app/material-detail/material-detail.component.ts");
/* harmony import */ var _teach_create_question_question_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./teach/create/question/question.component */ "./src/app/teach/create/question/question.component.ts");
/* harmony import */ var _teach_create_topic_topic_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./teach/create/topic/topic.component */ "./src/app/teach/create/topic/topic.component.ts");
/* harmony import */ var _services_learn_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/learn.service */ "./src/app/services/learn.service.ts");
/* harmony import */ var _services_teach_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/teach.service */ "./src/app/services/teach.service.ts");

































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
                _ui_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                _teach_create_topic_topic_component__WEBPACK_IMPORTED_MODULE_30__["TopicComponent"],
                _teach_update_update_component__WEBPACK_IMPORTED_MODULE_24__["UpdateComponent"],
                _teach_create_material_material_component__WEBPACK_IMPORTED_MODULE_25__["MaterialComponent"],
                _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_28__["MaterialDetailComponent"],
                _teach_create_question_question_component__WEBPACK_IMPORTED_MODULE_29__["QuestionComponent"],
                _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_28__["KeywordDetailDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_26__["NgxEditorModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_27__["TooltipModule"].forRoot()
            ],
            providers: [_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["httpInterceptorProviders"], _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_12__["TokenStorageService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _services_search_service__WEBPACK_IMPORTED_MODULE_23__["SearchService"],
                _services_learn_service__WEBPACK_IMPORTED_MODULE_31__["LearnService"], _services_teach_service__WEBPACK_IMPORTED_MODULE_32__["TeachService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [_material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_28__["KeywordDetailDialog"]]
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

module.exports = ".mat-card-image {\n    width: 100%;\n    margin: 0%;\n}\n\n.material-card {\n    width: 23%;\n    margin-bottom: 2%;\n}\n\n.container {\n    min-height: 100%;\n    width: 100%;\n}\n\n.search-form {\n    width: 85%;\n}\n\nul li{\n    display: inline;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCU7XG59XG5cbi5tYXRlcmlhbC1jYXJkIHtcbiAgICB3aWR0aDogMjMlO1xuICAgIG1hcmdpbi1ib3R0b206IDIlO1xufVxuLmNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zZWFyY2gtZm9ybSB7XG4gICAgd2lkdGg6IDg1JTtcbn1cblxudWwgbGl7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <mat-form-field class=\"search-form\">\n            <input matInput placeholder=\"Search Materials\" type=\"text\" [(ngModel)]=\"searchKey\">\n        </mat-form-field>\n        <button mat-stroked-button color=\"warn\" (click)=\"searchMaterialsByKeyword()\"  style=\"margin-left: 5px\"\n                [disabled]=\"info.token==null\">🔎 Search</button>\n        <br/>\n        <br/>\n        <p *ngIf=\"materials.length==0\">{{searchMessage}}</p>\n        <div fxLayout=\"row wrap\"  fxLayoutGap=\"32px\" fxLayoutAlign=\"flex-start\">\n            <mat-card class=\"material-card\" fxFlex=\"0 1 calc(50% - 32px)\"\n                      *ngFor=\"let material of materials\">\n\n\n                <mat-card-header>\n                    <mat-card-title>{{material.materialName}}</mat-card-title>\n                    <mat-card-subtitle>{{material.detail}}</mat-card-subtitle>\n                    <mat-card-subtitle>{{material.createdBy}}</mat-card-subtitle>\n                </mat-card-header>\n\n                <img mat-card-image [src]=\"material.image\">\n\n                <br/>\n                <br/>\n\n                <mat-card-content>\n                    <p>{{material.description}}</p>\n                    <p style=\"color: dodgerblue; font-size: small; font-weight: bold\">{{material.keywordList}}</p>\n                </mat-card-content>\n                <mat-card-actions>\n                    <button mat-stroked-button style=\"width:100%\" (click)=\"seeDetail(material.materialId)\" [disabled]=\"info.token==null\">TAKE</button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(token, searchService, router) {
        this.token = token;
        this.searchService = searchService;
        this.router = router;
        this.materials = new Array();
        this.searchMessage = 'Material you are looking for cannot be found.';
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
    HomeComponent.prototype.searchMaterialsByKeyword = function () {
        var _this = this;
        if (this.searchKey != null) {
            this.searchService.searchMaterials(this.searchKey).subscribe(function (data) {
                _this.materials = data;
            }, function (error) {
                console.log(error);
            });
        }
    };
    HomeComponent.prototype.seeDetail = function (id) {
        this.router.navigate(['detail', id]);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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

module.exports = "<div *ngIf=\"info.token; else loggedOut\">\n    <div class=\"container\">\n        <h1>My Materials</h1>\n\n        <br/>\n\n        <h4>In Progress</h4>\n\n        <br/>\n\n        <h4>Completed</h4>\n\n        <br/>\n    </div>\n</div>"

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
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");



var LearnComponent = /** @class */ (function () {
    function LearnComponent(token) {
        this.token = token;
    }
    LearnComponent.prototype.ngOnInit = function () {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
    };
    LearnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-learn',
            template: __webpack_require__(/*! ./learn.component.html */ "./src/app/learn/learn.component.html"),
            styles: [__webpack_require__(/*! ./learn.component.css */ "./src/app/learn/learn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
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

/***/ "./src/app/material-detail/keyword-detail-dialog.html":
/*!************************************************************!*\
  !*** ./src/app/material-detail/keyword-detail-dialog.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.keyword.label}}</h1>\n<hr>\n<div mat-dialog-content>\n    Title: {{data.keyword.title}}\n    <br/>\n    Description: {{data.keyword.description}}\n    <br/>\n    <a href=\"{{data.keyword.url}}\" target=\"_blank\">Discover in Wikidata</a>\n    <br/><br/>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button (click)=\"onNoClick()\">Close</button>\n</div>"

/***/ }),

/***/ "./src/app/material-detail/material-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/material-detail/material-detail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li{\n    display: inline;\n}\n\n\n.option-radio-group {\n    display: flex;\n    flex-direction: column;\n    margin: 15px 0;\n}\n\n\n.option-radio-button {\n    margin: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtZGV0YWlsL21hdGVyaWFsLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYWwtZGV0YWlsL21hdGVyaWFsLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwgbGl7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG5cbi5vcHRpb24tcmFkaW8tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDE1cHggMDtcbn1cblxuLm9wdGlvbi1yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/material-detail/material-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/material-detail/material-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token; else loggedOut\">\n\n    <div class=\"container\">\n\n        <h3>{{material.title}}</h3>\n\n        <mat-horizontal-stepper [linear]=\"true\" #stepper>\n            <ng-template matStepperIcon=\"done\" let-index=\"index\">\n                {{index+1}}\n            </ng-template>\n\n            <mat-step *ngFor=\"let content of material.contents\">\n\n                <ng-template matStepLabel>{{content.title}}</ng-template>\n\n                <img [src]=\"content.image\" style=\"width: 100%;\">\n\n                <br/><br/>\n\n                <h4>{{content.title}}</h4>\n\n                <em>Author: {{material.createdBy}} , {{material.dateCreated | date:'fullDate'}}</em>\n\n                <br/><br/>\n\n                <div [innerHTML]=\"content.explanation\"></div>\n\n                <ul>\n                    <li *ngFor=\"let keyword of content.keywords\" style=\"margin-left: 5px\">\n                        <button mat-raised-button (click)=\"openKeywordDialog(keyword)\">{{keyword.label}}</button>\n                    </li>\n                </ul>\n\n                <section style=\"background-color: whitesmoke\">\n                    <ol style=\"font-weight: bold\">\n                        <li *ngFor=\"let question of content.questions\">\n                            <label id=\"option-radio-group-label\">{{question.questionText}}</label>\n                            <mat-radio-group\n                                    aria-labelledby=\"option-radio-group-label\"\n                                    class=\"option-radio-group\">\n                                <mat-radio-button class=\"option-radio-button\" *ngFor=\"let option of question.options\"\n                                                  [value]=\"option\" (change)=\"onSelectionChange(question.id,option.id)\">\n                                    {{option.optionText}}\n                                </mat-radio-button>\n                            </mat-radio-group>\n\n                        </li>\n                    </ol>\n\n                </section>\n\n\n                <br/><br/>\n\n                <div>\n                    <button mat-button (click)=\"complete(material.id,content.id)\" style=\"width: 100%\"\n                            mat-raised-button color=\"warn\"\n                            [disabled]=isCompleted(material.id,content.id)>\n                        COMPLETE\n                    </button>\n                </div>\n\n            </mat-step>\n\n        </mat-horizontal-stepper>\n\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/material-detail/material-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/material-detail/material-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: MaterialDetailComponent, KeywordDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDetailComponent", function() { return MaterialDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeywordDetailDialog", function() { return KeywordDetailDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_learn_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/learn.service */ "./src/app/services/learn.service.ts");







var MaterialDetailComponent = /** @class */ (function () {
    function MaterialDetailComponent(token, route, searchService, dialog, learnService) {
        this.token = token;
        this.route = route;
        this.searchService = searchService;
        this.dialog = dialog;
        this.learnService = learnService;
        this.answerList = new Array();
    }
    MaterialDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.material = this.searchService.getMaterialDetail(this.id).subscribe(function (data) {
            _this.material = data;
        }, function (error) {
            console.log(error);
        });
    };
    MaterialDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MaterialDetailComponent.prototype.complete = function (materialId, contentId) {
        var _this = this;
        this.stepper.selected.completed = true;
        this.stepper.selected.editable = false;
        this.progress = {
            username: this.token.getUsername(),
            materialId: materialId,
            contentId: contentId,
            answerList: this.answerList
        };
        this.learnService.createProgress(this.progress).subscribe(function (data) {
            _this.status = data.isSuccess;
        }, function (error) {
            console.log(error);
        });
        this.stepper.next();
    };
    MaterialDetailComponent.prototype.openKeywordDialog = function (keyword) {
        var dialogRef = this.dialog.open(KeywordDetailDialog, {
            width: '300px',
            data: { keyword: keyword }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    MaterialDetailComponent.prototype.onSelectionChange = function (selectedQuestion, selectedOption) {
        var found = false;
        for (var _i = 0, _a = this.answerList; _i < _a.length; _i++) {
            var a = _a[_i];
            if (a.questionId == selectedQuestion) {
                a.optionId = selectedOption;
                found = true;
            }
        }
        if (!found) {
            this.answer = {
                questionId: selectedQuestion,
                optionId: selectedOption
            };
            this.answerList.push(this.answer);
        }
        console.log(selectedOption + "selected");
        console.log(this.answerList);
    };
    MaterialDetailComponent.prototype.isCompleted = function (materialId, contentId) {
        /*
        this.progress = {
            username: this.token.getUsername(),
            materialId: materialId,
            contentId: contentId,
            answerList: this.answerList
        };

        this.learnService.checkIsCompleted(this.progress).subscribe(data =>
        {
            this.isContentCompleted = data.isSuccess;
        }, error => {
            console.log(error);
        });

        return this.isContentCompleted;
        */
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatHorizontalStepper"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatHorizontalStepper"])
    ], MaterialDetailComponent.prototype, "stepper", void 0);
    MaterialDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-material-detail',
            template: __webpack_require__(/*! ./material-detail.component.html */ "./src/app/material-detail/material-detail.component.html"),
            styles: [__webpack_require__(/*! ./material-detail.component.css */ "./src/app/material-detail/material-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _services_learn_service__WEBPACK_IMPORTED_MODULE_6__["LearnService"]])
    ], MaterialDetailComponent);
    return MaterialDetailComponent;
}());

var KeywordDetailDialog = /** @class */ (function () {
    function KeywordDetailDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    KeywordDetailDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    KeywordDetailDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'keyword-detail-dialog',
            template: __webpack_require__(/*! ./keyword-detail-dialog.html */ "./src/app/material-detail/keyword-detail-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], KeywordDetailDialog);
    return KeywordDetailDialog;
}());



/***/ }),

/***/ "./src/app/model/material.ts":
/*!***********************************!*\
  !*** ./src/app/model/material.ts ***!
  \***********************************/
/*! exports provided: Material, Content, Keyword, Question, Option, Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyword", function() { return Keyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
var Material = /** @class */ (function () {
    function Material() {
    }
    return Material;
}());

var Content = /** @class */ (function () {
    function Content() {
    }
    return Content;
}());

var Keyword = /** @class */ (function () {
    function Keyword() {
    }
    return Keyword;
}());

var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());

var Option = /** @class */ (function () {
    function Option() {
        this.isAnswer = false;
    }
    return Option;
}());

var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
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

/***/ "./src/app/services/learn.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/learn.service.ts ***!
  \*******************************************/
/*! exports provided: LearnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnService", function() { return LearnService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var LearnService = /** @class */ (function () {
    function LearnService(http) {
        this.http = http;
        this.learnUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/learn/';
    }
    LearnService.prototype.createProgress = function (progress) {
        return this.http.post(this.learnUrl + 'progress', progress, httpOptions);
    };
    LearnService.prototype.checkIsCompleted = function (progress) {
        return this.http.post(this.learnUrl + 'isCompleted', progress, httpOptions);
    };
    LearnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LearnService);
    return LearnService;
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
        this.searchUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/search/';
        this.searchCreatedBy = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/search/createdBy/';
        this.searchContents = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/search/content/';
        this.searchMaterialsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/search/keyword/';
    }
    SearchService.prototype.getAllMaterialSummaries = function () {
        return this.http.get(this.searchUrl, { responseType: 'json' });
    };
    SearchService.prototype.getCreatedByMaterials = function () {
        return this.http.get(this.searchCreatedBy + this.token.getUsername(), httpOptions);
    };
    SearchService.prototype.getContentsByMaterial = function (materialId) {
        return this.http.get(this.searchContents + materialId, httpOptions);
    };
    SearchService.prototype.searchMaterials = function (searchKey) {
        return this.http.get(this.searchMaterialsUrl + searchKey, httpOptions);
    };
    SearchService.prototype.getMaterialDetail = function (id) {
        return this.http.get(this.searchUrl + 'id/' + id, httpOptions);
    };
    SearchService.prototype.getInProgressMaterials = function () {
        return this.http.get(this.searchUrl + 'inProgress/' + this.token.getUsername(), httpOptions);
    };
    SearchService.prototype.getCompletedMaterials = function () {
        return this.http.get(this.searchUrl + 'completed/' + this.token.getUsername(), httpOptions);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/teach.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/teach.service.ts ***!
  \*******************************************/
/*! exports provided: TeachService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachService", function() { return TeachService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TeachService = /** @class */ (function () {
    function TeachService(http) {
        this.http = http;
        this.teachUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/teach/';
    }
    TeachService.prototype.createMaterial = function (material) {
        return this.http.post(this.teachUrl + 'create/material/', material, httpOptions);
    };
    TeachService.prototype.searchWiki = function (keyword) {
        return this.http.get(this.teachUrl + 'search/' + keyword, httpOptions);
    };
    TeachService.prototype.createContent = function (content, materialId) {
        return this.http.post(this.teachUrl + 'create/content/' + materialId, content, httpOptions);
    };
    TeachService.prototype.createQuestion = function (question, contentId) {
        return this.http.post(this.teachUrl + 'create/question/' + contentId, question, httpOptions);
    };
    TeachService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TeachService);
    return TeachService;
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

module.exports = ".mat-tab-nav-bar{\n    background: #ffdd57;\n}\n\n.mat-tab-link{\n    color: #000;\n}\n\n.container{\n    width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2gvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdGVhY2gvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItbmF2LWJhcntcbiAgICBiYWNrZ3JvdW5kOiAjZmZkZDU3O1xufVxuXG4ubWF0LXRhYi1saW5re1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiA5MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/teach/create/create.component.html":
/*!****************************************************!*\
  !*** ./src/app/teach/create/create.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n   <br/>\n\n   <nav mat-tab-nav-bar>\n      <a mat-tab-link [routerLink]=\"['/teach/create/material']\">Create Material</a>\n      <a mat-tab-link [routerLink]=\"['/teach/create/content']\">Create Content</a>\n      <a mat-tab-link [routerLink]=\"['/teach/create/question']\">Create Question</a>\n   </nav>\n\n\n   <router-outlet></router-outlet>\n\n\n</div>"

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

/***/ "./src/app/teach/create/material/material.component.css":
/*!**************************************************************!*\
  !*** ./src/app/teach/create/material/material.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2gvY3JlYXRlL21hdGVyaWFsL21hdGVyaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC90ZWFjaC9jcmVhdGUvbWF0ZXJpYWwvbWF0ZXJpYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDkwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/teach/create/material/material.component.html":
/*!***************************************************************!*\
  !*** ./src/app/teach/create/material/material.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token; else loggedOut\">\n\n    <div class=\"container\">\n\n        <br/>\n\n        <h2>Material Information</h2>\n        <br/>\n\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n\n            <div class=\"form-group\">\n                <input id=\"title\" name=\"title\" class=\"form-control\" placeholder=\"Title\"\n                       required [(ngModel)]=\"data.title\" #title=\"ngModel\"/>\n                <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"title.errors.required\">Material title is required.</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <input id=\"description\" name=\"description\" class=\"form-control\" placeholder=\"Description\"\n                       required [(ngModel)]=\"data.description\" #description=\"ngModel\"/>\n                <div *ngIf=\"description.invalid && (description.dirty || description.touched)\"\n                     class=\"alert alert-danger\">\n                    <div *ngIf=\"description.errors.required\">Material description is required.</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <input id=\"image\" name=\"image\" class=\"form-control\" placeholder=\"Image\"\n                       required [(ngModel)]=\"data.image\" #image=\"ngModel\"/>\n                <div *ngIf=\"image.invalid && (image.dirty || image.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"image.errors.required\">Material image is required.</div>\n                </div>\n            </div>\n\n\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary\" style=\"width:100%\" [disabled]=\"f.form.pristine || f.form.invalid\">Create\n                    Material\n                </button>\n            </div>\n\n            <br/>\n            <h6 style=\"color: #3e5e9a\">{{message}}</h6>\n\n\n        </form>\n    </div>\n    <ng-template #loggedOut>\n        Please login.\n    </ng-template>\n\n\n</div>"

/***/ }),

/***/ "./src/app/teach/create/material/material.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/teach/create/material/material.component.ts ***!
  \*************************************************************/
/*! exports provided: MaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponent", function() { return MaterialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _services_teach_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/teach.service */ "./src/app/services/teach.service.ts");




var MaterialComponent = /** @class */ (function () {
    function MaterialComponent(token, teachService) {
        this.token = token;
        this.teachService = teachService;
        this.data = {};
    }
    MaterialComponent.prototype.ngOnInit = function () {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
    };
    MaterialComponent.prototype.onSubmit = function () {
        var _this = this;
        this.data.createdBy = this.info.username;
        this.teachService.createMaterial(this.data).subscribe(function (data) {
            console.log(data);
            _this.message = data.message;
        }, function (error) {
            console.log(error);
        });
        //this.cleanFields();
    };
    MaterialComponent.prototype.cleanFields = function () {
        this.data.title = null;
        this.data.description = null;
        this.data.image = null;
    };
    MaterialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-material',
            template: __webpack_require__(/*! ./material.component.html */ "./src/app/teach/create/material/material.component.html"),
            styles: [__webpack_require__(/*! ./material.component.css */ "./src/app/teach/create/material/material.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _services_teach_service__WEBPACK_IMPORTED_MODULE_3__["TeachService"]])
    ], MaterialComponent);
    return MaterialComponent;
}());



/***/ }),

/***/ "./src/app/teach/create/question/question.component.css":
/*!**************************************************************!*\
  !*** ./src/app/teach/create/question/question.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2gvY3JlYXRlL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC90ZWFjaC9jcmVhdGUvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDkwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/teach/create/question/question.component.html":
/*!***************************************************************!*\
  !*** ./src/app/teach/create/question/question.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token; else loggedOut\">\n\n  <div class=\"container\">\n\n    <br/>\n    <h2>Question Information</h2>\n    <br/>\n\n    <form name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n\n      <div class=\"form-group\">\n        <mat-select [(ngModel)]=\"selectedMaterial\" name=\"material\" required #material=\"ngModel\"\n                    placeholder=\"Select Material\" (selectionChange)=\"onChange()\">\n          <mat-option *ngFor=\"let material of materials\" [value]=\"material.materialId\">\n            {{material.materialName}}\n          </mat-option>\n        </mat-select>\n        <div *ngIf=\"material.invalid && (material.dirty || material.touched) \" class=\"alert alert-danger\">\n          <div *ngIf=\"material.errors.required\">Material is required.</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <mat-select [(ngModel)]=\"selectedContent\" name=\"content\" required #content=\"ngModel\"\n                    placeholder=\"Select Content\">\n          <mat-option *ngFor=\"let content of contents\" [value]=\"content.id\">\n            {{content.title}}\n          </mat-option>\n        </mat-select>\n        <div *ngIf=\"content.invalid && (content.dirty || content.touched) \" class=\"alert alert-danger\">\n          <div *ngIf=\"content.errors.required\">Content is required.</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <input id=\"questionText\" name=\"questionText\" class=\"form-control\" placeholder=\"Question Text\"\n               required [(ngModel)]=\"question.questionText\" #questionText=\"ngModel\"/>\n        <div *ngIf=\"questionText.invalid && (questionText.dirty || questionText.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"questionText.errors.required\">Question Text is required.</div>\n        </div>\n      </div>\n\n\n      <section style=\"background-color: #dddddd; padding: 1em\">\n        <mat-form-field>\n          <input matInput placeholder=\"Option Text\" name=\"option\" [(ngModel)]=\"selectedOption.optionText\">\n        </mat-form-field>\n        <mat-checkbox name=\"value\" [(ngModel)]=\"selectedOption.isAnswer\">Is correct answer?</mat-checkbox>\n        <button mat-button (click)=\"addOption()\">➕ Add Option</button>\n\n        <br/>\n        <li *ngFor=\"let option of optionList\">{{option.optionText}} - {{option.isAnswer}}</li>\n      </section>\n\n      <br/>\n      <br/>\n\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\" style=\"width:100%\" (click)=\"createQuestion()\" [disabled]=\"f.form.pristine || f.form.invalid\">Create Question</button>\n      </div>\n\n      <br/>\n      <h6 style=\"color: #3e5e9a\">{{message}}</h6>\n\n    </form>\n\n\n  </div>\n\n  <br/>\n\n  <ng-template #loggedOut>\n    Please login.\n  </ng-template>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/teach/create/question/question.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/teach/create/question/question.component.ts ***!
  \*************************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _services_teach_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/teach.service */ "./src/app/services/teach.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _model_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/material */ "./src/app/model/material.ts");






var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(token, teachService, searchService) {
        this.token = token;
        this.teachService = teachService;
        this.searchService = searchService;
        this.question = new _model_material__WEBPACK_IMPORTED_MODULE_5__["Question"]();
        this.contents = new Array();
        this.materials = new Array();
        this.optionList = new Array();
        this.selectedOption = new _model_material__WEBPACK_IMPORTED_MODULE_5__["Option"]();
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
        this.searchService.getCreatedByMaterials().subscribe(function (data) {
            _this.materials = data;
        }, function (error) {
            console.log(error);
        });
    };
    QuestionComponent.prototype.onChange = function () {
        var _this = this;
        this.searchService.getContentsByMaterial(this.selectedMaterial).subscribe(function (data) {
            _this.contents = data;
        }, function (error) {
            console.log(error);
        });
    };
    QuestionComponent.prototype.createQuestion = function () {
        var _this = this;
        this.question.options = this.optionList;
        console.log(this.question);
        this.teachService.createQuestion(this.question, this.selectedContent).subscribe(function (data) {
            console.log(data);
            _this.message = data.message;
        }, function (error) {
            console.log(error);
        });
    };
    QuestionComponent.prototype.addOption = function () {
        console.log(this.selectedOption);
        this.optionList.push(this.selectedOption);
        this.selectedOption = new _model_material__WEBPACK_IMPORTED_MODULE_5__["Option"]();
    };
    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/teach/create/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/teach/create/question/question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _services_teach_service__WEBPACK_IMPORTED_MODULE_3__["TeachService"], _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/teach/create/topic/topic.component.css":
/*!********************************************************!*\
  !*** ./src/app/teach/create/topic/topic.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2gvY3JlYXRlL3RvcGljL3RvcGljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC90ZWFjaC9jcmVhdGUvdG9waWMvdG9waWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDkwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/teach/create/topic/topic.component.html":
/*!*********************************************************!*\
  !*** ./src/app/teach/create/topic/topic.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token; else loggedOut\">\n\n    <div class=\"container\">\n\n        <br/>\n        <h2>Content Information</h2>\n        <br/>\n\n        <form name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n\n            <div class=\"form-group\">\n                <mat-select [(ngModel)]=\"selectedMaterial\" name=\"material\" required #material=\"ngModel\" placeholder=\"Select Material\" >\n                    <mat-option *ngFor=\"let material of materials\" [value]=\"material.materialId\">\n                        {{material.materialName}}\n                    </mat-option>\n                </mat-select>\n                <div *ngIf=\"material.invalid && (material.dirty || material.touched) \" class=\"alert alert-danger\">\n                    <div *ngIf=\"material.errors.required\">Material is required.</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <input id=\"title\" name=\"title\" class=\"form-control\" placeholder=\"Title\"\n                       required [(ngModel)]=\"content.title\" #title=\"ngModel\"/>\n                <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"title.errors.required\">Content title is required.</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <input id=\"image\" name=\"image\" class=\"form-control\" placeholder=\"Image\"\n                       required [(ngModel)]=\"content.image\" #image=\"ngModel\"/>\n                <div *ngIf=\"image.invalid && (image.dirty || image.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"image.errors.required\">Content image is required.</div>\n                </div>\n            </div>\n\n            <section style=\"background-color: #dddddd; padding: 1em\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Keyword\" name=\"keyword\" [(ngModel)]=\"keyword\">\n                </mat-form-field>\n                <button mat-button (click)=\"searchWiki(keyword)\">🔎 Search Wikidata</button>\n\n                <mat-select id=\"foundWikis\" [(ngModel)]=\"selectedKeyword\" name=\"selectedWiki\" placeholder=\"Select keyword from wikidata\">\n                    <mat-option *ngFor=\"let wiki of wikis\" [value]=\"wiki\">{{wiki.description}}\n                    </mat-option>\n                </mat-select>\n\n                <br/>\n                <br/>\n                <a *ngIf=\"selectedKeyword\" href=\"{{selectedKeyword.url}}\">{{selectedKeyword.title}}</a>\n\n                <button mat-button (click)=\"addKeyword()\">➕ Add Keyword</button>\n                <li *ngFor=\"let keyword of keywordList\">{{keyword.label}}</li>\n\n            </section>\n\n            <br/>\n\n            <div class=\"form-group\">\n                <app-ngx-editor id=\"explanation\" name=\"explanation\" [placeholder]=\"'Enter explanation here...'\"\n                                [spellcheck]=\"true\"\n                                [(ngModel)]=\"content.explanation\" #explanation=\"ngModel\"></app-ngx-editor>\n            </div>\n\n\n            <br/>\n\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary\" style=\"width:100%\" (click)=\"createTopic()\" [disabled]=\"f.form.pristine || f.form.invalid\">Create Content</button>\n            </div>\n\n            <br/>\n            <h6 style=\"color: #3e5e9a\">{{message}}</h6>\n\n        </form>\n\n\n    </div>\n\n    <ng-template #loggedOut>\n        Please login.\n    </ng-template>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/teach/create/topic/topic.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/teach/create/topic/topic.component.ts ***!
  \*******************************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _model_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/material */ "./src/app/model/material.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_teach_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/teach.service */ "./src/app/services/teach.service.ts");






var TopicComponent = /** @class */ (function () {
    function TopicComponent(token, teachService, searchService) {
        this.token = token;
        this.teachService = teachService;
        this.searchService = searchService;
        this.content = new _model_material__WEBPACK_IMPORTED_MODULE_3__["Content"]();
        this.wikis = new Array();
        this.selectedKeyword = new _model_material__WEBPACK_IMPORTED_MODULE_3__["Keyword"]();
        this.keywordList = new Array();
        this.materials = new Array();
    }
    TopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
        this.searchService.getCreatedByMaterials().subscribe(function (data) {
            _this.materials = data;
        }, function (error) {
            console.log(error);
        });
    };
    TopicComponent.prototype.createTopic = function () {
        var _this = this;
        this.content.keywords = this.keywordList;
        this.content.status = 1;
        console.log(this.content);
        this.teachService.createContent(this.content, this.selectedMaterial).subscribe(function (data) {
            console.log(data);
            _this.message = data.message;
        }, function (error) {
            console.log(error);
        });
    };
    TopicComponent.prototype.searchWiki = function (keyword) {
        var _this = this;
        this.teachService.searchWiki(keyword).subscribe(function (data) {
            console.log(data);
            _this.wikis = data;
        }, function (error) {
            console.log(error);
        });
        console.log(keyword + ' selected');
    };
    TopicComponent.prototype.addKeyword = function () {
        console.log(this.selectedKeyword);
        this.keywordList.push(this.selectedKeyword);
    };
    TopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topic',
            template: __webpack_require__(/*! ./topic.component.html */ "./src/app/teach/create/topic/topic.component.html"),
            styles: [__webpack_require__(/*! ./topic.component.css */ "./src/app/teach/create/topic/topic.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _services_teach_service__WEBPACK_IMPORTED_MODULE_5__["TeachService"], _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"]])
    ], TopicComponent);
    return TopicComponent;
}());



/***/ }),

/***/ "./src/app/teach/teach.component.css":
/*!*******************************************!*\
  !*** ./src/app/teach/teach.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-tab-nav-bar{\n    background: black;\n}\n\n.mat-tab-link{\n    color: #fff;\n}\n\n.container{\n    background: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhY2gvdGVhY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoL3RlYWNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYi1uYXYtYmFye1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4ubWF0LXRhYi1saW5re1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGFpbmVye1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59Il19 */"

/***/ }),

/***/ "./src/app/teach/teach.component.html":
/*!********************************************!*\
  !*** ./src/app/teach/teach.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token; else loggedOut\">\n    <div class=\"container\">\n        <nav mat-tab-nav-bar>\n            <a mat-tab-link [routerLink]=\"['/teach/create']\">Create</a>\n            <a mat-tab-link [routerLink]=\"['/teach/update']\">Update</a>\n        </nav>\n\n\n        <router-outlet></router-outlet>\n\n    </div>\n\n    <ng-template #loggedOut>\n        Please login.\n    </ng-template>\n\n</div>\n"

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

module.exports = ".footer{\n    margin-top: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XG4gICAgbWFyZ2luLXRvcDogNWVtO1xufSJdfQ== */"

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

module.exports = "<nav class=\"navbar is-warning\">\n    <div class=\"container\">\n\n        <!-- logo-->\n        <div class=\"navbar-brand\">\n            <a class=\"navbar-item\" href=\"#\">🐝 G-LEARN\n            </a>\n        </div>\n\n        <!--menu -->\n        <div class=\"navbar-menu\">\n            <div class=\"navbar-end\">\n                <a *ngIf=\"authority === 'user'\" class=\"navbar-item\" href=\"learn\" >📚 LEARN</a>\n                <a *ngIf=\"authority === 'user'\" href=\"teach\" class=\"navbar-item\">📝 TEACH</a>\n                <a *ngIf=\"authority === 'user'\" href=\"track\" class=\"navbar-item\">🛤 TRACK</a>\n                <a *ngIf=\"authority !== 'user'\" href=\"auth/login\" class=\"navbar-item\">LOGIN</a>\n                <a *ngIf=\"authority === 'user'\" (click)=\"logout()\" class=\"navbar-item\">LOG OUT</a>\n            </div>\n        </div>\n\n\n    </div>\n</nav>"

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