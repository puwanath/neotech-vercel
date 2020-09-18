webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/blocks/BlockBrands.tsx":
false,

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
/* harmony import */ var _blocks_BlockCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/BlockCategories */ "./src/components/blocks/BlockCategories.tsx");
/* harmony import */ var _blocks_BlockFeatures__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/BlockFeatures */ "./src/components/blocks/BlockFeatures.tsx");
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
    return __jsx(_blocks_BlockFeatures__WEBPACK_IMPORTED_MODULE_6__["default"], {
      layout: "boxed",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 28
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
        lineNumber: 108,
        columnNumber: 17
      }
    });
  }, [featuredProducts]), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
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
        lineNumber: 122,
        columnNumber: 17
      }
    });
  }, [bestsellers.data]), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockCategories__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Popular Categories",
      layout: "compact",
      categories: _data_shopBlockCategories__WEBPACK_IMPORTED_MODULE_12__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockProductsCarousel__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: "New Arrivals",
      layout: "grid-5",
      products: latestProducts.data,
      loading: latestProducts.isLoading,
      groups: latestProducts.tabs,
      onGroupClick: latestProducts.handleTabChange,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }
    });
  }, [latestProducts]), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockPosts__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Latest News",
      layout: "grid-nl",
      posts: _data_blogPosts__WEBPACK_IMPORTED_MODULE_11__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 28
      }
    });
  }, []));
}

