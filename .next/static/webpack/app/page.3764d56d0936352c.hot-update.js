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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_Home_FirstSection_FirstSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Home/FirstSection/FirstSection */ \"(app-pages-browser)/./Components/Home/FirstSection/FirstSection.jsx\");\n/* harmony import */ var _Components_Home_CompanyLogo_CompanyLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Home/CompanyLogo/CompanyLogo */ \"(app-pages-browser)/./Components/Home/CompanyLogo/CompanyLogo.jsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Avatar/Avatar */ \"(app-pages-browser)/./Components/Avatar/Avatar.jsx\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/index.mjs\");\n/* harmony import */ var _Components_Home_Mockup1_Mockup1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Home/Mockup1/Mockup1 */ \"(app-pages-browser)/./Components/Home/Mockup1/Mockup1.jsx\");\n/* harmony import */ var _Components_Home_Card_Cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Home/Card/Cards */ \"(app-pages-browser)/./Components/Home/Card/Cards.jsx\");\n/* harmony import */ var _Components_Home_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/Home/Timeline/Timeline */ \"(app-pages-browser)/./Components/Home/Timeline/Timeline.jsx\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var _Components_Home_Services_Services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Components/Home/Services/Services */ \"(app-pages-browser)/./Components/Home/Services/Services.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n  height: 100%;\\n  background: #fff;\\n\\n  .container {\\n    min-height: 30vh;\\n    width: 100%;\\n    height: 100%;\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div(_templateObject());\n_c = HomeContainer;\nfunction Page() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const containerRefs = [\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null)\n    ];\n    const mainRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [containerInView, setContainerInView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        false,\n        false,\n        false,\n        false,\n        false\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const colors = [\n            \"#5065f9\",\n            \"#eee\",\n            \"#00c27c\",\n            \"#101010\",\n            \"#745fde\"\n        ];\n        containerInView.forEach((inView, index)=>{\n            if (inView) {\n                gsap__WEBPACK_IMPORTED_MODULE_11__[\"default\"].to(mainRef.current, {\n                    backgroundColor: colors[index],\n                    duration: 0.5,\n                    ease: \"power2.inOut\"\n                });\n            }\n        });\n    }, [\n        containerInView\n    ]);\n    const containerIntersectionObservers = containerRefs.map(_s1((ref, index)=>{\n        _s1();\n        const [containerRef, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__.useInView)({\n            threshold: 0.4\n        });\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n            if (inView !== containerInView[index]) {\n                setContainerInView((prevContainerInView)=>{\n                    const updatedContainerInView = [\n                        ...prevContainerInView\n                    ];\n                    updatedContainerInView[index] = inView;\n                    return updatedContainerInView;\n                });\n            }\n        }, [\n            inView,\n            index\n        ]);\n        const containerComponents = [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Mockup1_Mockup1__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Timeline_Timeline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Card_Cards__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_Services_Services__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ];\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"container container\".concat(index + 1),\n            ref: containerRef,\n            children: containerComponents[index]\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, this);\n    }, \"kRVOvrGj2+OttPWIk8iyCEJpwV0=\", false, function() {\n        return [\n            react_intersection_observer__WEBPACK_IMPORTED_MODULE_12__.useInView\n        ];\n    }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HomeContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n            ref: mainRef,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_FirstSection_FirstSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Home_CompanyLogo_CompanyLogo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                containerIntersectionObservers\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\app\\\\page.jsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"NDnhXaiMEgC40LoRN/ktbVMPQuE=\");\n_c1 = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c, _c1;\n$RefreshReg$(_c, \"HomeContainer\");\n$RefreshReg$(_c1, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDWTtBQUNIO0FBQzdCO0FBQ1M7QUFDUTtBQUNBO0FBQ1A7QUFDVTtBQUNuQztBQUNtQztBQUUzRCxNQUFNYyxnQkFBZ0JSLDBEQUFNQSxDQUFDUyxHQUFHO0tBQTFCRDtBQVlOLFNBQVNFOzs7SUFDUCxNQUFNQyxnQkFBZ0I7UUFDcEJoQiw2Q0FBTUEsQ0FBQztRQUNQQSw2Q0FBTUEsQ0FBQztRQUNQQSw2Q0FBTUEsQ0FBQztRQUNQQSw2Q0FBTUEsQ0FBQztRQUNQQSw2Q0FBTUEsQ0FBQztLQUNSO0lBRUQsTUFBTWlCLFVBQVVqQiw2Q0FBTUEsQ0FBQztJQUV2QixNQUFNLENBQUNrQixpQkFBaUJDLG1CQUFtQixHQUFHakIsK0NBQVFBLENBQUM7UUFDckQ7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBRURELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTW1CLFNBQVM7WUFBQztZQUFXO1lBQVE7WUFBVztZQUFXO1NBQVU7UUFFbkVGLGdCQUFnQkcsT0FBTyxDQUFDLENBQUNDLFFBQVFDO1lBQy9CLElBQUlELFFBQVE7Z0JBQ1ZYLDZDQUFJQSxDQUFDYSxFQUFFLENBQUNQLFFBQVFRLE9BQU8sRUFBRTtvQkFDdkJDLGlCQUFpQk4sTUFBTSxDQUFDRyxNQUFNO29CQUM5QkksVUFBVTtvQkFDVkMsTUFBTTtnQkFDUjtZQUNGO1FBQ0Y7SUFDRixHQUFHO1FBQUNWO0tBQWdCO0lBRXBCLE1BQU1XLGlDQUFpQ2IsY0FBY2MsR0FBRyxLQUFDLENBQUNDLEtBQUtSOztRQUM3RCxNQUFNLENBQUNTLGNBQWNWLE9BQU8sR0FBR2YsdUVBQVNBLENBQUM7WUFBRTBCLFdBQVc7UUFBSTtRQUMxRGhDLGdEQUFTQSxDQUFDO1lBQ1IsSUFBSXFCLFdBQVdKLGVBQWUsQ0FBQ0ssTUFBTSxFQUFFO2dCQUNyQ0osbUJBQW1CLENBQUNlO29CQUNsQixNQUFNQyx5QkFBeUI7MkJBQUlEO3FCQUFvQjtvQkFDdkRDLHNCQUFzQixDQUFDWixNQUFNLEdBQUdEO29CQUNoQyxPQUFPYTtnQkFDVDtZQUNGO1FBQ0YsR0FBRztZQUFDYjtZQUFRQztTQUFNO1FBRWxCLE1BQU1hLHNCQUFzQjswQkFDMUIsOERBQUM1Qix3RUFBT0E7Ozs7OzBCQUNSLDhEQUFDRSwwRUFBUUE7Ozs7OzBCQUNULDhEQUFDRCxtRUFBS0E7Ozs7OzBCQUNOLDhEQUFDRywwRUFBUUE7Ozs7OzBCQUNULDhEQUFDTixpRUFBTUE7Ozs7O1NBRVI7UUFFRCxxQkFDRSw4REFBQ1E7WUFDQ3VCLFdBQVcsc0JBQWdDLE9BQVZkLFFBQVE7WUFDekNRLEtBQUtDO3NCQUdKSSxtQkFBbUIsQ0FBQ2IsTUFBTTtXQUZ0QkE7Ozs7O0lBS1g7O1lBN0JpQ2hCLG1FQUFTQTs7O0lBK0IxQyxxQkFDRSw4REFBQ007a0JBQ0MsNEVBQUN5QjtZQUFLUCxLQUFLZDs7OEJBQ1QsOERBQUNkLGtGQUFZQTs7Ozs7OEJBQ2IsOERBQUNDLGdGQUFXQTs7Ozs7Z0JBQ1h5Qjs7Ozs7Ozs7Ozs7O0FBSVQ7R0ExRVNkO01BQUFBO0FBNEVULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzeD82ZTQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlyc3RTZWN0aW9uIGZyb20gXCJAL0NvbXBvbmVudHMvSG9tZS9GaXJzdFNlY3Rpb24vRmlyc3RTZWN0aW9uXCI7XG5pbXBvcnQgQ29tcGFueUxvZ28gZnJvbSBcIkAvQ29tcG9uZW50cy9Ib21lL0NvbXBhbnlMb2dvL0NvbXBhbnlMb2dvXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiQC9Db21wb25lbnRzL0F2YXRhci9BdmF0YXJcIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCBNb2NrdXAxIGZyb20gXCJAL0NvbXBvbmVudHMvSG9tZS9Nb2NrdXAxL01vY2t1cDFcIjtcbmltcG9ydCBDYXJkcyBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvQ2FyZC9DYXJkc1wiO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gXCJAL0NvbXBvbmVudHMvSG9tZS9UaW1lbGluZS9UaW1lbGluZVwiO1xuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCBTZXJ2aWNlcyBmcm9tIFwiQC9Db21wb25lbnRzL0hvbWUvU2VydmljZXMvU2VydmljZXNcIjtcblxuY29uc3QgSG9tZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMzB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRhaW5lclJlZnMgPSBbXG4gICAgdXNlUmVmKG51bGwpLFxuICAgIHVzZVJlZihudWxsKSxcbiAgICB1c2VSZWYobnVsbCksXG4gICAgdXNlUmVmKG51bGwpLFxuICAgIHVzZVJlZihudWxsKSxcbiAgXTtcblxuICBjb25zdCBtYWluUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IFtjb250YWluZXJJblZpZXcsIHNldENvbnRhaW5lckluVmlld10gPSB1c2VTdGF0ZShbXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY29sb3JzID0gW1wiIzUwNjVmOVwiLCBcIiNlZWVcIiwgXCIjMDBjMjdjXCIsIFwiIzEwMTAxMFwiLCBcIiM3NDVmZGVcIl07XG5cbiAgICBjb250YWluZXJJblZpZXcuZm9yRWFjaCgoaW5WaWV3LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluVmlldykge1xuICAgICAgICBnc2FwLnRvKG1haW5SZWYuY3VycmVudCwge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzW2luZGV4XSxcbiAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgIGVhc2U6IFwicG93ZXIyLmluT3V0XCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbY29udGFpbmVySW5WaWV3XSk7XG5cbiAgY29uc3QgY29udGFpbmVySW50ZXJzZWN0aW9uT2JzZXJ2ZXJzID0gY29udGFpbmVyUmVmcy5tYXAoKHJlZiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBbY29udGFpbmVyUmVmLCBpblZpZXddID0gdXNlSW5WaWV3KHsgdGhyZXNob2xkOiAwLjQgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChpblZpZXcgIT09IGNvbnRhaW5lckluVmlld1tpbmRleF0pIHtcbiAgICAgICAgc2V0Q29udGFpbmVySW5WaWV3KChwcmV2Q29udGFpbmVySW5WaWV3KSA9PiB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZENvbnRhaW5lckluVmlldyA9IFsuLi5wcmV2Q29udGFpbmVySW5WaWV3XTtcbiAgICAgICAgICB1cGRhdGVkQ29udGFpbmVySW5WaWV3W2luZGV4XSA9IGluVmlldztcbiAgICAgICAgICByZXR1cm4gdXBkYXRlZENvbnRhaW5lckluVmlldztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgW2luVmlldywgaW5kZXhdKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lckNvbXBvbmVudHMgPSBbXG4gICAgICA8TW9ja3VwMSAvPixcbiAgICAgIDxUaW1lbGluZSAvPixcbiAgICAgIDxDYXJkcyAvPixcbiAgICAgIDxTZXJ2aWNlcyAvPixcbiAgICAgIDxBdmF0YXIgLz4sXG4gICAgIFxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Bjb250YWluZXIgY29udGFpbmVyJHtpbmRleCArIDF9YH1cbiAgICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICA+XG4gICAgICAgIHtjb250YWluZXJDb21wb25lbnRzW2luZGV4XX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEhvbWVDb250YWluZXI+XG4gICAgICA8bWFpbiByZWY9e21haW5SZWZ9PlxuICAgICAgICA8Rmlyc3RTZWN0aW9uIC8+XG4gICAgICAgIDxDb21wYW55TG9nbyAvPlxuICAgICAgICB7Y29udGFpbmVySW50ZXJzZWN0aW9uT2JzZXJ2ZXJzfVxuICAgICAgPC9tYWluPlxuICAgIDwvSG9tZUNvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmlyc3RTZWN0aW9uIiwiQ29tcGFueUxvZ28iLCJzdHlsZWQiLCJBdmF0YXIiLCJ1c2VJblZpZXciLCJNb2NrdXAxIiwiQ2FyZHMiLCJUaW1lbGluZSIsImdzYXAiLCJTZXJ2aWNlcyIsIkhvbWVDb250YWluZXIiLCJkaXYiLCJQYWdlIiwiY29udGFpbmVyUmVmcyIsIm1haW5SZWYiLCJjb250YWluZXJJblZpZXciLCJzZXRDb250YWluZXJJblZpZXciLCJjb2xvcnMiLCJmb3JFYWNoIiwiaW5WaWV3IiwiaW5kZXgiLCJ0byIsImN1cnJlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkdXJhdGlvbiIsImVhc2UiLCJjb250YWluZXJJbnRlcnNlY3Rpb25PYnNlcnZlcnMiLCJtYXAiLCJyZWYiLCJjb250YWluZXJSZWYiLCJ0aHJlc2hvbGQiLCJwcmV2Q29udGFpbmVySW5WaWV3IiwidXBkYXRlZENvbnRhaW5lckluVmlldyIsImNvbnRhaW5lckNvbXBvbmVudHMiLCJjbGFzc05hbWUiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});