webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/dom-helpers/esm/addClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
false,

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
false,

/***/ "./node_modules/react-toastify/dist/react-toastify.esm.js":
false,

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
false,

/***/ "./node_modules/react-transition-group/esm/Transition.js":
false,

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
false,

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
false,

/***/ "./node_modules/react-transition-group/esm/config.js":
false,

/***/ "./node_modules/react-transition-group/esm/index.js":
false,

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
false,

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
false,

/***/ "./src/components/blocks/BlockProducts.tsx":
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
/* harmony import */ var _blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/BlockSlideShow */ "./src/components/blocks/BlockSlideShow.tsx");
/* harmony import */ var _data_blogPosts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/blogPosts */ "./src/data/blogPosts.ts");
/* harmony import */ var _data_shopBlockCategories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/shopBlockCategories */ "./src/data/shopBlockCategories.ts");
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/theme */ "./src/data/theme.ts");
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
  }, "Home Page Two \u2014 ".concat(_data_theme__WEBPACK_IMPORTED_MODULE_10__["default"].name))), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      categories: _data_shopBlockCategories__WEBPACK_IMPORTED_MODULE_9__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockPosts__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Latest News",
      layout: "grid-nl",
      posts: _data_blogPosts__WEBPACK_IMPORTED_MODULE_8__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 28
      }
    });
  }, []));
}

