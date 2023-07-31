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
exports.id = "pages/api/utils";
exports.ids = ["pages/api/utils"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "@faker-js/faker":
/*!**********************************!*\
  !*** external "@faker-js/faker" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("@faker-js/faker");;

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxrQkFBa0JDO0FBRXhCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQTtBQUV6RCxJQUFJSSxJQUF5QixFQUFjSCxnQkFBZ0JFLE1BQU0sR0FBR0E7QUFFcEUsaUVBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGVyLWNsb25lLy4vbGliL3ByaXNtYS5qcz83NTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxcblxuY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KClcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWFcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsIiwicHJpc21hIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/utils.js":
/*!****************************!*\
  !*** ./pages/api/utils.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/prisma */ \"(api)/./lib/prisma.js\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @faker-js/faker */ \"@faker-js/faker\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__]);\n_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") return res.end();\n    if (req.body.task === \"generate_content\") {\n        //create 10 users\n        let usersCount = 0;\n        while(usersCount < 10){\n            await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n                data: {\n                    name: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.name.findName(),\n                    username: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.internet.userName().toLowerCase(),\n                    email: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.internet.email().toLowerCase(),\n                    image: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.image.avatar()\n                }\n            });\n            usersCount++;\n        }\n        const videoURL = \"https://bootcamp-flavio.fra1.digitaloceanspaces.com/SampleVideo_1280x720_5mb.mp4\";\n        const thumbnailURL = \"https://bootcamp-flavio.fra1.digitaloceanspaces.com/dog.png\";\n        const users = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findMany();\n        const getRandomUser = ()=>{\n            const randomIndex = Math.floor(Math.random() * users.length);\n            return users[randomIndex];\n        };\n        //create 20 videos, randomly assigned to users\n        let videosCount = 0;\n        while(videosCount < 20){\n            await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].video.create({\n                data: {\n                    title: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.lorem.words(),\n                    thumbnail: thumbnailURL,\n                    url: videoURL,\n                    length: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.datatype.number(1000),\n                    visibility: \"public\",\n                    views: _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__.faker.datatype.number(1000),\n                    author: {\n                        connect: {\n                            id: getRandomUser().id\n                        }\n                    }\n                }\n            });\n            videosCount++;\n        }\n    }\n    if (req.body.task === \"clean_database\") {\n        await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.deleteMany({});\n    }\n    res.end();\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStCO0FBQ1E7QUFFeEIsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVEsT0FBT0QsSUFBSUUsR0FBRztJQUV6QyxJQUFJSCxJQUFJSSxJQUFJLENBQUNDLElBQUksS0FBSyxvQkFBb0I7UUFDeEMsaUJBQWlCO1FBQ2pCLElBQUlDLGFBQWE7UUFFakIsTUFBT0EsYUFBYSxHQUFJO1lBQ3RCLE1BQU1ULDhEQUFrQixDQUFDO2dCQUN2QlksTUFBTTtvQkFDSkMsTUFBTVosZ0VBQW1CO29CQUN6QmMsVUFBVWQsb0VBQXVCLEdBQUdpQixXQUFXO29CQUMvQ0MsT0FBT2xCLGlFQUFvQixHQUFHaUIsV0FBVztvQkFDekNFLE9BQU9uQiwrREFBa0I7Z0JBQzNCO1lBQ0Y7WUFDQVE7UUFDRjtRQUVBLE1BQU1hLFdBQ0o7UUFDRixNQUFNQyxlQUNKO1FBRUYsTUFBTUMsUUFBUSxNQUFNeEIsZ0VBQW9CO1FBRXhDLE1BQU0wQixnQkFBZ0IsSUFBTTtZQUMxQixNQUFNQyxjQUFjQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS04sTUFBTU8sTUFBTTtZQUMzRCxPQUFPUCxLQUFLLENBQUNHLFlBQVk7UUFDM0I7UUFFQSw4Q0FBOEM7UUFDOUMsSUFBSUssY0FBYztRQUVsQixNQUFPQSxjQUFjLEdBQUk7WUFDdkIsTUFBTWhDLCtEQUFtQixDQUFDO2dCQUN4QlksTUFBTTtvQkFDSnNCLE9BQU9qQyw4REFBaUI7b0JBQ3hCb0MsV0FBV2Q7b0JBQ1hlLEtBQUtoQjtvQkFDTFMsUUFBUTlCLGtFQUFxQixDQUFDO29CQUM5QndDLFlBQVk7b0JBQ1pDLE9BQU96QyxrRUFBcUIsQ0FBQztvQkFDN0IwQyxRQUFRO3dCQUNOQyxTQUFTOzRCQUFFQyxJQUFJbkIsZ0JBQWdCbUIsRUFBRTt3QkFBQztvQkFDcEM7Z0JBQ0Y7WUFDRjtZQUNBYjtRQUNGO0lBQ0YsQ0FBQztJQUVELElBQUk3QixJQUFJSSxJQUFJLENBQUNDLElBQUksS0FBSyxrQkFBa0I7UUFDdEMsTUFBTVIsa0VBQXNCLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRURJLElBQUlFLEdBQUc7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHdpdHRlci1jbG9uZS8uL3BhZ2VzL2FwaS91dGlscy5qcz9iYTlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSAnbGliL3ByaXNtYSdcbmltcG9ydCB7IGZha2VyIH0gZnJvbSAnQGZha2VyLWpzL2Zha2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnUE9TVCcpIHJldHVybiByZXMuZW5kKClcblxuICBpZiAocmVxLmJvZHkudGFzayA9PT0gJ2dlbmVyYXRlX2NvbnRlbnQnKSB7XG4gICAgLy9jcmVhdGUgMTAgdXNlcnNcbiAgICBsZXQgdXNlcnNDb3VudCA9IDBcblxuICAgIHdoaWxlICh1c2Vyc0NvdW50IDwgMTApIHtcbiAgICAgIGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXG4gICAgICAgICAgdXNlcm5hbWU6IGZha2VyLmludGVybmV0LnVzZXJOYW1lKCkudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICBlbWFpbDogZmFrZXIuaW50ZXJuZXQuZW1haWwoKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgIGltYWdlOiBmYWtlci5pbWFnZS5hdmF0YXIoKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICB1c2Vyc0NvdW50KytcbiAgICB9XG5cbiAgICBjb25zdCB2aWRlb1VSTCA9XG4gICAgICAnaHR0cHM6Ly9ib290Y2FtcC1mbGF2aW8uZnJhMS5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL1NhbXBsZVZpZGVvXzEyODB4NzIwXzVtYi5tcDQnXG4gICAgY29uc3QgdGh1bWJuYWlsVVJMID1cbiAgICAgICdodHRwczovL2Jvb3RjYW1wLWZsYXZpby5mcmExLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vZG9nLnBuZydcblxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoKVxuXG4gICAgY29uc3QgZ2V0UmFuZG9tVXNlciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdXNlcnMubGVuZ3RoKVxuICAgICAgcmV0dXJuIHVzZXJzW3JhbmRvbUluZGV4XVxuICAgIH1cblxuICAgIC8vY3JlYXRlIDIwIHZpZGVvcywgcmFuZG9tbHkgYXNzaWduZWQgdG8gdXNlcnNcbiAgICBsZXQgdmlkZW9zQ291bnQgPSAwXG5cbiAgICB3aGlsZSAodmlkZW9zQ291bnQgPCAyMCkge1xuICAgICAgYXdhaXQgcHJpc21hLnZpZGVvLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0aXRsZTogZmFrZXIubG9yZW0ud29yZHMoKSxcbiAgICAgICAgICB0aHVtYm5haWw6IHRodW1ibmFpbFVSTCxcbiAgICAgICAgICB1cmw6IHZpZGVvVVJMLFxuICAgICAgICAgIGxlbmd0aDogZmFrZXIuZGF0YXR5cGUubnVtYmVyKDEwMDApLFxuICAgICAgICAgIHZpc2liaWxpdHk6ICdwdWJsaWMnLFxuICAgICAgICAgIHZpZXdzOiBmYWtlci5kYXRhdHlwZS5udW1iZXIoMTAwMCksXG4gICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICBjb25uZWN0OiB7IGlkOiBnZXRSYW5kb21Vc2VyKCkuaWQgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIHZpZGVvc0NvdW50KytcbiAgICB9XG4gIH1cblxuICBpZiAocmVxLmJvZHkudGFzayA9PT0gJ2NsZWFuX2RhdGFiYXNlJykge1xuICAgIGF3YWl0IHByaXNtYS51c2VyLmRlbGV0ZU1hbnkoe30pXG4gIH1cblxuICByZXMuZW5kKClcbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJmYWtlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbmQiLCJib2R5IiwidGFzayIsInVzZXJzQ291bnQiLCJ1c2VyIiwiY3JlYXRlIiwiZGF0YSIsIm5hbWUiLCJmaW5kTmFtZSIsInVzZXJuYW1lIiwiaW50ZXJuZXQiLCJ1c2VyTmFtZSIsInRvTG93ZXJDYXNlIiwiZW1haWwiLCJpbWFnZSIsImF2YXRhciIsInZpZGVvVVJMIiwidGh1bWJuYWlsVVJMIiwidXNlcnMiLCJmaW5kTWFueSIsImdldFJhbmRvbVVzZXIiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInZpZGVvc0NvdW50IiwidmlkZW8iLCJ0aXRsZSIsImxvcmVtIiwid29yZHMiLCJ0aHVtYm5haWwiLCJ1cmwiLCJkYXRhdHlwZSIsIm51bWJlciIsInZpc2liaWxpdHkiLCJ2aWV3cyIsImF1dGhvciIsImNvbm5lY3QiLCJpZCIsImRlbGV0ZU1hbnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/utils.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/utils.js"));
module.exports = __webpack_exports__;

})();