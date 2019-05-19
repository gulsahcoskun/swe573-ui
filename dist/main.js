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
/* harmony import */ var _track_track_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./track/track.component */ "./src/app/track/track.component.ts");
/* harmony import */ var _learn_learn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./learn/learn.component */ "./src/app/learn/learn.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material-detail/material-detail.component */ "./src/app/material-detail/material-detail.component.ts");
/* harmony import */ var _update_update_content_update_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update/update-content/update-content.component */ "./src/app/update/update-content/update-content.component.ts");
/* harmony import */ var _update_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update/update-question/update-question.component */ "./src/app/update/update-question/update-question.component.ts");












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
        component: _update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"]
    },
    {
        path: 'track',
        component: _track_track_component__WEBPACK_IMPORTED_MODULE_6__["TrackComponent"]
    },
    {
        path: 'learn',
        component: _learn_learn_component__WEBPACK_IMPORTED_MODULE_7__["LearnComponent"]
    },
    {
        path: 'detail/:id',
        component: _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_9__["MaterialDetailComponent"]
    },
    {
        path: 'update/material/:id',
        component: _update_update_content_update_content_component__WEBPACK_IMPORTED_MODULE_10__["UpdateContentComponent"]
    },
    {
        path: 'update/content/:id',
        component: _update_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_11__["UpdateQuestionComponent"]
    },
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

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

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
/* harmony import */ var _track_track_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./track/track.component */ "./src/app/track/track.component.ts");
/* harmony import */ var _learn_learn_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./learn/learn.component */ "./src/app/learn/learn.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./material-detail/material-detail.component */ "./src/app/material-detail/material-detail.component.ts");
/* harmony import */ var _services_learn_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/learn.service */ "./src/app/services/learn.service.ts");
/* harmony import */ var _services_teach_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/teach.service */ "./src/app/services/teach.service.ts");
/* harmony import */ var _update_update_content_update_content_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./update/update-content/update-content.component */ "./src/app/update/update-content/update-content.component.ts");
/* harmony import */ var _update_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./update/update-question/update-question.component */ "./src/app/update/update-question/update-question.component.ts");






























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
                _track_track_component__WEBPACK_IMPORTED_MODULE_14__["TrackComponent"],
                _learn_learn_component__WEBPACK_IMPORTED_MODULE_15__["LearnComponent"],
                _ui_header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"],
                _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_22__["UpdateComponent"],
                _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_25__["MaterialDetailComponent"],
                _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_25__["KeywordDetailDialog"], _update_update_component__WEBPACK_IMPORTED_MODULE_22__["MaterialAddDialog"], _update_update_component__WEBPACK_IMPORTED_MODULE_22__["MaterialUpdateDialog"], _update_update_component__WEBPACK_IMPORTED_MODULE_22__["MaterialDeleteDialog"],
                _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_25__["ContentResultSuccessComponent"], _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_25__["ContentResultFailComponent"], _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_25__["ContentResultCompletedComponent"],
                _update_update_content_update_content_component__WEBPACK_IMPORTED_MODULE_28__["UpdateContentComponent"], _update_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_29__["UpdateQuestionComponent"],
                _update_update_content_update_content_component__WEBPACK_IMPORTED_MODULE_28__["ContentAddDialog"], _update_update_content_update_content_component__WEBPACK_IMPORTED_MODULE_28__["ContentUpdateDialog"], _update_update_content_update_content_component__WEBPACK_IMPORTED_MODULE_28__["ContentDeleteDialog"],
                _update_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_29__["QuestionAddDialog"], _update_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_29__["QuestionUpdateDialog"], _update_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_29__["QuestionDeleteDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_23__["NgxEditorModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_24__["TooltipModule"].forRoot()
            ],
            providers: [_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["httpInterceptorProviders"], _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_12__["TokenStorageService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _services_search_service__WEBPACK_IMPORTED_MODULE_21__["SearchService"],
                _services_learn_service__WEBPACK_IMPORTED_MODULE_26__["LearnService"], _services_teach_service__WEBPACK_IMPORTED_MODULE_27__["TeachService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [_material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_25__["KeywordDetailDialog"], _update_update_component__WEBPACK_IMPORTED_MODULE_22__["MaterialAddDialog"], _update_update_component__WEBPACK_IMPORTED_MODULE_22__["MaterialUpdateDialog"], _update_update_component__WEBPACK_IMPORTED_MODULE_22__["MaterialDeleteDialog"],
                _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_25__["ContentResultFailComponent"], _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_25__["ContentResultSuccessComponent"], _material_detail_material_detail_component__WEBPACK_IMPORTED_MODULE_25__["ContentResultCompletedComponent"],
                _update_update_content_update_content_component__WEBPACK_IMPORTED_MODULE_28__["ContentAddDialog"], _update_update_content_update_content_component__WEBPACK_IMPORTED_MODULE_28__["ContentUpdateDialog"], _update_update_content_update_content_component__WEBPACK_IMPORTED_MODULE_28__["ContentDeleteDialog"],
                _update_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_29__["QuestionAddDialog"], _update_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_29__["QuestionUpdateDialog"], _update_update_question_update_question_component__WEBPACK_IMPORTED_MODULE_29__["QuestionDeleteDialog"]]
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

module.exports = "<div class=\"container\">\n        <mat-form-field class=\"search-form\">\n            <input matInput placeholder=\"Search Materials\" type=\"text\" [(ngModel)]=\"searchKey\">\n        </mat-form-field>\n        <button mat-stroked-button color=\"warn\" (click)=\"searchMaterialsByKeyword()\"  style=\"margin-left: 5px\">🔎 Search</button>\n        <br/>\n        <br/>\n        <p *ngIf=\"materials.length==0\">{{searchMessage}}</p>\n        <div fxLayout=\"row wrap\"  fxLayoutGap=\"32px\" fxLayoutAlign=\"flex-start\">\n            <mat-card class=\"material-card\" fxFlex=\"0 1 calc(50% - 32px)\"\n                      *ngFor=\"let material of materials\">\n\n\n                <mat-card-header>\n                    <mat-card-title>{{material.materialName}}</mat-card-title>\n                    <mat-card-subtitle>{{material.detail}}</mat-card-subtitle>\n                    <mat-card-subtitle>{{material.createdBy}}</mat-card-subtitle>\n                </mat-card-header>\n\n                <img mat-card-image [src]=\"material.image\">\n\n                <br/>\n                <br/>\n\n                <mat-card-content>\n                    <p>{{material.description}}</p>\n                    <p style=\"color: dodgerblue; font-size: small; font-weight: bold\">{{material.keywordList}}</p>\n                </mat-card-content>\n                <mat-card-actions>\n                    <button  mat-flat-button color=\"warn\" style=\"width:100%\" (click)=\"seeDetail(material.materialId)\" [disabled]=\"info.token==null\">TAKE</button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n\n</div>"

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
        this.searchService.getAllMaterialSummaries(this.info.username).subscribe(function (data) {
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

module.exports = "mat-divider{\n    margin-top: 5%;\n    margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhcm4vbGVhcm4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9sZWFybi9sZWFybi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRpdmlkZXJ7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG59Il19 */"

/***/ }),

/***/ "./src/app/learn/learn.component.html":
/*!********************************************!*\
  !*** ./src/app/learn/learn.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token\">\n    <div class=\"container\">\n        <h3>My Materials</h3>\n\n        <mat-divider></mat-divider>\n\n        <h5>In Progress Materials</h5>\n\n        <div fxLayout=\"row wrap\"  fxLayoutGap=\"32px\" fxLayoutAlign=\"flex-start\">\n            <mat-card class=\"material-card\" fxFlex=\"0 1 calc(50% - 32px)\"\n                      *ngFor=\"let material of inProgressMaterials\">\n\n\n                <mat-card-header>\n                    <mat-card-title>{{material.materialName}}</mat-card-title>\n                    <mat-card-subtitle>{{material.detail}}</mat-card-subtitle>\n                    <mat-card-subtitle>{{material.createdBy}}</mat-card-subtitle>\n                </mat-card-header>\n\n                <img mat-card-image [src]=\"material.image\">\n\n                <br/>\n                <br/>\n\n                <mat-card-content>\n                    <p>{{material.description}}</p>\n                    <p style=\"color: dodgerblue; font-size: small; font-weight: bold\">{{material.keywordList}}</p>\n                </mat-card-content>\n                <mat-card-actions>\n                    <button  mat-flat-button color=\"warn\" style=\"width:100%\" (click)=\"seeDetail(material.materialId)\" [disabled]=\"info.token==null\">CONTINUE</button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n\n        <mat-divider></mat-divider>\n\n        <h5>Completed Materials</h5>\n\n        <br/><br/>\n\n        <div fxLayout=\"row wrap\"  fxLayoutGap=\"32px\" fxLayoutAlign=\"flex-start\">\n            <mat-card class=\"material-card\" fxFlex=\"0 1 calc(50% - 32px)\"\n                      *ngFor=\"let material of completedMaterials\">\n\n\n                <mat-card-header>\n                    <mat-card-title>{{material.materialName}}</mat-card-title>\n                    <mat-card-subtitle>{{material.detail}}</mat-card-subtitle>\n                    <mat-card-subtitle>{{material.createdBy}}</mat-card-subtitle>\n                </mat-card-header>\n\n                <img mat-card-image [src]=\"material.image\">\n\n                <br/>\n                <br/>\n\n                <mat-card-content>\n                    <p>{{material.description}}</p>\n                    <p style=\"color: dodgerblue; font-size: small; font-weight: bold\">{{material.keywordList}}</p>\n                </mat-card-content>\n                <mat-card-actions>\n                    <button  mat-flat-button color=\"warn\" style=\"width:100%\" (click)=\"seeDetail(material.materialId)\" [disabled]=\"info.token==null\">TAKE AGAIN</button>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n\n        <br/>\n    </div>\n</div>"

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
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LearnComponent = /** @class */ (function () {
    function LearnComponent(token, searchService, router) {
        this.token = token;
        this.searchService = searchService;
        this.router = router;
        this.completedMaterials = new Array();
        this.inProgressMaterials = new Array();
    }
    LearnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
        this.searchService.getCompletedMaterials().subscribe(function (data) {
            _this.completedMaterials = data;
        }, function (error) {
            console.log(error);
        });
        this.searchService.getInProgressMaterials().subscribe(function (data) {
            _this.inProgressMaterials = data;
        }, function (error) {
            console.log(error);
        });
    };
    LearnComponent.prototype.seeDetail = function (id) {
        this.router.navigate(['detail', id]);
    };
    LearnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-learn',
            template: __webpack_require__(/*! ./learn.component.html */ "./src/app/learn/learn.component.html"),
            styles: [__webpack_require__(/*! ./learn.component.css */ "./src/app/learn/learn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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

module.exports = "<div *ngIf=\"isLoggedIn; else loggedOut\">\n    Welcome {{username}}x :)\n</div>\n\n<ng-template #loggedOut>\n    <div class=\"row col-sm-6\" style=\"max-width:350px;\">\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n                       required/>\n                <div *ngIf=\"f.submitted && username.invalid\">\n                    <div *ngIf=\"username.errors.required\">Username is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\"\n                       #password=\"ngModel\"\n                       required minlength=\"6\"/>\n                <div *ngIf=\"f.submitted && password.invalid\">\n                    <div *ngIf=\"password.errors.required\">Password is required</div>\n                    <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary\">Login</button>\n                <div *ngIf=\"f.submitted && isLoginFailed\" class=\"alert alert-danger\">\n                    Login failed: {{errorMessage}}\n                </div>\n            </div>\n        </form>\n    </div>\n        <br/>\n        <div class=\"register-container\">\n            <p>Don't have an account?</p>\n            <br/>\n            <a href=\"signup\" class=\"btn btn-success\">Sign Up</a>\n        </div>\n\n</ng-template>\n"

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

module.exports = "ul li{\n    display: inline;\n}\n\n\n.option-radio-group {\n    display: flex;\n    flex-direction: column;\n    margin: 15px 0;\n}\n\n\n.option-radio-button {\n    margin: 5px;\n}\n\n\n.check-icon{\n    float: right;\n    padding-left: 5px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0ZXJpYWwtZGV0YWlsL21hdGVyaWFsLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksV0FBVztBQUNmOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbC1kZXRhaWwvbWF0ZXJpYWwtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCBsaXtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cblxuLm9wdGlvbi1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMTVweCAwO1xufVxuXG4ub3B0aW9uLXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cblxuLmNoZWNrLWljb257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/material-detail/material-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/material-detail/material-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"info.token\">\n\n    <div class=\"container\">\n\n        <div>\n            <button class=\"material-header\" mat-icon-button color=\"warn\" matTooltip=\"Material is completed before\"\n                    *ngIf=\"userMaterialStatus.isCompleted\">\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">check\n                </mat-icon>\n            </button>\n            <h4 >{{material.title}} </h4>\n        </div>\n\n        <br/>\n\n        <mat-horizontal-stepper [linear]=\"true\" #stepper>\n            <ng-template matStepperIcon=\"edit\" let-index=\"index\">\n                {{index + 1}}\n            </ng-template>\n\n            <mat-step *ngFor=\"let content of material.contents\">\n\n                <ng-template matStepLabel>\n                    {{content.title}}\n                </ng-template>\n\n                <img [src]=\"content.image\" style=\"width: 100%;\">\n\n                <br/><br/>\n\n                <h4>{{content.title}}</h4>\n\n                <em>Author: {{material.createdBy}}</em>\n\n                <br/><br/>\n\n                <div [innerHTML]=\"content.explanation\"></div>\n\n                <ul>\n                    <li *ngFor=\"let keyword of content.keywords\" style=\"margin-left: 5px\">\n                        <button mat-raised-button (click)=\"openKeywordDialog(keyword)\">{{keyword.label}}</button>\n                    </li>\n                </ul>\n\n                <section style=\"background-color: whitesmoke\">\n                    <ol style=\"font-weight: bold\">\n                        <li *ngFor=\"let question of content.questions\">\n                            <label id=\"option-radio-group-label\">{{question.questionText}}</label>\n                            <mat-radio-group\n                                    aria-labelledby=\"option-radio-group-label\"\n                                    class=\"option-radio-group\">\n                                <mat-radio-button class=\"option-radio-button\" *ngFor=\"let option of question.options\"\n                                                  [value]=\"option\" (change)=\"onSelectionChange(question.id,option.id)\">\n                                    {{option.optionText}}\n                                </mat-radio-button>\n                            </mat-radio-group>\n\n                        </li>\n                    </ol>\n\n                </section>\n\n\n                <br/><br/>\n\n                <div>\n                    <button mat-button (click)=\"complete(material.id,content.id)\" style=\"width: 100%\"\n                            mat-raised-button color=\"warn\">\n                        COMPLETE\n                    </button>\n                </div>\n\n            </mat-step>\n\n        </mat-horizontal-stepper>\n\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/material-detail/material-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/material-detail/material-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: MaterialDetailComponent, KeywordDetailDialog, ContentResultSuccessComponent, ContentResultFailComponent, ContentResultCompletedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDetailComponent", function() { return MaterialDetailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeywordDetailDialog", function() { return KeywordDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentResultSuccessComponent", function() { return ContentResultSuccessComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentResultFailComponent", function() { return ContentResultFailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentResultCompletedComponent", function() { return ContentResultCompletedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _model_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/material */ "./src/app/model/material.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_learn_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/learn.service */ "./src/app/services/learn.service.ts");
/* harmony import */ var _model_user_material_status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/user-material-status */ "./src/app/model/user-material-status.ts");









var MaterialDetailComponent = /** @class */ (function () {
    function MaterialDetailComponent(token, route, searchService, dialog, learnService, snackBar) {
        this.token = token;
        this.route = route;
        this.searchService = searchService;
        this.dialog = dialog;
        this.learnService = learnService;
        this.snackBar = snackBar;
        this.material = new _model_material__WEBPACK_IMPORTED_MODULE_3__["Material"]();
        this.answerList = new Array();
        this.userMaterialStatus = new _model_user_material_status__WEBPACK_IMPORTED_MODULE_8__["UserMaterialStatus"]();
        this.userContentStatus = new _model_user_material_status__WEBPACK_IMPORTED_MODULE_8__["UserContentStatus"]();
        this.orderedStatus = new Array();
        this.orderedContents = new Array();
        this.durationInSeconds = 2;
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
            _this.material.contents.sort(function (a, b) { return (a.order > b.order) ? 1 : -1; });
            _this.orderedContents = _this.material.contents;
        }, function (error) {
            console.log(error);
        });
        this.getUserMaterialStatus(this.info.username, this.id);
        this.orderContentStatus();
        console.log(this.userMaterialStatus);
        console.log(this.orderedStatus);
    };
    MaterialDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MaterialDetailComponent.prototype.complete = function (materialId, contentId) {
        var _this = this;
        this.userContentStatus = this.findContentStatus(contentId);
        if (this.userContentStatus.isCompleted) {
            this.openCompletedSnackBar();
        }
        else {
            this.progress = {
                username: this.token.getUsername(),
                materialId: materialId,
                contentId: contentId,
                answerList: this.answerList
            };
            this.learnService.createProgress(this.progress).subscribe(function (data) {
                _this.status = data.success;
                if (_this.status) {
                    _this.openSuccessSnackBar();
                }
                else {
                    _this.openFailSnackBar();
                }
            }, function (error) {
                console.log(error);
            });
        }
        this.getUserMaterialStatus(this.info.username, materialId);
        this.orderContentStatus();
        this.stepper.selected.completed = true;
        this.stepper.selected.editable = false;
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
        console.log(selectedOption + 'selected');
        console.log(this.answerList);
    };
    MaterialDetailComponent.prototype.getUserMaterialStatus = function (username, materialId) {
        var _this = this;
        this.learnService.getUserStatus(username, materialId).subscribe(function (data) {
            _this.userMaterialStatus = data;
        }, function (error) {
            console.log(error);
        });
    };
    MaterialDetailComponent.prototype.findContentStatus = function (contentId) {
        this.userContentStatus = this.userMaterialStatus.userContentStatusList.find(function (c) { return c.contentId == contentId; });
        return this.userContentStatus;
    };
    MaterialDetailComponent.prototype.orderContentStatus = function () {
        if (this.orderedStatus.length > 0) {
            this.orderedStatus = new Array();
        }
        for (var _i = 0, _a = this.orderedContents; _i < _a.length; _i++) {
            var content = _a[_i];
            for (var _b = 0, _c = this.userMaterialStatus.userContentStatusList; _b < _c.length; _b++) {
                var contentStatus = _c[_b];
                if (content.id == contentStatus.contentId) {
                    this.orderedStatus.push(contentStatus.isCompleted);
                }
            }
        }
    };
    MaterialDetailComponent.prototype.openSuccessSnackBar = function () {
        this.snackBar.openFromComponent(ContentResultSuccessComponent, {
            duration: this.durationInSeconds * 1000,
        });
    };
    MaterialDetailComponent.prototype.openFailSnackBar = function () {
        this.snackBar.openFromComponent(ContentResultFailComponent, {
            duration: this.durationInSeconds * 1000,
        });
    };
    MaterialDetailComponent.prototype.openCompletedSnackBar = function () {
        this.snackBar.openFromComponent(ContentResultCompletedComponent, {
            duration: this.durationInSeconds * 1000,
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"])
    ], MaterialDetailComponent.prototype, "stepper", void 0);
    MaterialDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-material-detail',
            template: __webpack_require__(/*! ./material-detail.component.html */ "./src/app/material-detail/material-detail.component.html"),
            styles: [__webpack_require__(/*! ./material-detail.component.css */ "./src/app/material-detail/material-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _services_learn_service__WEBPACK_IMPORTED_MODULE_7__["LearnService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object])
    ], KeywordDetailDialog);
    return KeywordDetailDialog;
}());

var ContentResultSuccessComponent = /** @class */ (function () {
    function ContentResultSuccessComponent() {
    }
    ContentResultSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'snack-bar-component-content-result-success',
            template: __webpack_require__(/*! ./snack-bar-component-content-result-success.html */ "./src/app/material-detail/snack-bar-component-content-result-success.html"),
            styles: ["\n    .content-result {\n      color: white;\n    }\n  "]
        })
    ], ContentResultSuccessComponent);
    return ContentResultSuccessComponent;
}());

