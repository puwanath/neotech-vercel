webpackHotUpdate("static\\development\\pages\\about-us.js",{

/***/ "./src/pages/about-us.tsx":
/*!********************************!*\
  !*** ./src/pages/about-us.tsx ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\pages\\about-us.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react




var slickSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 379,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};

function SitePageAboutUs(_ref) {
  _s();

  var data = _ref.data;
  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  return __jsx("div", {
    className: "block about-us",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "".concat(data.seo_title)), __jsx("meta", {
    name: "Description",
    content: data.seo_desc,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }), __jsx("meta", {
    "http-equiv": "content-script-type",
    content: "text/javascript",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "about-us__image",
    style: {
      backgroundImage: 'url("/images/aboutus.jpg")'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-12 col-xl-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "about-us__body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: "about-us__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 30
    }
  }, intl.locale == 'th' ? data.pagename_th : data.pagename_en), __jsx("div", {
    className: "typography",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(intl.locale == 'th' ? data.pagedetail_th : data.pagedetail_th)))))));
}

_s(SitePageAboutUs, "rlSgSjbewJ1PrR/Ile8g/kr050o=", false, function () {
  return [react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"]];
});

_c = SitePageAboutUs;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (SitePageAboutUs);

var _c;

$RefreshReg$(_c, "SitePageAboutUs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYWJvdXQtdXMudHN4Il0sIm5hbWVzIjpbInNsaWNrU2V0dGluZ3MiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIlNpdGVQYWdlQWJvdXRVcyIsImRhdGEiLCJpbnRsIiwidXNlSW50bCIsInNlb190aXRsZSIsInNlb19kZXNjIiwiYmFja2dyb3VuZEltYWdlIiwibG9jYWxlIiwicGFnZW5hbWVfdGgiLCJwYWdlbmFtZV9lbiIsInJlbmRlckhUTUwiLCJwYWdlZGV0YWlsX3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUF5Q0EsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxNQUFJLEVBQUUsSUFEWTtBQUVsQkMsUUFBTSxFQUFFLEtBRlU7QUFHbEJDLFVBQVEsRUFBRSxJQUhRO0FBSWxCQyxPQUFLLEVBQUUsR0FKVztBQUtsQkMsY0FBWSxFQUFFLENBTEk7QUFNbEJDLGdCQUFjLEVBQUUsQ0FORTtBQU9sQkMsWUFBVSxFQUFFLENBQ1I7QUFDSUMsY0FBVSxFQUFFLEdBRGhCO0FBRUlDLFlBQVEsRUFBRTtBQUNOSixrQkFBWSxFQUFFLENBRFI7QUFFTkMsb0JBQWMsRUFBRTtBQUZWO0FBRmQsR0FEUSxFQVFSO0FBQ0lFLGNBQVUsRUFBRSxHQURoQjtBQUVJQyxZQUFRLEVBQUU7QUFDTkosa0JBQVksRUFBRSxDQURSO0FBRU5DLG9CQUFjLEVBQUU7QUFGVjtBQUZkLEdBUlE7QUFQTSxDQUF0Qjs7QUF5QkEsU0FBU0ksZUFBVCxPQUEyRjtBQUFBOztBQUFBLE1BQWhFQyxJQUFnRSxRQUFoRUEsSUFBZ0U7QUFFdkYsTUFBTUMsSUFBSSxHQUFHQywwREFBTyxFQUFwQjtBQUNBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBV0YsSUFBSSxDQUFDRyxTQUFoQixFQURKLEVBRUk7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUVILElBQUksQ0FBQ0ksUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxrQkFBVyxxQkFBakI7QUFBdUMsV0FBTyxFQUFDLGlCQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESixFQU9JO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQWlDLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFO0FBQW5CLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0NKLElBQUksQ0FBQ0ssTUFBTCxJQUFhLElBQWIsR0FBa0JOLElBQUksQ0FBQ08sV0FBdkIsR0FBbUNQLElBQUksQ0FBQ1EsV0FBMUUsQ0FETCxFQUVJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDQyx3REFBVSxDQUFFUixJQUFJLENBQUNLLE1BQUwsSUFBYSxJQUFiLEdBQWtCTixJQUFJLENBQUNVLGFBQXZCLEdBQXFDVixJQUFJLENBQUNVLGFBQTVDLENBRFgsQ0FGSixDQURKLENBREosQ0FESixDQVJKLENBREo7QUF3Qkg7O0dBM0JRWCxlO1VBRVFHLGtEOzs7S0FGUkgsZTs7QUE2Qk1BLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhYm91dC11cy5qcy5mOTExMzY3YzFiMWYyOTFmMDI5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVhY3RcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMsIEluZmVyR2V0U2VydmVyU2lkZVByb3BzVHlwZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBBcHBMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0FwcExpbmsnO1xuaW1wb3J0IFN0cm95a2FTbGljayBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9TdHJveWthU2xpY2snO1xuaW1wb3J0IHVybCBmcm9tICcuLi9zZXJ2aWNlcy91cmwnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2RhdGEvdGhlbWUnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSx1c2VJbnRsIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tICdyZWFjdC1odG1sLXBhcnNlcic7IFxuXG5cbnR5cGUgRGF0YSA9IHtcbiAgICBwYWdlaWQ/OiBhbnk7XG4gICAgc2x1Zz86IGFueTtcbiAgICBwYWdlbmFtZV90aD86IGFueTtcbiAgICBwYWdlbmFtZV9lbj86IGFueTtcbiAgICBwYWdlZGV0YWlsX3RoOiBzdHJpbmc7XG4gICAgcGFnZWRldGFpbF9lbjogc3RyaW5nO1xuICAgIHBhZ2VpbWc6IHN0cmluZztcbiAgICBwYWdlbm9pbWc6IHN0cmluZztcbiAgICBzZW9fdGl0bGU/OiBhbnk7XG4gICAgc2VvX2Rlc2M/OiBhbnk7XG4gICAgc2hvd21lbnU/OiBhbnk7XG4gICAgcmF0aW5nPzogYW55O1xufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7XG4gICAgcGFyYW1zLFxuICAgIHJlc1xufSkgPT4ge1xuICAgIGNvbnN0IGlkID0gJ2Fib3V0LXVzJztcbiAgICB0cnl7XG4gICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHRoZW1lLmFwaXVybCtgL2hvbWU/c2VsZWN0PWdldHBhZ2VzYnlzbHVnJnNsdWc9JHtpZH1gKTtcbiAgICAgICAgY29uc3QgZGF0YTogRGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHMgOiB7IGRhdGEgfVxuICAgICAgICB9O1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwNFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvcHM6IHt9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY29uc3Qgc2xpY2tTZXR0aW5ncyA9IHtcbiAgICBkb3RzOiB0cnVlLFxuICAgIGFycm93czogZmFsc2UsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDQwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDM3OSxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICBdLFxufTtcblxuZnVuY3Rpb24gU2l0ZVBhZ2VBYm91dFVzKHsgZGF0YSB9OiBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGU8dHlwZW9mIGdldFNlcnZlclNpZGVQcm9wcz4pIHtcbiAgICBcbiAgICBjb25zdCBpbnRsID0gdXNlSW50bCgpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBhYm91dC11c1wiPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPntgJHtkYXRhLnNlb190aXRsZX1gfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIkRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YS5zZW9fZGVzY30gLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiY29udGVudC1zY3JpcHQtdHlwZVwiIGNvbnRlbnQ9XCJ0ZXh0L2phdmFzY3JpcHRcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXVzX19pbWFnZVwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybChcIi9pbWFnZXMvYWJvdXR1cy5qcGdcIiknIH19IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXhsLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXVzX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhYm91dC11c19fdGl0bGVcIj57KGludGwubG9jYWxlPT0ndGgnP2RhdGEucGFnZW5hbWVfdGg6ZGF0YS5wYWdlbmFtZV9lbil9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cG9ncmFwaHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVySFRNTCgoaW50bC5sb2NhbGU9PSd0aCc/ZGF0YS5wYWdlZGV0YWlsX3RoOmRhdGEucGFnZWRldGFpbF90aCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2l0ZVBhZ2VBYm91dFVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==