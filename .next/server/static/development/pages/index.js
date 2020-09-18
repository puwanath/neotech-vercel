module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/components/blocks/BlockBrands.tsx":
/*!***********************************************!*\
  !*** ./src/components/blocks/BlockBrands.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlockBrands; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_AppLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/AppLink */ "./src/components/shared/AppLink.tsx");
/* harmony import */ var _shared_StroykaSlick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/StroykaSlick */ "./src/components/shared/StroykaSlick.tsx");
/* harmony import */ var _data_shopBrands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/shopBrands */ "./src/data/shopBrands.ts");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\blocks\\BlockBrands.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// react
 // application


 // data stubs


const slickSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToShow: 6,
  slidesToScroll: 5,
  responsive: [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 575,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
function BlockBrands() {
  const brandsList = _data_shopBrands__WEBPACK_IMPORTED_MODULE_3__["default"].map((brand, index) => __jsx("div", {
    key: index,
    className: "block-brands__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: brand.image,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }))));
  return __jsx("div", {
    className: "block block-brands",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "block-brands__slider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx(_shared_StroykaSlick__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, slickSettings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }), brandsList))));
}

/***/ }),

/***/ "./src/components/blocks/BlockSlideShow.tsx":
/*!**************************************************!*\
  !*** ./src/components/blocks/BlockSlideShow.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_departmentsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/departmentsService */ "./src/services/departmentsService.ts");
/* harmony import */ var _shared_StroykaSlick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/StroykaSlick */ "./src/components/shared/StroykaSlick.tsx");
/* harmony import */ var _store_locale_localeHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/locale/localeHooks */ "./src/store/locale/localeHooks.ts");
/* harmony import */ var _services_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/hooks */ "./src/services/hooks.ts");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\blocks\\BlockSlideShow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// react
 // third-party

 // application





const slickSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1
};
const slides = [{
  title: 'นีโอเทค คอมโพสิท',
  text: 'ผู้นำเข้าอุปกรณ์คอมโพสิต ทุกชนิดราคาย่อมเยาว์',
  image_classic: {
    ltr: '/images/slides/banner1500.jpg'
  },
  image_full: {
    ltr: '/images/slides/banner1500.jpg'
  },
  image_mobile: {
    ltr: '/images/slides/banner1500.jpg'
  }
} // {
//     title: '',
//     text: '',
//     image_classic: {
//         ltr: '/images/slides/bannerslide2.jpg',
//     },
//     image_full: {
//         ltr: '/images/slides/bannerslide2.jpg',
//     },
//     image_mobile: {
//         ltr: '/images/slides/bannerslide2.jpg',
//     },
// },
// {
//     title: 'Screwdrivers<br>Professional Tools',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
//     image_classic: {
//         ltr: '/images/slides/slide-2-ltr.jpg',
//         rtl: '/images/slides/slide-2-rtl.jpg',
//     },
//     image_full: {
//         ltr: '/images/slides/slide-2-full-ltr.jpg',
//         rtl: '/images/slides/slide-2-full-rtl.jpg',
//     },
//     image_mobile: {
//         ltr: '/images/slides/slide-2-mobile.jpg',
//         rtl: '/images/slides/slide-2-mobile.jpg',
//     },
// },
// {
//     title: 'One more<br>Unique header',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
//     image_classic: {
//         ltr: '/images/slides/slide-3-ltr.jpg',
//         rtl: '/images/slides/slide-3-rtl.jpg',
//     },
//     image_full: {
//         ltr: '/images/slides/slide-3-full-ltr.jpg',
//         rtl: '/images/slides/slide-3-full-rtl.jpg',
//     },
//     image_mobile: {
//         ltr: '/images/slides/slide-3-mobile.jpg',
//         rtl: '/images/slides/slide-3-mobile.jpg',
//     },
// },
];

function BlockSlideShow(props) {
  const {
    withDepartments = false
  } = props;
  const direction = Object(_store_locale_localeHooks__WEBPACK_IMPORTED_MODULE_4__["useDirection"])();
  const departmentsAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const isDesktop = Object(_services_hooks__WEBPACK_IMPORTED_MODULE_5__["useMedia"])('(min-width: 992px)');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => {
    _services_departmentsService__WEBPACK_IMPORTED_MODULE_2__["default"].area = null;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _services_departmentsService__WEBPACK_IMPORTED_MODULE_2__["default"].area = departmentsAreaRef.current;
  }, [isDesktop, departmentsAreaRef]);

  const setDepartmentsAreaRef = ref => {
    departmentsAreaRef.current = ref;

    if (isDesktop) {
      _services_departmentsService__WEBPACK_IMPORTED_MODULE_2__["default"].area = departmentsAreaRef.current;
    }
  };

  const blockClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('block-slideshow block', {
    'block-slideshow--layout--full mg-t-no': !withDepartments,
    'block-slideshow--layout--with-departments': withDepartments
  });
  const layoutClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('pd-x-no');
  const slidesList = slides.map((slide, index) => {
    const image = (withDepartments ? slide.image_classic : slide.image_full)[direction];
    return __jsx("div", {
      key: index,
      className: "block-slideshow__slide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "block-slideshow__slide-image block-slideshow__slide-image--desktop",
      style: {
        backgroundImage: `url(${image})`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "block-slideshow__slide-image block-slideshow__slide-image--mobile",
      style: {
        backgroundImage: `url(${slide.image_mobile[direction]})`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "block-slideshow__slide-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "block-slideshow__slide-title",
      dangerouslySetInnerHTML: {
        __html: slide.title
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "block-slideshow__slide-text",
      dangerouslySetInnerHTML: {
        __html: slide.text
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 25
      }
    }))));
  });
  return __jsx("div", {
    className: blockClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: layoutClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "block-slideshow__body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 25
    }
  }, __jsx(_shared_StroykaSlick__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, slickSettings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 29
    }
  }), slidesList))));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockSlideShow);

/***/ }),

/***/ "./src/components/home/HomePage.tsx":
/*!******************************************!*\
  !*** ./src/components/home/HomePage.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_BlockBrands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/BlockBrands */ "./src/components/blocks/BlockBrands.tsx");
/* harmony import */ var _blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/BlockSlideShow */ "./src/components/blocks/BlockSlideShow.tsx");
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/theme */ "./src/data/theme.ts");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\home\\HomePage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party

 // application


 // data stubs



function HomePage(props) {
  const {
    initData
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, `Home — ${_data_theme__WEBPACK_IMPORTED_MODULE_4__["default"].name}`)), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 28
    }
  }), []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_blocks_BlockBrands__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 28
    }
  }), []));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/components/shared/AppLink.tsx":
/*!*******************************************!*\
  !*** ./src/components/shared/AppLink.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\shared\\AppLink.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // third-party



function isLink(href) {
  return href !== undefined;
}

function isSimpleLink(href) {
  return href !== undefined && typeof href === 'string';
}

function isExternal(href) {
  return /^(https?:)?\/\//.test(href);
}

function AppLink(props) {
  const {
    href,
    children
  } = props,
        anchorProps = _objectWithoutProperties(props, ["href", "children"]);

  let link;

  if (!isLink(href) || isSimpleLink(href) && isExternal(href)) {
    link = __jsx("a", _extends({
      href: href
    }, anchorProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 16
      }
    }), children);
  } else {
    const linkProps = typeof href === 'string' ? {
      href
    } : href;
    link = __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, linkProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }), __jsx("a", _extends({}, anchorProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }), children));
  }

  return link;
}

/* harmony default export */ __webpack_exports__["default"] = (AppLink);

/***/ }),

/***/ "./src/components/shared/StroykaSlick.tsx":
/*!************************************************!*\
  !*** ./src/components/shared/StroykaSlick.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_locale_localeHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/locale/localeHooks */ "./src/store/locale/localeHooks.ts");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\shared\\StroykaSlick.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// react
 // third-party


 // application



function StroykaSlickInner(props) {
  const {
    children,
    forwardRef,
    beforeChange
  } = props,
        otherProps = _objectWithoutProperties(props, ["children", "forwardRef", "beforeChange"]);

  const direction = Object(_store_locale_localeHooks__WEBPACK_IMPORTED_MODULE_3__["useDirection"])();
  const slickRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const originalSlickNextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(() => {});
  const originalSlickPrevRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(() => {});
  const slickNextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(() => {});
  const slickPrevRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(() => {});

  const getSlidesCount = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(children).length;

  const getSlidesToShow = () => {
    const {
      responsive,
      slidesToShow
    } = props;
    let result = slidesToShow || 1;

    if (false) {}

    return result;
  }; // react-slick has a bug due to which it is initialized
  // with the incorrect position if the RTL property is true
  // this function returns the correct values


  const getStartPosition = () => {
    let {
      infinite
    } = props;
    infinite = infinite === true || infinite === undefined;

    if (direction === 'ltr') {
      return 0;
    }

    const slidesToShow = getSlidesToShow();
    const slidesCount = getSlidesCount();

    if (!infinite) {
      return Math.max(0, slidesCount - slidesToShow);
    }

    return (Math.ceil(slidesCount / slidesToShow) - 1) * slidesToShow;
  }; // returns indexes of active slides by currentIndex


  const getActiveSlides = currentIndex => {
    const slidesToShow = getSlidesToShow();
    const activeSlides = [];
    const slidesCount = getSlidesCount();
    const firstSlide = Math.max(0, Math.min(slidesCount - slidesToShow, currentIndex));
    const lastSlide = Math.min(slidesCount, firstSlide + slidesToShow);

    for (let i = firstSlide; i < lastSlide; i += 1) {
      activeSlides.push(i);
    }

    return activeSlides;
  };

  const {
    0: preventClick,
    1: setPreventClick
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: activeSlides,
    1: setActiveSlides
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getActiveSlides(getStartPosition()));

  const onMousedown = event => {
    const downX = event.screenX;
    const downY = event.screenY;
    let clickPrevented = false;

    const onMousemove = moveEvent => {
      if (clickPrevented) {
        return;
      } // Thank you Pythagoras.


      const distance = Math.sqrt(Math.abs(downX - moveEvent.screenX) ** 2 + Math.abs(downY - moveEvent.screenY) ** 2);

      if (moveEvent.cancelable && distance > 3) {
        moveEvent.preventDefault();
      }

      if (distance > 15) {
        clickPrevented = true;
        setPreventClick(clickPrevented);
      }
    };

    const onMouseup = () => {
      clickPrevented = false;
      setPreventClick(clickPrevented);
      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('mouseup', onMouseup);
    };

    document.addEventListener('mousemove', onMousemove);
    document.addEventListener('mouseup', onMouseup);
  };

  const setSlickRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(ref => {
    if (forwardRef) {
      if ('current' in forwardRef) {
        forwardRef.current = ref;
      } else {
        forwardRef(ref);
      }
    }

    if (ref && ref !== slickRef.current) {
      // react-slick forgot that if the RTL parameter is true,
      // then the next and prev methods need to be swapped, so let's do it yourself
      originalSlickNextRef.current = ref.slickNext;
      originalSlickPrevRef.current = ref.slickPrev; // eslint-disable-next-line no-param-reassign

      ref.slickNext = () => slickNextRef.current && slickNextRef.current(); // eslint-disable-next-line no-param-reassign


      ref.slickPrev = () => slickPrevRef.current && slickPrevRef.current();
    }

    slickRef.current = ref;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    slickNextRef.current = () => {
      originalSlickNextRef.current();
    };

    slickPrevRef.current = () => {
      originalSlickPrevRef.current();
    };
  }, [direction]); // If the slides have changed, we also need to change the active slides.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const timer = setTimeout(() => {
      setActiveSlides(getActiveSlides(getStartPosition()));
    }, 0);
    return () => {
      clearTimeout(timer);
    };
  }, [children]); // Resets position when changing direction.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (slickRef.current) {
      slickRef.current.slickGoTo(getStartPosition(), true);
    }
  }, [direction]);
  const beforeChangeWrapper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((oldIndex, newIndex) => {
    if (beforeChange) {
      beforeChange(oldIndex, newIndex);
    } // react-slick incorrectly adds the .slick-active class to slides
    // if the RTL parameter is true so we will do it ourselves


    setTimeout(() => {
      setActiveSlides(getActiveSlides(newIndex));
    }, 0);
  }, [beforeChange]);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('slick-prevent-click', {
    'slick-prevent-click--active': preventClick
  }); // we need to reverse slides if direction is RTL
  // because react-slick displays them in the wrong order

  let reversedChildren = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(children);
  reversedChildren = reversedChildren.map((slide, index) => {
    // react-slick incorrectly adds the .slick-active class to slides
    // if the RTL parameter is true so we will do it ourselves
    const slideClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'correct-slick-active': activeSlides.includes(index)
    });
    return __jsx("div", {
      key: index,
      dir: direction,
      className: slideClasses,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 13
      }
    }, slide);
  });
  return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
    __jsx("div", {
      className: classes,
      onMouseDown: onMousedown,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }
    }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, otherProps, {
      beforeChange: beforeChangeWrapper,
      ref: setSlickRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 13
      }
    }), reversedChildren))
  );
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {
  const {
    children
  } = props;
  return __jsx(StroykaSlickInner, _extends({
    forwardRef: ref
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }
  }), children);
}));