var ContentResultFailComponent = /** @class */ (function () {
    function ContentResultFailComponent() {
    }
    ContentResultFailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'snack-bar-component-content-result-fail',
            template: __webpack_require__(/*! ./snack-bar-component-content-result-fail.html */ "./src/app/material-detail/snack-bar-component-content-result-fail.html"),
            styles: ["\n    .content-result {\n      color: white;\n    }\n  "]
        })
    ], ContentResultFailComponent);
    return ContentResultFailComponent;
}());

var ContentResultCompletedComponent = /** @class */ (function () {
    function ContentResultCompletedComponent() {
    }
    ContentResultCompletedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'snack-bar-component-content-result-completed',
            template: __webpack_require__(/*! ./snack-bar-component-content-result-completed.html */ "./src/app/material-detail/snack-bar-component-content-result-completed.html"),
            styles: ["\n    .content-result {\n      color: white;\n    }\n  "]
        })
    ], ContentResultCompletedComponent);
    return ContentResultCompletedComponent;
}());



/***/ }),

/***/ "./src/app/material-detail/snack-bar-component-content-result-completed.html":
/*!***********************************************************************************!*\
  !*** ./src/app/material-detail/snack-bar-component-content-result-completed.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"content-result\">\n  You completed this content before 🤟\n</span>"

/***/ }),

