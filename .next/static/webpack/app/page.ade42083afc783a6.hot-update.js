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

/***/ "(app-pages-browser)/./app/page.jsx":
/*!**********************!*\
  !*** ./app/page.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_Home_FirstSection_FirstSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Home/FirstSection/FirstSection */ \"(app-pages-browser)/./Components/Home/FirstSection/FirstSection.jsx\");\n/* harmony import */ var _Components_Home_CompanyLogo_CompanyLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Home/CompanyLogo/CompanyLogo */ \"(app-pages-browser)/./Components/Home/CompanyLogo/CompanyLogo.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Avatar/Avatar */ \"(app-pages-browser)/./Components/Avatar/Avatar.jsx\");\n/* harmony import */ var _Components_Home_Mockup1_Mockup1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Home/Mockup1/Mockup1 */ \"(app-pages-browser)/./Components/Home/Mockup1/Mockup1.jsx\");\n/* harmony import */ var _Components_Home_Card_Cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Home/Card/Cards */ \"(app-pages-browser)/./Components/Home/Card/Cards.jsx\");\n/* harmony import */ var _Components_Home_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/Home/Timeline/Timeline */ \"(app-pages-browser)/./Components/Home/Timeline/Timeline.jsx\");\n/* harmony import */ var _Components_Home_Services_Services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Components/Home/Services/Services */ \"(app-pages-browser)/./Components/Home/Services/Services.jsx\");\n/* harmony import */ var _Components_Home_Glance_Glance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Components/Home/Glance/Glance */ \"(app-pages-browser)/./Components/Home/Glance/Glance.jsx\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n  height: 100%;\\n  transition: background-color 1s ease-in-out;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  min-height: 30vh;\\n  width: 100%;\\n  height: 100%;\\n  transition: background-color 1s ease-in-out; /* Duration of 1 second for background color change */\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject());\n_c = HomeContainer;\nconst SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject1());\n_c1 = SectionContainer;\nfunction Page() {\n    _s();\n    const containerRefs = [\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null)\n    ];\n    const mainRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const colors = [\n        \"#5065f9\",\n        \"#00c27c\",\n        \"#fff\",\n        \"#fff\",\n        \"#745fde\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollTop = window.scrollY;\n            const sectionTops = containerRefs.map((ref)=>ref.current.offsetTop);\n            for(let i = 0; i < sectionTops.length; i++){\n                if (scrollTop >= sectionTops[i] && scrollTop < sectionTops[i + 1]) {\n                    setActiveSection(i);\n                    // Use GSAP for smooth background color transition\n                    gsap__WEBPACK_IMPORTED_MODULE_12__.gsap.to(mainRef.current, {\n                        backgroundColor: colors[i],\n                        duration: 0.3,\n                        ease: \"power2.inOut\",\n                        yoyo: true\n                    });\n                    break;\n                }\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        activeSection\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HomeContainer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    ref: mainRef,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_FirstSection_FirstSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_CompanyLogo_CompanyLogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        containerRefs.map((ref, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SectionContainer, {\n                                ref: ref,\n                                style: {\n                                    backgroundColor: activeSection === index ? colors[index] : \"transparent\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Mockup1_Mockup1__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Card_Cards__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Services_Services__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Glance_Glance__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 19\n                                    }, this)\n                                ][index]\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Footer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"ODpbkWreiyaem4XJu0rWk6DTxaQ=\");\n_c2 = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HomeContainer\");\n$RefreshReg$(_c1, \"SectionContainer\");\n$RefreshReg$(_c2, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDWTtBQUNIO0FBQzdCO0FBQ1M7QUFDUTtBQUNQO0FBQ1U7QUFDQTtBQUNOO0FBQ3pCO0FBRTVCLE1BQU1jLGdCQUFnQlIsMERBQU1BLENBQUNTLEdBQUc7S0FBMUJEO0FBTU4sTUFBTUUsbUJBQW1CViwwREFBTUEsQ0FBQ1MsR0FBRztNQUE3QkM7QUFPTixTQUFTQzs7SUFDUCxNQUFNQyxnQkFBZ0I7UUFDcEJqQiw2Q0FBTUEsQ0FBQztRQUNQQSw2Q0FBTUEsQ0FBQztRQUNQQSw2Q0FBTUEsQ0FBQztRQUNQQSw2Q0FBTUEsQ0FBQztRQUNQQSw2Q0FBTUEsQ0FBQztLQUNSO0lBRUQsTUFBTWtCLFVBQVVsQiw2Q0FBTUEsQ0FBQztJQUV2QixNQUFNLENBQUNtQixlQUFlQyxpQkFBaUIsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1tQixTQUFTO1FBQUM7UUFBVztRQUFXO1FBQVE7UUFBUTtLQUFVO0lBRWhFcEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNcUIsZUFBZTtZQUNuQixNQUFNQyxZQUFZQyxPQUFPQyxPQUFPO1lBQ2hDLE1BQU1DLGNBQWNULGNBQWNVLEdBQUcsQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxPQUFPLENBQUNDLFNBQVM7WUFFcEUsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlMLFlBQVlNLE1BQU0sRUFBRUQsSUFBSztnQkFDM0MsSUFBSVIsYUFBYUcsV0FBVyxDQUFDSyxFQUFFLElBQUlSLFlBQVlHLFdBQVcsQ0FBQ0ssSUFBSSxFQUFFLEVBQUU7b0JBQ2pFWCxpQkFBaUJXO29CQUVqQixrREFBa0Q7b0JBQ2xEbkIsdUNBQUlBLENBQUNxQixFQUFFLENBQUNmLFFBQVFXLE9BQU8sRUFBRTt3QkFDdkJLLGlCQUFpQmIsTUFBTSxDQUFDVSxFQUFFO3dCQUMxQkksVUFBVTt3QkFDVkMsTUFBTTt3QkFDTkMsTUFBTTtvQkFDUjtvQkFDQTtnQkFDRjtZQUNGO1FBQ0Y7UUFFQWIsT0FBT2MsZ0JBQWdCLENBQUMsVUFBVWhCO1FBRWxDLE9BQU87WUFDTEUsT0FBT2UsbUJBQW1CLENBQUMsVUFBVWpCO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDSDtLQUFjO0lBRWxCLHFCQUNFOzswQkFDRSw4REFBQ047MEJBQ0MsNEVBQUMyQjtvQkFBS1osS0FBS1Y7O3NDQUNULDhEQUFDZixrRkFBWUE7Ozs7O3NDQUNiLDhEQUFDQyxnRkFBV0E7Ozs7O3dCQUNYYSxjQUFjVSxHQUFHLENBQUMsQ0FBQ0MsS0FBS2Esc0JBQ3ZCLDhEQUFDMUI7Z0NBQ0NhLEtBQUtBO2dDQUVMYyxPQUFPO29DQUNMUixpQkFDRWYsa0JBQWtCc0IsUUFBUXBCLE1BQU0sQ0FBQ29CLE1BQU0sR0FBRztnQ0FDOUM7MENBR0U7a0RBQ0UsOERBQUNsQyx3RUFBT0E7Ozs7O2tEQUNSLDhEQUFDQyxtRUFBS0E7Ozs7O2tEQUNOLDhEQUFDRSwwRUFBUUE7Ozs7O2tEQUNULDhEQUFDRCwwRUFBUUE7Ozs7O2tEQUNULDhEQUFDRSx1RUFBTUE7Ozs7O2lDQUNSLENBQUM4QixNQUFNOytCQWJMQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFtQmIsOERBQUNFOzs7Ozs7O0FBR1A7R0ExRVMzQjtNQUFBQTtBQTRFVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS5qc3g/NmU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZpcnN0U2VjdGlvbiBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvRmlyc3RTZWN0aW9uL0ZpcnN0U2VjdGlvblwiO1xuaW1wb3J0IENvbXBhbnlMb2dvIGZyb20gXCJAL0NvbXBvbmVudHMvSG9tZS9Db21wYW55TG9nby9Db21wYW55TG9nb1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkAvQ29tcG9uZW50cy9BdmF0YXIvQXZhdGFyXCI7XG5pbXBvcnQgTW9ja3VwMSBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvTW9ja3VwMS9Nb2NrdXAxXCI7XG5pbXBvcnQgQ2FyZHMgZnJvbSBcIkAvQ29tcG9uZW50cy9Ib21lL0NhcmQvQ2FyZHNcIjtcbmltcG9ydCBUaW1lbGluZSBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvVGltZWxpbmUvVGltZWxpbmVcIjtcbmltcG9ydCBTZXJ2aWNlcyBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvU2VydmljZXMvU2VydmljZXNcIjtcbmltcG9ydCBHbGFuY2UgZnJvbSBcIkAvQ29tcG9uZW50cy9Ib21lL0dsYW5jZS9HbGFuY2VcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuXG5jb25zdCBIb21lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcbmA7XG5cbmNvbnN0IFNlY3Rpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAzMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2UtaW4tb3V0OyAvKiBEdXJhdGlvbiBvZiAxIHNlY29uZCBmb3IgYmFja2dyb3VuZCBjb2xvciBjaGFuZ2UgKi9cbmA7XG5cbmZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRhaW5lclJlZnMgPSBbXG4gICAgdXNlUmVmKG51bGwpLFxuICAgIHVzZVJlZihudWxsKSxcbiAgICB1c2VSZWYobnVsbCksXG4gICAgdXNlUmVmKG51bGwpLFxuICAgIHVzZVJlZihudWxsKSxcbiAgXTtcblxuICBjb25zdCBtYWluUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IFthY3RpdmVTZWN0aW9uLCBzZXRBY3RpdmVTZWN0aW9uXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNvbG9ycyA9IFtcIiM1MDY1ZjlcIiwgXCIjMDBjMjdjXCIsIFwiI2ZmZlwiLCBcIiNmZmZcIiwgXCIjNzQ1ZmRlXCJdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBjb25zdCBzZWN0aW9uVG9wcyA9IGNvbnRhaW5lclJlZnMubWFwKChyZWYpID0+IHJlZi5jdXJyZW50Lm9mZnNldFRvcCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvblRvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBzZWN0aW9uVG9wc1tpXSAmJiBzY3JvbGxUb3AgPCBzZWN0aW9uVG9wc1tpICsgMV0pIHtcbiAgICAgICAgICBzZXRBY3RpdmVTZWN0aW9uKGkpO1xuXG4gICAgICAgICAgLy8gVXNlIEdTQVAgZm9yIHNtb290aCBiYWNrZ3JvdW5kIGNvbG9yIHRyYW5zaXRpb25cbiAgICAgICAgICBnc2FwLnRvKG1haW5SZWYuY3VycmVudCwge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaV0sXG4gICAgICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIixcbiAgICAgICAgICAgIHlveW86IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFthY3RpdmVTZWN0aW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhvbWVDb250YWluZXI+XG4gICAgICAgIDxtYWluIHJlZj17bWFpblJlZn0+XG4gICAgICAgICAgPEZpcnN0U2VjdGlvbiAvPlxuICAgICAgICAgIDxDb21wYW55TG9nbyAvPlxuICAgICAgICAgIHtjb250YWluZXJSZWZzLm1hcCgocmVmLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFNlY3Rpb25Db250YWluZXJcbiAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbiA9PT0gaW5kZXggPyBjb2xvcnNbaW5kZXhdIDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgPE1vY2t1cDEgLz4sXG4gICAgICAgICAgICAgICAgICA8Q2FyZHMgLz4sXG4gICAgICAgICAgICAgICAgICA8U2VydmljZXMgLz4sXG4gICAgICAgICAgICAgICAgICA8VGltZWxpbmUgLz4sXG4gICAgICAgICAgICAgICAgICA8R2xhbmNlIC8+LFxuICAgICAgICAgICAgICAgIF1baW5kZXhdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9Ib21lQ29udGFpbmVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGaXJzdFNlY3Rpb24iLCJDb21wYW55TG9nbyIsInN0eWxlZCIsIkF2YXRhciIsIk1vY2t1cDEiLCJDYXJkcyIsIlRpbWVsaW5lIiwiU2VydmljZXMiLCJHbGFuY2UiLCJnc2FwIiwiSG9tZUNvbnRhaW5lciIsImRpdiIsIlNlY3Rpb25Db250YWluZXIiLCJQYWdlIiwiY29udGFpbmVyUmVmcyIsIm1haW5SZWYiLCJhY3RpdmVTZWN0aW9uIiwic2V0QWN0aXZlU2VjdGlvbiIsImNvbG9ycyIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJzZWN0aW9uVG9wcyIsIm1hcCIsInJlZiIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJpIiwibGVuZ3RoIiwidG8iLCJiYWNrZ3JvdW5kQ29sb3IiLCJkdXJhdGlvbiIsImVhc2UiLCJ5b3lvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYWluIiwiaW5kZXgiLCJzdHlsZSIsIkZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});