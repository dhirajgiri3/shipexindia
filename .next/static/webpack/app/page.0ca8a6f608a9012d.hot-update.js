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

/***/ "(app-pages-browser)/./Components/Home/Glance/Components/Left.jsx":
/*!****************************************************!*\
  !*** ./Components/Home/Glance/Components/Left.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Assets_Images_Glance_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Assets/Images/Glance/1.png */ \"(app-pages-browser)/./Assets/Images/Glance/1.png\");\n/* harmony import */ var _Assets_Images_Glance_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Assets/Images/Glance/2.png */ \"(app-pages-browser)/./Assets/Images/Glance/2.png\");\n/* harmony import */ var _Assets_Images_Glance_3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Assets/Images/Glance/3.png */ \"(app-pages-browser)/./Assets/Images/Glance/3.png\");\n/* harmony import */ var _Assets_Images_Glance_4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Assets/Images/Glance/4.png */ \"(app-pages-browser)/./Assets/Images/Glance/4.png\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  .left {\\n    width: 100%;\\n    height: 90vh;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    grid-template-rows: 1fr 1fr;\\n    gap: 1rem;\\n    background: #eeeeee50;\\n    backdrop-filter: blur(20px);\\n    padding: 1rem;\\n    border-radius: 40px;\\n    place-items: center;\\n\\n    @media screen and (max-width: 768px) {\\n      grid-template-columns: 1fr;\\n      grid-template-rows: 1fr 1fr 1fr 1fr;\\n      min-height: 90vh;\\n      height: 100%;\\n    }\\n\\n    .comp {\\n      width: 100%;\\n      height: 40vh;\\n      overflow-x: hidden;\\n      overflow-y: scroll;\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: flex-start;\\n      align-items: flex-start;\\n      padding: 1rem;\\n      gap: 1rem;\\n      border-radius: 30px;\\n      backdrop-filter: blur(20px);\\n      -webkit-backdrop-filter: blur(20px);\\n      transition: transform 0.5s ease-in-out;\\n      transform: scale(1);\\n      perspective: 1000;\\n\\n      &::-webkit-scrollbar {\\n        width: 0;\\n      }\\n\\n      &:hover {\\n        transform: scale(1.05);\\n      }\\n\\n      img {\\n        width: 4rem;\\n        height: 4rem;\\n        object-fit: cover;\\n        border-radius: 100px;\\n        background: #ffffff70;\\n        backdrop-filter: blur(20px);\\n        padding: 1rem;\\n      }\\n\\n      h1 {\\n        font-size: var(--heading-small);\\n        font-weight: 600;\\n        font-family: var(--bold);\\n        color: var(--text-color);\\n      }\\n\\n      p {\\n        font-size: var(--para-mini);\\n        font-weight: 400;\\n        font-family: var(--light-font);\\n        color: var(--text-grey);\\n      }\\n    }\\n\\n    .first {\\n      background: #5195f930;\\n    }\\n\\n    .second {\\n      background: #8e52ff30;\\n    }\\n\\n    .third {\\n      background: #ff5a9b30;\\n    }\\n\\n    .fourth {\\n      background: #ff914b30;\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\n\n\nconst GlanceLeftContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n_c = GlanceLeftContainer;\nconst upVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1,\n            ease: \"easeInOut\",\n            stiffness: 100,\n            damping: 15\n        }\n    }\n};\nconst contentArray = [\n    {\n        imgSrc: _Assets_Images_Glance_1_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        alt: \"29K+ Pincodes\",\n        title: \"29K+ Pincodes\",\n        description: \"With a network spanning over 29,000 pincodes across the country, we ensure that your shipments reach every nook and corner of India, making us your reliable logistics partner for nationwide delivery.\"\n    },\n    {\n        imgSrc: _Assets_Images_Glance_2_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        alt: \"25K+ Shipping Partner\",\n        title: \"25K+ Shipping Partner\",\n        description: \"Our collaboration with 25+ shipping partners allows us to offer a diverse range of shipping solutions tailored to your specific needs. Whether it's speed, cost-efficiency, or specialized handling, we've got you covered.\"\n    },\n    {\n        imgSrc: _Assets_Images_Glance_3_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        alt: \"20K+ Sellers\",\n        title: \"20K+ Sellers\",\n        description: \"Join a thriving community of over 20,000 sellers who trust our logistics services to deliver their products seamlessly. We empower businesses of all sizes to scale and grow with confidence.\"\n    },\n    {\n        imgSrc: _Assets_Images_Glance_4_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        alt: \"50K+ Daily Shipment\",\n        title: \"50K+ Daily Shipment\",\n        description: \"With a staggering 50,000+ shipments dispatched daily, our logistical prowess ensures your goods are on the move efficiently. Experience the ease of managing your shipping needs with us.\"\n    }\n];\nfunction Left() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(GlanceLeftContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"left\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AnimatePresence, {\n                children: contentArray.map((content, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                        variants: upVariants,\n                        initial: \"hidden\",\n                        animate: \"visible\",\n                        exit: \"hidden\" // Exit animation\n                        ,\n                        className: \"comp \".concat(index % 2 === 0 ? \"first\" : \"second\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: content.imgSrc,\n                                alt: content.alt\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                                lineNumber: 160,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                children: content.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                                lineNumber: 161,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: content.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                                lineNumber: 162,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                        lineNumber: 152,\n                        columnNumber: 15\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n                lineNumber: 150,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n            lineNumber: 148,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dhira\\\\Documents\\\\shipexindia\\\\Components\\\\Home\\\\Glance\\\\Components\\\\Left.jsx\",\n        lineNumber: 147,\n        columnNumber: 7\n    }, this);\n}\n_c1 = Left;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Left);\nvar _c, _c1;\n$RefreshReg$(_c, \"GlanceLeftContainer\");\n$RefreshReg$(_c1, \"Left\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvSG9tZS9HbGFuY2UvQ29tcG9uZW50cy9MZWZ0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTDtBQUNhO0FBQ1M7QUFDQTtBQUNBO0FBQ0E7QUFDTjtBQUUxQyxNQUFNUyxzQkFBc0JQLHlEQUFNQSxDQUFDUSxHQUFHO0tBQWhDRDtBQTBGTixNQUFNRSxhQUFhO0lBQ2ZDLFFBQVE7UUFBRUMsU0FBUztRQUFHQyxHQUFHO0lBQUc7SUFDNUJDLFNBQVM7UUFDUEYsU0FBUztRQUNUQyxHQUFHO1FBQ0hFLFlBQVk7WUFDVkMsVUFBVTtZQUNWQyxNQUFNO1lBQ05DLFdBQVc7WUFDWEMsU0FBUztRQUNYO0lBQ0Y7QUFDRjtBQUVBLE1BQU1DLGVBQWU7SUFDbkI7UUFDRUMsUUFBUW5CLG1FQUFJQTtRQUNab0IsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtJQUNBO1FBQ0VILFFBQVFsQixtRUFBSUE7UUFDWm1CLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxhQUNFO0lBQ0o7SUFDQTtRQUNFSCxRQUFRakIsbUVBQUlBO1FBQ1prQixLQUFLO1FBQ0xDLE9BQU87UUFDUEMsYUFDRTtJQUNKO0lBQ0E7UUFDRUgsUUFBUWhCLG1FQUFJQTtRQUNaaUIsS0FBSztRQUNMQyxPQUFPO1FBQ1BDLGFBQ0U7SUFDSjtDQUNEO0FBRUQsU0FBU0M7SUFDUCxxQkFDRSw4REFBQ2pCO2tCQUNDLDRFQUFDQztZQUFJaUIsV0FBVTtzQkFFYiw0RUFBQ0M7MEJBQ0VQLGFBQWFRLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDMUIsOERBQUN4QixpREFBTUEsQ0FBQ0csR0FBRzt3QkFFVHNCLFVBQVVyQjt3QkFDVnNCLFNBQVE7d0JBQ1JDLFNBQVE7d0JBQ1JDLE1BQUssU0FBUyxpQkFBaUI7O3dCQUMvQlIsV0FBVyxRQUE2QyxPQUFyQ0ksUUFBUSxNQUFNLElBQUksVUFBVTs7MENBRS9DLDhEQUFDL0IsbURBQUtBO2dDQUFDb0MsS0FBS04sUUFBUVIsTUFBTTtnQ0FBRUMsS0FBS08sUUFBUVAsR0FBRzs7Ozs7OzBDQUM1Qyw4REFBQ2M7MENBQUlQLFFBQVFOLEtBQUs7Ozs7OzswQ0FDbEIsOERBQUNjOzBDQUFHUixRQUFRTCxXQUFXOzs7Ozs7O3VCQVRsQk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JuQjtNQXhCU0w7QUEwQlQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lL0dsYW5jZS9Db21wb25lbnRzL0xlZnQuanN4Pzg3NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IGltZzEgZnJvbSBcIkAvQXNzZXRzL0ltYWdlcy9HbGFuY2UvMS5wbmdcIjtcclxuaW1wb3J0IGltZzIgZnJvbSBcIkAvQXNzZXRzL0ltYWdlcy9HbGFuY2UvMi5wbmdcIjtcclxuaW1wb3J0IGltZzMgZnJvbSBcIkAvQXNzZXRzL0ltYWdlcy9HbGFuY2UvMy5wbmdcIjtcclxuaW1wb3J0IGltZzQgZnJvbSBcIkAvQXNzZXRzL0ltYWdlcy9HbGFuY2UvNC5wbmdcIjtcclxuaW1wb3J0IHsgbW90aW9uLCBBIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmNvbnN0IEdsYW5jZUxlZnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU1MDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29tcCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBnYXA6IDFyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICBwZXJzcGVjdGl2ZTogMTAwMDtcclxuXHJcbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjcwO1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLXNtYWxsKTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ib2xkKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFyYS1taW5pKTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1saWdodC1mb250KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ncmV5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5maXJzdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM1MTk1ZjkzMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2Vjb25kIHtcclxuICAgICAgYmFja2dyb3VuZDogIzhlNTJmZjMwO1xyXG4gICAgfVxyXG5cclxuICAgIC50aGlyZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZjVhOWIzMDtcclxuICAgIH1cclxuXHJcbiAgICAuZm91cnRoIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmOTE0YjMwO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHVwVmFyaWFudHMgPSB7XHJcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogNTAgfSxcclxuICAgIHZpc2libGU6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgeTogMCxcclxuICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgIGR1cmF0aW9uOiAxLFxyXG4gICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXHJcbiAgICAgICAgc3RpZmZuZXNzOiAxMDAsXHJcbiAgICAgICAgZGFtcGluZzogMTUsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgY29udGVudEFycmF5ID0gW1xyXG4gICAge1xyXG4gICAgICBpbWdTcmM6IGltZzEsXHJcbiAgICAgIGFsdDogXCIyOUsrIFBpbmNvZGVzXCIsXHJcbiAgICAgIHRpdGxlOiBcIjI5SysgUGluY29kZXNcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJXaXRoIGEgbmV0d29yayBzcGFubmluZyBvdmVyIDI5LDAwMCBwaW5jb2RlcyBhY3Jvc3MgdGhlIGNvdW50cnksIHdlIGVuc3VyZSB0aGF0IHlvdXIgc2hpcG1lbnRzIHJlYWNoIGV2ZXJ5IG5vb2sgYW5kIGNvcm5lciBvZiBJbmRpYSwgbWFraW5nIHVzIHlvdXIgcmVsaWFibGUgbG9naXN0aWNzIHBhcnRuZXIgZm9yIG5hdGlvbndpZGUgZGVsaXZlcnkuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWdTcmM6IGltZzIsXHJcbiAgICAgIGFsdDogXCIyNUsrIFNoaXBwaW5nIFBhcnRuZXJcIixcclxuICAgICAgdGl0bGU6IFwiMjVLKyBTaGlwcGluZyBQYXJ0bmVyXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiT3VyIGNvbGxhYm9yYXRpb24gd2l0aCAyNSsgc2hpcHBpbmcgcGFydG5lcnMgYWxsb3dzIHVzIHRvIG9mZmVyIGEgZGl2ZXJzZSByYW5nZSBvZiBzaGlwcGluZyBzb2x1dGlvbnMgdGFpbG9yZWQgdG8geW91ciBzcGVjaWZpYyBuZWVkcy4gV2hldGhlciBpdCdzIHNwZWVkLCBjb3N0LWVmZmljaWVuY3ksIG9yIHNwZWNpYWxpemVkIGhhbmRsaW5nLCB3ZSd2ZSBnb3QgeW91IGNvdmVyZWQuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWdTcmM6IGltZzMsXHJcbiAgICAgIGFsdDogXCIyMEsrIFNlbGxlcnNcIixcclxuICAgICAgdGl0bGU6IFwiMjBLKyBTZWxsZXJzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiSm9pbiBhIHRocml2aW5nIGNvbW11bml0eSBvZiBvdmVyIDIwLDAwMCBzZWxsZXJzIHdobyB0cnVzdCBvdXIgbG9naXN0aWNzIHNlcnZpY2VzIHRvIGRlbGl2ZXIgdGhlaXIgcHJvZHVjdHMgc2VhbWxlc3NseS4gV2UgZW1wb3dlciBidXNpbmVzc2VzIG9mIGFsbCBzaXplcyB0byBzY2FsZSBhbmQgZ3JvdyB3aXRoIGNvbmZpZGVuY2UuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWdTcmM6IGltZzQsXHJcbiAgICAgIGFsdDogXCI1MEsrIERhaWx5IFNoaXBtZW50XCIsXHJcbiAgICAgIHRpdGxlOiBcIjUwSysgRGFpbHkgU2hpcG1lbnRcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJXaXRoIGEgc3RhZ2dlcmluZyA1MCwwMDArIHNoaXBtZW50cyBkaXNwYXRjaGVkIGRhaWx5LCBvdXIgbG9naXN0aWNhbCBwcm93ZXNzIGVuc3VyZXMgeW91ciBnb29kcyBhcmUgb24gdGhlIG1vdmUgZWZmaWNpZW50bHkuIEV4cGVyaWVuY2UgdGhlIGVhc2Ugb2YgbWFuYWdpbmcgeW91ciBzaGlwcGluZyBuZWVkcyB3aXRoIHVzLlwiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIExlZnQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R2xhbmNlTGVmdENvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgIHsvKiBVc2UgQW5pbWF0ZVByZXNlbmNlIHRvIGhhbmRsZSBjb21wb25lbnQgcmVtb3ZhbCAqL31cclxuICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICAgIHtjb250ZW50QXJyYXkubWFwKChjb250ZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3VwVmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgIGV4aXQ9XCJoaWRkZW5cIiAvLyBFeGl0IGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29tcCAke2luZGV4ICUgMiA9PT0gMCA/IFwiZmlyc3RcIiA6IFwic2Vjb25kXCJ9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtjb250ZW50LmltZ1NyY30gYWx0PXtjb250ZW50LmFsdH0gLz5cclxuICAgICAgICAgICAgICAgIDxoMT57Y29udGVudC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+e2NvbnRlbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9HbGFuY2VMZWZ0Q29udGFpbmVyPlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTGVmdDtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJzdHlsZWQiLCJpbWcxIiwiaW1nMiIsImltZzMiLCJpbWc0IiwibW90aW9uIiwiQSIsIkdsYW5jZUxlZnRDb250YWluZXIiLCJkaXYiLCJ1cFZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJjb250ZW50QXJyYXkiLCJpbWdTcmMiLCJhbHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiTGVmdCIsImNsYXNzTmFtZSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1hcCIsImNvbnRlbnQiLCJpbmRleCIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJleGl0Iiwic3JjIiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Home/Glance/Components/Left.jsx\n"));

/***/ })

});