/***/ "./src/app/material-detail/snack-bar-component-content-result-fail.html":
/*!******************************************************************************!*\
  !*** ./src/app/material-detail/snack-bar-component-content-result-fail.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"content-result\">\n  Please check your answers in another try 🤞\n</span>"

/***/ }),

/***/ "./src/app/material-detail/snack-bar-component-content-result-success.html":
/*!*********************************************************************************!*\
  !*** ./src/app/material-detail/snack-bar-component-content-result-success.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"content-result\">\n  You finished the content successfully 👏\n</span>"

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

/***/ "./src/app/model/user-material-status.ts":
/*!***********************************************!*\
  !*** ./src/app/model/user-material-status.ts ***!
  \***********************************************/
/*! exports provided: UserMaterialStatus, UserContentStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMaterialStatus", function() { return UserMaterialStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContentStatus", function() { return UserContentStatus; });
var UserMaterialStatus = /** @class */ (function () {
    function UserMaterialStatus() {
    }
    return UserMaterialStatus;
}());

var UserContentStatus = /** @class */ (function () {
    function UserContentStatus() {
    }
    return UserContentStatus;
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
    LearnService.prototype.getUserStatus = function (username, materialId) {
        return this.http.get(this.learnUrl + 'userStatus/' + username + '/' + materialId, httpOptions);
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
    SearchService.prototype.getAllMaterialSummaries = function (username) {
        return this.http.get(this.searchUrl + username, { responseType: 'json' });
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
    TeachService.prototype.getQuestions = function (id) {
        return this.http.get(this.teachUrl + 'questions/' + id, httpOptions);
    };
    TeachService.prototype.updateMaterial = function (material, id) {
        return this.http.put(this.teachUrl + 'update/material/' + id, material, httpOptions);
    };
    TeachService.prototype.updateContent = function (content, id) {
        return this.http.put(this.teachUrl + 'update/content/' + id, content, httpOptions);
    };
    TeachService.prototype.updateQuestion = function (question, id) {
        return this.http.put(this.teachUrl + 'update/question/' + id, question, httpOptions);
    };
    TeachService.prototype.deleteMaterial = function (id) {
        return this.http.delete(this.teachUrl + 'delete/material/' + id, httpOptions);
    };
    TeachService.prototype.deleteContent = function (id) {
        return this.http.delete(this.teachUrl + 'delete/content/' + id, httpOptions);
    };
    TeachService.prototype.deleteQuestion = function (id) {
        return this.http.delete(this.teachUrl + 'delete/question/' + id, httpOptions);
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

module.exports = "<div>\n    <p>\n        track works!\n    </p>\n</div>\n"

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

module.exports = "ul.navbar-nav.mr-auto{\n    display: inline;\n    float: right;\n}\n\nul.li.navbar-nav.mr-auto{\n    margin-left: 5%;\n}\n\nnav.navbar.navbar-dark.bg-primary{\n    display: flow-root;\n}\n\na.nav-link{\n    padding-left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdWkvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwubmF2YmFyLW5hdi5tci1hdXRve1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbnVsLmxpLm5hdmJhci1uYXYubXItYXV0b3tcbiAgICBtYXJnaW4tbGVmdDogNSU7XG59XG5cblxubmF2Lm5hdmJhci5uYXZiYXItZGFyay5iZy1wcmltYXJ5e1xuICAgIGRpc3BsYXk6IGZsb3ctcm9vdDtcbn1cblxuYS5uYXYtbGlua3tcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary\">\n\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\"> G-LEARN 📖 </a>\n        </div>\n        <!--\n            <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n                <div class=\"navbar-nav\">\n                    <a class=\"nav-item nav-link active\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n                    <a class=\"nav-item nav-link\" href=\"#\">Features</a>\n                    <a class=\"nav-item nav-link\" href=\"#\">Pricing</a>\n                    <a class=\"nav-item nav-link disabled\" href=\"#\">Disabled</a>\n                </div>\n            </div>\n            -->\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"#\">HOME<span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"authority === 'user'\">\n                    <a class=\"nav-link\" href=\"learn\">LEARN</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"authority === 'user'\">\n                    <a class=\"nav-link\" href=\"teach\">TEACH</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"authority === 'user'\">\n                    <a class=\"nav-link\" href=\"track\">TRACK</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"authority !== 'user'\">\n                    <a class=\"nav-link\" href=\"auth/login\">LOGIN</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"authority === 'user'\">\n                    <a class=\"nav-link\" (click)=\"logout()\">LOGOUT</a>\n                </li>\n            </ul>\n        </div>\n\n        <!--\n            <div class=\"container\">\n\n                <a style=\"float: left\" class=\"navbar-header\" href=\"#\">🐝 G-LEARN</a>\n\n                <!-- logo\n                <div class=\"navbar-brand\">\n\n                </div>\n        -->\n        <!--menu -->\n        <!--\n        <div class=\"navbar-menu\">\n            <div class=\"navbar-end\">\n                <a *ngIf=\"authority === 'user'\" class=\"navbar-item\" href=\"learn\" >📚 LEARN</a>\n                <a *ngIf=\"authority === 'user'\" href=\"teach\" class=\"navbar-item\">📝 TEACH</a>\n                <a *ngIf=\"authority === 'user'\" href=\"track\" class=\"navbar-item\">🛤 TRACK</a>\n                <a *ngIf=\"authority !== 'user'\" href=\"auth/login\" class=\"navbar-item\">LOGIN</a>\n                <a *ngIf=\"authority === 'user'\" (click)=\"logout()\" class=\"navbar-item\">LOG OUT</a>\n            </div>\n        </div>\n        -->\n        <!--\n                <ul id=\"horizontal-list\">\n                    <li><a *ngIf=\"authority === 'user'\"  href=\"learn\">📚 LEARN</a></li>\n                    <li><a *ngIf=\"authority === 'user'\" href=\"teach\" >📝 TEACH</a></li>\n                    <li><a *ngIf=\"authority === 'user'\" href=\"track\">🛤 TRACK</a></li>\n                    <li><a *ngIf=\"authority !== 'user'\" href=\"auth/login\">LOGIN</a></li>\n                    <li><a *ngIf=\"authority === 'user'\" (click)=\"logout()\">LOG OUT</a></li>\n                </ul>\n\n            </div>\n\n            -->\n</nav>"

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

/***/ "./src/app/update/material-add-dialog.html":
/*!*************************************************!*\
  !*** ./src/app/update/material-add-dialog.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create Material</h1>\n<div mat-dialog-content>\n\n    <div class=\"container\">\n        <br/>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n\n            <div class=\"form-group\">\n                <input id=\"title\" name=\"title\" class=\"form-control\" placeholder=\"Title\"\n                       required [(ngModel)]=\"data.title\" #title=\"ngModel\"/>\n                <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"title.errors.required\">Material title is required.</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <input id=\"description\" name=\"description\" class=\"form-control\" placeholder=\"Description\"\n                       required [(ngModel)]=\"data.description\" #description=\"ngModel\"/>\n                <div *ngIf=\"description.invalid && (description.dirty || description.touched)\"\n                     class=\"alert alert-danger\">\n                    <div *ngIf=\"description.errors.required\">Material description is required.</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <input id=\"image\" name=\"image\" class=\"form-control\" placeholder=\"Image\"\n                       required [(ngModel)]=\"data.image\" #image=\"ngModel\"/>\n                <div *ngIf=\"image.invalid && (image.dirty || image.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"image.errors.required\">Material image is required.</div>\n                </div>\n            </div>\n\n\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary\" style=\"width:100%\"\n                        [disabled]=\"f.form.pristine || f.form.invalid\">\n                    Create\n                </button>\n            </div>\n\n            <br/>\n            <h6 style=\"color: #3e5e9a\">{{message}}</h6>\n\n\n        </form>\n    </div>\n\n</div>\n<div mat-dialog-actions>\n    <button mat-icon-button (click)=\"onNoClick()\">\n        <mat-icon>close</mat-icon>\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/update/material-delete-dialog.html":
/*!****************************************************!*\
  !*** ./src/app/update/material-delete-dialog.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete Material</h1>\n<div mat-dialog-content>\n    <em>{{dialogData.material.title}}</em>\n    <p>Are you sure to delete the material?</p>\n    <p style=\"color: red;\">{{message}}</p>\n</div>\n<div mat-dialog-actions>\n    <div mat-dialog-actions>\n        <button mat-icon-button (click)=\"onDeleteClick()\">\n            <mat-icon>delete</mat-icon>\n        </button>\n        <button style=\"float: right\" mat-icon-button (click)=\"onNoClick()\">\n            <mat-icon>close</mat-icon>\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/update/material-update-dialog.html":
/*!****************************************************!*\
  !*** ./src/app/update/material-update-dialog.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Update Material</h1>\n<div mat-dialog-content>\n\n    <div class=\"container\">\n        <br/>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n\n            <div class=\"form-group\">\n                <input id=\"title\" name=\"title\" class=\"form-control\"\n                       required [(ngModel)]=\"dialogData.material.title\" #title=\"ngModel\"/>\n                <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"title.errors.required\">Material title is required.</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <input id=\"description\" name=\"description\" class=\"form-control\"\n                       required [(ngModel)]=\"dialogData.material.description\" #description=\"ngModel\"/>\n                <div *ngIf=\"description.invalid && (description.dirty || description.touched)\"\n                     class=\"alert alert-danger\">\n                    <div *ngIf=\"description.errors.required\">Material description is required.</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <input id=\"image\" name=\"image\" class=\"form-control\" placeholder=\"{{dialogData.material.image}}\"\n                       required [(ngModel)]=\"dialogData.material.image\" #image=\"ngModel\"/>\n                <div *ngIf=\"image.invalid && (image.dirty || image.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"image.errors.required\">Material image is required.</div>\n                </div>\n            </div>\n\n\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary\" style=\"width:100%\"\n                        [disabled]=\"f.form.pristine || f.form.invalid\">\n                    Update\n                </button>\n            </div>\n\n            <br/>\n            <h6 style=\"color: #3e5e9a\">{{message}}</h6>\n\n\n        </form>\n    </div>\n\n</div>\n<div mat-dialog-actions>\n    <button mat-icon-button (click)=\"onNoClick()\">\n        <mat-icon>close</mat-icon>\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/update/update-content/content-add-dialog.html":
/*!***************************************************************!*\
  !*** ./src/app/update/update-content/content-add-dialog.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create New Content</h1>\n<div mat-dialog-content>\n\n    <div class=\"container\">\n        <form name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n\n            <div class=\"form-group\">\n                <input id=\"title\" name=\"title\" class=\"form-control\" placeholder=\"Title\"\n                       required [(ngModel)]=\"content.title\" #title=\"ngModel\"/>\n                <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"title.errors.required\">Content title is required.</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <input id=\"image\" name=\"image\" class=\"form-control\" placeholder=\"Image\"\n                       required [(ngModel)]=\"content.image\" #image=\"ngModel\"/>\n                <div *ngIf=\"image.invalid && (image.dirty || image.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"image.errors.required\">Content image is required.</div>\n                </div>\n            </div>\n\n            <section style=\"background-color: #dddddd; padding: 1em\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Keyword\" name=\"keyword\" [(ngModel)]=\"keyword\">\n                </mat-form-field>\n                <button mat-button (click)=\"searchWiki(keyword)\">🔎 Search Wikidata</button>\n\n                <mat-select id=\"foundWikis\" [(ngModel)]=\"selectedKeyword\" name=\"selectedWiki\" placeholder=\"Select keyword from wikidata\">\n                    <mat-option *ngFor=\"let wiki of wikis\" [value]=\"wiki\">{{wiki.description}}\n                    </mat-option>\n                </mat-select>\n\n                <br/>\n                <br/>\n                <a *ngIf=\"selectedKeyword\" href=\"{{selectedKeyword.url}}\">{{selectedKeyword.title}}</a>\n\n                <button mat-button (click)=\"addKeyword()\">➕ Add Keyword</button>\n                <li *ngFor=\"let keyword of keywordList\">{{keyword.label}}</li>\n\n            </section>\n\n            <br/>\n\n            <div class=\"form-group\">\n                <app-ngx-editor id=\"explanation\" name=\"explanation\" [placeholder]=\"'Enter explanation here...'\"\n                                [spellcheck]=\"true\"\n                                [(ngModel)]=\"content.explanation\" #explanation=\"ngModel\"></app-ngx-editor>\n            </div>\n\n\n            <br/>\n\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary\" style=\"width:100%\" (click)=\"createNewContent()\" [disabled]=\"f.form.pristine || f.form.invalid\">Create Content</button>\n            </div>\n\n            <br/>\n            <h6 style=\"color: #3e5e9a\">{{message}}</h6>\n\n        </form>\n\n\n    </div>\n</div>\n<div mat-dialog-actions>\n    <button mat-icon-button (click)=\"onNoClick()\">\n        <mat-icon>close</mat-icon>\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/update/update-content/content-delete-dialog.html":
/*!******************************************************************!*\
  !*** ./src/app/update/update-content/content-delete-dialog.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete Content</h1>\n<div mat-dialog-content>\n    <p>Are you sure to delete the content?</p>\n    <p>{{dialogData.content.title}}</p>\n    <p style=\"color: red;\">{{message}}</p>\n</div>\n<div mat-dialog-actions>\n    <div mat-dialog-actions>\n        <button mat-icon-button (click)=\"onDeleteClick()\">\n            <mat-icon>delete</mat-icon>\n        </button>\n        <button style=\"float: right\" mat-icon-button (click)=\"onNoClick()\">\n            <mat-icon>close</mat-icon>\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/update/update-content/content-update-dialog.html":
/*!******************************************************************!*\
  !*** ./src/app/update/update-content/content-update-dialog.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Update Content</h1>\n<div mat-dialog-content>\n\n    <div class=\"container\">\n        <form name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n\n            <div class=\"form-group\">\n                <input id=\"title\" name=\"title\" class=\"form-control\"\n                       required [(ngModel)]=\"dialogData.content.title\" #title=\"ngModel\"/>\n                <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"title.errors.required\">Content title is required.</div>\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <input id=\"image\" name=\"image\" class=\"form-control\" placeholder=\"Image\"\n                       required [(ngModel)]=\"dialogData.content.image\" #image=\"ngModel\"/>\n                <div *ngIf=\"image.invalid && (image.dirty || image.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"image.errors.required\">Content image is required.</div>\n                </div>\n            </div>\n\n            <br/>\n\n            <div class=\"form-group\">\n                <app-ngx-editor id=\"explanation\" name=\"explanation\"\n                                [spellcheck]=\"true\"\n                                [(ngModel)]=\"dialogData.content.explanation\" #explanation=\"ngModel\"></app-ngx-editor>\n            </div>\n\n\n            <br/>\n\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary\" style=\"width:100%\"\n                        (click)=\"updateContent()\"\n                        [disabled]=\"f.form.pristine || f.form.invalid\">\n                    Update\n                </button>\n            </div>\n\n\n            <br/>\n            <h6 style=\"color: #3e5e9a\">{{message}}</h6>\n\n        </form>\n\n\n    </div>\n</div>\n<div mat-dialog-actions>\n    <button mat-icon-button (click)=\"onNoClick()\">\n        <mat-icon>close</mat-icon>\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/update/update-content/update-content.component.css":
/*!********************************************************************!*\
  !*** ./src/app/update/update-content/update-content.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    font-family: Lato;\n}\n\n\n.header-image {\n    background-size: cover;\n}\n\n\n.material-card{\n    margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlL3VwZGF0ZS1jb250ZW50L3VwZGF0ZS1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS91cGRhdGUtY29udGVudC91cGRhdGUtY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG59XG5cblxuLmhlYWRlci1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1hdGVyaWFsLWNhcmR7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG59Il19 */"

/***/ }),

/***/ "./src/app/update/update-content/update-content.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/update/update-content/update-content.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" >\n\n  <h5>Contents</h5>\n  <br/>\n  <mat-divider></mat-divider>\n  <button mat-icon-button (click)=\"openAddDialog()\">\n    <mat-icon>add_circle</mat-icon>\n    Add New Content\n  </button>\n\n  <br/>\n\n\n  <mat-card class=\"material-card\" *ngFor=\"let content of material.contents \">\n    <mat-card-header>\n      <div mat-card-avatar class=\"header-image\"><img  [src]=\"content.image\"></div>\n      {{content.title}}\n    </mat-card-header>\n    <mat-card-content>\n      {{content.explanation && content.explanation.slice(0,200)}}\n    </mat-card-content>\n    <mat-card-actions>\n      <button style=\"margin-right: 2%\" mat-stroked-button color=\"warn\" (click)=\"seeDetail(content.id)\" [disabled]=\"info.token==null\">Details</button>\n      <button style=\"margin-right: 2%\" mat-stroked-button color=\"info\" (click)=\"openEditDialog(content)\">Update</button>\n      <button style=\"margin-right: 2%\" mat-stroked-button color=\"info\" (click)=\"openDeleteDialog(content)\">Delete</button>\n    </mat-card-actions>\n  </mat-card>\n\n\n</div>"

/***/ }),

/***/ "./src/app/update/update-content/update-content.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/update/update-content/update-content.component.ts ***!
  \*******************************************************************/
/*! exports provided: UpdateContentComponent, ContentAddDialog, ContentUpdateDialog, ContentDeleteDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateContentComponent", function() { return UpdateContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentAddDialog", function() { return ContentAddDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentUpdateDialog", function() { return ContentUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentDeleteDialog", function() { return ContentDeleteDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _model_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/material */ "./src/app/model/material.ts");
/* harmony import */ var _services_teach_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/teach.service */ "./src/app/services/teach.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var UpdateContentComponent = /** @class */ (function () {
    function UpdateContentComponent(token, route, searchService, router, teachService, dialog) {
        this.token = token;
        this.route = route;
        this.searchService = searchService;
        this.router = router;
        this.teachService = teachService;
        this.dialog = dialog;
        this.material = new _model_material__WEBPACK_IMPORTED_MODULE_5__["Material"]();
        this.content = new _model_material__WEBPACK_IMPORTED_MODULE_5__["Content"]();
    }
    UpdateContentComponent.prototype.ngOnInit = function () {
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
            _this.material.contents.sort(function (a, b) { return (a.order > b.order) ? 1 : -1; });
        }, function (error) {
            console.log(error);
        });
    };
    UpdateContentComponent.prototype.seeDetail = function (id) {
        this.router.navigate(['update/content', id]);
    };
    UpdateContentComponent.prototype.openAddDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(ContentAddDialog, {
            width: '95%',
            height: '80%',
            data: { username: this.info.username,
                content: this.content,
                materialId: this.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('Content added');
            _this.content = result;
        });
    };
    UpdateContentComponent.prototype.openEditDialog = function (content) {
        var _this = this;
        var dialogRef = this.dialog.open(ContentUpdateDialog, {
            width: '500px',
            data: { username: this.info.username,
                content: content,
                materialId: this.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('Content edited');
            _this.material = result;
        });
    };
    UpdateContentComponent.prototype.openDeleteDialog = function (content) {
        var dialogRef = this.dialog.open(ContentDeleteDialog, {
            width: '300px',
            data: { username: this.info.username,
                content: content,
                materialId: this.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('Content deleted');
        });
    };
    UpdateContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-content',
            template: __webpack_require__(/*! ./update-content.component.html */ "./src/app/update/update-content/update-content.component.html"),
            styles: [__webpack_require__(/*! ./update-content.component.css */ "./src/app/update/update-content/update-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_teach_service__WEBPACK_IMPORTED_MODULE_6__["TeachService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], UpdateContentComponent);
    return UpdateContentComponent;
}());

