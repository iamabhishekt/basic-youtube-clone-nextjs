"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/email":
/*!********************************************!*\
  !*** external "next-auth/providers/email" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/email");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxrQkFBa0JDO0FBRXhCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQTtBQUV6RCxJQUFJSSxJQUF5QixFQUFjSCxnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFcEUsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGVyLWNsb25lLy4vbGliL3ByaXNtYS5qcz83NTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxcblxuY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KClcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWFcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsIiwicHJpc21hIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/email */ \"next-auth/providers/email\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/prisma */ \"(api)/./lib/prisma.js\");\n\n\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1___default()({\n            server: process.env.EMAIL_SERVER,\n            from: process.env.EMAIL_FROM\n        })\n    ],\n    database: process.env.DATABASE_URL,\n    secret: process.env.SECRET,\n    session: {\n        jwt: true,\n        maxAge: 30 * 24 * 60 * 60\n    },\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(lib_prisma__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    callbacks: {\n        session: async ({ session , user  })=>{\n            session.user.id = user.id;\n            session.user.username = user.username;\n            return Promise.resolve(session);\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUNxQjtBQUNJO0FBQzFCO0FBRXhCLE1BQU1JLGNBQWM7SUFDekJDLFdBQVc7UUFDVEosZ0VBQWFBLENBQUM7WUFDWkssUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxZQUFZO1lBQ2hDQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLFVBQVU7UUFDOUI7S0FDRDtJQUVEQyxVQUFVTCxRQUFRQyxHQUFHLENBQUNLLFlBQVk7SUFDbENDLFFBQVFQLFFBQVFDLEdBQUcsQ0FBQ08sTUFBTTtJQUUxQkMsU0FBUztRQUNQQyxLQUFLLElBQUk7UUFDVEMsUUFBUSxLQUFLLEtBQUssS0FBSztJQUN6QjtJQUVBQyxTQUFTakIsd0VBQWFBLENBQUNDLGtEQUFNQTtJQUU3QmlCLFdBQVc7UUFDVEosU0FBUyxPQUFPLEVBQUVBLFFBQU8sRUFBRUssS0FBSSxFQUFFLEdBQUs7WUFDcENMLFFBQVFLLElBQUksQ0FBQ0MsRUFBRSxHQUFHRCxLQUFLQyxFQUFFO1lBQ3pCTixRQUFRSyxJQUFJLENBQUNFLFFBQVEsR0FBR0YsS0FBS0UsUUFBUTtZQUNyQyxPQUFPQyxRQUFRQyxPQUFPLENBQUNUO1FBQ3pCO0lBQ0Y7QUFDRixFQUFDO0FBRUQsaUVBQWVoQixnREFBUUEsQ0FBQ0ksWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R3aXR0ZXItY2xvbmUvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCBFbWFpbFByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZW1haWwnXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlcidcbmltcG9ydCBwcmlzbWEgZnJvbSAnbGliL3ByaXNtYSdcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBFbWFpbFByb3ZpZGVyKHtcbiAgICAgIHNlcnZlcjogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSLFxuICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfRlJPTSxcbiAgICB9KSxcbiAgXSxcblxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcblxuICBzZXNzaW9uOiB7XG4gICAgand0OiB0cnVlLFxuICAgIG1heEFnZTogMzAgKiAyNCAqIDYwICogNjAsIC8vIDMwIGRheXNcbiAgfSxcblxuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG5cbiAgY2FsbGJhY2tzOiB7XG4gICAgc2Vzc2lvbjogYXN5bmMgKHsgc2Vzc2lvbiwgdXNlciB9KSA9PiB7XG4gICAgICBzZXNzaW9uLnVzZXIuaWQgPSB1c2VyLmlkXG4gICAgICBzZXNzaW9uLnVzZXIudXNlcm5hbWUgPSB1c2VyLnVzZXJuYW1lXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlc3Npb24pXG4gICAgfSxcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJFbWFpbFByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsInByaXNtYSIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwic2VydmVyIiwicHJvY2VzcyIsImVudiIsIkVNQUlMX1NFUlZFUiIsImZyb20iLCJFTUFJTF9GUk9NIiwiZGF0YWJhc2UiLCJEQVRBQkFTRV9VUkwiLCJzZWNyZXQiLCJTRUNSRVQiLCJzZXNzaW9uIiwiand0IiwibWF4QWdlIiwiYWRhcHRlciIsImNhbGxiYWNrcyIsInVzZXIiLCJpZCIsInVzZXJuYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();