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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ArrowBackIosNew */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ArrowBackIosNew.js\");\n/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ArrowForwardIos */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ArrowForwardIos.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  .right {\\n    width: 100%;\\n    height: 90vh;\\n    background: #5065f920;\\n    border-radius: 40px !important;\\n    padding: 2rem;\\n    color: #111;\\n    font-family: var(--font);\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n    align-items: flex-start;\\n    gap: 1rem;\\n\\n    h1 {\\n      font-size: var(--heading);\\n      font-weight: 700;\\n      font-family: var(--bold);\\n      color: var(--text-color);\\n    }\\n\\n    .slider {\\n      display: flex;\\n      overflow-x: hidden;\\n      position: relative;\\n    }\\n\\n    .slide {\\n      min-width: 100%;\\n      height: 30vh;\\n      overflow-x: hidden;\\n      overflow-y: scroll;\\n      padding: 2rem;\\n      display: flex;\\n      flex-direction: column;\\n      align-items: flex-start;\\n      justify-content: flex-start;\\n      background-color: #5065f920;\\n      border-radius: 20px;\\n      color: #111;\\n      font-family: var(--font);\\n      text-align: left;\\n      gap: 1rem;\\n\\n      &::-webkit-scrollbar {\\n        width: 0rem;\\n      }\\n\\n      p {\\n        font-size: var(--para);\\n        font-weight: 400;\\n        font-family: var(--font-light);\\n        color: var(--text-color);\\n      }\\n\\n      .info {\\n        display: flex;\\n        justify-content: flex-start;\\n        align-items: flex-start;\\n        gap: 0;\\n        flex-direction: column;\\n\\n        h3 {\\n          font-size: var(--para);\\n          font-weight: 600;\\n          font-family: var(--bold);\\n          color: var(--text-color);\\n        }\\n\\n        p {\\n          font-size: var(--para-mini);\\n          font-weight: 400;\\n          font-family: var(--light-font);\\n          color: var(--text-grey);\\n        }\\n      }\\n    }\\n\\n    .buttons {\\n        width: 100%;\\n        display: flex;\\n        justify-content: space-between;\\n      button {\\n        background: transparent;\\n        border: none;\\n        outline: none;\\n        cursor: pointer;\\n        font-size: 2rem;\\n        color: #111;\\n        transition: all 0.3s ease-in-out;\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GlanceRightContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = GlanceRightContainer;\nfunction Right() {\n    _s();\n    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [isAnimating, setIsAnimating] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const slides = [\n        {\n            review: \"ShipExIndia exceeded my expectations with their efficient shipping services. I highly recommend them!\",\n            name: \"John Doe\",\n            position: \"Customer\"\n        },\n        {\n            review: \"I've been using ShipExIndia for all my logistics needs, and they've never let me down. Great company!\",\n            name: \"Jane Smith\",\n            position: \"Logistics Manager\"\n        },\n        {\n            review: \"ShipExIndia's dedication to on-time deliveries and excellent customer service makes them the best in the business.\",\n            name: \"Michael Johnson\",\n            position: \"Operations Director\"\n        },\n        {\n            review: \"As a long-time partner of ShipExIndia, I can attest to their reliability and professionalism.\",\n            name: \"Sarah Williams\",\n            position: \"Supplier\"\n        }\n    ];\n    const nextSlide = ()=>{\n        if (!isAnimating) {\n            setIsAnimating(true);\n            setActiveSlide((prevSlide)=>(prevSlide + 1) % slides.length);\n            setTimeout(()=>{\n                setIsAnimating(false);\n            }, 1000); // Adjust the duration based on your transition settings\n        }\n    };\n    const prevSlide = ()=>{\n        if (!isAnimating) {\n            setIsAnimating(true);\n            setActiveSlide((prevSlide)=>prevSlide === 0 ? slides.length - 1 : prevSlide - 1);\n            setTimeout(()=>{\n                setIsAnimating(false);\n            }, 1000); // Adjust the duration based on your transition settings\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (!isAnimating) {\n                nextSlide();\n            }\n        }, 4000);\n        return ()=>clearInterval(interval);\n    }, [\n        activeSlide,\n        isAnimating\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlanceRightContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"right\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        children: \"What Our Clients Think About Us?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                        lineNumber: 172,\n                        columnNumber: 11\n                    }, this),\n                    \".sliders\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"slider\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                            exitBeforeEnter: false,\n                            initial: false,\n                            mode: \"wait\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                className: \"slide\",\n                                initial: {\n                                    opacity: 0,\n                                    x: -100\n                                },\n                                animate: {\n                                    opacity: 1,\n                                    x: 0\n                                },\n                                exit: {\n                                    opacity: 0,\n                                    x: 100\n                                },\n                                transition: {\n                                    type: \"spring\",\n                                    damping: 15,\n                                    stiffness: 100,\n                                    duration: 1\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: slides[activeSlide].review\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                        lineNumber: 193,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"info\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                children: slides[activeSlide].name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                                lineNumber: 195,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                children: slides[activeSlide].position\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                                lineNumber: 196,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                        lineNumber: 194,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, activeSlide, true, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                lineNumber: 180,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                            lineNumber: 175,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                        lineNumber: 174,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"buttons\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: prevSlide,\n                                disabled: isAnimating,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                    lineNumber: 203,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                lineNumber: 202,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: nextSlide,\n                                disabled: isAnimating,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                    lineNumber: 206,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                lineNumber: 205,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                        lineNumber: 201,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                lineNumber: 171,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n            lineNumber: 170,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n        lineNumber: 169,\n        columnNumber: 5\n    }, this);\n}\n_s(Right, \"lmqg/+p6NKfxd5xfn6RjvWydDAE=\");\n_c1 = Right;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Right);\nvar _c, _c1;\n$RefreshReg$(_c, \"GlanceRightContainer\");\n$RefreshReg$(_c1, \"Right\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvSG9tZS9HbGFuY2UvQ29tcG9uZW50cy9SaWdodC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNZO0FBQ0s7QUFDYztBQUNBO0FBRXRFLE1BQU1RLHVCQUF1QlIseURBQU1BLENBQUNTLEdBQUc7S0FBakNEO0FBZ0dOLFNBQVNFOztJQUNQLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFFL0MsTUFBTWEsU0FBUztRQUNiO1lBQ0VDLFFBQ0U7WUFDRkMsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7UUFDQTtZQUNFRixRQUNFO1lBQ0ZDLE1BQU07WUFDTkMsVUFBVTtRQUNaO1FBQ0E7WUFDRUYsUUFDRTtZQUNGQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBO1lBQ0VGLFFBQ0U7WUFDRkMsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7S0FDRDtJQUVELE1BQU1DLFlBQVk7UUFDaEIsSUFBSSxDQUFDTixhQUFhO1lBQ2hCQyxlQUFlO1lBQ2ZGLGVBQWUsQ0FBQ1EsWUFBYyxDQUFDQSxZQUFZLEtBQUtMLE9BQU9NLE1BQU07WUFFN0RDLFdBQVc7Z0JBQ1RSLGVBQWU7WUFDakIsR0FBRyxPQUFPLHdEQUF3RDtRQUNwRTtJQUNGO0lBRUEsTUFBTU0sWUFBWTtRQUNoQixJQUFJLENBQUNQLGFBQWE7WUFDaEJDLGVBQWU7WUFDZkYsZUFBZSxDQUFDUSxZQUNkQSxjQUFjLElBQUlMLE9BQU9NLE1BQU0sR0FBRyxJQUFJRCxZQUFZO1lBR3BERSxXQUFXO2dCQUNUUixlQUFlO1lBQ2pCLEdBQUcsT0FBTyx3REFBd0Q7UUFDcEU7SUFDRjtJQUVBWCxnREFBU0EsQ0FBQztRQUNSLE1BQU1vQixXQUFXQyxZQUFZO1lBQzNCLElBQUksQ0FBQ1gsYUFBYTtnQkFDaEJNO1lBQ0Y7UUFDRixHQUFHO1FBRUgsT0FBTyxJQUFNTSxjQUFjRjtJQUM3QixHQUFHO1FBQUNaO1FBQWFFO0tBQVk7SUFFN0IscUJBQ0UsOERBQUNKO2tCQUNDLDRFQUFDRDtzQkFDQyw0RUFBQ0M7Z0JBQUlpQixXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQUc7Ozs7OztvQkFBcUM7a0NBRXpDLDhEQUFDbEI7d0JBQUlpQixXQUFVO2tDQUNiLDRFQUFDckIsMERBQWVBOzRCQUNkdUIsaUJBQWlCOzRCQUNqQkMsU0FBUzs0QkFDVEMsTUFBSztzQ0FFTCw0RUFBQzFCLGlEQUFNQSxDQUFDSyxHQUFHO2dDQUVUaUIsV0FBVTtnQ0FDVkcsU0FBUztvQ0FBRUUsU0FBUztvQ0FBR0MsR0FBRyxDQUFDO2dDQUFJO2dDQUMvQkMsU0FBUztvQ0FBRUYsU0FBUztvQ0FBR0MsR0FBRztnQ0FBRTtnQ0FDNUJFLE1BQU07b0NBQUVILFNBQVM7b0NBQUdDLEdBQUc7Z0NBQUk7Z0NBQzNCRyxZQUFZO29DQUNWQyxNQUFNO29DQUNOQyxTQUFTO29DQUNUQyxXQUFXO29DQUNYQyxVQUFVO2dDQUNaOztrREFFQSw4REFBQ0M7a0RBQUd6QixNQUFNLENBQUNKLFlBQVksQ0FBQ0ssTUFBTTs7Ozs7O2tEQUM5Qiw4REFBQ1A7d0NBQUlpQixXQUFVOzswREFDYiw4REFBQ2U7MERBQUkxQixNQUFNLENBQUNKLFlBQVksQ0FBQ00sSUFBSTs7Ozs7OzBEQUM3Qiw4REFBQ3VCOzBEQUFHekIsTUFBTSxDQUFDSixZQUFZLENBQUNPLFFBQVE7Ozs7Ozs7Ozs7Ozs7K0JBZjdCUDs7Ozs7Ozs7Ozs7Ozs7O2tDQW9CWCw4REFBQ0Y7d0JBQUlpQixXQUFVOzswQ0FDYiw4REFBQ2dCO2dDQUFPQyxTQUFTdkI7Z0NBQVd3QixVQUFVL0I7MENBQ3BDLDRFQUFDUCwyRUFBbUJBOzs7Ozs7Ozs7OzBDQUV0Qiw4REFBQ29DO2dDQUFPQyxTQUFTeEI7Z0NBQVd5QixVQUFVL0I7MENBQ3BDLDRFQUFDTiwyRUFBbUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9sQztHQTlHU0c7TUFBQUE7QUFnSFQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lL0dsYW5jZS9Db21wb25lbnRzL1JpZ2h0LmpzeD9mYWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IEFycm93QmFja0lvc05ld0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrSW9zTmV3XCI7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJb3NJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZElvc1wiO1xyXG5cclxuY29uc3QgR2xhbmNlUmlnaHRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC5yaWdodCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJhY2tncm91bmQ6ICM1MDY1ZjkyMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBjb2xvcjogIzExMTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LWZhbWlseTogdmFyKC0tYm9sZCk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlIHtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA2NWY5MjA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjMTExO1xyXG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogMHJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXJhKTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWxpZ2h0KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBnYXA6IDA7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXJhKTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tYm9sZCk7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFyYS1taW5pKTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbGlnaHQtZm9udCk7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ncmV5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBjb2xvcjogIzExMTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFJpZ2h0KCkge1xyXG4gIGNvbnN0IFthY3RpdmVTbGlkZSwgc2V0QWN0aXZlU2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzQW5pbWF0aW5nLCBzZXRJc0FuaW1hdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNsaWRlcyA9IFtcclxuICAgIHtcclxuICAgICAgcmV2aWV3OlxyXG4gICAgICAgIFwiU2hpcEV4SW5kaWEgZXhjZWVkZWQgbXkgZXhwZWN0YXRpb25zIHdpdGggdGhlaXIgZWZmaWNpZW50IHNoaXBwaW5nIHNlcnZpY2VzLiBJIGhpZ2hseSByZWNvbW1lbmQgdGhlbSFcIixcclxuICAgICAgbmFtZTogXCJKb2huIERvZVwiLFxyXG4gICAgICBwb3NpdGlvbjogXCJDdXN0b21lclwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcmV2aWV3OlxyXG4gICAgICAgIFwiSSd2ZSBiZWVuIHVzaW5nIFNoaXBFeEluZGlhIGZvciBhbGwgbXkgbG9naXN0aWNzIG5lZWRzLCBhbmQgdGhleSd2ZSBuZXZlciBsZXQgbWUgZG93bi4gR3JlYXQgY29tcGFueSFcIixcclxuICAgICAgbmFtZTogXCJKYW5lIFNtaXRoXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcIkxvZ2lzdGljcyBNYW5hZ2VyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICByZXZpZXc6XHJcbiAgICAgICAgXCJTaGlwRXhJbmRpYSdzIGRlZGljYXRpb24gdG8gb24tdGltZSBkZWxpdmVyaWVzIGFuZCBleGNlbGxlbnQgY3VzdG9tZXIgc2VydmljZSBtYWtlcyB0aGVtIHRoZSBiZXN0IGluIHRoZSBidXNpbmVzcy5cIixcclxuICAgICAgbmFtZTogXCJNaWNoYWVsIEpvaG5zb25cIixcclxuICAgICAgcG9zaXRpb246IFwiT3BlcmF0aW9ucyBEaXJlY3RvclwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcmV2aWV3OlxyXG4gICAgICAgIFwiQXMgYSBsb25nLXRpbWUgcGFydG5lciBvZiBTaGlwRXhJbmRpYSwgSSBjYW4gYXR0ZXN0IHRvIHRoZWlyIHJlbGlhYmlsaXR5IGFuZCBwcm9mZXNzaW9uYWxpc20uXCIsXHJcbiAgICAgIG5hbWU6IFwiU2FyYWggV2lsbGlhbXNcIixcclxuICAgICAgcG9zaXRpb246IFwiU3VwcGxpZXJcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc0FuaW1hdGluZykge1xyXG4gICAgICBzZXRJc0FuaW1hdGluZyh0cnVlKTtcclxuICAgICAgc2V0QWN0aXZlU2xpZGUoKHByZXZTbGlkZSkgPT4gKHByZXZTbGlkZSArIDEpICUgc2xpZGVzLmxlbmd0aCk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0FuaW1hdGluZyhmYWxzZSk7XHJcbiAgICAgIH0sIDEwMDApOyAvLyBBZGp1c3QgdGhlIGR1cmF0aW9uIGJhc2VkIG9uIHlvdXIgdHJhbnNpdGlvbiBzZXR0aW5nc1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcclxuICAgIGlmICghaXNBbmltYXRpbmcpIHtcclxuICAgICAgc2V0SXNBbmltYXRpbmcodHJ1ZSk7XHJcbiAgICAgIHNldEFjdGl2ZVNsaWRlKChwcmV2U2xpZGUpID0+XHJcbiAgICAgICAgcHJldlNsaWRlID09PSAwID8gc2xpZGVzLmxlbmd0aCAtIDEgOiBwcmV2U2xpZGUgLSAxXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0FuaW1hdGluZyhmYWxzZSk7XHJcbiAgICAgIH0sIDEwMDApOyAvLyBBZGp1c3QgdGhlIGR1cmF0aW9uIGJhc2VkIG9uIHlvdXIgdHJhbnNpdGlvbiBzZXR0aW5nc1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKCFpc0FuaW1hdGluZykge1xyXG4gICAgICAgIG5leHRTbGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LCA0MDAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW2FjdGl2ZVNsaWRlLCBpc0FuaW1hdGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEdsYW5jZVJpZ2h0Q29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgIDxoMT5XaGF0IE91ciBDbGllbnRzIFRoaW5rIEFib3V0IFVzPzwvaDE+XHJcbiAgICAgICAgICAuc2xpZGVyc1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJcIj5cclxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZVxyXG4gICAgICAgICAgICAgIGV4aXRCZWZvcmVFbnRlcj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgaW5pdGlhbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgbW9kZT1cIndhaXRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIGtleT17YWN0aXZlU2xpZGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZVwiXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0xMDAgfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxyXG4gICAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB4OiAxMDAgfX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgZGFtcGluZzogMTUsXHJcbiAgICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMTAwLFxyXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHA+e3NsaWRlc1thY3RpdmVTbGlkZV0ucmV2aWV3fTwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e3NsaWRlc1thY3RpdmVTbGlkZV0ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cD57c2xpZGVzW2FjdGl2ZVNsaWRlXS5wb3NpdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2U2xpZGV9IGRpc2FibGVkPXtpc0FuaW1hdGluZ30+XHJcbiAgICAgICAgICAgICAgPEFycm93QmFja0lvc05ld0ljb24gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bmV4dFNsaWRlfSBkaXNhYmxlZD17aXNBbmltYXRpbmd9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0ZvcndhcmRJb3NJY29uIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvR2xhbmNlUmlnaHRDb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWdodDtcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJBcnJvd0JhY2tJb3NOZXdJY29uIiwiQXJyb3dGb3J3YXJkSW9zSWNvbiIsIkdsYW5jZVJpZ2h0Q29udGFpbmVyIiwiZGl2IiwiUmlnaHQiLCJhY3RpdmVTbGlkZSIsInNldEFjdGl2ZVNsaWRlIiwiaXNBbmltYXRpbmciLCJzZXRJc0FuaW1hdGluZyIsInNsaWRlcyIsInJldmlldyIsIm5hbWUiLCJwb3NpdGlvbiIsIm5leHRTbGlkZSIsInByZXZTbGlkZSIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNsYXNzTmFtZSIsImgxIiwiZXhpdEJlZm9yZUVudGVyIiwiaW5pdGlhbCIsIm1vZGUiLCJvcGFjaXR5IiwieCIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsInR5cGUiLCJkYW1waW5nIiwic3RpZmZuZXNzIiwiZHVyYXRpb24iLCJwIiwiaDMiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Home/Glance/Components/Right.jsx\n"));

/***/ })

});