var ContentAddDialog = /** @class */ (function () {
    function ContentAddDialog(dialogRef, dialogData, teachService) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.teachService = teachService;
        this.content = new _model_material__WEBPACK_IMPORTED_MODULE_5__["Content"]();
        this.wikis = new Array();
        this.selectedKeyword = new _model_material__WEBPACK_IMPORTED_MODULE_5__["Keyword"]();
        this.keywordList = new Array();
    }
    ContentAddDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ContentAddDialog.prototype.createNewContent = function () {
        var _this = this;
        this.content.keywords = this.keywordList;
        this.content.status = 1;
        console.log(this.content);
        this.teachService.createContent(this.content, this.dialogData.materialId).subscribe(function (data) {
            console.log(data);
            _this.message = data.message;
        }, function (error) {
            console.log(error);
        });
    };
    ContentAddDialog.prototype.searchWiki = function (keyword) {
        var _this = this;
        this.teachService.searchWiki(keyword).subscribe(function (data) {
            console.log(data);
            _this.wikis = data;
        }, function (error) {
            console.log(error);
        });
        console.log(keyword + ' selected');
    };
    ContentAddDialog.prototype.addKeyword = function () {
        console.log(this.selectedKeyword);
        this.keywordList.push(this.selectedKeyword);
    };
    ContentAddDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-add-dialog',
            template: __webpack_require__(/*! ./content-add-dialog.html */ "./src/app/update/update-content/content-add-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object, _services_teach_service__WEBPACK_IMPORTED_MODULE_6__["TeachService"]])
    ], ContentAddDialog);
    return ContentAddDialog;
}());

