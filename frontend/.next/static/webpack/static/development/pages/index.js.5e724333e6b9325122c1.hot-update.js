webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MainNav.js":
/*!*******************************!*\
  !*** ./components/MainNav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\nvar _jsxFileName = \"/Users/mwashburn/dev/react-cms/frontend/components/MainNav.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction MainNav(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var toggle = function toggle() {\n    return setIsOpen(!isOpen);\n  };\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"], {\n    color: \"light\",\n    light: true,\n    expand: \"md\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavbarBrand\"], {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, \"Mike's Bait and Tackle\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavbarToggler\"], {\n    onClick: toggle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Collapse\"], {\n    isOpen: isOpen,\n    navbar: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"], {\n    className: \"ml-auto\",\n    navbar: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 15\n    }\n  }, \"Home\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavItem\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    href: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  }, \"Store\"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavbarText\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, \"Simple Text\"))));\n}\n\n_s(MainNav, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n\n_c = MainNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNav);\n\nvar _c;\n\n$RefreshReg$(_c, \"MainNav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW5OYXYuanM/N2MwNCJdLCJuYW1lcyI6WyJNYWluTmF2IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQWVBLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXVCO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUMsS0FBRCxDQURmO0FBQUEsTUFDZEMsTUFEYztBQUFBLE1BQ05DLFNBRE07O0FBRXJCLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsV0FBTUQsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLEdBQWY7O0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFRLFNBQUssRUFBQyxPQUFkO0FBQXNCLFNBQUssTUFBM0I7QUFBNEIsVUFBTSxFQUFDLElBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQWEsUUFBSSxFQUFDLEdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsRUFFRSxNQUFDLHdEQUFEO0FBQWUsV0FBTyxFQUFFRSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLG1EQUFEO0FBQVUsVUFBTSxFQUFFRixNQUFsQjtBQUEwQixVQUFNLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsVUFBTSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFTLFFBQUksRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURGLEVBSUUsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFTLFFBQUksRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQUpGLENBREYsRUFTRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEYsQ0FIRixDQURGLENBREY7QUFtQkQ7O0dBdkJRSCxPOztLQUFBQSxPO0FBeUJNQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFpbk5hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIENvbGxhcHNlLFxuICBOYXZiYXIsXG4gIE5hdmJhclRvZ2dsZXIsXG4gIE5hdmJhckJyYW5kLFxuICBOYXYsXG4gIE5hdkl0ZW0sXG4gIE5hdkxpbmssXG4gIFVuY29udHJvbGxlZERyb3Bkb3duLFxuICBEcm9wZG93blRvZ2dsZSxcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bkl0ZW0sXG4gIE5hdmJhclRleHRcbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmZ1bmN0aW9uIE1haW5OYXYocHJvcHMpe1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdmJhciBjb2xvcj1cImxpZ2h0XCIgbGlnaHQgZXhwYW5kPVwibWRcIj5cbiAgICAgICAgPE5hdmJhckJyYW5kIGhyZWY9XCIvXCI+TWlrZSdzIEJhaXQgYW5kIFRhY2tsZTwvTmF2YmFyQnJhbmQ+XG4gICAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cbiAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCIgbmF2YmFyPlxuICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTmF2TGluaz5cbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiI1wiPlN0b3JlPC9OYXZMaW5rPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDxOYXZiYXJUZXh0PlNpbXBsZSBUZXh0PC9OYXZiYXJUZXh0PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgPC9OYXZiYXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5OYXY7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MainNav.js\n");

/***/ })

})