/******/ var __webpack_modules__ = ({

/***/ "./resources/pages/components/testComponent.tsx":
/*!******************************************************!*\
  !*** ./resources/pages/components/testComponent.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
function TestComponent(_ref) {
  var testProp = _ref.testProp;
  return (0, jsx_runtime_1.jsxs)("h2", {
    className: "text-2xl",
    children: ["Hallo world!! ", (0, jsx_runtime_1.jsx)("span", {
      className: "font-bold",
      children: testProp
    })]
  });
}
exports["default"] = TestComponent;

/***/ }),

/***/ "./resources/pages/home.tsx":
/*!**********************************!*\
  !*** ./resources/pages/home.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var testComponent_1 = __importDefault(__webpack_require__(/*! ./components/testComponent */ "./resources/pages/components/testComponent.tsx"));
function home(_ref) {
  var testProp = _ref.testProp;
  return (0, jsx_runtime_1.jsx)(testComponent_1["default"], {
    testProp: testProp
  });
}
exports["default"] = home;

/***/ }),

/***/ "./resources/pages/profile.tsx":
/*!*************************************!*\
  !*** ./resources/pages/profile.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
function Profile(_ref) {
  var loggedInUser = _ref.loggedInUser,
    profileUser = _ref.profileUser,
    isViewingOwnProfile = _ref.isViewingOwnProfile;
  return (0, jsx_runtime_1.jsxs)("div", {
    children: [(0, jsx_runtime_1.jsx)("h1", {
      className: "text-4xl",
      children: "Profile"
    }), (0, jsx_runtime_1.jsxs)("p", {
      className: "text-xl",
      children: ["This is the profile page ", profileUser.username, ' ']
    }), (0, jsx_runtime_1.jsxs)("p", {
      className: "text-xl",
      children: ["You are logged in as ", loggedInUser.username, " "]
    }), (0, jsx_runtime_1.jsxs)("p", {
      className: "text-xl",
      children: ["IS VIEWING OWN PROFILE: ", isViewingOwnProfile ? 'true' : 'false', ' ']
    })]
  });
}
exports["default"] = Profile;

/***/ }),

/***/ "./resources/ts/ssr.tsx":
/*!******************************!*\
  !*** ./resources/ts/ssr.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
var server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ "react-dom/server"));
var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
function render(page) {
  return (0, inertia_react_1.createInertiaApp)({
    page: page,
    render: server_1["default"].renderToString,
    resolve: function resolve(name) {
      return __webpack_require__("./resources/pages sync recursive ^\\.\\/.*$")("./".concat(name));
    },
    setup: function setup(_ref) {
      var App = _ref.App,
        props = _ref.props;
      return (0, jsx_runtime_1.jsx)(App, _objectSpread({}, props));
    }
  });
}
exports["default"] = render;

/***/ }),

/***/ "./resources/pages sync recursive ^\\.\\/.*$":
/*!****************************************!*\
  !*** ./resources/pages/ sync ^\.\/.*$ ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./components/testComponent": "./resources/pages/components/testComponent.tsx",
	"./components/testComponent.tsx": "./resources/pages/components/testComponent.tsx",
	"./home": "./resources/pages/home.tsx",
	"./home.tsx": "./resources/pages/home.tsx",
	"./profile": "./resources/pages/profile.tsx",
	"./profile.tsx": "./resources/pages/profile.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "@inertiajs/inertia-react":
/*!*******************************************!*\
  !*** external "@inertiajs/inertia-react" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@inertiajs/inertia-react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module is referenced by other modules so it can't be inlined
/******/ var __webpack_exports__ = __webpack_require__("./resources/ts/ssr.tsx");
/******/ module.exports = __webpack_exports__;
/******/ 
