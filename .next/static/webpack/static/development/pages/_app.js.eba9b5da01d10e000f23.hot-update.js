webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/header/IndicatorCart.tsx":
/*!*************************************************!*\
  !*** ./src/components/header/IndicatorCart.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_AppLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/AppLink */ "./src/components/shared/AppLink.tsx");
/* harmony import */ var _shared_AsyncAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/AsyncAction */ "./src/components/shared/AsyncAction.tsx");
/* harmony import */ var _shared_CurrencyFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/CurrencyFormat */ "./src/components/shared/CurrencyFormat.tsx");
/* harmony import */ var _Indicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Indicator */ "./src/components/header/Indicator.tsx");
/* harmony import */ var _services_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/url */ "./src/services/url.ts");
/* harmony import */ var _store_cart_cartHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/cart/cartHooks */ "./src/store/cart/cartHooks.ts");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\header\\IndicatorCart.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party

 // application




var GetQoute = function GetQoute(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M13.3 8.8c0-.4-.3-.8-.7-.8H5c-.5 0-.8.4-.8.8s.3.7.8.7h7.6c.4 0 .7-.3.7-.7zM5 11c-.4 0-.7.3-.7.7 0 .4.3.7.7.7h4.6c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7H5z"
  }), __jsx("path", {
    d: "M6.7 18.1H4.2c-.8 0-1.5-.7-1.5-1.5v-13c0-.8.7-1.5 1.5-1.5h9.1c.8 0 1.5.7 1.5 1.5v4.5c0 .4.3.7.7.7.4 0 .7-.3.7-.7V3.6c0-1.6-1.3-3-3-3h-9c-1.6 0-3 1.3-3 3v13c0 1.6 1.3 3 3 3h2.5c.4 0 .7-.3.7-.7 0-.5-.3-.8-.7-.8z"
  }), __jsx("path", {
    d: "M17.6 11.3c-.9-.9-2.3-.9-3.1 0l-4.1 4.1c-.1.1-.1.2-.2.3l-.9 2.9c-.1.3 0 .5.2.7.1.1.3.2.5.2h.2l3-.8c.1 0 .2-.1.3-.2l4.1-4c.9-.9.9-2.3 0-3.2zm-5 6l-1.5.4.4-1.4 2.7-2.7 1 1-2.6 2.7zm3.9-3.9l-.1.1-1-1 .1-.1c.3-.3.8-.3 1 0 .3.3.3.7 0 1zM12.6 5.1H5c-.4 0-.7.3-.7.7s.2.7.7.7h7.6c.4 0 .7-.3.7-.7s-.3-.7-.7-.7z"
  }));
};

_c2 = GetQoute;
GetQoute.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var Cross10Svg = function Cross10Svg(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M8.8 8.8c-.4.4-1 .4-1.4 0L5 6.4 2.6 8.8c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L3.6 5 1.2 2.6c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L5 3.6l2.4-2.4c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L6.4 5l2.4 2.4c.4.4.4 1 0 1.4z"
  }));
};

_c3 = Cross10Svg;
Cross10Svg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
};





