webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/blocks/BlockCategories.tsx":
/*!***************************************************!*\
  !*** ./src/components/blocks/BlockCategories.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_AppLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/AppLink */ "./src/components/shared/AppLink.tsx");
/* harmony import */ var _shared_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/BlockHeader */ "./src/components/shared/BlockHeader.tsx");
/* harmony import */ var _services_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/url */ "./src/services/url.ts");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\blocks\\BlockCategories.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // application





function BlockCategories(props) {
  var _this = this;

  var title = props.title,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? 'classic' : _props$layout,
      _props$categories = props.categories,
      categories = _props$categories === void 0 ? [] : _props$categories;
  var categoriesList = categories.map(function (category, index) {
    var classes = "block-categories__item category-card category-card--layout--".concat(layout);
    var children = category.children;
    var subcategories = children && children.map(function (sub, subIndex) {
      return __jsx("li", {
        key: subIndex,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: _services_url__WEBPACK_IMPORTED_MODULE_3__["default"].category(sub),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }, sub.name));
    });
    return __jsx("div", {
      key: index,
      className: classes,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: " category-card__body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: " category-card__image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: _services_url__WEBPACK_IMPORTED_MODULE_3__["default"].category(category),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: category.image,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: " category-card__content",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: " category-card__name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }
    }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: _services_url__WEBPACK_IMPORTED_MODULE_3__["default"].category(category),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 29
      }
    }, category.name)), __jsx("ul", {
      className: "category-card__links",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }, subcategories), __jsx("div", {
      className: "category-card__all",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: _services_url__WEBPACK_IMPORTED_MODULE_3__["default"].category(category),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 29
      }
    }, "Show All")), __jsx("div", {
      className: "category-card__products",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, "".concat(category.items, " Products")))));
  });
  return __jsx("div", {
    className: "block block--highlighted block-categories block-categories--layout--".concat(layout),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(_shared_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "block-categories__list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, categoriesList)));
}

_c = BlockCategories;
/* harmony default export */ __webpack_exports__["default"] = (BlockCategories);

var _c;

$RefreshReg$(_c, "BlockCategories");

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
/* harmony import */ var _blocks_BlockPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/BlockPosts */ "./src/components/blocks/BlockPosts.tsx");
/* harmony import */ var _blocks_BlockProducts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blocks/BlockProducts */ "./src/components/blocks/BlockProducts.tsx");
/* harmony import */ var _blocks_BlockProductsCarousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blocks/BlockProductsCarousel */ "./src/components/blocks/BlockProductsCarousel.tsx");
/* harmony import */ var _blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../blocks/BlockSlideShow */ "./src/components/blocks/BlockSlideShow.tsx");
/* harmony import */ var _data_blogPosts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../data/blogPosts */ "./src/data/blogPosts.ts");
/* harmony import */ var _data_shopBlockCategories__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data/shopBlockCategories */ "./src/data/shopBlockCategories.ts");
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/theme */ "./src/data/theme.ts");
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
  }, "Home Page Two \u2014 ".concat(_data_theme__WEBPACK_IMPORTED_MODULE_13__["default"].name))), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
    return __jsx(_blocks_BlockCategories__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Popular Categories",
      layout: "compact",
      categories: _data_shopBlockCategories__WEBPACK_IMPORTED_MODULE_12__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockProductsCarousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
        lineNumber: 116,
        columnNumber: 17
      }
    });
  }, [featuredProducts]), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 28
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockProducts__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: "Bestsellers",
      layout: "large-last",
      featuredProduct: bestsellers.data[0],
      products: bestsellers.data.slice(1, 7),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    });
  }, [bestsellers.data]), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockPosts__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Latest News",
      layout: "grid-nl",
      posts: _data_blogPosts__WEBPACK_IMPORTED_MODULE_11__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 28
      }
    });
  }, []));
}

