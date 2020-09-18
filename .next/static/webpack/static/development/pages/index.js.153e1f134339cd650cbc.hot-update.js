webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/blocks/BlockBanner.tsx":
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
/* harmony import */ var _blocks_BlockBrands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/BlockBrands */ "./src/components/blocks/BlockBrands.tsx");
/* harmony import */ var _blocks_BlockCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/BlockCategories */ "./src/components/blocks/BlockCategories.tsx");
/* harmony import */ var _blocks_BlockPosts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/BlockPosts */ "./src/components/blocks/BlockPosts.tsx");
/* harmony import */ var _blocks_BlockProducts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/BlockProducts */ "./src/components/blocks/BlockProducts.tsx");
/* harmony import */ var _blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blocks/BlockSlideShow */ "./src/components/blocks/BlockSlideShow.tsx");
/* harmony import */ var _data_blogPosts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/blogPosts */ "./src/data/blogPosts.ts");
/* harmony import */ var _data_shopBlockCategories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/shopBlockCategories */ "./src/data/shopBlockCategories.ts");
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../data/theme */ "./src/data/theme.ts");
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
  }, "Home Page Two \u2014 ".concat(_data_theme__WEBPACK_IMPORTED_MODULE_11__["default"].name))), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 28
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockBrands__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 28
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockCategories__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Popular Categories",
      layout: "compact",
      categories: _data_shopBlockCategories__WEBPACK_IMPORTED_MODULE_10__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockProducts__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Bestsellers",
      layout: "large-last",
      featuredProduct: bestsellers.data[0],
      products: bestsellers.data.slice(1, 7),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    });
  }, [bestsellers.data]), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockPosts__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Latest News",
      layout: "grid-nl",
      posts: _data_blogPosts__WEBPACK_IMPORTED_MODULE_9__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 28
      }
    });
  }, []));
}

