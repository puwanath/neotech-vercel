webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/footer/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/footer/Footer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FooterContacts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterContacts */ "./src/components/footer/FooterContacts.tsx");
/* harmony import */ var _FooterNewsletter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterNewsletter */ "./src/components/footer/FooterNewsletter.tsx");
/* harmony import */ var _ToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToTop */ "./src/components/footer/ToTop.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/theme */ "./src/data/theme.ts");
/* harmony import */ var _shared_AppLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/AppLink */ "./src/components/shared/AppLink.tsx");
var _this = undefined,
    _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\footer\\Footer.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // application



 // third-party

 // data stubs




var Footer = function Footer() {
  var informationLinks = [{
    title: __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "topbar.aboutUs",
      defaultMessage: "About Us",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 18
      }
    }),
    url: '/about-us'
  }, {
    title: __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "topbar.privacy",
      defaultMessage: "Privacy Policy",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 18
      }
    }),
    url: '/privacy-policy'
  }, {
    title: __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "topbar.suppliers",
      defaultMessage: "Suppliers",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 18
      }
    }),
    url: '/products/suppliers'
  }, {
    title: __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "topbar.categories",
      defaultMessage: "Categories",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 18
      }
    }),
    url: '/categories'
  }, {
    title: __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "topbar.knowledge",
      defaultMessage: "Knowledge",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 18
      }
    }),
    url: '/knowledge'
  }, {
    title: __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "topbar.news",
      defaultMessage: "News",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 18
      }
    }),
    url: '/news'
  }, {
    title: __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
      id: "topbar.contacts",
      defaultMessage: "Contact us",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 18
      }
    }),
    url: '/contact-us'
  }];
  var linksList = informationLinks && informationLinks.map(function (item, index) {
    return __jsx("li", {
      key: index,
      className: "footer-links__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
      href: item.url,
      className: "footer-links__link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, item.title));
  });
  return __jsx("div", {
    className: "site-footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "site-footer__widgets",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-12 col-md-6 col-lg-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx(_FooterContacts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  })), __jsx("div", {
    className: "col-12 col-md-6 col-lg-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "site-footer__widget footer-links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx("h5", {
    className: "footer-links__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "topbar.information",
    defaultMessage: "Information",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 69
    }
  })), __jsx("ul", {
    className: "footer-links__list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, linksList))), __jsx("div", {
    className: "col-12 col-md-12 col-lg-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx(_FooterNewsletter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  })))), __jsx("div", {
    className: "site-footer__bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "site-footer__copyright",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "Powered by", ' ', __jsx("a", {
    href: "",
    rel: "noopener noreferrer",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, "Neo Tech"), ' ', "\u2014 Design by", ' ', __jsx("a", {
    href: _data_theme__WEBPACK_IMPORTED_MODULE_5__["default"].author.profile_url,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, _data_theme__WEBPACK_IMPORTED_MODULE_5__["default"].author.name)), __jsx("div", {
    className: "site-footer__payments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }))), __jsx(_ToTop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }));
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvRm9vdGVyLnRzeCJdLCJuYW1lcyI6WyJGb290ZXIiLCJpbmZvcm1hdGlvbkxpbmtzIiwidGl0bGUiLCJ1cmwiLCJsaW5rc0xpc3QiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0aGVtZSIsImF1dGhvciIsInByb2ZpbGVfdXJsIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0FBQ0E7QUFFQTs7QUFHQSxJQUFNQSxNQUF5QixHQUFHLFNBQTVCQSxNQUE0QixHQUFNO0FBQ3BDLE1BQU1DLGdCQUFnQixHQUFHLENBQ3JCO0FBQUVDLFNBQUssRUFBRSxNQUFDLDJEQUFEO0FBQWtCLFFBQUUsRUFBQyxnQkFBckI7QUFBc0Msb0JBQWMsRUFBQyxVQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVQ7QUFBNkVDLE9BQUcsRUFBRTtBQUFsRixHQURxQixFQUVyQjtBQUFFRCxTQUFLLEVBQUUsTUFBQywyREFBRDtBQUFrQixRQUFFLEVBQUMsZ0JBQXJCO0FBQXNDLG9CQUFjLEVBQUMsZ0JBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBVDtBQUFtRkMsT0FBRyxFQUFFO0FBQXhGLEdBRnFCLEVBR3JCO0FBQUVELFNBQUssRUFBRSxNQUFDLDJEQUFEO0FBQWtCLFFBQUUsRUFBQyxrQkFBckI7QUFBd0Msb0JBQWMsRUFBQyxXQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVQ7QUFBZ0ZDLE9BQUcsRUFBRTtBQUFyRixHQUhxQixFQUlyQjtBQUFFRCxTQUFLLEVBQUUsTUFBQywyREFBRDtBQUFrQixRQUFFLEVBQUMsbUJBQXJCO0FBQXlDLG9CQUFjLEVBQUMsWUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFUO0FB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QTtBQUFBLG1CQUVLLEdBRkwsRUFHSTtBQUFHLFFBQUksRUFBQyxFQUFSO0FBQVcsT0FBRyxFQUFDLHFCQUFmO0FBQXFDLFVBQU0sRUFBQyxRQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLEVBSUssR0FKTCxzQkFNSyxHQU5MLEVBT0k7QUFBRyxRQUFJLEVBQUVJLG1EQUFLLENBQUNDLE1BQU4sQ0FBYUMsV0FBdEI7QUFBbUMsVUFBTSxFQUFDLFFBQTFDO0FBQW1ELE9BQUcsRUFBQyxxQkFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRixtREFBSyxDQUFDQyxNQUFOLENBQWFFLElBRGxCLENBUEosQ0FESixFQVlJO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaSixDQXBCSixDQURKLEVBcUNJLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJDSixDQURKO0FBeUNILENBN0REOztLQUFNWCxNO0FBK0RTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy43ZmFjNjEzOGE5YzFhMGM0NDlkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBhcHBsaWNhdGlvblxuaW1wb3J0IEZvb3RlckNvbnRhY3RzIGZyb20gJy4vRm9vdGVyQ29udGFjdHMnO1xuaW1wb3J0IEZvb3Rlck5ld3NsZXR0ZXIgZnJvbSAnLi9Gb290ZXJOZXdzbGV0dGVyJztcbmltcG9ydCBUb1RvcCBmcm9tICcuL1RvVG9wJztcblxuLy8gdGhpcmQtcGFydHlcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuLy8gZGF0YSBzdHVic1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL2RhdGEvdGhlbWUnO1xuXG5pbXBvcnQgQXBwTGluayBmcm9tICcuLi9zaGFyZWQvQXBwTGluayc7XG5pbXBvcnQgeyBJTGluayB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvbWVudXMvbGluayc7XG5cbmNvbnN0IEZvb3RlcjogRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5mb3JtYXRpb25MaW5rcyA9IFtcbiAgICAgICAgeyB0aXRsZTogPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJ0b3BiYXIuYWJvdXRVc1wiIGRlZmF1bHRNZXNzYWdlPVwiQWJvdXQgVXNcIiAvPiwgdXJsOiAnL2Fib3V0LXVzJyB9LFxuICAgICAgICB7IHRpdGxlOiA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInRvcGJhci5wcml2YWN5XCIgZGVmYXVsdE1lc3NhZ2U9XCJQcml2YWN5IFBvbGljeVwiIC8+LCB1cmw6ICcvcHJpdmFjeS1wb2xpY3knIH0sXG4gICAgICAgIHsgdGl0bGU6IDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwidG9wYmFyLnN1cHBsaWVyc1wiIGRlZmF1bHRNZXNzYWdlPVwiU3VwcGxpZXJzXCIgLz4sIHVybDogJy9wcm9kdWN0cy9zdXBwbGllcnMnIH0sXG4gICAgICAgIHsgdGl0bGU6IDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwidG9wYmFyLmNhdGVnb3JpZXNcIiBkZWZhdWx0TWVzc2FnZT1cIkNhdGVnb3JpZXNcIiAvPiwgdXJsOiAnL2NhdGVnb3JpZXMnIH0sXG4gICAgICAgIHsgdGl0bGU6IDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwidG9wYmFyLmtub3dsZWRnZVwiIGRlZmF1bHRNZXNzYWdlPVwiS25vd2xlZGdlXCIgLz4sIHVybDogJy9rbm93bGVkZ2UnIH0sXG4gICAgICAgIHsgdGl0bGU6IDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwidG9wYmFyLm5ld3NcIiBkZWZhdWx0TWVzc2FnZT1cIk5ld3NcIiAvPiwgdXJsOiAnL25ld3MnIH0sXG4gICAgICAgIHsgdGl0bGU6IDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwidG9wYmFyLmNvbnRhY3RzXCIgZGVmYXVsdE1lc3NhZ2U9XCJDb250YWN0IHVzXCIgLz4sIHVybDogJy9jb250YWN0LXVzJyB9XG4gICAgXTtcblxuXG4gICAgY29uc3QgbGlua3NMaXN0ID0gaW5mb3JtYXRpb25MaW5rcyAmJiBpbmZvcm1hdGlvbkxpbmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZvb3Rlci1saW5rc19faXRlbVwiPlxuICAgICAgICAgICAgPEFwcExpbmsgaHJlZj17aXRlbS51cmx9IGNsYXNzTmFtZT1cImZvb3Rlci1saW5rc19fbGlua1wiPlxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgPC9BcHBMaW5rPlxuICAgICAgICA8L2xpPlxuICAgICkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWZvb3RlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtZm9vdGVyX193aWRnZXRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXJDb250YWN0cyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1mb290ZXJfX3dpZGdldCBmb290ZXItbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvb3Rlci1saW5rc19fdGl0bGVcIj48Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInRvcGJhci5pbmZvcm1hdGlvblwiIGRlZmF1bHRNZXNzYWdlPVwiSW5mb3JtYXRpb25cIiAvPjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItbGlua3NfX2xpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rc0xpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC0xMiBjb2wtbGctNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXJOZXdzbGV0dGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtZm9vdGVyX19ib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWZvb3Rlcl9fY29weXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQb3dlcmVkIGJ5XG4gICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5OZW8gVGVjaDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICDigJQgRGVzaWduIGJ5XG4gICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dGhlbWUuYXV0aG9yLnByb2ZpbGVfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoZW1lLmF1dGhvci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWZvb3Rlcl9fcGF5bWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxUb1RvcCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==