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

/***/ "(app-pages-browser)/./Components/Home/Services/Services.jsx":
/*!***********************************************!*\
  !*** ./Components/Home/Services/Services.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card/Card */ \"(app-pages-browser)/./Components/Home/Services/Card/Card.jsx\");\n/* harmony import */ var _Assets_Images_services_Icons_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Assets/Images/services/Icons/1.png */ \"(app-pages-browser)/./Assets/Images/services/Icons/1.png\");\n/* harmony import */ var _Assets_Images_services_Icons_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Assets/Images/services/Icons/2.png */ \"(app-pages-browser)/./Assets/Images/services/Icons/2.png\");\n/* harmony import */ var _Assets_Images_services_Icons_3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Assets/Images/services/Icons/3.png */ \"(app-pages-browser)/./Assets/Images/services/Icons/3.png\");\n/* harmony import */ var _Assets_Images_services_Icons_4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Assets/Images/services/Icons/4.png */ \"(app-pages-browser)/./Assets/Images/services/Icons/4.png\");\n/* harmony import */ var _Assets_Images_services_Icons_5_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Assets/Images/services/Icons/5.png */ \"(app-pages-browser)/./Assets/Images/services/Icons/5.png\");\n/* harmony import */ var _Assets_Images_services_Icons_6_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Assets/Images/services/Icons/6.png */ \"(app-pages-browser)/./Assets/Images/services/Icons/6.png\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  width: 100%;\\n  min-height: 100vh;\\n  height: 100%;\\n  margin: 0 auto;\\n  margin-top: 10rem;\\n\\n  .title {\\n    width: 70%;\\n    text-align: center;\\n    font-family: var(--mid-font);\\n    color: var(--white);\\n    font-size: var(--heading);\\n    font-weight: 300;\\n    margin: 0 auto;\\n    margin-bottom: 5rem;\\n\\n    @media screen and (max-width: 768px) {\\n        width: 100%;\\n\\n  }\\n\\n  .container {\\n    width: 100%;\\n    min-height: 100vh;\\n    height: 100%;\\n    padding: 0 10rem;\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n    grid-template-rows: repeat(2, 1fr);\\n    gap: 3rem;\\n\\n    @media screen and (max-width: 1000px) {\\n      padding: 0 5rem;\\n      grid-template-columns: repeat(2, 1fr);\\n      grid-template-rows: repeat(3, 1fr);\\n      gap: 2rem;\\n    }\\n\\n    @media screen and (max-width: 768px) {\\n      padding: 0 1rem;\\n      grid-template-columns: repeat(1, 1fr);\\n      grid-template-rows: repeat(6, 1fr);\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n // Import Framer Motion\n\n\n\n\n\n\n\n// Define an array of card data\nconst cardData = [\n    {\n        imgurl: _Assets_Images_services_Icons_1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        heading: \"Direct-to-Consumer (D2C)\",\n        para: \"Empowering D2C businesses with seamless channel integration, enhanced operational efficiency, value-added services, and a user-friendly platform for order management and fulfillment. Plus, we ensure that your shipments can go anywhere, anytime.\"\n    },\n    {\n        imgurl: _Assets_Images_services_Icons_2_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        heading: \"Marketplace Sellers\",\n        para: 'Empowering marketplace sellers by offering easy integrations with multiple marketplaces and carts, multiple locations for pickup and delivery, and enabling efficient order processing. Plus, our \"ship anytime to anywhere\" feature ensures your products reach customers globally.'\n    },\n    {\n        imgurl: _Assets_Images_services_Icons_3_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        heading: \"Social Sellers\",\n        para: \"With no monthly fees, a convenient cash on delivery (COD) facility, reliable tracking information for their customers, and the ability to ship to any destination at any time, Shipyaari is an ideal choice for social sellers.\"\n    },\n    {\n        imgurl: _Assets_Images_services_Icons_4_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        heading: \"Small & Medium Enterprises (SMEs)\",\n        para: \"Providing SMEs with multiple channel integrations, tracking notifications for buyers, multiple pickup locations, and optimized shipping processes. Moreover, we offer the convenience of shipping to any location, 24/7.\"\n    },\n    {\n        imgurl: _Assets_Images_services_Icons_5_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        heading: \"Service Providers\",\n        para: 'Join hands with ShipEx India Service Providers to supercharge your logistics operations. We empower marketplace sellers with seamless marketplace integrations, multi-location pickup and delivery options, and efficient order processing. With our \"ship anytime to anywhere\" capability, your products can now effortlessly reach customers on a global scale.'\n    },\n    {\n        imgurl: _Assets_Images_services_Icons_6_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        heading: \"Manufacturers\",\n        para: 'Manufacturers benefit from integrations with multiple platforms and marketplaces, enabling efficient order processing and a wide reach. They can also take advantage of our \"ship anytime to anywhere\" service.'\n    }\n];\nconst HomeServiceContainer = styled_components__WEBPACK_IMPORTED_MODULE_10__[\"default\"].div(_templateObject());\n_c = HomeServiceContainer;\nfunction Services() {\n    const containerVariants = {\n        hidden: {\n            opacity: 0\n        },\n        visible: {\n            opacity: 1,\n            transition: {\n                staggerChildren: 0.5,\n                duration: 1,\n                ease: \"easeInOut\"\n            }\n        }\n    };\n    const cardVariants = {\n        hidden: {\n            opacity: 0,\n            y: 20\n        },\n        visible: {\n            opacity: 1,\n            y: 0,\n            transition: {\n                duration: 1,\n                ease: \"easeInOut\"\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HomeServiceContainer, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    className: \"title\",\n                    children: \"Enterprise to Social sellers, We provide the best rates and services for logistics solutions to businesses of all sizes.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Services\\\\Services.jsx\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {\n                    className: \"container\",\n                    variants: containerVariants,\n                    initial: \"hidden\",\n                    whileInView: \"visible\",\n                    children: cardData.map((data, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {\n                            variants: cardVariants,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Card_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                imgurl: data.imgurl,\n                                heading: data.heading,\n                                para: data.para\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Services\\\\Services.jsx\",\n                                lineNumber: 133,\n                                columnNumber: 15\n                            }, this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Services\\\\Services.jsx\",\n                            lineNumber: 132,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Services\\\\Services.jsx\",\n                    lineNumber: 125,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Services\\\\Services.jsx\",\n            lineNumber: 120,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Services\\\\Services.jsx\",\n        lineNumber: 119,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Services;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Services);\nvar _c, _c1;\n$RefreshReg$(_c, \"HomeServiceContainer\");\n$RefreshReg$(_c1, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvSG9tZS9TZXJ2aWNlcy9TZXJ2aWNlcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ0EsQ0FBQyx1QkFBdUI7QUFDaEM7QUFDeUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRXhELCtCQUErQjtBQUMvQixNQUFNVSxXQUFXO0lBQ2Y7UUFDRUMsUUFBUVAsMkVBQUlBO1FBQ1pRLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsUUFBUU4sMkVBQUlBO1FBQ1pPLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsUUFBUUwsMkVBQUlBO1FBQ1pNLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsUUFBUUosMkVBQUlBO1FBQ1pLLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsUUFBUUgsMkVBQUlBO1FBQ1pJLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsUUFBUUYsMkVBQUlBO1FBQ1pHLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0NBQ0Q7QUFFRCxNQUFNQyx1QkFBdUJiLDBEQUFNQSxDQUFDYyxHQUFHO0tBQWpDRDtBQStDTixTQUFTRTtJQUNQLE1BQU1DLG9CQUFvQjtRQUN4QkMsUUFBUTtZQUFFQyxTQUFTO1FBQUU7UUFDckJDLFNBQVM7WUFDUEQsU0FBUztZQUNURSxZQUFZO2dCQUNWQyxpQkFBaUI7Z0JBQ2pCQyxVQUFVO2dCQUNWQyxNQUFNO1lBQ1I7UUFDRjtJQUNGO0lBRUEsTUFBTUMsZUFBZTtRQUNuQlAsUUFBUTtZQUFFQyxTQUFTO1lBQUdPLEdBQUc7UUFBRztRQUM1Qk4sU0FBUztZQUNQRCxTQUFTO1lBQ1RPLEdBQUc7WUFDSEwsWUFBWTtnQkFDVkUsVUFBVTtnQkFDVkMsTUFBTTtZQUNSO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVDtrQkFDQyw0RUFBQ0Q7OzhCQUNDLDhEQUFDYTtvQkFBR0MsV0FBVTs4QkFBUTs7Ozs7OzhCQUl0Qiw4REFBQzFCLGtEQUFNQSxDQUFDYSxHQUFHO29CQUNUYSxXQUFVO29CQUNWQyxVQUFVWjtvQkFDVmEsU0FBUTtvQkFDUkMsYUFBWTs4QkFFWHJCLFNBQVNzQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ25CLDhEQUFDaEMsa0RBQU1BLENBQUNhLEdBQUc7NEJBQWFjLFVBQVVKO3NDQUNoQyw0RUFBQ3RCLGtEQUFJQTtnQ0FDSFEsUUFBUXNCLEtBQUt0QixNQUFNO2dDQUNuQkMsU0FBU3FCLEtBQUtyQixPQUFPO2dDQUNyQkMsTUFBTW9CLEtBQUtwQixJQUFJOzs7Ozs7MkJBSkZxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTdCO01BbkRTbEI7QUFxRFQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lL1NlcnZpY2VzL1NlcnZpY2VzLmpzeD8xODVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjsgLy8gSW1wb3J0IEZyYW1lciBNb3Rpb25cclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZC9DYXJkXCI7XHJcbmltcG9ydCBpbWcxIGZyb20gXCJAL0Fzc2V0cy9JbWFnZXMvc2VydmljZXMvSWNvbnMvMS5wbmdcIjtcclxuaW1wb3J0IGltZzIgZnJvbSBcIkAvQXNzZXRzL0ltYWdlcy9zZXJ2aWNlcy9JY29ucy8yLnBuZ1wiO1xyXG5pbXBvcnQgaW1nMyBmcm9tIFwiQC9Bc3NldHMvSW1hZ2VzL3NlcnZpY2VzL0ljb25zLzMucG5nXCI7XHJcbmltcG9ydCBpbWc0IGZyb20gXCJAL0Fzc2V0cy9JbWFnZXMvc2VydmljZXMvSWNvbnMvNC5wbmdcIjtcclxuaW1wb3J0IGltZzUgZnJvbSBcIkAvQXNzZXRzL0ltYWdlcy9zZXJ2aWNlcy9JY29ucy81LnBuZ1wiO1xyXG5pbXBvcnQgaW1nNiBmcm9tIFwiQC9Bc3NldHMvSW1hZ2VzL3NlcnZpY2VzL0ljb25zLzYucG5nXCI7XHJcblxyXG4vLyBEZWZpbmUgYW4gYXJyYXkgb2YgY2FyZCBkYXRhXHJcbmNvbnN0IGNhcmREYXRhID0gW1xyXG4gIHtcclxuICAgIGltZ3VybDogaW1nMSxcclxuICAgIGhlYWRpbmc6IFwiRGlyZWN0LXRvLUNvbnN1bWVyIChEMkMpXCIsXHJcbiAgICBwYXJhOiBcIkVtcG93ZXJpbmcgRDJDIGJ1c2luZXNzZXMgd2l0aCBzZWFtbGVzcyBjaGFubmVsIGludGVncmF0aW9uLCBlbmhhbmNlZCBvcGVyYXRpb25hbCBlZmZpY2llbmN5LCB2YWx1ZS1hZGRlZCBzZXJ2aWNlcywgYW5kIGEgdXNlci1mcmllbmRseSBwbGF0Zm9ybSBmb3Igb3JkZXIgbWFuYWdlbWVudCBhbmQgZnVsZmlsbG1lbnQuIFBsdXMsIHdlIGVuc3VyZSB0aGF0IHlvdXIgc2hpcG1lbnRzIGNhbiBnbyBhbnl3aGVyZSwgYW55dGltZS5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ3VybDogaW1nMixcclxuICAgIGhlYWRpbmc6IFwiTWFya2V0cGxhY2UgU2VsbGVyc1wiLFxyXG4gICAgcGFyYTogJ0VtcG93ZXJpbmcgbWFya2V0cGxhY2Ugc2VsbGVycyBieSBvZmZlcmluZyBlYXN5IGludGVncmF0aW9ucyB3aXRoIG11bHRpcGxlIG1hcmtldHBsYWNlcyBhbmQgY2FydHMsIG11bHRpcGxlIGxvY2F0aW9ucyBmb3IgcGlja3VwIGFuZCBkZWxpdmVyeSwgYW5kIGVuYWJsaW5nIGVmZmljaWVudCBvcmRlciBwcm9jZXNzaW5nLiBQbHVzLCBvdXIgXCJzaGlwIGFueXRpbWUgdG8gYW55d2hlcmVcIiBmZWF0dXJlIGVuc3VyZXMgeW91ciBwcm9kdWN0cyByZWFjaCBjdXN0b21lcnMgZ2xvYmFsbHkuJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltZ3VybDogaW1nMyxcclxuICAgIGhlYWRpbmc6IFwiU29jaWFsIFNlbGxlcnNcIixcclxuICAgIHBhcmE6IFwiV2l0aCBubyBtb250aGx5IGZlZXMsIGEgY29udmVuaWVudCBjYXNoIG9uIGRlbGl2ZXJ5IChDT0QpIGZhY2lsaXR5LCByZWxpYWJsZSB0cmFja2luZyBpbmZvcm1hdGlvbiBmb3IgdGhlaXIgY3VzdG9tZXJzLCBhbmQgdGhlIGFiaWxpdHkgdG8gc2hpcCB0byBhbnkgZGVzdGluYXRpb24gYXQgYW55IHRpbWUsIFNoaXB5YWFyaSBpcyBhbiBpZGVhbCBjaG9pY2UgZm9yIHNvY2lhbCBzZWxsZXJzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1ndXJsOiBpbWc0LFxyXG4gICAgaGVhZGluZzogXCJTbWFsbCAmIE1lZGl1bSBFbnRlcnByaXNlcyAoU01FcylcIixcclxuICAgIHBhcmE6IFwiUHJvdmlkaW5nIFNNRXMgd2l0aCBtdWx0aXBsZSBjaGFubmVsIGludGVncmF0aW9ucywgdHJhY2tpbmcgbm90aWZpY2F0aW9ucyBmb3IgYnV5ZXJzLCBtdWx0aXBsZSBwaWNrdXAgbG9jYXRpb25zLCBhbmQgb3B0aW1pemVkIHNoaXBwaW5nIHByb2Nlc3Nlcy4gTW9yZW92ZXIsIHdlIG9mZmVyIHRoZSBjb252ZW5pZW5jZSBvZiBzaGlwcGluZyB0byBhbnkgbG9jYXRpb24sIDI0LzcuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWd1cmw6IGltZzUsXHJcbiAgICBoZWFkaW5nOiBcIlNlcnZpY2UgUHJvdmlkZXJzXCIsXHJcbiAgICBwYXJhOiAnSm9pbiBoYW5kcyB3aXRoIFNoaXBFeCBJbmRpYSBTZXJ2aWNlIFByb3ZpZGVycyB0byBzdXBlcmNoYXJnZSB5b3VyIGxvZ2lzdGljcyBvcGVyYXRpb25zLiBXZSBlbXBvd2VyIG1hcmtldHBsYWNlIHNlbGxlcnMgd2l0aCBzZWFtbGVzcyBtYXJrZXRwbGFjZSBpbnRlZ3JhdGlvbnMsIG11bHRpLWxvY2F0aW9uIHBpY2t1cCBhbmQgZGVsaXZlcnkgb3B0aW9ucywgYW5kIGVmZmljaWVudCBvcmRlciBwcm9jZXNzaW5nLiBXaXRoIG91ciBcInNoaXAgYW55dGltZSB0byBhbnl3aGVyZVwiIGNhcGFiaWxpdHksIHlvdXIgcHJvZHVjdHMgY2FuIG5vdyBlZmZvcnRsZXNzbHkgcmVhY2ggY3VzdG9tZXJzIG9uIGEgZ2xvYmFsIHNjYWxlLicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWd1cmw6IGltZzYsXHJcbiAgICBoZWFkaW5nOiBcIk1hbnVmYWN0dXJlcnNcIixcclxuICAgIHBhcmE6ICdNYW51ZmFjdHVyZXJzIGJlbmVmaXQgZnJvbSBpbnRlZ3JhdGlvbnMgd2l0aCBtdWx0aXBsZSBwbGF0Zm9ybXMgYW5kIG1hcmtldHBsYWNlcywgZW5hYmxpbmcgZWZmaWNpZW50IG9yZGVyIHByb2Nlc3NpbmcgYW5kIGEgd2lkZSByZWFjaC4gVGhleSBjYW4gYWxzbyB0YWtlIGFkdmFudGFnZSBvZiBvdXIgXCJzaGlwIGFueXRpbWUgdG8gYW55d2hlcmVcIiBzZXJ2aWNlLicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IEhvbWVTZXJ2aWNlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTByZW07XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLW1pZC1mb250KTtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmcpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMTByZW07XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDNyZW07XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNXJlbTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgZ2FwOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBTZXJ2aWNlcygpIHtcclxuICBjb25zdCBjb250YWluZXJWYXJpYW50cyA9IHtcclxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwIH0sXHJcbiAgICB2aXNpYmxlOiB7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuNSwgLy8gU3RhZ2dlciBlZmZlY3QgYmV0d2VlbiBjaGlsZHJlblxyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhcmRWYXJpYW50cyA9IHtcclxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAyMCB9LFxyXG4gICAgdmlzaWJsZToge1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICB5OiAwLFxyXG4gICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIb21lU2VydmljZUNvbnRhaW5lcj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgIEVudGVycHJpc2UgdG8gU29jaWFsIHNlbGxlcnMsIFdlIHByb3ZpZGUgdGhlIGJlc3QgcmF0ZXMgYW5kIHNlcnZpY2VzXHJcbiAgICAgICAgICBmb3IgbG9naXN0aWNzIHNvbHV0aW9ucyB0byBidXNpbmVzc2VzIG9mIGFsbCBzaXplcy5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgdmFyaWFudHM9e2NvbnRhaW5lclZhcmlhbnRzfVxyXG4gICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtjYXJkRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT17aW5kZXh9IHZhcmlhbnRzPXtjYXJkVmFyaWFudHN9PlxyXG4gICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBpbWd1cmw9e2RhdGEuaW1ndXJsfVxyXG4gICAgICAgICAgICAgICAgaGVhZGluZz17ZGF0YS5oZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgcGFyYT17ZGF0YS5wYXJhfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgPC9Ib21lU2VydmljZUNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJtb3Rpb24iLCJDYXJkIiwiaW1nMSIsImltZzIiLCJpbWczIiwiaW1nNCIsImltZzUiLCJpbWc2IiwiY2FyZERhdGEiLCJpbWd1cmwiLCJoZWFkaW5nIiwicGFyYSIsIkhvbWVTZXJ2aWNlQ29udGFpbmVyIiwiZGl2IiwiU2VydmljZXMiLCJjb250YWluZXJWYXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsImR1cmF0aW9uIiwiZWFzZSIsImNhcmRWYXJpYW50cyIsInkiLCJoMSIsImNsYXNzTmFtZSIsInZhcmlhbnRzIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3IiwibWFwIiwiZGF0YSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Home/Services/Services.jsx\n"));

/***/ })

});