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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_Home_FirstSection_FirstSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Home/FirstSection/FirstSection */ \"(app-pages-browser)/./Components/Home/FirstSection/FirstSection.jsx\");\n/* harmony import */ var _Components_Home_CompanyLogo_CompanyLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Home/CompanyLogo/CompanyLogo */ \"(app-pages-browser)/./Components/Home/CompanyLogo/CompanyLogo.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Components_Home_Mockup1_Mockup1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Home/Mockup1/Mockup1 */ \"(app-pages-browser)/./Components/Home/Mockup1/Mockup1.jsx\");\n/* harmony import */ var _Components_Home_Card_Cards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Home/Card/Cards */ \"(app-pages-browser)/./Components/Home/Card/Cards.jsx\");\n/* harmony import */ var _Components_Home_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Home/Timeline/Timeline */ \"(app-pages-browser)/./Components/Home/Timeline/Timeline.jsx\");\n/* harmony import */ var _Components_Home_Services_Services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/Home/Services/Services */ \"(app-pages-browser)/./Components/Home/Services/Services.jsx\");\n/* harmony import */ var _Components_Home_Glance_Glance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Components/Home/Glance/Glance */ \"(app-pages-browser)/./Components/Home/Glance/Glance.jsx\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var _Components_Home_Card_Blog_Blog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Components/Home/Card/Blog/Blog */ \"(app-pages-browser)/./Components/Home/Card/Blog/Blog.jsx\");\n/* harmony import */ var _Components_Common_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/Components/Common/Footer/Footer */ \"(app-pages-browser)/./Components/Common/Footer/Footer.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n  min-height: 100vh;\\n  background-color: \",\n        \";\\n  transition: background-color 1s ease-in-out;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  min-height: 40vh;\\n  transition: background-color 0.3s ease-in-out;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div(_templateObject(), (props)=>props.bgColor || \"transparent\");\n_c = HomeContainer;\nconst SectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div(_templateObject1());\n_c1 = SectionContainer;\nfunction Page() {\n    _s();\n    const containerRefs = [\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null)\n    ];\n    const mainRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const colors = [\n        \"#5065f9\",\n        \"#00c27c\",\n        \"#fff\",\n        \"#fff\",\n        \"#fff\",\n        \"#00c27c\"\n    ]; // Fixed the color array\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollTop = window.scrollY;\n            const sectionTops = containerRefs.map((ref)=>ref.current.offsetTop);\n            for(let i = 0; i < sectionTops.length; i++){\n                if (scrollTop >= sectionTops[i] && (i === sectionTops.length - 1 || scrollTop < sectionTops[i + 1])) {\n                    setActiveSection(i);\n                    // Use GSAP for smooth background color transition\n                    gsap__WEBPACK_IMPORTED_MODULE_13__.gsap.to(mainRef.current, {\n                        backgroundColor: colors[i],\n                        duration: 0.3,\n                        ease: \"power2.inOut\",\n                        yoyo: true\n                    });\n                    break;\n                }\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []); // Removed 'activeSection' from the dependencies array\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HomeContainer, {\n                bgColor: colors[activeSection],\n                ref: mainRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_FirstSection_FirstSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_CompanyLogo_CompanyLogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    containerRefs.map((ref, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SectionContainer, {\n                            ref: ref,\n                            style: {\n                                backgroundColor: activeSection === index ? colors[index] : \"transparent\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Mockup1_Mockup1__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Card_Cards__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Services_Services__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Glance_Glance__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Card_Blog_Blog__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 17\n                                }, this)\n                            ][index]\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Common_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"5K66focUX3SDtTP4a/zSMDboEYI=\");\n_c2 = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"HomeContainer\");\n$RefreshReg$(_c1, \"SectionContainer\");\n$RefreshReg$(_c2, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUyRDtBQUNZO0FBQ0g7QUFDN0I7QUFDaUI7QUFDUDtBQUNVO0FBQ0E7QUFDTjtBQUN6QjtBQUN3QjtBQUNHO0FBRXZELE1BQU1lLGdCQUFnQlQsMERBQU1BLENBQUNVLEdBQUcsb0JBR1YsQ0FBQ0MsUUFBVUEsTUFBTUMsT0FBTyxJQUFJO0tBSDVDSDtBQU9OLE1BQU1JLG1CQUFtQmIsMERBQU1BLENBQUNVLEdBQUc7TUFBN0JHO0FBS04sU0FBU0M7O0lBQ1AsTUFBTUMsZ0JBQWdCO1FBQ3BCcEIsNkNBQU1BLENBQUM7UUFDUEEsNkNBQU1BLENBQUM7UUFDUEEsNkNBQU1BLENBQUM7UUFDUEEsNkNBQU1BLENBQUM7UUFDUEEsNkNBQU1BLENBQUM7UUFDUEEsNkNBQU1BLENBQUM7S0FDUjtJQUVELE1BQU1xQixVQUFVckIsNkNBQU1BLENBQUM7SUFFdkIsTUFBTSxDQUFDc0IsZUFBZUMsaUJBQWlCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUVuRCxNQUFNc0IsU0FBUztRQUFDO1FBQVc7UUFBVztRQUFRO1FBQVE7UUFBUTtLQUFVLEVBQUUsd0JBQXdCO0lBRWxHdkIsZ0RBQVNBLENBQUM7UUFDUixNQUFNd0IsZUFBZTtZQUNuQixNQUFNQyxZQUFZQyxPQUFPQyxPQUFPO1lBQ2hDLE1BQU1DLGNBQWNULGNBQWNVLEdBQUcsQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxPQUFPLENBQUNDLFNBQVM7WUFFcEUsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlMLFlBQVlNLE1BQU0sRUFBRUQsSUFBSztnQkFDM0MsSUFDRVIsYUFBYUcsV0FBVyxDQUFDSyxFQUFFLElBQzFCQSxDQUFBQSxNQUFNTCxZQUFZTSxNQUFNLEdBQUcsS0FBS1QsWUFBWUcsV0FBVyxDQUFDSyxJQUFJLEVBQUUsR0FDL0Q7b0JBQ0FYLGlCQUFpQlc7b0JBRWpCLGtEQUFrRDtvQkFDbER2Qix1Q0FBSUEsQ0FBQ3lCLEVBQUUsQ0FBQ2YsUUFBUVcsT0FBTyxFQUFFO3dCQUN2QkssaUJBQWlCYixNQUFNLENBQUNVLEVBQUU7d0JBQzFCSSxVQUFVO3dCQUNWQyxNQUFNO3dCQUNOQyxNQUFNO29CQUNSO29CQUNBO2dCQUNGO1lBQ0Y7UUFDRjtRQUVBYixPQUFPYyxnQkFBZ0IsQ0FBQyxVQUFVaEI7UUFFbEMsT0FBTztZQUNMRSxPQUFPZSxtQkFBbUIsQ0FBQyxVQUFVakI7UUFDdkM7SUFDRixHQUFHLEVBQUUsR0FBRyxzREFBc0Q7SUFFOUQscUJBQ0U7OzBCQUNFLDhEQUFDWDtnQkFBY0csU0FBU08sTUFBTSxDQUFDRixjQUFjO2dCQUFFUyxLQUFLVjs7a0NBQ2xELDhEQUFDbEIsa0ZBQVlBOzs7OztrQ0FDYiw4REFBQ0MsZ0ZBQVdBOzs7OztvQkFDWGdCLGNBQWNVLEdBQUcsQ0FBQyxDQUFDQyxLQUFLWSxzQkFDdkIsOERBQUN6Qjs0QkFDQ2EsS0FBS0E7NEJBRUxhLE9BQU87Z0NBQ0xQLGlCQUNFZixrQkFBa0JxQixRQUFRbkIsTUFBTSxDQUFDbUIsTUFBTSxHQUFHOzRCQUM5QztzQ0FHRTs4Q0FDRSw4REFBQ3JDLHdFQUFPQTs7Ozs7OENBQ1IsOERBQUNDLG1FQUFLQTs7Ozs7OENBQ04sOERBQUNFLDBFQUFRQTs7Ozs7OENBQ1QsOERBQUNELDBFQUFRQTs7Ozs7OENBQ1QsOERBQUNFLHNFQUFNQTs7Ozs7OENBQ1AsOERBQUNFLHdFQUFJQTs7Ozs7NkJBQ04sQ0FBQytCLE1BQU07MkJBZExBOzs7Ozs7Ozs7OzswQkFtQlgsOERBQUM5Qix5RUFBTUE7Ozs7Ozs7QUFHYjtHQTdFU007TUFBQUE7QUErRVQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanN4PzZlNDEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSBcIkAvQ29tcG9uZW50cy9Ib21lL0ZpcnN0U2VjdGlvbi9GaXJzdFNlY3Rpb25cIjtcbmltcG9ydCBDb21wYW55TG9nbyBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvQ29tcGFueUxvZ28vQ29tcGFueUxvZ29cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgTW9ja3VwMSBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvTW9ja3VwMS9Nb2NrdXAxXCI7XG5pbXBvcnQgQ2FyZHMgZnJvbSBcIkAvQ29tcG9uZW50cy9Ib21lL0NhcmQvQ2FyZHNcIjtcbmltcG9ydCBUaW1lbGluZSBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvVGltZWxpbmUvVGltZWxpbmVcIjtcbmltcG9ydCBTZXJ2aWNlcyBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvU2VydmljZXMvU2VydmljZXNcIjtcbmltcG9ydCBHbGFuY2UgZnJvbSBcIkAvQ29tcG9uZW50cy9Ib21lL0dsYW5jZS9HbGFuY2VcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IEJsb2cgZnJvbSBcIkAvQ29tcG9uZW50cy9Ib21lL0NhcmQvQmxvZy9CbG9nXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAL0NvbXBvbmVudHMvQ29tbW9uL0Zvb3Rlci9Gb290ZXJcIjtcblxuY29uc3QgSG9tZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmJnQ29sb3IgfHwgXCJ0cmFuc3BhcmVudFwifTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlLWluLW91dDtcbmA7XG5cbmNvbnN0IFNlY3Rpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiA0MHZoO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG5gO1xuXG5mdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBjb250YWluZXJSZWZzID0gW1xuICAgIHVzZVJlZihudWxsKSxcbiAgICB1c2VSZWYobnVsbCksXG4gICAgdXNlUmVmKG51bGwpLFxuICAgIHVzZVJlZihudWxsKSxcbiAgICB1c2VSZWYobnVsbCksXG4gICAgdXNlUmVmKG51bGwpLFxuICBdO1xuXG4gIGNvbnN0IG1haW5SZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgW2FjdGl2ZVNlY3Rpb24sIHNldEFjdGl2ZVNlY3Rpb25dID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgY29sb3JzID0gW1wiIzUwNjVmOVwiLCBcIiMwMGMyN2NcIiwgXCIjZmZmXCIsIFwiI2ZmZlwiLCBcIiNmZmZcIiwgXCIjMDBjMjdjXCJdOyAvLyBGaXhlZCB0aGUgY29sb3IgYXJyYXlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgY29uc3Qgc2VjdGlvblRvcHMgPSBjb250YWluZXJSZWZzLm1hcCgocmVmKSA9PiByZWYuY3VycmVudC5vZmZzZXRUb3ApO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3Rpb25Ub3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzY3JvbGxUb3AgPj0gc2VjdGlvblRvcHNbaV0gJiZcbiAgICAgICAgICAoaSA9PT0gc2VjdGlvblRvcHMubGVuZ3RoIC0gMSB8fCBzY3JvbGxUb3AgPCBzZWN0aW9uVG9wc1tpICsgMV0pXG4gICAgICAgICkge1xuICAgICAgICAgIHNldEFjdGl2ZVNlY3Rpb24oaSk7XG5cbiAgICAgICAgICAvLyBVc2UgR1NBUCBmb3Igc21vb3RoIGJhY2tncm91bmQgY29sb3IgdHJhbnNpdGlvblxuICAgICAgICAgIGdzYXAudG8obWFpblJlZi5jdXJyZW50LCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1tpXSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiLFxuICAgICAgICAgICAgeW95bzogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBSZW1vdmVkICdhY3RpdmVTZWN0aW9uJyBmcm9tIHRoZSBkZXBlbmRlbmNpZXMgYXJyYXlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SG9tZUNvbnRhaW5lciBiZ0NvbG9yPXtjb2xvcnNbYWN0aXZlU2VjdGlvbl19IHJlZj17bWFpblJlZn0+XG4gICAgICAgIDxGaXJzdFNlY3Rpb24gLz5cbiAgICAgICAgPENvbXBhbnlMb2dvIC8+XG4gICAgICAgIHtjb250YWluZXJSZWZzLm1hcCgocmVmLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxTZWN0aW9uQ29udGFpbmVyXG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XG4gICAgICAgICAgICAgICAgYWN0aXZlU2VjdGlvbiA9PT0gaW5kZXggPyBjb2xvcnNbaW5kZXhdIDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICA8TW9ja3VwMSAvPixcbiAgICAgICAgICAgICAgICA8Q2FyZHMgLz4sXG4gICAgICAgICAgICAgICAgPFNlcnZpY2VzIC8+LFxuICAgICAgICAgICAgICAgIDxUaW1lbGluZSAvPixcbiAgICAgICAgICAgICAgICA8R2xhbmNlIC8+LFxuICAgICAgICAgICAgICAgIDxCbG9nIC8+LFxuICAgICAgICAgICAgICBdW2luZGV4XVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgKSl9XG4gICAgICA8L0hvbWVDb250YWluZXI+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZpcnN0U2VjdGlvbiIsIkNvbXBhbnlMb2dvIiwic3R5bGVkIiwiTW9ja3VwMSIsIkNhcmRzIiwiVGltZWxpbmUiLCJTZXJ2aWNlcyIsIkdsYW5jZSIsImdzYXAiLCJCbG9nIiwiRm9vdGVyIiwiSG9tZUNvbnRhaW5lciIsImRpdiIsInByb3BzIiwiYmdDb2xvciIsIlNlY3Rpb25Db250YWluZXIiLCJQYWdlIiwiY29udGFpbmVyUmVmcyIsIm1haW5SZWYiLCJhY3RpdmVTZWN0aW9uIiwic2V0QWN0aXZlU2VjdGlvbiIsImNvbG9ycyIsImhhbmRsZVNjcm9sbCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJzZWN0aW9uVG9wcyIsIm1hcCIsInJlZiIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJpIiwibGVuZ3RoIiwidG8iLCJiYWNrZ3JvdW5kQ29sb3IiLCJkdXJhdGlvbiIsImVhc2UiLCJ5b3lvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbmRleCIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});