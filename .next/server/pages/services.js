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
exports.id = "pages/services";
exports.ids = ["pages/services"];
exports.modules = {

/***/ "./src/styles/Services.module.scss":
/*!*****************************************!*\
  !*** ./src/styles/Services.module.scss ***!
  \*****************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"video\": \"Services_video__aim7i\",\n\t\"img\": \"Services_img__noXzk\",\n\t\"wrapper\": \"Services_wrapper__COyje\",\n\t\"background\": \"Services_background__GXfy0\",\n\t\"center\": \"Services_center__F5ul9\",\n\t\"button\": \"Services_button__4UDCo\",\n\t\"box\": \"Services_box__MIyWv\",\n\t\"box2\": \"Services_box2__j5o6_\",\n\t\"text\": \"Services_text__22R7O\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL1NlcnZpY2VzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tsaW5pa3lhLWxhbmRpbmcvLi9zcmMvc3R5bGVzL1NlcnZpY2VzLm1vZHVsZS5zY3NzPzk1YzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidmlkZW9cIjogXCJTZXJ2aWNlc192aWRlb19fYWltN2lcIixcblx0XCJpbWdcIjogXCJTZXJ2aWNlc19pbWdfX25vWHprXCIsXG5cdFwid3JhcHBlclwiOiBcIlNlcnZpY2VzX3dyYXBwZXJfX0NPeWplXCIsXG5cdFwiYmFja2dyb3VuZFwiOiBcIlNlcnZpY2VzX2JhY2tncm91bmRfX0dYZnkwXCIsXG5cdFwiY2VudGVyXCI6IFwiU2VydmljZXNfY2VudGVyX19GNXVsOVwiLFxuXHRcImJ1dHRvblwiOiBcIlNlcnZpY2VzX2J1dHRvbl9fNFVEQ29cIixcblx0XCJib3hcIjogXCJTZXJ2aWNlc19ib3hfX01JeVd2XCIsXG5cdFwiYm94MlwiOiBcIlNlcnZpY2VzX2JveDJfX2o1bzZfXCIsXG5cdFwidGV4dFwiOiBcIlNlcnZpY2VzX3RleHRfXzIyUjdPXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/Services.module.scss\n");

/***/ }),

