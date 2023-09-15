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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Assets_Images_Glance_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Assets/Images/Glance/1.png */ \"(app-pages-browser)/./Assets/Images/Glance/1.png\");\n/* harmony import */ var _Assets_Images_Glance_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Assets/Images/Glance/2.png */ \"(app-pages-browser)/./Assets/Images/Glance/2.png\");\n/* harmony import */ var _Assets_Images_Glance_3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Assets/Images/Glance/3.png */ \"(app-pages-browser)/./Assets/Images/Glance/3.png\");\n/* harmony import */ var _Assets_Images_Glance_4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Assets/Images/Glance/4.png */ \"(app-pages-browser)/./Assets/Images/Glance/4.png\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  .left {\\n    width: 100%;\\n    height: 90vh;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    gap: 1rem;\\n    background: #eeeeee50;\\n    backdrop-filter: blur(20px);\\n    padding: 1rem;\\n    border-radius: 40px;\\n    place-items: center;\\n\\n    @media screen and (max-width: 768px) {\\n      grid-template-columns: 1fr;\\n      grid-template-rows: 1fr 1fr 1fr 1fr;\\n      min-height: 90vh;\\n      height: 100%;\\n    }\\n\\n    .comp {\\n      width: 100%;\\n      height: 40vh;\\n      overflow-x: hidden;\\n      overflow-y: scroll;\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: flex-start;\\n      align-items: flex-start;\\n      padding: 1rem;\\n      gap: 1rem;\\n      border-radius: 30px;\\n      backdrop-filter: blur(20px);\\n      -webkit-backdrop-filter: blur(20px);\\n      transition: transform 0.5s ease-in-out;\\n      transform: scale(1);\\n      perspective: 1000;\\n\\n      \\n\\n      &::-webkit-scrollbar {\\n        width: 0;\\n      }\\n\\n      &:hover {\\n        transform: scale(1.05);\\n      }\\n\\n      img {\\n        width: 4rem;\\n        height: 4rem;\\n        object-fit: cover;\\n        border-radius: 100px;\\n        background: #ffffff70;\\n        backdrop-filter: blur(20px);\\n        padding: 1rem;\\n      }\\n\\n      h1 {\\n        font-size: var(--heading-small);\\n        font-weight: 600;\\n        font-family: var(--bold);\\n        color: var(--text-color);\\n      }\\n\\n      p {\\n        font-size: var(--para-mini);\\n        font-weight: 400;\\n        font-family: var(--light-font);\\n        color: var(--text-grey);\\n      }\\n    }\\n\\n    .first {\\n      background: #5195f930;\\n    }\\n\\n    .second {\\n      background: #8e52ff30;\\n    }\\n\\n    .third {\\n      background: #ff5a9b30;\\n    }\\n\\n    .fourth {\\n      background: #ff914b30;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\n\n\nconst GlanceLeftContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n_c = GlanceLeftContainer;\nconst upVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1,\n            ease: \"easeInOut\",\n            stiffness: 100,\n            damping: 15\n        }\n    }\n};\nconst delayVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1,\n            ease: \"easeInOut\",\n            stiffness: 100,\n            damping: 15,\n            delay: 0.3\n        }\n    }\n};\nfunction Left() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlanceLeftContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"left\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                    variants: upVariants,\n                    initial: \"hidden\",\n                    whileInView: \"visible\",\n                    className: \"first comp\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _Assets_Images_Glance_1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                            alt: \"25000+ Pincodes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 140,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"29K+ Pincodes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 141,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"With a network spanning over 29,000 pincodes across the country, we ensure that your shipments reach every nook and corner of India, making us your reliable logistics partner for nationwide delivery.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 142,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                    lineNumber: 134,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                    variants: delayVariants,\n                    initial: \"hidden\",\n                    whileInView: \"visible\",\n                    className: \"second comp\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _Assets_Images_Glance_2_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            alt: \"25000+ Pincodes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 154,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"25K+ Shipping Partner\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 155,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Our collaboration with 25+ shipping partners allows us to offer a diverse range of shipping solutions tailored to your specific needs. Whether it's speed, cost-efficiency, or specialized handling, we've got you covered.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 156,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                    lineNumber: 148,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                    variants: upVariants,\n                    initial: \"hidden\",\n                    whileInView: \"visible\",\n                    className: \"third comp\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _Assets_Images_Glance_3_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            alt: \"25000+ Pincodes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 169,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"20k+ Sellers\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 170,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Join a thriving community of over 20,000 sellers who trust our logistics services to deliver their products seamlessly. We empower businesses of all sizes to scale and grow with confidence.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 171,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                    lineNumber: 163,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                    variants: delayVariants,\n                    initial: \"hidden\",\n                    whileInView: \"visible\",\n                    className: \"fourth comp\",\n                    transition: {\n                        delay: 0.3\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _Assets_Images_Glance_4_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                            alt: \"25000+ Pincodes\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 186,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"50K+ Daily Shipment\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 187,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"With a staggering 50,000+ shipments dispatched daily, our logistical prowess ensures your goods are on the move efficiently. Experience the ease of managing your shipping needs with us.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                            lineNumber: 188,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                    lineNumber: 177,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n            lineNumber: 133,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Left;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Left);\nvar _c, _c1;\n$RefreshReg$(_c, \"GlanceLeftContainer\");\n$RefreshReg$(_c1, \"Left\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvSG9tZS9HbGFuY2UvQ29tcG9uZW50cy9MZWZ0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTDtBQUNhO0FBQ1M7QUFDQTtBQUNBO0FBQ0E7QUFDVDtBQUV2QyxNQUFNUSxzQkFBc0JOLHlEQUFNQSxDQUFDTyxHQUFHO0tBQWhDRDtBQTRGTixNQUFNRSxhQUFhO0lBQ2pCQyxRQUFRO1FBQUVDLFNBQVM7UUFBR0MsR0FBRztJQUFHO0lBQzVCQyxTQUFTO1FBQ1BGLFNBQVM7UUFDVEMsR0FBRztRQUNIRSxZQUFZO1lBQ1ZDLFVBQVU7WUFDVkMsTUFBTTtZQUNOQyxXQUFXO1lBQ1hDLFNBQVM7UUFDWDtJQUNGO0FBQ0Y7QUFDQSxNQUFNQyxnQkFBZ0I7SUFDcEJULFFBQVE7UUFBRUMsU0FBUztRQUFHQyxHQUFHO0lBQUc7SUFDNUJDLFNBQVM7UUFDUEYsU0FBUztRQUNUQyxHQUFHO1FBQ0hFLFlBQVk7WUFDVkMsVUFBVTtZQUNWQyxNQUFNO1lBQ05DLFdBQVc7WUFDWEMsU0FBUztZQUNURSxPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRUEsU0FBU0M7SUFDUCxxQkFDRSw4REFBQ2Q7a0JBQ0MsNEVBQUNDO1lBQUljLFdBQVU7OzhCQUNiLDhEQUFDaEIsaURBQU1BLENBQUNFLEdBQUc7b0JBQ1RlLFVBQVVkO29CQUNWZSxTQUFRO29CQUNSQyxhQUFZO29CQUNaSCxXQUFVOztzQ0FFViw4REFBQ3ZCLG1EQUFLQTs0QkFBQzJCLEtBQUt4QixtRUFBSUE7NEJBQUV5QixLQUFJOzs7Ozs7c0NBQ3RCLDhEQUFDQztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQztzQ0FBRTs7Ozs7Ozs7Ozs7OzhCQU1MLDhEQUFDdkIsaURBQU1BLENBQUNFLEdBQUc7b0JBQ1RlLFVBQVVKO29CQUNWSyxTQUFRO29CQUNSQyxhQUFZO29CQUNaSCxXQUFVOztzQ0FFViw4REFBQ3ZCLG1EQUFLQTs0QkFBQzJCLEtBQUt2QixtRUFBSUE7NEJBQUV3QixLQUFJOzs7Ozs7c0NBQ3RCLDhEQUFDQztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQztzQ0FBRTs7Ozs7Ozs7Ozs7OzhCQU9MLDhEQUFDdkIsaURBQU1BLENBQUNFLEdBQUc7b0JBQ1RlLFVBQVVkO29CQUNWZSxTQUFRO29CQUNSQyxhQUFZO29CQUNaSCxXQUFVOztzQ0FFViw4REFBQ3ZCLG1EQUFLQTs0QkFBQzJCLEtBQUt0QixtRUFBSUE7NEJBQUV1QixLQUFJOzs7Ozs7c0NBQ3RCLDhEQUFDQztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQztzQ0FBRTs7Ozs7Ozs7Ozs7OzhCQU1MLDhEQUFDdkIsaURBQU1BLENBQUNFLEdBQUc7b0JBQ1RlLFVBQVVKO29CQUNWSyxTQUFRO29CQUNSQyxhQUFZO29CQUNaSCxXQUFVO29CQUNWUixZQUFZO3dCQUNWTSxPQUFPO29CQUNUOztzQ0FFQSw4REFBQ3JCLG1EQUFLQTs0QkFBQzJCLEtBQUtyQixtRUFBSUE7NEJBQUVzQixLQUFJOzs7Ozs7c0NBQ3RCLDhEQUFDQztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQztzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTYjtNQW5FU1I7QUFxRVQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lL0dsYW5jZS9Db21wb25lbnRzL0xlZnQuanN4Pzg3NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGltZzEgZnJvbSBcIkAvQXNzZXRzL0ltYWdlcy9HbGFuY2UvMS5wbmdcIjtcclxuaW1wb3J0IGltZzIgZnJvbSBcIkAvQXNzZXRzL0ltYWdlcy9HbGFuY2UvMi5wbmdcIjtcclxuaW1wb3J0IGltZzMgZnJvbSBcIkAvQXNzZXRzL0ltYWdlcy9HbGFuY2UvMy5wbmdcIjtcclxuaW1wb3J0IGltZzQgZnJvbSBcIkAvQXNzZXRzL0ltYWdlcy9HbGFuY2UvNC5wbmdcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNvbnN0IEdsYW5jZUxlZnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU1MDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29tcCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBnYXA6IDFyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICBwZXJzcGVjdGl2ZTogMTAwMDtcclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNzA7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctc21hbGwpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJvbGQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXJhLW1pbmkpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWxpZ2h0LWZvbnQpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWdyZXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpcnN0IHtcclxuICAgICAgYmFja2dyb3VuZDogIzUxOTVmOTMwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjOGU1MmZmMzA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRoaXJkIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmNWE5YjMwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3VydGgge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmY5MTRiMzA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdXBWYXJpYW50cyA9IHtcclxuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogNTAgfSxcclxuICB2aXNpYmxlOiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgeTogMCxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXHJcbiAgICAgIHN0aWZmbmVzczogMTAwLFxyXG4gICAgICBkYW1waW5nOiAxNSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuY29uc3QgZGVsYXlWYXJpYW50cyA9IHtcclxuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogNTAgfSxcclxuICB2aXNpYmxlOiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgeTogMCxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXHJcbiAgICAgIHN0aWZmbmVzczogMTAwLFxyXG4gICAgICBkYW1waW5nOiAxNSxcclxuICAgICAgZGVsYXk6IDAuMyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIExlZnQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHbGFuY2VMZWZ0Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgdmFyaWFudHM9e3VwVmFyaWFudHN9XHJcbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICAgIHdoaWxlSW5WaWV3PVwidmlzaWJsZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaXJzdCBjb21wXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWcxfSBhbHQ9XCIyNTAwMCsgUGluY29kZXNcIiAvPlxyXG4gICAgICAgICAgPGgxPjI5SysgUGluY29kZXM8L2gxPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFdpdGggYSBuZXR3b3JrIHNwYW5uaW5nIG92ZXIgMjksMDAwIHBpbmNvZGVzIGFjcm9zcyB0aGUgY291bnRyeSwgd2VcclxuICAgICAgICAgICAgZW5zdXJlIHRoYXQgeW91ciBzaGlwbWVudHMgcmVhY2ggZXZlcnkgbm9vayBhbmQgY29ybmVyIG9mIEluZGlhLFxyXG4gICAgICAgICAgICBtYWtpbmcgdXMgeW91ciByZWxpYWJsZSBsb2dpc3RpY3MgcGFydG5lciBmb3IgbmF0aW9ud2lkZSBkZWxpdmVyeS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIHZhcmlhbnRzPXtkZWxheVZhcmlhbnRzfVxyXG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2Vjb25kIGNvbXBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltZzJ9IGFsdD1cIjI1MDAwKyBQaW5jb2Rlc1wiIC8+XHJcbiAgICAgICAgICA8aDE+MjVLKyBTaGlwcGluZyBQYXJ0bmVyPC9oMT5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBPdXIgY29sbGFib3JhdGlvbiB3aXRoIDI1KyBzaGlwcGluZyBwYXJ0bmVycyBhbGxvd3MgdXMgdG8gb2ZmZXIgYVxyXG4gICAgICAgICAgICBkaXZlcnNlIHJhbmdlIG9mIHNoaXBwaW5nIHNvbHV0aW9ucyB0YWlsb3JlZCB0byB5b3VyIHNwZWNpZmljIG5lZWRzLlxyXG4gICAgICAgICAgICBXaGV0aGVyIGl0J3Mgc3BlZWQsIGNvc3QtZWZmaWNpZW5jeSwgb3Igc3BlY2lhbGl6ZWQgaGFuZGxpbmcsIHdlJ3ZlXHJcbiAgICAgICAgICAgIGdvdCB5b3UgY292ZXJlZC5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIHZhcmlhbnRzPXt1cFZhcmlhbnRzfVxyXG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGhpcmQgY29tcFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17aW1nM30gYWx0PVwiMjUwMDArIFBpbmNvZGVzXCIgLz5cclxuICAgICAgICAgIDxoMT4yMGsrIFNlbGxlcnM8L2gxPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEpvaW4gYSB0aHJpdmluZyBjb21tdW5pdHkgb2Ygb3ZlciAyMCwwMDAgc2VsbGVycyB3aG8gdHJ1c3Qgb3VyXHJcbiAgICAgICAgICAgIGxvZ2lzdGljcyBzZXJ2aWNlcyB0byBkZWxpdmVyIHRoZWlyIHByb2R1Y3RzIHNlYW1sZXNzbHkuIFdlIGVtcG93ZXJcclxuICAgICAgICAgICAgYnVzaW5lc3NlcyBvZiBhbGwgc2l6ZXMgdG8gc2NhbGUgYW5kIGdyb3cgd2l0aCBjb25maWRlbmNlLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgdmFyaWFudHM9e2RlbGF5VmFyaWFudHN9XHJcbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICAgIHdoaWxlSW5WaWV3PVwidmlzaWJsZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3VydGggY29tcFwiXHJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgIGRlbGF5OiAwLjMsIC8vIEFkanVzdCB0aGlzIHZhbHVlIGFzIG5lZWRlZFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWc0fSBhbHQ9XCIyNTAwMCsgUGluY29kZXNcIiAvPlxyXG4gICAgICAgICAgPGgxPjUwSysgRGFpbHkgU2hpcG1lbnQ8L2gxPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFdpdGggYSBzdGFnZ2VyaW5nIDUwLDAwMCsgc2hpcG1lbnRzIGRpc3BhdGNoZWQgZGFpbHksIG91ciBsb2dpc3RpY2FsXHJcbiAgICAgICAgICAgIHByb3dlc3MgZW5zdXJlcyB5b3VyIGdvb2RzIGFyZSBvbiB0aGUgbW92ZSBlZmZpY2llbnRseS4gRXhwZXJpZW5jZVxyXG4gICAgICAgICAgICB0aGUgZWFzZSBvZiBtYW5hZ2luZyB5b3VyIHNoaXBwaW5nIG5lZWRzIHdpdGggdXMuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvR2xhbmNlTGVmdENvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWZ0O1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInN0eWxlZCIsImltZzEiLCJpbWcyIiwiaW1nMyIsImltZzQiLCJtb3Rpb24iLCJHbGFuY2VMZWZ0Q29udGFpbmVyIiwiZGl2IiwidXBWYXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ5IiwidmlzaWJsZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZGVsYXlWYXJpYW50cyIsImRlbGF5IiwiTGVmdCIsImNsYXNzTmFtZSIsInZhcmlhbnRzIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3Iiwic3JjIiwiYWx0IiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Home/Glance/Components/Left.jsx\n"));

/***/ })

});