_s(HomePage, "2bd0+BETdcpC1ZPRrACk/GMVJrg=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0hvbWVQYWdlLnRzeCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwiaW5pdERhdGEiLCJmZWF0dXJlZFByb2R1Y3RzIiwidXNlUHJvZHVjdFRhYnMiLCJ1c2VNZW1vIiwiaWQiLCJuYW1lIiwiY2F0ZWdvcnlTbHVnIiwidW5kZWZpbmVkIiwidGFiIiwic2hvcEFwaSIsImdldFBvcHVsYXJQcm9kdWN0cyIsImxpbWl0IiwiY2F0ZWdvcnkiLCJiZXN0c2VsbGVycyIsInVzZURlZmVycmVkRGF0YSIsImxhdGVzdFByb2R1Y3RzIiwiZ2V0TGF0ZXN0UHJvZHVjdHMiLCJjb2x1bW5zIiwicHJvZHVjdENvbHVtbnMiLCJ1c2VQcm9kdWN0Q29sdW1ucyIsInRpdGxlIiwic291cmNlIiwiZ2V0VG9wUmF0ZWRQcm9kdWN0cyIsImdldERpc2NvdW50ZWRQcm9kdWN0cyIsInRoZW1lIiwiZGF0YVNob3BCbG9ja0NhdGVnb3JpZXMiLCJkYXRhIiwic2xpY2UiLCJkYXRhQmxvZ1Bvc3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0NBR0E7O0FBQ0E7Q0FJQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtDQUlBOztBQUNBO0FBQ0E7QUFDQTs7QUFhQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF3QztBQUFBOztBQUFBOztBQUFBLE1BQzVCQyxRQUQ0QixHQUNmRCxLQURlLENBQzVCQyxRQUQ0QjtBQUdwQzs7OztBQUdBLE1BQU1DLGdCQUFnQixHQUFHQyxzRUFBYyxDQUNuQ0MscURBQU8sQ0FBQztBQUFBLFdBQU0sQ0FDVjtBQUFFQyxRQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFJLEVBQUUsS0FBZjtBQUFzQkMsa0JBQVksRUFBRUM7QUFBcEMsS0FEVSxFQUVWO0FBQUVILFFBQUUsRUFBRSxDQUFOO0FBQVNDLFVBQUksRUFBRSxhQUFmO0FBQThCQyxr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O0FBQUE7QUFBQTtBQUFBLE1BQU47QUFBQSxHQUFELEVBQWtGLEVBQWxGLENBOUJaLENBREo7QUFxQ0g7O0dBL0ZROUIsUTtVQU1vQkksOEQsRUFjTFksK0QsRUFPR1osOEQsRUFjcUJpQixpRTs7O0tBekN2Q3JCLFE7QUFpR01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xNTNlMWYxMzQzMzljZDY1MGNiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVhY3RcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyB0aGlyZC1wYXJ0eVxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuLy8gYXBwbGljYXRpb25cclxuaW1wb3J0IHNob3BBcGkgZnJvbSAnLi4vLi4vYXBpL3Nob3AnO1xyXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcHJvZHVjdCc7XHJcbmltcG9ydCB7IHVzZURlZmVycmVkRGF0YSwgdXNlUHJvZHVjdENvbHVtbnMsIHVzZVByb2R1Y3RUYWJzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaG9va3MnO1xyXG5cclxuLy8gYmxvY2tzXHJcbmltcG9ydCBCbG9ja0Jhbm5lciBmcm9tICcuLi9ibG9ja3MvQmxvY2tCYW5uZXInO1xyXG5pbXBvcnQgQmxvY2tCcmFuZHMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrQnJhbmRzJztcclxuaW1wb3J0IEJsb2NrQ2F0ZWdvcmllcyBmcm9tICcuLi9ibG9ja3MvQmxvY2tDYXRlZ29yaWVzJztcclxuaW1wb3J0IEJsb2NrRmVhdHVyZXMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrRmVhdHVyZXMnO1xyXG5pbXBvcnQgQmxvY2tQb3N0cyBmcm9tICcuLi9ibG9ja3MvQmxvY2tQb3N0cyc7XHJcbmltcG9ydCBCbG9ja1Byb2R1Y3RDb2x1bW5zLCB7IEJsb2NrUHJvZHVjdENvbHVtbnNJdGVtIH0gZnJvbSAnLi4vYmxvY2tzL0Jsb2NrUHJvZHVjdENvbHVtbnMnO1xyXG5pbXBvcnQgQmxvY2tQcm9kdWN0cyBmcm9tICcuLi9ibG9ja3MvQmxvY2tQcm9kdWN0cyc7XHJcbmltcG9ydCBCbG9ja1Byb2R1Y3RzQ2Fyb3VzZWwgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrUHJvZHVjdHNDYXJvdXNlbCc7XHJcbmltcG9ydCBCbG9ja1NsaWRlU2hvdyBmcm9tICcuLi9ibG9ja3MvQmxvY2tTbGlkZVNob3cnO1xyXG5cclxuLy8gZGF0YSBzdHVic1xyXG5pbXBvcnQgZGF0YUJsb2dQb3N0cyBmcm9tICcuLi8uLi9kYXRhL2Jsb2dQb3N0cyc7XHJcbmltcG9ydCBkYXRhU2hvcEJsb2NrQ2F0ZWdvcmllcyBmcm9tICcuLi8uLi9kYXRhL3Nob3BCbG9ja0NhdGVnb3JpZXMnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vZGF0YS90aGVtZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXRhIHtcclxuICAgIGZlYXR1cmVkUHJvZHVjdHM/OiBJUHJvZHVjdFtdO1xyXG4gICAgYmVzdHNlbGxlcnM/OiBJUHJvZHVjdFtdO1xyXG4gICAgbGF0ZXN0UHJvZHVjdHM/OiBJUHJvZHVjdFtdO1xyXG4gICAgcHJvZHVjdENvbHVtbnM/OiBCbG9ja1Byb2R1Y3RDb2x1bW5zSXRlbVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhvbWVQYWdlUHJvcHMge1xyXG4gICAgaW5pdERhdGE/OiBJbml0RGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHM6IEhvbWVQYWdlUHJvcHMpIHtcclxuICAgIGNvbnN0IHsgaW5pdERhdGEgfSA9IHByb3BzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmVhdHVyZWQgcHJvZHVjdHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGZlYXR1cmVkUHJvZHVjdHMgPSB1c2VQcm9kdWN0VGFicyhcclxuICAgICAgICB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICAgICAgeyBpZDogMSwgbmFtZTogJ0FsbCcsIGNhdGVnb3J5U2x1ZzogdW5kZWZpbmVkIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDIsIG5hbWU6ICdQb3dlciBUb29scycsIGNhdGVnb3J5U2x1ZzogJ3Bvd2VyLXRvb2xzJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAzLCBuYW1lOiAnSGFuZCBUb29scycsIGNhdGVnb3J5U2x1ZzogJ2hhbmQtdG9vbHMnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDQsIG5hbWU6ICdQbHVtYmluZycsIGNhdGVnb3J5U2x1ZzogJ3BsdW1iaW5nJyB9LFxyXG4gICAgICAgIF0sIFtdKSxcclxuICAgICAgICAodGFiKSA9PiBzaG9wQXBpLmdldFBvcHVsYXJQcm9kdWN0cyh7IGxpbWl0OiAxMiwgY2F0ZWdvcnk6IHRhYi5jYXRlZ29yeVNsdWcgfSksXHJcbiAgICAgICAgaW5pdERhdGE/LmZlYXR1cmVkUHJvZHVjdHMsXHJcbiAgICApO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmVzdHNlbGxlcnMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGJlc3RzZWxsZXJzID0gdXNlRGVmZXJyZWREYXRhKCgpID0+IChcclxuICAgICAgICBzaG9wQXBpLmdldFBvcHVsYXJQcm9kdWN0cyh7IGxpbWl0OiA3IH0pXHJcbiAgICApLCBbXSwgaW5pdERhdGE/LmJlc3RzZWxsZXJzKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIExhdGVzdCBwcm9kdWN0cy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgbGF0ZXN0UHJvZHVjdHMgPSB1c2VQcm9kdWN0VGFicyhcclxuICAgICAgICB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICAgICAgeyBpZDogMSwgbmFtZTogJ0FsbCcsIGNhdGVnb3J5U2x1ZzogdW5kZWZpbmVkIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDIsIG5hbWU6ICdQb3dlciBUb29scycsIGNhdGVnb3J5U2x1ZzogJ3Bvd2VyLXRvb2xzJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAzLCBuYW1lOiAnSGFuZCBUb29scycsIGNhdGVnb3J5U2x1ZzogJ2hhbmQtdG9vbHMnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDQsIG5hbWU6ICdQbHVtYmluZycsIGNhdGVnb3J5U2x1ZzogJ3BsdW1iaW5nJyB9LFxyXG4gICAgICAgIF0sIFtdKSxcclxuICAgICAgICAodGFiKSA9PiBzaG9wQXBpLmdldExhdGVzdFByb2R1Y3RzKHsgbGltaXQ6IDgsIGNhdGVnb3J5OiB0YWIuY2F0ZWdvcnlTbHVnIH0pLFxyXG4gICAgICAgIGluaXREYXRhPy5sYXRlc3RQcm9kdWN0cyxcclxuICAgICk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9kdWN0IGNvbHVtbnMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGNvbHVtbnMgPSBpbml0RGF0YT8ucHJvZHVjdENvbHVtbnMgfHwgdXNlUHJvZHVjdENvbHVtbnMoXHJcbiAgICAgICAgdXNlTWVtbygoKSA9PiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVG9wIFJhdGVkIFByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogKCkgPT4gc2hvcEFwaS5nZXRUb3BSYXRlZFByb2R1Y3RzKHsgbGltaXQ6IDMgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3BlY2lhbCBPZmZlcnMnLFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiAoKSA9PiBzaG9wQXBpLmdldERpc2NvdW50ZWRQcm9kdWN0cyh7IGxpbWl0OiAzIH0pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Jlc3RzZWxsZXJzJyxcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogKCkgPT4gc2hvcEFwaS5nZXRQb3B1bGFyUHJvZHVjdHMoeyBsaW1pdDogMyB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLCBbXSksXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57YEhvbWUgUGFnZSBUd28g4oCUICR7dGhlbWUubmFtZX1gfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IDxCbG9ja1NsaWRlU2hvdyAvPiwgW10pfVxyXG5cclxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gPEJsb2NrQnJhbmRzIC8+LCBbXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8QmxvY2tDYXRlZ29yaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQb3B1bGFyIENhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImNvbXBhY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM9e2RhdGFTaG9wQmxvY2tDYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSwgW10pfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCbG9ja1Byb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCZXN0c2VsbGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwibGFyZ2UtbGFzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZWRQcm9kdWN0PXtiZXN0c2VsbGVycy5kYXRhWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtiZXN0c2VsbGVycy5kYXRhLnNsaWNlKDEsIDcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSwgW2Jlc3RzZWxsZXJzLmRhdGFdKX1cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IDxCbG9ja1Bvc3RzIHRpdGxlPVwiTGF0ZXN0IE5ld3NcIiBsYXlvdXQ9XCJncmlkLW5sXCIgcG9zdHM9e2RhdGFCbG9nUG9zdHN9IC8+LCBbXSl9XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9