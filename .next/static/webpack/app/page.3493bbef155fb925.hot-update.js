"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./Components/Home/Glance/Components/Left.jsx":
/*!****************************************************!*\
  !*** ./Components/Home/Glance/Components/Left.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Assets_Images_Glance_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Assets/Images/Glance/1.png */ \"(app-pages-browser)/./Assets/Images/Glance/1.png\");\n/* harmony import */ var _Assets_Images_Glance_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Assets/Images/Glance/2.png */ \"(app-pages-browser)/./Assets/Images/Glance/2.png\");\n/* harmony import */ var _Assets_Images_Glance_3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Assets/Images/Glance/3.png */ \"(app-pages-browser)/./Assets/Images/Glance/3.png\");\n/* harmony import */ var _Assets_Images_Glance_4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Assets/Images/Glance/4.png */ \"(app-pages-browser)/./Assets/Images/Glance/4.png\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  .left {\\n    width: 100%;\\n    height: 90vh;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    gap: 1rem;\\n    background: #eeeeee50;\\n    backdrop-filter: blur(20px);\\n    padding: 1rem;\\n    border-radius: 40px;\\n    place-items: center;\\n\\n    @media screen and (max-width: 1024px) {\\n        grid-template-columns: 1fr;\\n        grid-template-rows: 1fr 1fr 1fr 1fr;\\n    }\\n\\n    @media screen and (max-width: 768px) {\\n      grid-template-columns: 1fr;\\n      grid-template-rows: 1fr 1fr 1fr 1fr;\\n      min-height: 90vh;\\n      height: 100%;\\n    }\\n\\n    .comp {\\n      width: 100%;\\n      height: 40vh;\\n      overflow-x: hidden;\\n      overflow-y: scroll;\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: flex-start;\\n      align-items: flex-start;\\n      padding: 1rem;\\n      gap: 1rem;\\n      border-radius: 30px;\\n      backdrop-filter: blur(20px);\\n      -webkit-backdrop-filter: blur(20px);\\n      transition: transform 0.5s ease-in-out;\\n      transform: scale(1);\\n      perspective: 1000;\\n\\n      @media screen and (max-width: 1024px) {\\n        min-height: 10vh;\\n        height: 100%;\\n      }\\n\\n      &::-webkit-scrollbar {\\n        width: 0;\\n      }\\n\\n      &:hover {\\n        transform: scale(1.05);\\n      }\\n\\n      img {\\n        width: 4rem;\\n        height: 4rem;\\n        object-fit: cover;\\n        border-radius: 100px;\\n        background: #ffffff70;\\n        backdrop-filter: blur(20px);\\n        padding: 1rem;\\n      }\\n\\n      h1 {\\n        font-size: var(--heading-small);\\n        font-weight: 600;\\n        font-family: var(--bold);\\n        color: var(--text-color);\\n      }\\n\\n      p {\\n        font-size: var(--para-mini);\\n        font-weight: 400;\\n        font-family: var(--light-font);\\n        color: var(--text-grey);\\n      }\\n    }\\n\\n    .first {\\n      background: #5195f930;\\n    }\\n\\n    .second {\\n      background: #8e52ff30;\\n    }\\n\\n    .third {\\n      background: #ff5a9b30;\\n    }\\n\\n    .fourth {\\n      background: #ff914b30;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\n\n\nconst GlanceLeftContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n_c = GlanceLeftContainer;\nconst upVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1,\n            ease: \"easeInOut\",\n            stiffness: 100,\n            damping: 15\n        }\n    }\n};\nfunction Left() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlanceLeftContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"left\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                    variants: upVariants,\n                    initial: \"hidden\",\n                    whileInView: \"visible\",\n                    className: \"first comp\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _Assets_Images_Glance_1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            alt: \"25000+ Pincodes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 135,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"29K+ Pincodes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 136,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"With a network spanning over 29,000 pincodes across the country, we ensure that your shipments reach every nook and corner of India, making us your reliable logistics partner for nationwide delivery.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                    variants: upVariants,\n                    initial: \"hidden\",\n                    whileInView: \"visible\",\n                    className: \"second comp\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _Assets_Images_Glance_2_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            alt: \"25000+ Pincodes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 149,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"25K+ Shipping Partner\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 150,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Our collaboration with 25+ shipping partners allows us to offer a diverse range of shipping solutions tailored to your specific needs. Whether it's speed, cost-efficiency, or specialized handling, we've got you covered.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 151,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                    lineNumber: 143,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                    variants: upVariants,\n                    initial: \"hidden\",\n                    whileInView: \"visible\",\n                    className: \"third comp\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _Assets_Images_Glance_3_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            alt: \"25000+ Pincodes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 164,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"20k+ Sellers\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 165,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Join a thriving community of over 20,000 sellers who trust our logistics services to deliver their products seamlessly. We empower businesses of all sizes to scale and grow with confidence.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 166,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                    lineNumber: 158,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                    variants: upVariants,\n                    initial: \"hidden\",\n                    whileInView: \"visible\",\n                    className: \"fourth comp\",\n                    transition: {\n                        delay: 0.3\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _Assets_Images_Glance_4_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                            alt: \"25000+ Pincodes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 181,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"50K+ Daily Shipment\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 182,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"With a staggering 50,000+ shipments dispatched daily, our logistical prowess ensures your goods are on the move efficiently. Experience the ease of managing your shipping needs with us.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 183,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                    lineNumber: 172,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n            lineNumber: 128,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n        lineNumber: 127,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Left;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Left);\nvar _c, _c1;\n$RefreshReg$(_c, \"GlanceLeftContainer\");\n$RefreshReg$(_c1, \"Left\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvSG9tZS9HbGFuY2UvQ29tcG9uZW50cy9MZWZ0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTDtBQUNhO0FBQ1M7QUFDQTtBQUNBO0FBQ0E7QUFDVDtBQUV2QyxNQUFNUSxzQkFBc0JOLHlEQUFNQSxDQUFDTyxHQUFHO0tBQWhDRDtBQW9HTixNQUFNRSxhQUFhO0lBQ2pCQyxRQUFRO1FBQUVDLFNBQVM7UUFBR0MsR0FBRztJQUFHO0lBQzVCQyxTQUFTO1FBQ1BGLFNBQVM7UUFDVEMsR0FBRztRQUNIRSxZQUFZO1lBQ1ZDLFVBQVU7WUFDVkMsTUFBTTtZQUNOQyxXQUFXO1lBQ1hDLFNBQVM7UUFDWDtJQUNGO0FBQ0Y7QUFHQSxTQUFTQztJQUNQLHFCQUNFLDhEQUFDWjtrQkFDQyw0RUFBQ0M7WUFBSVksV0FBVTs7OEJBQ2IsOERBQUNkLGlEQUFNQSxDQUFDRSxHQUFHO29CQUNUYSxVQUFVWjtvQkFDVmEsU0FBUTtvQkFDUkMsYUFBWTtvQkFDWkgsV0FBVTs7c0NBRVYsOERBQUNyQixtREFBS0E7NEJBQUN5QixLQUFLdEIsbUVBQUlBOzRCQUFFdUIsS0FBSTs7Ozs7O3NDQUN0Qiw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7c0NBQUU7Ozs7Ozs7Ozs7Ozs4QkFNTCw4REFBQ3JCLGlEQUFNQSxDQUFDRSxHQUFHO29CQUNUYSxVQUFVWjtvQkFDVmEsU0FBUTtvQkFDUkMsYUFBWTtvQkFDWkgsV0FBVTs7c0NBRVYsOERBQUNyQixtREFBS0E7NEJBQUN5QixLQUFLckIsbUVBQUlBOzRCQUFFc0IsS0FBSTs7Ozs7O3NDQUN0Qiw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7c0NBQUU7Ozs7Ozs7Ozs7Ozs4QkFPTCw4REFBQ3JCLGlEQUFNQSxDQUFDRSxHQUFHO29CQUNUYSxVQUFVWjtvQkFDVmEsU0FBUTtvQkFDUkMsYUFBWTtvQkFDWkgsV0FBVTs7c0NBRVYsOERBQUNyQixtREFBS0E7NEJBQUN5QixLQUFLcEIsbUVBQUlBOzRCQUFFcUIsS0FBSTs7Ozs7O3NDQUN0Qiw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7c0NBQUU7Ozs7Ozs7Ozs7Ozs4QkFNTCw4REFBQ3JCLGlEQUFNQSxDQUFDRSxHQUFHO29CQUNUYSxVQUFVWjtvQkFDVmEsU0FBUTtvQkFDUkMsYUFBWTtvQkFDWkgsV0FBVTtvQkFDVk4sWUFBWTt3QkFDVmMsT0FBTztvQkFDVDs7c0NBRUEsOERBQUM3QixtREFBS0E7NEJBQUN5QixLQUFLbkIsbUVBQUlBOzRCQUFFb0IsS0FBSTs7Ozs7O3NDQUN0Qiw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2I7TUFuRVNSO0FBcUVULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvSG9tZS9HbGFuY2UvQ29tcG9uZW50cy9MZWZ0LmpzeD84NzQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBpbWcxIGZyb20gXCJAL0Fzc2V0cy9JbWFnZXMvR2xhbmNlLzEucG5nXCI7XHJcbmltcG9ydCBpbWcyIGZyb20gXCJAL0Fzc2V0cy9JbWFnZXMvR2xhbmNlLzIucG5nXCI7XHJcbmltcG9ydCBpbWczIGZyb20gXCJAL0Fzc2V0cy9JbWFnZXMvR2xhbmNlLzMucG5nXCI7XHJcbmltcG9ydCBpbWc0IGZyb20gXCJAL0Fzc2V0cy9JbWFnZXMvR2xhbmNlLzQucG5nXCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jb25zdCBHbGFuY2VMZWZ0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlNTA7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbXAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0MHZoO1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgZ2FwOiAxcmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgcGVyc3BlY3RpdmU6IDEwMDA7XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMHZoO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzA7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctc21hbGwpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJvbGQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXJhLW1pbmkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWxpZ2h0LWZvbnQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWdyZXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpcnN0IHtcclxuICAgICAgYmFja2dyb3VuZDogIzUxOTVmOTMwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjOGU1MmZmMzA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRoaXJkIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmNWE5YjMwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3VydGgge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmY5MTRiMzA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdXBWYXJpYW50cyA9IHtcclxuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogNTAgfSxcclxuICB2aXNpYmxlOiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgeTogMCxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXHJcbiAgICAgIHN0aWZmbmVzczogMTAwLFxyXG4gICAgICBkYW1waW5nOiAxNSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBMZWZ0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8R2xhbmNlTGVmdENvbnRhaW5lcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIHZhcmlhbnRzPXt1cFZhcmlhbnRzfVxyXG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmlyc3QgY29tcFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17aW1nMX0gYWx0PVwiMjUwMDArIFBpbmNvZGVzXCIgLz5cclxuICAgICAgICAgIDxoMT4yOUsrIFBpbmNvZGVzPC9oMT5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBXaXRoIGEgbmV0d29yayBzcGFubmluZyBvdmVyIDI5LDAwMCBwaW5jb2RlcyBhY3Jvc3MgdGhlIGNvdW50cnksIHdlXHJcbiAgICAgICAgICAgIGVuc3VyZSB0aGF0IHlvdXIgc2hpcG1lbnRzIHJlYWNoIGV2ZXJ5IG5vb2sgYW5kIGNvcm5lciBvZiBJbmRpYSxcclxuICAgICAgICAgICAgbWFraW5nIHVzIHlvdXIgcmVsaWFibGUgbG9naXN0aWNzIHBhcnRuZXIgZm9yIG5hdGlvbndpZGUgZGVsaXZlcnkuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICB2YXJpYW50cz17dXBWYXJpYW50c31cclxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlY29uZCBjb21wXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWcyfSBhbHQ9XCIyNTAwMCsgUGluY29kZXNcIiAvPlxyXG4gICAgICAgICAgPGgxPjI1SysgU2hpcHBpbmcgUGFydG5lcjwvaDE+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgT3VyIGNvbGxhYm9yYXRpb24gd2l0aCAyNSsgc2hpcHBpbmcgcGFydG5lcnMgYWxsb3dzIHVzIHRvIG9mZmVyIGFcclxuICAgICAgICAgICAgZGl2ZXJzZSByYW5nZSBvZiBzaGlwcGluZyBzb2x1dGlvbnMgdGFpbG9yZWQgdG8geW91ciBzcGVjaWZpYyBuZWVkcy5cclxuICAgICAgICAgICAgV2hldGhlciBpdCdzIHNwZWVkLCBjb3N0LWVmZmljaWVuY3ksIG9yIHNwZWNpYWxpemVkIGhhbmRsaW5nLCB3ZSd2ZVxyXG4gICAgICAgICAgICBnb3QgeW91IGNvdmVyZWQuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICB2YXJpYW50cz17dXBWYXJpYW50c31cclxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRoaXJkIGNvbXBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltZzN9IGFsdD1cIjI1MDAwKyBQaW5jb2Rlc1wiIC8+XHJcbiAgICAgICAgICA8aDE+MjBrKyBTZWxsZXJzPC9oMT5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBKb2luIGEgdGhyaXZpbmcgY29tbXVuaXR5IG9mIG92ZXIgMjAsMDAwIHNlbGxlcnMgd2hvIHRydXN0IG91clxyXG4gICAgICAgICAgICBsb2dpc3RpY3Mgc2VydmljZXMgdG8gZGVsaXZlciB0aGVpciBwcm9kdWN0cyBzZWFtbGVzc2x5LiBXZSBlbXBvd2VyXHJcbiAgICAgICAgICAgIGJ1c2luZXNzZXMgb2YgYWxsIHNpemVzIHRvIHNjYWxlIGFuZCBncm93IHdpdGggY29uZmlkZW5jZS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIHZhcmlhbnRzPXt1cFZhcmlhbnRzfVxyXG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm91cnRoIGNvbXBcIlxyXG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICBkZWxheTogMC4zLCAvLyBBZGp1c3QgdGhpcyB2YWx1ZSBhcyBuZWVkZWRcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17aW1nNH0gYWx0PVwiMjUwMDArIFBpbmNvZGVzXCIgLz5cclxuICAgICAgICAgIDxoMT41MEsrIERhaWx5IFNoaXBtZW50PC9oMT5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBXaXRoIGEgc3RhZ2dlcmluZyA1MCwwMDArIHNoaXBtZW50cyBkaXNwYXRjaGVkIGRhaWx5LCBvdXIgbG9naXN0aWNhbFxyXG4gICAgICAgICAgICBwcm93ZXNzIGVuc3VyZXMgeW91ciBnb29kcyBhcmUgb24gdGhlIG1vdmUgZWZmaWNpZW50bHkuIEV4cGVyaWVuY2VcclxuICAgICAgICAgICAgdGhlIGVhc2Ugb2YgbWFuYWdpbmcgeW91ciBzaGlwcGluZyBuZWVkcyB3aXRoIHVzLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0dsYW5jZUxlZnRDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVmdDtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJzdHlsZWQiLCJpbWcxIiwiaW1nMiIsImltZzMiLCJpbWc0IiwibW90aW9uIiwiR2xhbmNlTGVmdENvbnRhaW5lciIsImRpdiIsInVwVmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsIkxlZnQiLCJjbGFzc05hbWUiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInNyYyIsImFsdCIsImgxIiwicCIsImRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Home/Glance/Components/Left.jsx\n"));

/***/ })

});