_s(HomePage, "ctwwXfKfKzrI8Xhc5Bw6jfZijkA=", false, function () {
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
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0hvbWVQYWdlLnRzeCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwiaW5pdERhdGEiLCJmZWF0dXJlZFByb2R1Y3RzIiwidXNlUHJvZHVjdFRhYnMiLCJ1c2VNZW1vIiwiaWQiLCJuYW1lIiwiY2F0ZWdvcnlTbHVnIiwidW5kZWZpbmVkIiwidGFiIiwic2hvcEFwaSIsImdldFBvcHVsYXJQcm9kdWN0cyIsImxpbWl0IiwiY2F0ZWdvcnkiLCJiZXN0c2VsbGVycyIsInVzZURlZmVycmVkRGF0YSIsImxhdGVzdFByb2R1Y3RzIiwiZ2V0TGF0ZXN0UHJvZHVjdHMiLCJjb2x1bW5zIiwicHJvZHVjdENvbHVtbnMiLCJ1c2VQcm9kdWN0Q29sdW1ucyIsInRpdGxlIiwic291cmNlIiwiZ2V0VG9wUmF0ZWRQcm9kdWN0cyIsImdldERpc2NvdW50ZWRQcm9kdWN0cyIsInRoZW1lIiwiZGF0YSIsImlzTG9hZGluZyIsInRhYnMiLCJoYW5kbGVUYWJDaGFuZ2UiLCJzbGljZSIsImRhdGFTaG9wQmxvY2tDYXRlZ29yaWVzIiwiZGF0YUJsb2dQb3N0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0NBR0E7O0FBQ0E7Q0FJQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7O0FBYUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBd0M7QUFBQTs7QUFBQTs7QUFBQSxNQUM1QkMsUUFENEIsR0FDZkQsS0FEZSxDQUM1QkMsUUFENEI7QUFHcEM7Ozs7QUFHQSxNQUFNQyxnQkFBZ0IsR0FBR0Msc0VBQWMsQ0FDbkNDLHFEQUFPLENBQUM7QUFBQSxXQUFNLENBQ1Y7QUFBRUMsUUFBRSxFQUFFLENBQU47QUFBU0MsVUFBSSxFQUFFLEtBQWY7QUFBc0JDLGtCQUFZLEVBQUVDO0FBQXBDLEtBRFUsRUFFVjtB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LGlFOzs7S0F6Q3ZDckIsUTtBQXNITUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjdhNzg3MGU4MmRlZDMwN2RlNGIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZWFjdFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIHRoaXJkLXBhcnR5XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG4vLyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgc2hvcEFwaSBmcm9tICcuLi8uLi9hcGkvc2hvcCc7XHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wcm9kdWN0JztcclxuaW1wb3J0IHsgdXNlRGVmZXJyZWREYXRhLCB1c2VQcm9kdWN0Q29sdW1ucywgdXNlUHJvZHVjdFRhYnMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ob29rcyc7XHJcblxyXG4vLyBibG9ja3NcclxuaW1wb3J0IEJsb2NrQmFubmVyIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja0Jhbm5lcic7XHJcbmltcG9ydCBCbG9ja0JyYW5kcyBmcm9tICcuLi9ibG9ja3MvQmxvY2tCcmFuZHMnO1xyXG5pbXBvcnQgQmxvY2tDYXRlZ29yaWVzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja0NhdGVnb3JpZXMnO1xyXG5pbXBvcnQgQmxvY2tGZWF0dXJlcyBmcm9tICcuLi9ibG9ja3MvQmxvY2tGZWF0dXJlcyc7XHJcbmltcG9ydCBCbG9ja1Bvc3RzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1Bvc3RzJztcclxuaW1wb3J0IEJsb2NrUHJvZHVjdENvbHVtbnMsIHsgQmxvY2tQcm9kdWN0Q29sdW1uc0l0ZW0gfSBmcm9tICcuLi9ibG9ja3MvQmxvY2tQcm9kdWN0Q29sdW1ucyc7XHJcbmltcG9ydCBCbG9ja1Byb2R1Y3RzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1Byb2R1Y3RzJztcclxuaW1wb3J0IEJsb2NrUHJvZHVjdHNDYXJvdXNlbCBmcm9tICcuLi9ibG9ja3MvQmxvY2tQcm9kdWN0c0Nhcm91c2VsJztcclxuaW1wb3J0IEJsb2NrU2xpZGVTaG93IGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1NsaWRlU2hvdyc7XHJcblxyXG4vLyBkYXRhIHN0dWJzXHJcbmltcG9ydCBkYXRhQmxvZ1Bvc3RzIGZyb20gJy4uLy4uL2RhdGEvYmxvZ1Bvc3RzJztcclxuaW1wb3J0IGRhdGFTaG9wQmxvY2tDYXRlZ29yaWVzIGZyb20gJy4uLy4uL2RhdGEvc2hvcEJsb2NrQ2F0ZWdvcmllcyc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi9kYXRhL3RoZW1lJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5pdERhdGEge1xyXG4gICAgZmVhdHVyZWRQcm9kdWN0cz86IElQcm9kdWN0W107XHJcbiAgICBiZXN0c2VsbGVycz86IElQcm9kdWN0W107XHJcbiAgICBsYXRlc3RQcm9kdWN0cz86IElQcm9kdWN0W107XHJcbiAgICBwcm9kdWN0Q29sdW1ucz86IEJsb2NrUHJvZHVjdENvbHVtbnNJdGVtW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSG9tZVBhZ2VQcm9wcyB7XHJcbiAgICBpbml0RGF0YT86IEluaXREYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wczogSG9tZVBhZ2VQcm9wcykge1xyXG4gICAgY29uc3QgeyBpbml0RGF0YSB9ID0gcHJvcHM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGZWF0dXJlZCBwcm9kdWN0cy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgZmVhdHVyZWRQcm9kdWN0cyA9IHVzZVByb2R1Y3RUYWJzKFxyXG4gICAgICAgIHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgICAgICB7IGlkOiAxLCBuYW1lOiAnQWxsJywgY2F0ZWdvcnlTbHVnOiB1bmRlZmluZWQgfSxcclxuICAgICAgICAgICAgeyBpZDogMiwgbmFtZTogJ1Bvd2VyIFRvb2xzJywgY2F0ZWdvcnlTbHVnOiAncG93ZXItdG9vbHMnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDMsIG5hbWU6ICdIYW5kIFRvb2xzJywgY2F0ZWdvcnlTbHVnOiAnaGFuZC10b29scycgfSxcclxuICAgICAgICAgICAgeyBpZDogNCwgbmFtZTogJ1BsdW1iaW5nJywgY2F0ZWdvcnlTbHVnOiAncGx1bWJpbmcnIH0sXHJcbiAgICAgICAgXSwgW10pLFxyXG4gICAgICAgICh0YWIpID0+IHNob3BBcGkuZ2V0UG9wdWxhclByb2R1Y3RzKHsgbGltaXQ6IDEyLCBjYXRlZ29yeTogdGFiLmNhdGVnb3J5U2x1ZyB9KSxcclxuICAgICAgICBpbml0RGF0YT8uZmVhdHVyZWRQcm9kdWN0cyxcclxuICAgICk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCZXN0c2VsbGVycy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgYmVzdHNlbGxlcnMgPSB1c2VEZWZlcnJlZERhdGEoKCkgPT4gKFxyXG4gICAgICAgIHNob3BBcGkuZ2V0UG9wdWxhclByb2R1Y3RzKHsgbGltaXQ6IDcgfSlcclxuICAgICksIFtdLCBpbml0RGF0YT8uYmVzdHNlbGxlcnMpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGF0ZXN0IHByb2R1Y3RzLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBsYXRlc3RQcm9kdWN0cyA9IHVzZVByb2R1Y3RUYWJzKFxyXG4gICAgICAgIHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgICAgICB7IGlkOiAxLCBuYW1lOiAnQWxsJywgY2F0ZWdvcnlTbHVnOiB1bmRlZmluZWQgfSxcclxuICAgICAgICAgICAgeyBpZDogMiwgbmFtZTogJ1Bvd2VyIFRvb2xzJywgY2F0ZWdvcnlTbHVnOiAncG93ZXItdG9vbHMnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDMsIG5hbWU6ICdIYW5kIFRvb2xzJywgY2F0ZWdvcnlTbHVnOiAnaGFuZC10b29scycgfSxcclxuICAgICAgICAgICAgeyBpZDogNCwgbmFtZTogJ1BsdW1iaW5nJywgY2F0ZWdvcnlTbHVnOiAncGx1bWJpbmcnIH0sXHJcbiAgICAgICAgXSwgW10pLFxyXG4gICAgICAgICh0YWIpID0+IHNob3BBcGkuZ2V0TGF0ZXN0UHJvZHVjdHMoeyBsaW1pdDogOCwgY2F0ZWdvcnk6IHRhYi5jYXRlZ29yeVNsdWcgfSksXHJcbiAgICAgICAgaW5pdERhdGE/LmxhdGVzdFByb2R1Y3RzLFxyXG4gICAgKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2R1Y3QgY29sdW1ucy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgY29sdW1ucyA9IGluaXREYXRhPy5wcm9kdWN0Q29sdW1ucyB8fCB1c2VQcm9kdWN0Q29sdW1ucyhcclxuICAgICAgICB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUb3AgUmF0ZWQgUHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiAoKSA9PiBzaG9wQXBpLmdldFRvcFJhdGVkUHJvZHVjdHMoeyBsaW1pdDogMyB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTcGVjaWFsIE9mZmVycycsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICgpID0+IHNob3BBcGkuZ2V0RGlzY291bnRlZFByb2R1Y3RzKHsgbGltaXQ6IDMgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQmVzdHNlbGxlcnMnLFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiAoKSA9PiBzaG9wQXBpLmdldFBvcHVsYXJQcm9kdWN0cyh7IGxpbWl0OiAzIH0pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sIFtdKSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntgSG9tZSBQYWdlIFR3byDigJQgJHt0aGVtZS5uYW1lfWB9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gPEJsb2NrU2xpZGVTaG93IC8+LCBbXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiA8QmxvY2tGZWF0dXJlcyBsYXlvdXQ9XCJib3hlZFwiIC8+LCBbXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8QmxvY2tQcm9kdWN0c0Nhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGZWF0dXJlZCBQcm9kdWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZ3JpZC01XCJcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtmZWF0dXJlZFByb2R1Y3RzLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17ZmVhdHVyZWRQcm9kdWN0cy5pc0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzPXtmZWF0dXJlZFByb2R1Y3RzLnRhYnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Hcm91cENsaWNrPXtmZWF0dXJlZFByb2R1Y3RzLmhhbmRsZVRhYkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICksIFtmZWF0dXJlZFByb2R1Y3RzXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiA8QmxvY2tCYW5uZXIgLz4sIFtdKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCbG9ja1Byb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCZXN0c2VsbGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwibGFyZ2UtbGFzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZWRQcm9kdWN0PXtiZXN0c2VsbGVycy5kYXRhWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtiZXN0c2VsbGVycy5kYXRhLnNsaWNlKDEsIDcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSwgW2Jlc3RzZWxsZXJzLmRhdGFdKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCbG9ja0NhdGVnb3JpZXNcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBvcHVsYXIgQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiY29tcGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17ZGF0YVNob3BCbG9ja0NhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApLCBbXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8QmxvY2tQcm9kdWN0c0Nhcm91c2VsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOZXcgQXJyaXZhbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImdyaWQtNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM9e2xhdGVzdFByb2R1Y3RzLmRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bGF0ZXN0UHJvZHVjdHMuaXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIGdyb3Vwcz17bGF0ZXN0UHJvZHVjdHMudGFic31cclxuICAgICAgICAgICAgICAgICAgICBvbkdyb3VwQ2xpY2s9e2xhdGVzdFByb2R1Y3RzLmhhbmRsZVRhYkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICksIFtsYXRlc3RQcm9kdWN0c10pfVxyXG5cclxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gPEJsb2NrUG9zdHMgdGl0bGU9XCJMYXRlc3QgTmV3c1wiIGxheW91dD1cImdyaWQtbmxcIiBwb3N0cz17ZGF0YUJsb2dQb3N0c30gLz4sIFtdKX1cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=