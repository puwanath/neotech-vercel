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
    className: "about- typography",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYWJvdXQtdXMudHN4Il0sIm5hbWVzIjpbInNsaWNrU2V0dGluZ3MiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIlNpdGVQYWdlQWJvdXRVcyIsImRhdGEiLCJpbnRsIiwidXNlSW50bCIsInNlb190aXRsZSIsInNlb19kZXNjIiwiYmFja2dyb3VuZEltYWdlIiwibG9jYWxlIiwicGFnZW5hbWVfdGgiLCJwYWdlbmFtZV9lbiIsInJlbmRlckhUTUwiLCJwYWdlZGV0YWlsX3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUF5Q0EsSUFBTUEsYUFBYSxHQUFHO0FBQ2xCQyxNQUFJLEVBQUUsSUFEWTtBQUVsQkMsUUFBTSxFQUFFLEtBRlU7QUFHbEJDLFVBQVEsRUFBRSxJQUhRO0FBSWxCQyxPQUFLLEVBQUUsR0FKVztBQUtsQkMsY0FBWSxFQUFFLENBTEk7QUFNbEJDLGdCQUFjLEVBQUUsQ0FORTtBQU9sQkMsWUFBVSxFQUFFLENBQ1I7QUFDSUMsY0FBVSxFQUFFLEdBRGhCO0FBRUlDLFlBQVEsRUFBRTtBQUNOSixrQkFBWSxFQUFFLENBRFI7QUFFTkMsb0JBQWMsRUFBRTtBQUZWO0FBRmQsR0FEUSxFQVFSO0FBQ0lFLGNBQVUsRUFBRSxHQURoQjtBQUVJQyxZQUFRLEVBQUU7QUFDTkosa0JBQVksRUFBRSxDQURSO0FBRU5DLG9CQUFjLEVBQUU7QUFGVjtBQUZkLEdBUlE7QUFQTSxDQUF0Qjs7QUF5QkEsU0FBU0ksZUFBVCxPQUEyRjtBQUFBOztBQUFBLE1BQWhFQyxJQUFnRSxRQUFoRUEsSUFBZ0U7QUFFdkYsTUFBTUMsSUFBSSxHQUFHQywwREFBTyxFQUFwQjtBQUNBLFNBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBV0YsSUFBSSxDQUFDRyxTQUFoQixFQURKLEVBRUk7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUVILElBQUksQ0FBQ0ksUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxrQkFBVyxxQkFBakI7QUFBdUMsV0FBTyxFQUFDLGlCQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESixFQU9JO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQWlDLFNBQUssRUFBRTtBQUFFQyxxQkFBZSxFQUFFO0FBQW5CLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLO0FBQUksYUFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0NKLElBQUksQ0FBQ0ssTUFBTCxJQUFhLElBQWIsR0FBa0JOLElBQUksQ0FBQ08sV0FBdkIsR0FBbUNQLElBQUksQ0FBQ1EsV0FBMUUsQ0FETCxFQUVJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQ0Msd0RBQVUsQ0FBRVIsSUFBSSxDQUFDSyxNQUFMLElBQWEsSUFBYixHQUFrQk4sSUFBSSxDQUFDVSxhQUF2QixHQUFxQ1YsSUFBSSxDQUFDVSxhQUE1QyxDQURYLENBRkosQ0FESixDQURKLENBREosQ0FSSixDQURKO0FBd0JIOztHQTNCUVgsZTtVQUVRRyxrRDs7O0tBRlJILGU7O0FBNkJNQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWJvdXQtdXMuanMuODEwZmMwZGQzZTliMjA2MGUwNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlYWN0XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzLCBJbmZlckdldFNlcnZlclNpZGVQcm9wc1R5cGUgfSBmcm9tICduZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQXBwTGluayBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9BcHBMaW5rJztcbmltcG9ydCBTdHJveWthU2xpY2sgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvU3Ryb3lrYVNsaWNrJztcbmltcG9ydCB1cmwgZnJvbSAnLi4vc2VydmljZXMvdXJsJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9kYXRhL3RoZW1lJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UsdXNlSW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSAncmVhY3QtaHRtbC1wYXJzZXInOyBcblxuXG50eXBlIERhdGEgPSB7XG4gICAgcGFnZWlkPzogYW55O1xuICAgIHNsdWc/OiBhbnk7XG4gICAgcGFnZW5hbWVfdGg/OiBhbnk7XG4gICAgcGFnZW5hbWVfZW4/OiBhbnk7XG4gICAgcGFnZWRldGFpbF90aDogc3RyaW5nO1xuICAgIHBhZ2VkZXRhaWxfZW46IHN0cmluZztcbiAgICBwYWdlaW1nOiBzdHJpbmc7XG4gICAgcGFnZW5vaW1nOiBzdHJpbmc7XG4gICAgc2VvX3RpdGxlPzogYW55O1xuICAgIHNlb19kZXNjPzogYW55O1xuICAgIHNob3dtZW51PzogYW55O1xuICAgIHJhdGluZz86IGFueTtcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoe1xuICAgIHBhcmFtcyxcbiAgICByZXNcbn0pID0+IHtcbiAgICBjb25zdCBpZCA9ICdhYm91dC11cyc7XG4gICAgdHJ5e1xuICAgIFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCh0aGVtZS5hcGl1cmwrYC9ob21lP3NlbGVjdD1nZXRwYWdlc2J5c2x1ZyZzbHVnPSR7aWR9YCk7XG4gICAgICAgIGNvbnN0IGRhdGE6IERhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3BzIDogeyBkYXRhIH1cbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDRcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb3BzOiB7fVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmNvbnN0IHNsaWNrU2V0dGluZ3MgPSB7XG4gICAgZG90czogdHJ1ZSxcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA0MDAsXG4gICAgc2xpZGVzVG9TaG93OiAzLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAzNzksXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5cbmZ1bmN0aW9uIFNpdGVQYWdlQWJvdXRVcyh7IGRhdGEgfTogSW5mZXJHZXRTZXJ2ZXJTaWRlUHJvcHNUeXBlPHR5cGVvZiBnZXRTZXJ2ZXJTaWRlUHJvcHM+KSB7XG4gICAgXG4gICAgY29uc3QgaW50bCA9IHVzZUludGwoKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgYWJvdXQtdXNcIj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT57YCR7ZGF0YS5zZW9fdGl0bGV9YH08L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJEZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2RhdGEuc2VvX2Rlc2N9IC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cImNvbnRlbnQtc2NyaXB0LXR5cGVcIiBjb250ZW50PVwidGV4dC9qYXZhc2NyaXB0XCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC11c19faW1hZ2VcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCIvaW1hZ2VzL2Fib3V0dXMuanBnXCIpJyB9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC14bC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC11c19fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWJvdXQtdXNfX3RpdGxlXCI+eyhpbnRsLmxvY2FsZT09J3RoJz9kYXRhLnBhZ2VuYW1lX3RoOmRhdGEucGFnZW5hbWVfZW4pfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC0gdHlwb2dyYXBoeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJIVE1MKChpbnRsLmxvY2FsZT09J3RoJz9kYXRhLnBhZ2VkZXRhaWxfdGg6ZGF0YS5wYWdlZGV0YWlsX3RoKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaXRlUGFnZUFib3V0VXM7XG4iXSwic291cmNlUm9vdCI6IiJ9