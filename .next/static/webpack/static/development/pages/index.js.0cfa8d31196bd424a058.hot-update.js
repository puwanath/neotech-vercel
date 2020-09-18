webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/blocks/BlockProductsCarousel.tsx":
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
/* harmony import */ var _blocks_BlockBrands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/BlockBrands */ "./src/components/blocks/BlockBrands.tsx");
/* harmony import */ var _blocks_BlockCategories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/BlockCategories */ "./src/components/blocks/BlockCategories.tsx");
/* harmony import */ var _blocks_BlockPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/BlockPosts */ "./src/components/blocks/BlockPosts.tsx");
/* harmony import */ var _blocks_BlockProducts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blocks/BlockProducts */ "./src/components/blocks/BlockProducts.tsx");
/* harmony import */ var _blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blocks/BlockSlideShow */ "./src/components/blocks/BlockSlideShow.tsx");
/* harmony import */ var _data_blogPosts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/blogPosts */ "./src/data/blogPosts.ts");
/* harmony import */ var _data_shopBlockCategories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../data/shopBlockCategories */ "./src/data/shopBlockCategories.ts");
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data/theme */ "./src/data/theme.ts");
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
  }, "Home Page Two \u2014 ".concat(_data_theme__WEBPACK_IMPORTED_MODULE_12__["default"].name))), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
      categories: _data_shopBlockCategories__WEBPACK_IMPORTED_MODULE_11__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
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
        lineNumber: 118,
        columnNumber: 17
      }
    });
  }, [bestsellers.data]), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockPosts__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Latest News",
      layout: "grid-nl",
      posts: _data_blogPosts__WEBPACK_IMPORTED_MODULE_10__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 28
      }
    });
  }, []));
}

