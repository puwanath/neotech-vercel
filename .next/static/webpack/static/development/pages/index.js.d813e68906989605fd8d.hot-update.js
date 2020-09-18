webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/blocks/BlockBrands.tsx":
/*!***********************************************!*\
  !*** ./src/components/blocks/BlockBrands.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlockBrands; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_AppLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/AppLink */ "./src/components/shared/AppLink.tsx");
/* harmony import */ var _shared_StroykaSlick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/StroykaSlick */ "./src/components/shared/StroykaSlick.tsx");
/* harmony import */ var _data_shopBrands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/shopBrands */ "./src/data/shopBrands.ts");

var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\blocks\\BlockBrands.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// react
 // application


 // data stubs


var slickSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToShow: 6,
  slidesToScroll: 5,
  responsive: [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 575,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
function BlockBrands() {
  var _this = this;

  var brandsList = _data_shopBrands__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (brand, index) {
    return __jsx("div", {
      key: index,
      className: "block-brands__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: brand.image,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    })));
  });
  return __jsx("div", {
    className: "block block-brands",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "block-brands__slider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx(_shared_StroykaSlick__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, slickSettings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }), brandsList))));
}
_c = BlockBrands;

var _c;

$RefreshReg$(_c, "BlockBrands");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/home/HomePage.tsx":
/*!******************************************!*\
  !*** ./src/components/home/HomePage.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/shop */ "./src/api/shop.ts");
/* harmony import */ var _services_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/hooks */ "./src/services/hooks.ts");
/* harmony import */ var _blocks_BlockBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/BlockBanner */ "./src/components/blocks/BlockBanner.tsx");
/* harmony import */ var _blocks_BlockBrands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/BlockBrands */ "./src/components/blocks/BlockBrands.tsx");
/* harmony import */ var _blocks_BlockCategories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/BlockCategories */ "./src/components/blocks/BlockCategories.tsx");
/* harmony import */ var _blocks_BlockFeatures__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/BlockFeatures */ "./src/components/blocks/BlockFeatures.tsx");
/* harmony import */ var _blocks_BlockPosts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blocks/BlockPosts */ "./src/components/blocks/BlockPosts.tsx");
/* harmony import */ var _blocks_BlockProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blocks/BlockProducts */ "./src/components/blocks/BlockProducts.tsx");
/* harmony import */ var _blocks_BlockProductsCarousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../blocks/BlockProductsCarousel */ "./src/components/blocks/BlockProductsCarousel.tsx");
/* harmony import */ var _blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../blocks/BlockSlideShow */ "./src/components/blocks/BlockSlideShow.tsx");
/* harmony import */ var _data_blogPosts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data/blogPosts */ "./src/data/blogPosts.ts");
/* harmony import */ var _data_shopBlockCategories__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/shopBlockCategories */ "./src/data/shopBlockCategories.ts");
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../data/theme */ "./src/data/theme.ts");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\home\\HomePage.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party

 // application


 // blocks








 // data stubs





