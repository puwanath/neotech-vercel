webpackHotUpdate("static\\development\\pages\\index.js",{

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
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, "Home Page Two \u2014 ".concat(_data_theme__WEBPACK_IMPORTED_MODULE_10__["default"].name))), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 28
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockBrands__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
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
        lineNumber: 88,
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
        lineNumber: 96,
        columnNumber: 28
      }
    });
  }, []));
}

_s(HomePage, "np/hxjsXy68NJlfn1XS0EzcR9Cg=", false, function () {
  return [_services_hooks__WEBPACK_IMPORTED_MODULE_3__["useProductTabs"], _services_hooks__WEBPACK_IMPORTED_MODULE_3__["useProductColumns"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0hvbWVQYWdlLnRzeCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwiaW5pdERhdGEiLCJmZWF0dXJlZFByb2R1Y3RzIiwidXNlUHJvZHVjdFRhYnMiLCJ1c2VNZW1vIiwiaWQiLCJuYW1lIiwiY2F0ZWdvcnlTbHVnIiwidW5kZWZpbmVkIiwidGFiIiwic2hvcEFwaSIsImdldFBvcHVsYXJQcm9kdWN0cyIsImxpbWl0IiwiY2F0ZWdvcnkiLCJjb2x1bW5zIiwicHJvZHVjdENvbHVtbnMiLCJ1c2VQcm9kdWN0Q29sdW1ucyIsInRpdGxlIiwic291cmNlIiwiZ2V0VG9wUmF0ZWRQcm9kdWN0cyIsImdldERpc2NvdW50ZWRQcm9kdWN0cyIsInRoZW1lIiwiZGF0YVNob3BCbG9ja0NhdGVnb3JpZXMiLCJkYXRhQmxvZ1Bvc3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7Q0FHQTs7QUFDQTtDQUlBOztBQUVBO0FBQ0E7QUFFQTtDQU1BOztBQUNBO0FBQ0E7QUFDQTs7QUFhQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF3QztBQUFBOztBQUFBOztBQUFBLE1BQzVCQyxRQUQ0QixHQUNmRCxLQURlLENBQzVCQyxRQUQ0QjtBQUdwQzs7OztBQUdBLE1BQU1DLGdCQUFnQixHQUFHQyxzRUFBYyxDQUNuQ0MscURBQU8sQ0FBQztBQUFBLFdBQU0sQ0FDVjtBQUFFQyxRQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFJLEVBQUUsS0FBZjtBQUFzQkMsa0JBQVksRUFBRUM7QUFBcEMsS0FEVSxFQUVWO0FBQUVILFFBQUUsRUFBRSxDQUFOO0FBQVNDLFVBQUksRUFBRSxhQUFmO0FBQThCQyxrQkFBWSxFQUFFO0FBQTVDLEtBRlUsRUFHVjtBQUFFRixRQUFFLEVBQUUsQ0FBTjtBQUFTQyxVQUFJLEVBQUUsWUFBZjtBQUE2QkMsa0JBQVksRUFBRTtBQUEzQyxLQUhVLEVBSVY7QUFBRUYsUUFBRSxFQUFFLENBQU47QUFBU0MsVUFBSSxFQUFFLFVBQWY7QUFBMkJDLGtCQUFZLEVBQUU7QUFBekMsS0FKVSxDQUFOO0FBQUEsR0FBRCxFQUtKLEVBTEksQ0FENEIsRUFPbkMsVUFBQ0UsR0FBRDtBQUFBLFdBQVNDLGlEQUFPLENBQUNDLGtCQUFSLENBQTJCO0FBQUVDLFdBQUssRUFBRSxFQUFUO0FBQWFDLGNBQVEsRUFBRUosR0FBRyxDQUFDRjtBQUEzQixLQUEzQixDQUFUO0FBQUEsR0FQbUMsRUFRbkNOLFFBUm1DLGFBUW5DQSxRQVJtQyx1QkFRbkNBLFFBQVEsQ0FBRUMsZ0JBUnlCLENBQXZDO0FBWUE7Ozs7QUFHQSxNQUFNWSxPQUFPLEdBQUcsQ0FBQWIsUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVjLGNBQVYsS0FBNEJDLHlFQUFpQixDQUN6RFoscURBQU8sQ0FBQztBQUFBLFdBQU0sQ0FDVjtBQUNJYSxXQUFLLEVBQUUsb0JBRFg7QUFFSUMsWUFBTSxFQUFFO0FBQUEsZUFBTVIsaURBQU8sQ0FBQ1MsbUJBQVIsQ0FBNEI7QUFBRVAsZUFBSyxFQUFFO0FBQVQsU0FBNUIsQ0FBTjtBQUFBO0FBRlosS0FEVSxFQUtWO0FBQ0lLLFdBQUssRUFBRSxnQkFEWDtBQUVJQyxZQUFNLEVBQUU7QUFBQSxlQUFNUixpREFBTyxDQUFDVSxxQkFBUixDQUE4QjtBQUFFUixlQUFLLEVBQUU7QUFBVCxTQUE5QixDQUFOO0FBQUE7QUFGWixLQUxVLEVBU1Y7QUFDSUssV0FBSyxFQUFFLGFBRFg7QUFFSUMsWUFBTSxFQUFFO0FBQUEsZUFBTVIsaURBQU8sQ0FBQ0Msa0JBQVIsQ0FBMkI7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FBM0IsQ0FBTjtBQUFBO0FBRlosS0FUVSxDQUFOO0FBQUEsR0FBRCxFQWFKLEVBYkksQ0FEa0QsQ0FBN0Q7QUFpQkEsU0FDSSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FBMkJTLG9EQUFLLENBQUNmLElBQWpDLEVBREosQ0FESixFQUtLRixxREFBTyxDQUFDO0FBQUEsV0FBTSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUFBLEdBQUQsRUFBMkIsRUFBM0IsQ0FMWixFQU9LQSxxREFBTyxDQUFDO0FBQUEsV0FBTSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUFBLEdBQUQsRUFBd0IsRUFBeEIsQ0FQWixFQVNLQSxxREFBTyxDQUFDO0FBQUEsV0FDTCxNQUFDLCtEQUFEO0FBQ0ksV0FBSyxFQUFDLG9CQURWO0FBRUksWUFBTSxFQUFDLFNBRlg7QUFHSSxnQkFBVSxFQUFFa0IsaUVBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESztBQUFBLEdBQUQsRUFNTCxFQU5LLENBVFosRUFrQktsQixxREFBTyxDQUFDO0FBQUEsV0FBTSxNQUFDLDBEQUFEO0FBQVksV0FBSyxFQUFDLGFBQWxCO0FBQWdDLFlBQU0sRUFBQyxTQUF2QztBQUFpRCxXQUFLLEVBQUVtQix1REFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQUEsR0FBRCxFQUFrRixFQUFsRixDQWxCWixDQURKO0FBeUJIOztHQS9EUXhCLFE7VUFNb0JJLDhELEVBZW1CYSxpRTs7O0tBckJ2Q2pCLFE7QUFpRU1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lYTNjNjFmZDY4ZjhmM2ZhY2UwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVhY3RcclxuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyB0aGlyZC1wYXJ0eVxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuLy8gYXBwbGljYXRpb25cclxuaW1wb3J0IHNob3BBcGkgZnJvbSAnLi4vLi4vYXBpL3Nob3AnO1xyXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcHJvZHVjdCc7XHJcbmltcG9ydCB7IHVzZURlZmVycmVkRGF0YSwgdXNlUHJvZHVjdENvbHVtbnMsIHVzZVByb2R1Y3RUYWJzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaG9va3MnO1xyXG5cclxuLy8gYmxvY2tzXHJcbmltcG9ydCBCbG9ja0Jhbm5lciBmcm9tICcuLi9ibG9ja3MvQmxvY2tCYW5uZXInO1xyXG5pbXBvcnQgQmxvY2tCcmFuZHMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrQnJhbmRzJztcclxuaW1wb3J0IEJsb2NrQ2F0ZWdvcmllcyBmcm9tICcuLi9ibG9ja3MvQmxvY2tDYXRlZ29yaWVzJztcclxuaW1wb3J0IEJsb2NrRmVhdHVyZXMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrRmVhdHVyZXMnO1xyXG5pbXBvcnQgQmxvY2tQb3N0cyBmcm9tICcuLi9ibG9ja3MvQmxvY2tQb3N0cyc7XHJcbmltcG9ydCBCbG9ja1Byb2R1Y3RDb2x1bW5zLCB7IEJsb2NrUHJvZHVjdENvbHVtbnNJdGVtIH0gZnJvbSAnLi4vYmxvY2tzL0Jsb2NrUHJvZHVjdENvbHVtbnMnO1xyXG5pbXBvcnQgQmxvY2tQcm9kdWN0cyBmcm9tICcuLi9ibG9ja3MvQmxvY2tQcm9kdWN0cyc7XHJcbmltcG9ydCBCbG9ja1Byb2R1Y3RzQ2Fyb3VzZWwgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrUHJvZHVjdHNDYXJvdXNlbCc7XHJcbmltcG9ydCBCbG9ja1NsaWRlU2hvdyBmcm9tICcuLi9ibG9ja3MvQmxvY2tTbGlkZVNob3cnO1xyXG5cclxuLy8gZGF0YSBzdHVic1xyXG5pbXBvcnQgZGF0YUJsb2dQb3N0cyBmcm9tICcuLi8uLi9kYXRhL2Jsb2dQb3N0cyc7XHJcbmltcG9ydCBkYXRhU2hvcEJsb2NrQ2F0ZWdvcmllcyBmcm9tICcuLi8uLi9kYXRhL3Nob3BCbG9ja0NhdGVnb3JpZXMnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vZGF0YS90aGVtZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXRhIHtcclxuICAgIGZlYXR1cmVkUHJvZHVjdHM/OiBJUHJvZHVjdFtdO1xyXG4gICAgYmVzdHNlbGxlcnM/OiBJUHJvZHVjdFtdO1xyXG4gICAgbGF0ZXN0UHJvZHVjdHM/OiBJUHJvZHVjdFtdO1xyXG4gICAgcHJvZHVjdENvbHVtbnM/OiBCbG9ja1Byb2R1Y3RDb2x1bW5zSXRlbVtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhvbWVQYWdlUHJvcHMge1xyXG4gICAgaW5pdERhdGE/OiBJbml0RGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHM6IEhvbWVQYWdlUHJvcHMpIHtcclxuICAgIGNvbnN0IHsgaW5pdERhdGEgfSA9IHByb3BzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmVhdHVyZWQgcHJvZHVjdHMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGZlYXR1cmVkUHJvZHVjdHMgPSB1c2VQcm9kdWN0VGFicyhcclxuICAgICAgICB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICAgICAgeyBpZDogMSwgbmFtZTogJ0FsbCcsIGNhdGVnb3J5U2x1ZzogdW5kZWZpbmVkIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDIsIG5hbWU6ICdQb3dlciBUb29scycsIGNhdGVnb3J5U2x1ZzogJ3Bvd2VyLXRvb2xzJyB9LFxyXG4gICAgICAgICAgICB7IGlkOiAzLCBuYW1lOiAnSGFuZCBUb29scycsIGNhdGVnb3J5U2x1ZzogJ2hhbmQtdG9vbHMnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6IDQsIG5hbWU6ICdQbHVtYmluZycsIGNhdGVnb3J5U2x1ZzogJ3BsdW1iaW5nJyB9LFxyXG4gICAgICAgIF0sIFtdKSxcclxuICAgICAgICAodGFiKSA9PiBzaG9wQXBpLmdldFBvcHVsYXJQcm9kdWN0cyh7IGxpbWl0OiAxMiwgY2F0ZWdvcnk6IHRhYi5jYXRlZ29yeVNsdWcgfSksXHJcbiAgICAgICAgaW5pdERhdGE/LmZlYXR1cmVkUHJvZHVjdHMsXHJcbiAgICApO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2R1Y3QgY29sdW1ucy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgY29sdW1ucyA9IGluaXREYXRhPy5wcm9kdWN0Q29sdW1ucyB8fCB1c2VQcm9kdWN0Q29sdW1ucyhcclxuICAgICAgICB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUb3AgUmF0ZWQgUHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiAoKSA9PiBzaG9wQXBpLmdldFRvcFJhdGVkUHJvZHVjdHMoeyBsaW1pdDogMyB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTcGVjaWFsIE9mZmVycycsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICgpID0+IHNob3BBcGkuZ2V0RGlzY291bnRlZFByb2R1Y3RzKHsgbGltaXQ6IDMgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQmVzdHNlbGxlcnMnLFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiAoKSA9PiBzaG9wQXBpLmdldFBvcHVsYXJQcm9kdWN0cyh7IGxpbWl0OiAzIH0pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sIFtdKSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntgSG9tZSBQYWdlIFR3byDigJQgJHt0aGVtZS5uYW1lfWB9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gPEJsb2NrU2xpZGVTaG93IC8+LCBbXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiA8QmxvY2tCcmFuZHMgLz4sIFtdKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCbG9ja0NhdGVnb3JpZXNcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBvcHVsYXIgQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiY29tcGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17ZGF0YVNob3BCbG9ja0NhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApLCBbXSl9XHJcblxyXG5cclxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gPEJsb2NrUG9zdHMgdGl0bGU9XCJMYXRlc3QgTmV3c1wiIGxheW91dD1cImdyaWQtbmxcIiBwb3N0cz17ZGF0YUJsb2dQb3N0c30gLz4sIFtdKX1cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=