_s(HomePage, "H7bruM4VoKRSX7fF3xMha9Pbxt8=", false, function () {
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

/***/ "./src/components/shared/AsyncAction.tsx":
false,

/***/ "./src/components/shared/CurrencyFormat.tsx":
false,

/***/ "./src/components/shared/ProductCard.tsx":
false,

/***/ "./src/components/shared/Rating.tsx":
false,

/***/ "./src/data/shopCurrencies.ts":
false,

/***/ "./src/store/cart/cartActionTypes.ts":
false,

/***/ "./src/store/cart/cartActions.ts":
false,

/***/ "./src/store/cart/cartHooks.ts":
false,

/***/ "./src/store/compare/compareActionTypes.ts":
false,

/***/ "./src/store/compare/compareActions.ts":
false,

/***/ "./src/store/compare/compareHooks.ts":
false,

/***/ "./src/store/compare/compareReducer.ts":
false,

/***/ "./src/store/currency/currencyActionTypes.ts":
false,

/***/ "./src/store/currency/currencyActions.ts":
false,

/***/ "./src/store/currency/currencyHooks.ts":
false,

/***/ "./src/store/currency/currencyReducer.ts":
false,

/***/ "./src/store/quickview/quickviewActionTypes.ts":
false,

/***/ "./src/store/quickview/quickviewActions.ts":
false,

/***/ "./src/store/quickview/quickviewHooks.ts":
false,

/***/ "./src/store/quickview/quickviewReducer.ts":
false,

/***/ "./src/store/wishlist/wishlistActionTypes.ts":
false,

/***/ "./src/store/wishlist/wishlistActions.ts":
false,

/***/ "./src/store/wishlist/wishlistHooks.ts":
false,

/***/ "./src/store/wishlist/wishlistReducer.ts":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0hvbWVQYWdlLnRzeCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwiaW5pdERhdGEiLCJmZWF0dXJlZFByb2R1Y3RzIiwidXNlUHJvZHVjdFRhYnMiLCJ1c2VNZW1vIiwiaWQiLCJuYW1lIiwiY2F0ZWdvcnlTbHVnIiwidW5kZWZpbmVkIiwidGFiIiwic2hvcEFwaSIsImdldFBvcHVsYXJQcm9kdWN0cyIsImxpbWl0IiwiY2F0ZWdvcnkiLCJiZXN0c2VsbGVycyIsInVzZURlZmVycmVkRGF0YSIsImxhdGVzdFByb2R1Y3RzIiwiZ2V0TGF0ZXN0UHJvZHVjdHMiLCJjb2x1bW5zIiwicHJvZHVjdENvbHVtbnMiLCJ1c2VQcm9kdWN0Q29sdW1ucyIsInRpdGxlIiwic291cmNlIiwiZ2V0VG9wUmF0ZWRQcm9kdWN0cyIsImdldERpc2NvdW50ZWRQcm9kdWN0cyIsInRoZW1lIiwiZGF0YVNob3BCbG9ja0NhdGVnb3JpZXMiLCJkYXRhQmxvZ1Bvc3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7Q0FHQTs7QUFDQTtDQUlBOztBQUVBO0FBQ0E7QUFFQTtDQU1BOztBQUNBO0FBQ0E7QUFDQTs7QUFhQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF3QztBQUFBOztBQUFBOztBQUFBLE1BQzVCQyxRQUQ0QixHQUNmRCxLQURlLENBQzVCQyxRQUQ0QjtBQUdwQzs7OztBQUdBLE1BQU1DLGdCQUFnQixHQUFHQyxzRUFBYyxDQUNuQ0MscURBQU8sQ0FBQztBQUFBLFdBQU0sQ0FDVjtBQUFFQyxRQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFJLEVBQUUsS0FBZjtBQUFzQkMsa0JBQVksRUFBRUM7QUFBcEMsS0FEVSxFQUVWO0FBQUVILFFBQUUsRUFBRSxDQUFOO0FBQVND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SSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUEyQmEsb0RBQUssQ0FBQ25CLElBQWpDLEVBREosQ0FESixFQUtLRixxREFBTyxDQUFDO0FBQUEsV0FBTSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUFBLEdBQUQsRUFBMkIsRUFBM0IsQ0FMWixFQU9LQSxxREFBTyxDQUFDO0FBQUEsV0FBTSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUFBLEdBQUQsRUFBd0IsRUFBeEIsQ0FQWixFQVNLQSxxREFBTyxDQUFDO0FBQUEsV0FDTCxNQUFDLCtEQUFEO0FBQ0ksV0FBSyxFQUFDLG9CQURWO0FBRUksWUFBTSxFQUFDLFNBRlg7QUFHSSxnQkFBVSxFQUFFc0IsaUVBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESztBQUFBLEdBQUQsRUFNTCxFQU5LLENBVFosRUFrQkt0QixxREFBTyxDQUFDO0FBQUEsV0FBTSxNQUFDLDBEQUFEO0FBQVksV0FBSyxFQUFDLGFBQWxCO0FBQWdDLFlBQU0sRUFBQyxTQUF2QztBQUFpRCxXQUFLLEVBQUV1Qix1REFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQUEsR0FBRCxFQUFrRixFQUFsRixDQWxCWixDQURKO0FBeUJIOztHQW5GUTVCLFE7VUFNb0JJLDhELEVBY0xZLCtELEVBT0daLDhELEVBY3FCaUIsaUU7OztLQXpDdkNyQixRO0FBcUZNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTExNzBmNWVhYzE4OTBhMzQ4M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlYWN0XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gdGhpcmQtcGFydHlcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbi8vIGFwcGxpY2F0aW9uXHJcbmltcG9ydCBzaG9wQXBpIGZyb20gJy4uLy4uL2FwaS9zaG9wJztcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Byb2R1Y3QnO1xyXG5pbXBvcnQgeyB1c2VEZWZlcnJlZERhdGEsIHVzZVByb2R1Y3RDb2x1bW5zLCB1c2VQcm9kdWN0VGFicyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hvb2tzJztcclxuXHJcbi8vIGJsb2Nrc1xyXG5pbXBvcnQgQmxvY2tCYW5uZXIgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrQmFubmVyJztcclxuaW1wb3J0IEJsb2NrQnJhbmRzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja0JyYW5kcyc7XHJcbmltcG9ydCBCbG9ja0NhdGVnb3JpZXMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrQ2F0ZWdvcmllcyc7XHJcbmltcG9ydCBCbG9ja0ZlYXR1cmVzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja0ZlYXR1cmVzJztcclxuaW1wb3J0IEJsb2NrUG9zdHMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrUG9zdHMnO1xyXG5pbXBvcnQgQmxvY2tQcm9kdWN0Q29sdW1ucywgeyBCbG9ja1Byb2R1Y3RDb2x1bW5zSXRlbSB9IGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1Byb2R1Y3RDb2x1bW5zJztcclxuaW1wb3J0IEJsb2NrUHJvZHVjdHMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrUHJvZHVjdHMnO1xyXG5pbXBvcnQgQmxvY2tQcm9kdWN0c0Nhcm91c2VsIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1Byb2R1Y3RzQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgQmxvY2tTbGlkZVNob3cgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrU2xpZGVTaG93JztcclxuXHJcbi8vIGRhdGEgc3R1YnNcclxuaW1wb3J0IGRhdGFCbG9nUG9zdHMgZnJvbSAnLi4vLi4vZGF0YS9ibG9nUG9zdHMnO1xyXG5pbXBvcnQgZGF0YVNob3BCbG9ja0NhdGVnb3JpZXMgZnJvbSAnLi4vLi4vZGF0YS9zaG9wQmxvY2tDYXRlZ29yaWVzJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL2RhdGEvdGhlbWUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbml0RGF0YSB7XHJcbiAgICBmZWF0dXJlZFByb2R1Y3RzPzogSVByb2R1Y3RbXTtcclxuICAgIGJlc3RzZWxsZXJzPzogSVByb2R1Y3RbXTtcclxuICAgIGxhdGVzdFByb2R1Y3RzPzogSVByb2R1Y3RbXTtcclxuICAgIHByb2R1Y3RDb2x1bW5zPzogQmxvY2tQcm9kdWN0Q29sdW1uc0l0ZW1bXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb21lUGFnZVByb3BzIHtcclxuICAgIGluaXREYXRhPzogSW5pdERhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzOiBIb21lUGFnZVByb3BzKSB7XHJcbiAgICBjb25zdCB7IGluaXREYXRhIH0gPSBwcm9wcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZlYXR1cmVkIHByb2R1Y3RzLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBmZWF0dXJlZFByb2R1Y3RzID0gdXNlUHJvZHVjdFRhYnMoXHJcbiAgICAgICAgdXNlTWVtbygoKSA9PiBbXHJcbiAgICAgICAgICAgIHsgaWQ6IDEsIG5hbWU6ICdBbGwnLCBjYXRlZ29yeVNsdWc6IHVuZGVmaW5lZCB9LFxyXG4gICAgICAgICAgICB7IGlkOiAyLCBuYW1lOiAnUG93ZXIgVG9vbHMnLCBjYXRlZ29yeVNsdWc6ICdwb3dlci10b29scycgfSxcclxuICAgICAgICAgICAgeyBpZDogMywgbmFtZTogJ0hhbmQgVG9vbHMnLCBjYXRlZ29yeVNsdWc6ICdoYW5kLXRvb2xzJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiA0LCBuYW1lOiAnUGx1bWJpbmcnLCBjYXRlZ29yeVNsdWc6ICdwbHVtYmluZycgfSxcclxuICAgICAgICBdLCBbXSksXHJcbiAgICAgICAgKHRhYikgPT4gc2hvcEFwaS5nZXRQb3B1bGFyUHJvZHVjdHMoeyBsaW1pdDogMTIsIGNhdGVnb3J5OiB0YWIuY2F0ZWdvcnlTbHVnIH0pLFxyXG4gICAgICAgIGluaXREYXRhPy5mZWF0dXJlZFByb2R1Y3RzLFxyXG4gICAgKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJlc3RzZWxsZXJzLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBiZXN0c2VsbGVycyA9IHVzZURlZmVycmVkRGF0YSgoKSA9PiAoXHJcbiAgICAgICAgc2hvcEFwaS5nZXRQb3B1bGFyUHJvZHVjdHMoeyBsaW1pdDogNyB9KVxyXG4gICAgKSwgW10sIGluaXREYXRhPy5iZXN0c2VsbGVycyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXRlc3QgcHJvZHVjdHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGxhdGVzdFByb2R1Y3RzID0gdXNlUHJvZHVjdFRhYnMoXHJcbiAgICAgICAgdXNlTWVtbygoKSA9PiBbXHJcbiAgICAgICAgICAgIHsgaWQ6IDEsIG5hbWU6ICdBbGwnLCBjYXRlZ29yeVNsdWc6IHVuZGVmaW5lZCB9LFxyXG4gICAgICAgICAgICB7IGlkOiAyLCBuYW1lOiAnUG93ZXIgVG9vbHMnLCBjYXRlZ29yeVNsdWc6ICdwb3dlci10b29scycgfSxcclxuICAgICAgICAgICAgeyBpZDogMywgbmFtZTogJ0hhbmQgVG9vbHMnLCBjYXRlZ29yeVNsdWc6ICdoYW5kLXRvb2xzJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiA0LCBuYW1lOiAnUGx1bWJpbmcnLCBjYXRlZ29yeVNsdWc6ICdwbHVtYmluZycgfSxcclxuICAgICAgICBdLCBbXSksXHJcbiAgICAgICAgKHRhYikgPT4gc2hvcEFwaS5nZXRMYXRlc3RQcm9kdWN0cyh7IGxpbWl0OiA4LCBjYXRlZ29yeTogdGFiLmNhdGVnb3J5U2x1ZyB9KSxcclxuICAgICAgICBpbml0RGF0YT8ubGF0ZXN0UHJvZHVjdHMsXHJcbiAgICApO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJvZHVjdCBjb2x1bW5zLlxyXG4gICAgICovXHJcbiAgICBjb25zdCBjb2x1bW5zID0gaW5pdERhdGE/LnByb2R1Y3RDb2x1bW5zIHx8IHVzZVByb2R1Y3RDb2x1bW5zKFxyXG4gICAgICAgIHVzZU1lbW8oKCkgPT4gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1RvcCBSYXRlZCBQcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICgpID0+IHNob3BBcGkuZ2V0VG9wUmF0ZWRQcm9kdWN0cyh7IGxpbWl0OiAzIH0pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NwZWNpYWwgT2ZmZXJzJyxcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogKCkgPT4gc2hvcEFwaS5nZXREaXNjb3VudGVkUHJvZHVjdHMoeyBsaW1pdDogMyB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdCZXN0c2VsbGVycycsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICgpID0+IHNob3BBcGkuZ2V0UG9wdWxhclByb2R1Y3RzKHsgbGltaXQ6IDMgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSwgW10pLFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e2BIb21lIFBhZ2UgVHdvIOKAlCAke3RoZW1lLm5hbWV9YH08L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiA8QmxvY2tTbGlkZVNob3cgLz4sIFtdKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IDxCbG9ja0JyYW5kcyAvPiwgW10pfVxyXG5cclxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEJsb2NrQ2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUG9wdWxhciBDYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJjb21wYWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtkYXRhU2hvcEJsb2NrQ2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICksIFtdKX1cclxuXHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiA8QmxvY2tQb3N0cyB0aXRsZT1cIkxhdGVzdCBOZXdzXCIgbGF5b3V0PVwiZ3JpZC1ubFwiIHBvc3RzPXtkYXRhQmxvZ1Bvc3RzfSAvPiwgW10pfVxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==