var ContentUpdateDialog = /** @class */ (function () {
    function ContentUpdateDialog(dialogRef, dialogData, teachService) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.teachService = teachService;
    }
    ContentUpdateDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ContentUpdateDialog.prototype.updateContent = function () {
        var _this = this;
        this.teachService.updateContent(this.dialogData.content, this.dialogData.content.id).subscribe(function (data) {
            console.log(data);
            _this.message = data.message;
        }, function (error) {
            console.log(error);
        });
    };
    ContentUpdateDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-update-dialog',
            template: __webpack_require__(/*! ./content-update-dialog.html */ "./src/app/update/update-content/content-update-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object, _services_teach_service__WEBPACK_IMPORTED_MODULE_6__["TeachService"]])
    ], ContentUpdateDialog);
    return ContentUpdateDialog;
}());

var ContentDeleteDialog = /** @class */ (function () {
    function ContentDeleteDialog(dialogRef, dialogData, teachService) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.teachService = teachService;
    }
    ContentDeleteDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ContentDeleteDialog.prototype.onDeleteClick = function () {
        var _this = this;
        this.teachService.deleteContent(this.dialogData.content.id).subscribe(function (data) {
            _this.message = data.message;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ContentDeleteDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'content-delete-dialog',
            template: __webpack_require__(/*! ./content-delete-dialog.html */ "./src/app/update/update-content/content-delete-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object, _services_teach_service__WEBPACK_IMPORTED_MODULE_6__["TeachService"]])
    ], ContentDeleteDialog);
    return ContentDeleteDialog;
}());



/***/ }),