/***/ }),

/***/ "./src/data/shopBrands.ts":
/*!********************************!*\
  !*** ./src/data/shopBrands.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dataShopBrands = [{
  slug: 'diab',
  name: 'Diab',
  image: '/images/suppliers/diab.jpg'
}, {
  slug: 'first',
  name: 'First',
  image: '/images/suppliers/first.jpg'
}, {
  slug: 'nord',
  name: 'nord',
  image: '/images/suppliers/nord.jpg'
}, {
  slug: 'solvay',
  name: 'solvay',
  image: '/images/suppliers/solvay.jpg'
}, {
  slug: 'texonic',
  name: 'texonic',
  image: '/images/suppliers/texonic.jpg'
}, {
  slug: 'jushi',
  name: 'jushi',
  image: '/images/suppliers/jushi.jpg'
}];
/* harmony default export */ __webpack_exports__["default"] = (dataShopBrands);

/***/ }),

/***/ "./src/data/theme.ts":
/*!***************************!*\
  !*** ./src/data/theme.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Neotech Composite นีโอเทค คอมโพสิท ผู้นำเข้าอุปกรณ์คอมโพสิต ทุกชนิดราคาย่อมเยาว์',
  fullName: 'Neotech Composite นีโอเทค คอมโพสิท',
  url: 'https://neo.co.th',
  author: {
    name: 'Kapongdesign',
    profile_url: 'https://kapongdesign.com'
  },
  contacts: {
    address: '139 ซ. พระยาสุเรนทร์ 30 ถ.พระยาสุเรนทร์ แขวงบางชัน เขตคลองสามวา กรุงเทพ 10510',
    email: 'nattawut@neo.co.th',
    phone: '081-686-2922'
  },
  apiurl: 'http://127.0.0.1/neo.co.th/core-api/'
});

/***/ }),

/***/ "./src/i18n/index.ts":
/*!***************************!*\
  !*** ./src/i18n/index.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messages_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages/en.json */ "./src/i18n/messages/en.json");
var _messages_en_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./messages/en.json */ "./src/i18n/messages/en.json", 1);
/* harmony import */ var _messages_th_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages/th.json */ "./src/i18n/messages/th.json");
var _messages_th_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./messages/th.json */ "./src/i18n/messages/th.json", 1);
// application


const languages = [{
  locale: 'en',
  code: 'EN',
  name: 'English',
  icon: '/images/languages/uk.png',
  direction: 'ltr',
  messages: _messages_en_json__WEBPACK_IMPORTED_MODULE_0__
}, {
  locale: 'th',
  code: 'TH',
  name: 'Thailand',
  icon: '/images/languages/thailand.png',
  direction: 'ltr',
  messages: _messages_th_json__WEBPACK_IMPORTED_MODULE_1__
}];
/* harmony default export */ __webpack_exports__["default"] = (languages);

/***/ }),

/***/ "./src/i18n/messages/en.json":
/*!***********************************!*\
  !*** ./src/i18n/messages/en.json ***!
  \***********************************/
/*! exports provided: topbar.aboutUs, topbar.contacts, topbar.storeLocation, topbar.trackOrder, topbar.blog, topbar.myAccount, topbar.currency, topbar.language, topbar.privacy, topbar.suppliers, topbar.categories, topbar.knowledge, topbar.news, topbar.information, topbar.ouraddress, topbar.leaveusamessage, topbar.sendmessage, topbar.message, topbar.subject, topbar.email, topbar.yourname, topbar.website, topbar.lineid, topbar.fax, topbar.phone, topbar.newsletter, header.phoneLabel, header.phone, nav.home, Home, Products, Knowledge, Categories, Process, Application, News/Update, Suppliers, Abouts, Contacts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"topbar.aboutUs\":\"About Us\",\"topbar.contacts\":\"Contact us\",\"topbar.storeLocation\":\"Store Location\",\"topbar.trackOrder\":\"Track Order\",\"topbar.blog\":\"Blog\",\"topbar.myAccount\":\"My Account\",\"topbar.currency\":\"Currency\",\"topbar.language\":\"Language\",\"topbar.privacy\":\"Privacy Policy\",\"topbar.suppliers\":\"Suppliers\",\"topbar.categories\":\"Categories\",\"topbar.knowledge\":\"Knowledge\",\"topbar.news\":\"News\",\"topbar.information\":\"Information\",\"topbar.ouraddress\":\"Our Address\",\"topbar.leaveusamessage\":\"Leave us a Message\",\"topbar.sendmessage\":\"Send Message\",\"topbar.message\":\"Message\",\"topbar.subject\":\"Subject\",\"topbar.email\":\"Email\",\"topbar.yourname\":\"Your name\",\"topbar.website\":\"Website\",\"topbar.lineid\":\"Line ID\",\"topbar.fax\":\"Fax\",\"topbar.phone\":\"Phone\",\"topbar.newsletter\":\"Newsletter\",\"header.phoneLabel\":\"Customer Service\",\"header.phone\":\"(800) 060-0730\",\"nav.home\":\"Home\",\"Home\":\"Home\",\"Products\":\"Products\",\"Knowledge\":\"Knowledge\",\"Categories\":\"Categories\",\"Process\":\"Process\",\"Application\":\"Application\",\"News/Update\":\"News/Update\",\"Suppliers\":\"Suppliers\",\"Abouts\":\"About us\",\"Contacts\":\"Contact us\"}");

/***/ }),

/***/ "./src/i18n/messages/th.json":
/*!***********************************!*\
  !*** ./src/i18n/messages/th.json ***!
  \***********************************/
/*! exports provided: topbar.aboutUs, topbar.contacts, topbar.storeLocation, topbar.trackOrder, topbar.blog, topbar.myAccount, topbar.currency, topbar.language, topbar.privacy, topbar.suppliers, topbar.categories, topbar.knowledge, topbar.news, topbar.information, topbar.ouraddress, topbar.leaveusamessage, topbar.sendmessage, topbar.message, topbar.subject, topbar.email, topbar.yourname, topbar.website, topbar.lineid, topbar.fax, topbar.phone, topbar.newsletter, header.phoneLabel, header.phone, nav.home, Home, Products, Knowledge, Categories, Process, Application, News/Update, Suppliers, Abouts, Contacts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"topbar.aboutUs\":\"เกี่ยวกับเรา\",\"topbar.contacts\":\"ติดต่อเรา\",\"topbar.storeLocation\":\"Store Location\",\"topbar.trackOrder\":\"Track Order\",\"topbar.blog\":\"บทความ\",\"topbar.myAccount\":\"My Account\",\"topbar.currency\":\"Currency\",\"topbar.language\":\"เลือกภาษา\",\"topbar.privacy\":\"นโยบายความเป็นส่วนตัว\",\"topbar.suppliers\":\"ผู้ผลิต\",\"topbar.categories\":\"หมวดหมู่สินค้า\",\"topbar.knowledge\":\"สาระหน้ารู้\",\"topbar.news\":\"ข่าวสาร/อัพเดท\",\"topbar.information\":\"ข้อมูลเพิ่มเติม\",\"topbar.ouraddress\":\"ที่อยู่ของเรา\",\"topbar.leaveusamessage\":\"ฝากข้อความถึงเรา\",\"topbar.sendmessage\":\"ส่งข้อความ\",\"topbar.message\":\"ข้อความ\",\"topbar.subject\":\"หัวข้อ\",\"topbar.email\":\"อีเมล์\",\"topbar.yourname\":\"ชื่อ-สกุล\",\"topbar.website\":\"เว็บไซต์\",\"topbar.lineid\":\"ไลน์ไอดี\",\"topbar.fax\":\"แฟกซ์\",\"topbar.phone\":\"โทรศัพท์\",\"topbar.newsletter\":\"สมัครรับข่าวสาร\",\"header.phoneLabel\":\"สายด่วนบริการลูกค้า\",\"header.phone\":\"(081-686-2922)\",\"nav.home\":\"หน้าแรก\",\"Home\":\"หน้าแรก\",\"Products\":\"สินค้าของเรา\",\"Knowledge\":\"สาระหน้ารู้\",\"Categories\":\"หมวดหมู่สินค้า\",\"Process\":\"กระบวนการ\",\"Application\":\"การใช้งาน\",\"News/Update\":\"ข่าวสาร/อัพเดท\",\"Suppliers\":\"ผู้ผลิต\",\"Abouts\":\"เกี่ยวกับเรา\",\"Contacts\":\"ติดต่อเรา\"}");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home/HomePage */ "./src/components/home/HomePage.tsx");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party

// application


function Page(props) {
  const {
    initData
  } = props;
  return __jsx(_components_home_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    initData: initData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 12
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/services/departmentsService.ts":
/*!********************************************!*\
  !*** ./src/services/departmentsService.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DepartmentsService {
  constructor() {
    _defineProperty(this, "areaState", null);

    _defineProperty(this, "subscriber", null);
  }

  set area(value) {
    if (this.areaState === value) {
      return;
    }

    this.areaState = value;

    if (this.subscriber) {
      this.subscriber(this.area);
    }
  }

  get area() {
    return this.areaState;
  }

  subscribe(fn) {
    this.subscriber = fn;
    return () => {
      this.subscriber = null;
    };
  }

}

const departmentsService = new DepartmentsService();
/* harmony default export */ __webpack_exports__["default"] = (departmentsService);

/***/ }),

/***/ "./src/services/hooks.ts":
/*!*******************************!*\
  !*** ./src/services/hooks.ts ***!
  \*******************************/
/*! exports provided: useMedia, useDeferredData, useProductTabs, useProductColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMedia", function() { return useMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeferredData", function() { return useDeferredData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProductTabs", function() { return useProductTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProductColumns", function() { return useProductColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function useMedia(query) {
  if (true) {
    return false;
  }

  const media = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => window.matchMedia(query), [query]);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(media.matches);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const onChangeMedia = () => {
      setState(media.matches);
    };

    if (media.addEventListener) {
      media.addEventListener('change', onChangeMedia);
    } else {
      // noinspection JSDeprecatedSymbols
      media.addListener(onChangeMedia);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', onChangeMedia);
      } else {
        // noinspection JSDeprecatedSymbols
        media.removeListener(onChangeMedia);
      }
    };
  }, [media]);
  return state;
}
function useDeferredData(source, defaultData, initialData, deps = []) {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => ({
    isLoading: initialData === undefined,
    data: initialData || defaultData
  }));
  const memoizedSource = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(source, deps);
  const skipNextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initialData !== undefined);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (skipNextRef.current) {
      skipNextRef.current = false;
      return () => {};
    }

    let canceled = false;
    setState(curState => {
      if (!curState.isLoading) {
        return _objectSpread(_objectSpread({}, curState), {}, {
          isLoading: true
        });
      }

      return curState;
    });
    memoizedSource().then(data => {
      if (canceled) {
        return;
      }

      setState(() => ({
        isLoading: false,
        data
      }));
    });
    return () => {
      canceled = true;
    };
  }, [memoizedSource]);
  return state;
}
function useProductTabs(tabs, productsSource, initialData) {
  const {
    0: currentTabId,
    1: setCurrentTabId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const memoizedTabs = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => tabs.map(tab => _objectSpread(_objectSpread({}, tab), {}, {
    current: currentTabId === tab.id
  })), [tabs, currentTabId]);
  const currentTab = memoizedTabs.find(x => x.current);
  const products = useDeferredData(() => currentTab ? productsSource(currentTab) : Promise.resolve([]), [], initialData, [currentTab]);
  const handleTabChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(tab => {
    setCurrentTabId(tab.id);
  }, [setCurrentTabId]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => _objectSpread({
    tabs: memoizedTabs,
    handleTabChange
  }, products), [memoizedTabs, handleTabChange, products]);
}
function useProductColumns(columns) {
  const products = useDeferredData(() => Promise.all(columns.map(column => column.source())), [], undefined, [columns]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => columns.map((column, index) => _objectSpread(_objectSpread({}, column), {}, {
    products: products.data[index] || []
  })), [columns, products]);
}

/***/ }),

