"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const uploadFile = async (e)=>{\n        e.preventDefault();\n        const formData = new FormData();\n        formData.append(\"file\", file);\n        const headers = {\n            X_API_KEY: \"\",\n            X_ROUTE_NAME: \"\",\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        };\n        const data = await (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            method: \"post\",\n            headers: headers,\n            url: \"http://3.81.11.234:8000/client\",\n            data: formData\n        });\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App d-flex flex-column justify-content-center align-items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: uploadFile,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"formFile\",\n                            className: \"form-label\",\n                            children: \"Default file input example\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/vetacloud/integrations/next.js/pages/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: (e)=>setFile(e.target.files[0]),\n                            className: \"form-control\",\n                            type: \"file\",\n                            id: \"formFile\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Desktop/vetacloud/integrations/next.js/pages/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mac/Desktop/vetacloud/integrations/next.js/pages/index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-primary\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Desktop/vetacloud/integrations/next.js/pages/index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mac/Desktop/vetacloud/integrations/next.js/pages/index.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Desktop/vetacloud/integrations/next.js/pages/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Nkb8eHkBruGouXteoqeZ1R6wRVk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFaUM7QUFDUjtBQUVWLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFFakMsTUFBTUssYUFBYSxPQUFPQztRQUN4QkEsRUFBRUM7UUFFRixNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxPQUFPLFFBQVFQO1FBRXhCLE1BQU1RLFVBQVU7WUFDZEMsV0FBVztZQUNYQyxjQUFjO1lBQ2QsZ0JBQWdCO1FBQ2xCO1FBRUEsTUFBTUMsT0FBTyxNQUFNYixpREFBS0EsQ0FBQztZQUN2QmMsUUFBUTtZQUNSSixTQUFTQTtZQUNUSyxLQUFLO1lBQ0xGLE1BQU1OO1FBQ1I7UUFDQVMsUUFBUUMsSUFBSUo7SUFDZDtJQUVBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFLQyxVQUFVakI7OzhCQUNkLDhEQUFDYztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFNQyxTQUFROzRCQUFXSixXQUFVO3NDQUFhOzs7Ozs7c0NBR2pELDhEQUFDSzs0QkFDQ0MsVUFBVSxDQUFDcEIsSUFBTUYsUUFBUUUsRUFBRXFCLE9BQU9DLEtBQUssQ0FBQyxFQUFFOzRCQUMxQ1IsV0FBVTs0QkFDVlMsTUFBSzs0QkFDTEMsSUFBRzs7Ozs7Ozs7Ozs7OzhCQUdQLDhEQUFDQztvQkFBT1gsV0FBVTs4QkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVDO0dBMUN3QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCB1cGxvYWRGaWxlID0gYXN5bmMgKGU6IGFueSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICBYX0FQSV9LRVk6IFwiXCIsXG4gICAgICBYX1JPVVRFX05BTUU6IFwiXCIsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgIH07XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgdXJsOiBcImh0dHA6Ly8zLjgxLjExLjIzNDo4MDAwL2NsaWVudFwiLFxuICAgICAgZGF0YTogZm9ybURhdGFcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cbiAgICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCBkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXt1cGxvYWRGaWxlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmb3JtRmlsZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgIERlZmF1bHQgZmlsZSBpbnB1dCBleGFtcGxlXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RmlsZShlLnRhcmdldC5maWxlc1swXSBhcyBhbnkpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGlkPVwiZm9ybUZpbGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJIb21lIiwiZmlsZSIsInNldEZpbGUiLCJ1cGxvYWRGaWxlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImhlYWRlcnMiLCJYX0FQSV9LRVkiLCJYX1JPVVRFX05BTUUiLCJkYXRhIiwibWV0aG9kIiwidXJsIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJmaWxlcyIsInR5cGUiLCJpZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});