_s(HomePage, "92aPFNVRe35s5yimDb9+soHIRNs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0hvbWVQYWdlLnRzeCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwiaW5pdERhdGEiLCJmZWF0dXJlZFByb2R1Y3RzIiwidXNlUHJvZHVjdFRhYnMiLCJ1c2VNZW1vIiwiaWQiLCJuYW1lIiwiY2F0ZWdvcnlTbHVnIiwidW5kZWZpbmVkIiwidGFiIiwic2hvcEFwaSIsImdldFBvcHVsYXJQcm9kdWN0cyIsImxpbWl0IiwiY2F0ZWdvcnkiLCJiZXN0c2VsbGVycyIsInVzZURlZmVycmVkRGF0YSIsImxhdGVzdFByb2R1Y3RzIiwiZ2V0TGF0ZXN0UHJvZHVjdHMiLCJjb2x1bW5zIiwicHJvZHVjdENvbHVtbnMiLCJ1c2VQcm9kdWN0Q29sdW1ucyIsInRpdGxlIiwic291cmNlIiwiZ2V0VG9wUmF0ZWRQcm9kdWN0cyIsImdldERpc2NvdW50ZWRQcm9kdWN0cyIsInRoZW1lIiwiZGF0YVNob3BCbG9ja0NhdGVnb3JpZXMiLCJkYXRhIiwic2xpY2UiLCJkYXRhQmxvZ1Bvc3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztBQUNBO0NBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtDQUlBOztBQUNBO0FBQ0E7QUFDQTs7QUFhQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF3QztBQUFBOztBQUFBOztBQUFBLE1BQzVCQyxRQUQ0QixHQUNmRCxLQURlLENBQzVCQyxRQUQ0QjtBQUdwQzs7OztBQUdBLE1BQU1DLGdCQUFnQixHQUFHQyxzRUFBYyxDQUNuQ0MscURBQU8sQ0FBQztBQUFBLFdBQU0sQ0FDVjtBQUFFQyxRQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFJLEVBQUUsS0FBZjtBQUFzQkMsa0JBQVksRUFBRUM7QUFBcEMsS0FEVSxFQUVWO0FBQUVILFFBQUUsRUFBRSxDQUFOO0FBQVNDLFVBQUksRUFBRSxhQUFmO0FB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Q0FBQztBQUFBLFdBQU0sTUFBQywwREFBRDtBQUFZLFdBQUssRUFBQyxhQUFsQjtBQUFnQyxZQUFNLEVBQUMsU0FBdkM7QUFBaUQsV0FBSyxFQUFFeUIsd0RBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUFBLEdBQUQsRUFBa0YsRUFBbEYsQ0EvQlosQ0FESjtBQXNDSDs7R0FoR1E5QixRO1VBTW9CSSw4RCxFQWNMWSwrRCxFQU9HWiw4RCxFQWNxQmlCLGlFOzs7S0F6Q3ZDckIsUTtBQWtHTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjBjZmE4ZDMxMTk2YmQ0MjRhMDU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZWFjdFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIHRoaXJkLXBhcnR5XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG4vLyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgc2hvcEFwaSBmcm9tICcuLi8uLi9hcGkvc2hvcCc7XHJcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wcm9kdWN0JztcclxuaW1wb3J0IHsgdXNlRGVmZXJyZWREYXRhLCB1c2VQcm9kdWN0Q29sdW1ucywgdXNlUHJvZHVjdFRhYnMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ob29rcyc7XHJcblxyXG4vLyBibG9ja3NcclxuaW1wb3J0IEJsb2NrQmFubmVyIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja0Jhbm5lcic7XHJcbmltcG9ydCBCbG9ja0JyYW5kcyBmcm9tICcuLi9ibG9ja3MvQmxvY2tCcmFuZHMnO1xyXG5pbXBvcnQgQmxvY2tDYXRlZ29yaWVzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja0NhdGVnb3JpZXMnO1xyXG5pbXBvcnQgQmxvY2tGZWF0dXJlcyBmcm9tICcuLi9ibG9ja3MvQmxvY2tGZWF0dXJlcyc7XHJcbmltcG9ydCBCbG9ja1Bvc3RzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1Bvc3RzJztcclxuaW1wb3J0IEJsb2NrUHJvZHVjdENvbHVtbnMsIHsgQmxvY2tQcm9kdWN0Q29sdW1uc0l0ZW0gfSBmcm9tICcuLi9ibG9ja3MvQmxvY2tQcm9kdWN0Q29sdW1ucyc7XHJcbmltcG9ydCBCbG9ja1Byb2R1Y3RzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1Byb2R1Y3RzJztcclxuaW1wb3J0IEJsb2NrUHJvZHVjdHNDYXJvdXNlbCBmcm9tICcuLi9ibG9ja3MvQmxvY2tQcm9kdWN0c0Nhcm91c2VsJztcclxuaW1wb3J0IEJsb2NrU2xpZGVTaG93IGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1NsaWRlU2hvdyc7XHJcblxyXG4vLyBkYXRhIHN0dWJzXHJcbmltcG9ydCBkYXRhQmxvZ1Bvc3RzIGZyb20gJy4uLy4uL2RhdGEvYmxvZ1Bvc3RzJztcclxuaW1wb3J0IGRhdGFTaG9wQmxvY2tDYXRlZ29yaWVzIGZyb20gJy4uLy4uL2RhdGEvc2hvcEJsb2NrQ2F0ZWdvcmllcyc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi9kYXRhL3RoZW1lJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5pdERhdGEge1xyXG4gICAgZmVhdHVyZWRQcm9kdWN0cz86IElQcm9kdWN0W107XHJcbiAgICBiZXN0c2VsbGVycz86IElQcm9kdWN0W107XHJcbiAgICBsYXRlc3RQcm9kdWN0cz86IElQcm9kdWN0W107XHJcbiAgICBwcm9kdWN0Q29sdW1ucz86IEJsb2NrUHJvZHVjdENvbHVtbnNJdGVtW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSG9tZVBhZ2VQcm9wcyB7XHJcbiAgICBpbml0RGF0YT86IEluaXREYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wczogSG9tZVBhZ2VQcm9wcykge1xyXG4gICAgY29uc3QgeyBpbml0RGF0YSB9ID0gcHJvcHM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGZWF0dXJlZCBwcm9kdWN0cy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgZmVhdHVyZWRQcm9kdWN0cyA9IHVzZVByb2R1Y3RUYWJzKFxyXG4gICAgICAgIHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgICAgICB7IGlkOiAxLCBuYW1lOiAnQWxsJywgY2F0ZWdvcnlTbHVnOiB1bmRlZmluZWQgfSxcclxuICAgICAgICAgICAgeyBpZDogMiwgbmFtZTogJ1Bvd2VyIFRvb2xzJywgY2F0ZWdvcnlTbHVnOiAncG93ZXItdG9vbHMnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDMsIG5hbWU6ICdIYW5kIFRvb2xzJywgY2F0ZWdvcnlTbHVnOiAnaGFuZC10b29scycgfSxcclxuICAgICAgICAgICAgeyBpZDogNCwgbmFtZTogJ1BsdW1iaW5nJywgY2F0ZWdvcnlTbHVnOiAncGx1bWJpbmcnIH0sXHJcbiAgICAgICAgXSwgW10pLFxyXG4gICAgICAgICh0YWIpID0+IHNob3BBcGkuZ2V0UG9wdWxhclByb2R1Y3RzKHsgbGltaXQ6IDEyLCBjYXRlZ29yeTogdGFiLmNhdGVnb3J5U2x1ZyB9KSxcclxuICAgICAgICBpbml0RGF0YT8uZmVhdHVyZWRQcm9kdWN0cyxcclxuICAgICk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCZXN0c2VsbGVycy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgYmVzdHNlbGxlcnMgPSB1c2VEZWZlcnJlZERhdGEoKCkgPT4gKFxyXG4gICAgICAgIHNob3BBcGkuZ2V0UG9wdWxhclByb2R1Y3RzKHsgbGltaXQ6IDcgfSlcclxuICAgICksIFtdLCBpbml0RGF0YT8uYmVzdHNlbGxlcnMpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGF0ZXN0IHByb2R1Y3RzLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBsYXRlc3RQcm9kdWN0cyA9IHVzZVByb2R1Y3RUYWJzKFxyXG4gICAgICAgIHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgICAgICB7IGlkOiAxLCBuYW1lOiAnQWxsJywgY2F0ZWdvcnlTbHVnOiB1bmRlZmluZWQgfSxcclxuICAgICAgICAgICAgeyBpZDogMiwgbmFtZTogJ1Bvd2VyIFRvb2xzJywgY2F0ZWdvcnlTbHVnOiAncG93ZXItdG9vbHMnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDMsIG5hbWU6ICdIYW5kIFRvb2xzJywgY2F0ZWdvcnlTbHVnOiAnaGFuZC10b29scycgfSxcclxuICAgICAgICAgICAgeyBpZDogNCwgbmFtZTogJ1BsdW1iaW5nJywgY2F0ZWdvcnlTbHVnOiAncGx1bWJpbmcnIH0sXHJcbiAgICAgICAgXSwgW10pLFxyXG4gICAgICAgICh0YWIpID0+IHNob3BBcGkuZ2V0TGF0ZXN0UHJvZHVjdHMoeyBsaW1pdDogOCwgY2F0ZWdvcnk6IHRhYi5jYXRlZ29yeVNsdWcgfSksXHJcbiAgICAgICAgaW5pdERhdGE/LmxhdGVzdFByb2R1Y3RzLFxyXG4gICAgKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2R1Y3QgY29sdW1ucy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgY29sdW1ucyA9IGluaXREYXRhPy5wcm9kdWN0Q29sdW1ucyB8fCB1c2VQcm9kdWN0Q29sdW1ucyhcclxuICAgICAgICB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUb3AgUmF0ZWQgUHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiAoKSA9PiBzaG9wQXBpLmdldFRvcFJhdGVkUHJvZHVjdHMoeyBsaW1pdDogMyB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTcGVjaWFsIE9mZmVycycsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICgpID0+IHNob3BBcGkuZ2V0RGlzY291bnRlZFByb2R1Y3RzKHsgbGltaXQ6IDMgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQmVzdHNlbGxlcnMnLFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiAoKSA9PiBzaG9wQXBpLmdldFBvcHVsYXJQcm9kdWN0cyh7IGxpbWl0OiAzIH0pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sIFtdKSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntgSG9tZSBQYWdlIFR3byDigJQgJHt0aGVtZS5uYW1lfWB9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gPEJsb2NrU2xpZGVTaG93IC8+LCBbXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiA8QmxvY2tCcmFuZHMgLz4sIFtdKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCbG9ja0NhdGVnb3JpZXNcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBvcHVsYXIgQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiY29tcGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17ZGF0YVNob3BCbG9ja0NhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApLCBbXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiA8QmxvY2tCYW5uZXIgLz4sIFtdKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCbG9ja1Byb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCZXN0c2VsbGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwibGFyZ2UtbGFzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZWRQcm9kdWN0PXtiZXN0c2VsbGVycy5kYXRhWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtiZXN0c2VsbGVycy5kYXRhLnNsaWNlKDEsIDcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSwgW2Jlc3RzZWxsZXJzLmRhdGFdKX1cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IDxCbG9ja1Bvc3RzIHRpdGxlPVwiTGF0ZXN0IE5ld3NcIiBsYXlvdXQ9XCJncmlkLW5sXCIgcG9zdHM9e2RhdGFCbG9nUG9zdHN9IC8+LCBbXSl9XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9