/***/ "./src/store/client.ts":
/*!*****************************!*\
  !*** ./src/store/client.ts ***!
  \*****************************/
/*! exports provided: applyClientState, useApplyClientState, withClientState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyClientState", function() { return applyClientState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApplyClientState", function() { return useApplyClientState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withClientState", function() { return withClientState; });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./src/store/hooks.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// third-party
// application

const APPLY_CLIENT_STATE = 'APPLY_CLIENT_STATE';

function isApplyClientStateAction(action) {
  return action.type === APPLY_CLIENT_STATE;
}

function applyClientState(state) {
  return {
    type: APPLY_CLIENT_STATE,
    state
  };
}
const useApplyClientState = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_0__["useAppAction"])(applyClientState);
function withClientState(reducer, namespace) {
  return (state, action) => {
    const childState = reducer(state, action);

    if (isApplyClientStateAction(action) && namespace in action.state) {
      return _objectSpread(_objectSpread({}, action.state[namespace]), {}, {
        stateFrom: 'client'
      });
    }

    if ('stateFrom' in childState) {
      return childState;
    }

    return _objectSpread(_objectSpread({}, childState), {}, {
      stateFrom: false ? undefined : 'server'
    });
  };
}

/***/ }),

/***/ "./src/store/hooks.ts":
/*!****************************!*\
  !*** ./src/store/hooks.ts ***!
  \****************************/
/*! exports provided: useAppAction, useAppSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppAction", function() { return useAppAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppSelector", function() { return useAppSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
// react
 // third-party

 // application

function useAppAction(action) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((...args) => dispatch(action(...args)), []);
}
function useAppSelector(selector) {
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(selector);
}

/***/ }),

/***/ "./src/store/locale/localeActionTypes.ts":
/*!***********************************************!*\
  !*** ./src/store/locale/localeActionTypes.ts ***!
  \***********************************************/
/*! exports provided: LOCALE_CHANGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALE_CHANGE", function() { return LOCALE_CHANGE; });
// application
const LOCALE_CHANGE = 'LOCALE_CHANGE';

/***/ }),

/***/ "./src/store/locale/localeActions.ts":
/*!*******************************************!*\
  !*** ./src/store/locale/localeActions.ts ***!
  \*******************************************/
/*! exports provided: localeChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeChange", function() { return localeChange; });
/* harmony import */ var _localeActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localeActionTypes */ "./src/store/locale/localeActionTypes.ts");
// application
 // eslint-disable-next-line import/prefer-default-export

function localeChange(locale) {
  return {
    type: _localeActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOCALE_CHANGE"],
    locale
  };
}

/***/ }),

/***/ "./src/store/locale/localeHooks.ts":
/*!*****************************************!*\
  !*** ./src/store/locale/localeHooks.ts ***!
  \*****************************************/
/*! exports provided: useLocale, useLanguage, useDirection, useMessages, useLocaleChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocale", function() { return useLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLanguage", function() { return useLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDirection", function() { return useDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMessages", function() { return useMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocaleChange", function() { return useLocaleChange; });
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../i18n */ "./src/i18n/index.ts");
/* harmony import */ var _localeReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localeReducer */ "./src/store/locale/localeReducer.ts");
/* harmony import */ var _localeActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localeActions */ "./src/store/locale/localeActions.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks */ "./src/store/hooks.ts");
// application





const localeSelector = state => state[_localeReducer__WEBPACK_IMPORTED_MODULE_1__["LOCALE_NAMESPACE"]].current;

const useLocale = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useAppSelector"])(localeSelector);
function useLanguage(selector) {
  return Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useAppSelector"])(state => {
    const locale = localeSelector(state);
    const language = _i18n__WEBPACK_IMPORTED_MODULE_0__["default"].find(x => x.locale === locale);

    if (!language) {
      throw Error(`Language with locale: ${locale} not found!`);
    }

    if (selector) {
      return selector(language);
    }

    return language;
  });
}
const useDirection = () => useLanguage(language => language.direction);
const useMessages = () => useLanguage(language => language.messages);
const useLocaleChange = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useAppAction"])(_localeActions__WEBPACK_IMPORTED_MODULE_2__["localeChange"]);

/***/ }),

/***/ "./src/store/locale/localeReducer.ts":
/*!*******************************************!*\
  !*** ./src/store/locale/localeReducer.ts ***!
  \*******************************************/
/*! exports provided: LOCALE_NAMESPACE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALE_NAMESPACE", function() { return LOCALE_NAMESPACE; });
/* harmony import */ var _localeActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localeActionTypes */ "./src/store/locale/localeActionTypes.ts");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client */ "./src/store/client.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application


const initialState = {
  current: 'en'
};
const LOCALE_NAMESPACE = 'locale';

function localeBaseReducer(state = initialState, action) {
  if (action.type === _localeActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOCALE_CHANGE"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: action.locale
    });
  }

  return state;
}

const localeReducer = Object(_client__WEBPACK_IMPORTED_MODULE_1__["withClientState"])(localeBaseReducer, LOCALE_NAMESPACE);
/* harmony default export */ __webpack_exports__["default"] = (localeReducer);

/***/ }),

