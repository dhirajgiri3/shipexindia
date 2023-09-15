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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ArrowBackIosNew */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ArrowBackIosNew.js\");\n/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ArrowForwardIos */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ArrowForwardIos.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  .right {\\n    width: 100%;\\n    height: 90vh;\\n    background: #5065f920;\\n    border-radius: 40px !important;\\n    padding: 2rem;\\n    color: #111;\\n    font-family: var(--font);\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n    align-items: flex-start;\\n    gap: 1rem;\\n\\n    h1 {\\n      font-size: var(--heading);\\n      font-weight: 700;\\n      font-family: var(--bold);\\n      color: var(--text-color);\\n    }\\n\\n    .slider {\\n      display: flex;\\n      overflow-x: hidden;\\n      position: relative;\\n    }\\n\\n    .slide {\\n      min-width: 100%;\\n      height: 30vh;\\n      overflow-x: hidden;\\n      overflow-y: scroll;\\n      padding: 2rem;\\n      display: flex;\\n      flex-direction: column;\\n      align-items: flex-start;\\n      justify-content: flex-start;\\n      background-color: #5065f920;\\n      border-radius: 20px;\\n      color: #111;\\n      font-family: var(--font);\\n      text-align: left;\\n      gap: 1rem;\\n\\n      &::-webkit-scrollbar {\\n        width: 0rem;\\n      }\\n\\n      p {\\n        font-size: var(--para);\\n        font-weight: 400;\\n        font-family: var(--font-light);\\n        color: var(--text-color);\\n      }\\n\\n      .info {\\n        display: flex;\\n        justify-content: flex-start;\\n        align-items: flex-start;\\n        gap: 0;\\n        flex-direction: column;\\n\\n        h3 {\\n          font-size: var(--para);\\n          font-weight: 600;\\n          font-family: var(--bold);\\n          color: var(--text-color);\\n        }\\n\\n        p {\\n          font-size: var(--para-mini);\\n          font-weight: 400;\\n          font-family: var(--light-font);\\n          color: var(--text-grey);\\n        }\\n      }\\n    }\\n\\n    .buttons {\\n        empty-cells: 100px;\\n      button {\\n        background: transparent;\\n        border: none;\\n        outline: none;\\n        cursor: pointer;\\n        font-size: 2rem;\\n        color: #111;\\n        transition: all 0.3s ease-in-out;\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GlanceRightContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = GlanceRightContainer;\nfunction Right() {\n    _s();\n    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [isAnimating, setIsAnimating] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const slides = [\n        {\n            review: \"ShipExIndia exceeded my expectations with their efficient shipping services. I highly recommend them!\",\n            name: \"John Doe\",\n            position: \"Customer\"\n        },\n        {\n            review: \"I've been using ShipExIndia for all my logistics needs, and they've never let me down. Great company!\",\n            name: \"Jane Smith\",\n            position: \"Logistics Manager\"\n        },\n        {\n            review: \"ShipExIndia's dedication to on-time deliveries and excellent customer service makes them the best in the business.\",\n            name: \"Michael Johnson\",\n            position: \"Operations Director\"\n        },\n        {\n            review: \"As a long-time partner of ShipExIndia, I can attest to their reliability and professionalism.\",\n            name: \"Sarah Williams\",\n            position: \"Supplier\"\n        }\n    ];\n    const nextSlide = ()=>{\n        if (!isAnimating) {\n            setIsAnimating(true);\n            setActiveSlide((prevSlide)=>(prevSlide + 1) % slides.length);\n            setTimeout(()=>{\n                setIsAnimating(false);\n            }, 1000); // Adjust the duration based on your transition settings\n        }\n    };\n    const prevSlide = ()=>{\n        if (!isAnimating) {\n            setIsAnimating(true);\n            setActiveSlide((prevSlide)=>prevSlide === 0 ? slides.length - 1 : prevSlide - 1);\n            setTimeout(()=>{\n                setIsAnimating(false);\n            }, 1000); // Adjust the duration based on your transition settings\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (!isAnimating) {\n                nextSlide();\n            }\n        }, 4000);\n        return ()=>clearInterval(interval);\n    }, [\n        activeSlide,\n        isAnimating\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlanceRightContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"right\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: \"What Our Clients Think About Us?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                        lineNumber: 170,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"slider\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                            exitBeforeEnter: false,\n                            initial: false,\n                            mode: \"wait\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                className: \"slide\",\n                                initial: {\n                                    opacity: 0,\n                                    x: -100\n                                },\n                                animate: {\n                                    opacity: 1,\n                                    x: 0\n                                },\n                                exit: {\n                                    opacity: 0,\n                                    x: 100\n                                },\n                                transition: {\n                                    type: \"spring\",\n                                    damping: 15,\n                                    stiffness: 100,\n                                    duration: 1\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: slides[activeSlide].review\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                        lineNumber: 190,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"info\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                children: slides[activeSlide].name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                                lineNumber: 192,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                children: slides[activeSlide].position\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                                lineNumber: 193,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                        lineNumber: 191,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, activeSlide, true, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                lineNumber: 177,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                            lineNumber: 172,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                        lineNumber: 171,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"buttons\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: prevSlide,\n                                disabled: isAnimating,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                    lineNumber: 200,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                lineNumber: 199,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: nextSlide,\n                                disabled: isAnimating,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                    lineNumber: 203,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                lineNumber: 202,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                        lineNumber: 198,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                lineNumber: 169,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n            lineNumber: 168,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n        lineNumber: 167,\n        columnNumber: 5\n    }, this);\n}\n_s(Right, \"lmqg/+p6NKfxd5xfn6RjvWydDAE=\");\n_c1 = Right;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Right);\nvar _c, _c1;\n$RefreshReg$(_c, \"GlanceRightContainer\");\n$RefreshReg$(_c1, \"Right\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvSG9tZS9HbGFuY2UvQ29tcG9uZW50cy9SaWdodC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNZO0FBQ0s7QUFDYztBQUNBO0FBRXRFLE1BQU1RLHVCQUF1QlIseURBQU1BLENBQUNTLEdBQUc7S0FBakNEO0FBOEZOLFNBQVNFOztJQUNQLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFFL0MsTUFBTWEsU0FBUztRQUNiO1lBQ0VDLFFBQ0U7WUFDRkMsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7UUFDQTtZQUNFRixRQUNFO1lBQ0ZDLE1BQU07WUFDTkMsVUFBVTtRQUNaO1FBQ0E7WUFDRUYsUUFDRTtZQUNGQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBO1lBQ0VGLFFBQ0U7WUFDRkMsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7S0FDRDtJQUVELE1BQU1DLFlBQVk7UUFDaEIsSUFBSSxDQUFDTixhQUFhO1lBQ2hCQyxlQUFlO1lBQ2ZGLGVBQWUsQ0FBQ1EsWUFBYyxDQUFDQSxZQUFZLEtBQUtMLE9BQU9NLE1BQU07WUFFN0RDLFdBQVc7Z0JBQ1RSLGVBQWU7WUFDakIsR0FBRyxPQUFPLHdEQUF3RDtRQUNwRTtJQUNGO0lBRUEsTUFBTU0sWUFBWTtRQUNoQixJQUFJLENBQUNQLGFBQWE7WUFDaEJDLGVBQWU7WUFDZkYsZUFBZSxDQUFDUSxZQUNkQSxjQUFjLElBQUlMLE9BQU9NLE1BQU0sR0FBRyxJQUFJRCxZQUFZO1lBR3BERSxXQUFXO2dCQUNUUixlQUFlO1lBQ2pCLEdBQUcsT0FBTyx3REFBd0Q7UUFDcEU7SUFDRjtJQUVBWCxnREFBU0EsQ0FBQztRQUNSLE1BQU1vQixXQUFXQyxZQUFZO1lBQzNCLElBQUksQ0FBQ1gsYUFBYTtnQkFDaEJNO1lBQ0Y7UUFDRixHQUFHO1FBRUgsT0FBTyxJQUFNTSxjQUFjRjtJQUM3QixHQUFHO1FBQUNaO1FBQWFFO0tBQVk7SUFFN0IscUJBQ0UsOERBQUNKO2tCQUNDLDRFQUFDRDtzQkFDQyw0RUFBQ0M7Z0JBQUlpQixXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ2xCO3dCQUFJaUIsV0FBVTtrQ0FDYiw0RUFBQ3JCLDBEQUFlQTs0QkFDZHVCLGlCQUFpQjs0QkFDakJDLFNBQVM7NEJBQ1RDLE1BQUs7c0NBRUwsNEVBQUMxQixpREFBTUEsQ0FBQ0ssR0FBRztnQ0FFVGlCLFdBQVU7Z0NBQ1ZHLFNBQVM7b0NBQUVFLFNBQVM7b0NBQUdDLEdBQUcsQ0FBQztnQ0FBSTtnQ0FDL0JDLFNBQVM7b0NBQUVGLFNBQVM7b0NBQUdDLEdBQUc7Z0NBQUU7Z0NBQzVCRSxNQUFNO29DQUFFSCxTQUFTO29DQUFHQyxHQUFHO2dDQUFJO2dDQUMzQkcsWUFBWTtvQ0FDVkMsTUFBTTtvQ0FDTkMsU0FBUztvQ0FDVEMsV0FBVztvQ0FDWEMsVUFBVTtnQ0FDWjs7a0RBRUEsOERBQUNDO2tEQUFHekIsTUFBTSxDQUFDSixZQUFZLENBQUNLLE1BQU07Ozs7OztrREFDOUIsOERBQUNQO3dDQUFJaUIsV0FBVTs7MERBQ2IsOERBQUNlOzBEQUFJMUIsTUFBTSxDQUFDSixZQUFZLENBQUNNLElBQUk7Ozs7OzswREFDN0IsOERBQUN1QjswREFBR3pCLE1BQU0sQ0FBQ0osWUFBWSxDQUFDTyxRQUFROzs7Ozs7Ozs7Ozs7OytCQWY3QlA7Ozs7Ozs7Ozs7Ozs7OztrQ0FvQlgsOERBQUNGO3dCQUFJaUIsV0FBVTs7MENBQ2IsOERBQUNnQjtnQ0FBT0MsU0FBU3ZCO2dDQUFXd0IsVUFBVS9COzBDQUNwQyw0RUFBQ1AsMkVBQW1CQTs7Ozs7Ozs7OzswQ0FFdEIsOERBQUNvQztnQ0FBT0MsU0FBU3hCO2dDQUFXeUIsVUFBVS9COzBDQUNwQyw0RUFBQ04sMkVBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEM7R0E3R1NHO01BQUFBO0FBK0dULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvSG9tZS9HbGFuY2UvQ29tcG9uZW50cy9SaWdodC5qc3g/ZmFjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBBcnJvd0JhY2tJb3NOZXdJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFja0lvc05ld1wiO1xyXG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0ZvcndhcmRJb3NcIjtcclxuXHJcbmNvbnN0IEdsYW5jZVJpZ2h0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAucmlnaHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTA2NWY5MjA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAxcmVtO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJvbGQpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZSB7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUwNjVmOTIwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzExMTtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDByZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFyYSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWdodCk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZ2FwOiAwO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFyYSk7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJvbGQpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcmEtbWluaSk7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWxpZ2h0LWZvbnQpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZ3JleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICAgIGVtcHR5LWNlbGxzOiAxMDBweDtcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGNvbG9yOiAjMTExO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gUmlnaHQoKSB7XHJcbiAgY29uc3QgW2FjdGl2ZVNsaWRlLCBzZXRBY3RpdmVTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNBbmltYXRpbmcsIHNldElzQW5pbWF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2xpZGVzID0gW1xyXG4gICAge1xyXG4gICAgICByZXZpZXc6XHJcbiAgICAgICAgXCJTaGlwRXhJbmRpYSBleGNlZWRlZCBteSBleHBlY3RhdGlvbnMgd2l0aCB0aGVpciBlZmZpY2llbnQgc2hpcHBpbmcgc2VydmljZXMuIEkgaGlnaGx5IHJlY29tbWVuZCB0aGVtIVwiLFxyXG4gICAgICBuYW1lOiBcIkpvaG4gRG9lXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcIkN1c3RvbWVyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICByZXZpZXc6XHJcbiAgICAgICAgXCJJJ3ZlIGJlZW4gdXNpbmcgU2hpcEV4SW5kaWEgZm9yIGFsbCBteSBsb2dpc3RpY3MgbmVlZHMsIGFuZCB0aGV5J3ZlIG5ldmVyIGxldCBtZSBkb3duLiBHcmVhdCBjb21wYW55IVwiLFxyXG4gICAgICBuYW1lOiBcIkphbmUgU21pdGhcIixcclxuICAgICAgcG9zaXRpb246IFwiTG9naXN0aWNzIE1hbmFnZXJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJldmlldzpcclxuICAgICAgICBcIlNoaXBFeEluZGlhJ3MgZGVkaWNhdGlvbiB0byBvbi10aW1lIGRlbGl2ZXJpZXMgYW5kIGV4Y2VsbGVudCBjdXN0b21lciBzZXJ2aWNlIG1ha2VzIHRoZW0gdGhlIGJlc3QgaW4gdGhlIGJ1c2luZXNzLlwiLFxyXG4gICAgICBuYW1lOiBcIk1pY2hhZWwgSm9obnNvblwiLFxyXG4gICAgICBwb3NpdGlvbjogXCJPcGVyYXRpb25zIERpcmVjdG9yXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICByZXZpZXc6XHJcbiAgICAgICAgXCJBcyBhIGxvbmctdGltZSBwYXJ0bmVyIG9mIFNoaXBFeEluZGlhLCBJIGNhbiBhdHRlc3QgdG8gdGhlaXIgcmVsaWFiaWxpdHkgYW5kIHByb2Zlc3Npb25hbGlzbS5cIixcclxuICAgICAgbmFtZTogXCJTYXJhaCBXaWxsaWFtc1wiLFxyXG4gICAgICBwb3NpdGlvbjogXCJTdXBwbGllclwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzQW5pbWF0aW5nKSB7XHJcbiAgICAgIHNldElzQW5pbWF0aW5nKHRydWUpO1xyXG4gICAgICBzZXRBY3RpdmVTbGlkZSgocHJldlNsaWRlKSA9PiAocHJldlNsaWRlICsgMSkgJSBzbGlkZXMubGVuZ3RoKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldElzQW5pbWF0aW5nKGZhbHNlKTtcclxuICAgICAgfSwgMTAwMCk7IC8vIEFkanVzdCB0aGUgZHVyYXRpb24gYmFzZWQgb24geW91ciB0cmFuc2l0aW9uIHNldHRpbmdzXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc0FuaW1hdGluZykge1xyXG4gICAgICBzZXRJc0FuaW1hdGluZyh0cnVlKTtcclxuICAgICAgc2V0QWN0aXZlU2xpZGUoKHByZXZTbGlkZSkgPT5cclxuICAgICAgICBwcmV2U2xpZGUgPT09IDAgPyBzbGlkZXMubGVuZ3RoIC0gMSA6IHByZXZTbGlkZSAtIDFcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldElzQW5pbWF0aW5nKGZhbHNlKTtcclxuICAgICAgfSwgMTAwMCk7IC8vIEFkanVzdCB0aGUgZHVyYXRpb24gYmFzZWQgb24geW91ciB0cmFuc2l0aW9uIHNldHRpbmdzXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoIWlzQW5pbWF0aW5nKSB7XHJcbiAgICAgICAgbmV4dFNsaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDQwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICB9LCBbYWN0aXZlU2xpZGUsIGlzQW5pbWF0aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8R2xhbmNlUmlnaHRDb250YWluZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgPGgxPldoYXQgT3VyIENsaWVudHMgVGhpbmsgQWJvdXQgVXM/PC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyXCI+XHJcbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2VcclxuICAgICAgICAgICAgICBleGl0QmVmb3JlRW50ZXI9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIG1vZGU9XCJ3YWl0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2FjdGl2ZVNsaWRlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAtMTAwIH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cclxuICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeDogMTAwIH19XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgIGRhbXBpbmc6IDE1LFxyXG4gICAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwPntzbGlkZXNbYWN0aXZlU2xpZGVdLnJldmlld308L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPGgzPntzbGlkZXNbYWN0aXZlU2xpZGVdLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+e3NsaWRlc1thY3RpdmVTbGlkZV0ucG9zaXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHJldlNsaWRlfSBkaXNhYmxlZD17aXNBbmltYXRpbmd9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0JhY2tJb3NOZXdJY29uIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e25leHRTbGlkZX0gZGlzYWJsZWQ9e2lzQW5pbWF0aW5nfT5cclxuICAgICAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zSWNvbiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0dsYW5jZVJpZ2h0Q29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmlnaHQ7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQXJyb3dCYWNrSW9zTmV3SWNvbiIsIkFycm93Rm9yd2FyZElvc0ljb24iLCJHbGFuY2VSaWdodENvbnRhaW5lciIsImRpdiIsIlJpZ2h0IiwiYWN0aXZlU2xpZGUiLCJzZXRBY3RpdmVTbGlkZSIsImlzQW5pbWF0aW5nIiwic2V0SXNBbmltYXRpbmciLCJzbGlkZXMiLCJyZXZpZXciLCJuYW1lIiwicG9zaXRpb24iLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbGFzc05hbWUiLCJoMSIsImV4aXRCZWZvcmVFbnRlciIsImluaXRpYWwiLCJtb2RlIiwib3BhY2l0eSIsIngiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZGFtcGluZyIsInN0aWZmbmVzcyIsImR1cmF0aW9uIiwicCIsImgzIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Home/Glance/Components/Right.jsx\n"));

/***/ })

});