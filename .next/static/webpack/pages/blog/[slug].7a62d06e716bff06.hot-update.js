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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/functions */ \"./src/functions/index.ts\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n */ \"./src/i18n.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/SingleBlog.module.scss */ \"./src/styles/SingleBlog.module.scss\");\n/* harmony import */ var _styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst BlogDetail = ()=>{\n    _s();\n    const [blog, setBlog] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const language = _i18n__WEBPACK_IMPORTED_MODULE_4__[\"default\"] === null || _i18n__WEBPACK_IMPORTED_MODULE_4__[\"default\"] === void 0 ? void 0 : _i18n__WEBPACK_IMPORTED_MODULE_4__[\"default\"].language;\n    const { slug  } = router.query;\n    // useEffect(() => {\n    //   router.beforePopState((state) => {\n    //     state.options.scroll = false;\n    //     return true;\n    //   });\n    // }, [router]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getBlog)(slug, language, setBlog);\n    }, [\n        slug\n    ]);\n    const [blogText, setBlogText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [key, setKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    // useEffect(() => {\n    //   blog && setBlogText(JSON.parse(blog?.BlogText));\n    // }, [blog]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        blogText && setKey(Object.keys(blogText));\n    }, [\n        blogText\n    ]);\n    const handleNavigate = ()=>{\n        router.back();\n    };\n    console.log(blog.blogText);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleNavigate,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/icons/back icon.svg\",\n                    alt: \"back\"\n                }, void 0, false, {\n                    fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bigTitle),\n                children: blog === null || blog === void 0 ? void 0 : blog.Title\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().center),\n                children: moment__WEBPACK_IMPORTED_MODULE_5___default()(blog === null || blog === void 0 ? void 0 : blog.CreatedDateTime).locale(language).format(\"dddd, DD MMMM YYYY\")\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: blog === null || blog === void 0 ? void 0 : blog.CoverImageLocation,\n                alt: \"blog-image\",\n                className: (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().image)\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            key === null || key === void 0 ? void 0 : key.map((item)=>{\n                var _blogText_item;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: Array.isArray(blogText[item]) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().list),\n                        children: (_blogText_item = blogText[item]) === null || _blogText_item === void 0 ? void 0 : _blogText_item.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: item\n                            }, void 0, false, {\n                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (item === null || item === void 0 ? void 0 : item.includes(\"title\")) && (item === null || item === void 0 ? void 0 : item.includes(\"small\")) === false ? (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mediumTitle) : (item === null || item === void 0 ? void 0 : item.includes(\"title\")) && (item === null || item === void 0 ? void 0 : item.includes(\"small\")) ? (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().smallTitle) : (_styles_SingleBlog_module_scss__WEBPACK_IMPORTED_MODULE_6___default().text),\n                                children: blogText[item]\n                            }, void 0, false, {\n                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/blog/[slug].tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BlogDetail, \"+u7FOyE6jSYzAIXESR/MvVThGR4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = BlogDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogDetail);\nvar _c;\n$RefreshReg$(_c, \"BlogDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNGOzs7Ozs7Ozs7O2lDQUVKOzs7Ozs7Ozs7Ozs7O0FBS1g7R0F6RU1qQzs7UUFFV1Asa0RBQVNBOzs7S0FGcEJPO0FBMEVOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ibG9nL1tzbHVnXS50c3g/NTYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0QmxvZyB9IGZyb20gJ0AvZnVuY3Rpb25zJztcbmltcG9ydCBpMThuIGZyb20gJy4uLy4uL2kxOG4nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvU2luZ2xlQmxvZy5tb2R1bGUuc2Nzcyc7XG5jb25zdCBCbG9nRGV0YWlsID0gKCkgPT4ge1xuICBjb25zdCBbYmxvZywgc2V0QmxvZ10gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBsYW5ndWFnZSA9IGkxOG4/Lmxhbmd1YWdlO1xuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHJvdXRlci5iZWZvcmVQb3BTdGF0ZSgoc3RhdGUpID0+IHtcbiAgLy8gICAgIHN0YXRlLm9wdGlvbnMuc2Nyb2xsID0gZmFsc2U7XG4gIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgLy8gICB9KTtcbiAgLy8gfSwgW3JvdXRlcl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QmxvZyhzbHVnLCBsYW5ndWFnZSwgc2V0QmxvZyk7XG4gIH0sIFtzbHVnXSk7XG4gIGNvbnN0IFtibG9nVGV4dCwgc2V0QmxvZ1RleHRdID0gdXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBba2V5LCBzZXRLZXldID0gdXNlU3RhdGU8YW55PigpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGJsb2cgJiYgc2V0QmxvZ1RleHQoSlNPTi5wYXJzZShibG9nPy5CbG9nVGV4dCkpO1xuICAvLyB9LCBbYmxvZ10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGJsb2dUZXh0ICYmIHNldEtleShPYmplY3Qua2V5cyhibG9nVGV4dCkpO1xuICB9LCBbYmxvZ1RleHRdKTtcbiAgY29uc3QgaGFuZGxlTmF2aWdhdGUgPSAoKSA9PiB7XG4gICAgcm91dGVyLmJhY2soKTtcbiAgfTtcbiAgY29uc29sZS5sb2coYmxvZy5ibG9nVGV4dCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTmF2aWdhdGV9PlxuICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9iYWNrIGljb24uc3ZnXCIgYWx0PVwiYmFja1wiIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmlnVGl0bGV9PntibG9nPy5UaXRsZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyfT5cbiAgICAgICAge21vbWVudChibG9nPy5DcmVhdGVkRGF0ZVRpbWUpXG4gICAgICAgICAgLmxvY2FsZShsYW5ndWFnZSlcbiAgICAgICAgICAuZm9ybWF0KCdkZGRkLCBERCBNTU1NIFlZWVknKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9e2Jsb2c/LkNvdmVySW1hZ2VMb2NhdGlvbn1cbiAgICAgICAgYWx0PVwiYmxvZy1pbWFnZVwiXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfVxuICAgICAgLz5cbiAgICAgIDxiciAvPlxuICAgICAge2tleT8ubWFwKChpdGVtOiBhbnkpID0+IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShibG9nVGV4dFtpdGVtXSkgPyAoXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XG4gICAgICAgICAgICAgIHtibG9nVGV4dFtpdGVtXT8ubWFwKChpdGVtOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8bGk+e2l0ZW19PC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgIGl0ZW0/LmluY2x1ZGVzKCd0aXRsZScpICYmIGl0ZW0/LmluY2x1ZGVzKCdzbWFsbCcpID09PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICA/IHN0eWxlcy5tZWRpdW1UaXRsZVxuICAgICAgICAgICAgICAgICAgICA6IGl0ZW0/LmluY2x1ZGVzKCd0aXRsZScpICYmIGl0ZW0/LmluY2x1ZGVzKCdzbWFsbCcpXG4gICAgICAgICAgICAgICAgICAgID8gc3R5bGVzLnNtYWxsVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgOiBzdHlsZXMudGV4dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtibG9nVGV4dFtpdGVtXX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBCbG9nRGV0YWlsO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QmxvZyIsImkxOG4iLCJtb21lbnQiLCJzdHlsZXMiLCJCbG9nRGV0YWlsIiwiYmxvZyIsInNldEJsb2ciLCJyb3V0ZXIiLCJsYW5ndWFnZSIsInNsdWciLCJxdWVyeSIsImJsb2dUZXh0Iiwic2V0QmxvZ1RleHQiLCJrZXkiLCJzZXRLZXkiLCJPYmplY3QiLCJrZXlzIiwiaGFuZGxlTmF2aWdhdGUiLCJiYWNrIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwiYmlnVGl0bGUiLCJUaXRsZSIsImNlbnRlciIsIkNyZWF0ZWREYXRlVGltZSIsImxvY2FsZSIsImZvcm1hdCIsIkNvdmVySW1hZ2VMb2NhdGlvbiIsImltYWdlIiwiYnIiLCJtYXAiLCJpdGVtIiwiQXJyYXkiLCJpc0FycmF5IiwidWwiLCJsaXN0IiwibGkiLCJpbmNsdWRlcyIsIm1lZGl1bVRpdGxlIiwic21hbGxUaXRsZSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/blog/[slug].tsx\n"));

/***/ })

});