/***/ 7:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\xampp\htdocs\neo.co.th\nextapp\src\pages\index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmxvY2tzL0Jsb2NrQnJhbmRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9ja3MvQmxvY2tTbGlkZVNob3cudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUvSG9tZVBhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9BcHBMaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvU3Ryb3lrYVNsaWNrLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9zaG9wQnJhbmRzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3RoZW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9pMThuL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2RlcGFydG1lbnRzU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvaG9va3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2NsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaG9va3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2xvY2FsZS9sb2NhbGVBY3Rpb25UeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbG9jYWxlL2xvY2FsZUFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2xvY2FsZS9sb2NhbGVIb29rcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbG9jYWxlL2xvY2FsZVJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJ1cmwiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwicHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiZXJyIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJwcm9jZXNzIiwiUmVhY3QiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInJlcGxhY2UiLCJwYXNzSHJlZiIsInZhbHVlIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsImRhdGEiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsInNsaWNrU2V0dGluZ3MiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIkJsb2NrQnJhbmRzIiwiYnJhbmRzTGlzdCIsImRhdGFTaG9wQnJhbmRzIiwibWFwIiwiYnJhbmQiLCJpbmRleCIsImltYWdlIiwic2xpZGVzIiwidGl0bGUiLCJ0ZXh0IiwiaW1hZ2VfY2xhc3NpYyIsImx0ciIsImltYWdlX2Z1bGwiLCJpbWFnZV9tb2JpbGUiLCJCbG9ja1NsaWRlU2hvdyIsIndpdGhEZXBhcnRtZW50cyIsImRpcmVjdGlvbiIsInVzZURpcmVjdGlvbiIsImRlcGFydG1lbnRzQXJlYVJlZiIsInVzZVJlZiIsImlzRGVza3RvcCIsInVzZU1lZGlhIiwidXNlRWZmZWN0IiwiZGVwYXJ0bWVudHNTZXJ2aWNlIiwiYXJlYSIsImN1cnJlbnQiLCJzZXREZXBhcnRtZW50c0FyZWFSZWYiLCJibG9ja0NsYXNzZXMiLCJjbGFzc05hbWVzIiwibGF5b3V0Q2xhc3NlcyIsInNsaWRlc0xpc3QiLCJzbGlkZSIsImJhY2tncm91bmRJbWFnZSIsIl9faHRtbCIsIkhvbWVQYWdlIiwiaW5pdERhdGEiLCJ0aGVtZSIsInVzZU1lbW8iLCJpc0xpbmsiLCJ1bmRlZmluZWQiLCJpc1NpbXBsZUxpbmsiLCJpc0V4dGVybmFsIiwidGVzdCIsIkFwcExpbmsiLCJhbmNob3JQcm9wcyIsImxpbmsiLCJsaW5rUHJvcHMiLCJTdHJveWthU2xpY2tJbm5lciIsImZvcndhcmRSZWYiLCJiZWZvcmVDaGFuZ2UiLCJvdGhlclByb3BzIiwic2xpY2tSZWYiLCJvcmlnaW5hbFNsaWNrTmV4dFJlZiIsIm9yaWdpbmFsU2xpY2tQcmV2UmVmIiwic2xpY2tOZXh0UmVmIiwic2xpY2tQcmV2UmVmIiwiZ2V0U2xpZGVzQ291bnQiLCJ0b0FycmF5IiwibGVuZ3RoIiwiZ2V0U2xpZGVzVG9TaG93IiwiZ2V0U3RhcnRQb3NpdGlvbiIsInNsaWRlc0NvdW50IiwiTWF0aCIsIm1heCIsImNlaWwiLCJnZXRBY3RpdmVTbGlkZXMiLCJjdXJyZW50SW5kZXgiLCJhY3RpdmVTbGlkZXMiLCJmaXJzdFNsaWRlIiwibWluIiwibGFzdFNsaWRlIiwiaSIsInByZXZlbnRDbGljayIsInNldFByZXZlbnRDbGljayIsInVzZVN0YXRlIiwic2V0QWN0aXZlU2xpZGVzIiwib25Nb3VzZWRvd24iLCJkb3duWCIsInNjcmVlblgiLCJkb3duWSIsInNjcmVlblkiLCJjbGlja1ByZXZlbnRlZCIsIm9uTW91c2Vtb3ZlIiwibW92ZUV2ZW50IiwiZGlzdGFuY2UiLCJzcXJ0IiwiYWJzIiwiY2FuY2VsYWJsZSIsInByZXZlbnREZWZhdWx0Iiwib25Nb3VzZXVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRTbGlja1JlZiIsInVzZUNhbGxiYWNrIiwic2xpY2tOZXh0Iiwic2xpY2tQcmV2IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2xpY2tHb1RvIiwiYmVmb3JlQ2hhbmdlV3JhcHBlciIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJjbGFzc2VzIiwicmV2ZXJzZWRDaGlsZHJlbiIsInNsaWRlQ2xhc3NlcyIsImluY2x1ZGVzIiwic2x1ZyIsImZ1bGxOYW1lIiwiYXV0aG9yIiwicHJvZmlsZV91cmwiLCJjb250YWN0cyIsImFkZHJlc3MiLCJlbWFpbCIsInBob25lIiwiYXBpdXJsIiwibGFuZ3VhZ2VzIiwibG9jYWxlIiwiY29kZSIsImljb24iLCJtZXNzYWdlcyIsImVuTWVzc2FnZXMiLCJ0aE1lc3NhZ2VzIiwiUGFnZSIsIkRlcGFydG1lbnRzU2VydmljZSIsImFyZWFTdGF0ZSIsInN1YnNjcmliZXIiLCJzdWJzY3JpYmUiLCJtZWRpYSIsIm1hdGNoTWVkaWEiLCJzdGF0ZSIsInNldFN0YXRlIiwibWF0Y2hlcyIsIm9uQ2hhbmdlTWVkaWEiLCJhZGRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwidXNlRGVmZXJyZWREYXRhIiwic291cmNlIiwiZGVmYXVsdERhdGEiLCJpbml0aWFsRGF0YSIsImRlcHMiLCJpc0xvYWRpbmciLCJtZW1vaXplZFNvdXJjZSIsInNraXBOZXh0UmVmIiwiY2FuY2VsZWQiLCJjdXJTdGF0ZSIsInRoZW4iLCJ1c2VQcm9kdWN0VGFicyIsInRhYnMiLCJwcm9kdWN0c1NvdXJjZSIsImN1cnJlbnRUYWJJZCIsInNldEN1cnJlbnRUYWJJZCIsIm1lbW9pemVkVGFicyIsInRhYiIsImlkIiwiY3VycmVudFRhYiIsImZpbmQiLCJ4IiwicHJvZHVjdHMiLCJoYW5kbGVUYWJDaGFuZ2UiLCJ1c2VQcm9kdWN0Q29sdW1ucyIsImNvbHVtbnMiLCJjb2x1bW4iLCJBUFBMWV9DTElFTlRfU1RBVEUiLCJpc0FwcGx5Q2xpZW50U3RhdGVBY3Rpb24iLCJhY3Rpb24iLCJ0eXBlIiwiYXBwbHlDbGllbnRTdGF0ZSIsInVzZUFwcGx5Q2xpZW50U3RhdGUiLCJ1c2VBcHBBY3Rpb24iLCJ3aXRoQ2xpZW50U3RhdGUiLCJyZWR1Y2VyIiwibmFtZXNwYWNlIiwiY2hpbGRTdGF0ZSIsInN0YXRlRnJvbSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhcmdzIiwidXNlQXBwU2VsZWN0b3IiLCJzZWxlY3RvciIsInVzZVNlbGVjdG9yIiwiTE9DQUxFX0NIQU5HRSIsImxvY2FsZUNoYW5nZSIsImxvY2FsZVNlbGVjdG9yIiwiTE9DQUxFX05BTUVTUEFDRSIsInVzZUxvY2FsZSIsInVzZUxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJFcnJvciIsInVzZU1lc3NhZ2VzIiwidXNlTG9jYWxlQ2hhbmdlIiwiaW5pdGlhbFN0YXRlIiwibG9jYWxlQmFzZVJlZHVjZXIiLCJsb2NhbGVSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtR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QVEsQ0FBQ1EsUUFBRCxDQUFmO0FBQ0g7O0FBRUQsV0FBT0EsUUFBUDtBQUNILEdBYm9CLENBQXJCO0FBY0g7QUFFTSxNQUFNMUssWUFBWSxHQUFHLE1BQU15SyxXQUFXLENBQUVDLFFBQUQsSUFBY0EsUUFBUSxDQUFDM0ssU0FBeEIsQ0FBdEM7QUFFQSxNQUFNNkssV0FBVyxHQUFHLE1BQU1ILFdBQVcsQ0FBRUMsUUFBRCxJQUFjQSxRQUFRLENBQUNuRSxRQUF4QixDQUFyQztBQUVBLE1BQU1zRSxlQUFlLEdBQUcsTUFBTXJCLDJEQUFZLENBQUNhLDJEQUFELENBQTFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ1A7QUFDQTtBQUVBO0FBRUEsTUFBTVMsWUFBeUIsR0FBRztBQUM5QnRLLFNBQU8sRUFBRTtBQURxQixDQUFsQztBQUlPLE1BQU0rSixnQkFBZ0IsR0FBRyxRQUF6Qjs7QUFFUCxTQUFTUSxpQkFBVCxDQUEyQjlELEtBQUssR0FBRzZELFlBQW5DLEVBQWlEMUIsTUFBakQsRUFBb0Y7QUFDaEYsTUFBSUEsTUFBTSxDQUFDQyxJQUFQLEtBQWdCZSxnRUFBcEIsRUFBbUM7QUFDL0IsMkNBQ09uRCxLQURQO0FBRUl6RyxhQUFPLEVBQUU0SSxNQUFNLENBQUNoRDtBQUZwQjtBQUlIOztBQUVELFNBQU9hLEtBQVA7QUFDSDs7QUFFRCxNQUFNK0QsYUFBYSxHQUFHdkIsK0RBQWUsQ0FBQ3NCLGlCQUFELEVBQW9CUixnQkFBcEIsQ0FBckM7QUFFZVMsNEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvLyByZWFjdFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gYXBwbGljYXRpb25cbmltcG9ydCBBcHBMaW5rIGZyb20gJy4uL3NoYXJlZC9BcHBMaW5rJztcbmltcG9ydCBTdHJveWthU2xpY2sgZnJvbSAnLi4vc2hhcmVkL1N0cm95a2FTbGljayc7XG5cbi8vIGRhdGEgc3R1YnNcbmltcG9ydCBkYXRhU2hvcEJyYW5kcyBmcm9tICcuLi8uLi9kYXRhL3Nob3BCcmFuZHMnO1xuXG5jb25zdCBzbGlja1NldHRpbmdzID0ge1xuICAgIGRvdHM6IGZhbHNlLFxuICAgIGFycm93czogZmFsc2UsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDQwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDYsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDUsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNTc1LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9ja0JyYW5kcygpIHtcbiAgICBjb25zdCBicmFuZHNMaXN0ID0gZGF0YVNob3BCcmFuZHMubWFwKChicmFuZCwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJibG9jay1icmFuZHNfX2l0ZW1cIj5cbiAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2JyYW5kLmltYWdlfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9BcHBMaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICApKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgYmxvY2stYnJhbmRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stYnJhbmRzX19zbGlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFN0cm95a2FTbGljayB7Li4uc2xpY2tTZXR0aW5nc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YnJhbmRzTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgPC9TdHJveWthU2xpY2s+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsIi8vIHJlYWN0XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbi8vIHRoaXJkLXBhcnR5XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuLy8gYXBwbGljYXRpb25cbmltcG9ydCBBcHBMaW5rIGZyb20gJy4uL3NoYXJlZC9BcHBMaW5rJztcbmltcG9ydCBkZXBhcnRtZW50c1NlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvZGVwYXJ0bWVudHNTZXJ2aWNlJztcbmltcG9ydCBTdHJveWthU2xpY2sgZnJvbSAnLi4vc2hhcmVkL1N0cm95a2FTbGljayc7XG5pbXBvcnQgeyB1c2VEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9zdG9yZS9sb2NhbGUvbG9jYWxlSG9va3MnO1xuaW1wb3J0IHsgdXNlTWVkaWEgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ob29rcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tTbGlkZVNob3dQcm9wcyB7XG4gICAgd2l0aERlcGFydG1lbnRzPzogYm9vbGVhbjtcbn1cblxuY29uc3Qgc2xpY2tTZXR0aW5ncyA9IHtcbiAgICBkb3RzOiB0cnVlLFxuICAgIGFycm93czogZmFsc2UsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDQwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG59O1xuXG5jb25zdCBzbGlkZXMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ+C4meC4teC5guC4reC5gOC4l+C4hCDguITguK3guKHguYLguJ7guKrguLTguJcnLFxuICAgICAgICB0ZXh0OiAn4Lic4Li54LmJ4LiZ4Liz4LmA4LiC4LmJ4Liy4Lit4Li44Lib4LiB4Lij4LiT4LmM4LiE4Lit4Lih4LmC4Lie4Liq4Li04LiVIOC4l+C4uOC4geC4iuC4meC4tOC4lOC4o+C4suC4hOC4suC4ouC5iOC4reC4oeC5gOC4ouC4suC4p+C5jCcsXG4gICAgICAgIGltYWdlX2NsYXNzaWM6IHtcbiAgICAgICAgICAgIGx0cjogJy9pbWFnZXMvc2xpZGVzL2Jhbm5lcjE1MDAuanBnJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2VfZnVsbDoge1xuICAgICAgICAgICAgbHRyOiAnL2ltYWdlcy9zbGlkZXMvYmFubmVyMTUwMC5qcGcnLFxuICAgICAgICB9LFxuICAgICAgICBpbWFnZV9tb2JpbGU6IHtcbiAgICAgICAgICAgIGx0cjogJy9pbWFnZXMvc2xpZGVzL2Jhbm5lcjE1MDAuanBnJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgICAgdGl0bGU6ICcnLFxuICAgIC8vICAgICB0ZXh0OiAnJyxcbiAgICAvLyAgICAgaW1hZ2VfY2xhc3NpYzoge1xuICAgIC8vICAgICAgICAgbHRyOiAnL2ltYWdlcy9zbGlkZXMvYmFubmVyc2xpZGUyLmpwZycsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGltYWdlX2Z1bGw6IHtcbiAgICAvLyAgICAgICAgIGx0cjogJy9pbWFnZXMvc2xpZGVzL2Jhbm5lcnNsaWRlMi5qcGcnLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBpbWFnZV9tb2JpbGU6IHtcbiAgICAvLyAgICAgICAgIGx0cjogJy9pbWFnZXMvc2xpZGVzL2Jhbm5lcnNsaWRlMi5qcGcnLFxuICAgIC8vICAgICB9LFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgICB0aXRsZTogJ1NjcmV3ZHJpdmVyczxicj5Qcm9mZXNzaW9uYWwgVG9vbHMnLFxuICAgIC8vICAgICB0ZXh0OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC48YnI+RXRpYW0gcGhhcmV0cmEgbGFvcmVldCBkdWkgcXVpcyBtb2xlc3RpZS4nLFxuICAgIC8vICAgICBpbWFnZV9jbGFzc2ljOiB7XG4gICAgLy8gICAgICAgICBsdHI6ICcvaW1hZ2VzL3NsaWRlcy9zbGlkZS0yLWx0ci5qcGcnLFxuICAgIC8vICAgICAgICAgcnRsOiAnL2ltYWdlcy9zbGlkZXMvc2xpZGUtMi1ydGwuanBnJyxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgaW1hZ2VfZnVsbDoge1xuICAgIC8vICAgICAgICAgbHRyOiAnL2ltYWdlcy9zbGlkZXMvc2xpZGUtMi1mdWxsLWx0ci5qcGcnLFxuICAgIC8vICAgICAgICAgcnRsOiAnL2ltYWdlcy9zbGlkZXMvc2xpZGUtMi1mdWxsLXJ0bC5qcGcnLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBpbWFnZV9tb2JpbGU6IHtcbiAgICAvLyAgICAgICAgIGx0cjogJy9pbWFnZXMvc2xpZGVzL3NsaWRlLTItbW9iaWxlLmpwZycsXG4gICAgLy8gICAgICAgICBydGw6ICcvaW1hZ2VzL3NsaWRlcy9zbGlkZS0yLW1vYmlsZS5qcGcnLFxuICAgIC8vICAgICB9LFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgICB0aXRsZTogJ09uZSBtb3JlPGJyPlVuaXF1ZSBoZWFkZXInLFxuICAgIC8vICAgICB0ZXh0OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC48YnI+RXRpYW0gcGhhcmV0cmEgbGFvcmVldCBkdWkgcXVpcyBtb2xlc3RpZS4nLFxuICAgIC8vICAgICBpbWFnZV9jbGFzc2ljOiB7XG4gICAgLy8gICAgICAgICBsdHI6ICcvaW1hZ2VzL3NsaWRlcy9zbGlkZS0zLWx0ci5qcGcnLFxuICAgIC8vICAgICAgICAgcnRsOiAnL2ltYWdlcy9zbGlkZXMvc2xpZGUtMy1ydGwuanBnJyxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgaW1hZ2VfZnVsbDoge1xuICAgIC8vICAgICAgICAgbHRyOiAnL2ltYWdlcy9zbGlkZXMvc2xpZGUtMy1mdWxsLWx0ci5qcGcnLFxuICAgIC8vICAgICAgICAgcnRsOiAnL2ltYWdlcy9zbGlkZXMvc2xpZGUtMy1mdWxsLXJ0bC5qcGcnLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBpbWFnZV9tb2JpbGU6IHtcbiAgICAvLyAgICAgICAgIGx0cjogJy9pbWFnZXMvc2xpZGVzL3NsaWRlLTMtbW9iaWxlLmpwZycsXG4gICAgLy8gICAgICAgICBydGw6ICcvaW1hZ2VzL3NsaWRlcy9zbGlkZS0zLW1vYmlsZS5qcGcnLFxuICAgIC8vICAgICB9LFxuICAgIC8vIH0sXG5dO1xuXG5mdW5jdGlvbiBCbG9ja1NsaWRlU2hvdyhwcm9wczogQmxvY2tTbGlkZVNob3dQcm9wcykge1xuICAgIGNvbnN0IHsgd2l0aERlcGFydG1lbnRzID0gZmFsc2UgfSA9IHByb3BzO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHVzZURpcmVjdGlvbigpO1xuICAgIGNvbnN0IGRlcGFydG1lbnRzQXJlYVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhKCcobWluLXdpZHRoOiA5OTJweCknKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiAoKSA9PiB7XG4gICAgICAgIGRlcGFydG1lbnRzU2VydmljZS5hcmVhID0gbnVsbDtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkZXBhcnRtZW50c1NlcnZpY2UuYXJlYSA9IGRlcGFydG1lbnRzQXJlYVJlZi5jdXJyZW50O1xuICAgIH0sIFtpc0Rlc2t0b3AsIGRlcGFydG1lbnRzQXJlYVJlZl0pO1xuXG4gICAgY29uc3Qgc2V0RGVwYXJ0bWVudHNBcmVhUmVmID0gKHJlZjogSFRNTERpdkVsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgICAgIGRlcGFydG1lbnRzQXJlYVJlZi5jdXJyZW50ID0gcmVmO1xuXG4gICAgICAgIGlmIChpc0Rlc2t0b3ApIHtcbiAgICAgICAgICAgIGRlcGFydG1lbnRzU2VydmljZS5hcmVhID0gZGVwYXJ0bWVudHNBcmVhUmVmLmN1cnJlbnQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYmxvY2tDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgJ2Jsb2NrLXNsaWRlc2hvdyBibG9jaycsXG4gICAgICAgIHtcbiAgICAgICAgICAgICdibG9jay1zbGlkZXNob3ctLWxheW91dC0tZnVsbCBtZy10LW5vJzogIXdpdGhEZXBhcnRtZW50cyxcbiAgICAgICAgICAgICdibG9jay1zbGlkZXNob3ctLWxheW91dC0td2l0aC1kZXBhcnRtZW50cyc6IHdpdGhEZXBhcnRtZW50cyxcbiAgICAgICAgfSxcbiAgICApO1xuXG4gICAgY29uc3QgbGF5b3V0Q2xhc3NlcyA9IGNsYXNzTmFtZXMoXG4gICAgICAgICdwZC14LW5vJyxcbiAgICApO1xuXG4gICAgY29uc3Qgc2xpZGVzTGlzdCA9IHNsaWRlcy5tYXAoKHNsaWRlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpbWFnZSA9ICh3aXRoRGVwYXJ0bWVudHMgPyBzbGlkZS5pbWFnZV9jbGFzc2ljIDogc2xpZGUuaW1hZ2VfZnVsbClbZGlyZWN0aW9uXTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJibG9jay1zbGlkZXNob3dfX3NsaWRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jay1zbGlkZXNob3dfX3NsaWRlLWltYWdlIGJsb2NrLXNsaWRlc2hvd19fc2xpZGUtaW1hZ2UtLWRlc2t0b3BcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2V9KWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrLXNsaWRlc2hvd19fc2xpZGUtaW1hZ2UgYmxvY2stc2xpZGVzaG93X19zbGlkZS1pbWFnZS0tbW9iaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3NsaWRlLmltYWdlX21vYmlsZVtkaXJlY3Rpb25dfSlgLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1zbGlkZXNob3dfX3NsaWRlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jay1zbGlkZXNob3dfX3NsaWRlLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNsaWRlLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrLXNsaWRlc2hvd19fc2xpZGUtdGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzbGlkZS50ZXh0IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stc2xpZGVzaG93X19zbGlkZS1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXBwTGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIj5TaG9wIE5vdzwvQXBwTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtibG9ja0NsYXNzZXN9PlxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHBkLXgtbm8gbWctdC1ub1wiPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyb3dcIj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtsYXlvdXRDbGFzc2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stc2xpZGVzaG93X19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0cm95a2FTbGljayB7Li4uc2xpY2tTZXR0aW5nc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzbGlkZXNMaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3Ryb3lrYVNsaWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1NsaWRlU2hvdztcbiIsIi8vIHJlYWN0XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gdGhpcmQtcGFydHlcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbi8vIGFwcGxpY2F0aW9uXHJcbmltcG9ydCBzaG9wQXBpIGZyb20gJy4uLy4uL2FwaS9zaG9wJztcclxuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Byb2R1Y3QnO1xyXG5pbXBvcnQgeyB1c2VEZWZlcnJlZERhdGEsIHVzZVByb2R1Y3RDb2x1bW5zLCB1c2VQcm9kdWN0VGFicyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hvb2tzJztcclxuXHJcbi8vIGJsb2Nrc1xyXG5pbXBvcnQgQmxvY2tCYW5uZXIgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrQmFubmVyJztcclxuaW1wb3J0IEJsb2NrQnJhbmRzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja0JyYW5kcyc7XHJcbmltcG9ydCBCbG9ja0NhdGVnb3JpZXMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrQ2F0ZWdvcmllcyc7XHJcbmltcG9ydCBCbG9ja0ZlYXR1cmVzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja0ZlYXR1cmVzJztcclxuaW1wb3J0IEJsb2NrUG9zdHMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrUG9zdHMnO1xyXG5pbXBvcnQgQmxvY2tQcm9kdWN0Q29sdW1ucywgeyBCbG9ja1Byb2R1Y3RDb2x1bW5zSXRlbSB9IGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1Byb2R1Y3RDb2x1bW5zJztcclxuaW1wb3J0IEJsb2NrUHJvZHVjdHMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrUHJvZHVjdHMnO1xyXG5pbXBvcnQgQmxvY2tQcm9kdWN0c0Nhcm91c2VsIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1Byb2R1Y3RzQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgQmxvY2tTbGlkZVNob3cgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrU2xpZGVTaG93JztcclxuXHJcbi8vIGRhdGEgc3R1YnNcclxuaW1wb3J0IGRhdGFCbG9nUG9zdHMgZnJvbSAnLi4vLi4vZGF0YS9ibG9nUG9zdHMnO1xyXG5pbXBvcnQgZGF0YVNob3BCbG9ja0NhdGVnb3JpZXMgZnJvbSAnLi4vLi4vZGF0YS9zaG9wQmxvY2tDYXRlZ29yaWVzJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL2RhdGEvdGhlbWUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbml0RGF0YSB7XHJcbiAgICBmZWF0dXJlZFByb2R1Y3RzPzogSVByb2R1Y3RbXTtcclxuICAgIGJlc3RzZWxsZXJzPzogSVByb2R1Y3RbXTtcclxuICAgIGxhdGVzdFByb2R1Y3RzPzogSVByb2R1Y3RbXTtcclxuICAgIHByb2R1Y3RDb2x1bW5zPzogQmxvY2tQcm9kdWN0Q29sdW1uc0l0ZW1bXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb21lUGFnZVByb3BzIHtcclxuICAgIGluaXREYXRhPzogSW5pdERhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzOiBIb21lUGFnZVByb3BzKSB7XHJcbiAgICBjb25zdCB7IGluaXREYXRhIH0gPSBwcm9wcztcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntgSG9tZSDigJQgJHt0aGVtZS5uYW1lfWB9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gPEJsb2NrU2xpZGVTaG93IC8+LCBbXSl9XHJcblxyXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiA8QmxvY2tCcmFuZHMgLz4sIFtdKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiB7dXNlTWVtbygoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8QmxvY2tDYXRlZ29yaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQb3B1bGFyIENhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImNvbXBhY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM9e2RhdGFTaG9wQmxvY2tDYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSwgW10pfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IDxCbG9ja1Bvc3RzIHRpdGxlPVwiTGF0ZXN0IE5ld3NcIiBsYXlvdXQ9XCJncmlkLW5sXCIgcG9zdHM9e2RhdGFCbG9nUG9zdHN9IC8+LCBbXSl9ICovfVxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gdGhpcmQtcGFydHlcbmltcG9ydCBMaW5rLCB7IExpbmtQcm9wcyB9IGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBJTGlua1Byb3BzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tZW51cy9saW5rLXByb3BzJztcblxuZXhwb3J0IHR5cGUgTGlua1R5cGUgPSBzdHJpbmcgfCBJTGlua1Byb3BzO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcExpbmtQcm9wcyBleHRlbmRzIFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50Pj4ge1xuICAgIGhyZWY/OiBMaW5rVHlwZTtcbiAgICB0YXJnZXQ/OiBSZWFjdC5BbmNob3JIVE1MQXR0cmlidXRlczxIVE1MQW5jaG9yRWxlbWVudD5bJ3RhcmdldCddO1xufVxuXG5mdW5jdGlvbiBpc0xpbmsoaHJlZjogTGlua1R5cGUgfCB1bmRlZmluZWQpOiBocmVmIGlzIExpbmtUeXBlIHtcbiAgICByZXR1cm4gaHJlZiAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTaW1wbGVMaW5rKGhyZWY6IExpbmtUeXBlIHwgdW5kZWZpbmVkKTogaHJlZiBpcyBzdHJpbmcge1xuICAgIHJldHVybiBocmVmICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnO1xufVxuZnVuY3Rpb24gaXNFeHRlcm5hbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gL14oaHR0cHM/Oik/XFwvXFwvLy50ZXN0KGhyZWYpO1xufVxuXG5mdW5jdGlvbiBBcHBMaW5rKHByb3BzOiBBcHBMaW5rUHJvcHMpIHtcbiAgICBjb25zdCB7IGhyZWYsIGNoaWxkcmVuLCAuLi5hbmNob3JQcm9wcyB9ID0gcHJvcHM7XG5cbiAgICBsZXQgbGluaztcblxuICAgIGlmICghaXNMaW5rKGhyZWYpIHx8IChpc1NpbXBsZUxpbmsoaHJlZikgJiYgaXNFeHRlcm5hbChocmVmKSkpIHtcbiAgICAgICAgbGluayA9IDxhIGhyZWY9e2hyZWZ9IHsuLi5hbmNob3JQcm9wc30+e2NoaWxkcmVufTwvYT47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbGlua1Byb3BzOiBMaW5rUHJvcHMgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyB7IGhyZWYgfSA6IGhyZWY7XG5cbiAgICAgICAgbGluayA9IChcbiAgICAgICAgICAgIDxMaW5rIHsuLi5saW5rUHJvcHN9PlxuICAgICAgICAgICAgICAgIDxhIHsuLi5hbmNob3JQcm9wc30+e2NoaWxkcmVufTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwTGluaztcbiIsIi8vIHJlYWN0XG5pbXBvcnQgUmVhY3QsIHtcbiAgICB1c2VDYWxsYmFjayxcbiAgICB1c2VFZmZlY3QsXG4gICAgdXNlUmVmLFxuICAgIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCc7XG5cbi8vIHRoaXJkLXBhcnR5XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBTbGljaywgeyBTZXR0aW5ncyB9IGZyb20gJ3JlYWN0LXNsaWNrJztcblxuLy8gYXBwbGljYXRpb25cbmltcG9ydCB7IHVzZURpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3N0b3JlL2xvY2FsZS9sb2NhbGVIb29rcyc7XG5cbmV4cG9ydCB0eXBlIFNsaWNrUHJvcHMgPSBTZXR0aW5ncztcblxuZXhwb3J0IHR5cGUgU3Ryb3lrYVNsaWNrUHJvcHMgPSBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxTbGlja1Byb3BzPjtcblxuZXhwb3J0IGludGVyZmFjZSBTdHJveWthU2xpY2tJbm5lclByb3BzIGV4dGVuZHMgU2xpY2tQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgICBmb3J3YXJkUmVmOiBSZWFjdC5SZWZDYWxsYmFjazxTbGljayB8IG51bGw+IHwgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxTbGljayB8IG51bGw+IHwgbnVsbDtcbn1cblxuZnVuY3Rpb24gU3Ryb3lrYVNsaWNrSW5uZXIocHJvcHM6IFN0cm95a2FTbGlja0lubmVyUHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBmb3J3YXJkUmVmLFxuICAgICAgICBiZWZvcmVDaGFuZ2UsXG4gICAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gcHJvcHM7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gdXNlRGlyZWN0aW9uKCk7XG4gICAgY29uc3Qgc2xpY2tSZWYgPSB1c2VSZWY8U2xpY2sgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBvcmlnaW5hbFNsaWNrTmV4dFJlZiA9IHVzZVJlZjwoKSA9PiB2b2lkPigoKSA9PiB7fSk7XG4gICAgY29uc3Qgb3JpZ2luYWxTbGlja1ByZXZSZWYgPSB1c2VSZWY8KCkgPT4gdm9pZD4oKCkgPT4ge30pO1xuICAgIGNvbnN0IHNsaWNrTmV4dFJlZiA9IHVzZVJlZjwoKSA9PiB2b2lkPigoKSA9PiB7fSk7XG4gICAgY29uc3Qgc2xpY2tQcmV2UmVmID0gdXNlUmVmPCgpID0+IHZvaWQ+KCgpID0+IHt9KTtcblxuICAgIGNvbnN0IGdldFNsaWRlc0NvdW50ID0gKCkgPT4gKFxuICAgICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5sZW5ndGhcbiAgICApO1xuXG4gICAgY29uc3QgZ2V0U2xpZGVzVG9TaG93ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNpdmUsIHNsaWRlc1RvU2hvdyB9ID0gcHJvcHM7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHNsaWRlc1RvU2hvdyB8fCAxO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIgJiYgcmVzcG9uc2l2ZSkge1xuICAgICAgICAgICAgcmVzcG9uc2l2ZS5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2V0dGluZ3MgPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgeyBtYXRjaGVzIH0gPSBtYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke29wdGlvbnMuYnJlYWtwb2ludH1weClgKTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIG9wdGlvbnMuc2V0dGluZ3Muc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9wdGlvbnMuc2V0dGluZ3Muc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLy8gcmVhY3Qtc2xpY2sgaGFzIGEgYnVnIGR1ZSB0byB3aGljaCBpdCBpcyBpbml0aWFsaXplZFxuICAgIC8vIHdpdGggdGhlIGluY29ycmVjdCBwb3NpdGlvbiBpZiB0aGUgUlRMIHByb3BlcnR5IGlzIHRydWVcbiAgICAvLyB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGNvcnJlY3QgdmFsdWVzXG4gICAgY29uc3QgZ2V0U3RhcnRQb3NpdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHsgaW5maW5pdGUgfSA9IHByb3BzO1xuXG4gICAgICAgIGluZmluaXRlID0gaW5maW5pdGUgPT09IHRydWUgfHwgaW5maW5pdGUgPT09IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbHRyJykge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzbGlkZXNUb1Nob3cgPSBnZXRTbGlkZXNUb1Nob3coKTtcbiAgICAgICAgY29uc3Qgc2xpZGVzQ291bnQgPSBnZXRTbGlkZXNDb3VudCgpO1xuXG4gICAgICAgIGlmICghaW5maW5pdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCBzbGlkZXNDb3VudCAtIHNsaWRlc1RvU2hvdyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKE1hdGguY2VpbChzbGlkZXNDb3VudCAvIHNsaWRlc1RvU2hvdykgLSAxKSAqIHNsaWRlc1RvU2hvdztcbiAgICB9O1xuXG4gICAgLy8gcmV0dXJucyBpbmRleGVzIG9mIGFjdGl2ZSBzbGlkZXMgYnkgY3VycmVudEluZGV4XG4gICAgY29uc3QgZ2V0QWN0aXZlU2xpZGVzID0gKGN1cnJlbnRJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHNsaWRlc1RvU2hvdyA9IGdldFNsaWRlc1RvU2hvdygpO1xuICAgICAgICBjb25zdCBhY3RpdmVTbGlkZXMgPSBbXTtcbiAgICAgICAgY29uc3Qgc2xpZGVzQ291bnQgPSBnZXRTbGlkZXNDb3VudCgpO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0U2xpZGUgPSBNYXRoLm1heChcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICBzbGlkZXNDb3VudCAtIHNsaWRlc1RvU2hvdyxcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBsYXN0U2xpZGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIHNsaWRlc0NvdW50LFxuICAgICAgICAgICAgZmlyc3RTbGlkZSArIHNsaWRlc1RvU2hvdyxcbiAgICAgICAgKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gZmlyc3RTbGlkZTsgaSA8IGxhc3RTbGlkZTsgaSArPSAxKSB7XG4gICAgICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVTbGlkZXM7XG4gICAgfTtcblxuICAgIGNvbnN0IFtwcmV2ZW50Q2xpY2ssIHNldFByZXZlbnRDbGlja10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2FjdGl2ZVNsaWRlcywgc2V0QWN0aXZlU2xpZGVzXSA9IHVzZVN0YXRlKGdldEFjdGl2ZVNsaWRlcyhnZXRTdGFydFBvc2l0aW9uKCkpKTtcblxuICAgIGNvbnN0IG9uTW91c2Vkb3duID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCBkb3duWCA9IGV2ZW50LnNjcmVlblg7XG4gICAgICAgIGNvbnN0IGRvd25ZID0gZXZlbnQuc2NyZWVuWTtcbiAgICAgICAgbGV0IGNsaWNrUHJldmVudGVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgb25Nb3VzZW1vdmUgPSAobW92ZUV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2xpY2tQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRoYW5rIHlvdSBQeXRoYWdvcmFzLlxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgKE1hdGguYWJzKGRvd25YIC0gbW92ZUV2ZW50LnNjcmVlblgpICoqIDIpXG4gICAgICAgICAgICAgICAgKyAoTWF0aC5hYnMoZG93blkgLSBtb3ZlRXZlbnQuc2NyZWVuWSkgKiogMiksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAobW92ZUV2ZW50LmNhbmNlbGFibGUgJiYgZGlzdGFuY2UgPiAzKSB7XG4gICAgICAgICAgICAgICAgbW92ZUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IDE1KSB7XG4gICAgICAgICAgICAgICAgY2xpY2tQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFByZXZlbnRDbGljayhjbGlja1ByZXZlbnRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uTW91c2V1cCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNsaWNrUHJldmVudGVkID0gZmFsc2U7XG4gICAgICAgICAgICBzZXRQcmV2ZW50Q2xpY2soY2xpY2tQcmV2ZW50ZWQpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlbW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZXVwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlbW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNldXApO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRTbGlja1JlZjogUmVhY3QuUmVmQ2FsbGJhY2s8U2xpY2s+ID0gdXNlQ2FsbGJhY2soKHJlZikgPT4ge1xuICAgICAgICBpZiAoZm9yd2FyZFJlZikge1xuICAgICAgICAgICAgaWYgKCdjdXJyZW50JyBpbiBmb3J3YXJkUmVmKSB7XG4gICAgICAgICAgICAgICAgZm9yd2FyZFJlZi5jdXJyZW50ID0gcmVmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3J3YXJkUmVmKHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVmICYmIHJlZiAhPT0gc2xpY2tSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgLy8gcmVhY3Qtc2xpY2sgZm9yZ290IHRoYXQgaWYgdGhlIFJUTCBwYXJhbWV0ZXIgaXMgdHJ1ZSxcbiAgICAgICAgICAgIC8vIHRoZW4gdGhlIG5leHQgYW5kIHByZXYgbWV0aG9kcyBuZWVkIHRvIGJlIHN3YXBwZWQsIHNvIGxldCdzIGRvIGl0IHlvdXJzZWxmXG4gICAgICAgICAgICBvcmlnaW5hbFNsaWNrTmV4dFJlZi5jdXJyZW50ID0gcmVmLnNsaWNrTmV4dDtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpY2tQcmV2UmVmLmN1cnJlbnQgPSByZWYuc2xpY2tQcmV2O1xuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIHJlZi5zbGlja05leHQgPSAoKSA9PiBzbGlja05leHRSZWYuY3VycmVudCAmJiBzbGlja05leHRSZWYuY3VycmVudCgpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICByZWYuc2xpY2tQcmV2ID0gKCkgPT4gc2xpY2tQcmV2UmVmLmN1cnJlbnQgJiYgc2xpY2tQcmV2UmVmLmN1cnJlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNsaWNrUmVmLmN1cnJlbnQgPSByZWY7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2xpY2tOZXh0UmVmLmN1cnJlbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWNrTmV4dFJlZi5jdXJyZW50KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc2xpY2tQcmV2UmVmLmN1cnJlbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWNrUHJldlJlZi5jdXJyZW50KCk7XG4gICAgICAgIH07XG4gICAgfSwgW2RpcmVjdGlvbl0pO1xuXG4gICAgLy8gSWYgdGhlIHNsaWRlcyBoYXZlIGNoYW5nZWQsIHdlIGFsc28gbmVlZCB0byBjaGFuZ2UgdGhlIGFjdGl2ZSBzbGlkZXMuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldEFjdGl2ZVNsaWRlcyhnZXRBY3RpdmVTbGlkZXMoZ2V0U3RhcnRQb3NpdGlvbigpKSk7XG4gICAgICAgIH0sIDApO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICB9O1xuICAgIH0sIFtjaGlsZHJlbl0pO1xuXG4gICAgLy8gUmVzZXRzIHBvc2l0aW9uIHdoZW4gY2hhbmdpbmcgZGlyZWN0aW9uLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzbGlja1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzbGlja1JlZi5jdXJyZW50LnNsaWNrR29UbyhnZXRTdGFydFBvc2l0aW9uKCksIHRydWUpO1xuICAgICAgICB9XG4gICAgfSwgW2RpcmVjdGlvbl0pO1xuXG4gICAgY29uc3QgYmVmb3JlQ2hhbmdlV3JhcHBlcjogU2xpY2tQcm9wc1snYmVmb3JlQ2hhbmdlJ10gPSB1c2VDYWxsYmFjaygob2xkSW5kZXgsIG5ld0luZGV4KSA9PiB7XG4gICAgICAgIGlmIChiZWZvcmVDaGFuZ2UpIHtcbiAgICAgICAgICAgIGJlZm9yZUNoYW5nZShvbGRJbmRleCwgbmV3SW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVhY3Qtc2xpY2sgaW5jb3JyZWN0bHkgYWRkcyB0aGUgLnNsaWNrLWFjdGl2ZSBjbGFzcyB0byBzbGlkZXNcbiAgICAgICAgLy8gaWYgdGhlIFJUTCBwYXJhbWV0ZXIgaXMgdHJ1ZSBzbyB3ZSB3aWxsIGRvIGl0IG91cnNlbHZlc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldEFjdGl2ZVNsaWRlcyhnZXRBY3RpdmVTbGlkZXMobmV3SW5kZXgpKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfSwgW2JlZm9yZUNoYW5nZV0pO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoJ3NsaWNrLXByZXZlbnQtY2xpY2snLCB7XG4gICAgICAgICdzbGljay1wcmV2ZW50LWNsaWNrLS1hY3RpdmUnOiBwcmV2ZW50Q2xpY2ssXG4gICAgfSk7XG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJldmVyc2Ugc2xpZGVzIGlmIGRpcmVjdGlvbiBpcyBSVExcbiAgICAvLyBiZWNhdXNlIHJlYWN0LXNsaWNrIGRpc3BsYXlzIHRoZW0gaW4gdGhlIHdyb25nIG9yZGVyXG4gICAgbGV0IHJldmVyc2VkQ2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcblxuXG4gICAgcmV2ZXJzZWRDaGlsZHJlbiA9IHJldmVyc2VkQ2hpbGRyZW4ubWFwKChzbGlkZSwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gcmVhY3Qtc2xpY2sgaW5jb3JyZWN0bHkgYWRkcyB0aGUgLnNsaWNrLWFjdGl2ZSBjbGFzcyB0byBzbGlkZXNcbiAgICAgICAgLy8gaWYgdGhlIFJUTCBwYXJhbWV0ZXIgaXMgdHJ1ZSBzbyB3ZSB3aWxsIGRvIGl0IG91cnNlbHZlc1xuICAgICAgICBjb25zdCBzbGlkZUNsYXNzZXMgPSBjbGFzc05hbWVzKHsgJ2NvcnJlY3Qtc2xpY2stYWN0aXZlJzogYWN0aXZlU2xpZGVzLmluY2x1ZGVzKGluZGV4KSB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBkaXI9e2RpcmVjdGlvbn0gY2xhc3NOYW1lPXtzbGlkZUNsYXNzZXN9PlxuICAgICAgICAgICAgICAgIHtzbGlkZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9uc1xuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17b25Nb3VzZWRvd259XG4gICAgICAgID5cbiAgICAgICAgICAgIDxTbGljayB7Li4ub3RoZXJQcm9wc30gYmVmb3JlQ2hhbmdlPXtiZWZvcmVDaGFuZ2VXcmFwcGVyfSByZWY9e3NldFNsaWNrUmVmfT5cbiAgICAgICAgICAgICAgICB7cmV2ZXJzZWRDaGlsZHJlbn1cbiAgICAgICAgICAgIDwvU2xpY2s+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWY8U2xpY2ssIFN0cm95a2FTbGlja1Byb3BzPihcbiAgICAocHJvcHMsIHJlZikgPT4ge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN0cm95a2FTbGlja0lubmVyIGZvcndhcmRSZWY9e3JlZn0gey4uLnByb3BzfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1N0cm95a2FTbGlja0lubmVyPlxuICAgICAgICApO1xuICAgIH0sXG4pO1xuIiwiaW1wb3J0IHsgSUJyYW5kIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9icmFuZCc7XG5cbmNvbnN0IGRhdGFTaG9wQnJhbmRzOiBJQnJhbmRbXSA9IFtcbiAgICB7XG4gICAgICAgIHNsdWc6ICdkaWFiJyxcbiAgICAgICAgbmFtZTogJ0RpYWInLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvc3VwcGxpZXJzL2RpYWIuanBnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2x1ZzogJ2ZpcnN0JyxcbiAgICAgICAgbmFtZTogJ0ZpcnN0JyxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3N1cHBsaWVycy9maXJzdC5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzbHVnOiAnbm9yZCcsXG4gICAgICAgIG5hbWU6ICdub3JkJyxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3N1cHBsaWVycy9ub3JkLmpwZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNsdWc6ICdzb2x2YXknLFxuICAgICAgICBuYW1lOiAnc29sdmF5JyxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3N1cHBsaWVycy9zb2x2YXkuanBnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2x1ZzogJ3RleG9uaWMnLFxuICAgICAgICBuYW1lOiAndGV4b25pYycsXG4gICAgICAgIGltYWdlOiAnL2ltYWdlcy9zdXBwbGllcnMvdGV4b25pYy5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzbHVnOiAnanVzaGknLFxuICAgICAgICBuYW1lOiAnanVzaGknLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvc3VwcGxpZXJzL2p1c2hpLmpwZycsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFTaG9wQnJhbmRzO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdOZW90ZWNoIENvbXBvc2l0ZSDguJnguLXguYLguK3guYDguJfguIQg4LiE4Lit4Lih4LmC4Lie4Liq4Li04LiXIOC4nOC4ueC5ieC4meC4s+C5gOC4guC5ieC4suC4reC4uOC4m+C4geC4o+C4k+C5jOC4hOC4reC4oeC5guC4nuC4quC4tOC4lSDguJfguLjguIHguIrguJnguLTguJTguKPguLLguITguLLguKLguYjguK3guKHguYDguKLguLLguKfguYwnLFxuICAgIGZ1bGxOYW1lOiAnTmVvdGVjaCBDb21wb3NpdGUg4LiZ4Li14LmC4Lit4LmA4LiX4LiEIOC4hOC4reC4oeC5guC4nuC4quC4tOC4lycsXG4gICAgdXJsOiAnaHR0cHM6Ly9uZW8uY28udGgnLFxuICAgIGF1dGhvcjoge1xuICAgICAgICBuYW1lOiAnS2Fwb25nZGVzaWduJyxcbiAgICAgICAgcHJvZmlsZV91cmw6ICdodHRwczovL2thcG9uZ2Rlc2lnbi5jb20nLFxuICAgIH0sXG4gICAgY29udGFjdHM6IHtcbiAgICAgICAgYWRkcmVzczogJzEzOSDguIsuIOC4nuC4o+C4sOC4ouC4suC4quC4uOC5gOC4o+C4meC4l+C4o+C5jCAzMCDguJYu4Lie4Lij4Liw4Lii4Liy4Liq4Li44LmA4Lij4LiZ4LiX4Lij4LmMIOC5geC4guC4p+C4h+C4muC4suC4h+C4iuC4seC4mSDguYDguILguJXguITguKXguK3guIfguKrguLLguKHguKfguLIg4LiB4Lij4Li44LiH4LmA4LiX4LieIDEwNTEwJyxcbiAgICAgICAgZW1haWw6ICduYXR0YXd1dEBuZW8uY28udGgnLFxuICAgICAgICBwaG9uZTogJzA4MS02ODYtMjkyMicsXG4gICAgfSxcbiAgICBhcGl1cmw6ICdodHRwOi8vMTI3LjAuMC4xL25lby5jby50aC9jb3JlLWFwaS8nLFxufTtcbiIsIi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgZW5NZXNzYWdlcyBmcm9tICcuL21lc3NhZ2VzL2VuLmpzb24nO1xuaW1wb3J0IHRoTWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcy90aC5qc29uJztcbmltcG9ydCB7IElMYW5ndWFnZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvbGFuZ3VhZ2UnO1xuXG5jb25zdCBsYW5ndWFnZXM6IElMYW5ndWFnZVtdID0gW1xuICAgIHtcbiAgICAgICAgbG9jYWxlOiAnZW4nLFxuICAgICAgICBjb2RlOiAnRU4nLFxuICAgICAgICBuYW1lOiAnRW5nbGlzaCcsXG4gICAgICAgIGljb246ICcvaW1hZ2VzL2xhbmd1YWdlcy91ay5wbmcnLFxuICAgICAgICBkaXJlY3Rpb246ICdsdHInLFxuICAgICAgICBtZXNzYWdlczogZW5NZXNzYWdlcyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbG9jYWxlOiAndGgnLFxuICAgICAgICBjb2RlOiAnVEgnLFxuICAgICAgICBuYW1lOiAnVGhhaWxhbmQnLFxuICAgICAgICBpY29uOiAnL2ltYWdlcy9sYW5ndWFnZXMvdGhhaWxhbmQucG5nJyxcbiAgICAgICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgICAgICAgbWVzc2FnZXM6IHRoTWVzc2FnZXMsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGxhbmd1YWdlcztcbiIsIi8vIHJlYWN0XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyB0aGlyZC1wYXJ0eVxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XG5cbi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgSG9tZVBhZ2UsIHsgSW5pdERhdGEgfSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvSG9tZVBhZ2UnO1xuaW1wb3J0IHNob3BBcGkgZnJvbSAnLi4vYXBpL3Nob3AnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VQcm9wcyB7XG4gICAgaW5pdERhdGE/OiBJbml0RGF0YTtcbn1cblxuXG5mdW5jdGlvbiBQYWdlKHByb3BzOiBQYWdlUHJvcHMpIHtcbiAgICBjb25zdCB7IGluaXREYXRhIH0gPSBwcm9wcztcblxuICAgIHJldHVybiA8SG9tZVBhZ2UgaW5pdERhdGE9e2luaXREYXRhfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiIsImV4cG9ydCB0eXBlIFN1YnNjcmlwdGlvbkZuID0gKGFyZWE6IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4gdm9pZDtcblxuY2xhc3MgRGVwYXJ0bWVudHNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGFyZWFTdGF0ZTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uRm4gfCBudWxsID0gbnVsbDtcblxuICAgIHNldCBhcmVhKHZhbHVlOiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuYXJlYVN0YXRlID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hcmVhU3RhdGUgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5zdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXIodGhpcy5hcmVhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBhcmVhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hcmVhU3RhdGU7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlKGZuOiBTdWJzY3JpcHRpb25Gbikge1xuICAgICAgICB0aGlzLnN1YnNjcmliZXIgPSBmbjtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVyID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmNvbnN0IGRlcGFydG1lbnRzU2VydmljZSA9IG5ldyBEZXBhcnRtZW50c1NlcnZpY2UoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVwYXJ0bWVudHNTZXJ2aWNlO1xuIiwiaW1wb3J0IHtcbiAgICB1c2VDYWxsYmFjayxcbiAgICB1c2VFZmZlY3QsXG4gICAgdXNlTWVtbywgdXNlUmVmLFxuICAgIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcHJvZHVjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZWRpYShxdWVyeTogc3RyaW5nKSB7XG4gICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IG1lZGlhID0gdXNlTWVtbygoKSA9PiB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSksIFtxdWVyeV0pO1xuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUobWVkaWEubWF0Y2hlcyk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBvbkNoYW5nZU1lZGlhID0gKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3RhdGUobWVkaWEubWF0Y2hlcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uQ2hhbmdlTWVkaWEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTRGVwcmVjYXRlZFN5bWJvbHNcbiAgICAgICAgICAgIG1lZGlhLmFkZExpc3RlbmVyKG9uQ2hhbmdlTWVkaWEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmIChtZWRpYS5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgbWVkaWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgb25DaGFuZ2VNZWRpYSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vaW5zcGVjdGlvbiBKU0RlcHJlY2F0ZWRTeW1ib2xzXG4gICAgICAgICAgICAgICAgbWVkaWEucmVtb3ZlTGlzdGVuZXIob25DaGFuZ2VNZWRpYSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW21lZGlhXSk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCB0eXBlIERlZmVycmVkRGF0YVNvdXJjZTxUPiA9ICgpID0+IFByb21pc2U8VD47XG5leHBvcnQgdHlwZSBEZWZlcnJlZERhdGFTdGF0ZTxUPiA9IHsgaXNMb2FkaW5nOiBib29sZWFuLCBkYXRhOiBUIH07XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VEZWZlcnJlZERhdGE8VD4oXG4gICAgc291cmNlOiBEZWZlcnJlZERhdGFTb3VyY2U8VD4sXG4gICAgZGVmYXVsdERhdGE6IFQsXG4gICAgaW5pdGlhbERhdGE/OiBULFxuICAgIGRlcHM6IGFueVtdID0gW10sXG4pOiBEZWZlcnJlZERhdGFTdGF0ZTxUPiB7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiAoe1xuICAgICAgICBpc0xvYWRpbmc6IGluaXRpYWxEYXRhID09PSB1bmRlZmluZWQsXG4gICAgICAgIGRhdGE6IGluaXRpYWxEYXRhIHx8IGRlZmF1bHREYXRhLFxuICAgIH0pKTtcbiAgICBjb25zdCBtZW1vaXplZFNvdXJjZSA9IHVzZUNhbGxiYWNrKHNvdXJjZSwgZGVwcyk7XG4gICAgY29uc3Qgc2tpcE5leHRSZWYgPSB1c2VSZWYoaW5pdGlhbERhdGEgIT09IHVuZGVmaW5lZCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2tpcE5leHRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgc2tpcE5leHRSZWYuY3VycmVudCA9IGZhbHNlO1xuXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge307XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2FuY2VsZWQgPSBmYWxzZTtcblxuICAgICAgICBzZXRTdGF0ZSgoY3VyU3RhdGUpID0+IHtcbiAgICAgICAgICAgIGlmICghY3VyU3RhdGUuaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VyU3RhdGUsIGlzTG9hZGluZzogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY3VyU3RhdGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lbW9pemVkU291cmNlKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRTdGF0ZSgoKSA9PiAoeyBpc0xvYWRpbmc6IGZhbHNlLCBkYXRhIH0pKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9LCBbbWVtb2l6ZWRTb3VyY2VdKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IHR5cGUgUHJvZHVjdFRhYiA9IHsgaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBXaXRoQ3VycmVudDxUPiA9IFQgJiB7Y3VycmVudDogYm9vbGVhbn07XG5leHBvcnQgdHlwZSBQcm9kdWN0VGFiU291cmNlPFQgZXh0ZW5kcyBQcm9kdWN0VGFiPiA9ICh0YWI6IFQpID0+IFByb21pc2U8SVByb2R1Y3RbXT47XG5leHBvcnQgdHlwZSBQcm9kdWN0VGFic1N0YXRlPFQgZXh0ZW5kcyBQcm9kdWN0VGFiPiA9IHtcbiAgICB0YWJzOiBXaXRoQ3VycmVudDxUPltdO1xuICAgIGhhbmRsZVRhYkNoYW5nZTogKHRhYjogV2l0aEN1cnJlbnQ8VD4pID0+IHZvaWQ7XG59ICYgRGVmZXJyZWREYXRhU3RhdGU8SVByb2R1Y3RbXT47XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm9kdWN0VGFiczxUIGV4dGVuZHMgUHJvZHVjdFRhYj4oXG4gICAgdGFiczogVFtdLFxuICAgIHByb2R1Y3RzU291cmNlOiBQcm9kdWN0VGFiU291cmNlPFQ+LFxuICAgIGluaXRpYWxEYXRhPzogSVByb2R1Y3RbXSxcbik6IFByb2R1Y3RUYWJzU3RhdGU8VD4ge1xuICAgIGNvbnN0IFtjdXJyZW50VGFiSWQsIHNldEN1cnJlbnRUYWJJZF0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBtZW1vaXplZFRhYnMgPSB1c2VNZW1vKCgpID0+IChcbiAgICAgICAgdGFicy5tYXAoKHRhYikgPT4gKHtcbiAgICAgICAgICAgIC4uLnRhYixcbiAgICAgICAgICAgIGN1cnJlbnQ6IGN1cnJlbnRUYWJJZCA9PT0gdGFiLmlkLFxuICAgICAgICB9KSlcbiAgICApLCBbdGFicywgY3VycmVudFRhYklkXSk7XG4gICAgY29uc3QgY3VycmVudFRhYiA9IG1lbW9pemVkVGFicy5maW5kKCh4KSA9PiB4LmN1cnJlbnQpO1xuICAgIGNvbnN0IHByb2R1Y3RzID0gdXNlRGVmZXJyZWREYXRhKCgpID0+IChcbiAgICAgICAgY3VycmVudFRhYiA/IHByb2R1Y3RzU291cmNlKGN1cnJlbnRUYWIpIDogUHJvbWlzZS5yZXNvbHZlKFtdKVxuICAgICksIFtdLCBpbml0aWFsRGF0YSwgW2N1cnJlbnRUYWJdKTtcbiAgICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSB1c2VDYWxsYmFjaygodGFiKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRUYWJJZCh0YWIuaWQpO1xuICAgIH0sIFtzZXRDdXJyZW50VGFiSWRdKTtcblxuICAgIHJldHVybiB1c2VNZW1vKCgpID0+ICh7XG4gICAgICAgIHRhYnM6IG1lbW9pemVkVGFicyxcbiAgICAgICAgaGFuZGxlVGFiQ2hhbmdlLFxuICAgICAgICAuLi5wcm9kdWN0cyxcbiAgICB9KSwgW21lbW9pemVkVGFicywgaGFuZGxlVGFiQ2hhbmdlLCBwcm9kdWN0c10pO1xufVxuXG5leHBvcnQgdHlwZSBQcm9kdWN0Q29sdW1uID0ge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgc291cmNlOiBEZWZlcnJlZERhdGFTb3VyY2U8SVByb2R1Y3RbXT47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvZHVjdENvbHVtbnMoY29sdW1uczogUHJvZHVjdENvbHVtbltdKSB7XG4gICAgY29uc3QgcHJvZHVjdHMgPSB1c2VEZWZlcnJlZERhdGEoKCkgPT4gKFxuICAgICAgICBQcm9taXNlLmFsbChjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiBjb2x1bW4uc291cmNlKCkpKVxuICAgICksIFtdLCB1bmRlZmluZWQsIFtjb2x1bW5zXSk7XG5cbiAgICByZXR1cm4gdXNlTWVtbygoKSA9PiAoXG4gICAgICAgIGNvbHVtbnMubWFwKChjb2x1bW4sIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgLi4uY29sdW1uLFxuICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzLmRhdGFbaW5kZXhdIHx8IFtdLFxuICAgICAgICB9KSlcbiAgICApLCBbY29sdW1ucywgcHJvZHVjdHNdKTtcbn1cbiIsIi8vIHRoaXJkLXBhcnR5XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG4vLyBhcHBsaWNhdGlvblxuaW1wb3J0IHsgQXBwUmVkdWNlciB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlQXBwQWN0aW9uIH0gZnJvbSAnLi9ob29rcyc7XG5cbmNvbnN0IEFQUExZX0NMSUVOVF9TVEFURSA9ICdBUFBMWV9DTElFTlRfU1RBVEUnO1xuXG50eXBlIEFwcGx5Q2xpZW50U3RhdGVBY3Rpb248VD4gPSB7XG4gICAgdHlwZTogdHlwZW9mIEFQUExZX0NMSUVOVF9TVEFURTtcbiAgICBzdGF0ZTogVDtcbn07XG5cbmZ1bmN0aW9uIGlzQXBwbHlDbGllbnRTdGF0ZUFjdGlvbjxUIGV4dGVuZHMgYW55PihhY3Rpb246IEFjdGlvbik6IGFjdGlvbiBpcyBBcHBseUNsaWVudFN0YXRlQWN0aW9uPFQ+IHtcbiAgICByZXR1cm4gYWN0aW9uLnR5cGUgPT09IEFQUExZX0NMSUVOVF9TVEFURTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q2xpZW50U3RhdGU8VCBleHRlbmRzIG9iamVjdD4oc3RhdGU6IFQpOiBBcHBseUNsaWVudFN0YXRlQWN0aW9uPFQ+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBBUFBMWV9DTElFTlRfU1RBVEUsXG4gICAgICAgIHN0YXRlLFxuICAgIH07XG59XG5cbmV4cG9ydCBjb25zdCB1c2VBcHBseUNsaWVudFN0YXRlID0gKCkgPT4gdXNlQXBwQWN0aW9uKGFwcGx5Q2xpZW50U3RhdGUpO1xuXG5leHBvcnQgdHlwZSBTdGF0ZUZyb21TZXJ2ZXIgPSAnc2VydmVyJztcbmV4cG9ydCB0eXBlIFN0YXRlRnJvbUNsaWVudCA9ICdjbGllbnQnO1xuZXhwb3J0IHR5cGUgU3RhdGVGcm9tID0gU3RhdGVGcm9tU2VydmVyIHwgU3RhdGVGcm9tQ2xpZW50O1xuXG5leHBvcnQgZnVuY3Rpb24gd2l0aENsaWVudFN0YXRlPFxuICAgIFQgZXh0ZW5kcyBBcHBSZWR1Y2VyPGFueSwgYW55PixcbiAgICBTIGV4dGVuZHMgUmV0dXJuVHlwZTxUPixcbiAgICBSIGV4dGVuZHMgUyAmIHsgc3RhdGVGcm9tOiBTdGF0ZUZyb20gfVxuPihcbiAgICByZWR1Y2VyOiBUIGV4dGVuZHMgQXBwUmVkdWNlcjxSZXR1cm5UeXBlPFQ+ICYgeyBzdGF0ZUZyb206IGFueSB9LCBhbnk+XG4gICAgICAgID8gQXBwUmVkdWNlcjxSZXR1cm5UeXBlPFQ+ICYgeyBzdGF0ZUZyb206IG5ldmVyIH0sIGFueT5cbiAgICAgICAgOiBULFxuICAgIG5hbWVzcGFjZTogc3RyaW5nLFxuKTogQXBwUmVkdWNlcjxSPiB7XG4gICAgcmV0dXJuIChzdGF0ZTogUywgYWN0aW9uOiBBY3Rpb24gfCBBcHBseUNsaWVudFN0YXRlQWN0aW9uPHsgW25zOiBzdHJpbmddOiBhbnkgfT4pOiBSID0+IHtcbiAgICAgICAgY29uc3QgY2hpbGRTdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG5cbiAgICAgICAgaWYgKGlzQXBwbHlDbGllbnRTdGF0ZUFjdGlvbihhY3Rpb24pICYmIG5hbWVzcGFjZSBpbiBhY3Rpb24uc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnN0YXRlW25hbWVzcGFjZV0sXG4gICAgICAgICAgICAgICAgc3RhdGVGcm9tOiAnY2xpZW50JyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3N0YXRlRnJvbScgaW4gY2hpbGRTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkU3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY2hpbGRTdGF0ZSxcbiAgICAgICAgICAgIHN0YXRlRnJvbTogcHJvY2Vzcy5icm93c2VyID8gJ2NsaWVudCcgOiAnc2VydmVyJyxcbiAgICAgICAgfTtcbiAgICB9O1xufVxuIiwiLy8gcmVhY3RcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuLy8gdGhpcmQtcGFydHlcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4Jztcbi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgeyBGbiwgVGh1bmtBY3Rpb25GbiwgVGh1bmtSZXR1cm5UeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuL3Jvb3Qvcm9vdFR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcEFjdGlvbjxUIGV4dGVuZHMgRm4+KGFjdGlvbjogVCk6ICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiAoXG4gICAgVCBleHRlbmRzIFRodW5rQWN0aW9uRm4gPyBUaHVua1JldHVyblR5cGU8VD4gOiBSZXR1cm5UeXBlPFQ+XG4pIHtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IChcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uKC4uLmFyZ3MpKVxuICAgICksIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcFNlbGVjdG9yPFQgZXh0ZW5kcyhzdGF0ZTogUm9vdFN0YXRlKSA9PiBhbnk+KHNlbGVjdG9yOiBUKTogUmV0dXJuVHlwZTxUPiB7XG4gICAgcmV0dXJuIHVzZVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cbiIsIi8vIGFwcGxpY2F0aW9uXG5leHBvcnQgY29uc3QgTE9DQUxFX0NIQU5HRSA9ICdMT0NBTEVfQ0hBTkdFJztcblxuZXhwb3J0IGludGVyZmFjZSBMb2NhbGVDaGFuZ2VBY3Rpb24ge1xuICAgIHR5cGU6IHR5cGVvZiBMT0NBTEVfQ0hBTkdFO1xuICAgIGxvY2FsZTogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBMb2NhbGVBY3Rpb24gPSBMb2NhbGVDaGFuZ2VBY3Rpb247XG4iLCIvLyBhcHBsaWNhdGlvblxuaW1wb3J0IHsgTE9DQUxFX0NIQU5HRSwgTG9jYWxlQ2hhbmdlQWN0aW9uIH0gZnJvbSAnLi9sb2NhbGVBY3Rpb25UeXBlcyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlQ2hhbmdlKGxvY2FsZTogc3RyaW5nKTogTG9jYWxlQ2hhbmdlQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBMT0NBTEVfQ0hBTkdFLFxuICAgICAgICBsb2NhbGUsXG4gICAgfTtcbn1cbiIsIi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgbGFuZ3VhZ2VzIGZyb20gJy4uLy4uL2kxOG4nO1xuaW1wb3J0IHsgSUxhbmd1YWdlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9sYW5ndWFnZSc7XG5pbXBvcnQgeyBMT0NBTEVfTkFNRVNQQUNFIH0gZnJvbSAnLi9sb2NhbGVSZWR1Y2VyJztcbmltcG9ydCB7IGxvY2FsZUNoYW5nZSB9IGZyb20gJy4vbG9jYWxlQWN0aW9ucyc7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi9yb290L3Jvb3RUeXBlcyc7XG5pbXBvcnQgeyB1c2VBcHBBY3Rpb24sIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vaG9va3MnO1xuXG5jb25zdCBsb2NhbGVTZWxlY3RvciA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZVtMT0NBTEVfTkFNRVNQQUNFXS5jdXJyZW50O1xuXG5leHBvcnQgY29uc3QgdXNlTG9jYWxlID0gKCkgPT4gdXNlQXBwU2VsZWN0b3IobG9jYWxlU2VsZWN0b3IpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTGFuZ3VhZ2UoKTogSUxhbmd1YWdlO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhbmd1YWdlPFQgZXh0ZW5kcyhsYW5nOiBJTGFuZ3VhZ2UpID0+IGFueT4oc2VsZWN0b3I6IFQpOiBSZXR1cm5UeXBlPFQ+O1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxhbmd1YWdlPFQgZXh0ZW5kcyhsYW5nOiBJTGFuZ3VhZ2UpID0+IGFueT4oc2VsZWN0b3I/OiBUKTogKElMYW5ndWFnZSB8IFJldHVyblR5cGU8VD4pIHtcbiAgICByZXR1cm4gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvY2FsZSA9IGxvY2FsZVNlbGVjdG9yKHN0YXRlKTtcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBsYW5ndWFnZXMuZmluZCgoeCkgPT4geC5sb2NhbGUgPT09IGxvY2FsZSk7XG5cbiAgICAgICAgaWYgKCFsYW5ndWFnZSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYExhbmd1YWdlIHdpdGggbG9jYWxlOiAke2xvY2FsZX0gbm90IGZvdW5kIWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0b3IobGFuZ3VhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhbmd1YWdlO1xuICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgdXNlRGlyZWN0aW9uID0gKCkgPT4gdXNlTGFuZ3VhZ2UoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZS5kaXJlY3Rpb24pO1xuXG5leHBvcnQgY29uc3QgdXNlTWVzc2FnZXMgPSAoKSA9PiB1c2VMYW5ndWFnZSgobGFuZ3VhZ2UpID0+IGxhbmd1YWdlLm1lc3NhZ2VzKTtcblxuZXhwb3J0IGNvbnN0IHVzZUxvY2FsZUNoYW5nZSA9ICgpID0+IHVzZUFwcEFjdGlvbihsb2NhbGVDaGFuZ2UpO1xuIiwiLy8gYXBwbGljYXRpb25cbmltcG9ydCB7IExPQ0FMRV9DSEFOR0UsIExvY2FsZUFjdGlvbiB9IGZyb20gJy4vbG9jYWxlQWN0aW9uVHlwZXMnO1xuaW1wb3J0IHsgTG9jYWxlU3RhdGUgfSBmcm9tICcuL2xvY2FsZVR5cGVzJztcbmltcG9ydCB7IHdpdGhDbGllbnRTdGF0ZSB9IGZyb20gJy4uL2NsaWVudCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogTG9jYWxlU3RhdGUgPSB7XG4gICAgY3VycmVudDogJ2VuJyxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0NBTEVfTkFNRVNQQUNFID0gJ2xvY2FsZSc7XG5cbmZ1bmN0aW9uIGxvY2FsZUJhc2VSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IExvY2FsZUFjdGlvbik6IExvY2FsZVN0YXRlIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IExPQ0FMRV9DSEFOR0UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgY3VycmVudDogYWN0aW9uLmxvY2FsZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmNvbnN0IGxvY2FsZVJlZHVjZXIgPSB3aXRoQ2xpZW50U3RhdGUobG9jYWxlQmFzZVJlZHVjZXIsIExPQ0FMRV9OQU1FU1BBQ0UpO1xuXG5leHBvcnQgZGVmYXVsdCBsb2NhbGVSZWR1Y2VyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9