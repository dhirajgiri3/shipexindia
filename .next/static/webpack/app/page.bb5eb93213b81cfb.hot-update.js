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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_Home_FirstSection_FirstSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Home/FirstSection/FirstSection */ \"(app-pages-browser)/./Components/Home/FirstSection/FirstSection.jsx\");\n/* harmony import */ var _Components_Home_CompanyLogo_CompanyLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Home/CompanyLogo/CompanyLogo */ \"(app-pages-browser)/./Components/Home/CompanyLogo/CompanyLogo.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Avatar/Avatar */ \"(app-pages-browser)/./Components/Avatar/Avatar.jsx\");\n/* harmony import */ var _Components_Home_Mockup1_Mockup1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Home/Mockup1/Mockup1 */ \"(app-pages-browser)/./Components/Home/Mockup1/Mockup1.jsx\");\n/* harmony import */ var _Components_Home_Card_Cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Home/Card/Cards */ \"(app-pages-browser)/./Components/Home/Card/Cards.jsx\");\n/* harmony import */ var _Components_Home_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/Home/Timeline/Timeline */ \"(app-pages-browser)/./Components/Home/Timeline/Timeline.jsx\");\n/* harmony import */ var _Components_Home_Services_Services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Components/Home/Services/Services */ \"(app-pages-browser)/./Components/Home/Services/Services.jsx\");\n/* harmony import */ var _Components_Home_Glance_Glance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Components/Home/Glance/Glance */ \"(app-pages-browser)/./Components/Home/Glance/Glance.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n  height: 100%;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  min-height: 30vh;\\n  width: 100%;\\n  height: 100%;\\n  transition: background-color 1s ease; /* Duration of 1 second for background color change */\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject());\n_c = HomeContainer;\nconst SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject1());\n_c1 = SectionContainer;\nfunction Page() {\n    _s();\n    const containerRefs = [\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null)\n    ];\n    const mainRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const colors = [\n        \"#5065f9\",\n        \"#00c27c\",\n        \"#fff\",\n        \"#fff\",\n        \"#745fde\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollTop = window.scrollY;\n            const sectionTops = containerRefs.map((ref)=>ref.current.offsetTop);\n            for(let i = 0; i < sectionTops.length; i++){\n                if (scrollTop >= sectionTops[i] && scrollTop < sectionTops[i + 1]) {\n                    setActiveSection(i);\n                    break;\n                }\n            }\n            mainRef.current.style.backgroundColor = colors[activeSection];\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        activeSection\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HomeContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n            ref: mainRef,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_FirstSection_FirstSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_CompanyLogo_CompanyLogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                containerRefs.map((ref, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SectionContainer, {\n                        ref: ref,\n                        style: {\n                            backgroundColor: activeSection === index ? colors[index] : \"transparent\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Mockup1_Mockup1__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 16\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Card_Cards__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Services_Services__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 41\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 55\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Glance_Glance__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 69\n                            }, this)\n                        ][index]\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"ODpbkWreiyaem4XJu0rWk6DTxaQ=\");\n_c2 = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HomeContainer\");\n$RefreshReg$(_c1, \"SectionContainer\");\n$RefreshReg$(_c2, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUyRDtBQUNZO0FBQ0g7QUFDN0I7QUFDUztBQUNRO0FBQ1A7QUFDVTtBQUNBO0FBQ047QUFFckQsTUFBTWEsZ0JBQWdCUCwwREFBTUEsQ0FBQ1EsR0FBRztLQUExQkQ7QUFLTixNQUFNRSxtQkFBbUJULDBEQUFNQSxDQUFDUSxHQUFHO01BQTdCQztBQU9OLFNBQVNDOztJQUNQLE1BQU1DLGdCQUFnQjtRQUNwQmhCLDZDQUFNQSxDQUFDO1FBQ1BBLDZDQUFNQSxDQUFDO1FBQ1BBLDZDQUFNQSxDQUFDO1FBQ1BBLDZDQUFNQSxDQUFDO1FBQ1BBLDZDQUFNQSxDQUFDO0tBQ1I7SUFFRCxNQUFNaUIsVUFBVWpCLDZDQUFNQSxDQUFDO0lBRXZCLE1BQU0sQ0FBQ2tCLGVBQWVDLGlCQUFpQixHQUFHakIsK0NBQVFBLENBQUM7SUFFbkQsTUFBTWtCLFNBQVM7UUFBQztRQUFXO1FBQVc7UUFBUTtRQUFRO0tBQVU7SUFFaEVuQixnREFBU0EsQ0FBQztRQUNSLE1BQU1vQixlQUFlO1lBQ25CLE1BQU1DLFlBQVlDLE9BQU9DLE9BQU87WUFDaEMsTUFBTUMsY0FBY1QsY0FBY1UsR0FBRyxDQUFDLENBQUNDLE1BQVFBLElBQUlDLE9BQU8sQ0FBQ0MsU0FBUztZQUVwRSxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUwsWUFBWU0sTUFBTSxFQUFFRCxJQUFLO2dCQUMzQyxJQUFJUixhQUFhRyxXQUFXLENBQUNLLEVBQUUsSUFBSVIsWUFBWUcsV0FBVyxDQUFDSyxJQUFJLEVBQUUsRUFBRTtvQkFDakVYLGlCQUFpQlc7b0JBQ2pCO2dCQUNGO1lBQ0Y7WUFFQWIsUUFBUVcsT0FBTyxDQUFDSSxLQUFLLENBQUNDLGVBQWUsR0FBR2IsTUFBTSxDQUFDRixjQUFjO1FBQy9EO1FBRUFLLE9BQU9XLGdCQUFnQixDQUFDLFVBQVViO1FBRWxDLE9BQU87WUFDTEUsT0FBT1ksbUJBQW1CLENBQUMsVUFBVWQ7UUFDdkM7SUFDRixHQUFHO1FBQUNIO0tBQWM7SUFFbEIscUJBQ0UsOERBQUNOO2tCQUNDLDRFQUFDd0I7WUFBS1QsS0FBS1Y7OzhCQUNULDhEQUFDZCxrRkFBWUE7Ozs7OzhCQUNiLDhEQUFDQyxnRkFBV0E7Ozs7O2dCQUNYWSxjQUFjVSxHQUFHLENBQUMsQ0FBQ0MsS0FBS1Usc0JBQ3ZCLDhEQUFDdkI7d0JBQ0NhLEtBQUtBO3dCQUVMSyxPQUFPOzRCQUNMQyxpQkFDRWYsa0JBQWtCbUIsUUFBUWpCLE1BQU0sQ0FBQ2lCLE1BQU0sR0FBRzt3QkFDOUM7a0NBR0U7MENBQUMsOERBQUM5Qix3RUFBT0E7Ozs7OzBDQUFLLDhEQUFDQyxtRUFBS0E7Ozs7OzBDQUFNLDhEQUFDRSwwRUFBUUE7Ozs7OzBDQUFLLDhEQUFDRCwwRUFBUUE7Ozs7OzBDQUFLLDhEQUFDRSx1RUFBTUE7Ozs7O3lCQUFJLENBQy9EMEIsTUFDRDt1QkFURUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmpCO0dBN0RTdEI7TUFBQUE7QUErRFQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanN4PzZlNDEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSBcIkAvQ29tcG9uZW50cy9Ib21lL0ZpcnN0U2VjdGlvbi9GaXJzdFNlY3Rpb25cIjtcbmltcG9ydCBDb21wYW55TG9nbyBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvQ29tcGFueUxvZ28vQ29tcGFueUxvZ29cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAL0NvbXBvbmVudHMvQXZhdGFyL0F2YXRhclwiO1xuaW1wb3J0IE1vY2t1cDEgZnJvbSBcIkAvQ29tcG9uZW50cy9Ib21lL01vY2t1cDEvTW9ja3VwMVwiO1xuaW1wb3J0IENhcmRzIGZyb20gXCJAL0NvbXBvbmVudHMvSG9tZS9DYXJkL0NhcmRzXCI7XG5pbXBvcnQgVGltZWxpbmUgZnJvbSBcIkAvQ29tcG9uZW50cy9Ib21lL1RpbWVsaW5lL1RpbWVsaW5lXCI7XG5pbXBvcnQgU2VydmljZXMgZnJvbSBcIkAvQ29tcG9uZW50cy9Ib21lL1NlcnZpY2VzL1NlcnZpY2VzXCI7XG5pbXBvcnQgR2xhbmNlIGZyb20gXCJAL0NvbXBvbmVudHMvSG9tZS9HbGFuY2UvR2xhbmNlXCI7XG5cbmNvbnN0IEhvbWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6IDMwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTsgLyogRHVyYXRpb24gb2YgMSBzZWNvbmQgZm9yIGJhY2tncm91bmQgY29sb3IgY2hhbmdlICovXG5gO1xuXG5mdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBjb250YWluZXJSZWZzID0gW1xuICAgIHVzZVJlZihudWxsKSxcbiAgICB1c2VSZWYobnVsbCksXG4gICAgdXNlUmVmKG51bGwpLFxuICAgIHVzZVJlZihudWxsKSxcbiAgICB1c2VSZWYobnVsbCksXG4gIF07XG5cbiAgY29uc3QgbWFpblJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBbYWN0aXZlU2VjdGlvbiwgc2V0QWN0aXZlU2VjdGlvbl0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBjb2xvcnMgPSBbXCIjNTA2NWY5XCIsIFwiIzAwYzI3Y1wiLCBcIiNmZmZcIiwgXCIjZmZmXCIsIFwiIzc0NWZkZVwiXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgY29uc3Qgc2VjdGlvblRvcHMgPSBjb250YWluZXJSZWZzLm1hcCgocmVmKSA9PiByZWYuY3VycmVudC5vZmZzZXRUb3ApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3Rpb25Ub3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzY3JvbGxUb3AgPj0gc2VjdGlvblRvcHNbaV0gJiYgc2Nyb2xsVG9wIDwgc2VjdGlvblRvcHNbaSArIDFdKSB7XG4gICAgICAgICAgc2V0QWN0aXZlU2VjdGlvbihpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYWluUmVmLmN1cnJlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JzW2FjdGl2ZVNlY3Rpb25dO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW2FjdGl2ZVNlY3Rpb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxIb21lQ29udGFpbmVyPlxuICAgICAgPG1haW4gcmVmPXttYWluUmVmfT5cbiAgICAgICAgPEZpcnN0U2VjdGlvbiAvPlxuICAgICAgICA8Q29tcGFueUxvZ28gLz5cbiAgICAgICAge2NvbnRhaW5lclJlZnMubWFwKChyZWYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFNlY3Rpb25Db250YWluZXJcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcbiAgICAgICAgICAgICAgICBhY3RpdmVTZWN0aW9uID09PSBpbmRleCA/IGNvbG9yc1tpbmRleF0gOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgWzxNb2NrdXAxIC8+LCA8Q2FyZHMgLz4sICA8U2VydmljZXMgLz4sIDxUaW1lbGluZSAvPiwgPEdsYW5jZSAvPl1bXG4gICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgKSl9XG4gICAgICA8L21haW4+XG4gICAgPC9Ib21lQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGaXJzdFNlY3Rpb24iLCJDb21wYW55TG9nbyIsInN0eWxlZCIsIkF2YXRhciIsIk1vY2t1cDEiLCJDYXJkcyIsIlRpbWVsaW5lIiwiU2VydmljZXMiLCJHbGFuY2UiLCJIb21lQ29udGFpbmVyIiwiZGl2IiwiU2VjdGlvbkNvbnRhaW5lciIsIlBhZ2UiLCJjb250YWluZXJSZWZzIiwibWFpblJlZiIsImFjdGl2ZVNlY3Rpb24iLCJzZXRBY3RpdmVTZWN0aW9uIiwiY29sb3JzIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsVG9wIiwid2luZG93Iiwic2Nyb2xsWSIsInNlY3Rpb25Ub3BzIiwibWFwIiwicmVmIiwiY3VycmVudCIsIm9mZnNldFRvcCIsImkiLCJsZW5ndGgiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFpbiIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});