function IndicatorCart() {
  _s();

  var _this = this;

  var cart = Object(_store_cart_cartHooks__WEBPACK_IMPORTED_MODULE_7__["useCart"])();
  var cartRemoveItem = Object(_store_cart_cartHooks__WEBPACK_IMPORTED_MODULE_7__["useCartRemoveItem"])();
  var dropdown;
  var totals;

  if (cart.totals.length > 0) {
    totals = cart.totals.map(function (total, index) {
      return __jsx("tr", {
        key: index,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      }, __jsx("th", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }
      }, total.title), __jsx("td", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }, __jsx(_shared_CurrencyFormat__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: total.price,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }
      })));
    });
    totals = __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }, "Subtotal"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, __jsx(_shared_CurrencyFormat__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: cart.subtotal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }))), totals);
  }

  var items = cart.items.map(function (item) {
    var options;
    var image;

    if (item.options) {
      options = __jsx("ul", {
        className: "dropcart__product-options",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, item.options.map(function (option, index) {
        return __jsx("li", {
          key: index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }
        }, "".concat(option.optionTitle, ": ").concat(option.valueTitle));
      }));
    }

    if (item.product.images.length) {
      image = __jsx("div", {
        className: "product-image dropcart__product-image",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: _services_url__WEBPACK_IMPORTED_MODULE_6__["default"].product(item.product),
        className: "product-image__body",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }
      }, __jsx("img", {
        className: "product-image__img",
        src: item.product.images[0],
        alt: "",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }
      })));
    }

    var removeButton = __jsx(_shared_AsyncAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      action: function action() {
        return cartRemoveItem(item.id);
      },
      render: function render(_ref) {
        var run = _ref.run,
            loading = _ref.loading;
        var classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('dropcart__product-remove btn btn-light btn-sm btn-svg-icon', {
          'btn-loading': loading
        });
        return __jsx("button", {
          type: "button",
          onClick: run,
          className: classes,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }
        }, __jsx(Cross10Svg, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 29
          }
        }));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    });

    return __jsx("div", {
      key: item.id,
      className: "dropcart__product",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }
    }, image, __jsx("div", {
      className: "dropcart__product-info",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "dropcart__product-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }
    }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: _services_url__WEBPACK_IMPORTED_MODULE_6__["default"].product(item.product),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 25
      }
    }, item.product.name)), options, __jsx("div", {
      className: "dropcart__product-meta",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "dropcart__product-quantity",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, item.quantity))), removeButton);
  });

  if (cart.quantity) {
    dropdown = __jsx("div", {
      className: "dropcart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "dropcart__products-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, items), __jsx("div", {
      className: "dropcart__buttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: _services_url__WEBPACK_IMPORTED_MODULE_6__["default"].cart(),
      className: "btn btn-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 21
      }
    }, "View Cart"), __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: _services_url__WEBPACK_IMPORTED_MODULE_6__["default"].checkout(),
      className: "btn btn-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }
    }, "Checkout")));
  } else {
    dropdown = __jsx("div", {
      className: "dropcart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "dropcart__empty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, "Your cart is empty!"));
  }

  return __jsx(_Indicator__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: "/get-quote",
    dropdown: dropdown,
    value: cart.quantity,
    icon: __jsx(GetQoute, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 85
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  });
}

_s(IndicatorCart, "rGVUAPWHKOH2mVd2ix8OPiSu/y4=", false, function () {
  return [_store_cart_cartHooks__WEBPACK_IMPORTED_MODULE_7__["useCart"], _store_cart_cartHooks__WEBPACK_IMPORTED_MODULE_7__["useCartRemoveItem"]];
});

_c = IndicatorCart;
/* harmony default export */ __webpack_exports__["default"] = (IndicatorCart);

var _c, _c2, _c3;