function HomePage(props) {
  _s();

  var _this = this;

  var initData = props.initData;
  /**
   * Featured products.
   */

  var featuredProducts = Object(_services_hooks__WEBPACK_IMPORTED_MODULE_3__["useProductTabs"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return [{
      id: 1,
      name: 'All',
      categorySlug: undefined
    }, {
      id: 2,
      name: 'Power Tools',
      categorySlug: 'power-tools'
    }, {
      id: 3,
      name: 'Hand Tools',
      categorySlug: 'hand-tools'
    }, {
      id: 4,
      name: 'Plumbing',
      categorySlug: 'plumbing'
    }];
  }, []), function (tab) {
    return _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getPopularProducts({
      limit: 12,
      category: tab.categorySlug
    });
  }, initData === null || initData === void 0 ? void 0 : initData.featuredProducts);
  /**
   * Bestsellers.
   */

  var bestsellers = Object(_services_hooks__WEBPACK_IMPORTED_MODULE_3__["useDeferredData"])(function () {
    return _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getPopularProducts({
      limit: 7
    });
  }, [], initData === null || initData === void 0 ? void 0 : initData.bestsellers);
  /**
   * Latest products.
   */

  var latestProducts = Object(_services_hooks__WEBPACK_IMPORTED_MODULE_3__["useProductTabs"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return [{
      id: 1,
      name: 'All',
      categorySlug: undefined
    }, {
      id: 2,
      name: 'Power Tools',
      categorySlug: 'power-tools'
    }, {
      id: 3,
      name: 'Hand Tools',
      categorySlug: 'hand-tools'
    }, {
      id: 4,
      name: 'Plumbing',
      categorySlug: 'plumbing'
    }];
  }, []), function (tab) {
    return _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getLatestProducts({
      limit: 8,
      category: tab.categorySlug
    });
  }, initData === null || initData === void 0 ? void 0 : initData.latestProducts);
  /**
   * Product columns.
   */

  var columns = (initData === null || initData === void 0 ? void 0 : initData.productColumns) || Object(_services_hooks__WEBPACK_IMPORTED_MODULE_3__["useProductColumns"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return [{
      title: 'Top Rated Products',
      source: function source() {
        return _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getTopRatedProducts({
          limit: 3
        });
      }
    }, {
      title: 'Special Offers',
      source: function source() {
        return _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getDiscountedProducts({
          limit: 3
        });
      }
    }, {
      title: 'Bestsellers',
      source: function source() {
        return _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getPopularProducts({
          limit: 3
        });
      }
    }];
  }, []));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, "Home Page Two \u2014 ".concat(_data_theme__WEBPACK_IMPORTED_MODULE_14__["default"].name))), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 28
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockBrands__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 28
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockFeatures__WEBPACK_IMPORTED_MODULE_7__["default"], {
      layout: "boxed",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 28
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockProductsCarousel__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: "Featured Products",
      layout: "grid-5",
      rows: 2,
      products: featuredProducts.data,
      loading: featuredProducts.isLoading,
      groups: featuredProducts.tabs,
      onGroupClick: featuredProducts.handleTabChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    });
  }, [featuredProducts]), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 28
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockProducts__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: "Bestsellers",
      layout: "large-last",
      featuredProduct: bestsellers.data[0],
      products: bestsellers.data.slice(1, 7),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }
    });
  }, [bestsellers.data]), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockCategories__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Popular Categories",
      layout: "compact",
      categories: _data_shopBlockCategories__WEBPACK_IMPORTED_MODULE_13__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockProductsCarousel__WEBPACK_IMPORTED_MODULE_10__["default"], {
      title: "New Arrivals",
      layout: "grid-5",
      products: latestProducts.data,
      loading: latestProducts.isLoading,
      groups: latestProducts.tabs,
      onGroupClick: latestProducts.handleTabChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }
    });
  }, [latestProducts]), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockPosts__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: "Latest News",
      layout: "grid-nl",
      posts: _data_blogPosts__WEBPACK_IMPORTED_MODULE_12__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 28
      }
    });
  }, []));
}

