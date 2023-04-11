"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/[slug]",{

/***/ "./src/pages/blog/[slug].tsx":
/*!***********************************!*\
  !*** ./src/pages/blog/[slug].tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/functions */ \"./src/functions/index.ts\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n */ \"./src/pages/i18n.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst BlogDetail = ()=>{\n    _s();\n    const [blog, setBlog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const language = _i18n__WEBPACK_IMPORTED_MODULE_4__[\"default\"] === null || _i18n__WEBPACK_IMPORTED_MODULE_4__[\"default\"] === void 0 ? void 0 : _i18n__WEBPACK_IMPORTED_MODULE_4__[\"default\"].language;\n    const { slug  } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getBlog)(slug, language, setBlog);\n    }, [\n        slug\n    ]);\n    const [blogText, setBlogText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        blog && setBlogText(JSON.parse(blog === null || blog === void 0 ? void 0 : blog.BlogText));\n    }, [\n        blog\n    ]);\n    console.log(blogText);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: blog === null || blog === void 0 ? void 0 : blog.Title\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: moment__WEBPACK_IMPORTED_MODULE_5___default()(blog === null || blog === void 0 ? void 0 : blog.CreatedDateTime).locale(language).format(\"dddd, DD MMMM YYYY\")\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: blog === null || blog === void 0 ? void 0 : blog.CoverImageLocation,\n                alt: \"blog-image\"\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: blogText === null || blogText === void 0 ? void 0 : blogText.title\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: blogText === null || blogText === void 0 ? void 0 : blogText.shortText\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: blogText === null || blogText === void 0 ? void 0 : blogText.title1\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: blogText === null || blogText === void 0 ? void 0 : blogText.text1\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BlogDetail, \"et1fIPLq5DqQjO9I0TidIQhYvCY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = BlogDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogDetail);\nvar _c;\n$RefreshReg$(_c, \"BlogDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9bc2x1Z10udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUNOO0FBQ1g7QUFDQztBQUM1QixNQUFNTSxhQUFhLElBQU07O0lBQ3ZCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUE7SUFDaEMsTUFBTU8sU0FBU1Qsc0RBQVNBO0lBQ3hCLE1BQU1VLFdBQVdOLDZDQUFJQSxhQUFKQSw2Q0FBSUEsY0FBSkEsS0FBQUEsSUFBQUEsc0RBQWM7SUFDL0IsTUFBTSxFQUFFTyxLQUFJLEVBQUUsR0FBR0YsT0FBT0csS0FBSztJQUM3QlgsZ0RBQVNBLENBQUMsSUFBTTtRQUNkRSxtREFBT0EsQ0FBQ1EsTUFBTUQsVUFBVUY7SUFDMUIsR0FBRztRQUFDRztLQUFLO0lBQ1QsTUFBTSxDQUFDRSxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQTtJQUN4Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkTSxRQUFRTyxZQUFZQyxLQUFLQyxLQUFLLENBQUNULGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVUsUUFBUTtJQUMvQyxHQUFHO1FBQUNWO0tBQUs7SUFDVFcsUUFBUUMsR0FBRyxDQUFDTjtJQUNaLHFCQUNFLDhEQUFDTzs7MEJBQ0MsOERBQUNBOzBCQUFLYixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1jLEtBQUs7Ozs7OzswQkFDakIsOERBQUNEOzBCQUNFZiw2Q0FBTUEsQ0FBQ0UsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNZSxlQUFlLEVBQzFCQyxNQUFNLENBQUNiLFVBQ1BjLE1BQU0sQ0FBQzs7Ozs7OzBCQUVaLDhEQUFDQztnQkFBSUMsS0FBS25CLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTW9CLGtCQUFrQjtnQkFBRUMsS0FBSTs7Ozs7OzBCQUN4Qyw4REFBQ1I7MEJBQUtQLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVWdCLEtBQUs7Ozs7OzswQkFDckIsOERBQUNUOzBCQUFLUCxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVpQixTQUFTOzs7Ozs7MEJBQ3pCLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNYOzBCQUFLUCxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVtQixNQUFNOzs7Ozs7MEJBQ3RCLDhEQUFDWjswQkFBS1AscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVb0IsS0FBSzs7Ozs7Ozs7Ozs7O0FBRzNCO0dBN0JNM0I7O1FBRVdOLGtEQUFTQTs7O0tBRnBCTTtBQThCTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYmxvZy9bc2x1Z10udHN4PzU2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEJsb2cgfSBmcm9tICdAL2Z1bmN0aW9ucyc7XG5pbXBvcnQgaTE4biBmcm9tICcuLi9pMThuJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmNvbnN0IEJsb2dEZXRhaWwgPSAoKSA9PiB7XG4gIGNvbnN0IFtibG9nLCBzZXRCbG9nXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGxhbmd1YWdlID0gaTE4bj8ubGFuZ3VhZ2U7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEJsb2coc2x1ZywgbGFuZ3VhZ2UsIHNldEJsb2cpO1xuICB9LCBbc2x1Z10pO1xuICBjb25zdCBbYmxvZ1RleHQsIHNldEJsb2dUZXh0XSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBibG9nICYmIHNldEJsb2dUZXh0KEpTT04ucGFyc2UoYmxvZz8uQmxvZ1RleHQpKTtcbiAgfSwgW2Jsb2ddKTtcbiAgY29uc29sZS5sb2coYmxvZ1RleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PntibG9nPy5UaXRsZX08L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHttb21lbnQoYmxvZz8uQ3JlYXRlZERhdGVUaW1lKVxuICAgICAgICAgIC5sb2NhbGUobGFuZ3VhZ2UpXG4gICAgICAgICAgLmZvcm1hdCgnZGRkZCwgREQgTU1NTSBZWVlZJyl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWcgc3JjPXtibG9nPy5Db3ZlckltYWdlTG9jYXRpb259IGFsdD1cImJsb2ctaW1hZ2VcIiAvPlxuICAgICAgPGRpdj57YmxvZ1RleHQ/LnRpdGxlfTwvZGl2PlxuICAgICAgPGRpdj57YmxvZ1RleHQ/LnNob3J0VGV4dH08L2Rpdj5cbiAgICAgIDxiciAvPlxuICAgICAgPGRpdj57YmxvZ1RleHQ/LnRpdGxlMX08L2Rpdj5cbiAgICAgIDxkaXY+e2Jsb2dUZXh0Py50ZXh0MX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBCbG9nRGV0YWlsO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QmxvZyIsImkxOG4iLCJtb21lbnQiLCJCbG9nRGV0YWlsIiwiYmxvZyIsInNldEJsb2ciLCJyb3V0ZXIiLCJsYW5ndWFnZSIsInNsdWciLCJxdWVyeSIsImJsb2dUZXh0Iiwic2V0QmxvZ1RleHQiLCJKU09OIiwicGFyc2UiLCJCbG9nVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJUaXRsZSIsIkNyZWF0ZWREYXRlVGltZSIsImxvY2FsZSIsImZvcm1hdCIsImltZyIsInNyYyIsIkNvdmVySW1hZ2VMb2NhdGlvbiIsImFsdCIsInRpdGxlIiwic2hvcnRUZXh0IiwiYnIiLCJ0aXRsZTEiLCJ0ZXh0MSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog/[slug].tsx\n"));

/***/ })

});