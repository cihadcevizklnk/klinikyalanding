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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/functions */ \"./src/functions/index.ts\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n */ \"./src/i18n.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/SingleBlog.module.scss */ \"./src/styles/SingleBlog.module.scss\");\n/* harmony import */ var _styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst BlogDetail = ()=>{\n    _s();\n    const [blog, setBlog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const language = _i18n__WEBPACK_IMPORTED_MODULE_4__[\"default\"] === null || _i18n__WEBPACK_IMPORTED_MODULE_4__[\"default\"] === void 0 ? void 0 : _i18n__WEBPACK_IMPORTED_MODULE_4__[\"default\"].language;\n    const { slug  } = router.query;\n    // useEffect(() => {\n    //   router.beforePopState((state) => {\n    //     state.options.scroll = false;\n    //     return true;\n    //   });\n    // }, [router]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getBlog)(slug, language, setBlog);\n    }, [\n        slug\n    ]);\n    const [blogText, setBlogText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [key, setKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        blog && setBlogText(JSON.parse(blog === null || blog === void 0 ? void 0 : blog.BlogText));\n    }, [\n        blog\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        blogText && setKey(Object.keys(blogText));\n    }, [\n        blogText\n    ]);\n    const handleNavigate = ()=>{\n        router.back();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNavigate,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/icons/back icon.svg\",\n                    alt: \"back\"\n                }, void 0, false, {\n                    fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bigTitle),\n                children: blog === null || blog === void 0 ? void 0 : blog.Title\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().center),\n                children: moment__WEBPACK_IMPORTED_MODULE_5___default()(blog === null || blog === void 0 ? void 0 : blog.CreatedDateTime).locale(language).format(\"dddd, DD MMMM YYYY\")\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: blog === null || blog === void 0 ? void 0 : blog.CoverImageLocation,\n                alt: \"blog-image\",\n                className: (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().image)\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            key === null || key === void 0 ? void 0 : key.map((item)=>{\n                var _blogText_item;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: Array.isArray(blogText[item]) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().list),\n                        children: (_blogText_item = blogText[item]) === null || _blogText_item === void 0 ? void 0 : _blogText_item.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: item\n                            }, void 0, false, {\n                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (item === null || item === void 0 ? void 0 : item.includes(\"title\")) && (item === null || item === void 0 ? void 0 : item.includes(\"small\")) === false ? (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mediumTitle) : (item === null || item === void 0 ? void 0 : item.includes(\"title\")) && (item === null || item === void 0 ? void 0 : item.includes(\"small\")) ? (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().smallTitle) : (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),\n                                children: blogText[item]\n                            }, void 0, false, {\n                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BlogDetail, \"dIKt0JaREWwXB/1AOK8M1GDH3WM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = BlogDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogDetail);\nvar _c;\n$RefreshReg$(_c, \"BlogDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkEsNEVBQVc7MENBR2hCUSxRQUFRLENBQUM2QixLQUFLOzs7Ozs7MENBRWpCLDhEQUFDRjs7Ozs7Ozs7OztpQ0FFSjs7Ozs7Ozs7Ozs7OztBQUtYO0dBekVNbEM7O1FBRVdQLGtEQUFTQTs7O0tBRnBCTztBQTBFTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYmxvZy9bc2x1Z10udHN4PzU2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEJsb2cgfSBmcm9tICdAL2Z1bmN0aW9ucyc7XG5pbXBvcnQgaTE4biBmcm9tICcuLi8uLi9pMThuJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1NpbmdsZUJsb2cubW9kdWxlLnNjc3MnO1xuY29uc3QgQmxvZ0RldGFpbCA9ICgpID0+IHtcbiAgY29uc3QgW2Jsb2csIHNldEJsb2ddID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgbGFuZ3VhZ2UgPSBpMThuPy5sYW5ndWFnZTtcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICByb3V0ZXIuYmVmb3JlUG9wU3RhdGUoKHN0YXRlKSA9PiB7XG4gIC8vICAgICBzdGF0ZS5vcHRpb25zLnNjcm9sbCA9IGZhbHNlO1xuICAvLyAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgfSk7XG4gIC8vIH0sIFtyb3V0ZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEJsb2coc2x1ZywgbGFuZ3VhZ2UsIHNldEJsb2cpO1xuICB9LCBbc2x1Z10pO1xuICBjb25zdCBbYmxvZ1RleHQsIHNldEJsb2dUZXh0XSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBibG9nICYmIHNldEJsb2dUZXh0KEpTT04ucGFyc2UoYmxvZz8uQmxvZ1RleHQpKTtcbiAgfSwgW2Jsb2ddKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBibG9nVGV4dCAmJiBzZXRLZXkoT2JqZWN0LmtleXMoYmxvZ1RleHQpKTtcbiAgfSwgW2Jsb2dUZXh0XSk7XG4gIGNvbnN0IGhhbmRsZU5hdmlnYXRlID0gKCkgPT4ge1xuICAgIHJvdXRlci5iYWNrKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOYXZpZ2F0ZX0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2JhY2sgaWNvbi5zdmdcIiBhbHQ9XCJiYWNrXCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iaWdUaXRsZX0+e2Jsb2c/LlRpdGxlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9PlxuICAgICAgICB7bW9tZW50KGJsb2c/LkNyZWF0ZWREYXRlVGltZSlcbiAgICAgICAgICAubG9jYWxlKGxhbmd1YWdlKVxuICAgICAgICAgIC5mb3JtYXQoJ2RkZGQsIEREIE1NTU0gWVlZWScpfVxuICAgICAgPC9kaXY+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17YmxvZz8uQ292ZXJJbWFnZUxvY2F0aW9ufVxuICAgICAgICBhbHQ9XCJibG9nLWltYWdlXCJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XG4gICAgICAvPlxuICAgICAgPGJyIC8+XG4gICAgICB7a2V5Py5tYXAoKGl0ZW06IGFueSkgPT4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtBcnJheS5pc0FycmF5KGJsb2dUZXh0W2l0ZW1dKSA/IChcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cbiAgICAgICAgICAgICAge2Jsb2dUZXh0W2l0ZW1dPy5tYXAoKGl0ZW06IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaT57aXRlbX08L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgaXRlbT8uaW5jbHVkZXMoJ3RpdGxlJykgJiYgaXRlbT8uaW5jbHVkZXMoJ3NtYWxsJykgPT09IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgID8gc3R5bGVzLm1lZGl1bVRpdGxlXG4gICAgICAgICAgICAgICAgICAgIDogaXRlbT8uaW5jbHVkZXMoJ3RpdGxlJykgJiYgaXRlbT8uaW5jbHVkZXMoJ3NtYWxsJylcbiAgICAgICAgICAgICAgICAgICAgPyBzdHlsZXMuc21hbGxUaXRsZVxuICAgICAgICAgICAgICAgICAgICA6IHN0eWxlcy50ZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Jsb2dUZXh0W2l0ZW1dfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEJsb2dEZXRhaWw7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRCbG9nIiwiaTE4biIsIm1vbWVudCIsInN0eWxlcyIsIkJsb2dEZXRhaWwiLCJibG9nIiwic2V0QmxvZyIsInJvdXRlciIsImxhbmd1YWdlIiwic2x1ZyIsInF1ZXJ5IiwiYmxvZ1RleHQiLCJzZXRCbG9nVGV4dCIsImtleSIsInNldEtleSIsIkpTT04iLCJwYXJzZSIsIkJsb2dUZXh0IiwiT2JqZWN0Iiwia2V5cyIsImhhbmRsZU5hdmlnYXRlIiwiYmFjayIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwiYmlnVGl0bGUiLCJUaXRsZSIsImNlbnRlciIsIkNyZWF0ZWREYXRlVGltZSIsImxvY2FsZSIsImZvcm1hdCIsIkNvdmVySW1hZ2VMb2NhdGlvbiIsImltYWdlIiwiYnIiLCJtYXAiLCJpdGVtIiwiQXJyYXkiLCJpc0FycmF5IiwidWwiLCJsaXN0IiwibGkiLCJpbmNsdWRlcyIsIm1lZGl1bVRpdGxlIiwic21hbGxUaXRsZSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/blog/[slug].tsx\n"));

/***/ })

});