$RefreshReg$(_c, "IndicatorCart");
$RefreshReg$(_c2, "GetQoute");
$RefreshReg$(_c3, "Cross10Svg");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSW5kaWNhdG9yQ2FydC50c3giXSwibmFtZXMiOlsiR2V0UW91dGUiLCJDcm9zczEwU3ZnIiwiSW5kaWNhdG9yQ2FydCIsImNhcnQiLCJ1c2VDYXJ0IiwiY2FydFJlbW92ZUl0ZW0iLCJ1c2VDYXJ0UmVtb3ZlSXRlbSIsImRyb3Bkb3duIiwidG90YWxzIiwibGVuZ3RoIiwibWFwIiwidG90YWwiLCJpbmRleCIsInRpdGxlIiwicHJpY2UiLCJzdWJ0b3RhbCIsIml0ZW1zIiwiaXRlbSIsIm9wdGlvbnMiLCJpbWFnZSIsIm9wdGlvbiIsIm9wdGlvblRpdGxlIiwidmFsdWVUaXRsZSIsInByb2R1Y3QiLCJpbWFnZXMiLCJ1cmwiLCJyZW1vdmVCdXR0b24iLCJpZCIsInJ1biIsImxvYWRpbmciLCJjbGFzc2VzIiwiY2xhc3NOYW1lcyIsIm5hbWUiLCJxdWFudGl0eSIsImNoZWNrb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBOztJQUNPQSxRLFlBQUFBLFE7Ozs7Ozs7Ozs7TUFBQUEsUTtBQUFBQSxROzs7OztJQUNBQyxVLFlBQUFBLFU7Ozs7OztNQUFBQSxVO0FBQUFBLFU7Ozs7O0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsYUFBVCxHQUF5QjtBQUFBOztBQUFBOztBQUNyQixNQUFNQyxJQUFJLEdBQUdDLHFFQUFPLEVBQXBCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHQywrRUFBaUIsRUFBeEM7QUFDQSxNQUFJQyxRQUFKO0FBQ0EsTUFBSUMsTUFBSjs7QUFFQSxNQUFJTCxJQUFJLENBQUNLLE1BQUwsQ0FBWUMsTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUN4QkQsVUFBTSxHQUFHTCxJQUFJLENBQUNLLE1BQUwsQ0FBWUUsR0FBWixDQUFnQixVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxhQUNyQjtBQUFJLFdB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UyxLQURMLENBREosRUFNSTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1REFBRDtBQUFTLFVBQUksRUFBRVMscURBQUcsQ0FBQ3RCLElBQUosRUFBZjtBQUEyQixlQUFTLEVBQUMsbUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFFSSxNQUFDLHVEQUFEO0FBQVMsVUFBSSxFQUFFc0IscURBQUcsQ0FBQ1MsUUFBSixFQUFmO0FBQStCLGVBQVMsRUFBQyxpQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixDQU5KLENBREo7QUFhSCxHQWRELE1BY087QUFDSDNCLFlBQVEsR0FDSjtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLENBREo7QUFPSDs7QUFFRCxTQUNJLE1BQUMsa0RBQUQ7QUFBVyxPQUFHLEVBQUMsWUFBZjtBQUE0QixZQUFRLEVBQUVBLFFBQXRDO0FBQWdELFNBQUssRUFBRUosSUFBSSxDQUFDOEIsUUFBNUQ7QUFBc0UsUUFBSSxFQUFFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESjtBQUdIOztHQWhIUS9CLGE7VUFDUUUsNkQsRUFDVUUsdUU7OztLQUZsQkosYTtBQWtITUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZWJhOWI1ZGEwMWQxMGUwMDBmMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlYWN0XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyB0aGlyZC1wYXJ0eVxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgQXBwTGluayBmcm9tICcuLi9zaGFyZWQvQXBwTGluayc7XG5pbXBvcnQgQXN5bmNBY3Rpb24gZnJvbSAnLi4vc2hhcmVkL0FzeW5jQWN0aW9uJztcbmltcG9ydCBHZXRRb3V0ZSBmcm9tICcuLi8uLi9zdmcvY2FydC0yMC5zdmcnO1xuaW1wb3J0IENyb3NzMTBTdmcgZnJvbSAnLi4vLi4vc3ZnL2Nyb3NzLTEwLnN2Zyc7XG5pbXBvcnQgQ3VycmVuY3lGb3JtYXQgZnJvbSAnLi4vc2hhcmVkL0N1cnJlbmN5Rm9ybWF0JztcbmltcG9ydCBJbmRpY2F0b3IgZnJvbSAnLi9JbmRpY2F0b3InO1xuaW1wb3J0IHVybCBmcm9tICcuLi8uLi9zZXJ2aWNlcy91cmwnO1xuaW1wb3J0IHsgdXNlQ2FydCwgdXNlQ2FydFJlbW92ZUl0ZW0gfSBmcm9tICcuLi8uLi9zdG9yZS9jYXJ0L2NhcnRIb29rcyc7XG5cbmZ1bmN0aW9uIEluZGljYXRvckNhcnQoKSB7XG4gICAgY29uc3QgY2FydCA9IHVzZUNhcnQoKTtcbiAgICBjb25zdCBjYXJ0UmVtb3ZlSXRlbSA9IHVzZUNhcnRSZW1vdmVJdGVtKCk7XG4gICAgbGV0IGRyb3Bkb3duO1xuICAgIGxldCB0b3RhbHM7XG5cbiAgICBpZiAoY2FydC50b3RhbHMubGVuZ3RoID4gMCkge1xuICAgICAgICB0b3RhbHMgPSBjYXJ0LnRvdGFscy5tYXAoKHRvdGFsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDx0aD57dG90YWwudGl0bGV9PC90aD5cbiAgICAgICAgICAgICAgICA8dGQ+PEN1cnJlbmN5Rm9ybWF0IHZhbHVlPXt0b3RhbC5wcmljZX0gLz48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKSk7XG5cbiAgICAgICAgdG90YWxzID0gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlN1YnRvdGFsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxDdXJyZW5jeUZvcm1hdCB2YWx1ZT17Y2FydC5zdWJ0b3RhbH0gLz48L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAge3RvdGFsc31cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgb3B0aW9ucztcbiAgICAgICAgbGV0IGltYWdlO1xuXG4gICAgICAgIGlmIChpdGVtLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSAoXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3BjYXJ0X19wcm9kdWN0LW9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ub3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57YCR7b3B0aW9uLm9wdGlvblRpdGxlfTogJHtvcHRpb24udmFsdWVUaXRsZX1gfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW0ucHJvZHVjdC5pbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpbWFnZSA9IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2UgZHJvcGNhcnRfX3Byb2R1Y3QtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPEFwcExpbmsgaHJlZj17dXJsLnByb2R1Y3QoaXRlbS5wcm9kdWN0KX0gY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZV9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlX19pbWdcIiBzcmM9e2l0ZW0ucHJvZHVjdC5pbWFnZXNbMF19IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQXBwTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZW1vdmVCdXR0b24gPSAoXG4gICAgICAgICAgICA8QXN5bmNBY3Rpb25cbiAgICAgICAgICAgICAgICBhY3Rpb249eygpID0+IGNhcnRSZW1vdmVJdGVtKGl0ZW0uaWQpfVxuICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgcnVuLCBsb2FkaW5nIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ2Ryb3BjYXJ0X19wcm9kdWN0LXJlbW92ZSBidG4gYnRuLWxpZ2h0IGJ0bi1zbSBidG4tc3ZnLWljb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYnRuLWxvYWRpbmcnOiBsb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cnVufSBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcm9zczEwU3ZnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT1cImRyb3BjYXJ0X19wcm9kdWN0XCI+XG4gICAgICAgICAgICAgICAge2ltYWdlfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGNhcnRfX3Byb2R1Y3QtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3BjYXJ0X19wcm9kdWN0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9e3VybC5wcm9kdWN0KGl0ZW0ucHJvZHVjdCl9PntpdGVtLnByb2R1Y3QubmFtZX08L0FwcExpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wY2FydF9fcHJvZHVjdC1tZXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkcm9wY2FydF9fcHJvZHVjdC1xdWFudGl0eVwiPntpdGVtLnF1YW50aXR5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7JyDDlyAnfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJkcm9wY2FydF9fcHJvZHVjdC1wcmljZVwiPjxDdXJyZW5jeUZvcm1hdCB2YWx1ZT17aXRlbS5wcmljZX0gLz48L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7cmVtb3ZlQnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSk7XG5cbiAgICBpZiAoY2FydC5xdWFudGl0eSkge1xuICAgICAgICBkcm9wZG93biA9IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGNhcnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3BjYXJ0X19wcm9kdWN0cy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtc31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wY2FydF9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8QXBwTGluayBocmVmPXt1cmwuY2FydCgpfSBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiPlZpZXcgQ2FydDwvQXBwTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPEFwcExpbmsgaHJlZj17dXJsLmNoZWNrb3V0KCl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkNoZWNrb3V0PC9BcHBMaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZHJvcGRvd24gPSAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3BjYXJ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wY2FydF9fZW1wdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgWW91ciBjYXJ0IGlzIGVtcHR5IVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEluZGljYXRvciB1cmw9XCIvZ2V0LXF1b3RlXCIgZHJvcGRvd249e2Ryb3Bkb3dufSB2YWx1ZT17Y2FydC5xdWFudGl0eX0gaWNvbj17PEdldFFvdXRlLz59IC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kaWNhdG9yQ2FydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=