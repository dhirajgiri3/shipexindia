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

/***/ "(app-pages-browser)/./Components/Home/Glance/Glance.jsx":
/*!*******************************************!*\
  !*** ./Components/Home/Glance/Glance.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Components_Left__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Left */ \"(app-pages-browser)/./Components/Home/Glance/Components/Left.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n  min-height: 90vh;\\n  height: 100%;\\n  display: grid;\\n  grid-template-columns: 1.3fr 1fr;\\n  grid-template-rows: 1fr;\\n  gap: 1rem;\\n  margin: 5rem 0;\\n  padding: 0 10rem;\\n  color: #eee;\\n\\n  .right {\\n    width: 100%;\\n    height: 100%;\\n    background: #5065f920;\\n    border-radius: 40px;\\n    padding: 2rem;\\n    color: #111;\\n    font-family: var(--font);\\n\\n    h1 {\\n      font-size: var(--heading-small);\\n      font-weight: 700;\\n      font-family: var(--bold);\\n      color: var(--text-color);\\n    }\\n\\n    .slider {\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst GlanceContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = GlanceContainer;\nfunction Glance() {\n    _s();\n    const [activeSlide, setActiveSlide] = useState(0);\n    const slides = [\n        {\n            content: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ea ratione ipsa maxime? Laborum, ducimus cumque mollitia quae sint quo? Consectetur dolorem magni nulla adipisci labore deleniti vero nesciunt hic.\",\n            name: \"Name1\",\n            position: \"Position1\"\n        },\n        {\n            content: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ea ratione ipsa maxime? Laborum, ducimus cumque mollitia quae sint quo? Consectetur dolorem magni nulla adipisci labore deleniti vero nesciunt hic.\",\n            name: \"Name2\",\n            position: \"Position2\"\n        },\n        {\n            content: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ea ratione ipsa maxime? Laborum, ducimus cumque mollitia quae sint quo? Consectetur dolorem magni nulla adipisci labore deleniti vero nesciunt hic.\",\n            name: \"Name3\",\n            position: \"Position3\"\n        }\n    ];\n    const nextSlide = ()=>{\n        setActiveSlide((prevSlide)=>(prevSlide + 1) % slides.length);\n    };\n    const prevSlide = ()=>{\n        setActiveSlide((prevSlide)=>prevSlide === 0 ? slides.length - 1 : prevSlide - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlanceContainer, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Left__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Glance.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"right\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"What Our Client Think About Us?\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Glance.jsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"slider\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AnimatePresence, {\n                                exitBeforeEnter: true,\n                                initial: false,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                    className: \"slide\",\n                                    initial: {\n                                        opacity: 0,\n                                        x: -100\n                                    },\n                                    animate: {\n                                        opacity: 1,\n                                        x: 0\n                                    },\n                                    exit: {\n                                        opacity: 0,\n                                        x: 100\n                                    },\n                                    transition: {\n                                        type: \"spring\",\n                                        damping: 15,\n                                        stiffness: 100\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            children: slides[activeSlide].content\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Glance.jsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                            children: slides[activeSlide].name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Glance.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            children: slides[activeSlide].position\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Glance.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, activeSlide, true, {\n                                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Glance.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Glance.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Glance.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: prevSlide,\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Glance.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: nextSlide,\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Glance.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Glance.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Glance.jsx\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Glance.jsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Glance, \"dS+1ZOtSf2nhh/2pRGHyjeAvUCc=\");\n_c1 = Glance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Glance);\nvar _c, _c1;\n$RefreshReg$(_c, \"GlanceContainer\");\n$RefreshReg$(_c1, \"Glance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvSG9tZS9HbGFuY2UvR2xhbmNlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ0Y7QUFDRTtBQUV2QyxNQUFNSSxrQkFBa0JILHlEQUFNQSxDQUFDSSxHQUFHO0tBQTVCRDtBQWlDTixTQUFTRTs7SUFDUCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0MsU0FBUztJQUUvQyxNQUFNQyxTQUFTO1FBQ2I7WUFDRUMsU0FDRTtZQUNGQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBO1lBQ0VGLFNBQ0U7WUFDRkMsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7UUFDQTtZQUNFRixTQUNFO1lBQ0ZDLE1BQU07WUFDTkMsVUFBVTtRQUNaO0tBQ0Q7SUFFRCxNQUFNQyxZQUFZO1FBQ2hCTixlQUFlLENBQUNPLFlBQWMsQ0FBQ0EsWUFBWSxLQUFLTCxPQUFPTSxNQUFNO0lBQy9EO0lBRUEsTUFBTUQsWUFBWTtRQUNoQlAsZUFBZSxDQUFDTyxZQUNkQSxjQUFjLElBQUlMLE9BQU9NLE1BQU0sR0FBRyxJQUFJRCxZQUFZO0lBRXREO0lBRUEscUJBQ0UsOERBQUNWO2tCQUNDLDRFQUFDRDs7OEJBQ0MsOERBQUNGLHdEQUFJQTs7Ozs7OEJBQ0wsOERBQUNHO29CQUFJWSxXQUFVOztzQ0FDYiw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ2I7NEJBQUlZLFdBQVU7c0NBQ2IsNEVBQUNFO2dDQUFnQkMsZUFBZTtnQ0FBQ0MsU0FBUzswQ0FDeEMsNEVBQUNsQixpREFBTUEsQ0FBQ0UsR0FBRztvQ0FFVFksV0FBVTtvQ0FDVkksU0FBUzt3Q0FBRUMsU0FBUzt3Q0FBR0MsR0FBRyxDQUFDO29DQUFJO29DQUMvQkMsU0FBUzt3Q0FBRUYsU0FBUzt3Q0FBR0MsR0FBRztvQ0FBRTtvQ0FDNUJFLE1BQU07d0NBQUVILFNBQVM7d0NBQUdDLEdBQUc7b0NBQUk7b0NBQzNCRyxZQUFZO3dDQUFFQyxNQUFNO3dDQUFVQyxTQUFTO3dDQUFJQyxXQUFXO29DQUFJOztzREFFMUQsOERBQUNDO3NEQUFHcEIsTUFBTSxDQUFDSCxZQUFZLENBQUNJLE9BQU87Ozs7OztzREFDL0IsOERBQUNvQjtzREFBSXJCLE1BQU0sQ0FBQ0gsWUFBWSxDQUFDSyxJQUFJOzs7Ozs7c0RBQzdCLDhEQUFDa0I7c0RBQUdwQixNQUFNLENBQUNILFlBQVksQ0FBQ00sUUFBUTs7Ozs7OzttQ0FUM0JOOzs7Ozs7Ozs7Ozs7Ozs7c0NBYVgsOERBQUN5Qjs0QkFBT0MsU0FBU2xCO3NDQUFXOzs7Ozs7c0NBQzVCLDhEQUFDaUI7NEJBQU9DLFNBQVNuQjtzQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEM7R0E5RFNSO01BQUFBO0FBZ0VULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvSG9tZS9HbGFuY2UvR2xhbmNlLmpzeD80NDkyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IExlZnQgZnJvbSBcIi4vQ29tcG9uZW50cy9MZWZ0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jb25zdCBHbGFuY2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjNmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG1hcmdpbjogNXJlbSAwO1xyXG4gIHBhZGRpbmc6IDAgMTByZW07XHJcbiAgY29sb3I6ICNlZWU7XHJcblxyXG4gIC5yaWdodCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICM1MDY1ZjkyMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctc21hbGwpO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LWZhbWlseTogdmFyKC0tYm9sZCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGVyIHtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBHbGFuY2UoKSB7XHJcbiAgY29uc3QgW2FjdGl2ZVNsaWRlLCBzZXRBY3RpdmVTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3Qgc2xpZGVzID0gW1xyXG4gICAge1xyXG4gICAgICBjb250ZW50OlxyXG4gICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFZlbGl0IGVhIHJhdGlvbmUgaXBzYSBtYXhpbWU/IExhYm9ydW0sIGR1Y2ltdXMgY3VtcXVlIG1vbGxpdGlhIHF1YWUgc2ludCBxdW8/IENvbnNlY3RldHVyIGRvbG9yZW0gbWFnbmkgbnVsbGEgYWRpcGlzY2kgbGFib3JlIGRlbGVuaXRpIHZlcm8gbmVzY2l1bnQgaGljLlwiLFxyXG4gICAgICBuYW1lOiBcIk5hbWUxXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcIlBvc2l0aW9uMVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29udGVudDpcclxuICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBWZWxpdCBlYSByYXRpb25lIGlwc2EgbWF4aW1lPyBMYWJvcnVtLCBkdWNpbXVzIGN1bXF1ZSBtb2xsaXRpYSBxdWFlIHNpbnQgcXVvPyBDb25zZWN0ZXR1ciBkb2xvcmVtIG1hZ25pIG51bGxhIGFkaXBpc2NpIGxhYm9yZSBkZWxlbml0aSB2ZXJvIG5lc2NpdW50IGhpYy5cIixcclxuICAgICAgbmFtZTogXCJOYW1lMlwiLFxyXG4gICAgICBwb3NpdGlvbjogXCJQb3NpdGlvbjJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVmVsaXQgZWEgcmF0aW9uZSBpcHNhIG1heGltZT8gTGFib3J1bSwgZHVjaW11cyBjdW1xdWUgbW9sbGl0aWEgcXVhZSBzaW50IHF1bz8gQ29uc2VjdGV0dXIgZG9sb3JlbSBtYWduaSBudWxsYSBhZGlwaXNjaSBsYWJvcmUgZGVsZW5pdGkgdmVybyBuZXNjaXVudCBoaWMuXCIsXHJcbiAgICAgIG5hbWU6IFwiTmFtZTNcIixcclxuICAgICAgcG9zaXRpb246IFwiUG9zaXRpb24zXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVNsaWRlKChwcmV2U2xpZGUpID0+IChwcmV2U2xpZGUgKyAxKSAlIHNsaWRlcy5sZW5ndGgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVNsaWRlKChwcmV2U2xpZGUpID0+XHJcbiAgICAgIHByZXZTbGlkZSA9PT0gMCA/IHNsaWRlcy5sZW5ndGggLSAxIDogcHJldlNsaWRlIC0gMVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEdsYW5jZUNvbnRhaW5lcj5cclxuICAgICAgICA8TGVmdCAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgIDxoMT5XaGF0IE91ciBDbGllbnQgVGhpbmsgQWJvdXQgVXM/PC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyIGluaXRpYWw9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAga2V5PXthY3RpdmVTbGlkZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlXCJcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogLTEwMCB9fVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19XHJcbiAgICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHg6IDEwMCB9fVxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiBcInNwcmluZ1wiLCBkYW1waW5nOiAxNSwgc3RpZmZuZXNzOiAxMDAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cD57c2xpZGVzW2FjdGl2ZVNsaWRlXS5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgIDxoMz57c2xpZGVzW2FjdGl2ZVNsaWRlXS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD57c2xpZGVzW2FjdGl2ZVNsaWRlXS5wb3NpdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2U2xpZGV9PlByZXZpb3VzPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHRTbGlkZX0+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0dsYW5jZUNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsYW5jZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiTGVmdCIsIm1vdGlvbiIsIkdsYW5jZUNvbnRhaW5lciIsImRpdiIsIkdsYW5jZSIsImFjdGl2ZVNsaWRlIiwic2V0QWN0aXZlU2xpZGUiLCJ1c2VTdGF0ZSIsInNsaWRlcyIsImNvbnRlbnQiLCJuYW1lIiwicG9zaXRpb24iLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJoMSIsIkFuaW1hdGVQcmVzZW5jZSIsImV4aXRCZWZvcmVFbnRlciIsImluaXRpYWwiLCJvcGFjaXR5IiwieCIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsInR5cGUiLCJkYW1waW5nIiwic3RpZmZuZXNzIiwicCIsImgzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Home/Glance/Glance.jsx\n"));

/***/ })

});