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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_Home_FirstSection_FirstSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Home/FirstSection/FirstSection */ \"(app-pages-browser)/./Components/Home/FirstSection/FirstSection.jsx\");\n/* harmony import */ var _Components_Home_CompanyLogo_CompanyLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Home/CompanyLogo/CompanyLogo */ \"(app-pages-browser)/./Components/Home/CompanyLogo/CompanyLogo.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Avatar/Avatar */ \"(app-pages-browser)/./Components/Avatar/Avatar.jsx\");\n/* harmony import */ var _Components_Home_Mockup1_Mockup1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Home/Mockup1/Mockup1 */ \"(app-pages-browser)/./Components/Home/Mockup1/Mockup1.jsx\");\n/* harmony import */ var _Components_Home_Card_Cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Home/Card/Cards */ \"(app-pages-browser)/./Components/Home/Card/Cards.jsx\");\n/* harmony import */ var _Components_Home_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/Home/Timeline/Timeline */ \"(app-pages-browser)/./Components/Home/Timeline/Timeline.jsx\");\n/* harmony import */ var _Components_Home_Services_Services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Components/Home/Services/Services */ \"(app-pages-browser)/./Components/Home/Services/Services.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n  height: 100%;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  min-height: 30vh;\\n  width: 100%;\\n  height: 100%;\\n  transition: background-color 1s ease; /* Duration of 1 second for background color change */\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div(_templateObject());\n_c = HomeContainer;\nconst SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div(_templateObject1());\n_c1 = SectionContainer;\nfunction Page() {\n    _s();\n    const containerRefs = [\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null)\n    ];\n    const mainRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const colors = [\n        \"#5065f9\",\n        \"#eee\",\n        ,\n        \"#101010\",\n        \"#745fde\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollTop = window.scrollY;\n            const sectionTops = containerRefs.map((ref)=>ref.current.offsetTop);\n            for(let i = 0; i < sectionTops.length; i++){\n                if (scrollTop >= sectionTops[i] && scrollTop < sectionTops[i + 1]) {\n                    setActiveSection(i);\n                    break;\n                }\n            }\n            mainRef.current.style.backgroundColor = colors[activeSection];\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        activeSection\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HomeContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n            ref: mainRef,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_FirstSection_FirstSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_CompanyLogo_CompanyLogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this),\n                containerRefs.map((ref, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SectionContainer, {\n                        ref: ref,\n                        style: {\n                            backgroundColor: activeSection === index ? colors[index] : \"transparent\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Mockup1_Mockup1__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 16\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Card_Cards__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 40\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Services_Services__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 54\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 68\n                            }, this)\n                        ][index]\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"ODpbkWreiyaem4XJu0rWk6DTxaQ=\");\n_c2 = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HomeContainer\");\n$RefreshReg$(_c1, \"SectionContainer\");\n$RefreshReg$(_c2, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTJEO0FBQ1k7QUFDSDtBQUM3QjtBQUNTO0FBQ1E7QUFDUDtBQUNVO0FBQ0E7QUFFM0QsTUFBTVksZ0JBQWdCTiwwREFBTUEsQ0FBQ08sR0FBRztLQUExQkQ7QUFLTixNQUFNRSxtQkFBbUJSLDBEQUFNQSxDQUFDTyxHQUFHO01BQTdCQztBQU9OLFNBQVNDOztJQUNQLE1BQU1DLGdCQUFnQjtRQUNwQmYsNkNBQU1BLENBQUM7UUFDUEEsNkNBQU1BLENBQUM7UUFDUEEsNkNBQU1BLENBQUM7UUFDUEEsNkNBQU1BLENBQUM7UUFDUEEsNkNBQU1BLENBQUM7S0FDUjtJQUVELE1BQU1nQixVQUFVaEIsNkNBQU1BLENBQUM7SUFFdkIsTUFBTSxDQUFDaUIsZUFBZUMsaUJBQWlCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNaUIsU0FBUztRQUFDO1FBQVc7O1FBQVU7UUFBVztLQUFVO0lBRTFEbEIsZ0RBQVNBLENBQUM7UUFDUixNQUFNbUIsZUFBZTtZQUNuQixNQUFNQyxZQUFZQyxPQUFPQyxPQUFPO1lBQ2hDLE1BQU1DLGNBQWNULGNBQWNVLEdBQUcsQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxPQUFPLENBQUNDLFNBQVM7WUFFcEUsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlMLFlBQVlNLE1BQU0sRUFBRUQsSUFBSztnQkFDM0MsSUFBSVIsYUFBYUcsV0FBVyxDQUFDSyxFQUFFLElBQUlSLFlBQVlHLFdBQVcsQ0FBQ0ssSUFBSSxFQUFFLEVBQUU7b0JBQ2pFWCxpQkFBaUJXO29CQUNqQjtnQkFDRjtZQUNGO1lBRUFiLFFBQVFXLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDQyxlQUFlLEdBQUdiLE1BQU0sQ0FBQ0YsY0FBYztRQUMvRDtRQUVBSyxPQUFPVyxnQkFBZ0IsQ0FBQyxVQUFVYjtRQUVsQyxPQUFPO1lBQ0xFLE9BQU9ZLG1CQUFtQixDQUFDLFVBQVVkO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDSDtLQUFjO0lBRWxCLHFCQUNFLDhEQUFDTjtrQkFDQyw0RUFBQ3dCO1lBQUtULEtBQUtWOzs4QkFDVCw4REFBQ2Isa0ZBQVlBOzs7Ozs4QkFDYiw4REFBQ0MsZ0ZBQVdBOzs7OztnQkFDWFcsY0FBY1UsR0FBRyxDQUFDLENBQUNDLEtBQUtVLHNCQUN2Qiw4REFBQ3ZCO3dCQUNDYSxLQUFLQTt3QkFFTEssT0FBTzs0QkFDTEMsaUJBQ0VmLGtCQUFrQm1CLFFBQVFqQixNQUFNLENBQUNpQixNQUFNLEdBQUc7d0JBQzlDO2tDQUdFOzBDQUFDLDhEQUFDN0Isd0VBQU9BOzs7OzswQ0FBSyw4REFBQ0MsbUVBQUtBOzs7OzswQ0FBSyw4REFBQ0MsMEVBQVFBOzs7OzswQ0FBSyw4REFBQ0MsMEVBQVFBOzs7OzswQ0FBSyw4REFBQ0osaUVBQU1BOzs7Ozt5QkFBSSxDQUM5RDhCLE1BQ0Q7dUJBVEVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JqQjtHQTdEU3RCO01BQUFBO0FBK0RULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzeD82ZTQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlyc3RTZWN0aW9uIGZyb20gXCJAL0NvbXBvbmVudHMvSG9tZS9GaXJzdFNlY3Rpb24vRmlyc3RTZWN0aW9uXCI7XG5pbXBvcnQgQ29tcGFueUxvZ28gZnJvbSBcIkAvQ29tcG9uZW50cy9Ib21lL0NvbXBhbnlMb2dvL0NvbXBhbnlMb2dvXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiQC9Db21wb25lbnRzL0F2YXRhci9BdmF0YXJcIjtcbmltcG9ydCBNb2NrdXAxIGZyb20gXCJAL0NvbXBvbmVudHMvSG9tZS9Nb2NrdXAxL01vY2t1cDFcIjtcbmltcG9ydCBDYXJkcyBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvQ2FyZC9DYXJkc1wiO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gXCJAL0NvbXBvbmVudHMvSG9tZS9UaW1lbGluZS9UaW1lbGluZVwiO1xuaW1wb3J0IFNlcnZpY2VzIGZyb20gXCJAL0NvbXBvbmVudHMvSG9tZS9TZXJ2aWNlcy9TZXJ2aWNlc1wiO1xuXG5jb25zdCBIb21lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbmA7XG5cbmNvbnN0IFNlY3Rpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAzMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7IC8qIER1cmF0aW9uIG9mIDEgc2Vjb25kIGZvciBiYWNrZ3JvdW5kIGNvbG9yIGNoYW5nZSAqL1xuYDtcblxuZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3QgY29udGFpbmVyUmVmcyA9IFtcbiAgICB1c2VSZWYobnVsbCksXG4gICAgdXNlUmVmKG51bGwpLFxuICAgIHVzZVJlZihudWxsKSxcbiAgICB1c2VSZWYobnVsbCksXG4gICAgdXNlUmVmKG51bGwpLFxuICBdO1xuXG4gIGNvbnN0IG1haW5SZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgW2FjdGl2ZVNlY3Rpb24sIHNldEFjdGl2ZVNlY3Rpb25dID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgY29sb3JzID0gW1wiIzUwNjVmOVwiLCBcIiNlZWVcIiwgLCBcIiMxMDEwMTBcIiwgXCIjNzQ1ZmRlXCJdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBjb25zdCBzZWN0aW9uVG9wcyA9IGNvbnRhaW5lclJlZnMubWFwKChyZWYpID0+IHJlZi5jdXJyZW50Lm9mZnNldFRvcCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvblRvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBzZWN0aW9uVG9wc1tpXSAmJiBzY3JvbGxUb3AgPCBzZWN0aW9uVG9wc1tpICsgMV0pIHtcbiAgICAgICAgICBzZXRBY3RpdmVTZWN0aW9uKGkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1haW5SZWYuY3VycmVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcnNbYWN0aXZlU2VjdGlvbl07XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbYWN0aXZlU2VjdGlvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPEhvbWVDb250YWluZXI+XG4gICAgICA8bWFpbiByZWY9e21haW5SZWZ9PlxuICAgICAgICA8Rmlyc3RTZWN0aW9uIC8+XG4gICAgICAgIDxDb21wYW55TG9nbyAvPlxuICAgICAgICB7Y29udGFpbmVyUmVmcy5tYXAoKHJlZiwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U2VjdGlvbkNvbnRhaW5lclxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgICAgIGFjdGl2ZVNlY3Rpb24gPT09IGluZGV4ID8gY29sb3JzW2luZGV4XSA6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBbPE1vY2t1cDEgLz4sIDxDYXJkcyAvPiwgPFRpbWVsaW5lIC8+LCA8U2VydmljZXMgLz4sIDxBdmF0YXIgLz5dW1xuICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1NlY3Rpb25Db250YWluZXI+XG4gICAgICAgICkpfVxuICAgICAgPC9tYWluPlxuICAgIDwvSG9tZUNvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmlyc3RTZWN0aW9uIiwiQ29tcGFueUxvZ28iLCJzdHlsZWQiLCJBdmF0YXIiLCJNb2NrdXAxIiwiQ2FyZHMiLCJUaW1lbGluZSIsIlNlcnZpY2VzIiwiSG9tZUNvbnRhaW5lciIsImRpdiIsIlNlY3Rpb25Db250YWluZXIiLCJQYWdlIiwiY29udGFpbmVyUmVmcyIsIm1haW5SZWYiLCJhY3RpdmVTZWN0aW9uIiwic2V0QWN0aXZlU2VjdGlvbiIsImNvbG9ycyIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJzZWN0aW9uVG9wcyIsIm1hcCIsInJlZiIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});