_s(HomePage, "w99dvl7FdnHY79lIbYY3SoXgVCY=", false, function () {
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

/***/ "./src/data/shopBlockCategories.ts":
/*!*****************************************!*\
  !*** ./src/data/shopBlockCategories.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var dataShopBlockCategories = [{
  type: 'shop',
  id: 1,
  slug: 'power-tools',
  name: 'Power Tools',
  items: 572,
  image: '/images/categories/category-1.jpg',
  customFields: {},
  children: [{
    type: 'shop',
    id: 2,
    slug: 'power-tools',
    name: 'Screwdrivers',
    customFields: {}
  }, {
    type: 'shop',
    id: 3,
    slug: 'power-tools',
    name: 'Milling Cutters',
    customFields: {}
  }, {
    type: 'shop',
    id: 4,
    slug: 'power-tools',
    name: 'Sanding Machines',
    customFields: {}
  }, {
    type: 'shop',
    id: 5,
    slug: 'power-tools',
    name: 'Wrenches',
    customFields: {}
  }, {
    type: 'shop',
    id: 6,
    slug: 'power-tools',
    name: 'Drills',
    customFields: {}
  }]
}, {
  type: 'shop',
  id: 7,
  slug: 'power-tools',
  name: 'Hand Tools',
  items: 134,
  image: '/images/categories/category-2.jpg',
  customFields: {},
  children: [{
    type: 'shop',
    id: 8,
    slug: 'power-tools',
    name: 'Screwdrivers',
    customFields: {}
  }, {
    type: 'shop',
    id: 9,
    slug: 'power-tools',
    name: 'Hammers',
    customFields: {}
  }, {
    type: 'shop',
    id: 10,
    slug: 'power-tools',
    name: 'Spanners',
    customFields: {}
  }, {
    type: 'shop',
    id: 11,
    slug: 'power-tools',
    name: 'Handsaws',
    customFields: {}
  }, {
    type: 'shop',
    id: 12,
    slug: 'power-tools',
    name: 'Paint Tools',
    customFields: {}
  }]
}, {
  type: 'shop',
  id: 13,
  slug: 'power-tools',
  name: 'Machine Tools',
  items: 301,
  image: '/images/categories/category-4.jpg',
  customFields: {},
  children: [{
    type: 'shop',
    id: 14,
    slug: 'power-tools',
    name: 'Lathes',
    customFields: {}
  }, {
    type: 'shop',
    id: 15,
    slug: 'power-tools',
    name: 'Milling Machines',
    customFields: {}
  }, {
    type: 'shop',
    id: 16,
    slug: 'power-tools',
    name: 'Grinding Machines',
    customFields: {}
  }, {
    type: 'shop',
    id: 17,
    slug: 'power-tools',
    name: 'CNC Machines',
    customFields: {}
  }, {
    type: 'shop',
    id: 18,
    slug: 'power-tools',
    name: 'Sharpening Machines',
    customFields: {}
  }]
}, {
  type: 'shop',
  id: 19,
  slug: 'power-tools',
  name: 'Power Machinery',
  items: 79,
  image: '/images/categories/category-3.jpg',
  customFields: {},
  children: [{
    type: 'shop',
    id: 20,
    slug: 'power-tools',
    name: 'Generators',
    customFields: {}
  }, {
    type: 'shop',
    id: 21,
    slug: 'power-tools',
    name: 'Compressors',
    customFields: {}
  }, {
    type: 'shop',
    id: 22,
    slug: 'power-tools',
    name: 'Winches',
    customFields: {}
  }, {
    type: 'shop',
    id: 23,
    slug: 'power-tools',
    name: 'Plasma Cutting',
    customFields: {}
  }, {
    type: 'shop',
    id: 24,
    slug: 'power-tools',
    name: 'Electric Motors',
    customFields: {}
  }]
}, {
  type: 'shop',
  id: 25,
  slug: 'power-tools',
  name: 'Measurement',
  items: 366,
  image: '/images/categories/category-5.jpg',
  customFields: {},
  children: [{
    type: 'shop',
    id: 26,
    slug: 'power-tools',
    name: 'Tape Measure',
    customFields: {}
  }, {
    type: 'shop',
    id: 27,
    slug: 'power-tools',
    name: 'Theodolites',
    customFields: {}
  }, {
    type: 'shop',
    id: 28,
    slug: 'power-tools',
    name: 'Thermal Imagers',
    customFields: {}
  }, {
    type: 'shop',
    id: 29,
    slug: 'power-tools',
    name: 'Calipers',
    customFields: {}
  }, {
    type: 'shop',
    id: 30,
    slug: 'power-tools',
    name: 'Levels',
    customFields: {}
  }]
}, {
  type: 'shop',
  id: 31,
  slug: 'power-tools',
  name: 'Clothes and PPE',
  items: 81,
  image: '/images/categories/category-6.jpg',
  customFields: {},
  children: [{
    type: 'shop',
    id: 26,
    slug: 'power-tools',
    name: 'Winter Workwear',
    customFields: {}
  }, {
    type: 'shop',
    id: 27,
    slug: 'power-tools',
    name: 'Summer Workwear',
    customFields: {}
  }, {
    type: 'shop',
    id: 28,
    slug: 'power-tools',
    name: 'Helmets',
    customFields: {}
  }, {
    type: 'shop',
    id: 29,
    slug: 'power-tools',
    name: 'Belts and Bags',
    customFields: {}
  }, {
    type: 'shop',
    id: 30,
    slug: 'power-tools',
    name: 'Work Shoes',
    customFields: {}
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (dataShopBlockCategories);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9ja3MvQmxvY2tDYXRlZ29yaWVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0hvbWVQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9zaG9wQmxvY2tDYXRlZ29yaWVzLnRzIl0sIm5hbWVzIjpbIkJsb2NrQ2F0ZWdvcmllcyIsInByb3BzIiwidGl0bGUiLCJsYXlvdXQiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcmllc0xpc3QiLCJtYXAiLCJjYXRlZ29yeSIsImluZGV4IiwiY2xhc3NlcyIsImNoaWxkcmVuIiwic3ViY2F0ZWdvcmllcyIsInN1YiIsInN1YkluZGV4IiwidXJsIiwibmFtZSIsImltYWdlIiwiaXRlbXMiLCJIb21lUGFnZSIsImluaXREYXRhIiwiZmVhdHVyZWRQcm9kdWN0cyIsInVzZVByb2R1Y3RUYWJzIiwidXNlTWVtbyIsImlkIiwiY2F0ZWdvcnlTbHVnIiwidW5kZWZpbmVkIiwidGFiIiwic2hvcEFwaSIsImdldFBvcHVsYXJQcm9kdWN0cyIsImxpbWl0IiwiYmVzdHNlbGxlcnMiLCJ1c2VEZWZlcnJlZERhdGEiLCJsYXRlc3RQcm9kdWN0cyIsImdldExhdGVzdFByb2R1Y3RzIiwiY29sdW1ucyIsInByb2R1Y3RDb2x1bW5zIiwidXNlUHJvZHVjdENvbHVtbnMiLCJzb3VyY2UiLCJnZXRUb3BSYXRlZFByb2R1Y3RzIiwiZ2V0RGlzY291bnRlZFByb2R1Y3RzIiwidGhlbWUiLCJkYXRhU2hvcEJsb2NrQ2F0ZWdvcmllcyIsImRhdGEiLCJpc0xvYWRpbmciLCJ0YWJzIiwiaGFuZGxlVGFiQ2hhbmdlIiwic2xpY2UiLCJkYXRhQmxvZ1Bvc3RzIiwidHlwZSIsInNsdWciLCJjdXN0b21GaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBOztBQVdBLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQXpC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LE1BQUksRUFBRSxhQUhWO0FBSUlsQyxNQUFJLEVBQUUsaUJBSlY7QUFLSUUsT0FBSyxFQUFFLEVBTFg7QUFNSUQsT0FBSyxFQUFFLG1DQU5YO0FBT0lrQyxjQUFZLEVBQUUsRUFQbEI7QUFRSXhDLFVBQVEsRUFBRSxDQUNOO0FBQ0lzQyxRQUFJLEVBQUUsTUFEVjtBQUVJekIsTUFBRSxFQUFFLEVBRlI7QUFHSTBCLFFBQUksRUFBRSxhQUhWO0FBSUlsQyxRQUFJLEVBQUUsaUJBSlY7QUFLSW1DLGdCQUFZLEVBQUU7QUFMbEIsR0FETSxFQVFOO0FBQ0lGLFFBQUksRUFBRSxNQURWO0FBRUl6QixNQUFFLEVBQUUsRUFGUjtBQUdJMEIsUUFBSSxFQUFFLGFBSFY7QUFJSWxDLFFBQUksRUFBRSxpQkFKVjtBQUtJbUMsZ0JBQVksRUFBRTtBQUxsQixHQVJNLEVBZU47QUFDSUYsUUFBSSxFQUFFLE1BRFY7QUFFSXpCLE1BQUUsRUFBRSxFQUZSO0FBR0kwQixRQUFJLEVBQUUsYUFIVjtBQUlJbEMsUUFBSSxFQUFFLFNBSlY7QUFLSW1DLGdCQUFZLEVBQUU7QUFMbEIsR0FmTSxFQXNCTjtBQUNJRixRQUFJLEVBQUUsTUFEVjtBQUVJekIsTUFBRSxFQUFFLEVBRlI7QUFHSTBCLFFBQUksRUFBRSxhQUhWO0FBSUlsQyxRQUFJLEVBQUUsZ0JBSlY7QUFLSW1DLGdCQUFZLEVBQUU7QUFMbEIsR0F0Qk0sRUE2Qk47QUFDSUYsUUFBSSxFQUFFLE1BRFY7QUFFSXpCLE1BQUUsRUFBRSxFQUZSO0FBR0kwQixRQUFJLEVBQUUsYUFIVjtBQUlJbEMsUUFBSSxFQUFFLFlBSlY7QUFLSW1DLGdCQUFZLEVBQUU7QUFMbEIsR0E3Qk07QUFSZCxDQXZPNkMsQ0FBakQ7QUF1UmVULHNGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iNmUzYmI3YWRjZmVkYzMxYzgzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVhY3RcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgQXBwTGluayBmcm9tICcuLi9zaGFyZWQvQXBwTGluayc7XG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAnLi4vc2hhcmVkL0Jsb2NrSGVhZGVyJztcbmltcG9ydCB1cmwgZnJvbSAnLi4vLi4vc2VydmljZXMvdXJsJztcbmltcG9ydCB7IElDYXRlZ29yeSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvY2F0ZWdvcnknO1xuXG5leHBvcnQgdHlwZSBCbG9ja0NhdGVnb3JpZXNMYXlvdXQgPSAnY2xhc3NpYycgfCAnY29tcGFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tDYXRlZ29yaWVzUHJvcHMge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgY2F0ZWdvcmllcz86IElDYXRlZ29yeVtdO1xuICAgIGxheW91dD86IEJsb2NrQ2F0ZWdvcmllc0xheW91dDtcbn1cblxuZnVuY3Rpb24gQmxvY2tDYXRlZ29yaWVzKHByb3BzOiBCbG9ja0NhdGVnb3JpZXNQcm9wcykge1xuICAgIGNvbnN0IHsgdGl0bGUsIGxheW91dCA9ICdjbGFzc2ljJywgY2F0ZWdvcmllcyA9IFtdIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IGNhdGVnb3JpZXNMaXN0ID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gYGJsb2NrLWNhdGVnb3JpZXNfX2l0ZW0gY2F0ZWdvcnktY2FyZCBjYXRlZ29yeS1jYXJkLS1sYXlvdXQtLSR7bGF5b3V0fWA7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbj86IElDYXRlZ29yeVtdIH0gPSBjYXRlZ29yeTtcblxuICAgICAgICBjb25zdCBzdWJjYXRlZ29yaWVzID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubWFwKChzdWIsIHN1YkluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtzdWJJbmRleH0+XG4gICAgICAgICAgICAgICAgPEFwcExpbmsgaHJlZj17dXJsLmNhdGVnb3J5KHN1Yil9PntzdWIubmFtZX08L0FwcExpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhdGVnb3J5LWNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY2F0ZWdvcnktY2FyZF9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9e3VybC5jYXRlZ29yeShjYXRlZ29yeSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjYXRlZ29yeS5pbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXBwTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhdGVnb3J5LWNhcmRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhdGVnb3J5LWNhcmRfX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXBwTGluayBocmVmPXt1cmwuY2F0ZWdvcnkoY2F0ZWdvcnkpfT57Y2F0ZWdvcnkubmFtZX08L0FwcExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXRlZ29yeS1jYXJkX19saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJjYXRlZ29yaWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktY2FyZF9fYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFwcExpbmsgaHJlZj17dXJsLmNhdGVnb3J5KGNhdGVnb3J5KX0+U2hvdyBBbGw8L0FwcExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktY2FyZF9fcHJvZHVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7Y2F0ZWdvcnkuaXRlbXN9IFByb2R1Y3RzYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BibG9jayBibG9jay0taGlnaGxpZ2h0ZWQgYmxvY2stY2F0ZWdvcmllcyBibG9jay1jYXRlZ29yaWVzLS1sYXlvdXQtLSR7bGF5b3V0fWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8QmxvY2tIZWFkZXIgdGl0bGU9e3RpdGxlfSAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jYXRlZ29yaWVzX19saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzTGlzdH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0NhdGVnb3JpZXM7XG4iLCIvLyByZWFjdFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIHRoaXJkLXBhcnR5XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG4vLyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgc2hvcEFwaSBmcm9tICcuLi8uLi9hcGkvc2hvcCc7XHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wcm9kdWN0JztcclxuaW1wb3J0IHsgdXNlRGVmZXJyZWREYXRhLCB1c2VQcm9kdWN0Q29sdW1ucywgdXNlUHJvZHVjdFRhYnMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ob29rcyc7XHJcblxyXG4vLyBibG9ja3NcclxuaW1wb3J0IEJsb2NrQmFubmVyIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja0Jhbm5lcic7XHJcbmltcG9ydCBCbG9ja0JyYW5kcyBmcm9tICcuLi9ibG9ja3MvQmxvY2tCcmFuZHMnO1xyXG5pbXBvcnQgQmxvY2tDYXRlZ29yaWVzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja0NhdGVnb3JpZXMnO1xyXG5pbXBvcnQgQmxvY2tGZWF0dXJlcyBmcm9tICcuLi9ibG9ja3MvQmxvY2tGZWF0dXJlcyc7XHJcbmltcG9ydCBCbG9ja1Bvc3RzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1Bvc3RzJztcclxuaW1wb3J0IEJsb2NrUHJvZHVjdENvbHVtbnMsIHsgQmxvY2tQcm9kdWN0Q29sdW1uc0l0ZW0gfSBmcm9tICcuLi9ibG9ja3MvQmxvY2tQcm9kdWN0Q29sdW1ucyc7XHJcbmltcG9ydCBCbG9ja1Byb2R1Y3RzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1Byb2R1Y3RzJztcclxuaW1wb3J0IEJsb2NrUHJvZHVjdHNDYXJvdXNlbCBmcm9tICcuLi9ibG9ja3MvQmxvY2tQcm9kdWN0c0Nhcm91c2VsJztcclxuaW1wb3J0IEJsb2NrU2xpZGVTaG93IGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1NsaWRlU2hvdyc7XHJcblxyXG4vLyBkYXRhIHN0dWJzXHJcbmltcG9ydCBkYXRhQmxvZ1Bvc3RzIGZyb20gJy4uLy4uL2RhdGEvYmxvZ1Bvc3RzJztcclxuaW1wb3J0IGRhdGFTaG9wQmxvY2tDYXRlZ29yaWVzIGZyb20gJy4uLy4uL2RhdGEvc2hvcEJsb2NrQ2F0ZWdvcmllcyc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi9kYXRhL3RoZW1lJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5pdERhdGEge1xyXG4gICAgZmVhdHVyZWRQcm9kdWN0cz86IElQcm9kdWN0W107XHJcbiAgICBiZXN0c2VsbGVycz86IElQcm9kdWN0W107XHJcbiAgICBsYXRlc3RQcm9kdWN0cz86IElQcm9kdWN0W107XHJcbiAgICBwcm9kdWN0Q29sdW1ucz86IEJsb2NrUHJvZHVjdENvbHVtbnNJdGVtW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSG9tZVBhZ2VQcm9wcyB7XHJcbiAgICBpbml0RGF0YT86IEluaXREYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wczogSG9tZVBhZ2VQcm9wcykge1xyXG4gICAgY29uc3QgeyBpbml0RGF0YSB9ID0gcHJvcHM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGZWF0dXJlZCBwcm9kdWN0cy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgZmVhdHVyZWRQcm9kdWN0cyA9IHVzZVByb2R1Y3RUYWJzKFxyXG4gICAgICAgIHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgICAgICB7IGlkOiAxLCBuYW1lOiAnQWxsJywgY2F0ZWdvcnlTbHVnOiB1bmRlZmluZWQgfSxcclxuICAgICAgICAgICAgeyBpZDogMiwgbmFtZTogJ1Bvd2VyIFRvb2xzJywgY2F0ZWdvcnlTbHVnOiAncG93ZXItdG9vbHMnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDMsIG5hbWU6ICdIYW5kIFRvb2xzJywgY2F0ZWdvcnlTbHVnOiAnaGFuZC10b29scycgfSxcclxuICAgICAgICAgICAgeyBpZDogNCwgbmFtZTogJ1BsdW1iaW5nJywgY2F0ZWdvcnlTbHVnOiAncGx1bWJpbmcnIH0sXHJcbiAgICAgICAgXSwgW10pLFxyXG4gICAgICAgICh0YWIpID0+IHNob3BBcGkuZ2V0UG9wdWxhclByb2R1Y3RzKHsgbGltaXQ6IDEyLCBjYXRlZ29yeTogdGFiLmNhdGVnb3J5U2x1ZyB9KSxcclxuICAgICAgICBpbml0RGF0YT8uZmVhdHVyZWRQcm9kdWN0cyxcclxuICAgICk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCZXN0c2VsbGVycy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgYmVzdHNlbGxlcnMgPSB1c2VEZWZlcnJlZERhdGEoKCkgPT4gKFxyXG4gICAgICAgIHNob3BBcGkuZ2V0UG9wdWxhclByb2R1Y3RzKHsgbGltaXQ6IDcgfSlcclxuICAgICksIFtdLCBpbml0RGF0YT8uYmVzdHNlbGxlcnMpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGF0ZXN0IHByb2R1Y3RzLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBsYXRlc3RQcm9kdWN0cyA9IHVzZVByb2R1Y3RUYWJzKFxyXG4gICAgICAgIHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgICAgICB7IGlkOiAxLCBuYW1lOiAnQWxsJywgY2F0ZWdvcnlTbHVnOiB1bmRlZmluZWQgfSxcclxuICAgICAgICAgICAgeyBpZDogMiwgbmFtZTogJ1Bvd2VyIFRvb2xzJywgY2F0ZWdvcnlTbHVnOiAncG93ZXItdG9vbHMnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDMsIG5hbWU6ICdIYW5kIFRvb2xzJywgY2F0ZWdvcnlTbHVnOiAnaGFuZC10b29scycgfSxcclxuICAgICAgICAgICAgeyBpZDogNCwgbmFtZTogJ1BsdW1iaW5nJywgY2F0ZWdvcnlTbHVnOiAncGx1bWJpbmcnIH0sXHJcbiAgICAgICAgXSwgW10pLFxyXG4gICAgICAgICh0YWIpID0+IHNob3BBcGkuZ2V0TGF0ZXN0UHJvZHVjdHMoeyBsaW1pdDogOCwgY2F0ZWdvcnk6IHRhYi5jYXRlZ29yeVNsdWcgfSksXHJcbiAgICAgICAgaW5pdERhdGE/LmxhdGVzdFByb2R1Y3RzLFxyXG4gICAgKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2R1Y3QgY29sdW1ucy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgY29sdW1ucyA9IGluaXREYXRhPy5wcm9kdWN0Q29sdW1ucyB8fCB1c2VQcm9kdWN0Q29sdW1ucyhcclxuICAgICAgICB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUb3AgUmF0ZWQgUHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiAoKSA9PiBzaG9wQXBpLmdldFRvcFJhdGVkUHJvZHVjdHMoeyBsaW1pdDogMyB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTcGVjaWFsIE9mZmVycycsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICgpID0+IHNob3BBcGkuZ2V0RGlzY291bnRlZFByb2R1Y3RzKHsgbGltaXQ6IDMgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQmVzdHNlbGxlcnMnLFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiAoKSA9PiBzaG9wQXBpLmdldFBvcHVsYXJQcm9kdWN0cyh7IGxpbWl0OiAzIH0pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sIFtdKSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntgSG9tZSBQYWdlIFR3byDigJQgJHt0aGVtZS5uYW1lfWB9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gPEJsb2NrU2xpZGVTaG93IC8+LCBbXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiA8QmxvY2tCcmFuZHMgLz4sIFtdKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCbG9ja0NhdGVnb3JpZXNcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBvcHVsYXIgQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiY29tcGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17ZGF0YVNob3BCbG9ja0NhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApLCBbXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8QmxvY2tQcm9kdWN0c0Nhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGZWF0dXJlZCBQcm9kdWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZ3JpZC01XCJcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtmZWF0dXJlZFByb2R1Y3RzLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17ZmVhdHVyZWRQcm9kdWN0cy5pc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzPXtmZWF0dXJlZFByb2R1Y3RzLnRhYnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Hcm91cENsaWNrPXtmZWF0dXJlZFByb2R1Y3RzLmhhbmRsZVRhYkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICksIFtmZWF0dXJlZFByb2R1Y3RzXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiA8QmxvY2tCYW5uZXIgLz4sIFtdKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCbG9ja1Byb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCZXN0c2VsbGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwibGFyZ2UtbGFzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZWRQcm9kdWN0PXtiZXN0c2VsbGVycy5kYXRhWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtiZXN0c2VsbGVycy5kYXRhLnNsaWNlKDEsIDcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSwgW2Jlc3RzZWxsZXJzLmRhdGFdKX1cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IDxCbG9ja1Bvc3RzIHRpdGxlPVwiTGF0ZXN0IE5ld3NcIiBsYXlvdXQ9XCJncmlkLW5sXCIgcG9zdHM9e2RhdGFCbG9nUG9zdHN9IC8+LCBbXSl9XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iLCJpbXBvcnQgeyBJU2hvcENhdGVnb3J5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jYXRlZ29yeSc7XG5cbmNvbnN0IGRhdGFTaG9wQmxvY2tDYXRlZ29yaWVzOiBJU2hvcENhdGVnb3J5W10gPSBbXG4gICAge1xuICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgIGlkOiAxLFxuICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICBuYW1lOiAnUG93ZXIgVG9vbHMnLFxuICAgICAgICBpdGVtczogNTcyLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yeS0xLmpwZycsXG4gICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NjcmV3ZHJpdmVycycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ01pbGxpbmcgQ3V0dGVycycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NhbmRpbmcgTWFjaGluZXMnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdXcmVuY2hlcycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RyaWxscycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgIG5hbWU6ICdIYW5kIFRvb2xzJyxcbiAgICAgICAgaXRlbXM6IDEzNCxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcnktMi5qcGcnLFxuICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdTY3Jld2RyaXZlcnMnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogOSxcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdIYW1tZXJzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDEwLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NwYW5uZXJzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDExLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0hhbmRzYXdzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDEyLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BhaW50IFRvb2xzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICBpZDogMTMsXG4gICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgIG5hbWU6ICdNYWNoaW5lIFRvb2xzJyxcbiAgICAgICAgaXRlbXM6IDMwMSxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcnktNC5qcGcnLFxuICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMTQsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnTGF0aGVzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDE1LFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ01pbGxpbmcgTWFjaGluZXMnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMTYsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnR3JpbmRpbmcgTWFjaGluZXMnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMTcsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ05DIE1hY2hpbmVzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDE4LFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NoYXJwZW5pbmcgTWFjaGluZXMnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgIGlkOiAxOSxcbiAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgbmFtZTogJ1Bvd2VyIE1hY2hpbmVyeScsXG4gICAgICAgIGl0ZW1zOiA3OSxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcnktMy5qcGcnLFxuICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMjAsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnR2VuZXJhdG9ycycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiAyMSxcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDb21wcmVzc29ycycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiAyMixcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdXaW5jaGVzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDIzLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BsYXNtYSBDdXR0aW5nJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDI0LFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cmljIE1vdG9ycycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgaWQ6IDI1LFxuICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICBuYW1lOiAnTWVhc3VyZW1lbnQnLFxuICAgICAgICBpdGVtczogMzY2LFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yeS01LmpwZycsXG4gICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiAyNixcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdUYXBlIE1lYXN1cmUnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMjcsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGhlb2RvbGl0ZXMnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMjgsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGhlcm1hbCBJbWFnZXJzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDI5LFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NhbGlwZXJzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDMwLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0xldmVscycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgaWQ6IDMxLFxuICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICBuYW1lOiAnQ2xvdGhlcyBhbmQgUFBFJyxcbiAgICAgICAgaXRlbXM6IDgxLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yeS02LmpwZycsXG4gICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiAyNixcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdXaW50ZXIgV29ya3dlYXInLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMjcsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU3VtbWVyIFdvcmt3ZWFyJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDI4LFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0hlbG1ldHMnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMjksXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnQmVsdHMgYW5kIEJhZ3MnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMzAsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnV29yayBTaG9lcycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFTaG9wQmxvY2tDYXRlZ29yaWVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==