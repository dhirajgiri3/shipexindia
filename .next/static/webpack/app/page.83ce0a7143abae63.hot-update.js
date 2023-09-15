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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ArrowBackIosNew */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ArrowBackIosNew.js\");\n/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ArrowForwardIos */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ArrowForwardIos.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: grid;\\n  place-items: center;\\n  .right {\\n    width: 100%;\\n    height: 90vh;\\n    background: #5065f920;\\n    border-radius: 40px !important;\\n    padding: 2rem;\\n    color: #111;\\n    font-family: var(--font);\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n    align-items: flex-start;\\n    gap: 3rem;\\n\\n    @media screen and (max-width: 768px) {\\n      min-height: 30vh;\\n      height: 100%;\\n    }\\n\\n    h1 {\\n      font-size: var(--heading);\\n      font-weight: 700;\\n      font-family: var(--bold);\\n      color: var(--text-color);\\n\\n      @media screen and (max-width: 768px) {\\n        font-size: var(--heading-small);\\n      }\\n    }\\n\\n    .sliders {\\n      width: 100%;\\n      height: 100%;\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: flex-start;\\n      align-items: flex-start;\\n      gap: 1.5rem;\\n      .slider {\\n        display: flex;\\n        overflow-x: hidden;\\n        position: relative;\\n      }\\n\\n      .slide {\\n        min-width: 100%;\\n        height: 40vh;\\n        overflow-x: hidden;\\n        overflow-y: scroll;\\n        padding: 2rem;\\n        display: flex;\\n        flex-direction: column;\\n        align-items: flex-start;\\n        justify-content: flex-start;\\n        background-color: #5065f920;\\n        border-radius: 20px;\\n        color: #111;\\n        font-family: var(--font);\\n        text-align: left;\\n        gap: 1rem;\\n\\n        &::-webkit-scrollbar {\\n          width: 0rem;\\n        }\\n\\n        p {\\n          font-size: var(--para);\\n          font-weight: 400;\\n          font-family: var(--font-light);\\n          color: var(--text-color);\\n        }\\n\\n        .info {\\n          display: flex;\\n          justify-content: flex-start;\\n          align-items: flex-start;\\n          gap: 0;\\n          flex-direction: column;\\n\\n          h3 {\\n            font-size: var(--para);\\n            font-weight: 600;\\n            font-family: var(--bold);\\n            color: var(--text-color);\\n          }\\n\\n          p {\\n            font-size: var(--para-mini);\\n            font-weight: 400;\\n            font-family: var(--light-font);\\n            color: var(--text-grey);\\n          }\\n        }\\n      }\\n\\n      .buttons {\\n        width: 100%;\\n        display: flex;\\n        justify-content: space-between;\\n        button {\\n          background: transparent;\\n          border: none;\\n          outline: none;\\n          cursor: pointer;\\n          font-size: var(--heading);\\n          color: #111;\\n          transition: all 0.3s ease-in-out;\\n        }\\n      }\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst GlanceRightContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = GlanceRightContainer;\nconst upVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1,\n            ease: \"easeInOut\",\n            stiffness: 100,\n            damping: 15\n        }\n    }\n};\nfunction Right() {\n    _s();\n    const [activeSlide, setActiveSlide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [isAnimating, setIsAnimating] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const slides = [\n        {\n            review: \"ShipExIndia exceeded my expectations with their efficient shipping services. I highly recommend them!\",\n            name: \"John Doe\",\n            position: \"Customer\"\n        },\n        {\n            review: \"I've been using ShipExIndia for all my logistics needs, and they've never let me down. Great company!\",\n            name: \"Jane Smith\",\n            position: \"Logistics Manager\"\n        },\n        {\n            review: \"ShipExIndia's dedication to on-time deliveries and excellent customer service makes them the best in the business.\",\n            name: \"Michael Johnson\",\n            position: \"Operations Director\"\n        },\n        {\n            review: \"As a long-time partner of ShipExIndia, I can attest to their reliability and professionalism.\",\n            name: \"Sarah Williams\",\n            position: \"Supplier\"\n        }\n    ];\n    const nextSlide = ()=>{\n        if (!isAnimating) {\n            setIsAnimating(true);\n            setActiveSlide((prevSlide)=>(prevSlide + 1) % slides.length);\n            setTimeout(()=>{\n                setIsAnimating(false);\n            }, 1000); // Adjust the duration based on your transition settings\n        }\n    };\n    const prevSlide = ()=>{\n        if (!isAnimating) {\n            setIsAnimating(true);\n            setActiveSlide((prevSlide)=>prevSlide === 0 ? slides.length - 1 : prevSlide - 1);\n            setTimeout(()=>{\n                setIsAnimating(false);\n            }, 1000); // Adjust the duration based on your transition settings\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            if (!isAnimating) {\n                nextSlide();\n            }\n        }, 4000);\n        return ()=>clearInterval(interval);\n    }, [\n        activeSlide,\n        isAnimating\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlanceRightContainer, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"right\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h1, {\n                        variants: upVariants,\n                        initial: \"hidden\",\n                        whileInView: \"visible\",\n                        children: \"What Our Clients Think About Us?\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                        lineNumber: 206,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"sliders\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                variants: upVariants,\n                                initial: \"hidden\",\n                                whileInView: \"visible\",\n                                className: \"slider\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n                                    exitBeforeEnter: false,\n                                    initial: false,\n                                    mode: \"wait\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                        className: \"slide\",\n                                        initial: {\n                                            opacity: 0,\n                                            x: -100\n                                        },\n                                        animate: {\n                                            opacity: 1,\n                                            x: 0\n                                        },\n                                        exit: {\n                                            opacity: 0,\n                                            x: 100\n                                        },\n                                        transition: {\n                                            type: \"spring\",\n                                            damping: 15,\n                                            stiffness: 100,\n                                            duration: 1\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                children: slides[activeSlide].review\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                                lineNumber: 238,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                className: \"info\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                        children: slides[activeSlide].name\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                                        lineNumber: 240,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                        children: slides[activeSlide].position\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                                        lineNumber: 241,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                                lineNumber: 239,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, activeSlide, true, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                        lineNumber: 225,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                    lineNumber: 220,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                lineNumber: 214,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        onClick: prevSlide,\n                                        disabled: isAnimating,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_ArrowBackIosNew__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                            lineNumber: 248,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                        lineNumber: 247,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        onClick: nextSlide,\n                                        disabled: isAnimating,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                            lineNumber: 251,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                        lineNumber: 250,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                                lineNumber: 246,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                        lineNumber: 213,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n                lineNumber: 205,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n            lineNumber: 204,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Right.jsx\",\n        lineNumber: 203,\n        columnNumber: 5\n    }, this);\n}\n_s(Right, \"lmqg/+p6NKfxd5xfn6RjvWydDAE=\");\n_c1 = Right;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Right);\nvar _c, _c1;\n$RefreshReg$(_c, \"GlanceRightContainer\");\n$RefreshReg$(_c1, \"Right\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvSG9tZS9HbGFuY2UvQ29tcG9uZW50cy9SaWdodC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNZO0FBQ0s7QUFDYztBQUNBO0FBRXRFLE1BQU1RLHVCQUF1QlIseURBQU1BLENBQUNTLEdBQUc7S0FBakNEO0FBb0hOLE1BQU1FLGFBQWE7SUFDakJDLFFBQVE7UUFBRUMsU0FBUztRQUFHQyxHQUFHO0lBQUc7SUFDNUJDLFNBQVM7UUFDUEYsU0FBUztRQUNUQyxHQUFHO1FBQ0hFLFlBQVk7WUFDVkMsVUFBVTtZQUNWQyxNQUFNO1lBQ05DLFdBQVc7WUFDWEMsU0FBUztRQUNYO0lBQ0Y7QUFDRjtBQUVBLFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDcUIsYUFBYUMsZUFBZSxHQUFHdEIsK0NBQVFBLENBQUM7SUFFL0MsTUFBTXVCLFNBQVM7UUFDYjtZQUNFQyxRQUNFO1lBQ0ZDLE1BQU07WUFDTkMsVUFBVTtRQUNaO1FBQ0E7WUFDRUYsUUFDRTtZQUNGQyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBO1lBQ0VGLFFBQ0U7WUFDRkMsTUFBTTtZQUNOQyxVQUFVO1FBQ1o7UUFDQTtZQUNFRixRQUNFO1lBQ0ZDLE1BQU07WUFDTkMsVUFBVTtRQUNaO0tBQ0Q7SUFFRCxNQUFNQyxZQUFZO1FBQ2hCLElBQUksQ0FBQ04sYUFBYTtZQUNoQkMsZUFBZTtZQUNmRixlQUFlLENBQUNRLFlBQWMsQ0FBQ0EsWUFBWSxLQUFLTCxPQUFPTSxNQUFNO1lBRTdEQyxXQUFXO2dCQUNUUixlQUFlO1lBQ2pCLEdBQUcsT0FBTyx3REFBd0Q7UUFDcEU7SUFDRjtJQUVBLE1BQU1NLFlBQVk7UUFDaEIsSUFBSSxDQUFDUCxhQUFhO1lBQ2hCQyxlQUFlO1lBQ2ZGLGVBQWUsQ0FBQ1EsWUFDZEEsY0FBYyxJQUFJTCxPQUFPTSxNQUFNLEdBQUcsSUFBSUQsWUFBWTtZQUdwREUsV0FBVztnQkFDVFIsZUFBZTtZQUNqQixHQUFHLE9BQU8sd0RBQXdEO1FBQ3BFO0lBQ0Y7SUFFQXJCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTThCLFdBQVdDLFlBQVk7WUFDM0IsSUFBSSxDQUFDWCxhQUFhO2dCQUNoQk07WUFDRjtRQUNGLEdBQUc7UUFFSCxPQUFPLElBQU1NLGNBQWNGO0lBQzdCLEdBQUc7UUFBQ1o7UUFBYUU7S0FBWTtJQUU3QixxQkFDRSw4REFBQ2Q7a0JBQ0MsNEVBQUNEO3NCQUNDLDRFQUFDQztnQkFBSTJCLFdBQVU7O2tDQUNiLDhEQUFDaEMsaURBQU1BLENBQUNpQyxFQUFFO3dCQUNSQyxVQUFVNUI7d0JBQ1Y2QixTQUFRO3dCQUNSQyxhQUFZO2tDQUNiOzs7Ozs7a0NBR0QsOERBQUMvQjt3QkFBSTJCLFdBQVU7OzBDQUNiLDhEQUFDaEMsaURBQU1BLENBQUNLLEdBQUc7Z0NBQ1Q2QixVQUFVNUI7Z0NBQ1Y2QixTQUFRO2dDQUNSQyxhQUFZO2dDQUNaSixXQUFVOzBDQUVWLDRFQUFDL0IsMERBQWVBO29DQUNkb0MsaUJBQWlCO29DQUNqQkYsU0FBUztvQ0FDVEcsTUFBSzs4Q0FFTCw0RUFBQ3RDLGlEQUFNQSxDQUFDSyxHQUFHO3dDQUVUMkIsV0FBVTt3Q0FDVkcsU0FBUzs0Q0FBRTNCLFNBQVM7NENBQUcrQixHQUFHLENBQUM7d0NBQUk7d0NBQy9CQyxTQUFTOzRDQUFFaEMsU0FBUzs0Q0FBRytCLEdBQUc7d0NBQUU7d0NBQzVCRSxNQUFNOzRDQUFFakMsU0FBUzs0Q0FBRytCLEdBQUc7d0NBQUk7d0NBQzNCNUIsWUFBWTs0Q0FDVitCLE1BQU07NENBQ04zQixTQUFTOzRDQUNURCxXQUFXOzRDQUNYRixVQUFVO3dDQUNaOzswREFFQSw4REFBQytCOzBEQUFHdEIsTUFBTSxDQUFDSixZQUFZLENBQUNLLE1BQU07Ozs7OzswREFDOUIsOERBQUNqQjtnREFBSTJCLFdBQVU7O2tFQUNiLDhEQUFDWTtrRUFBSXZCLE1BQU0sQ0FBQ0osWUFBWSxDQUFDTSxJQUFJOzs7Ozs7a0VBQzdCLDhEQUFDb0I7a0VBQUd0QixNQUFNLENBQUNKLFlBQVksQ0FBQ08sUUFBUTs7Ozs7Ozs7Ozs7Ozt1Q0FmN0JQOzs7Ozs7Ozs7Ozs7Ozs7MENBb0JYLDhEQUFDWjtnQ0FBSTJCLFdBQVU7O2tEQUNiLDhEQUFDYTt3Q0FBT0MsU0FBU3BCO3dDQUFXcUIsVUFBVTVCO2tEQUNwQyw0RUFBQ2pCLDJFQUFtQkE7Ozs7Ozs7Ozs7a0RBRXRCLDhEQUFDMkM7d0NBQU9DLFNBQVNyQjt3Q0FBV3NCLFVBQVU1QjtrREFDcEMsNEVBQUNoQiwyRUFBbUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwQztHQTFIU2E7TUFBQUE7QUE0SFQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lL0dsYW5jZS9Db21wb25lbnRzL1JpZ2h0LmpzeD9mYWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IEFycm93QmFja0lvc05ld0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrSW9zTmV3XCI7XHJcbmltcG9ydCBBcnJvd0ZvcndhcmRJb3NJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZElvc1wiO1xyXG5cclxuY29uc3QgR2xhbmNlUmlnaHRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAucmlnaHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTA2NWY5MjA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAzcmVtO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDMwdmg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZyk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2xkKTtcclxuICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctc21hbGwpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlcnMge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBnYXA6IDEuNXJlbTtcclxuICAgICAgLnNsaWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2xpZGUge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUwNjVmOTIwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICMxMTE7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZ2FwOiAxcmVtO1xyXG5cclxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgICB3aWR0aDogMHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXJhKTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1saWdodCk7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICBnYXA6IDA7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXJhKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJvbGQpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFyYS1taW5pKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWxpZ2h0LWZvbnQpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ncmV5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b25zIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nKTtcclxuICAgICAgICAgIGNvbG9yOiAjMTExO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdXBWYXJpYW50cyA9IHtcclxuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogNTAgfSxcclxuICB2aXNpYmxlOiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgeTogMCxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXHJcbiAgICAgIHN0aWZmbmVzczogMTAwLFxyXG4gICAgICBkYW1waW5nOiAxNSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIFJpZ2h0KCkge1xyXG4gIGNvbnN0IFthY3RpdmVTbGlkZSwgc2V0QWN0aXZlU2xpZGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2lzQW5pbWF0aW5nLCBzZXRJc0FuaW1hdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNsaWRlcyA9IFtcclxuICAgIHtcclxuICAgICAgcmV2aWV3OlxyXG4gICAgICAgIFwiU2hpcEV4SW5kaWEgZXhjZWVkZWQgbXkgZXhwZWN0YXRpb25zIHdpdGggdGhlaXIgZWZmaWNpZW50IHNoaXBwaW5nIHNlcnZpY2VzLiBJIGhpZ2hseSByZWNvbW1lbmQgdGhlbSFcIixcclxuICAgICAgbmFtZTogXCJKb2huIERvZVwiLFxyXG4gICAgICBwb3NpdGlvbjogXCJDdXN0b21lclwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcmV2aWV3OlxyXG4gICAgICAgIFwiSSd2ZSBiZWVuIHVzaW5nIFNoaXBFeEluZGlhIGZvciBhbGwgbXkgbG9naXN0aWNzIG5lZWRzLCBhbmQgdGhleSd2ZSBuZXZlciBsZXQgbWUgZG93bi4gR3JlYXQgY29tcGFueSFcIixcclxuICAgICAgbmFtZTogXCJKYW5lIFNtaXRoXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcIkxvZ2lzdGljcyBNYW5hZ2VyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICByZXZpZXc6XHJcbiAgICAgICAgXCJTaGlwRXhJbmRpYSdzIGRlZGljYXRpb24gdG8gb24tdGltZSBkZWxpdmVyaWVzIGFuZCBleGNlbGxlbnQgY3VzdG9tZXIgc2VydmljZSBtYWtlcyB0aGVtIHRoZSBiZXN0IGluIHRoZSBidXNpbmVzcy5cIixcclxuICAgICAgbmFtZTogXCJNaWNoYWVsIEpvaG5zb25cIixcclxuICAgICAgcG9zaXRpb246IFwiT3BlcmF0aW9ucyBEaXJlY3RvclwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcmV2aWV3OlxyXG4gICAgICAgIFwiQXMgYSBsb25nLXRpbWUgcGFydG5lciBvZiBTaGlwRXhJbmRpYSwgSSBjYW4gYXR0ZXN0IHRvIHRoZWlyIHJlbGlhYmlsaXR5IGFuZCBwcm9mZXNzaW9uYWxpc20uXCIsXHJcbiAgICAgIG5hbWU6IFwiU2FyYWggV2lsbGlhbXNcIixcclxuICAgICAgcG9zaXRpb246IFwiU3VwcGxpZXJcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFpc0FuaW1hdGluZykge1xyXG4gICAgICBzZXRJc0FuaW1hdGluZyh0cnVlKTtcclxuICAgICAgc2V0QWN0aXZlU2xpZGUoKHByZXZTbGlkZSkgPT4gKHByZXZTbGlkZSArIDEpICUgc2xpZGVzLmxlbmd0aCk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0FuaW1hdGluZyhmYWxzZSk7XHJcbiAgICAgIH0sIDEwMDApOyAvLyBBZGp1c3QgdGhlIGR1cmF0aW9uIGJhc2VkIG9uIHlvdXIgdHJhbnNpdGlvbiBzZXR0aW5nc1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcclxuICAgIGlmICghaXNBbmltYXRpbmcpIHtcclxuICAgICAgc2V0SXNBbmltYXRpbmcodHJ1ZSk7XHJcbiAgICAgIHNldEFjdGl2ZVNsaWRlKChwcmV2U2xpZGUpID0+XHJcbiAgICAgICAgcHJldlNsaWRlID09PSAwID8gc2xpZGVzLmxlbmd0aCAtIDEgOiBwcmV2U2xpZGUgLSAxXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0FuaW1hdGluZyhmYWxzZSk7XHJcbiAgICAgIH0sIDEwMDApOyAvLyBBZGp1c3QgdGhlIGR1cmF0aW9uIGJhc2VkIG9uIHlvdXIgdHJhbnNpdGlvbiBzZXR0aW5nc1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKCFpc0FuaW1hdGluZykge1xyXG4gICAgICAgIG5leHRTbGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LCA0MDAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgfSwgW2FjdGl2ZVNsaWRlLCBpc0FuaW1hdGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEdsYW5jZVJpZ2h0Q29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgIDxtb3Rpb24uaDFcclxuICAgICAgICAgICAgdmFyaWFudHM9e3VwVmFyaWFudHN9XHJcbiAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBXaGF0IE91ciBDbGllbnRzIFRoaW5rIEFib3V0IFVzP1xyXG4gICAgICAgICAgPC9tb3Rpb24uaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcnNcIj5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICB2YXJpYW50cz17dXBWYXJpYW50c31cclxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlXHJcbiAgICAgICAgICAgICAgICBleGl0QmVmb3JlRW50ZXI9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBtb2RlPVwid2FpdFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAga2V5PXthY3RpdmVTbGlkZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVcIlxyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0xMDAgfX1cclxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19XHJcbiAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeDogMTAwIH19XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhbXBpbmc6IDE1LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8cD57c2xpZGVzW2FjdGl2ZVNsaWRlXS5yZXZpZXd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e3NsaWRlc1thY3RpdmVTbGlkZV0ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntzbGlkZXNbYWN0aXZlU2xpZGVdLnBvc2l0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcmV2U2xpZGV9IGRpc2FibGVkPXtpc0FuaW1hdGluZ30+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dCYWNrSW9zTmV3SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bmV4dFNsaWRlfSBkaXNhYmxlZD17aXNBbmltYXRpbmd9PlxyXG4gICAgICAgICAgICAgICAgPEFycm93Rm9yd2FyZElvc0ljb24gLz5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9HbGFuY2VSaWdodENvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJpZ2h0O1xyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkFycm93QmFja0lvc05ld0ljb24iLCJBcnJvd0ZvcndhcmRJb3NJY29uIiwiR2xhbmNlUmlnaHRDb250YWluZXIiLCJkaXYiLCJ1cFZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJSaWdodCIsImFjdGl2ZVNsaWRlIiwic2V0QWN0aXZlU2xpZGUiLCJpc0FuaW1hdGluZyIsInNldElzQW5pbWF0aW5nIiwic2xpZGVzIiwicmV2aWV3IiwibmFtZSIsInBvc2l0aW9uIiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwibGVuZ3RoIiwic2V0VGltZW91dCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xhc3NOYW1lIiwiaDEiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsImV4aXRCZWZvcmVFbnRlciIsIm1vZGUiLCJ4IiwiYW5pbWF0ZSIsImV4aXQiLCJ0eXBlIiwicCIsImgzIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Home/Glance/Components/Right.jsx\n"));

/***/ })

});