/***/ "./src/app/update/update-question/question-add-dialog.html":
/*!*****************************************************************!*\
  !*** ./src/app/update/update-question/question-add-dialog.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create New Question</h1>\n<div mat-dialog-content>\n\n    <div class=\"container\">\n        <br/>\n\n        <form name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n\n            <div class=\"form-group\">\n                <input id=\"questionText\" name=\"questionText\" class=\"form-control\" placeholder=\"Question Text\"\n                       required [(ngModel)]=\"question.questionText\" #questionText=\"ngModel\"/>\n                <div *ngIf=\"questionText.invalid && (questionText.dirty || questionText.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"questionText.errors.required\">Question Text is required.</div>\n                </div>\n            </div>\n\n\n            <section style=\"background-color: #dddddd; padding: 1em\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Option Text\" name=\"option\" [(ngModel)]=\"selectedOption.optionText\">\n                </mat-form-field>\n                <mat-checkbox name=\"value\" [(ngModel)]=\"selectedOption.isAnswer\">Is correct answer?</mat-checkbox>\n                <button mat-button (click)=\"addOption()\">➕ Add Option</button>\n\n                <br/>\n                <li *ngFor=\"let option of optionList\">{{option.optionText}} - {{option.isAnswer}}</li>\n            </section>\n\n            <br/>\n            <br/>\n\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary\" style=\"width:100%\" (click)=\"createQuestion()\" [disabled]=\"f.form.pristine || f.form.invalid\">Create Question</button>\n            </div>\n\n            <br/>\n            <h6 style=\"color: #3e5e9a\">{{message}}</h6>\n\n        </form>\n\n\n    </div>\n\n    <br/>\n\n</div>\n<div mat-dialog-actions>\n    <button mat-icon-button (click)=\"onNoClick()\">\n        <mat-icon>close</mat-icon>\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/update/update-question/question-delete-dialog.html":
/*!********************************************************************!*\
  !*** ./src/app/update/update-question/question-delete-dialog.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete Question</h1>\n<div mat-dialog-content>\n    <p>Are you sure to delete the question?</p>\n    <p>{{dialogData.question.questionText}}</p>\n    <p style=\"color: red;\">{{message}}</p>\n</div>\n<div mat-dialog-actions>\n    <div mat-dialog-actions>\n        <button mat-icon-button (click)=\"onDeleteClick()\">\n            <mat-icon>delete</mat-icon>\n        </button>\n        <button style=\"float: right\" mat-icon-button (click)=\"onNoClick()\">\n            <mat-icon>close</mat-icon>\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/update/update-question/question-update-dialog.html":
/*!********************************************************************!*\
  !*** ./src/app/update/update-question/question-update-dialog.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create New Question</h1>\n<div mat-dialog-content>\n\n    <div class=\"container\">\n        <br/>\n\n        <form name=\"form\" (ngSubmit)=\"f.form.valid\" #f=\"ngForm\" novalidate>\n\n            <div class=\"form-group\">\n                <input id=\"questionText\" name=\"questionText\" class=\"form-control\"\n                       required [(ngModel)]=\"dialogData.question.questionText\" #questionText=\"ngModel\"/>\n                <div *ngIf=\"questionText.invalid && (questionText.dirty || questionText.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"questionText.errors.required\">Question Text is required.</div>\n                </div>\n            </div>\n\n            <p>Options:</p>\n            <li *ngFor=\"let option of dialogData.question.options\">\n                {{option.optionText}} - {{option.isAnswer}}\n            </li>\n\n            <br/>\n            <br/>\n\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary\" style=\"width:100%\" (click)=\"updateQuestion()\" [disabled]=\"f.form.pristine || f.form.invalid\">Update</button>\n            </div>\n\n            <br/>\n            <h6 style=\"color: #3e5e9a\">{{message}}</h6>\n\n        </form>\n\n\n    </div>\n\n    <br/>\n\n</div>\n<div mat-dialog-actions>\n    <button mat-icon-button (click)=\"onNoClick()\">\n        <mat-icon>close</mat-icon>\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/update/update-question/update-question.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/update/update-question/update-question.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.header-image {\n    background-size: cover;\n}\n\n.material-card{\n    margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlL3VwZGF0ZS1xdWVzdGlvbi91cGRhdGUtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC91cGRhdGUvdXBkYXRlLXF1ZXN0aW9uL3VwZGF0ZS1xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubWF0ZXJpYWwtY2FyZHtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/update/update-question/update-question.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/update/update-question/update-question.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" >\n\n  <h5>Questions</h5>\n  <br/>\n  <mat-divider></mat-divider>\n  <button mat-icon-button (click)=\"openAddDialog()\">\n    <mat-icon>add_circle</mat-icon>\n    Add New Question\n  </button>\n\n  <br/>\n\n\n  <mat-card class=\"material-card\" *ngFor=\"let question of questions \">\n    <mat-card-header>\n      <div mat-card-avatar class=\"header-image\">❓</div>\n    </mat-card-header>\n    <mat-card-content>\n      {{question.questionText}}\n      <li *ngFor=\"let option of question.options\">\n        {{option.optionText}} - {{option.isAnswer}}\n      </li>\n    </mat-card-content>\n    <mat-card-actions>\n      <button style=\"margin-right: 2%\" mat-stroked-button color=\"info\" (click)=\"openEditDialog(question)\">Update</button>\n      <button style=\"margin-right: 2%\" mat-stroked-button color=\"info\" (click)=\"openDeleteDialog(question)\">Delete</button>\n    </mat-card-actions>\n  </mat-card>\n\n\n</div>"

/***/ }),