/***/ "./src/pages/services.tsx":
/*!********************************!*\
  !*** ./src/pages/services.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var _styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Services.module.scss */ \"./src/styles/Services.module.scss\");\n/* harmony import */ var _styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_1__]);\nreact_i18next__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Services = ()=>{\n    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        function handleResize() {\n            setWidth(window.innerWidth);\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(60);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        width < 768 && setNumber(100);\n    }, [\n        width\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().center),\n                children: t(\"htitle1\")\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().center),\n                children: t(\"htext1\")\n            }, void 0, false, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        src: \"/Klinikya_App_Launch_1.mp4\",\n                        width: `${number}%`,\n                        autoPlay: true,\n                        muted: true,\n                        loop: true,\n                        className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().video)\n                    }, void 0, false, {\n                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/icons/Vector 4.svg\",\n                        alt: \"\",\n                        className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().background)\n                    }, void 0, false, {\n                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/icons/Frame 25.svg\",\n                                        alt: \"\",\n                                        className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().img)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: t(\"htitle2\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: t(\"htext1\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box2),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/icons/Frame 30.svg\",\n                                        alt: \"\",\n                                        className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().img)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: t(\"htitle3\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: t(\"htext3\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/icons/Frame 22.svg\",\n                                        alt: \"\",\n                                        className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().img)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: t(\"htitle4\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: t(\"htext4\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box2),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/icons/Frame 27.svg\",\n                                        alt: \"\",\n                                        className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().img)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: t(\"htitle5\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: t(\"htext5\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/icons/Frame 23.svg\",\n                                        alt: \"\",\n                                        className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().img)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: t(\"htitle6\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: t(\"htext6\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box2),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/icons/Frame 21.svg\",\n                                        alt: \"\",\n                                        className: (_styles_Services_module_scss__WEBPACK_IMPORTED_MODULE_3___default().img)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                children: t(\"htitle7\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: t(\"htext7\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/esraakbulat/Klinikya-Landing-Next/src/pages/services.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDBFQUFXOztrREFDekIsOERBQUN5Qjt3Q0FBSUosS0FBSTt3Q0FBc0JLLEtBQUk7d0NBQUdYLFdBQVdmLHlFQUFVOzs7Ozs7a0RBQzNELDhEQUFDYzs7MERBQ0MsOERBQUNpQjswREFBSTNCLEVBQUU7Ozs7OzswREFDUCw4REFBQ2U7MERBQUdmLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQjtBQUNBLGlFQUFlRCxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2xpbmlreWEtbGFuZGluZy8uL3NyYy9wYWdlcy9zZXJ2aWNlcy50c3g/MDA5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvU2VydmljZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGU8YW55PigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICB9LCBbXSk7XG4gIGNvbnN0IFtudW1iZXIsIHNldE51bWJlcl0gPSB1c2VTdGF0ZTxhbnk+KDYwKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aWR0aCA8IDc2OCAmJiBzZXROdW1iZXIoMTAwKTtcbiAgfSwgW3dpZHRoXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJ9Pnt0KCdodGl0bGUxJyl9PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+e3QoJ2h0ZXh0MScpfTwvcD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDx2aWRlb1xuICAgICAgICAgIHNyYz1cIi9LbGluaWt5YV9BcHBfTGF1bmNoXzEubXA0XCJcbiAgICAgICAgICB3aWR0aD17YCR7bnVtYmVyfSVgfVxuICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgbXV0ZWRcbiAgICAgICAgICBsb29wXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudmlkZW99XG4gICAgICAgID48L3ZpZGVvPlxuICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9WZWN0b3IgNC5zdmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfSAvPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9GcmFtZSAyNS5zdmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+e3QoJ2h0aXRsZTInKX08L2gyPlxuICAgICAgICAgICAgICA8cD57dCgnaHRleHQxJyl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3gyfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL0ZyYW1lIDMwLnN2Z1wiIGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMj57dCgnaHRpdGxlMycpfTwvaDI+XG4gICAgICAgICAgICAgIDxwPnt0KCdodGV4dDMnKX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9GcmFtZSAyMi5zdmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+e3QoJ2h0aXRsZTQnKX08L2gyPlxuICAgICAgICAgICAgICA8cD57dCgnaHRleHQ0Jyl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3gyfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL0ZyYW1lIDI3LnN2Z1wiIGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMj57dCgnaHRpdGxlNScpfTwvaDI+XG4gICAgICAgICAgICAgIDxwPnt0KCdodGV4dDUnKX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pY29ucy9GcmFtZSAyMy5zdmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+e3QoJ2h0aXRsZTYnKX08L2gyPlxuICAgICAgICAgICAgICA8cD57dCgnaHRleHQ2Jyl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3gyfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL0ZyYW1lIDIxLnN2Z1wiIGFsdD1cIlwiIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMj57dCgnaHRpdGxlNycpfTwvaDI+XG4gICAgICAgICAgICAgIDxwPnt0KCdodGV4dDcnKX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XG4iXSwibmFtZXMiOlsidXNlVHJhbnNsYXRpb24iLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlcnZpY2VzIiwidCIsIndpZHRoIiwic2V0V2lkdGgiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwiaDEiLCJjZW50ZXIiLCJwIiwidmlkZW8iLCJzcmMiLCJhdXRvUGxheSIsIm11dGVkIiwibG9vcCIsImltZyIsImFsdCIsImJhY2tncm91bmQiLCJzZWN0aW9uIiwibWFpbiIsImJveCIsImgyIiwiYm94MiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/services.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-i18next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/services.tsx"));
module.exports = __webpack_exports__;

})();