_s(HomePage, "VKL3eaY2x65MYfu1OWopfm6+DhE=", false, function () {
  return [_services_hooks__WEBPACK_IMPORTED_MODULE_3__["useProductTabs"], _services_hooks__WEBPACK_IMPORTED_MODULE_3__["useDeferredData"], _services_hooks__WEBPACK_IMPORTED_MODULE_3__["useProductTabs"], _services_hooks__WEBPACK_IMPORTED_MODULE_3__["useProductColumns"]];
});

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/data/shopBrands.ts":
/*!********************************!*\
  !*** ./src/data/shopBrands.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var dataShopBrands = [{
  slug: 'diab',
  name: 'Diab',
  image: '/images/suppliers/diab.jpg'
}, {
  slug: 'first',
  name: 'First',
  image: '/images/suppliers/first.jpg'
}, {
  slug: 'nord',
  name: 'nord',
  image: '/images/suppliers/nord.jpg'
}, {
  slug: 'solvay',
  name: 'solvay',
  image: '/images/suppliers/solvay.jpg'
}, {
  slug: 'texonic',
  name: 'texonic',
  image: '/images/suppliers/texonic.jpg'
}, {
  slug: 'jushi',
  name: 'jushi',
  image: '/images/suppliers/jushi.jpg'
}];
/* harmony default export */ __webpack_exports__["default"] = (dataShopBrands);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9ja3MvQmxvY2tCcmFuZHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUvSG9tZVBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9kYXRhL3Nob3BCcmFuZHMudHMiXSwibmFtZXMiOlsic2xpY2tTZXR0aW5ncyIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiQmxvY2tCcmFuZHMiLCJicmFuZHNMaXN0IiwiZGF0YVNob3BCcmFuZHMiLCJtYXAiLCJicmFuZCIsImluZGV4IiwiaW1hZ2UiLCJIb21lUGFnZSIsInByb3BzIiwiaW5pdERhdGEiLCJmZWF0dXJlZFByb2R1Y3RzIiwidXNlUHJvZHVjdFRhYnMiLCJ1c2VNZW1vIiwiaWQiLCJuYW1lIiwiY2F0ZWdvcnlTbHVnIiwidW5kZWZpbmVkIiwidGFiIiwic2hvcEFwaSIsImdldFBvcHVsYXJQcm9kdWN0cyIsImxpbWl0IiwiY2F0ZWdvcnkiLCJiZXN0c2VsbGVycyIsInVzZURlZmVycmVkRGF0YSIsImxhdGVzdFByb2R1Y3RzIiwiZ2V0TGF0ZXN0UHJvZHVjdHMiLCJjb2x1bW5zIiwicHJvZHVjdENvbHVtbnMiLCJ1c2VQcm9kdWN0Q29sdW1ucyIsInRpdGxlIiwic291cmNlIiwiZ2V0VG9wUmF0ZWRQcm9kdWN0cyIsImdldERpc2NvdW50ZWRQcm9kdWN0cyIsInRoZW1lIiwiZGF0YSIsImlzTG9hZGluZyIsInRhYnMiLCJoYW5kbGVUYWJDaGFuZ2UiLCJzbGljZSIsImRhdGFTaG9wQmxvY2tDYXRlZ29yaWVzIiwiZGF0YUJsb2dQb3N0cyIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTtBQUVBLElBQU1BLGFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVKQTtBQUFBLGtEQUFNTCxjQUF3QixHQUFHLENBQzdCO0FBQ0l1QyxNQUFJLEVBQUUsTUFEVjtBQUVJM0IsTUFBSSxFQUFFLE1BRlY7QUFHSVIsT0FBSyxFQUFFO0FBSFgsQ0FENkIsRUFNN0I7QUFDSW1DLE1BQUksRUFBRSxPQURWO0FBRUkzQixNQUFJLEVBQUUsT0FGVjtBQUdJUixPQUFLLEVBQUU7QUFIWCxDQU42QixFQVc3QjtBQUNJbUMsTUFBSSxFQUFFLE1BRFY7QUFFSTNCLE1BQUksRUFBRSxNQUZWO0FBR0lSLE9BQUssRUFBRTtBQUhYLENBWDZCLEVBZ0I3QjtBQUNJbUMsTUFBSSxFQUFFLFFBRFY7QUFFSTNCLE1BQUksRUFBRSxRQUZWO0FBR0lSLE9BQUssRUFBRTtBQUhYLENBaEI2QixFQXFCN0I7QUFDSW1DLE1BQUksRUFBRSxTQURWO0FBRUkzQixNQUFJLEVBQUUsU0FGVjtBQUdJUixPQUFLLEVBQUU7QUFIWCxDQXJCNkIsRUEwQjdCO0FBQ0ltQyxNQUFJLEVBQUUsT0FEVjtBQUVJM0IsTUFBSSxFQUFFLE9BRlY7QUFHSVIsT0FBSyxFQUFFO0FBSFgsQ0ExQjZCLENBQWpDO0FBaUNlSiw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZDgxM2U2ODkwNjk4OTYwNWZkOGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlYWN0XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBhcHBsaWNhdGlvblxuaW1wb3J0IEFwcExpbmsgZnJvbSAnLi4vc2hhcmVkL0FwcExpbmsnO1xuaW1wb3J0IFN0cm95a2FTbGljayBmcm9tICcuLi9zaGFyZWQvU3Ryb3lrYVNsaWNrJztcblxuLy8gZGF0YSBzdHVic1xuaW1wb3J0IGRhdGFTaG9wQnJhbmRzIGZyb20gJy4uLy4uL2RhdGEvc2hvcEJyYW5kcyc7XG5cbmNvbnN0IHNsaWNrU2V0dGluZ3MgPSB7XG4gICAgZG90czogZmFsc2UsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNDAwLFxuICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICBzbGlkZXNUb1Njcm9sbDogNSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTksXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA1NzUsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2NrQnJhbmRzKCkge1xuICAgIGNvbnN0IGJyYW5kc0xpc3QgPSBkYXRhU2hvcEJyYW5kcy5tYXAoKGJyYW5kLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJsb2NrLWJyYW5kc19faXRlbVwiPlxuICAgICAgICAgICAgPEFwcExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YnJhbmQuaW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L0FwcExpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBibG9jay1icmFuZHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1icmFuZHNfX3NsaWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8U3Ryb3lrYVNsaWNrIHsuLi5zbGlja1NldHRpbmdzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHticmFuZHNMaXN0fVxuICAgICAgICAgICAgICAgICAgICA8L1N0cm95a2FTbGljaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiLy8gcmVhY3RcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyB0aGlyZC1wYXJ0eVxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuLy8gYXBwbGljYXRpb25cclxuaW1wb3J0IHNob3BBcGkgZnJvbSAnLi4vLi4vYXBpL3Nob3AnO1xyXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcHJvZHVjdCc7XHJcbmltcG9ydCB7IHVzZURlZmVycmVkRGF0YSwgdXNlUHJvZHVjdENvbHVtbnMsIHVzZVByb2R1Y3RUYWJzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaG9va3MnO1xyXG5cclxuLy8gYmxvY2tzXHJcbmltcG9ydCBCbG9ja0Jhbm5lciBmcm9tICcuLi9ibG9ja3MvQmxvY2tCYW5uZXInO1xyXG5pbXBvcnQgQmxvY2tCcmFuZHMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrQnJhbmRzJztcclxuaW1wb3J0IEJsb2NrQ2F0ZWdvcmllcyBmcm9tICcuLi9ibG9ja3MvQmxvY2tDYXRlZ29yaWVzJztcclxuaW1wb3J0IEJsb2NrRmVhdHVyZXMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrRmVhdHVyZXMnO1xyXG5pbXBvcnQgQmxvY2tQb3N0cyBmcm9tICcuLi9ibG9ja3MvQmxvY2tQb3N0cyc7XHJcbmltcG9ydCBCbG9ja1Byb2R1Y3RDb2x1bW5zLCB7IEJsb2NrUHJvZHVjdENvbHVtbnNJdGVtIH0gZnJvbSAnLi4vYmxvY2tzL0Jsb2NrUHJvZHVjdENvbHVtbnMnO1xyXG5pbXBvcnQgQmxvY2tQcm9kdWN0cyBmcm9tICcuLi9ibG9ja3MvQmxvY2tQcm9kdWN0cyc7XHJcbmltcG9ydCBCbG9ja1Byb2R1Y3RzQ2Fyb3VzZWwgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrUHJvZHVjdHNDYXJvdXNlbCc7XHJcbmltcG9ydCBCbG9ja1NsaWRlU2hvdyBmcm9tICcuLi9ibG9ja3MvQmxvY2tTbGlkZVNob3cnO1xyXG5cclxuLy8gZGF0YSBzdHVic1xyXG5pbXBvcnQgZGF0YUJsb2dQb3N0cyBmcm9tICcuLi8uLi9kYXRhL2Jsb2dQb3N0cyc7XHJcbmltcG9ydCBkYXRhU2hvcEJsb2NrQ2F0ZWdvcmllcyBmcm9tICcuLi8uLi9kYXRhL3Nob3BCbG9ja0NhdGVnb3JpZXMnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vZGF0YS90aGVtZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXRhIHtcclxuICAgIGZlYXR1cmVkUHJvZHVjdHM/OiBJUHJvZHVjdFtdO1xyXG4gICAgYmVzdHNlbGxlcnM/OiBJUHJvZHVjdFtdO1xyXG4gICAgbGF0ZXN0UHJvZHVjdHM/OiBJUHJvZHVjdFtdO1xyXG4gICAgcHJvZHVjdENvbHVtbnM/OiBCbG9ja1Byb2R1Y3RDb2x1bW5zSXRlbVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhvbWVQYWdlUHJvcHMge1xyXG4gICAgaW5pdERhdGE/OiBJbml0RGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHM6IEhvbWVQYWdlUHJvcHMpIHtcclxuICAgIGNvbnN0IHsgaW5pdERhdGEgfSA9IHByb3BzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmVhdHVyZWQgcHJvZHVjdHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGZlYXR1cmVkUHJvZHVjdHMgPSB1c2VQcm9kdWN0VGFicyhcclxuICAgICAgICB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICAgICAgeyBpZDogMSwgbmFtZTogJ0FsbCcsIGNhdGVnb3J5U2x1ZzogdW5kZWZpbmVkIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDIsIG5hbWU6ICdQb3dlciBUb29scycsIGNhdGVnb3J5U2x1ZzogJ3Bvd2VyLXRvb2xzJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAzLCBuYW1lOiAnSGFuZCBUb29scycsIGNhdGVnb3J5U2x1ZzogJ2hhbmQtdG9vbHMnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDQsIG5hbWU6ICdQbHVtYmluZycsIGNhdGVnb3J5U2x1ZzogJ3BsdW1iaW5nJyB9LFxyXG4gICAgICAgIF0sIFtdKSxcclxuICAgICAgICAodGFiKSA9PiBzaG9wQXBpLmdldFBvcHVsYXJQcm9kdWN0cyh7IGxpbWl0OiAxMiwgY2F0ZWdvcnk6IHRhYi5jYXRlZ29yeVNsdWcgfSksXHJcbiAgICAgICAgaW5pdERhdGE/LmZlYXR1cmVkUHJvZHVjdHMsXHJcbiAgICApO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmVzdHNlbGxlcnMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGJlc3RzZWxsZXJzID0gdXNlRGVmZXJyZWREYXRhKCgpID0+IChcclxuICAgICAgICBzaG9wQXBpLmdldFBvcHVsYXJQcm9kdWN0cyh7IGxpbWl0OiA3IH0pXHJcbiAgICApLCBbXSwgaW5pdERhdGE/LmJlc3RzZWxsZXJzKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIExhdGVzdCBwcm9kdWN0cy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgbGF0ZXN0UHJvZHVjdHMgPSB1c2VQcm9kdWN0VGFicyhcclxuICAgICAgICB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICAgICAgeyBpZDogMSwgbmFtZTogJ0FsbCcsIGNhdGVnb3J5U2x1ZzogdW5kZWZpbmVkIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDIsIG5hbWU6ICdQb3dlciBUb29scycsIGNhdGVnb3J5U2x1ZzogJ3Bvd2VyLXRvb2xzJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAzLCBuYW1lOiAnSGFuZCBUb29scycsIGNhdGVnb3J5U2x1ZzogJ2hhbmQtdG9vbHMnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDQsIG5hbWU6ICdQbHVtYmluZycsIGNhdGVnb3J5U2x1ZzogJ3BsdW1iaW5nJyB9LFxyXG4gICAgICAgIF0sIFtdKSxcclxuICAgICAgICAodGFiKSA9PiBzaG9wQXBpLmdldExhdGVzdFByb2R1Y3RzKHsgbGltaXQ6IDgsIGNhdGVnb3J5OiB0YWIuY2F0ZWdvcnlTbHVnIH0pLFxyXG4gICAgICAgIGluaXREYXRhPy5sYXRlc3RQcm9kdWN0cyxcclxuICAgICk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9kdWN0IGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNvbHVtbnMgPSBpbml0RGF0YT8ucHJvZHVjdENvbHVtbnMgfHwgdXNlUHJvZHVjdENvbHVtbnMoXHJcbiAgICAgICAgdXNlTWVtbygoKSA9PiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVG9wIFJhdGVkIFByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogKCkgPT4gc2hvcEFwaS5nZXRUb3BSYXRlZFByb2R1Y3RzKHsgbGltaXQ6IDMgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3BlY2lhbCBPZmZlcnMnLFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiAoKSA9PiBzaG9wQXBpLmdldERpc2NvdW50ZWRQcm9kdWN0cyh7IGxpbWl0OiAzIH0pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Jlc3RzZWxsZXJzJyxcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogKCkgPT4gc2hvcEFwaS5nZXRQb3B1bGFyUHJvZHVjdHMoeyBsaW1pdDogMyB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLCBbXSksXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57YEhvbWUgUGFnZSBUd28g4oCUICR7dGhlbWUubmFtZX1gfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IDxCbG9ja1NsaWRlU2hvdyAvPiwgW10pfVxyXG5cclxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gPEJsb2NrQnJhbmRzIC8+LCBbXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiA8QmxvY2tGZWF0dXJlcyBsYXlvdXQ9XCJib3hlZFwiIC8+LCBbXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8QmxvY2tQcm9kdWN0c0Nhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGZWF0dXJlZCBQcm9kdWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZ3JpZC01XCJcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtmZWF0dXJlZFByb2R1Y3RzLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17ZmVhdHVyZWRQcm9kdWN0cy5pc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzPXtmZWF0dXJlZFByb2R1Y3RzLnRhYnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Hcm91cENsaWNrPXtmZWF0dXJlZFByb2R1Y3RzLmhhbmRsZVRhYkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICksIFtmZWF0dXJlZFByb2R1Y3RzXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiA8QmxvY2tCYW5uZXIgLz4sIFtdKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCbG9ja1Byb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCZXN0c2VsbGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwibGFyZ2UtbGFzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZWRQcm9kdWN0PXtiZXN0c2VsbGVycy5kYXRhWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtiZXN0c2VsbGVycy5kYXRhLnNsaWNlKDEsIDcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSwgW2Jlc3RzZWxsZXJzLmRhdGFdKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCbG9ja0NhdGVnb3JpZXNcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBvcHVsYXIgQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiY29tcGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17ZGF0YVNob3BCbG9ja0NhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApLCBbXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8QmxvY2tQcm9kdWN0c0Nhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOZXcgQXJyaXZhbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImdyaWQtNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM9e2xhdGVzdFByb2R1Y3RzLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bGF0ZXN0UHJvZHVjdHMuaXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGdyb3Vwcz17bGF0ZXN0UHJvZHVjdHMudGFic31cclxuICAgICAgICAgICAgICAgICAgICBvbkdyb3VwQ2xpY2s9e2xhdGVzdFByb2R1Y3RzLmhhbmRsZVRhYkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICksIFtsYXRlc3RQcm9kdWN0c10pfVxyXG5cclxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gPEJsb2NrUG9zdHMgdGl0bGU9XCJMYXRlc3QgTmV3c1wiIGxheW91dD1cImdyaWQtbmxcIiBwb3N0cz17ZGF0YUJsb2dQb3N0c30gLz4sIFtdKX1cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiIsImltcG9ydCB7IElCcmFuZCB9IGZyb20gJy4uL2ludGVyZmFjZXMvYnJhbmQnO1xuXG5jb25zdCBkYXRhU2hvcEJyYW5kczogSUJyYW5kW10gPSBbXG4gICAge1xuICAgICAgICBzbHVnOiAnZGlhYicsXG4gICAgICAgIG5hbWU6ICdEaWFiJyxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3N1cHBsaWVycy9kaWFiLmpwZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNsdWc6ICdmaXJzdCcsXG4gICAgICAgIG5hbWU6ICdGaXJzdCcsXG4gICAgICAgIGltYWdlOiAnL2ltYWdlcy9zdXBwbGllcnMvZmlyc3QuanBnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2x1ZzogJ25vcmQnLFxuICAgICAgICBuYW1lOiAnbm9yZCcsXG4gICAgICAgIGltYWdlOiAnL2ltYWdlcy9zdXBwbGllcnMvbm9yZC5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzbHVnOiAnc29sdmF5JyxcbiAgICAgICAgbmFtZTogJ3NvbHZheScsXG4gICAgICAgIGltYWdlOiAnL2ltYWdlcy9zdXBwbGllcnMvc29sdmF5LmpwZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNsdWc6ICd0ZXhvbmljJyxcbiAgICAgICAgbmFtZTogJ3RleG9uaWMnLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvc3VwcGxpZXJzL3RleG9uaWMuanBnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2x1ZzogJ2p1c2hpJyxcbiAgICAgICAgbmFtZTogJ2p1c2hpJyxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3N1cHBsaWVycy9qdXNoaS5qcGcnLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhU2hvcEJyYW5kcztcbiJdLCJzb3VyY2VSb290IjoiIn0=