/***/ "./src/app/update/update-question/update-question.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/update/update-question/update-question.component.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateQuestionComponent, QuestionAddDialog, QuestionUpdateDialog, QuestionDeleteDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateQuestionComponent", function() { return UpdateQuestionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAddDialog", function() { return QuestionAddDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionUpdateDialog", function() { return QuestionUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDeleteDialog", function() { return QuestionDeleteDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/material */ "./src/app/model/material.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_teach_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/teach.service */ "./src/app/services/teach.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var UpdateQuestionComponent = /** @class */ (function () {
    function UpdateQuestionComponent(token, route, teachService, router, dialog) {
        this.token = token;
        this.route = route;
        this.teachService = teachService;
        this.router = router;
        this.dialog = dialog;
        this.questions = new Array();
        this.question = new _model_material__WEBPACK_IMPORTED_MODULE_2__["Question"]();
    }
    UpdateQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        this.teachService.getQuestions(this.id).subscribe(function (data) {
            _this.questions = data;
        }, function (error) {
            console.log(error);
        });
    };
    UpdateQuestionComponent.prototype.openAddDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(QuestionAddDialog, {
            width: '70%',
            data: { username: this.info.username,
                question: this.question,
                contentId: this.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('Question added');
            _this.question = result;
        });
    };
    UpdateQuestionComponent.prototype.openEditDialog = function (question) {
        var _this = this;
        var dialogRef = this.dialog.open(QuestionUpdateDialog, {
            width: '70%',
            data: { username: this.info.username,
                question: question,
                contentId: this.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('Question edited');
            _this.question = result;
        });
    };
    UpdateQuestionComponent.prototype.openDeleteDialog = function (question) {
        var dialogRef = this.dialog.open(QuestionDeleteDialog, {
            width: '300px',
            data: { username: this.info.username,
                question: question,
                contentId: this.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('Question deleted');
        });
    };
    UpdateQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-question',
            template: __webpack_require__(/*! ./update-question.component.html */ "./src/app/update/update-question/update-question.component.html"),
            styles: [__webpack_require__(/*! ./update-question.component.css */ "./src/app/update/update-question/update-question.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_teach_service__WEBPACK_IMPORTED_MODULE_5__["TeachService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], UpdateQuestionComponent);
    return UpdateQuestionComponent;
}());

var QuestionAddDialog = /** @class */ (function () {
    function QuestionAddDialog(dialogRef, dialogData, teachService) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.teachService = teachService;
        this.question = new _model_material__WEBPACK_IMPORTED_MODULE_2__["Question"]();
        this.optionList = new Array();
        this.selectedOption = new _model_material__WEBPACK_IMPORTED_MODULE_2__["Option"]();
    }
    QuestionAddDialog.prototype.createQuestion = function () {
        var _this = this;
        this.question.options = this.optionList;
        console.log(this.question);
        this.teachService.createQuestion(this.question, this.dialogData.contentId).subscribe(function (data) {
            console.log(data);
            _this.message = data.message;
        }, function (error) {
            console.log(error);
        });
    };
    QuestionAddDialog.prototype.addOption = function () {
        console.log(this.selectedOption);
        this.optionList.push(this.selectedOption);
        this.selectedOption = new _model_material__WEBPACK_IMPORTED_MODULE_2__["Option"]();
    };
    QuestionAddDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    QuestionAddDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'question-add-dialog',
            template: __webpack_require__(/*! ./question-add-dialog.html */ "./src/app/update/update-question/question-add-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object, _services_teach_service__WEBPACK_IMPORTED_MODULE_5__["TeachService"]])
    ], QuestionAddDialog);
    return QuestionAddDialog;
}());

