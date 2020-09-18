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
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, "Home Page Two \u2014 ".concat(_data_theme__WEBPACK_IMPORTED_MODULE_10__["default"].name))), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 28
      }
    });
  }, []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return __jsx(_blocks_BlockBrands__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
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
        lineNumber: 73,
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
        lineNumber: 81,
        columnNumber: 28
      }
    });
  }, []));
}

_s(HomePage, "2AnqAX3twMTUs2xk9xuX2LH3kfY=", false, function () {
  return [_services_hooks__WEBPACK_IMPORTED_MODULE_3__["useProductColumns"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lL0hvbWVQYWdlLnRzeCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwiaW5pdERhdGEiLCJjb2x1bW5zIiwicHJvZHVjdENvbHVtbnMiLCJ1c2VQcm9kdWN0Q29sdW1ucyIsInVzZU1lbW8iLCJ0aXRsZSIsInNvdXJjZSIsInNob3BBcGkiLCJnZXRUb3BSYXRlZFByb2R1Y3RzIiwibGltaXQiLCJnZXREaXNjb3VudGVkUHJvZHVjdHMiLCJnZXRQb3B1bGFyUHJvZHVjdHMiLCJ0aGVtZSIsIm5hbWUiLCJkYXRhU2hvcEJsb2NrQ2F0ZWdvcmllcyIsImRhdGFCbG9nUG9zdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztDQUdBOztBQUNBO0NBSUE7O0FBRUE7QUFDQTtBQUVBO0NBTUE7O0FBQ0E7QUFDQTtBQUNBOztBQWFBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXdDO0FBQUE7O0FBQUE7O0FBQUEsTUFDNUJDLFFBRDRCLEdBQ2ZELEtBRGUsQ0FDNUJDLFFBRDRCO0FBR3BDOzs7O0FBR0EsTUFBTUMsT0FBTyxHQUFHLENBQUFELFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFRSxjQUFWLEtBQTRCQyx5RUFBaUIsQ0FDekRDLHFEQUFPLENBQUM7QUFBQSxXQUFNLENBQ1Y7QUFDSUMsV0FBSyxFQUFFLG9CQURYO0FBRUlDLFlBQU0sRUFBRTtBQUFBLGVBQU1DLGlEQUFPLENBQUNDLG1CQUFSLENBQTRCO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQTVCLENBQU47QUFBQTtBQUZaLEtBRFUsRUFLVjtBQUNJSixXQUFLLEVBQUUsZ0JBRFg7QUFFSUMsWUFBTSxFQUFFO0FBQUEsZUFBTUMsaURBQU8sQ0FBQ0cscUJBQVIsQ0FBOEI7QUFBRUQsZUFBSyxFQUFFO0FBQVQsU0FBOUIsQ0FBTjtBQUFBO0FBRlosS0FMVSxFQVNWO0FBQ0lKLFdBQUssRUFBRSxhQURYO0FBRUlDLFlBQU0sRUFBRTtBQUFBLGVBQU1DLGlEQUFPLENBQUNJLGtCQUFSLENBQTJCO0FBQUVGLGVBQUssRUFBRTtBQUFULFNBQTNCLENBQU47QUFBQTtBQUZaLEtBVFUsQ0FBTjtBQUFBLEdBQUQsRUFhSixFQWJJLENBRGtELENBQTdEO0FBaUJBLFNBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBQTJCRyxvREFBSyxDQUFDQyxJQUFqQyxFQURKLENBREosRUFLS1QscURBQU8sQ0FBQztBQUFBLFdBQU0sTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFBQSxHQUFELEVBQTJCLEVBQTNCLENBTFosRUFPS0EscURBQU8sQ0FBQztBQUFBLFdBQU0sTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFBQSxHQUFELEVBQXdCLEVBQXhCLENBUFosRUFTS0EscURBQU8sQ0FBQztBQUFBLFdBQ0wsTUFBQywrREFBRDtBQUNJLFdBQUssRUFBQyxvQkFEVjtBQUVJLFlBQU0sRUFBQyxTQUZYO0FBR0ksZ0JBQVUsRUFBRVUsaUVBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESztBQUFBLEdBQUQsRUFNTCxFQU5LLENBVFosRUFrQktWLHFEQUFPLENBQUM7QUFBQSxXQUFNLE1BQUMsMERBQUQ7QUFBWSxXQUFLLEVBQUMsYUFBbEI7QUFBZ0MsWUFBTSxFQUFDLFNBQXZDO0FBQWlELFdBQUssRUFBRVcsdURBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUFBLEdBQUQsRUFBa0YsRUFBbEYsQ0FsQlosQ0FESjtBQXlCSDs7R0FoRFFqQixRO1VBTXVDSyxpRTs7O0tBTnZDTCxRO0FBa0RNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuODA5ZjUzZTdjMDBmMjVmZTE0MjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlYWN0XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gdGhpcmQtcGFydHlcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbi8vIGFwcGxpY2F0aW9uXHJcbmltcG9ydCBzaG9wQXBpIGZyb20gJy4uLy4uL2FwaS9zaG9wJztcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Byb2R1Y3QnO1xyXG5pbXBvcnQgeyB1c2VEZWZlcnJlZERhdGEsIHVzZVByb2R1Y3RDb2x1bW5zLCB1c2VQcm9kdWN0VGFicyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hvb2tzJztcclxuXHJcbi8vIGJsb2Nrc1xyXG5pbXBvcnQgQmxvY2tCYW5uZXIgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrQmFubmVyJztcclxuaW1wb3J0IEJsb2NrQnJhbmRzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja0JyYW5kcyc7XHJcbmltcG9ydCBCbG9ja0NhdGVnb3JpZXMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrQ2F0ZWdvcmllcyc7XHJcbmltcG9ydCBCbG9ja0ZlYXR1cmVzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja0ZlYXR1cmVzJztcclxuaW1wb3J0IEJsb2NrUG9zdHMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrUG9zdHMnO1xyXG5pbXBvcnQgQmxvY2tQcm9kdWN0Q29sdW1ucywgeyBCbG9ja1Byb2R1Y3RDb2x1bW5zSXRlbSB9IGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1Byb2R1Y3RDb2x1bW5zJztcclxuaW1wb3J0IEJsb2NrUHJvZHVjdHMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrUHJvZHVjdHMnO1xyXG5pbXBvcnQgQmxvY2tQcm9kdWN0c0Nhcm91c2VsIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1Byb2R1Y3RzQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgQmxvY2tTbGlkZVNob3cgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrU2xpZGVTaG93JztcclxuXHJcbi8vIGRhdGEgc3R1YnNcclxuaW1wb3J0IGRhdGFCbG9nUG9zdHMgZnJvbSAnLi4vLi4vZGF0YS9ibG9nUG9zdHMnO1xyXG5pbXBvcnQgZGF0YVNob3BCbG9ja0NhdGVnb3JpZXMgZnJvbSAnLi4vLi4vZGF0YS9zaG9wQmxvY2tDYXRlZ29yaWVzJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL2RhdGEvdGhlbWUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbml0RGF0YSB7XHJcbiAgICBmZWF0dXJlZFByb2R1Y3RzPzogSVByb2R1Y3RbXTtcclxuICAgIGJlc3RzZWxsZXJzPzogSVByb2R1Y3RbXTtcclxuICAgIGxhdGVzdFByb2R1Y3RzPzogSVByb2R1Y3RbXTtcclxuICAgIHByb2R1Y3RDb2x1bW5zPzogQmxvY2tQcm9kdWN0Q29sdW1uc0l0ZW1bXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb21lUGFnZVByb3BzIHtcclxuICAgIGluaXREYXRhPzogSW5pdERhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzOiBIb21lUGFnZVByb3BzKSB7XHJcbiAgICBjb25zdCB7IGluaXREYXRhIH0gPSBwcm9wcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByb2R1Y3QgY29sdW1ucy5cclxuICAgICAqL1xyXG4gICAgY29uc3QgY29sdW1ucyA9IGluaXREYXRhPy5wcm9kdWN0Q29sdW1ucyB8fCB1c2VQcm9kdWN0Q29sdW1ucyhcclxuICAgICAgICB1c2VNZW1vKCgpID0+IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUb3AgUmF0ZWQgUHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiAoKSA9PiBzaG9wQXBpLmdldFRvcFJhdGVkUHJvZHVjdHMoeyBsaW1pdDogMyB9KSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTcGVjaWFsIE9mZmVycycsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICgpID0+IHNob3BBcGkuZ2V0RGlzY291bnRlZFByb2R1Y3RzKHsgbGltaXQ6IDMgfSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQmVzdHNlbGxlcnMnLFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiAoKSA9PiBzaG9wQXBpLmdldFBvcHVsYXJQcm9kdWN0cyh7IGxpbWl0OiAzIH0pLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sIFtdKSxcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntgSG9tZSBQYWdlIFR3byDigJQgJHt0aGVtZS5uYW1lfWB9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gPEJsb2NrU2xpZGVTaG93IC8+LCBbXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiA8QmxvY2tCcmFuZHMgLz4sIFtdKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCbG9ja0NhdGVnb3JpZXNcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBvcHVsYXIgQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiY29tcGFjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcz17ZGF0YVNob3BCbG9ja0NhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApLCBbXSl9XHJcblxyXG5cclxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gPEJsb2NrUG9zdHMgdGl0bGU9XCJMYXRlc3QgTmV3c1wiIGxheW91dD1cImdyaWQtbmxcIiBwb3N0cz17ZGF0YUJsb2dQb3N0c30gLz4sIFtdKX1cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=