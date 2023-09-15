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

/***/ "(app-pages-browser)/./Components/Home/Glance/Components/Right.jsx":
/*!*****************************************************!*\
  !*** ./Components/Home/Glance/Components/Right.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  .right {\\n    width: 100%;\\n    height: 90vh;\\n    background: #5065f920;\\n    border-radius: 20px;\\n    padding: 2rem;\\n    color: #111;\\n    font-family: var(--font);\\n\\n    h1 {\\n      font-size: var(--heading-small);\\n      font-weight: 700;\\n      font-family: var(--bold);\\n      color: var(--text-color);\\n    }\\n\\n    .slider {\\n      display: flex;\\n      overflow-x: hidden;\\n      position: relative;\\n    }\\n\\n    .slide {\\n      min-width: 100%;\\n      padding: 2rem;\\n      display: flex;\\n      flex-direction: column;\\n      align-items: center;\\n      justify-content: center;\\n      background-color: #5065f920;\\n      border-radius: 40px;\\n      color: #111;\\n      font-family: var(--font);\\n      text-align: center;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nconst GlanceRightContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = GlanceRightContainer;\nfunction Right() {\n    _s();\n    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const slides = [\n        {\n            review: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit...\",\n            name: \"Name1\",\n            position: \"Position1\"\n        },\n        {\n            content: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit...\",\n            name: \"Name2\",\n            position: \"Position2\"\n        },\n        {\n            content: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit...\",\n            name: \"Name3\",\n            position: \"Position3\"\n        }\n    ];\n    const nextSlide = ()=>{\n        setActiveSlide((prevSlide)=>(prevSlide + 1) % slides.length);\n    };\n    const prevSlide = ()=>{\n        setActiveSlide((prevSlide)=>prevSlide === 0 ? slides.length - 1 : prevSlide - 1);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            nextSlide();\n        }, 4000);\n        return ()=>clearInterval(interval);\n    }, [\n        activeSlide\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // When the automatic slide change animation is ongoing\n        const timeout = setTimeout(()=>{\n            nextSlide();\n        }, 4000);\n        return ()=>clearTimeout(timeout);\n    }, [\n        activeSlide\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlanceRightContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"right\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: \"What Our Client Think About Us?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"slider\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                            exitBeforeEnter: false,\n                            initial: false,\n                            mode: \"wait\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                className: \"slide\",\n                                initial: {\n                                    opacity: 0,\n                                    x: -100\n                                },\n                                animate: {\n                                    opacity: 1,\n                                    x: 0\n                                },\n                                exit: {\n                                    opacity: 0,\n                                    x: 100\n                                },\n                                transition: {\n                                    type: \"spring\",\n                                    damping: 15,\n                                    stiffness: 100,\n                                    duration: 1\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: slides[activeSlide].content\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: slides[activeSlide].name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: slides[activeSlide].position\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, activeSlide, true, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: prevSlide,\n                        children: \"Previous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: nextSlide,\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_s(Right, \"2IwinmJ4DNyq1o4BDH8tFxk95jw=\");\n_c1 = Right;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Right);\nvar _c, _c1;\n$RefreshReg$(_c, \"GlanceRightContainer\");\n$RefreshReg$(_c1, \"Right\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvSG9tZS9HbGFuY2UvQ29tcG9uZW50cy9SaWdodC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDWTtBQUNLO0FBRXhELE1BQU1NLHVCQUF1Qk4seURBQU1BLENBQUNPLEdBQUc7S0FBakNEO0FBdUNOLFNBQVNFOztJQUNQLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNUyxTQUFTO1FBQ2I7WUFDRUMsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBO1lBQ0VDLFNBQVM7WUFDVEYsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7UUFDQTtZQUNFQyxTQUFTO1lBQ1RGLE1BQU07WUFDTkMsVUFBVTtRQUNaO0tBQ0Q7SUFFRCxNQUFNRSxZQUFZO1FBQ2hCTixlQUFlLENBQUNPLFlBQWMsQ0FBQ0EsWUFBWSxLQUFLTixPQUFPTyxNQUFNO0lBQy9EO0lBRUEsTUFBTUQsWUFBWTtRQUNoQlAsZUFBZSxDQUFDTyxZQUNkQSxjQUFjLElBQUlOLE9BQU9PLE1BQU0sR0FBRyxJQUFJRCxZQUFZO0lBRXREO0lBRUFkLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWdCLFdBQVdDLFlBQVk7WUFDM0JKO1FBQ0YsR0FBRztRQUVILE9BQU8sSUFBTUssY0FBY0Y7SUFDN0IsR0FBRztRQUFDVjtLQUFZO0lBRWhCTixnREFBU0EsQ0FBQztRQUNSLHVEQUF1RDtRQUN2RCxNQUFNbUIsVUFBVUMsV0FBVztZQUN6QlA7UUFDRixHQUFHO1FBRUgsT0FBTyxJQUFNUSxhQUFhRjtJQUM1QixHQUFHO1FBQUNiO0tBQVk7SUFFaEIscUJBQ0UsOERBQUNGO2tCQUNDLDRFQUFDRDtzQkFDQyw0RUFBQ0M7Z0JBQUlrQixXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ25CO3dCQUFJa0IsV0FBVTtrQ0FDYiw0RUFBQ3BCLDBEQUFlQTs0QkFDZHNCLGlCQUFpQjs0QkFDakJDLFNBQVM7NEJBQ1RDLE1BQUs7c0NBRUwsNEVBQUN6QixpREFBTUEsQ0FBQ0csR0FBRztnQ0FFVGtCLFdBQVU7Z0NBQ1ZHLFNBQVM7b0NBQUVFLFNBQVM7b0NBQUdDLEdBQUcsQ0FBQztnQ0FBSTtnQ0FDL0JDLFNBQVM7b0NBQUVGLFNBQVM7b0NBQUdDLEdBQUc7Z0NBQUU7Z0NBQzVCRSxNQUFNO29DQUFFSCxTQUFTO29DQUFHQyxHQUFHO2dDQUFJO2dDQUMzQkcsWUFBWTtvQ0FDVkMsTUFBTTtvQ0FDTkMsU0FBUztvQ0FDVEMsV0FBVztvQ0FDWEMsVUFBVTtnQ0FDWjs7a0RBRUEsOERBQUNDO2tEQUFHNUIsTUFBTSxDQUFDRixZQUFZLENBQUNNLE9BQU87Ozs7OztrREFDL0IsOERBQUN5QjtrREFBSTdCLE1BQU0sQ0FBQ0YsWUFBWSxDQUFDSSxJQUFJOzs7Ozs7a0RBQzdCLDhEQUFDMEI7a0RBQUc1QixNQUFNLENBQUNGLFlBQVksQ0FBQ0ssUUFBUTs7Ozs7OzsrQkFkM0JMOzs7Ozs7Ozs7Ozs7Ozs7a0NBa0JYLDhEQUFDZ0M7d0JBQU9DLFNBQVN6QjtrQ0FBVzs7Ozs7O2tDQUM1Qiw4REFBQ3dCO3dCQUFPQyxTQUFTMUI7a0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEM7R0FwRlNSO01BQUFBO0FBc0ZULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvSG9tZS9HbGFuY2UvQ29tcG9uZW50cy9SaWdodC5qc3g/ZmFjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jb25zdCBHbGFuY2VSaWdodENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgLnJpZ2h0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgYmFja2dyb3VuZDogIzUwNjVmOTIwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBjb2xvcjogIzExMTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1zbWFsbCk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2xkKTtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGUge1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA2NWY5MjA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAgIGNvbG9yOiAjMTExO1xyXG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBSaWdodCgpIHtcclxuICBjb25zdCBbYWN0aXZlU2xpZGUsIHNldEFjdGl2ZVNsaWRlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBzbGlkZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHJldmlldzogXCJMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4uLlwiLFxyXG4gICAgICBuYW1lOiBcIk5hbWUxXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcIlBvc2l0aW9uMVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29udGVudDogXCJMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4uLlwiLFxyXG4gICAgICBuYW1lOiBcIk5hbWUyXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcIlBvc2l0aW9uMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29udGVudDogXCJMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4uLlwiLFxyXG4gICAgICBuYW1lOiBcIk5hbWUzXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcIlBvc2l0aW9uM1wiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVTbGlkZSgocHJldlNsaWRlKSA9PiAocHJldlNsaWRlICsgMSkgJSBzbGlkZXMubGVuZ3RoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVTbGlkZSgocHJldlNsaWRlKSA9PlxyXG4gICAgICBwcmV2U2xpZGUgPT09IDAgPyBzbGlkZXMubGVuZ3RoIC0gMSA6IHByZXZTbGlkZSAtIDFcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBuZXh0U2xpZGUoKTtcclxuICAgIH0sIDQwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbYWN0aXZlU2xpZGVdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFdoZW4gdGhlIGF1dG9tYXRpYyBzbGlkZSBjaGFuZ2UgYW5pbWF0aW9uIGlzIG9uZ29pbmdcclxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbmV4dFNsaWRlKCk7XHJcbiAgICB9LCA0MDAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gIH0sIFthY3RpdmVTbGlkZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEdsYW5jZVJpZ2h0Q29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgIDxoMT5XaGF0IE91ciBDbGllbnQgVGhpbmsgQWJvdXQgVXM/PC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2VcclxuICAgICAgICAgICAgICBleGl0QmVmb3JlRW50ZXI9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIG1vZGU9XCJ3YWl0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2FjdGl2ZVNsaWRlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAtMTAwIH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cclxuICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeDogMTAwIH19XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhbXBpbmc6IDE1LFxyXG4gICAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwPntzbGlkZXNbYWN0aXZlU2xpZGVdLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGgzPntzbGlkZXNbYWN0aXZlU2xpZGVdLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPntzbGlkZXNbYWN0aXZlU2xpZGVdLnBvc2l0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3ByZXZTbGlkZX0+UHJldmlvdXM8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17bmV4dFNsaWRlfT5OZXh0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvR2xhbmNlUmlnaHRDb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWdodDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJHbGFuY2VSaWdodENvbnRhaW5lciIsImRpdiIsIlJpZ2h0IiwiYWN0aXZlU2xpZGUiLCJzZXRBY3RpdmVTbGlkZSIsInNsaWRlcyIsInJldmlldyIsIm5hbWUiLCJwb3NpdGlvbiIsImNvbnRlbnQiLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJsZW5ndGgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2xhc3NOYW1lIiwiaDEiLCJleGl0QmVmb3JlRW50ZXIiLCJpbml0aWFsIiwibW9kZSIsIm9wYWNpdHkiLCJ4IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJkdXJhdGlvbiIsInAiLCJoMyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Home/Glance/Components/Right.jsx\n"));

/***/ })

});