var QuestionUpdateDialog = /** @class */ (function () {
    function QuestionUpdateDialog(dialogRef, dialogData, teachService) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.teachService = teachService;
    }
    QuestionUpdateDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    QuestionUpdateDialog.prototype.updateQuestion = function () {
        var _this = this;
        this.teachService.updateQuestion(this.dialogData.question, this.dialogData.question.id).subscribe(function (data) {
            console.log(data);
            _this.message = data.message;
        }, function (error) {
            console.log(error);
        });
    };
    QuestionUpdateDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'question-update-dialog',
            template: __webpack_require__(/*! ./question-update-dialog.html */ "./src/app/update/update-question/question-update-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object, _services_teach_service__WEBPACK_IMPORTED_MODULE_5__["TeachService"]])
    ], QuestionUpdateDialog);
    return QuestionUpdateDialog;
}());

var QuestionDeleteDialog = /** @class */ (function () {
    function QuestionDeleteDialog(dialogRef, dialogData, teachService) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.teachService = teachService;
    }
    QuestionDeleteDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    QuestionDeleteDialog.prototype.onDeleteClick = function () {
        var _this = this;
        this.teachService.deleteQuestion(this.dialogData.question.id).subscribe(function (data) {
            _this.message = data.message;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    QuestionDeleteDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'question-delete-dialog',
            template: __webpack_require__(/*! ./question-delete-dialog.html */ "./src/app/update/update-question/question-delete-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], Object, _services_teach_service__WEBPACK_IMPORTED_MODULE_5__["TeachService"]])
    ], QuestionDeleteDialog);
    return QuestionDeleteDialog;
}());



/***/ }),

/***/ "./src/app/update/update.component.css":
/*!*********************************************!*\
  !*** ./src/app/update/update.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    font-family: Lato;\n}\n\n\n.header-image {\n    background-size: cover;\n}\n\n\n.material-card{\n    margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlL3VwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC91cGRhdGUvdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBmb250LWZhbWlseTogTGF0bztcbn1cblxuXG4uaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubWF0ZXJpYWwtY2FyZHtcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/update/update.component.html":
/*!**********************************************!*\
  !*** ./src/app/update/update.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\">\n\n    <h5>Materials</h5>\n    <br/>\n    <mat-divider></mat-divider>\n    <br/>\n\n    <button mat-icon-button (click)=\"openAddDialog()\">\n        <mat-icon>add_circle</mat-icon>\n        Add New Material\n    </button>\n\n    <br/>\n\n    <mat-card class=\"material-card\" *ngFor=\"let material of createdMaterials\">\n        <mat-card-header>\n            <div mat-card-avatar class=\"header-image\"><img [src]=\"material.image\"></div>\n            {{material.title}}\n        </mat-card-header>\n        <mat-card-content>\n            {{material.description}}\n        </mat-card-content>\n        <mat-card-actions>\n            <button style=\"margin-right: 2%\" mat-stroked-button color=\"warn\" (click)=\"seeDetail(material.id)\"\n                    [disabled]=\"info.token==null\">Details\n            </button>\n            <button style=\"margin-right: 2%\" mat-stroked-button color=\"info\"\n                    (click)=\"openEditDialog(material)\">Update</button>\n            <button style=\"margin-right: 2%\" mat-stroked-button color=\"info\"\n                    (click)=\"openDeleteDialog(material)\">Delete</button>\n        </mat-card-actions>\n    </mat-card>\n\n\n</div>"

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent, MaterialAddDialog, MaterialUpdateDialog, MaterialDeleteDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialAddDialog", function() { return MaterialAddDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialUpdateDialog", function() { return MaterialUpdateDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDeleteDialog", function() { return MaterialDeleteDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _services_teach_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/teach.service */ "./src/app/services/teach.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _model_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/material */ "./src/app/model/material.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(token, teachService, searchService, router, dialog) {
        this.token = token;
        this.teachService = teachService;
        this.searchService = searchService;
        this.router = router;
        this.dialog = dialog;
        this.createdMaterials = new Array();
        this.material = new _model_material__WEBPACK_IMPORTED_MODULE_5__["Material"]();
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
        this.searchService.getCreatedByMaterials().subscribe(function (data) {
            _this.createdMaterials = data;
        }, function (error) {
            console.log(error);
        });
    };
    UpdateComponent.prototype.seeDetail = function (id) {
        this.router.navigate(['update/material', id]);
    };
    UpdateComponent.prototype.openAddDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(MaterialAddDialog, {
            width: '500px',
            data: { username: this.info.username,
                material: this.material }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('Material added');
            _this.material = result;
        });
    };
    UpdateComponent.prototype.openEditDialog = function (material) {
        var _this = this;
        var dialogRef = this.dialog.open(MaterialUpdateDialog, {
            width: '500px',
            data: { username: this.info.username,
                material: material }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('Material edited');
            _this.material = result;
        });
    };
    UpdateComponent.prototype.openDeleteDialog = function (material) {
        var dialogRef = this.dialog.open(MaterialDeleteDialog, {
            width: '300px',
            data: { username: this.info.username,
                material: material }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('Material deleted');
        });
    };
    UpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/update/update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"],
            _services_teach_service__WEBPACK_IMPORTED_MODULE_3__["TeachService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], UpdateComponent);
    return UpdateComponent;
}());

var MaterialAddDialog = /** @class */ (function () {
    function MaterialAddDialog(dialogRef, dialogData, teachService) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.teachService = teachService;
        this.data = {};
    }
    MaterialAddDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MaterialAddDialog.prototype.onSubmit = function () {
        var _this = this;
        this.data.createdBy = this.dialogData.username;
        this.teachService.createMaterial(this.data).subscribe(function (data) {
            console.log(data);
            _this.message = data.message;
        }, function (error) {
            console.log(error);
        });
    };
    MaterialAddDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'material-add-dialog',
            template: __webpack_require__(/*! ./material-add-dialog.html */ "./src/app/update/material-add-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object, _services_teach_service__WEBPACK_IMPORTED_MODULE_3__["TeachService"]])
    ], MaterialAddDialog);
    return MaterialAddDialog;
}());

var MaterialUpdateDialog = /** @class */ (function () {
    function MaterialUpdateDialog(dialogRef, dialogData, teachService) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.teachService = teachService;
    }
    MaterialUpdateDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MaterialUpdateDialog.prototype.onSubmit = function () {
        var _this = this;
        this.teachService.updateMaterial(this.dialogData.material, this.dialogData.material.id).subscribe(function (data) {
            console.log(data);
            _this.message = data.message;
        }, function (error) {
            console.log(error);
        });
    };
    MaterialUpdateDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'material-update-dialog',
            template: __webpack_require__(/*! ./material-update-dialog.html */ "./src/app/update/material-update-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object, _services_teach_service__WEBPACK_IMPORTED_MODULE_3__["TeachService"]])
    ], MaterialUpdateDialog);
    return MaterialUpdateDialog;
}());

var MaterialDeleteDialog = /** @class */ (function () {
    function MaterialDeleteDialog(dialogRef, dialogData, teachService) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.teachService = teachService;
    }
    MaterialDeleteDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MaterialDeleteDialog.prototype.onDeleteClick = function () {
        var _this = this;
        this.teachService.deleteMaterial(this.dialogData.material.id).subscribe(function (data) {
            _this.message = data.message;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    MaterialDeleteDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'material-delete-dialog',
            template: __webpack_require__(/*! ./material-delete-dialog.html */ "./src/app/update/material-delete-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object, _services_teach_service__WEBPACK_IMPORTED_MODULE_3__["TeachService"]])
    ], MaterialDeleteDialog);
    return MaterialDeleteDialog;
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