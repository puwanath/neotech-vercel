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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./src/api/shop.ts":
/*!*************************!*\
  !*** ./src/api/shop.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_server_endpoints_categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fake-server/endpoints/categories */ "./src/fake-server/endpoints/categories.ts");
/* harmony import */ var _fake_server_endpoints_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fake-server/endpoints/products */ "./src/fake-server/endpoints/products.ts");
/* eslint-disable @typescript-eslint/no-unused-vars,arrow-body-style */
// noinspection ES6UnusedImports


const shopApi = {
  /**
   * Returns array of categories.
   */
  getCategories: (options = {}) => {
    /**
     * This is what your API endpoint might look like:
     *
     * https://example.com/api/categories.json?depth=2
     *
     * where:
     * - 2 = options.depth
     */
    // return fetch(`https://example.com/api/categories.json?${qs.stringify(options)}`)
    //     .then((response) => response.json());
    // This is for demonstration purposes only. Remove it and use the code above.
    return Object(_fake_server_endpoints_categories__WEBPACK_IMPORTED_MODULE_0__["getCategories"])(options);
  },

  /**
   * Returns category by slug.
   */
  getCategoryBySlug: (slug, options = {}) => {
    /**
     * This is what your API endpoint might look like:
     *
     * https://example.com/api/categories/power-tools.json?depth=2
     *
     * where:
     * - power-tools = slug
     * - 2           = options.depth
     */
    // return fetch(`https://example.com/api/categories/${slug}.json?${qs.stringify(options)}`)
    //     .then((response) => response.json());
    // This is for demonstration purposes only. Remove it and use the code above.
    return Object(_fake_server_endpoints_categories__WEBPACK_IMPORTED_MODULE_0__["getCategoryBySlug"])(slug, options);
  },

  /**
   * Returns product.
   */
  getProductBySlug: slug => {
    /**
     * This is what your API endpoint might look like:
     *
     * https://example.com/api/products/screwdriver-a2017.json
     *
     * where:
     * - screwdriver-a2017 = slug
     */
    // return fetch(`https://example.com/api/products/${slug}.json`)
    //     .then((response) => response.json());
    // This is for demonstration purposes only. Remove it and use the code above.
    return Object(_fake_server_endpoints_products__WEBPACK_IMPORTED_MODULE_1__["getProductBySlug"])(slug);
  },

  /**
   * Returns array of related products.
   */
  getRelatedProducts: (slug, options = {}) => {
    /**
     * This is what your API endpoint might look like:
     *
     * https://example.com/api/shop/products/screwdriver-a2017/related.json&limit=3
     *
     * where:
     * - screwdriver-a2017 = slug
     * - limit             = options.limit
     */
    // return fetch(`https://example.com/api/products/${slug}/related.json?${qs.stringify(options)}`)
    //     .then((response) => response.json());
    // This is for demonstration purposes only. Remove it and use the code above.
    return Object(_fake_server_endpoints_products__WEBPACK_IMPORTED_MODULE_1__["getRelatedProducts"])(slug, options);
  },

  /**
   * Return products list.
   */
  getProductsList: (options = {}, filters = {}) => {
    /**
     * This is what your API endpoint might look like:
     *
     * https://example.com/api/products.json?page=2&limit=12&sort=name_desc&filter_category=screwdriwers&filter_price=500-1000
     *
     * where:
     * - page            = options.page
     * - limit           = options.limit
     * - sort            = options.sort
     * - filter_category = filters.category
     * - filter_price    = filters.price
     */
    // const params = { ...options };
    //
    // Object.keys(filters).forEach((slug) => {
    //     params[`filter_${slug}`] = filters[slug];
    // });
    //
    // return fetch(`https://example.com/api/products.json?${qs.stringify(params)}`)
    //     .then((response) => response.json());
    // This is for demonstration purposes only. Remove it and use the code above.
    return Object(_fake_server_endpoints_products__WEBPACK_IMPORTED_MODULE_1__["getProductsList"])(options, filters);
  },

  /**
   * Returns array of featured products.
   */
  getFeaturedProducts: (options = {}) => {
    /**
     * This is what your API endpoint might look like:
     *
     * https://example.com/api/shop/featured-products.json?limit=3&category=power-tools
     *
     * where:
     * - 3           = options.limit
     * - power-tools = options.category
     */
    // return fetch(`https://example.com/api/featured-products.json?${qs.stringify(options)}`)
    //     .then((response) => response.json());
    // This is for demonstration purposes only. Remove it and use the code above.
    return Object(_fake_server_endpoints_products__WEBPACK_IMPORTED_MODULE_1__["getFeaturedProducts"])(options);
  },

  /**
   * Returns array of latest products.
   */
  getLatestProducts: (options = {}) => {
    /**
     * This is what your API endpoint might look like:
     *
     * https://example.com/api/shop/latest-products.json?limit=3&category=power-tools
     *
     * where:
     * - 3           = options.limit
     * - power-tools = options.category
     */
    // return fetch(`https://example.com/api/latest-products.json?${qs.stringify(options)}`)
    //     .then((response) => response.json());
    // This is for demonstration purposes only. Remove it and use the code above.
    return Object(_fake_server_endpoints_products__WEBPACK_IMPORTED_MODULE_1__["getLatestProducts"])(options);
  },

  /**
   * Returns an array of top rated products.
   */
  getTopRatedProducts: (options = {}) => {
    /**
     * This is what your API endpoint might look like:
     *
     * https://example.com/api/shop/top-rated-products.json?limit=3&category=power-tools
     *
     * where:
     * - 3           = options.limit
     * - power-tools = options.category
     */
    // return fetch(`https://example.com/api/top-rated-products.json?${qs.stringify(options)}`)
    //     .then((response) => response.json());
    // This is for demonstration purposes only. Remove it and use the code above.
    return Object(_fake_server_endpoints_products__WEBPACK_IMPORTED_MODULE_1__["getTopRatedProducts"])(options);
  },

  /**
   * Returns an array of discounted products.
   */
  getDiscountedProducts: (options = {}) => {
    /**
     * This is what your API endpoint might look like:
     *
     * https://example.com/api/shop/discounted-products.json?limit=3&category=power-tools
     *
     * where:
     * - 3           = options.limit
     * - power-tools = options.category
     */
    // return fetch(`https://example.com/api/discounted-products.json?${qs.stringify(options)}`)
    //     .then((response) => response.json());
    // This is for demonstration purposes only. Remove it and use the code above.
    return Object(_fake_server_endpoints_products__WEBPACK_IMPORTED_MODULE_1__["getDiscountedProducts"])(options);
  },

  /**
   * Returns an array of most popular products.
   */
  getPopularProducts: (options = {}) => {
    /**
     * This is what your API endpoint might look like:
     *
     * https://example.com/api/shop/popular-products.json?limit=3&category=power-tools
     *
     * where:
     * - 3           = options.limit
     * - power-tools = options.category
     */
    // return fetch(`https://example.com/api/popular-products.json?${qs.stringify(options)}`)
    //     .then((response) => response.json());
    // This is for demonstration purposes only. Remove it and use the code above.
    return Object(_fake_server_endpoints_products__WEBPACK_IMPORTED_MODULE_1__["getPopularProducts"])(options);
  },

  /**
   * Returns search suggestions.
   */
  getSuggestions: (query, options = {}) => {
    /**
     * This is what your API endpoint might look like:
     *
     * https://example.com/api/search/suggestions.json?query=screwdriver&limit=5&category=power-tools
     *
     * where:
     * - screwdriver = query
     * - 5           = options.limit
     * - power-tools = options.category
     */
    // return fetch(`https://example.com/api/search/suggestions.json?${qs.stringify({ ...options, query })}`)
    //     .then((response) => response.json());
    // This is for demonstration purposes only. Remove it and use the code above.
    return Object(_fake_server_endpoints_products__WEBPACK_IMPORTED_MODULE_1__["getSuggestions"])(query, options);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (shopApi);

/***/ }),

/***/ "./src/components/blocks/BlockBanner.tsx":
/*!***********************************************!*\
  !*** ./src/components/blocks/BlockBanner.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlockBanner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_AppLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/AppLink */ "./src/components/shared/AppLink.tsx");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\blocks\\BlockBanner.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // application


function BlockBanner() {
  return __jsx("div", {
    className: "block block-banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/",
    className: "block-banner__body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "block-banner__image block-banner__image--desktop",
    style: {
      backgroundImage: 'url("/images/banners/banner-1.jpg")'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "block-banner__image block-banner__image--mobile",
    style: {
      backgroundImage: 'url("/images/banners/banner-1-mobile.jpg")'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "block-banner__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, "Hundreds", __jsx("br", {
    className: "block-banner__mobile-br",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }), "Hand Tools"), __jsx("div", {
    className: "block-banner__text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws"), __jsx("div", {
    className: "block-banner__button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "btn btn-sm btn-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "Shop Now")))));
}

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

/***/ "./src/components/blocks/BlockCategories.tsx":
/*!***************************************************!*\
  !*** ./src/components/blocks/BlockCategories.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_AppLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/AppLink */ "./src/components/shared/AppLink.tsx");
/* harmony import */ var _shared_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/BlockHeader */ "./src/components/shared/BlockHeader.tsx");
/* harmony import */ var _services_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/url */ "./src/services/url.ts");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\blocks\\BlockCategories.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // application





function BlockCategories(props) {
  const {
    title,
    layout = 'classic',
    categories = []
  } = props;
  const categoriesList = categories.map((category, index) => {
    const classes = `block-categories__item category-card category-card--layout--${layout}`;
    const {
      children
    } = category;
    const subcategories = children && children.map((sub, subIndex) => __jsx("li", {
      key: subIndex,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: _services_url__WEBPACK_IMPORTED_MODULE_3__["default"].category(sub),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, sub.name)));
    return __jsx("div", {
      key: index,
      className: classes,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: " category-card__body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: " category-card__image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: _services_url__WEBPACK_IMPORTED_MODULE_3__["default"].category(category),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: category.image,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: " category-card__content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: " category-card__name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }
    }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: _services_url__WEBPACK_IMPORTED_MODULE_3__["default"].category(category),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 29
      }
    }, category.name)), __jsx("ul", {
      className: "category-card__links",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }, subcategories), __jsx("div", {
      className: "category-card__all",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }, __jsx(_shared_AppLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: _services_url__WEBPACK_IMPORTED_MODULE_3__["default"].category(category),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 29
      }
    }, "Show All")), __jsx("div", {
      className: "category-card__products",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, `${category.items} Products`))));
  });
  return __jsx("div", {
    className: `block block--highlighted block-categories block-categories--layout--${layout}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(_shared_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "block-categories__list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, categoriesList)));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockCategories);

/***/ }),

/***/ "./src/components/blocks/BlockPosts.tsx":
/*!**********************************************!*\
  !*** ./src/components/blocks/BlockPosts.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_BlockHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/BlockHeader */ "./src/components/shared/BlockHeader.tsx");
/* harmony import */ var _shared_PostCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/PostCard */ "./src/components/shared/PostCard.tsx");
/* harmony import */ var _shared_StroykaSlick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/StroykaSlick */ "./src/components/shared/StroykaSlick.tsx");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\blocks\\BlockPosts.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// react
 // third-party

// application



const slickSettings = {
  'grid-nl': {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  },
  'list-sm': {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }
};

function BlockPosts(props) {
  const {
    title,
    layout = 'list-sm',
    posts = []
  } = props;
  const slickRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleNextClick = () => {
    if (slickRef.current) {
      slickRef.current.slickNext();
    }
  };

  const handlePrevClick = () => {
    if (slickRef.current) {
      slickRef.current.slickPrev();
    }
  };

  const postsList = posts.map(post => __jsx(_shared_PostCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: post.id,
    post: post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 43
    }
  }));
  return __jsx("div", {
    className: `block block-posts block-posts--layout--${layout}`,
    "data-layout": layout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx(_shared_BlockHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    arrows: true,
    title: title,
    onNext: handleNextClick,
    onPrev: handlePrevClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "block-posts__slider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, __jsx(_shared_StroykaSlick__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    ref: slickRef
  }, slickSettings[layout], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }), postsList))));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockPosts);

/***/ }),

/***/ "./src/components/blocks/BlockProductColumns.tsx":
/*!*******************************************************!*\
  !*** ./src/components/blocks/BlockProductColumns.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_BlockHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/BlockHeader */ "./src/components/shared/BlockHeader.tsx");
/* harmony import */ var _shared_ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/ProductCard */ "./src/components/shared/ProductCard.tsx");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\blocks\\BlockProductColumns.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // application




function BlockProductColumns(props) {
  const {
    columns = []
  } = props;
  const columnsList = columns.map((column, index) => {
    const products = column.products.map(product => __jsx("div", {
      key: product.id,
      className: "block-product-columns__item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, __jsx(_shared_ProductCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      product: product,
      layout: "horizontal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    })));
    return __jsx("div", {
      key: index,
      className: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, __jsx(_shared_BlockHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: column.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "block-product-columns__column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, products));
  });
  return __jsx("div", {
    className: "block block-product-columns d-lg-block d-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, columnsList)));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockProductColumns);

/***/ }),

/***/ "./src/components/blocks/BlockProducts.tsx":
/*!*************************************************!*\
  !*** ./src/components/blocks/BlockProducts.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_BlockHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/BlockHeader */ "./src/components/shared/BlockHeader.tsx");
/* harmony import */ var _shared_ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/ProductCard */ "./src/components/shared/ProductCard.tsx");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\blocks\\BlockProducts.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // application




function BlockProducts(props) {
  const {
    title,
    featuredProduct,
    layout = 'large-first',
    products = []
  } = props;
  let large;
  let smalls;

  if (featuredProduct) {
    large = __jsx("div", {
      className: "block-products__featured",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "block-products__featured-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, __jsx(_shared_ProductCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      product: featuredProduct,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    })));
  }

  if (products.length > 0) {
    const productsList = products.slice(0, 6).map((product, index) => __jsx("div", {
      key: index,
      className: "block-products__list-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, __jsx(_shared_ProductCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      product: product,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    })));
    smalls = __jsx("div", {
      className: "block-products__list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, productsList);
  }

  return __jsx("div", {
    className: `block block-products block-products--layout--${layout}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(_shared_BlockHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "block-products__body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, layout === 'large-first' && large, smalls, layout === 'large-last' && large)));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockProducts);

/***/ }),

/***/ "./src/components/blocks/BlockProductsCarousel.tsx":
/*!*********************************************************!*\
  !*** ./src/components/blocks/BlockProductsCarousel.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_BlockHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/BlockHeader */ "./src/components/shared/BlockHeader.tsx");
/* harmony import */ var _shared_ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/ProductCard */ "./src/components/shared/ProductCard.tsx");
/* harmony import */ var _shared_StroykaSlick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/StroykaSlick */ "./src/components/shared/StroykaSlick.tsx");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\blocks\\BlockProductsCarousel.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// react
 // third-party


// application




function getProductsColumns(products, rows) {
  const columns = [];

  if (rows > 0) {
    const productsQueue = products.slice();

    while (productsQueue.length > 0) {
      columns.push(productsQueue.splice(0, rows));
    }
  }

  return columns;
}

const slickSettings = {
  'grid-4': {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 479,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  },
  'grid-4-sm': {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 474,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  },
  'grid-5': {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 479,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  },
  horizontal: {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }
};

function BlockProductsCarousel(props) {
  const {
    title,
    layout = 'grid-4',
    rows = 1,
    products = [],
    groups = [],
    withSidebar = false,
    loading = false,
    onGroupClick
  } = props;
  const slickRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleNextClick = () => {
    if (slickRef.current) {
      slickRef.current.slickNext();
    }
  };

  const handlePrevClick = () => {
    if (slickRef.current) {
      slickRef.current.slickPrev();
    }
  };

  const columns = getProductsColumns(products, rows).map((column, index) => {
    const products = column.map(product => __jsx("div", {
      key: product.id,
      className: "block-products-carousel__cell",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 13
      }
    }, __jsx(_shared_ProductCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      product: product,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 17
      }
    })));
    return __jsx("div", {
      key: index,
      className: "block-products-carousel__column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }
    }, products);
  });
  const blockClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('block block-products-carousel', {
    'block-products-carousel--loading': loading,
    'block-products-carousel--has-items': columns.length > 0
  });
  const containerClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    container: !withSidebar
  });
  return __jsx("div", {
    className: blockClasses,
    "data-layout": layout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: containerClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  }, __jsx(_shared_BlockHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    groups: groups,
    arrows: true,
    onNext: handleNextClick,
    onPrev: handlePrevClick,
    onGroupClick: onGroupClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "block-products-carousel__slider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "block-products-carousel__preloader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 21
    }
  }), __jsx(_shared_StroykaSlick__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    ref: slickRef
  }, slickSettings[layout], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }), columns))));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockProductsCarousel);

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

/***/ "./src/components/home/HomePageTwo.tsx":
/*!*********************************************!*\
  !*** ./src/components/home/HomePageTwo.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/shop */ "./src/api/shop.ts");
/* harmony import */ var _services_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/hooks */ "./src/services/hooks.ts");
/* harmony import */ var _blocks_BlockBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blocks/BlockBanner */ "./src/components/blocks/BlockBanner.tsx");
/* harmony import */ var _blocks_BlockBrands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/BlockBrands */ "./src/components/blocks/BlockBrands.tsx");
/* harmony import */ var _blocks_BlockCategories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/BlockCategories */ "./src/components/blocks/BlockCategories.tsx");
/* harmony import */ var _blocks_BlockPosts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/BlockPosts */ "./src/components/blocks/BlockPosts.tsx");
/* harmony import */ var _blocks_BlockProductColumns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blocks/BlockProductColumns */ "./src/components/blocks/BlockProductColumns.tsx");
/* harmony import */ var _blocks_BlockProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blocks/BlockProducts */ "./src/components/blocks/BlockProducts.tsx");
/* harmony import */ var _blocks_BlockProductsCarousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../blocks/BlockProductsCarousel */ "./src/components/blocks/BlockProductsCarousel.tsx");
/* harmony import */ var _blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../blocks/BlockSlideShow */ "./src/components/blocks/BlockSlideShow.tsx");
/* harmony import */ var _data_blogPosts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data/blogPosts */ "./src/data/blogPosts.ts");
/* harmony import */ var _data_shopBlockCategories__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/shopBlockCategories */ "./src/data/shopBlockCategories.ts");
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../data/theme */ "./src/data/theme.ts");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\home\\HomePageTwo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party

 // application


 // blocks








 // data stubs





function HomePageTwo(props) {
  const {
    initData
  } = props;
  /**
   * Featured products.
   */

  const featuredProducts = Object(_services_hooks__WEBPACK_IMPORTED_MODULE_3__["useProductTabs"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => [{
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
  }], []), tab => _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getPopularProducts({
    limit: 12,
    category: tab.categorySlug
  }), initData === null || initData === void 0 ? void 0 : initData.featuredProducts);
  /**
   * Bestsellers.
   */

  const bestsellers = Object(_services_hooks__WEBPACK_IMPORTED_MODULE_3__["useDeferredData"])(() => _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getPopularProducts({
    limit: 7
  }), [], initData === null || initData === void 0 ? void 0 : initData.bestsellers);
  /**
   * Latest products.
   */

  const latestProducts = Object(_services_hooks__WEBPACK_IMPORTED_MODULE_3__["useProductTabs"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => [{
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
  }], []), tab => _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getLatestProducts({
    limit: 8,
    category: tab.categorySlug
  }), initData === null || initData === void 0 ? void 0 : initData.latestProducts);
  /**
   * Product columns.
   */

  const columns = (initData === null || initData === void 0 ? void 0 : initData.productColumns) || Object(_services_hooks__WEBPACK_IMPORTED_MODULE_3__["useProductColumns"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => [{
    title: 'Top Rated Products',
    source: () => _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getTopRatedProducts({
      limit: 3
    })
  }, {
    title: 'Special Offers',
    source: () => _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getDiscountedProducts({
      limit: 3
    })
  }, {
    title: 'Bestsellers',
    source: () => _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getPopularProducts({
      limit: 3
    })
  }], []));
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
  }, `Home — ${_data_theme__WEBPACK_IMPORTED_MODULE_14__["default"].name}`)), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_blocks_BlockSlideShow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 28
    }
  }), []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_blocks_BlockBrands__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 28
    }
  }), []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_blocks_BlockCategories__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Suppliers",
    layout: "compact",
    categories: _data_shopBlockCategories__WEBPACK_IMPORTED_MODULE_13__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }), []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_blocks_BlockProductsCarousel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Featured Products",
    layout: "grid-5",
    rows: 2,
    products: featuredProducts.data,
    loading: featuredProducts.isLoading,
    groups: featuredProducts.tabs,
    onGroupClick: featuredProducts.handleTabChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }), [featuredProducts]), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_blocks_BlockBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 28
    }
  }), []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_blocks_BlockProducts__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Bestsellers",
    layout: "large-last",
    featuredProduct: bestsellers.data[0],
    products: bestsellers.data.slice(1, 7),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }), [bestsellers.data]), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_blocks_BlockProductsCarousel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "New Arrivals",
    layout: "grid-5",
    products: latestProducts.data,
    loading: latestProducts.isLoading,
    groups: latestProducts.tabs,
    onGroupClick: latestProducts.handleTabChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }), [latestProducts]), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_blocks_BlockPosts__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Latest News",
    layout: "grid-nl",
    posts: _data_blogPosts__WEBPACK_IMPORTED_MODULE_12__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 28
    }
  }), []), Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => __jsx(_blocks_BlockProductColumns__WEBPACK_IMPORTED_MODULE_8__["default"], {
    columns: columns,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 28
    }
  }), [columns]));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePageTwo);

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

/***/ "./src/components/shared/AsyncAction.tsx":
/*!***********************************************!*\
  !*** ./src/components/shared/AsyncAction.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// react


function AsyncAction(props) {
  const {
    action,
    render
  } = props;
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const canceledRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);

  const run = () => {
    if (loading || !action) {
      return;
    }

    setLoading(true);
    action().then(() => {
      if (canceledRef.current) {
        return;
      }

      setLoading(false);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => {
    canceledRef.current = true;
  }, [canceledRef]);

  if (render) {
    return render({
      run,
      loading
    });
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (AsyncAction);

/***/ }),

/***/ "./src/components/shared/BlockHeader.tsx":
/*!***********************************************!*\
  !*** ./src/components/shared/BlockHeader.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\shared\\BlockHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party

 // application

var ArrowRoundedLeft7x11Svg = function ArrowRoundedLeft7x11Svg(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M6.7.3c-.4-.4-.9-.4-1.3 0L0 5.5l5.4 5.2c.4.4.9.3 1.3 0 .4-.4.4-1 0-1.3l-4-3.9 4-3.9c.4-.4.4-1 0-1.3z"
  }));
};

ArrowRoundedLeft7x11Svg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "7",
  height: "11"
};

var ArrowRoundedRight7x11Svg = function ArrowRoundedRight7x11Svg(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.3 10.7c.4.4.9.4 1.3 0L7 5.5 1.6.3C1.2-.1.7 0 .3.3c-.4.4-.4 1 0 1.3l4 3.9-4 3.9c-.4.4-.4 1 0 1.3z"
  }));
};

ArrowRoundedRight7x11Svg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "7",
  height: "11"
};

function BlockHeader(props) {
  const {
    title,
    arrows,
    groups = [],
    onPrev,
    onNext,
    onGroupClick = () => {}
  } = props;
  let groupsList;

  if (groups.length > 0) {
    groupsList = groups.map((group, index) => {
      const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('block-header__group', {
        'block-header__group--active': group.current
      });
      return __jsx("li", {
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }
      }, __jsx("button", {
        type: "button",
        className: classes,
        onClick: () => onGroupClick(group),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }
      }, group.name));
    });
    groupsList = __jsx("ul", {
      className: "block-header__groups-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, groupsList);
  }

  return __jsx("div", {
    className: "block-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "block-header__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, title), __jsx("div", {
    className: "block-header__divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), groupsList, arrows && __jsx("div", {
    className: "block-header__arrows-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "block-header__arrow block-header__arrow--left",
    type: "button",
    onClick: onPrev,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx(ArrowRoundedLeft7x11Svg, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  })), __jsx("button", {
    className: "block-header__arrow block-header__arrow--right",
    type: "button",
    onClick: onNext,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx(ArrowRoundedRight7x11Svg, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockHeader);

/***/ }),

/***/ "./src/components/shared/CurrencyFormat.tsx":
/*!**************************************************!*\
  !*** ./src/components/shared/CurrencyFormat.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_currency_currencyHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/currency/currencyHooks */ "./src/store/currency/currencyHooks.ts");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\shared\\CurrencyFormat.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // application



function CurrencyFormat(props) {
  const {
    value,
    currency
  } = props;
  const currentCurrency = Object(_store_currency_currencyHooks__WEBPACK_IMPORTED_MODULE_1__["useCurrency"])();
  const {
    symbol
  } = currency || currentCurrency;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }
  }, `${symbol}${value.toFixed(2)}`);
}

/* harmony default export */ __webpack_exports__["default"] = (CurrencyFormat);

/***/ }),

/***/ "./src/components/shared/PostCard.tsx":
/*!********************************************!*\
  !*** ./src/components/shared/PostCard.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppLink */ "./src/components/shared/AppLink.tsx");
/* harmony import */ var _services_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/url */ "./src/services/url.ts");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\shared\\PostCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party

 // application




function PostCard(props) {
  const {
    post,
    layout
  } = props;
  const cardClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('post-card', {
    'post-card--layout--grid': layout && ['grid-nl', 'grid-lg'].includes(layout),
    'post-card--layout--list': layout && ['list-nl', 'list-sm'].includes(layout),
    'post-card--size--nl': layout && ['grid-nl', 'list-nl'].includes(layout),
    'post-card--size--lg': layout === 'grid-lg',
    'post-card--size--sm': layout === 'list-sm'
  });
  const categories = post.categories.map((category, index) => __jsx(_AppLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: index,
    href: _services_url__WEBPACK_IMPORTED_MODULE_3__["default"].blogCategory(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, category));
  return __jsx("div", {
    className: cardClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "post-card__image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_AppLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: _services_url__WEBPACK_IMPORTED_MODULE_3__["default"].blogPost(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: post.image,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "post-card__info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "post-card__category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, categories), __jsx("div", {
    className: "post-card__name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(_AppLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: _services_url__WEBPACK_IMPORTED_MODULE_3__["default"].blogPost(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, post.title)), __jsx("div", {
    className: "post-card__date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, post.date), __jsx("div", {
    className: "post-card__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "In one general sense, philosophy is associated with wisdom, intellectual culture and a search for knowledge. In that sense, all cultures..."), __jsx("div", {
    className: "post-card__read-more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(_AppLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    className: "btn btn-secondary btn-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, "Read More"))));
}

/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./src/components/shared/ProductCard.tsx":
/*!***********************************************!*\
  !*** ./src/components/shared/ProductCard.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppLink */ "./src/components/shared/AppLink.tsx");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AsyncAction */ "./src/components/shared/AsyncAction.tsx");
/* harmony import */ var _CurrencyFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CurrencyFormat */ "./src/components/shared/CurrencyFormat.tsx");
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Rating */ "./src/components/shared/Rating.tsx");
/* harmony import */ var _services_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/url */ "./src/services/url.ts");
/* harmony import */ var _store_compare_compareHooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/compare/compareHooks */ "./src/store/compare/compareHooks.ts");
/* harmony import */ var _store_quickview_quickviewHooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/quickview/quickviewHooks */ "./src/store/quickview/quickviewHooks.ts");
/* harmony import */ var _store_wishlist_wishlistHooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/wishlist/wishlistHooks */ "./src/store/wishlist/wishlistHooks.ts");
/* harmony import */ var _store_cart_cartHooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/cart/cartHooks */ "./src/store/cart/cartHooks.ts");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\shared\\ProductCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party

 // application




var Compare16Svg = function Compare16Svg(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M9 15H7c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1zM1 9h2c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1zM15 5h-2c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1z"
  }));
};

Compare16Svg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};


var Quickview16Svg = function Quickview16Svg(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M14 15h-4v-2h3v-3h2v4c0 .6-.4 1-1 1zM13 3h-3V1h4c.6 0 1 .4 1 1v4h-2V3zM6 3H3v3H1V2c0-.6.4-1 1-1h4v2zM3 13h3v2H2c-.6 0-1-.4-1-1v-4h2v3z"
  }));
};

Quickview16Svg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};



var Wishlist16Svg = function Wishlist16Svg(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M13.9 8.4l-5.4 5.4c-.3.3-.7.3-1 0L2.1 8.4C.6 6.9.6 4.6 2.1 3.1 2.8 2.4 3.8 2 4.8 2s1.9.4 2.6 1.1l.6.6.6-.6c.7-.7 1.7-1.1 2.7-1.1 1 0 1.9.4 2.6 1.1 1.5 1.5 1.5 3.8 0 5.3z"
  }));
};

Wishlist16Svg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16"
};





function ProductCard(props) {
  const {
    product,
    layout
  } = props;
  const containerClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-card', {
    'product-card--layout--grid product-card--size--sm': layout === 'grid-sm',
    'product-card--layout--grid product-card--size--nl': layout === 'grid-nl',
    'product-card--layout--grid product-card--size--lg': layout === 'grid-lg',
    'product-card--layout--list': layout === 'list',
    'product-card--layout--horizontal': layout === 'horizontal'
  });
  const cartAddItem = Object(_store_cart_cartHooks__WEBPACK_IMPORTED_MODULE_10__["useCartAddItem"])();
  const wishlistAddItem = Object(_store_wishlist_wishlistHooks__WEBPACK_IMPORTED_MODULE_9__["useWishlistAddItem"])();
  const compareAddItem = Object(_store_compare_compareHooks__WEBPACK_IMPORTED_MODULE_7__["useCompareAddItem"])();
  const quickviewOpen = Object(_store_quickview_quickviewHooks__WEBPACK_IMPORTED_MODULE_8__["useQuickviewOpen"])();
  const badges = [];
  let image;
  let price;
  let features;

  if (product.badges.includes('sale')) {
    badges.push(__jsx("div", {
      key: "sale",
      className: "product-card__badge product-card__badge--sale",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, "Sale"));
  }

  if (product.badges.includes('hot')) {
    badges.push(__jsx("div", {
      key: "hot",
      className: "product-card__badge product-card__badge--hot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, "Hot"));
  }

  if (product.badges.includes('new')) {
    badges.push(__jsx("div", {
      key: "new",
      className: "product-card__badge product-card__badge--new",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, "New"));
  }

  if (product.images && product.images.length > 0) {
    image = __jsx("div", {
      className: "product-card__image product-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, __jsx(_AppLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: _services_url__WEBPACK_IMPORTED_MODULE_6__["default"].product(product),
      className: "product-image__body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }, __jsx("img", {
      className: "product-image__img",
      src: product.images[0],
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    })));
  }

  if (product.compareAtPrice) {
    price = __jsx("div", {
      className: "product-card__prices",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: "product-card__new-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, __jsx(_CurrencyFormat__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: product.price,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 59
      }
    })), ' ', __jsx("span", {
      className: "product-card__old-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, __jsx(_CurrencyFormat__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: product.compareAtPrice,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 59
      }
    })));
  } else {
    price = __jsx("div", {
      className: "product-card__prices",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, __jsx(_CurrencyFormat__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: product.price,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }));
  }

  if (product.attributes && product.attributes.length) {
    features = __jsx("ul", {
      className: "product-card__features-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, product.attributes.filter(x => x.featured).map((attribute, index) => __jsx("li", {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }
    }, `${attribute.name}: ${attribute.values.map(x => x.name).join(', ')}`)));
  }

  return __jsx("div", {
    className: containerClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(_AsyncAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
    action: () => quickviewOpen(product.slug),
    render: ({
      run,
      loading
    }) => __jsx("button", {
      type: "button",
      onClick: run,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-card__quickview', {
        'product-card__quickview--preload': loading
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    }, __jsx(Quickview16Svg, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 25
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), badges.length > 0 && __jsx("div", {
    className: "product-card__badges-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, badges), image, __jsx("div", {
    className: "product-card__info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-card__name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, __jsx(_AppLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: _services_url__WEBPACK_IMPORTED_MODULE_6__["default"].product(product),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, product.name)), __jsx("div", {
    className: "product-card__rating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx(_Rating__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: product.rating,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: " product-card__rating-legend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, `${product.reviews} Reviews`)), features), __jsx("div", {
    className: "product-card__actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-card__availability",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, "Availability:", __jsx("span", {
    className: "text-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, "In Stock")), price, __jsx("div", {
    className: "product-card__buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, __jsx(_AsyncAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
    action: () => cartAddItem(product),
    render: ({
      run,
      loading
    }) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 29
      }
    }, __jsx("button", {
      type: "button",
      onClick: run,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('btn btn-primary product-card__addtocart', {
        'btn-loading': loading
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 33
      }
    }, "Add To Cart"), __jsx("button", {
      type: "button",
      onClick: run,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('btn btn-secondary product-card__addtocart product-card__addtocart--list', {
        'btn-loading': loading
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 33
      }
    }, "Add To Cart")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }), __jsx(_AsyncAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
    action: () => wishlistAddItem(product),
    render: ({
      run,
      loading
    }) => __jsx("button", {
      type: "button",
      onClick: run,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist', {
        'btn-loading': loading
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 29
      }
    }, __jsx(Wishlist16Svg, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 33
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  }), __jsx(_AsyncAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
    action: () => compareAddItem(product),
    render: ({
      run,
      loading
    }) => __jsx("button", {
      type: "button",
      onClick: run,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare', {
        'btn-loading': loading
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 29
      }
    }, __jsx(Compare16Svg, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 33
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductCard));

/***/ }),

/***/ "./src/components/shared/Rating.tsx":
/*!******************************************!*\
  !*** ./src/components/shared/Rating.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\components\\shared\\Rating.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party

 // application

var Rating13x12Svg = function Rating13x12Svg(props) {
  return __jsx("svg", props, __jsx("path", {
    className: "rating__fill",
    d: "M7 .3L9 4h3.5c.4.1.6.8.3 1.1L10 7.4l1 4c.1.4-.4.8-.8.6l-3.7-2-3.7 1.9c-.4.2-.9-.1-.8-.6l1-4L.2 5.1C-.2 4.8 0 4.1.5 4H4L6 .3c.2-.4.8-.4 1 0z"
  }), __jsx("path", {
    className: "rating__stroke",
    d: "M6.5 1.5l1.6 3 .3.5h3l-2 1.6-.5.4.1.6.7 3L7 9.1l-.5-.2-.5.2-2.8 1.5.7-3 .2-.6-.5-.4-2-1.6h3l.3-.5 1.6-3m0-1.5c-.2 0-.4.1-.5.3L4 4H.5c-.5.1-.7.8-.3 1.1L3 7.4l-1 4c-.1.3.2.6.5.6.1 0 .2 0 .3-.1L6.5 10l3.7 1.9c.1 0 .2.1.3.1.3 0 .6-.3.5-.6l-1-4 2.8-2.3c.3-.3.1-1-.3-1.1H9L7 .3C6.9.1 6.7 0 6.5 0z"
  }));
};

Rating13x12Svg.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "13",
  height: "12"
};

function Rating(props) {
  const {
    value = 0
  } = props;
  const stars = [1, 2, 3, 4, 5].map(rating => {
    const rootClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('rating__star', {
      'rating__star--active': value >= rating
    });
    return __jsx(Rating13x12Svg, {
      key: rating,
      className: rootClasses,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 16
      }
    });
  });
  return __jsx("div", {
    className: "rating",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "rating__body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, stars));
}

/* harmony default export */ __webpack_exports__["default"] = (Rating);

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
      if (direction === 'rtl') {
        originalSlickNextRef.current();
      } else {
        originalSlickNextRef.current();
      }
    };

    slickPrevRef.current = () => {
      if (direction === 'rtl') {
        originalSlickNextRef.current();
      } else {
        originalSlickPrevRef.current();
      }
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

  if (direction === 'rtl') {
    reversedChildren = reversedChildren.slice(0);
    reversedChildren.reverse();
  }

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
        lineNumber: 243,
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
        lineNumber: 251,
        columnNumber: 9
      }
    }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, otherProps, {
      rtl: direction === 'rtl',
      beforeChange: beforeChangeWrapper,
      ref: setSlickRef,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
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
      lineNumber: 267,
      columnNumber: 13
    }
  }), children);
}));

/***/ }),

/***/ "./src/data/blogPosts.ts":
/*!*******************************!*\
  !*** ./src/data/blogPosts.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dataBlogPosts = [{
  id: 1,
  title: 'A Variety Of Other Academic And Non-Academic Approaches Have Been Explored',
  image: '/images/posts/post-1.jpg',
  categories: ['Special Offers'],
  date: 'October 19, 2019'
}, {
  id: 2,
  title: 'Logic Is The Study Of Reasoning And Argument Part 2',
  image: '/images/posts/post-2.jpg',
  categories: ['Latest News'],
  date: 'September 5, 2019'
}, {
  id: 3,
  title: 'Some Philosophers Specialize In One Or More Historical Periods',
  image: '/images/posts/post-3.jpg',
  categories: ['New Arrivals'],
  date: 'August 12, 2019'
}, {
  id: 4,
  title: 'Philosophy That Addresses Topics Such As Goodness',
  image: '/images/posts/post-4.jpg',
  categories: ['Special Offers'],
  date: 'Jule 30, 2019'
}, {
  id: 5,
  title: 'Germany Was The First Country To Professionalize Philosophy',
  image: '/images/posts/post-5.jpg',
  categories: ['New Arrivals'],
  date: 'June 12, 2019'
}, {
  id: 6,
  title: 'Logic Is The Study Of Reasoning And Argument Part 1',
  image: '/images/posts/post-6.jpg',
  categories: ['Special Offers'],
  date: 'May 21, 2019'
}, {
  id: 7,
  title: 'Many Inquiries Outside Of Academia Are Philosophical In The Broad Sense',
  image: '/images/posts/post-7.jpg',
  categories: ['Special Offers'],
  date: 'April 3, 2019'
}, {
  id: 8,
  title: 'An Advantage Of Digital Circuits When Compared To Analog Circuits',
  image: '/images/posts/post-8.jpg',
  categories: ['Latest News'],
  date: 'Mart 29, 2019'
}, {
  id: 9,
  title: 'A Digital Circuit Is Typically Constructed From Small Electronic Circuits',
  image: '/images/posts/post-9.jpg',
  categories: ['New Arrivals'],
  date: 'February 10, 2019'
}, {
  id: 10,
  title: 'Engineers Use Many Methods To Minimize Logic Functions',
  image: '/images/posts/post-10.jpg',
  categories: ['Special Offers'],
  date: 'January 1, 2019'
}];
/* harmony default export */ __webpack_exports__["default"] = (dataBlogPosts);

/***/ }),

/***/ "./src/data/shopBlockCategories.ts":
/*!*****************************************!*\
  !*** ./src/data/shopBlockCategories.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dataShopBlockCategories = [{
  type: 'shop',
  id: 1,
  slug: 'power-tools',
  name: 'Power Tools',
  items: 572,
  image: '/images/categories/category-1.jpg',
  customFields: {},
  children: [{
    type: 'shop',
    id: 2,
    slug: 'power-tools',
    name: 'Screwdrivers',
    customFields: {}
  }, {
    type: 'shop',
    id: 3,
    slug: 'power-tools',
    name: 'Milling Cutters',
    customFields: {}
  }, {
    type: 'shop',
    id: 4,
    slug: 'power-tools',
    name: 'Sanding Machines',
    customFields: {}
  }, {
    type: 'shop',
    id: 5,
    slug: 'power-tools',
    name: 'Wrenches',
    customFields: {}
  }, {
    type: 'shop',
    id: 6,
    slug: 'power-tools',
    name: 'Drills',
    customFields: {}
  }]
}, {
  type: 'shop',
  id: 7,
  slug: 'power-tools',
  name: 'Hand Tools',
  items: 134,
  image: '/images/categories/category-2.jpg',
  customFields: {},
  children: [{
    type: 'shop',
    id: 8,
    slug: 'power-tools',
    name: 'Screwdrivers',
    customFields: {}
  }, {
    type: 'shop',
    id: 9,
    slug: 'power-tools',
    name: 'Hammers',
    customFields: {}
  }, {
    type: 'shop',
    id: 10,
    slug: 'power-tools',
    name: 'Spanners',
    customFields: {}
  }, {
    type: 'shop',
    id: 11,
    slug: 'power-tools',
    name: 'Handsaws',
    customFields: {}
  }, {
    type: 'shop',
    id: 12,
    slug: 'power-tools',
    name: 'Paint Tools',
    customFields: {}
  }]
}, {
  type: 'shop',
  id: 13,
  slug: 'power-tools',
  name: 'Machine Tools',
  items: 301,
  image: '/images/categories/category-4.jpg',
  customFields: {},
  children: [{
    type: 'shop',
    id: 14,
    slug: 'power-tools',
    name: 'Lathes',
    customFields: {}
  }, {
    type: 'shop',
    id: 15,
    slug: 'power-tools',
    name: 'Milling Machines',
    customFields: {}
  }, {
    type: 'shop',
    id: 16,
    slug: 'power-tools',
    name: 'Grinding Machines',
    customFields: {}
  }, {
    type: 'shop',
    id: 17,
    slug: 'power-tools',
    name: 'CNC Machines',
    customFields: {}
  }, {
    type: 'shop',
    id: 18,
    slug: 'power-tools',
    name: 'Sharpening Machines',
    customFields: {}
  }]
}, {
  type: 'shop',
  id: 19,
  slug: 'power-tools',
  name: 'Power Machinery',
  items: 79,
  image: '/images/categories/category-3.jpg',
  customFields: {},
  children: [{
    type: 'shop',
    id: 20,
    slug: 'power-tools',
    name: 'Generators',
    customFields: {}
  }, {
    type: 'shop',
    id: 21,
    slug: 'power-tools',
    name: 'Compressors',
    customFields: {}
  }, {
    type: 'shop',
    id: 22,
    slug: 'power-tools',
    name: 'Winches',
    customFields: {}
  }, {
    type: 'shop',
    id: 23,
    slug: 'power-tools',
    name: 'Plasma Cutting',
    customFields: {}
  }, {
    type: 'shop',
    id: 24,
    slug: 'power-tools',
    name: 'Electric Motors',
    customFields: {}
  }]
}, {
  type: 'shop',
  id: 25,
  slug: 'power-tools',
  name: 'Measurement',
  items: 366,
  image: '/images/categories/category-5.jpg',
  customFields: {},
  children: [{
    type: 'shop',
    id: 26,
    slug: 'power-tools',
    name: 'Tape Measure',
    customFields: {}
  }, {
    type: 'shop',
    id: 27,
    slug: 'power-tools',
    name: 'Theodolites',
    customFields: {}
  }, {
    type: 'shop',
    id: 28,
    slug: 'power-tools',
    name: 'Thermal Imagers',
    customFields: {}
  }, {
    type: 'shop',
    id: 29,
    slug: 'power-tools',
    name: 'Calipers',
    customFields: {}
  }, {
    type: 'shop',
    id: 30,
    slug: 'power-tools',
    name: 'Levels',
    customFields: {}
  }]
}, {
  type: 'shop',
  id: 31,
  slug: 'power-tools',
  name: 'Clothes and PPE',
  items: 81,
  image: '/images/categories/category-6.jpg',
  customFields: {},
  children: [{
    type: 'shop',
    id: 26,
    slug: 'power-tools',
    name: 'Winter Workwear',
    customFields: {}
  }, {
    type: 'shop',
    id: 27,
    slug: 'power-tools',
    name: 'Summer Workwear',
    customFields: {}
  }, {
    type: 'shop',
    id: 28,
    slug: 'power-tools',
    name: 'Helmets',
    customFields: {}
  }, {
    type: 'shop',
    id: 29,
    slug: 'power-tools',
    name: 'Belts and Bags',
    customFields: {}
  }, {
    type: 'shop',
    id: 30,
    slug: 'power-tools',
    name: 'Work Shoes',
    customFields: {}
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (dataShopBlockCategories);

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

/***/ "./src/data/shopCurrencies.ts":
/*!************************************!*\
  !*** ./src/data/shopCurrencies.ts ***!
  \************************************/
/*! exports provided: dataShopDefaultCurrency, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataShopDefaultCurrency", function() { return dataShopDefaultCurrency; });
const dataShopCurrencies = [{
  code: 'EUR',
  symbol: '€',
  name: 'Euro'
}, {
  code: 'GBP',
  symbol: '£',
  name: 'Pound Sterling'
}, {
  code: 'USD',
  symbol: '$',
  name: 'US Dollar'
}, {
  code: 'RUB',
  symbol: '₽',
  name: 'Russian Ruble'
}];
const dataShopDefaultCurrency = dataShopCurrencies.find(x => x.code === 'USD');
/* harmony default export */ __webpack_exports__["default"] = (dataShopCurrencies);

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
  name: 'Neo Tech',
  fullName: 'Neo Tech',
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
  apiurl: '127.0.0.1/core-api/'
});

/***/ }),

/***/ "./src/fake-server/database/attributes.ts":
/*!************************************************!*\
  !*** ./src/fake-server/database/attributes.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const attributesDef = [{
  name: 'Color',
  slug: 'color',
  values: [{
    name: 'White',
    slug: 'white'
  }, {
    name: 'Silver',
    slug: 'silver'
  }, {
    name: 'Light Gray',
    slug: 'light-gray'
  }, {
    name: 'Gray',
    slug: 'gray'
  }, {
    name: 'Dark Gray',
    slug: 'dark-gray'
  }, {
    name: 'Coal',
    slug: 'coal'
  }, {
    name: 'Black',
    slug: 'black'
  }, {
    name: 'Red',
    slug: 'red'
  }, {
    name: 'Orange',
    slug: 'orange'
  }, {
    name: 'Yellow',
    slug: 'yellow'
  }, {
    name: 'Pear Green',
    slug: 'pear-green'
  }, {
    name: 'Green',
    slug: 'green'
  }, {
    name: 'Emerald',
    slug: 'emerald'
  }, {
    name: 'Shamrock',
    slug: 'shamrock'
  }, {
    name: 'Shakespeare',
    slug: 'shakespeare'
  }, {
    name: 'Blue',
    slug: 'blue'
  }, {
    name: 'Dark Blue',
    slug: 'dark-blue'
  }, {
    name: 'Violet',
    slug: 'violet'
  }, {
    name: 'Purple',
    slug: 'purple'
  }, {
    name: 'Cerise',
    slug: 'cerise'
  }]
}, {
  name: 'Speed',
  slug: 'speed',
  values: [{
    name: '750 RPM',
    slug: '750-rpm'
  }]
}, {
  name: 'Power Source',
  slug: 'power-source',
  values: [{
    name: 'Cordless-Electric',
    slug: 'cordless-electric'
  }]
}, {
  name: 'Battery Cell Type',
  slug: 'battery-cell-type',
  values: [{
    name: 'Lithium',
    slug: 'lithium'
  }]
}, {
  name: 'Voltage',
  slug: 'voltage',
  values: [{
    name: '20 Volts',
    slug: '20-volts'
  }]
}, {
  name: 'Battery Capacity',
  slug: 'battery-capacity',
  values: [{
    name: '2 Ah',
    slug: '2-Ah'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (attributesDef);

/***/ }),

/***/ "./src/fake-server/database/brands.ts":
/*!********************************************!*\
  !*** ./src/fake-server/database/brands.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const brandsData = [{
  name: 'Brandix',
  slug: 'brandix',
  image: 'assets/images/logos/logo-1.png'
}, {
  name: 'Wakita',
  slug: 'wakita',
  image: 'assets/images/logos/logo-2.png'
}, {
  name: 'Zosch',
  slug: 'zosch',
  image: 'assets/images/logos/logo-3.png'
}, {
  name: 'WeVALT',
  slug: 'wevalt',
  image: 'assets/images/logos/logo-4.png'
}, {
  name: 'Hammer',
  slug: 'hammer',
  image: 'assets/images/logos/logo-5.png'
}, {
  name: 'Mitasia',
  slug: 'mitasia',
  image: 'assets/images/logos/logo-6.png'
}, {
  name: 'Metaggo',
  slug: 'metaggo',
  image: 'assets/images/logos/logo-7.png'
}];
/* harmony default export */ __webpack_exports__["default"] = (brandsData);

/***/ }),

/***/ "./src/fake-server/database/categories.ts":
/*!************************************************!*\
  !*** ./src/fake-server/database/categories.ts ***!
  \************************************************/
/*! exports provided: prepareCategory, categoriesTreeData, categoriesListData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareCategory", function() { return prepareCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoriesTreeData", function() { return categoriesTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoriesListData", function() { return categoriesListData; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/fake-server/utils.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const getId = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["makeIdGenerator"])();
const categoriesDef = [{
  name: 'Instruments',
  slug: 'instruments',
  items: 272,
  children: [{
    name: 'Power Tools',
    slug: 'power-tools',
    image: 'assets/images/categories/category-1.jpg',
    items: 370,
    children: [{
      name: 'Drills & Mixers',
      slug: 'drills-mixers',
      items: 57
    }, {
      name: 'Cordless Screwdrivers',
      slug: 'cordless-screwdrivers',
      items: 15
    }, {
      name: 'Screwdrivers',
      slug: 'screwdrivers',
      items: 126
    }, {
      name: 'Wrenches',
      slug: 'wrenches',
      items: 12
    }, {
      name: 'Grinding Machines',
      slug: 'grinding-machines',
      items: 25
    }, {
      name: 'Milling Cutters',
      slug: 'milling-cutters',
      items: 78
    }, {
      name: 'Electric Spray Guns',
      slug: 'electric-spray-guns',
      items: 3
    }]
  }, {
    name: 'Hand Tools',
    slug: 'hand-tools',
    image: 'assets/images/categories/category-2.jpg',
    items: 134,
    children: [{
      name: 'Tool Kits',
      slug: 'tool-kits',
      items: 57
    }, {
      name: 'Hammers',
      slug: 'hammers',
      items: 15
    }, {
      name: 'Spanners',
      slug: 'spanners',
      items: 5
    }, {
      name: 'Handsaws',
      slug: 'handsaws',
      items: 54
    }, {
      name: 'Paint Tools',
      slug: 'paint-tools',
      items: 13
    }]
  }, {
    name: 'Machine Tools',
    slug: 'machine-tools',
    image: 'assets/images/categories/category-3.jpg',
    items: 302,
    children: [{
      name: 'Lathes',
      slug: 'lathes',
      items: 104
    }, {
      name: 'Milling Machines',
      slug: 'milling-machines',
      items: 12
    }, {
      name: 'Grinding Machines',
      slug: 'grinding-machines',
      items: 67
    }, {
      name: 'CNC Machines',
      slug: 'cnc-machines',
      items: 5
    }, {
      name: 'Sharpening Machines',
      slug: 'sharpening-machines',
      items: 88
    }]
  }, {
    name: 'Power Machinery',
    slug: 'power-machinery',
    image: 'assets/images/categories/category-4.jpg',
    items: 79,
    children: [{
      name: 'Generators',
      slug: 'generators',
      items: 23
    }, {
      name: 'Compressors',
      slug: 'compressors',
      items: 76
    }, {
      name: 'Winches',
      slug: 'winches',
      items: 43
    }, {
      name: 'Plasma Cutting',
      slug: 'plasma-cutting',
      items: 128
    }, {
      name: 'Electric Motors',
      slug: 'electric-motors',
      items: 76
    }]
  }, {
    name: 'Measurement',
    slug: 'measurement',
    image: 'assets/images/categories/category-5.jpg',
    items: 366,
    children: [{
      name: 'Tape Measure',
      slug: 'tape-measure',
      items: 57
    }, {
      name: 'Theodolites',
      slug: 'theodolites',
      items: 5
    }, {
      name: 'Thermal Imagers',
      slug: 'thermal-imagers',
      items: 3
    }, {
      name: 'Calipers',
      slug: 'calipers',
      items: 37
    }, {
      name: 'Levels',
      slug: 'levels',
      items: 14
    }]
  }, {
    name: 'Clothes and PPE',
    slug: 'clothes-and-ppe',
    image: 'assets/images/categories/category-6.jpg',
    items: 82,
    children: [{
      name: 'Winter Workwear',
      slug: 'winter-workwear',
      items: 24
    }, {
      name: 'Summer Workwear',
      slug: 'summer-workwear',
      items: 87
    }, {
      name: 'Helmets',
      slug: 'helmets',
      items: 9
    }, {
      name: 'Belts and Bags',
      slug: 'belts-and-bags',
      items: 1
    }, {
      name: 'Work Shoes',
      slug: 'work-shoes',
      items: 0
    }]
  }]
}, {
  name: 'Electronics',
  slug: 'electronics',
  items: 54
}, {
  name: 'Computers',
  slug: 'computers',
  items: 421
}, {
  name: 'Automotive',
  slug: 'automotive',
  items: 182
}, {
  name: 'Furniture & Appliances',
  slug: 'furniture-appliances',
  items: 15
}, {
  name: 'Music & Books',
  slug: 'music-books',
  items: 89
}, {
  name: 'Health & Beauty',
  slug: 'health-beauty',
  items: 201
}];

function makeShopCategory(def) {
  return {
    type: 'shop',
    id: getId(),
    name: def.name,
    slug: def.slug || Object(_utils__WEBPACK_IMPORTED_MODULE_0__["nameToSlug"])(def.name),
    image: def.image,
    items: def.items || 0,
    customFields: {},
    parent: undefined,
    children: []
  };
}

function walkTree(makeFn, defs, parent) {
  let list = [];
  const tree = defs.map(def => {
    const category = makeFn(def);
    const [childrenTree, childrenList] = walkTree(makeFn, def.children || [], category);
    category.parent = parent;
    category.children = childrenTree;
    list = [...list, category, ...childrenList];
    return category;
  });
  return [tree, list];
}

function prepareCategory(category, depth) {
  let children;

  if (depth && depth > 0) {
    children = category.children && category.children.map(x => prepareCategory(x, depth - 1));
  }

  return JSON.parse(JSON.stringify(_objectSpread(_objectSpread({}, category), {}, {
    parent: category.parent ? prepareCategory(category.parent) : null,
    children
  })));
}
const [categoriesTreeData, categoriesListData] = walkTree(makeShopCategory, categoriesDef);

/***/ }),

/***/ "./src/fake-server/database/products.ts":
/*!**********************************************!*\
  !*** ./src/fake-server/database/products.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/fake-server/utils.ts");
/* harmony import */ var _brands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brands */ "./src/fake-server/database/brands.ts");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories */ "./src/fake-server/database/categories.ts");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/fake-server/database/attributes.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const getId = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["makeIdGenerator"])();
const productsDef = [{
  slug: 'electric-planer-brandix-kl370090g-300-watts',
  name: 'Electric Planer Brandix KL370090G 300 Watts',
  price: 749,
  images: ['/images/products/product-1.jpg', '/images/products/product-1-1.jpg'],
  badges: 'new',
  rating: 4,
  reviews: 12,
  availability: 'in-stock',
  brand: 'brandix',
  categories: ['screwdrivers'],
  attributes: [{
    slug: 'color',
    values: 'yellow'
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'undefined-tool-iradix-dps3000sy-2700-watts',
  name: 'Undefined Tool IRadix DPS3000SY 2700 Watts',
  price: 1019,
  images: ['/images/products/product-2.jpg', '/images/products/product-2-1.jpg'],
  badges: 'hot',
  rating: 5,
  reviews: 3,
  availability: 'in-stock',
  brand: 'zosch',
  categories: ['instruments'],
  attributes: [{
    slug: 'color',
    values: ['silver', 'cerise']
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'drill-screwdriver-brandix-alx7054-200-watts',
  name: 'Drill Screwdriver Brandix ALX7054 200 Watts',
  price: 850,
  images: ['/images/products/product-3.jpg', '/images/products/product-3-1.jpg'],
  rating: 4,
  reviews: 8,
  availability: 'in-stock',
  brand: 'brandix',
  categories: ['power-tools'],
  attributes: [{
    slug: 'color',
    values: 'yellow'
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'drill-series-3-brandix-ksr4590pqs-1500-watts',
  name: 'Drill Series 3 Brandix KSR4590PQS 1500 Watts',
  price: 949,
  compareAtPrice: 1189,
  images: ['/images/products/product-4.jpg', '/images/products/product-4-1.jpg'],
  badges: 'sale',
  rating: 3,
  reviews: 15,
  availability: 'in-stock',
  brand: 'brandix',
  categories: [],
  attributes: [{
    slug: 'color',
    values: 'white'
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'brandix-router-power-tool-2017erxpk',
  name: 'Brandix Router Power Tool 2017ERXPK',
  price: 1700,
  images: ['/images/products/product-5.jpg', '/images/products/product-5-1.jpg'],
  rating: 4,
  reviews: 2,
  availability: 'in-stock',
  brand: 'wakita',
  categories: [],
  attributes: [{
    slug: 'color',
    values: 'dark-blue'
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'brandix-drilling-machine-dm2019kw4-4kw',
  name: 'Brandix Drilling Machine DM2019KW4 4kW',
  price: 3199,
  images: ['/images/products/product-6.jpg', '/images/products/product-6-1.jpg'],
  rating: 3,
  reviews: 21,
  availability: 'in-stock',
  brand: 'wakita',
  categories: [],
  attributes: [{
    slug: 'color',
    values: 'orange'
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'brandix-pliers',
  name: 'Brandix Pliers',
  price: 24,
  images: ['/images/products/product-7.jpg', '/images/products/product-7-1.jpg'],
  rating: 2,
  reviews: 1,
  availability: 'in-stock',
  brand: 'wevalt',
  categories: [],
  attributes: [{
    slug: 'color',
    values: 'red'
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'water-hose-40cm',
  name: 'Water Hose 40cm',
  price: 15,
  images: ['/images/products/product-8.jpg', '/images/products/product-8-1.jpg'],
  rating: 2,
  reviews: 5,
  availability: 'in-stock',
  brand: 'hammer',
  categories: [],
  attributes: [{
    slug: 'color',
    values: ['pear-green', 'blue']
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'spanner-wrench',
  name: 'Spanner Wrench',
  price: 19,
  images: ['/images/products/product-9.jpg', '/images/products/product-9-1.jpg'],
  rating: 4,
  reviews: 34,
  availability: 'in-stock',
  brand: 'hammer',
  categories: [],
  attributes: [{
    slug: 'color',
    values: 'green'
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'water-tap',
  name: 'Water Tap',
  price: 15,
  images: ['/images/products/product-10.jpg', '/images/products/product-10-1.jpg'],
  rating: 5,
  reviews: 3,
  availability: 'in-stock',
  brand: 'hammer',
  categories: [],
  attributes: [{
    slug: 'color',
    values: 'gray'
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'hand-tool-kit',
  name: 'Hand Tool Kit',
  price: 149,
  images: ['/images/products/product-11.jpg', '/images/products/product-11-1.jpg'],
  rating: 4,
  reviews: 7,
  availability: 'in-stock',
  brand: 'hammer',
  categories: [],
  attributes: [{
    slug: 'color',
    values: 'black'
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'ash-s-chainsaw-3.5kw',
  name: 'Ash\'s Chainsaw 3.5kW',
  price: 666.99,
  images: ['/images/products/product-12.jpg', '/images/products/product-12-1.jpg'],
  rating: 5,
  reviews: 17,
  availability: 'in-stock',
  brand: 'mitasia',
  categories: [],
  attributes: [{
    slug: 'color',
    values: 'violet'
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'brandix-angle-grinder-kzx3890pqw',
  name: 'Brandix Angle Grinder KZX3890PQW',
  price: 649,
  images: ['/images/products/product-13.jpg', '/images/products/product-13-1.jpg'],
  rating: 2,
  reviews: 8,
  availability: 'in-stock',
  brand: 'mitasia',
  categories: [],
  attributes: [{
    slug: 'color',
    values: 'purple'
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'brandix-air-compressor-deltakx500',
  name: 'Brandix Air Compressor DELTAKX500',
  price: 1800,
  images: ['/images/products/product-14.jpg', '/images/products/product-14-1.jpg'],
  rating: 3,
  reviews: 14,
  availability: 'in-stock',
  brand: 'brandix',
  categories: [],
  attributes: [{
    slug: 'color',
    values: ['light-gray', 'emerald']
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'brandix-electric-jigsaw-jig7000bq',
  name: 'Brandix Electric Jigsaw JIG7000BQ',
  price: 290,
  images: ['/images/products/product-15.jpg', '/images/products/product-15-1.jpg'],
  rating: 2,
  reviews: 1,
  availability: 'in-stock',
  brand: 'brandix',
  categories: [],
  attributes: [{
    slug: 'color',
    values: ['coal', 'shamrock']
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}, {
  slug: 'brandix-screwdriver-screw1500acc',
  name: 'Brandix Screwdriver SCREW1500ACC',
  price: 1499,
  images: ['/images/products/product-16.jpg', '/images/products/product-16-1.jpg', '/images/products/product-16-2.jpg', '/images/products/product-16-3.jpg', '/images/products/product-16-4.jpg'],
  rating: 5,
  reviews: 3,
  availability: 'in-stock',
  brand: 'metaggo',
  categories: [],
  attributes: [{
    slug: 'color',
    values: ['dark-gray', 'shakespeare']
  }, {
    slug: 'speed',
    values: '750-rpm',
    featured: true
  }, {
    slug: 'power-source',
    values: 'cordless-electric',
    featured: true
  }, {
    slug: 'battery-cell-type',
    values: 'lithium',
    featured: true
  }, {
    slug: 'voltage',
    values: '20-volts',
    featured: true
  }, {
    slug: 'battery-capacity',
    values: '2-Ah',
    featured: true
  }]
}];

function makeBadges(def) {
  if (!def) {
    return [];
  }

  return typeof def === 'string' ? [def] : def.slice();
}

function makeImages(def) {
  if (!def) {
    return [];
  }

  return typeof def === 'string' ? [def] : def.slice();
}

function makeCategories(def) {
  let categoriesDef = [];

  if (def) {
    categoriesDef = typeof def === 'string' ? [def] : def;
  }

  return _categories__WEBPACK_IMPORTED_MODULE_2__["categoriesListData"].filter(category => categoriesDef.includes(category.slug)).map(category => Object(_categories__WEBPACK_IMPORTED_MODULE_2__["prepareCategory"])(category));
}

function makeAttributeValues(defs, attributeDef) {
  const slugs = typeof defs === 'string' ? [defs] : defs;
  return slugs.map(slug => {
    const valueDef = attributeDef.values.find(x => x.slug === slug);

    if (!valueDef) {
      return null;
    }

    return _objectSpread(_objectSpread({}, valueDef), {}, {
      customFields: {}
    });
  }).filter(x => x !== null);
}

function makeAttributes(defs) {
  if (!defs) {
    return [];
  }

  return defs.map(def => {
    const attributeDef = _attributes__WEBPACK_IMPORTED_MODULE_3__["default"].find(x => x.slug === def.slug);

    if (!attributeDef) {
      return null;
    }

    const values = makeAttributeValues(def.values, attributeDef);

    if (!values.length) {
      return null;
    }

    return {
      name: attributeDef.name,
      slug: attributeDef.slug,
      featured: !!def.featured,
      values,
      customFields: {}
    };
  }).filter(x => x !== null);
}

const productsData = productsDef.map(productDef => ({
  id: getId(),
  name: productDef.name,
  sku: '83690/32',
  slug: productDef.slug || Object(_utils__WEBPACK_IMPORTED_MODULE_0__["nameToSlug"])(productDef.name),
  price: productDef.price,
  compareAtPrice: productDef.compareAtPrice || null,
  images: makeImages(productDef.images),
  badges: makeBadges(productDef.badges),
  rating: productDef.rating !== undefined ? productDef.rating : 0,
  reviews: productDef.reviews !== undefined ? productDef.reviews : 0,
  availability: productDef.availability || 'in-stock',
  brand: _brands__WEBPACK_IMPORTED_MODULE_1__["default"].find(x => x.slug === productDef.brand) || null,
  categories: makeCategories(productDef.categories),
  attributes: makeAttributes(productDef.attributes),
  customFields: {}
}));
/* harmony default export */ __webpack_exports__["default"] = (productsData);

/***/ }),

/***/ "./src/fake-server/endpoints/categories.ts":
/*!*************************************************!*\
  !*** ./src/fake-server/endpoints/categories.ts ***!
  \*************************************************/
/*! exports provided: getCategories, getCategoryBySlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryBySlug", function() { return getCategoryBySlug; });
/* harmony import */ var _database_categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../database/categories */ "./src/fake-server/database/categories.ts");

function getCategories(options = {}) {
  return Promise.resolve(_database_categories__WEBPACK_IMPORTED_MODULE_0__["categoriesTreeData"].map(x => Object(_database_categories__WEBPACK_IMPORTED_MODULE_0__["prepareCategory"])(x, options.depth)));
}
function getCategoryBySlug(slug, options = {}) {
  const category = _database_categories__WEBPACK_IMPORTED_MODULE_0__["categoriesListData"].find(x => x.slug === slug);
  return category ? Promise.resolve(Object(_database_categories__WEBPACK_IMPORTED_MODULE_0__["prepareCategory"])(category, options.depth)) : Promise.reject();
}

/***/ }),

/***/ "./src/fake-server/endpoints/products.ts":
/*!***********************************************!*\
  !*** ./src/fake-server/endpoints/products.ts ***!
  \***********************************************/
/*! exports provided: getProductBySlug, getRelatedProducts, getProductsList, getFeaturedProducts, getLatestProducts, getTopRatedProducts, getDiscountedProducts, getPopularProducts, getSuggestions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductBySlug", function() { return getProductBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelatedProducts", function() { return getRelatedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsList", function() { return getProductsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeaturedProducts", function() { return getFeaturedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestProducts", function() { return getLatestProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopRatedProducts", function() { return getTopRatedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDiscountedProducts", function() { return getDiscountedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopularProducts", function() { return getPopularProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuggestions", function() { return getSuggestions; });
/* harmony import */ var _filters_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filters/category */ "./src/fake-server/filters/category.ts");
/* harmony import */ var _filters_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filters/check */ "./src/fake-server/filters/check.ts");
/* harmony import */ var _filters_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filters/color */ "./src/fake-server/filters/color.ts");
/* harmony import */ var _database_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/products */ "./src/fake-server/database/products.ts");
/* harmony import */ var _filters_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filters/radio */ "./src/fake-server/filters/radio.ts");
/* harmony import */ var _filters_range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filters/range */ "./src/fake-server/filters/range.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/fake-server/utils.ts");








function getProducts(shift, options) {
  const limit = options.limit || 8;
  let products = [..._database_products__WEBPACK_IMPORTED_MODULE_3__["default"].slice(shift), ..._database_products__WEBPACK_IMPORTED_MODULE_3__["default"].slice(0, shift)];

  if (options.category === 'power-tools') {
    products = products.slice().reverse();
  } else if (options.category === 'hand-tools') {
    products = [...products.slice(8), ...products.slice(0, 8)];
  } else if (options.category === 'plumbing') {
    products = [...products.slice(8), ...products.slice(0, 8)].reverse();
  }

  return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["delayResponse"])(350, products.slice(0, limit));
}

function getProductBySlug(slug) {
  const product = _database_products__WEBPACK_IMPORTED_MODULE_3__["default"].find(x => x.slug === slug);
  return product ? Promise.resolve(product) : Promise.reject();
}
function getRelatedProducts(slug, options = {}) {
  const limit = options.limit || 8;
  return Promise.resolve(_database_products__WEBPACK_IMPORTED_MODULE_3__["default"].slice(0, limit));
}
function getProductsList(options = {}, filterValues = {}) {
  const filters = [new _filters_category__WEBPACK_IMPORTED_MODULE_0__["default"]('category', 'Categories'), new _filters_range__WEBPACK_IMPORTED_MODULE_5__["default"]('price', 'Price'), new _filters_check__WEBPACK_IMPORTED_MODULE_1__["default"]('brand', 'Brand'), new _filters_radio__WEBPACK_IMPORTED_MODULE_4__["default"]('discount', 'Discount'), new _filters_color__WEBPACK_IMPORTED_MODULE_2__["default"]('color', 'Color')];
  let items = _database_products__WEBPACK_IMPORTED_MODULE_3__["default"].slice(0);
  filters.forEach(filter => filter.makeItems(items, filterValues[filter.slug])); // Calculate items count for filter values.

  filters.forEach(filter => filter.calc(filters)); // Apply filters to products list.

  items = items.filter(product => filters.reduce((mr, filter) => mr && filter.test(product), true));
  const page = options.page || 1;
  const limit = options.limit || 12;
  const sort = options.sort || 'default';
  const total = items.length;
  const pages = Math.ceil(total / limit);
  const from = (page - 1) * limit + 1;
  const to = Math.max(Math.min(page * limit, total), from);
  items = items.sort((a, b) => {
    if (['name_asc', 'name_desc'].includes(sort)) {
      if (a.name === b.name) {
        return 0;
      }

      return (a.name > b.name ? 1 : -1) * (sort === 'name_asc' ? 1 : -1);
    }

    return 0;
  });
  const start = (page - 1) * limit;
  const end = start + limit;
  items = items.slice(start, end);
  return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["delayResponse"])(350, {
    page,
    limit,
    sort,
    total,
    pages,
    from,
    to,
    items,
    filters: filters.map(x => x.build())
  });
}
function getFeaturedProducts(options = {}) {
  return getProducts(0, options);
}
function getLatestProducts(options = {}) {
  return getProducts(0, options);
}
function getTopRatedProducts(options = {}) {
  return getProducts(0, options);
}
function getDiscountedProducts(options = {}) {
  return getProducts(3, options);
}
function getPopularProducts(options = {}) {
  return getProducts(6, options);
}
function getSuggestions(query, options) {
  const limit = options.limit || 5;
  return Promise.resolve(_database_products__WEBPACK_IMPORTED_MODULE_3__["default"].filter(x => x.name.toLowerCase().includes(query.toLowerCase())).slice(0, limit));
}

/***/ }),

/***/ "./src/fake-server/filters/abstract.ts":
/*!*********************************************!*\
  !*** ./src/fake-server/filters/abstract.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbstractFilterBuilder; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AbstractFilterBuilder {
  constructor(slug, name) {
    _defineProperty(this, "slug", void 0);

    _defineProperty(this, "name", void 0);

    this.slug = slug;
    this.name = name;
  }

}

/***/ }),

/***/ "./src/fake-server/filters/category.ts":
/*!*********************************************!*\
  !*** ./src/fake-server/filters/category.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoryFilterBuilder; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/fake-server/filters/abstract.ts");
/* harmony import */ var _database_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/categories */ "./src/fake-server/database/categories.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CategoryFilterBuilder extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "value", null);

    _defineProperty(this, "items", []);
  }

  test() {
    if (this.value === null) {
      return true;
    } // return product.categories.reduce((acc, category) => (
    //     acc || category.slug === this.value
    // ), false);


    return true;
  }

  makeItems(products, value) {
    this.value = value || null;
    const category = _database_categories__WEBPACK_IMPORTED_MODULE_1__["categoriesListData"].find(x => x.slug === value); // const categoryHasProductsFn = (x) => categoryHasProducts(x, productsData);

    const categoryHasProductsFn = () => true;

    if (category) {
      this.items = [Object(_database_categories__WEBPACK_IMPORTED_MODULE_1__["prepareCategory"])(category, 1)].map(x => _objectSpread(_objectSpread({}, x), {}, {
        children: x.children === undefined ? [] : x.children.filter(categoryHasProductsFn)
      }));
    } else {
      this.items = _database_categories__WEBPACK_IMPORTED_MODULE_1__["categoriesTreeData"].map(x => Object(_database_categories__WEBPACK_IMPORTED_MODULE_1__["prepareCategory"])(x)).filter(categoryHasProductsFn);
    }
  } // eslint-disable-next-line class-methods-use-this


  calc() {}

  build() {
    return {
      type: 'category',
      slug: this.slug,
      name: this.name,
      items: this.items,
      value: this.value
    };
  }

}

/***/ }),

/***/ "./src/fake-server/filters/check.ts":
/*!******************************************!*\
  !*** ./src/fake-server/filters/check.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckFilterBuilder; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/fake-server/filters/abstract.ts");
/* harmony import */ var _database_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/products */ "./src/fake-server/database/products.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function parseValue(value) {
  return value ? value.split(',') : [];
}

class CheckFilterBuilder extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "items", []);

    _defineProperty(this, "value", []);
  }

  test(product) {
    if (this.value.length === 0) {
      return true;
    }

    return this.value.reduce((result, value) => result || this.extractItems(product).map(x => x.slug).includes(value), false);
  }

  makeItems(products, value) {
    products.forEach(product => this.extractItems(product).forEach(item => {
      if (!this.items.find(x => x.slug === item.slug)) {
        this.items.push(item);
      }
    }));
    this.value = parseValue(value);
  }

  calc(filters) {
    const products = _database_products__WEBPACK_IMPORTED_MODULE_1__["default"].filter(product => filters.reduce((isMatched, filter) => isMatched && (filter === this || filter.test(product)), true));
    this.items = this.items.map(item => {
      const count = products.reduce((acc, product) => acc + (this.extractItems(product).map(x => x.slug).includes(item.slug) ? 1 : 0), 0);
      return _objectSpread(_objectSpread({}, item), {}, {
        count
      });
    });
  }

  build() {
    return {
      type: 'check',
      slug: this.slug,
      name: this.name,
      items: this.items,
      value: this.value
    };
  }

  extractItems(product) {
    if (this.slug === 'brand') {
      return product.brand ? [{
        slug: product.brand.slug,
        name: product.brand.name,
        count: 0
      }] : [];
    }

    throw Error();
  }

}

/***/ }),

/***/ "./src/fake-server/filters/color.ts":
/*!******************************************!*\
  !*** ./src/fake-server/filters/color.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorFilterBuilder; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/fake-server/filters/abstract.ts");
/* harmony import */ var _database_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/products */ "./src/fake-server/database/products.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const colors = [{
  slug: 'white',
  color: '#fff'
}, {
  slug: 'silver',
  color: '#d9d9d9'
}, {
  slug: 'light-gray',
  color: '#b3b3b3'
}, {
  slug: 'gray',
  color: '#808080'
}, {
  slug: 'dark-gray',
  color: '#666'
}, {
  slug: 'coal',
  color: '#4d4d4d'
}, {
  slug: 'black',
  color: '#262626'
}, {
  slug: 'red',
  color: '#ff4040'
}, {
  slug: 'orange',
  color: '#ff8126'
}, {
  slug: 'yellow',
  color: '#ffd333'
}, {
  slug: 'pear-green',
  color: '#becc1f'
}, {
  slug: 'green',
  color: '#8fcc14'
}, {
  slug: 'emerald',
  color: '#47cc5e'
}, {
  slug: 'shamrock',
  color: '#47cca0'
}, {
  slug: 'shakespeare',
  color: '#47cccc'
}, {
  slug: 'blue',
  color: '#40bfff'
}, {
  slug: 'dark-blue',
  color: '#3d6dcc'
}, {
  slug: 'violet',
  color: '#7766cc'
}, {
  slug: 'purple',
  color: '#b852cc'
}, {
  slug: 'cerise',
  color: '#e53981'
}];

function getColorCode(slug) {
  const result = colors.find(x => x.slug === slug);
  return result ? result.color : '#000';
}

function parseValue(value) {
  return value ? value.split(',') : [];
}

class ColorFilterBuilder extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "items", []);

    _defineProperty(this, "value", []);
  }

  test(product) {
    if (this.value.length === 0) {
      return true;
    }

    return this.value.reduce((result, value) => result || this.extractItems(product).map(x => x.slug).includes(value), false);
  }

  makeItems(products, value) {
    products.forEach(product => this.extractItems(product).forEach(item => {
      if (!this.items.find(x => x.slug === item.slug)) {
        this.items.push(item);
      }
    }));
    this.value = parseValue(value);
  }

  calc(filters) {
    const products = _database_products__WEBPACK_IMPORTED_MODULE_1__["default"].filter(product => filters.reduce((isMatched, filter) => isMatched && (filter === this || filter.test(product)), true));
    this.items = this.items.map(item => {
      const count = products.reduce((acc, product) => {
        const match = this.extractItems(product).map(x => x.slug).includes(item.slug);
        return acc + (match ? 1 : 0);
      }, 0);
      return _objectSpread(_objectSpread({}, item), {}, {
        count
      });
    }).sort((a, b) => colors.findIndex(x => x.slug === a.slug) - colors.findIndex(x => x.slug === b.slug));
  }

  build() {
    return {
      type: 'color',
      slug: this.slug,
      name: this.name,
      items: this.items,
      value: this.value
    };
  }

  extractItems(product) {
    const attribute = product.attributes.find(x => x.slug === this.slug);

    if (!attribute) {
      return [];
    }

    return attribute.values.map(value => ({
      slug: value.slug,
      name: value.name,
      color: getColorCode(value.slug),
      count: 0
    }));
  }

}

/***/ }),

/***/ "./src/fake-server/filters/radio.ts":
/*!******************************************!*\
  !*** ./src/fake-server/filters/radio.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RadioFilterBuilder; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/fake-server/filters/abstract.ts");
/* harmony import */ var _database_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/products */ "./src/fake-server/database/products.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class RadioFilterBuilder extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "items", []);

    _defineProperty(this, "value", null);
  }

  test(product) {
    return this.value !== null && this.extractItems(product).map(x => x.slug).includes(this.value);
  }

  makeItems(products, value) {
    products.forEach(product => this.extractItems(product).forEach(item => {
      if (!this.items.find(x => x.slug === item.slug)) {
        this.items.push(item);
      }
    }));
    this.value = value || this.items[0].slug;
  }

  calc(filters) {
    const products = _database_products__WEBPACK_IMPORTED_MODULE_1__["default"].filter(product => filters.reduce((isMatched, filter) => isMatched && (filter === this || filter.test(product)), true));
    this.items = this.items.map(item => {
      const count = products.reduce((acc, product) => {
        const match = this.extractItems(product).map(x => x.slug).includes(item.slug);
        return acc + (match ? 1 : 0);
      }, 0);
      return _objectSpread(_objectSpread({}, item), {}, {
        count
      });
    });
  }

  build() {
    return {
      type: 'radio',
      slug: this.slug,
      name: this.name,
      items: this.items,
      value: this.value
    };
  }

  extractItems(product) {
    if (this.slug === 'discount') {
      const items = [{
        slug: 'any',
        name: 'Any',
        count: 0
      }];

      if (product.compareAtPrice) {
        items.push({
          slug: 'yes',
          name: 'Yes',
          count: 0
        });
      } else {
        items.push({
          slug: 'no',
          name: 'No',
          count: 0
        });
      }

      return items;
    }

    throw Error();
  }

}

/***/ }),

/***/ "./src/fake-server/filters/range.ts":
/*!******************************************!*\
  !*** ./src/fake-server/filters/range.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RangeFilterBuilder; });
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract */ "./src/fake-server/filters/abstract.ts");
/* harmony import */ var _database_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/products */ "./src/fake-server/database/products.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function parseValue(value) {
  return value.split('-').map(x => parseFloat(x));
}

class RangeFilterBuilder extends _abstract__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "min", 0);

    _defineProperty(this, "max", 0);

    _defineProperty(this, "value", [0, 0]);
  }

  test(product) {
    const value = this.extractValue(product);
    return value >= this.value[0] && value <= this.value[1];
  }

  makeItems(products, value) {
    this.max = _database_products__WEBPACK_IMPORTED_MODULE_1__["default"].reduce((acc, product) => Math.max(acc, this.extractValue(product)), 0);
    this.min = _database_products__WEBPACK_IMPORTED_MODULE_1__["default"].reduce((acc, product) => Math.min(acc, this.extractValue(product)), this.max);
    /** Calculates the number of digits for rounding. */

    let digit = Math.max(Math.ceil(this.max).toString().length - 2, 1);
    digit = 10 ** digit;
    this.max = Math.ceil(this.max / digit) * digit;
    this.min = Math.floor(this.min / digit) * digit;
    this.value = [this.min, this.max];

    if (value) {
      this.value = parseValue(value);
    }
  } // eslint-disable-next-line class-methods-use-this


  calc() {}

  extractValue(product) {
    if (this.slug === 'price') {
      return product.price;
    }

    throw Error();
  }

  build() {
    return {
      type: 'range',
      slug: this.slug,
      name: this.name,
      min: this.min,
      max: this.max,
      value: this.value
    };
  }

}

/***/ }),

/***/ "./src/fake-server/utils.ts":
/*!**********************************!*\
  !*** ./src/fake-server/utils.ts ***!
  \**********************************/
/*! exports provided: makeIdGenerator, nameToSlug, categoryHasProducts, delayResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeIdGenerator", function() { return makeIdGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameToSlug", function() { return nameToSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryHasProducts", function() { return categoryHasProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delayResponse", function() { return delayResponse; });
function makeIdGenerator() {
  let lastId = 0;
  return () => {
    lastId += 1;
    return lastId;
  };
}
function nameToSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/, '-').replace(/-+/, '-');
}
function categoryHasProducts(category, products) {
  return products.filter(product => product.categories.findIndex(x => x.slug === category.slug) !== -1).length > 0;
}
function delayResponse(delay, response) {
  return new Promise(resolve => {
    setTimeout(() => resolve(response), false ? undefined : 0);
  });
}

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
/*! exports provided: topbar.aboutUs, topbar.contacts, topbar.storeLocation, topbar.trackOrder, topbar.blog, topbar.myAccount, topbar.currency, topbar.language, header.phoneLabel, header.phone, nav.home, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"topbar.aboutUs\":\"About Us\",\"topbar.contacts\":\"Contacts\",\"topbar.storeLocation\":\"Store Location\",\"topbar.trackOrder\":\"Track Order\",\"topbar.blog\":\"Blog\",\"topbar.myAccount\":\"My Account\",\"topbar.currency\":\"Currency\",\"topbar.language\":\"Language\",\"header.phoneLabel\":\"Customer Service\",\"header.phone\":\"(800) 060-0730\",\"nav.home\":\"Home\"}");

/***/ }),

/***/ "./src/i18n/messages/th.json":
/*!***********************************!*\
  !*** ./src/i18n/messages/th.json ***!
  \***********************************/
/*! exports provided: topbar.aboutUs, topbar.contacts, topbar.storeLocation, topbar.trackOrder, topbar.blog, topbar.myAccount, topbar.currency, topbar.language, header.phoneLabel, header.phone, nav.home, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"topbar.aboutUs\":\"เกี่ยวกับเรา\",\"topbar.contacts\":\"ติดต่อเรา\",\"topbar.storeLocation\":\"Store Location\",\"topbar.trackOrder\":\"Track Order\",\"topbar.blog\":\"บทความ\",\"topbar.myAccount\":\"My Account\",\"topbar.currency\":\"Currency\",\"topbar.language\":\"เลือกภาษา\",\"header.phoneLabel\":\"สายด่วนบริการลูกค้า\",\"header.phone\":\"(081-686-2922)\",\"nav.home\":\"หน้าแรก\"}");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_home_HomePageTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home/HomePageTwo */ "./src/components/home/HomePageTwo.tsx");
/* harmony import */ var _api_shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/shop */ "./src/api/shop.ts");
var _jsxFileName = "D:\\xampp\\htdocs\\neo.co.th\\nextapp\\src\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// react
 // third-party

// application


// noinspection JSUnusedGlobalSymbols
const getServerSideProps = async () => ({
  props: {
    initData: {
      featuredProducts: await _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getPopularProducts({
        limit: 12
      }),
      bestsellers: await _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getPopularProducts({
        limit: 7
      }),
      latestProducts: await _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getLatestProducts({
        limit: 8
      }),
      productColumns: [{
        title: 'Top Rated Products',
        products: await _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getTopRatedProducts({
          limit: 3
        })
      }, {
        title: 'Special Offers',
        products: await _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getDiscountedProducts({
          limit: 3
        })
      }, {
        title: 'Bestsellers',
        products: await _api_shop__WEBPACK_IMPORTED_MODULE_2__["default"].getPopularProducts({
          limit: 3
        })
      }]
    }
  }
});

function Page(props) {
  const {
    initData
  } = props;
  return __jsx(_components_home_HomePageTwo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    initData: initData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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

/***/ "./src/services/url.ts":
/*!*****************************!*\
  !*** ./src/services/url.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const url = {
  home: () => ({
    href: '/'
  }),
  catalog: () => '/shop/catalog',
  cart: () => ({
    href: '/shop/cart'
  }),
  checkout: () => ({
    href: '/shop/checkout'
  }),
  category: category => {
    if (category.type === 'shop') {
      return url.shopCategory(category);
    }

    if (category.type === 'blog') {
      return url.blogCategory();
    }

    throw Error('Undefined category type');
  },
  shopCategory: category => ({
    href: '/shop/catalog/[slug]',
    as: `/shop/catalog/${category.slug}`
  }),
  product: product => ({
    href: '/shop/products/[slug]',
    as: `/shop/products/${product.slug}`
  }),
  wishlist: () => ({
    href: '/shop/wishlist'
  }),
  blogCategory: () => ({
    href: '/blog/category-classic'
  }),
  blogPost: () => ({
    href: '/blog/post-classic'
  }),
  accountSignIn: () => ({
    href: '/account/login'
  }),
  accountSignUp: () => ({
    href: '/account/login'
  }),
  accountSignOut: () => ({
    href: '/account/login'
  }),
  accountDashboard: () => ({
    href: '/account/dashboard'
  }),
  accountProfile: () => ({
    href: '/account/profile'
  }),
  accountOrders: () => ({
    href: '/account/orders'
  }),
  accountOrder: order => ({
    href: '/account/orders/[orderId]',
    as: `/account/orders/${order.id}`
  }),
  accountAddresses: () => ({
    href: '/account/addresses',
    as: '/account/addresses'
  }),
  accountAddress: address => ({
    href: '/account/addresses/[addressId]',
    as: `/account/addresses/${address.id}`
  }),
  accountPassword: () => ({
    href: '/account/password',
    as: '/account/password'
  }),
  contacts: () => ({
    href: '/site/contact-us'
  }),
  terms: () => ({
    href: '/site/terms'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (url);

/***/ }),

/***/ "./src/store/cart/cartActionTypes.ts":
/*!*******************************************!*\
  !*** ./src/store/cart/cartActionTypes.ts ***!
  \*******************************************/
/*! exports provided: CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_QUANTITIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_ADD_ITEM", function() { return CART_ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_REMOVE_ITEM", function() { return CART_REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_UPDATE_QUANTITIES", function() { return CART_UPDATE_QUANTITIES; });
const CART_ADD_ITEM = 'CART_ADD_ITEM';
const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
const CART_UPDATE_QUANTITIES = 'CART_UPDATE_QUANTITIES';

/***/ }),

/***/ "./src/store/cart/cartActions.ts":
/*!***************************************!*\
  !*** ./src/store/cart/cartActions.ts ***!
  \***************************************/
/*! exports provided: cartAddItemSuccess, cartRemoveItemSuccess, cartUpdateQuantitiesSuccess, cartAddItem, cartRemoveItem, cartUpdateQuantities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartAddItemSuccess", function() { return cartAddItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartRemoveItemSuccess", function() { return cartRemoveItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartUpdateQuantitiesSuccess", function() { return cartUpdateQuantitiesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartAddItem", function() { return cartAddItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartRemoveItem", function() { return cartRemoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartUpdateQuantities", function() { return cartUpdateQuantities; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cartActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartActionTypes */ "./src/store/cart/cartActionTypes.ts");
// third-party
 // application


function cartAddItemSuccess(product, options = [], quantity = 1) {
  react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success(`Product "${product.name}" added to cart!`);
  return {
    type: _cartActionTypes__WEBPACK_IMPORTED_MODULE_1__["CART_ADD_ITEM"],
    product,
    options,
    quantity
  };
}
function cartRemoveItemSuccess(itemId) {
  return {
    type: _cartActionTypes__WEBPACK_IMPORTED_MODULE_1__["CART_REMOVE_ITEM"],
    itemId
  };
}
function cartUpdateQuantitiesSuccess(quantities) {
  return {
    type: _cartActionTypes__WEBPACK_IMPORTED_MODULE_1__["CART_UPDATE_QUANTITIES"],
    quantities
  };
}
function cartAddItem(product, options = [], quantity = 1) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(cartAddItemSuccess(product, options, quantity));
      resolve();
    }, 500);
  });
}
function cartRemoveItem(itemId) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(cartRemoveItemSuccess(itemId));
      resolve();
    }, 500);
  });
}
function cartUpdateQuantities(quantities) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(cartUpdateQuantitiesSuccess(quantities));
      resolve();
    }, 500);
  });
}

/***/ }),

/***/ "./src/store/cart/cartHooks.ts":
/*!*************************************!*\
  !*** ./src/store/cart/cartHooks.ts ***!
  \*************************************/
/*! exports provided: useCart, useCartAddItem, useCartRemoveItem, useCartUpdateQuantities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return useCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCartAddItem", function() { return useCartAddItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCartRemoveItem", function() { return useCartRemoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCartUpdateQuantities", function() { return useCartUpdateQuantities; });
/* harmony import */ var _cartActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartActions */ "./src/store/cart/cartActions.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./src/store/hooks.ts");
// application


const useCart = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useAppSelector"])(state => state.cart);
const useCartAddItem = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useAppAction"])(_cartActions__WEBPACK_IMPORTED_MODULE_0__["cartAddItem"]);
const useCartRemoveItem = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useAppAction"])(_cartActions__WEBPACK_IMPORTED_MODULE_0__["cartRemoveItem"]);
const useCartUpdateQuantities = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_1__["useAppAction"])(_cartActions__WEBPACK_IMPORTED_MODULE_0__["cartUpdateQuantities"]);

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

/***/ "./src/store/compare/compareActionTypes.ts":
/*!*************************************************!*\
  !*** ./src/store/compare/compareActionTypes.ts ***!
  \*************************************************/
/*! exports provided: COMPARE_ADD_ITEM, COMPARE_REMOVE_ITEM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPARE_ADD_ITEM", function() { return COMPARE_ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPARE_REMOVE_ITEM", function() { return COMPARE_REMOVE_ITEM; });
// application
const COMPARE_ADD_ITEM = 'COMPARE_ADD_ITEM';
const COMPARE_REMOVE_ITEM = 'COMPARE_REMOVE_ITEM';

/***/ }),

/***/ "./src/store/compare/compareActions.ts":
/*!*********************************************!*\
  !*** ./src/store/compare/compareActions.ts ***!
  \*********************************************/
/*! exports provided: compareAddItemSuccess, compareRemoveItemSuccess, compareAddItem, compareRemoveItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareAddItemSuccess", function() { return compareAddItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareRemoveItemSuccess", function() { return compareRemoveItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareAddItem", function() { return compareAddItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareRemoveItem", function() { return compareRemoveItem; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _compareActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compareActionTypes */ "./src/store/compare/compareActionTypes.ts");
// third-party
 // application


function compareAddItemSuccess(product) {
  react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success(`Product "${product.name}" added to compare!`);
  return {
    type: _compareActionTypes__WEBPACK_IMPORTED_MODULE_1__["COMPARE_ADD_ITEM"],
    product
  };
}
function compareRemoveItemSuccess(productId) {
  return {
    type: _compareActionTypes__WEBPACK_IMPORTED_MODULE_1__["COMPARE_REMOVE_ITEM"],
    productId
  };
}
function compareAddItem(product) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(compareAddItemSuccess(product));
      resolve();
    }, 500);
  });
}
function compareRemoveItem(productId) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(compareRemoveItemSuccess(productId));
      resolve();
    }, 500);
  });
}

/***/ }),

/***/ "./src/store/compare/compareHooks.ts":
/*!*******************************************!*\
  !*** ./src/store/compare/compareHooks.ts ***!
  \*******************************************/
/*! exports provided: useCompare, useCompareAddItem, useCompareRemoveItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCompare", function() { return useCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCompareAddItem", function() { return useCompareAddItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCompareRemoveItem", function() { return useCompareRemoveItem; });
/* harmony import */ var _compareReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compareReducer */ "./src/store/compare/compareReducer.ts");
/* harmony import */ var _compareActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compareActions */ "./src/store/compare/compareActions.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./src/store/hooks.ts");
// application



const useCompare = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useAppSelector"])(state => state[_compareReducer__WEBPACK_IMPORTED_MODULE_0__["COMPARE_NAMESPACE"]]);
const useCompareAddItem = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useAppAction"])(_compareActions__WEBPACK_IMPORTED_MODULE_1__["compareAddItem"]);
const useCompareRemoveItem = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useAppAction"])(_compareActions__WEBPACK_IMPORTED_MODULE_1__["compareRemoveItem"]);

/***/ }),

/***/ "./src/store/compare/compareReducer.ts":
/*!*********************************************!*\
  !*** ./src/store/compare/compareReducer.ts ***!
  \*********************************************/
/*! exports provided: COMPARE_NAMESPACE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPARE_NAMESPACE", function() { return COMPARE_NAMESPACE; });
/* harmony import */ var _compareActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compareActionTypes */ "./src/store/compare/compareActionTypes.ts");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client */ "./src/store/client.ts");
// application



function addItem(state, product) {
  const itemIndex = state.items.findIndex(x => x.id === product.id);

  if (itemIndex === -1) {
    return {
      items: [...state.items, JSON.parse(JSON.stringify(product))]
    };
  }

  return state;
}

function removeItem(state, productId) {
  return {
    items: state.items.filter(x => x.id !== productId)
  };
}

const initialState = {
  items: []
};
const COMPARE_NAMESPACE = 'compare';

function compareBaseReducer(state = initialState, action) {
  switch (action.type) {
    case _compareActionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE_ADD_ITEM"]:
      return addItem(state, action.product);

    case _compareActionTypes__WEBPACK_IMPORTED_MODULE_0__["COMPARE_REMOVE_ITEM"]:
      return removeItem(state, action.productId);

    default:
      return state;
  }
}

const compareReducer = Object(_client__WEBPACK_IMPORTED_MODULE_1__["withClientState"])(compareBaseReducer, COMPARE_NAMESPACE);
/* harmony default export */ __webpack_exports__["default"] = (compareReducer);

/***/ }),

/***/ "./src/store/currency/currencyActionTypes.ts":
/*!***************************************************!*\
  !*** ./src/store/currency/currencyActionTypes.ts ***!
  \***************************************************/
/*! exports provided: CURRENCY_CHANGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_CHANGE", function() { return CURRENCY_CHANGE; });
// application
const CURRENCY_CHANGE = 'CURRENCY_CHANGE';

/***/ }),

/***/ "./src/store/currency/currencyActions.ts":
/*!***********************************************!*\
  !*** ./src/store/currency/currencyActions.ts ***!
  \***********************************************/
/*! exports provided: currencyChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyChange", function() { return currencyChange; });
/* harmony import */ var _currencyActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencyActionTypes */ "./src/store/currency/currencyActionTypes.ts");
// application

// eslint-disable-next-line import/prefer-default-export
function currencyChange(currency) {
  return {
    type: _currencyActionTypes__WEBPACK_IMPORTED_MODULE_0__["CURRENCY_CHANGE"],
    currency
  };
}

/***/ }),

/***/ "./src/store/currency/currencyHooks.ts":
/*!*********************************************!*\
  !*** ./src/store/currency/currencyHooks.ts ***!
  \*********************************************/
/*! exports provided: useCurrency, useCurrencyChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCurrency", function() { return useCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCurrencyChange", function() { return useCurrencyChange; });
/* harmony import */ var _currencyReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencyReducer */ "./src/store/currency/currencyReducer.ts");
/* harmony import */ var _currencyActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencyActions */ "./src/store/currency/currencyActions.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./src/store/hooks.ts");
// application



const useCurrency = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useAppSelector"])(state => state[_currencyReducer__WEBPACK_IMPORTED_MODULE_0__["CURRENCY_NAMESPACE"]].current);
const useCurrencyChange = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useAppAction"])(_currencyActions__WEBPACK_IMPORTED_MODULE_1__["currencyChange"]);

/***/ }),

/***/ "./src/store/currency/currencyReducer.ts":
/*!***********************************************!*\
  !*** ./src/store/currency/currencyReducer.ts ***!
  \***********************************************/
/*! exports provided: CURRENCY_NAMESPACE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_NAMESPACE", function() { return CURRENCY_NAMESPACE; });
/* harmony import */ var _currencyActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currencyActionTypes */ "./src/store/currency/currencyActionTypes.ts");
/* harmony import */ var _data_shopCurrencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/shopCurrencies */ "./src/data/shopCurrencies.ts");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ "./src/store/client.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application



const initialState = {
  current: _data_shopCurrencies__WEBPACK_IMPORTED_MODULE_1__["dataShopDefaultCurrency"]
};
const CURRENCY_NAMESPACE = 'currency';

function currencyBaseReducer(state = initialState, action) {
  if (action.type === _currencyActionTypes__WEBPACK_IMPORTED_MODULE_0__["CURRENCY_CHANGE"] && state.current.code !== action.currency.code) {
    return _objectSpread(_objectSpread({}, state), {}, {
      current: JSON.parse(JSON.stringify(action.currency))
    });
  }

  return state;
}

const currencyReducer = Object(_client__WEBPACK_IMPORTED_MODULE_2__["withClientState"])(currencyBaseReducer, CURRENCY_NAMESPACE);
/* harmony default export */ __webpack_exports__["default"] = (currencyReducer);

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

/***/ "./src/store/quickview/quickviewActionTypes.ts":
/*!*****************************************************!*\
  !*** ./src/store/quickview/quickviewActionTypes.ts ***!
  \*****************************************************/
/*! exports provided: QUICKVIEW_OPEN, QUICKVIEW_CLOSE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUICKVIEW_OPEN", function() { return QUICKVIEW_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUICKVIEW_CLOSE", function() { return QUICKVIEW_CLOSE; });
// application
const QUICKVIEW_OPEN = 'QUICKVIEW_OPEN';
const QUICKVIEW_CLOSE = 'QUICKVIEW_CLOSE';

/***/ }),

/***/ "./src/store/quickview/quickviewActions.ts":
/*!*************************************************!*\
  !*** ./src/store/quickview/quickviewActions.ts ***!
  \*************************************************/
/*! exports provided: quickviewOpenSuccess, quickviewClose, quickviewOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quickviewOpenSuccess", function() { return quickviewOpenSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quickviewClose", function() { return quickviewClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quickviewOpen", function() { return quickviewOpen; });
/* harmony import */ var _api_shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/shop */ "./src/api/shop.ts");
/* harmony import */ var _quickviewActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quickviewActionTypes */ "./src/store/quickview/quickviewActionTypes.ts");
// application



let cancelPreviousRequest = () => {};

function quickviewOpenSuccess(product) {
  return {
    type: _quickviewActionTypes__WEBPACK_IMPORTED_MODULE_1__["QUICKVIEW_OPEN"],
    product
  };
}
function quickviewClose() {
  return {
    type: _quickviewActionTypes__WEBPACK_IMPORTED_MODULE_1__["QUICKVIEW_CLOSE"]
  };
}
function quickviewOpen(productSlug) {
  return dispatch => {
    cancelPreviousRequest();
    return new Promise(resolve => {
      let canceled = false; // sending request to server, timeout is used as a stub

      const timer = setTimeout(() => {
        _api_shop__WEBPACK_IMPORTED_MODULE_0__["default"].getProductBySlug(productSlug).then(product => {
          if (canceled) {
            return;
          }

          if (product) {
            dispatch(quickviewOpenSuccess(product));
          }

          resolve();
        });
      }, 350);

      cancelPreviousRequest = () => {
        canceled = true;
        clearTimeout(timer);
        resolve();
      };
    });
  };
}

/***/ }),

/***/ "./src/store/quickview/quickviewHooks.ts":
/*!***********************************************!*\
  !*** ./src/store/quickview/quickviewHooks.ts ***!
  \***********************************************/
/*! exports provided: useQuickview, useQuickviewOpen, useQuickviewClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuickview", function() { return useQuickview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuickviewOpen", function() { return useQuickviewOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuickviewClose", function() { return useQuickviewClose; });
/* harmony import */ var _quickviewReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quickviewReducer */ "./src/store/quickview/quickviewReducer.ts");
/* harmony import */ var _quickviewActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quickviewActions */ "./src/store/quickview/quickviewActions.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./src/store/hooks.ts");
// application



const useQuickview = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useAppSelector"])(state => state[_quickviewReducer__WEBPACK_IMPORTED_MODULE_0__["QUICKVIEW_NAMESPACE"]]);
const useQuickviewOpen = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useAppAction"])(_quickviewActions__WEBPACK_IMPORTED_MODULE_1__["quickviewOpen"]);
const useQuickviewClose = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useAppAction"])(_quickviewActions__WEBPACK_IMPORTED_MODULE_1__["quickviewClose"]);

/***/ }),

/***/ "./src/store/quickview/quickviewReducer.ts":
/*!*************************************************!*\
  !*** ./src/store/quickview/quickviewReducer.ts ***!
  \*************************************************/
/*! exports provided: QUICKVIEW_NAMESPACE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUICKVIEW_NAMESPACE", function() { return QUICKVIEW_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quickviewReducer; });
/* harmony import */ var _quickviewActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quickviewActionTypes */ "./src/store/quickview/quickviewActionTypes.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// application

const initialState = {
  open: false,
  product: null
};
const QUICKVIEW_NAMESPACE = 'quickview';
function quickviewReducer(state = initialState, action) {
  let newState = state;

  if (action.type === _quickviewActionTypes__WEBPACK_IMPORTED_MODULE_0__["QUICKVIEW_OPEN"]) {
    newState = _objectSpread(_objectSpread({}, state), {}, {
      open: true,
      product: JSON.parse(JSON.stringify(action.product))
    });
  } else if (action.type === _quickviewActionTypes__WEBPACK_IMPORTED_MODULE_0__["QUICKVIEW_CLOSE"]) {
    newState = _objectSpread(_objectSpread({}, state), {}, {
      open: false
    });
  }

  return newState;
}

/***/ }),

/***/ "./src/store/wishlist/wishlistActionTypes.ts":
/*!***************************************************!*\
  !*** ./src/store/wishlist/wishlistActionTypes.ts ***!
  \***************************************************/
/*! exports provided: WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST_ADD_ITEM", function() { return WISHLIST_ADD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST_REMOVE_ITEM", function() { return WISHLIST_REMOVE_ITEM; });
// application
const WISHLIST_ADD_ITEM = 'WISHLIST_ADD_ITEM';
const WISHLIST_REMOVE_ITEM = 'WISHLIST_REMOVE_ITEM';

/***/ }),

/***/ "./src/store/wishlist/wishlistActions.ts":
/*!***********************************************!*\
  !*** ./src/store/wishlist/wishlistActions.ts ***!
  \***********************************************/
/*! exports provided: wishlistAddItemSuccess, wishlistRemoveItemSuccess, wishlistAddItem, wishlistRemoveItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistAddItemSuccess", function() { return wishlistAddItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistRemoveItemSuccess", function() { return wishlistRemoveItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistAddItem", function() { return wishlistAddItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistRemoveItem", function() { return wishlistRemoveItem; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wishlistActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlistActionTypes */ "./src/store/wishlist/wishlistActionTypes.ts");
// third-party
 // application


function wishlistAddItemSuccess(product) {
  react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success(`Product "${product.name}" added to wish list!`);
  return {
    type: _wishlistActionTypes__WEBPACK_IMPORTED_MODULE_1__["WISHLIST_ADD_ITEM"],
    product
  };
}
function wishlistRemoveItemSuccess(productId) {
  return {
    type: _wishlistActionTypes__WEBPACK_IMPORTED_MODULE_1__["WISHLIST_REMOVE_ITEM"],
    productId
  };
}
function wishlistAddItem(product) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(wishlistAddItemSuccess(product));
      resolve();
    }, 500);
  });
}
function wishlistRemoveItem(productId) {
  // sending request to server, timeout is used as a stub
  return dispatch => new Promise(resolve => {
    setTimeout(() => {
      dispatch(wishlistRemoveItemSuccess(productId));
      resolve();
    }, 500);
  });
}

/***/ }),

/***/ "./src/store/wishlist/wishlistHooks.ts":
/*!*********************************************!*\
  !*** ./src/store/wishlist/wishlistHooks.ts ***!
  \*********************************************/
/*! exports provided: useWishlist, useWishlistAddItem, useWishlistRemoveItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWishlist", function() { return useWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWishlistAddItem", function() { return useWishlistAddItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWishlistRemoveItem", function() { return useWishlistRemoveItem; });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks */ "./src/store/hooks.ts");
/* harmony import */ var _wishlistReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlistReducer */ "./src/store/wishlist/wishlistReducer.ts");
/* harmony import */ var _wishlistActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wishlistActions */ "./src/store/wishlist/wishlistActions.ts");
// application



const useWishlist = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_0__["useAppSelector"])(state => state[_wishlistReducer__WEBPACK_IMPORTED_MODULE_1__["WISHLIST_NAMESPACE"]]);
const useWishlistAddItem = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_0__["useAppAction"])(_wishlistActions__WEBPACK_IMPORTED_MODULE_2__["wishlistAddItem"]);
const useWishlistRemoveItem = () => Object(_hooks__WEBPACK_IMPORTED_MODULE_0__["useAppAction"])(_wishlistActions__WEBPACK_IMPORTED_MODULE_2__["wishlistRemoveItem"]);

/***/ }),

/***/ "./src/store/wishlist/wishlistReducer.ts":
/*!***********************************************!*\
  !*** ./src/store/wishlist/wishlistReducer.ts ***!
  \***********************************************/
/*! exports provided: WISHLIST_NAMESPACE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST_NAMESPACE", function() { return WISHLIST_NAMESPACE; });
/* harmony import */ var _wishlistActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlistActionTypes */ "./src/store/wishlist/wishlistActionTypes.ts");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client */ "./src/store/client.ts");
// application



function addItem(state, product) {
  const itemIndex = state.items.findIndex(x => x.id === product.id);

  if (itemIndex === -1) {
    return {
      items: [...state.items, JSON.parse(JSON.stringify(product))]
    };
  }

  return state;
}

function removeItem(state, productId) {
  return {
    items: state.items.filter(x => x.id !== productId)
  };
}

const initialState = {
  items: []
};
const WISHLIST_NAMESPACE = 'wishlist';

function wishlistBaseReducer(state = initialState, action) {
  switch (action.type) {
    case _wishlistActionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST_ADD_ITEM"]:
      return addItem(state, action.product);

    case _wishlistActionTypes__WEBPACK_IMPORTED_MODULE_0__["WISHLIST_REMOVE_ITEM"]:
      return removeItem(state, action.productId);

    default:
      return state;
  }
}

const wishlistReducer = Object(_client__WEBPACK_IMPORTED_MODULE_1__["withClientState"])(wishlistBaseReducer, WISHLIST_NAMESPACE);
/* harmony default export */ __webpack_exports__["default"] = (wishlistReducer);

/***/ }),

/***/ 3:
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

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9zaG9wLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jsb2Nrcy9CbG9ja0Jhbm5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmxvY2tzL0Jsb2NrQnJhbmRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9ja3MvQmxvY2tDYXRlZ29yaWVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9ja3MvQmxvY2tQb3N0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYmxvY2tzL0Jsb2NrUHJvZHVjdENvbHVtbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Jsb2Nrcy9CbG9ja1Byb2R1Y3RzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9ja3MvQmxvY2tQcm9kdWN0c0Nhcm91c2VsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9ja3MvQmxvY2tTbGlkZVNob3cudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWUvSG9tZVBhZ2VUd28udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9BcHBMaW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvQXN5bmNBY3Rpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9CbG9ja0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL0N1cnJlbmN5Rm9ybWF0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvUG9zdENhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9Qcm9kdWN0Q2FyZC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL1JhdGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL1N0cm95a2FTbGljay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvYmxvZ1Bvc3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3Nob3BCbG9ja0NhdGVnb3JpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvc2hvcEJyYW5kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9zaG9wQ3VycmVuY2llcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS90aGVtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFrZS1zZXJ2ZXIvZGF0YWJhc2UvYXR0cmlidXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFrZS1zZXJ2ZXIvZGF0YWJhc2UvYnJhbmRzLnRzIiwid2VicGFjazovLy8uL3NyYy9mYWtlLXNlcnZlci9kYXRhYmFzZS9jYXRlZ29yaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9mYWtlLXNlcnZlci9kYXRhYmFzZS9wcm9kdWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFrZS1zZXJ2ZXIvZW5kcG9pbnRzL2NhdGVnb3JpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zha2Utc2VydmVyL2VuZHBvaW50cy9wcm9kdWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFrZS1zZXJ2ZXIvZmlsdGVycy9hYnN0cmFjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFrZS1zZXJ2ZXIvZmlsdGVycy9jYXRlZ29yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFrZS1zZXJ2ZXIvZmlsdGVycy9jaGVjay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFrZS1zZXJ2ZXIvZmlsdGVycy9jb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFrZS1zZXJ2ZXIvZmlsdGVycy9yYWRpby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFrZS1zZXJ2ZXIvZmlsdGVycy9yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmFrZS1zZXJ2ZXIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2kxOG4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZGVwYXJ0bWVudHNTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9ob29rcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvdXJsLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9jYXJ0L2NhcnRBY3Rpb25UeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY2FydC9jYXJ0QWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY2FydC9jYXJ0SG9va3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2NsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29tcGFyZS9jb21wYXJlQWN0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2NvbXBhcmUvY29tcGFyZUFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2NvbXBhcmUvY29tcGFyZUhvb2tzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9jb21wYXJlL2NvbXBhcmVSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9jdXJyZW5jeS9jdXJyZW5jeUFjdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9jdXJyZW5jeS9jdXJyZW5jeUFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2N1cnJlbmN5L2N1cnJlbmN5SG9va3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2N1cnJlbmN5L2N1cnJlbmN5UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaG9va3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2xvY2FsZS9sb2NhbGVBY3Rpb25UeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbG9jYWxlL2xvY2FsZUFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2xvY2FsZS9sb2NhbGVIb29rcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbG9jYWxlL2xvY2FsZVJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3F1aWNrdmlldy9xdWlja3ZpZXdBY3Rpb25UeXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcXVpY2t2aWV3L3F1aWNrdmlld0FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3F1aWNrdmlldy9xdWlja3ZpZXdIb29rcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvcXVpY2t2aWV3L3F1aWNrdmlld1JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3dpc2hsaXN0L3dpc2hsaXN0QWN0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3dpc2hsaXN0L3dpc2hsaXN0QWN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvd2lzaGxpc3Qvd2lzaGxpc3RIb29rcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvd2lzaGxpc3Qvd2lzaGxpc3RSZWR1Y2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNsaWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJ1cmwiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwicHJvcHMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiZXJyIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJwcm9jZXNzIiwiUmVhY3QiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInJlcGxhY2UiLCJwYXNzSHJlZiIsInZhbHVlIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsImRhdGEiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwidXBkYXRlIiwibW9kIiwibmV3RGF0YSIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwib3B0aW9ucyIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsInNob3BBcGkiLCJnZXRDYXRlZ29yaWVzIiwiZ2V0Q2F0ZWdvcnlCeVNsdWciLCJzbHVnIiwiZ2V0UHJvZHVjdEJ5U2x1ZyIsImdldFJlbGF0ZWRQcm9kdWN0cyIsImdldFByb2R1Y3RzTGlzdCIsImZpbHRlcnMiLCJnZXRGZWF0dXJlZFByb2R1Y3RzIiwiZ2V0TGF0ZXN0UHJvZHVjdHMiLCJnZXRUb3BSYXRlZFByb2R1Y3RzIiwiZ2V0RGlzY291bnRlZFByb2R1Y3RzIiwiZ2V0UG9wdWxhclByb2R1Y3RzIiwiZ2V0U3VnZ2VzdGlvbnMiLCJCbG9ja0Jhbm5lciIsImJhY2tncm91bmRJbWFnZSIsInNsaWNrU2V0dGluZ3MiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIkJsb2NrQnJhbmRzIiwiYnJhbmRzTGlzdCIsImRhdGFTaG9wQnJhbmRzIiwibWFwIiwiYnJhbmQiLCJpbmRleCIsImltYWdlIiwiQmxvY2tDYXRlZ29yaWVzIiwidGl0bGUiLCJsYXlvdXQiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcmllc0xpc3QiLCJjYXRlZ29yeSIsImNsYXNzZXMiLCJzdWJjYXRlZ29yaWVzIiwic3ViSW5kZXgiLCJpdGVtcyIsIkJsb2NrUG9zdHMiLCJwb3N0cyIsInNsaWNrUmVmIiwidXNlUmVmIiwiaGFuZGxlTmV4dENsaWNrIiwiY3VycmVudCIsInNsaWNrTmV4dCIsImhhbmRsZVByZXZDbGljayIsInNsaWNrUHJldiIsInBvc3RzTGlzdCIsInBvc3QiLCJpZCIsIkJsb2NrUHJvZHVjdENvbHVtbnMiLCJjb2x1bW5zIiwiY29sdW1uc0xpc3QiLCJjb2x1bW4iLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJCbG9ja1Byb2R1Y3RzIiwiZmVhdHVyZWRQcm9kdWN0IiwibGFyZ2UiLCJzbWFsbHMiLCJsZW5ndGgiLCJwcm9kdWN0c0xpc3QiLCJzbGljZSIsImdldFByb2R1Y3RzQ29sdW1ucyIsInJvd3MiLCJwcm9kdWN0c1F1ZXVlIiwic3BsaWNlIiwiaG9yaXpvbnRhbCIsIkJsb2NrUHJvZHVjdHNDYXJvdXNlbCIsIndpdGhTaWRlYmFyIiwibG9hZGluZyIsIm9uR3JvdXBDbGljayIsImJsb2NrQ2xhc3NlcyIsImNsYXNzTmFtZXMiLCJjb250YWluZXJDbGFzc2VzIiwiY29udGFpbmVyIiwic2xpZGVzIiwidGV4dCIsImltYWdlX2NsYXNzaWMiLCJsdHIiLCJpbWFnZV9mdWxsIiwiaW1hZ2VfbW9iaWxlIiwiQmxvY2tTbGlkZVNob3ciLCJ3aXRoRGVwYXJ0bWVudHMiLCJkaXJlY3Rpb24iLCJ1c2VEaXJlY3Rpb24iLCJkZXBhcnRtZW50c0FyZWFSZWYiLCJpc0Rlc2t0b3AiLCJ1c2VNZWRpYSIsInVzZUVmZmVjdCIsImRlcGFydG1lbnRzU2VydmljZSIsImFyZWEiLCJzZXREZXBhcnRtZW50c0FyZWFSZWYiLCJsYXlvdXRDbGFzc2VzIiwic2xpZGVzTGlzdCIsInNsaWRlIiwiX19odG1sIiwiSG9tZVBhZ2VUd28iLCJpbml0RGF0YSIsImZlYXR1cmVkUHJvZHVjdHMiLCJ1c2VQcm9kdWN0VGFicyIsInVzZU1lbW8iLCJjYXRlZ29yeVNsdWciLCJ1bmRlZmluZWQiLCJ0YWIiLCJsaW1pdCIsImJlc3RzZWxsZXJzIiwidXNlRGVmZXJyZWREYXRhIiwibGF0ZXN0UHJvZHVjdHMiLCJwcm9kdWN0Q29sdW1ucyIsInVzZVByb2R1Y3RDb2x1bW5zIiwic291cmNlIiwidGhlbWUiLCJkYXRhU2hvcEJsb2NrQ2F0ZWdvcmllcyIsImlzTG9hZGluZyIsInRhYnMiLCJoYW5kbGVUYWJDaGFuZ2UiLCJkYXRhQmxvZ1Bvc3RzIiwiaXNMaW5rIiwiaXNTaW1wbGVMaW5rIiwiaXNFeHRlcm5hbCIsInRlc3QiLCJBcHBMaW5rIiwiYW5jaG9yUHJvcHMiLCJsaW5rIiwibGlua1Byb3BzIiwiQXN5bmNBY3Rpb24iLCJhY3Rpb24iLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJjYW5jZWxlZFJlZiIsInJ1biIsInRoZW4iLCJBcnJvd1JvdW5kZWRMZWZ0N3gxMVN2ZyIsIkFycm93Um91bmRlZFJpZ2h0N3gxMVN2ZyIsIkJsb2NrSGVhZGVyIiwib25QcmV2Iiwib25OZXh0IiwiZ3JvdXBzTGlzdCIsImdyb3VwIiwiQ3VycmVuY3lGb3JtYXQiLCJjdXJyZW5jeSIsImN1cnJlbnRDdXJyZW5jeSIsInVzZUN1cnJlbmN5Iiwic3ltYm9sIiwidG9GaXhlZCIsIlBvc3RDYXJkIiwiY2FyZENsYXNzZXMiLCJpbmNsdWRlcyIsImJsb2dDYXRlZ29yeSIsImJsb2dQb3N0IiwiZGF0ZSIsIkNvbXBhcmUxNlN2ZyIsIlF1aWNrdmlldzE2U3ZnIiwiV2lzaGxpc3QxNlN2ZyIsIlByb2R1Y3RDYXJkIiwiY2FydEFkZEl0ZW0iLCJ1c2VDYXJ0QWRkSXRlbSIsIndpc2hsaXN0QWRkSXRlbSIsInVzZVdpc2hsaXN0QWRkSXRlbSIsImNvbXBhcmVBZGRJdGVtIiwidXNlQ29tcGFyZUFkZEl0ZW0iLCJxdWlja3ZpZXdPcGVuIiwidXNlUXVpY2t2aWV3T3BlbiIsImJhZGdlcyIsInByaWNlIiwiZmVhdHVyZXMiLCJpbWFnZXMiLCJjb21wYXJlQXRQcmljZSIsImF0dHJpYnV0ZXMiLCJmaWx0ZXIiLCJ4IiwiZmVhdHVyZWQiLCJhdHRyaWJ1dGUiLCJ2YWx1ZXMiLCJqb2luIiwicmF0aW5nIiwicmV2aWV3cyIsIm1lbW8iLCJSYXRpbmcxM3gxMlN2ZyIsIlJhdGluZyIsInN0YXJzIiwicm9vdENsYXNzZXMiLCJTdHJveWthU2xpY2tJbm5lciIsImZvcndhcmRSZWYiLCJiZWZvcmVDaGFuZ2UiLCJvdGhlclByb3BzIiwib3JpZ2luYWxTbGlja05leHRSZWYiLCJvcmlnaW5hbFNsaWNrUHJldlJlZiIsInNsaWNrTmV4dFJlZiIsInNsaWNrUHJldlJlZiIsImdldFNsaWRlc0NvdW50IiwidG9BcnJheSIsImdldFNsaWRlc1RvU2hvdyIsImdldFN0YXJ0UG9zaXRpb24iLCJzbGlkZXNDb3VudCIsIk1hdGgiLCJtYXgiLCJjZWlsIiwiZ2V0QWN0aXZlU2xpZGVzIiwiY3VycmVudEluZGV4IiwiYWN0aXZlU2xpZGVzIiwiZmlyc3RTbGlkZSIsIm1pbiIsImxhc3RTbGlkZSIsImkiLCJwcmV2ZW50Q2xpY2siLCJzZXRQcmV2ZW50Q2xpY2siLCJzZXRBY3RpdmVTbGlkZXMiLCJvbk1vdXNlZG93biIsImRvd25YIiwic2NyZWVuWCIsImRvd25ZIiwic2NyZWVuWSIsImNsaWNrUHJldmVudGVkIiwib25Nb3VzZW1vdmUiLCJtb3ZlRXZlbnQiLCJkaXN0YW5jZSIsInNxcnQiLCJhYnMiLCJjYW5jZWxhYmxlIiwicHJldmVudERlZmF1bHQiLCJvbk1vdXNldXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFNsaWNrUmVmIiwidXNlQ2FsbGJhY2siLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzbGlja0dvVG8iLCJiZWZvcmVDaGFuZ2VXcmFwcGVyIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsInJldmVyc2VkQ2hpbGRyZW4iLCJyZXZlcnNlIiwic2xpZGVDbGFzc2VzIiwidHlwZSIsImN1c3RvbUZpZWxkcyIsImRhdGFTaG9wQ3VycmVuY2llcyIsImNvZGUiLCJkYXRhU2hvcERlZmF1bHRDdXJyZW5jeSIsImZpbmQiLCJmdWxsTmFtZSIsImF1dGhvciIsInByb2ZpbGVfdXJsIiwiY29udGFjdHMiLCJhZGRyZXNzIiwiZW1haWwiLCJwaG9uZSIsImFwaXVybCIsImF0dHJpYnV0ZXNEZWYiLCJicmFuZHNEYXRhIiwiZ2V0SWQiLCJtYWtlSWRHZW5lcmF0b3IiLCJjYXRlZ29yaWVzRGVmIiwibWFrZVNob3BDYXRlZ29yeSIsImRlZiIsIm5hbWVUb1NsdWciLCJwYXJlbnQiLCJ3YWxrVHJlZSIsIm1ha2VGbiIsImRlZnMiLCJsaXN0IiwidHJlZSIsImNoaWxkcmVuVHJlZSIsImNoaWxkcmVuTGlzdCIsInByZXBhcmVDYXRlZ29yeSIsImRlcHRoIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiY2F0ZWdvcmllc1RyZWVEYXRhIiwiY2F0ZWdvcmllc0xpc3REYXRhIiwicHJvZHVjdHNEZWYiLCJhdmFpbGFiaWxpdHkiLCJtYWtlQmFkZ2VzIiwibWFrZUltYWdlcyIsIm1ha2VDYXRlZ29yaWVzIiwibWFrZUF0dHJpYnV0ZVZhbHVlcyIsImF0dHJpYnV0ZURlZiIsInNsdWdzIiwidmFsdWVEZWYiLCJtYWtlQXR0cmlidXRlcyIsInByb2R1Y3RzRGF0YSIsInByb2R1Y3REZWYiLCJza3UiLCJnZXRQcm9kdWN0cyIsInNoaWZ0IiwiZGVsYXlSZXNwb25zZSIsImZpbHRlclZhbHVlcyIsIkNhdGVnb3J5RmlsdGVyQnVpbGRlciIsIlJhbmdlRmlsdGVyQnVpbGRlciIsIkNoZWNrRmlsdGVyQnVpbGRlciIsIlJhZGlvRmlsdGVyQnVpbGRlciIsIkNvbG9yRmlsdGVyQnVpbGRlciIsImZvckVhY2giLCJtYWtlSXRlbXMiLCJjYWxjIiwicmVkdWNlIiwibXIiLCJzb3J0IiwidG90YWwiLCJwYWdlcyIsImZyb20iLCJ0byIsImEiLCJiIiwic3RhcnQiLCJlbmQiLCJidWlsZCIsInRvTG93ZXJDYXNlIiwiQWJzdHJhY3RGaWx0ZXJCdWlsZGVyIiwiY2F0ZWdvcnlIYXNQcm9kdWN0c0ZuIiwicGFyc2VWYWx1ZSIsInNwbGl0IiwiZXh0cmFjdEl0ZW1zIiwiaXRlbSIsImlzTWF0Y2hlZCIsImNvdW50IiwiYWNjIiwiRXJyb3IiLCJjb2xvcnMiLCJjb2xvciIsImdldENvbG9yQ29kZSIsIm1hdGNoIiwiZmluZEluZGV4IiwicGFyc2VGbG9hdCIsImV4dHJhY3RWYWx1ZSIsImRpZ2l0IiwidG9TdHJpbmciLCJmbG9vciIsImxhc3RJZCIsImNhdGVnb3J5SGFzUHJvZHVjdHMiLCJkZWxheSIsInJlc3BvbnNlIiwibGFuZ3VhZ2VzIiwibG9jYWxlIiwiaWNvbiIsIm1lc3NhZ2VzIiwiZW5NZXNzYWdlcyIsInRoTWVzc2FnZXMiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJQYWdlIiwiRGVwYXJ0bWVudHNTZXJ2aWNlIiwiYXJlYVN0YXRlIiwic3Vic2NyaWJlciIsInN1YnNjcmliZSIsIm1lZGlhIiwibWF0Y2hNZWRpYSIsInN0YXRlIiwic2V0U3RhdGUiLCJtYXRjaGVzIiwib25DaGFuZ2VNZWRpYSIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJkZWZhdWx0RGF0YSIsImluaXRpYWxEYXRhIiwiZGVwcyIsIm1lbW9pemVkU291cmNlIiwic2tpcE5leHRSZWYiLCJjYW5jZWxlZCIsImN1clN0YXRlIiwicHJvZHVjdHNTb3VyY2UiLCJjdXJyZW50VGFiSWQiLCJzZXRDdXJyZW50VGFiSWQiLCJtZW1vaXplZFRhYnMiLCJjdXJyZW50VGFiIiwiaG9tZSIsImNhdGFsb2ciLCJjYXJ0IiwiY2hlY2tvdXQiLCJzaG9wQ2F0ZWdvcnkiLCJ3aXNobGlzdCIsImFjY291bnRTaWduSW4iLCJhY2NvdW50U2lnblVwIiwiYWNjb3VudFNpZ25PdXQiLCJhY2NvdW50RGFzaGJvYXJkIiwiYWNjb3VudFByb2ZpbGUiLCJhY2NvdW50T3JkZXJzIiwiYWNjb3VudE9yZGVyIiwib3JkZXIiLCJhY2NvdW50QWRkcmVzc2VzIiwiYWNjb3VudEFkZHJlc3MiLCJhY2NvdW50UGFzc3dvcmQiLCJ0ZXJtcyIsIkNBUlRfQUREX0lURU0iLCJDQVJUX1JFTU9WRV9JVEVNIiwiQ0FSVF9VUERBVEVfUVVBTlRJVElFUyIsImNhcnRBZGRJdGVtU3VjY2VzcyIsInF1YW50aXR5IiwidG9hc3QiLCJjYXJ0UmVtb3ZlSXRlbVN1Y2Nlc3MiLCJpdGVtSWQiLCJjYXJ0VXBkYXRlUXVhbnRpdGllc1N1Y2Nlc3MiLCJxdWFudGl0aWVzIiwiZGlzcGF0Y2giLCJjYXJ0UmVtb3ZlSXRlbSIsImNhcnRVcGRhdGVRdWFudGl0aWVzIiwidXNlQ2FydCIsInVzZUFwcFNlbGVjdG9yIiwidXNlQXBwQWN0aW9uIiwidXNlQ2FydFJlbW92ZUl0ZW0iLCJ1c2VDYXJ0VXBkYXRlUXVhbnRpdGllcyIsIkFQUExZX0NMSUVOVF9TVEFURSIsImlzQXBwbHlDbGllbnRTdGF0ZUFjdGlvbiIsImFwcGx5Q2xpZW50U3RhdGUiLCJ1c2VBcHBseUNsaWVudFN0YXRlIiwid2l0aENsaWVudFN0YXRlIiwicmVkdWNlciIsIm5hbWVzcGFjZSIsImNoaWxkU3RhdGUiLCJzdGF0ZUZyb20iLCJDT01QQVJFX0FERF9JVEVNIiwiQ09NUEFSRV9SRU1PVkVfSVRFTSIsImNvbXBhcmVBZGRJdGVtU3VjY2VzcyIsImNvbXBhcmVSZW1vdmVJdGVtU3VjY2VzcyIsInByb2R1Y3RJZCIsImNvbXBhcmVSZW1vdmVJdGVtIiwidXNlQ29tcGFyZSIsIkNPTVBBUkVfTkFNRVNQQUNFIiwidXNlQ29tcGFyZVJlbW92ZUl0ZW0iLCJhZGRJdGVtIiwiaXRlbUluZGV4IiwicmVtb3ZlSXRlbSIsImluaXRpYWxTdGF0ZSIsImNvbXBhcmVCYXNlUmVkdWNlciIsImNvbXBhcmVSZWR1Y2VyIiwiQ1VSUkVOQ1lfQ0hBTkdFIiwiY3VycmVuY3lDaGFuZ2UiLCJDVVJSRU5DWV9OQU1FU1BBQ0UiLCJ1c2VDdXJyZW5jeUNoYW5nZSIsImN1cnJlbmN5QmFzZVJlZHVjZXIiLCJjdXJyZW5jeVJlZHVjZXIiLCJ1c2VEaXNwYXRjaCIsImFyZ3MiLCJzZWxlY3RvciIsInVzZVNlbGVjdG9yIiwiTE9DQUxFX0NIQU5HRSIsImxvY2FsZUNoYW5nZSIsImxvY2FsZVNlbGVjdG9yIiwiTE9DQUxFX05BTUVTUEFDRSIsInVzZUxvY2FsZSIsInVzZUxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJ1c2VNZXNzYWdlcyIsInVzZUxvY2FsZUNoYW5nZSIsImxvY2FsZUJhc2VSZWR1Y2VyIiwibG9jYWxlUmVkdWNlciIsIlFVSUNLVklFV19PUEVOIiwiUVVJQ0tWSUVXX0NMT1NFIiwiY2FuY2VsUHJldmlvdXNSZXF1ZXN0IiwicXVpY2t2aWV3T3BlblN1Y2Nlc3MiLCJxdWlja3ZpZXdDbG9zZSIsInByb2R1Y3RTbHVnIiwidXNlUXVpY2t2aWV3IiwiUVVJQ0tWSUVXX05BTUVTUEFDRSIsInVzZVF1aWNrdmlld0Nsb3NlIiwib3BlbiIsInF1aWNrdmlld1JlZHVjZXIiLCJuZXdTdGF0ZSIsIldJU0hMSVNUX0FERF9JVEVNIiwiV0lTSExJU1RfUkVNT1ZFX0lURU0iLCJ3aXNobGlzdEFkZEl0ZW1TdWNjZXNzIiwid2lzaGxpc3RSZW1vdmVJdGVtU3VjY2VzcyIsIndpc2hsaXN0UmVtb3ZlSXRlbSIsInVzZVdpc2hsaXN0IiwiV0lTSExJU1RfTkFNRVNQQUNFIiwidXNlV2lzaGxpc3RSZW1vdmVJdGVtIiwid2lzaGxpc3RCYXNlUmVkdWNlciIsIndpc2hsaXN0UmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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Q0FBQ3pULEtBQU4sQ0FBWXFJLE1BQVosQ0FBb0JDLENBQUQsSUFBT0EsQ0FBQyxDQUFDMUgsRUFBRixLQUFTZ1gsU0FBbkM7QUFESixHQUFQO0FBR0g7O0FBRUQsTUFBTVEsWUFBMkIsR0FBRztBQUNoQ3BZLE9BQUssRUFBRTtBQUR5QixDQUFwQztBQUlPLE1BQU04YSxrQkFBa0IsR0FBRyxVQUEzQjs7QUFFUCxTQUFTRSxtQkFBVCxDQUE2QnZILEtBQUssR0FBRzJFLFlBQXJDLEVBQW1EMVMsTUFBbkQsRUFBMkU7QUFDdkUsVUFBUUEsTUFBTSxDQUFDOEcsSUFBZjtBQUNBLFNBQUtnTyxzRUFBTDtBQUNJLGFBQU92QyxPQUFPLENBQUN4RSxLQUFELEVBQVEvTixNQUFNLENBQUN4RSxPQUFmLENBQWQ7O0FBRUosU0FBS3VaLHlFQUFMO0FBQ0ksYUFBT3RDLFVBQVUsQ0FBQzFFLEtBQUQsRUFBUS9OLE1BQU0sQ0FBQ2tTLFNBQWYsQ0FBakI7O0FBRUo7QUFDSSxhQUFPbkUsS0FBUDtBQVJKO0FBVUg7O0FBRUQsTUFBTXdILGVBQWUsR0FBRzlELCtEQUFlLENBQUM2RCxtQkFBRCxFQUFzQkYsa0JBQXRCLENBQXZDO0FBRWVHLDhFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzLGFycm93LWJvZHktc3R5bGUgKi9cbi8vIG5vaW5zcGVjdGlvbiBFUzZVbnVzZWRJbXBvcnRzXG5pbXBvcnQgcXMgZnJvbSAncXVlcnktc3RyaW5nJztcbmltcG9ydCB7IGdldENhdGVnb3JpZXMsIGdldENhdGVnb3J5QnlTbHVnIH0gZnJvbSAnLi4vZmFrZS1zZXJ2ZXIvZW5kcG9pbnRzL2NhdGVnb3JpZXMnO1xuaW1wb3J0IHsgSVNob3BDYXRlZ29yeSB9IGZyb20gJy4uL2ludGVyZmFjZXMvY2F0ZWdvcnknO1xuaW1wb3J0IHsgSVByb2R1Y3QsIElQcm9kdWN0c0xpc3QgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3Byb2R1Y3QnO1xuaW1wb3J0IHsgSUZpbHRlclZhbHVlcywgSUxpc3RPcHRpb25zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9saXN0JztcbmltcG9ydCB7XG4gICAgZ2V0RGlzY291bnRlZFByb2R1Y3RzLFxuICAgIGdldEZlYXR1cmVkUHJvZHVjdHMsXG4gICAgZ2V0TGF0ZXN0UHJvZHVjdHMsXG4gICAgZ2V0UG9wdWxhclByb2R1Y3RzLFxuICAgIGdldFByb2R1Y3RCeVNsdWcsXG4gICAgZ2V0UHJvZHVjdHNMaXN0LFxuICAgIGdldFJlbGF0ZWRQcm9kdWN0cyxcbiAgICBnZXRTdWdnZXN0aW9ucyxcbiAgICBnZXRUb3BSYXRlZFByb2R1Y3RzLFxufSBmcm9tICcuLi9mYWtlLXNlcnZlci9lbmRwb2ludHMvcHJvZHVjdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdldENhdGVnb3JpZXNPcHRpb25zIHtcbiAgICBkZXB0aD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRDYXRlZ29yeUJ5U2x1Z09wdGlvbnMge1xuICAgIGRlcHRoPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFJlbGF0ZWRQcm9kdWN0c09wdGlvbnMge1xuICAgIGxpbWl0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldFByb2R1Y3RzT3B0aW9ucyB7XG4gICAgbGltaXQ/OiBudW1iZXI7XG4gICAgY2F0ZWdvcnk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIEdldFN1Z2dlc3Rpb25zT3B0aW9ucyA9IHtcbiAgICBsaW1pdD86IG51bWJlcjtcbiAgICBjYXRlZ29yeT86IHN0cmluZztcbn07XG5cbmNvbnN0IHNob3BBcGkgPSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhcnJheSBvZiBjYXRlZ29yaWVzLlxuICAgICAqL1xuICAgIGdldENhdGVnb3JpZXM6IChvcHRpb25zOiBHZXRDYXRlZ29yaWVzT3B0aW9ucyA9IHt9KTogUHJvbWlzZTxJU2hvcENhdGVnb3J5W10+ID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaXMgd2hhdCB5b3VyIEFQSSBlbmRwb2ludCBtaWdodCBsb29rIGxpa2U6XG4gICAgICAgICAqXG4gICAgICAgICAqIGh0dHBzOi8vZXhhbXBsZS5jb20vYXBpL2NhdGVnb3JpZXMuanNvbj9kZXB0aD0yXG4gICAgICAgICAqXG4gICAgICAgICAqIHdoZXJlOlxuICAgICAgICAgKiAtIDIgPSBvcHRpb25zLmRlcHRoXG4gICAgICAgICAqL1xuICAgICAgICAvLyByZXR1cm4gZmV0Y2goYGh0dHBzOi8vZXhhbXBsZS5jb20vYXBpL2NhdGVnb3JpZXMuanNvbj8ke3FzLnN0cmluZ2lmeShvcHRpb25zKX1gKVxuICAgICAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG4gICAgICAgIC8vIFRoaXMgaXMgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMgb25seS4gUmVtb3ZlIGl0IGFuZCB1c2UgdGhlIGNvZGUgYWJvdmUuXG4gICAgICAgIHJldHVybiBnZXRDYXRlZ29yaWVzKG9wdGlvbnMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjYXRlZ29yeSBieSBzbHVnLlxuICAgICAqL1xuICAgIGdldENhdGVnb3J5QnlTbHVnOiAoc2x1Zzogc3RyaW5nLCBvcHRpb25zOiBHZXRDYXRlZ29yeUJ5U2x1Z09wdGlvbnMgPSB7fSk6IFByb21pc2U8SVNob3BDYXRlZ29yeT4gPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBpcyB3aGF0IHlvdXIgQVBJIGVuZHBvaW50IG1pZ2h0IGxvb2sgbGlrZTpcbiAgICAgICAgICpcbiAgICAgICAgICogaHR0cHM6Ly9leGFtcGxlLmNvbS9hcGkvY2F0ZWdvcmllcy9wb3dlci10b29scy5qc29uP2RlcHRoPTJcbiAgICAgICAgICpcbiAgICAgICAgICogd2hlcmU6XG4gICAgICAgICAqIC0gcG93ZXItdG9vbHMgPSBzbHVnXG4gICAgICAgICAqIC0gMiAgICAgICAgICAgPSBvcHRpb25zLmRlcHRoXG4gICAgICAgICAqL1xuICAgICAgICAvLyByZXR1cm4gZmV0Y2goYGh0dHBzOi8vZXhhbXBsZS5jb20vYXBpL2NhdGVnb3JpZXMvJHtzbHVnfS5qc29uPyR7cXMuc3RyaW5naWZ5KG9wdGlvbnMpfWApXG4gICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbiAgICAgICAgLy8gVGhpcyBpcyBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3NlcyBvbmx5LiBSZW1vdmUgaXQgYW5kIHVzZSB0aGUgY29kZSBhYm92ZS5cbiAgICAgICAgcmV0dXJuIGdldENhdGVnb3J5QnlTbHVnKHNsdWcsIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBwcm9kdWN0LlxuICAgICAqL1xuICAgIGdldFByb2R1Y3RCeVNsdWc6IChzbHVnOiBzdHJpbmcpOiBQcm9taXNlPElQcm9kdWN0PiA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGlzIHdoYXQgeW91ciBBUEkgZW5kcG9pbnQgbWlnaHQgbG9vayBsaWtlOlxuICAgICAgICAgKlxuICAgICAgICAgKiBodHRwczovL2V4YW1wbGUuY29tL2FwaS9wcm9kdWN0cy9zY3Jld2RyaXZlci1hMjAxNy5qc29uXG4gICAgICAgICAqXG4gICAgICAgICAqIHdoZXJlOlxuICAgICAgICAgKiAtIHNjcmV3ZHJpdmVyLWEyMDE3ID0gc2x1Z1xuICAgICAgICAgKi9cbiAgICAgICAgLy8gcmV0dXJuIGZldGNoKGBodHRwczovL2V4YW1wbGUuY29tL2FwaS9wcm9kdWN0cy8ke3NsdWd9Lmpzb25gKVxuICAgICAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG4gICAgICAgIC8vIFRoaXMgaXMgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMgb25seS4gUmVtb3ZlIGl0IGFuZCB1c2UgdGhlIGNvZGUgYWJvdmUuXG4gICAgICAgIHJldHVybiBnZXRQcm9kdWN0QnlTbHVnKHNsdWcpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhcnJheSBvZiByZWxhdGVkIHByb2R1Y3RzLlxuICAgICAqL1xuICAgIGdldFJlbGF0ZWRQcm9kdWN0czogKHNsdWc6IHN0cmluZywgb3B0aW9uczogR2V0UmVsYXRlZFByb2R1Y3RzT3B0aW9ucyA9IHt9KTogUHJvbWlzZTxJUHJvZHVjdFtdPiA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGlzIHdoYXQgeW91ciBBUEkgZW5kcG9pbnQgbWlnaHQgbG9vayBsaWtlOlxuICAgICAgICAgKlxuICAgICAgICAgKiBodHRwczovL2V4YW1wbGUuY29tL2FwaS9zaG9wL3Byb2R1Y3RzL3NjcmV3ZHJpdmVyLWEyMDE3L3JlbGF0ZWQuanNvbiZsaW1pdD0zXG4gICAgICAgICAqXG4gICAgICAgICAqIHdoZXJlOlxuICAgICAgICAgKiAtIHNjcmV3ZHJpdmVyLWEyMDE3ID0gc2x1Z1xuICAgICAgICAgKiAtIGxpbWl0ICAgICAgICAgICAgID0gb3B0aW9ucy5saW1pdFxuICAgICAgICAgKi9cbiAgICAgICAgLy8gcmV0dXJuIGZldGNoKGBodHRwczovL2V4YW1wbGUuY29tL2FwaS9wcm9kdWN0cy8ke3NsdWd9L3JlbGF0ZWQuanNvbj8ke3FzLnN0cmluZ2lmeShvcHRpb25zKX1gKVxuICAgICAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG4gICAgICAgIC8vIFRoaXMgaXMgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMgb25seS4gUmVtb3ZlIGl0IGFuZCB1c2UgdGhlIGNvZGUgYWJvdmUuXG4gICAgICAgIHJldHVybiBnZXRSZWxhdGVkUHJvZHVjdHMoc2x1Zywgb3B0aW9ucyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gcHJvZHVjdHMgbGlzdC5cbiAgICAgKi9cbiAgICBnZXRQcm9kdWN0c0xpc3Q6IChvcHRpb25zOiBJTGlzdE9wdGlvbnMgPSB7fSwgZmlsdGVyczogSUZpbHRlclZhbHVlcyA9IHt9KTogUHJvbWlzZTxJUHJvZHVjdHNMaXN0PiA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGlzIHdoYXQgeW91ciBBUEkgZW5kcG9pbnQgbWlnaHQgbG9vayBsaWtlOlxuICAgICAgICAgKlxuICAgICAgICAgKiBodHRwczovL2V4YW1wbGUuY29tL2FwaS9wcm9kdWN0cy5qc29uP3BhZ2U9MiZsaW1pdD0xMiZzb3J0PW5hbWVfZGVzYyZmaWx0ZXJfY2F0ZWdvcnk9c2NyZXdkcml3ZXJzJmZpbHRlcl9wcmljZT01MDAtMTAwMFxuICAgICAgICAgKlxuICAgICAgICAgKiB3aGVyZTpcbiAgICAgICAgICogLSBwYWdlICAgICAgICAgICAgPSBvcHRpb25zLnBhZ2VcbiAgICAgICAgICogLSBsaW1pdCAgICAgICAgICAgPSBvcHRpb25zLmxpbWl0XG4gICAgICAgICAqIC0gc29ydCAgICAgICAgICAgID0gb3B0aW9ucy5zb3J0XG4gICAgICAgICAqIC0gZmlsdGVyX2NhdGVnb3J5ID0gZmlsdGVycy5jYXRlZ29yeVxuICAgICAgICAgKiAtIGZpbHRlcl9wcmljZSAgICA9IGZpbHRlcnMucHJpY2VcbiAgICAgICAgICovXG4gICAgICAgIC8vIGNvbnN0IHBhcmFtcyA9IHsgLi4ub3B0aW9ucyB9O1xuICAgICAgICAvL1xuICAgICAgICAvLyBPYmplY3Qua2V5cyhmaWx0ZXJzKS5mb3JFYWNoKChzbHVnKSA9PiB7XG4gICAgICAgIC8vICAgICBwYXJhbXNbYGZpbHRlcl8ke3NsdWd9YF0gPSBmaWx0ZXJzW3NsdWddO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gcmV0dXJuIGZldGNoKGBodHRwczovL2V4YW1wbGUuY29tL2FwaS9wcm9kdWN0cy5qc29uPyR7cXMuc3RyaW5naWZ5KHBhcmFtcyl9YClcbiAgICAgICAgLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuICAgICAgICAvLyBUaGlzIGlzIGZvciBkZW1vbnN0cmF0aW9uIHB1cnBvc2VzIG9ubHkuIFJlbW92ZSBpdCBhbmQgdXNlIHRoZSBjb2RlIGFib3ZlLlxuICAgICAgICByZXR1cm4gZ2V0UHJvZHVjdHNMaXN0KG9wdGlvbnMsIGZpbHRlcnMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhcnJheSBvZiBmZWF0dXJlZCBwcm9kdWN0cy5cbiAgICAgKi9cbiAgICBnZXRGZWF0dXJlZFByb2R1Y3RzOiAob3B0aW9uczogR2V0UHJvZHVjdHNPcHRpb25zID0ge30pOiBQcm9taXNlPElQcm9kdWN0W10+ID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaXMgd2hhdCB5b3VyIEFQSSBlbmRwb2ludCBtaWdodCBsb29rIGxpa2U6XG4gICAgICAgICAqXG4gICAgICAgICAqIGh0dHBzOi8vZXhhbXBsZS5jb20vYXBpL3Nob3AvZmVhdHVyZWQtcHJvZHVjdHMuanNvbj9saW1pdD0zJmNhdGVnb3J5PXBvd2VyLXRvb2xzXG4gICAgICAgICAqXG4gICAgICAgICAqIHdoZXJlOlxuICAgICAgICAgKiAtIDMgICAgICAgICAgID0gb3B0aW9ucy5saW1pdFxuICAgICAgICAgKiAtIHBvd2VyLXRvb2xzID0gb3B0aW9ucy5jYXRlZ29yeVxuICAgICAgICAgKi9cbiAgICAgICAgLy8gcmV0dXJuIGZldGNoKGBodHRwczovL2V4YW1wbGUuY29tL2FwaS9mZWF0dXJlZC1wcm9kdWN0cy5qc29uPyR7cXMuc3RyaW5naWZ5KG9wdGlvbnMpfWApXG4gICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbiAgICAgICAgLy8gVGhpcyBpcyBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3NlcyBvbmx5LiBSZW1vdmUgaXQgYW5kIHVzZSB0aGUgY29kZSBhYm92ZS5cbiAgICAgICAgcmV0dXJuIGdldEZlYXR1cmVkUHJvZHVjdHMob3B0aW9ucyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFycmF5IG9mIGxhdGVzdCBwcm9kdWN0cy5cbiAgICAgKi9cbiAgICBnZXRMYXRlc3RQcm9kdWN0czogKG9wdGlvbnM6IEdldFByb2R1Y3RzT3B0aW9ucyA9IHt9KTogUHJvbWlzZTxJUHJvZHVjdFtdPiA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGlzIHdoYXQgeW91ciBBUEkgZW5kcG9pbnQgbWlnaHQgbG9vayBsaWtlOlxuICAgICAgICAgKlxuICAgICAgICAgKiBodHRwczovL2V4YW1wbGUuY29tL2FwaS9zaG9wL2xhdGVzdC1wcm9kdWN0cy5qc29uP2xpbWl0PTMmY2F0ZWdvcnk9cG93ZXItdG9vbHNcbiAgICAgICAgICpcbiAgICAgICAgICogd2hlcmU6XG4gICAgICAgICAqIC0gMyAgICAgICAgICAgPSBvcHRpb25zLmxpbWl0XG4gICAgICAgICAqIC0gcG93ZXItdG9vbHMgPSBvcHRpb25zLmNhdGVnb3J5XG4gICAgICAgICAqL1xuICAgICAgICAvLyByZXR1cm4gZmV0Y2goYGh0dHBzOi8vZXhhbXBsZS5jb20vYXBpL2xhdGVzdC1wcm9kdWN0cy5qc29uPyR7cXMuc3RyaW5naWZ5KG9wdGlvbnMpfWApXG4gICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbiAgICAgICAgLy8gVGhpcyBpcyBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3NlcyBvbmx5LiBSZW1vdmUgaXQgYW5kIHVzZSB0aGUgY29kZSBhYm92ZS5cbiAgICAgICAgcmV0dXJuIGdldExhdGVzdFByb2R1Y3RzKG9wdGlvbnMpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0b3AgcmF0ZWQgcHJvZHVjdHMuXG4gICAgICovXG4gICAgZ2V0VG9wUmF0ZWRQcm9kdWN0czogKG9wdGlvbnM6IEdldFByb2R1Y3RzT3B0aW9ucyA9IHt9KTogUHJvbWlzZTxJUHJvZHVjdFtdPiA9PiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGlzIHdoYXQgeW91ciBBUEkgZW5kcG9pbnQgbWlnaHQgbG9vayBsaWtlOlxuICAgICAgICAgKlxuICAgICAgICAgKiBodHRwczovL2V4YW1wbGUuY29tL2FwaS9zaG9wL3RvcC1yYXRlZC1wcm9kdWN0cy5qc29uP2xpbWl0PTMmY2F0ZWdvcnk9cG93ZXItdG9vbHNcbiAgICAgICAgICpcbiAgICAgICAgICogd2hlcmU6XG4gICAgICAgICAqIC0gMyAgICAgICAgICAgPSBvcHRpb25zLmxpbWl0XG4gICAgICAgICAqIC0gcG93ZXItdG9vbHMgPSBvcHRpb25zLmNhdGVnb3J5XG4gICAgICAgICAqL1xuICAgICAgICAvLyByZXR1cm4gZmV0Y2goYGh0dHBzOi8vZXhhbXBsZS5jb20vYXBpL3RvcC1yYXRlZC1wcm9kdWN0cy5qc29uPyR7cXMuc3RyaW5naWZ5KG9wdGlvbnMpfWApXG4gICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbiAgICAgICAgLy8gVGhpcyBpcyBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3NlcyBvbmx5LiBSZW1vdmUgaXQgYW5kIHVzZSB0aGUgY29kZSBhYm92ZS5cbiAgICAgICAgcmV0dXJuIGdldFRvcFJhdGVkUHJvZHVjdHMob3B0aW9ucyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGRpc2NvdW50ZWQgcHJvZHVjdHMuXG4gICAgICovXG4gICAgZ2V0RGlzY291bnRlZFByb2R1Y3RzOiAob3B0aW9uczogR2V0UHJvZHVjdHNPcHRpb25zID0ge30pOiBQcm9taXNlPElQcm9kdWN0W10+ID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaXMgd2hhdCB5b3VyIEFQSSBlbmRwb2ludCBtaWdodCBsb29rIGxpa2U6XG4gICAgICAgICAqXG4gICAgICAgICAqIGh0dHBzOi8vZXhhbXBsZS5jb20vYXBpL3Nob3AvZGlzY291bnRlZC1wcm9kdWN0cy5qc29uP2xpbWl0PTMmY2F0ZWdvcnk9cG93ZXItdG9vbHNcbiAgICAgICAgICpcbiAgICAgICAgICogd2hlcmU6XG4gICAgICAgICAqIC0gMyAgICAgICAgICAgPSBvcHRpb25zLmxpbWl0XG4gICAgICAgICAqIC0gcG93ZXItdG9vbHMgPSBvcHRpb25zLmNhdGVnb3J5XG4gICAgICAgICAqL1xuICAgICAgICAvLyByZXR1cm4gZmV0Y2goYGh0dHBzOi8vZXhhbXBsZS5jb20vYXBpL2Rpc2NvdW50ZWQtcHJvZHVjdHMuanNvbj8ke3FzLnN0cmluZ2lmeShvcHRpb25zKX1gKVxuICAgICAgICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuXG4gICAgICAgIC8vIFRoaXMgaXMgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMgb25seS4gUmVtb3ZlIGl0IGFuZCB1c2UgdGhlIGNvZGUgYWJvdmUuXG4gICAgICAgIHJldHVybiBnZXREaXNjb3VudGVkUHJvZHVjdHMob3B0aW9ucyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIG1vc3QgcG9wdWxhciBwcm9kdWN0cy5cbiAgICAgKi9cbiAgICBnZXRQb3B1bGFyUHJvZHVjdHM6IChvcHRpb25zOiBHZXRQcm9kdWN0c09wdGlvbnMgPSB7fSk6IFByb21pc2U8SVByb2R1Y3RbXT4gPT4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBpcyB3aGF0IHlvdXIgQVBJIGVuZHBvaW50IG1pZ2h0IGxvb2sgbGlrZTpcbiAgICAgICAgICpcbiAgICAgICAgICogaHR0cHM6Ly9leGFtcGxlLmNvbS9hcGkvc2hvcC9wb3B1bGFyLXByb2R1Y3RzLmpzb24/bGltaXQ9MyZjYXRlZ29yeT1wb3dlci10b29sc1xuICAgICAgICAgKlxuICAgICAgICAgKiB3aGVyZTpcbiAgICAgICAgICogLSAzICAgICAgICAgICA9IG9wdGlvbnMubGltaXRcbiAgICAgICAgICogLSBwb3dlci10b29scyA9IG9wdGlvbnMuY2F0ZWdvcnlcbiAgICAgICAgICovXG4gICAgICAgIC8vIHJldHVybiBmZXRjaChgaHR0cHM6Ly9leGFtcGxlLmNvbS9hcGkvcG9wdWxhci1wcm9kdWN0cy5qc29uPyR7cXMuc3RyaW5naWZ5KG9wdGlvbnMpfWApXG4gICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbiAgICAgICAgLy8gVGhpcyBpcyBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3NlcyBvbmx5LiBSZW1vdmUgaXQgYW5kIHVzZSB0aGUgY29kZSBhYm92ZS5cbiAgICAgICAgcmV0dXJuIGdldFBvcHVsYXJQcm9kdWN0cyhvcHRpb25zKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgc2VhcmNoIHN1Z2dlc3Rpb25zLlxuICAgICAqL1xuICAgIGdldFN1Z2dlc3Rpb25zOiAocXVlcnk6IHN0cmluZywgb3B0aW9uczogR2V0U3VnZ2VzdGlvbnNPcHRpb25zID0ge30pOiBQcm9taXNlPElQcm9kdWN0W10+ID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoaXMgaXMgd2hhdCB5b3VyIEFQSSBlbmRwb2ludCBtaWdodCBsb29rIGxpa2U6XG4gICAgICAgICAqXG4gICAgICAgICAqIGh0dHBzOi8vZXhhbXBsZS5jb20vYXBpL3NlYXJjaC9zdWdnZXN0aW9ucy5qc29uP3F1ZXJ5PXNjcmV3ZHJpdmVyJmxpbWl0PTUmY2F0ZWdvcnk9cG93ZXItdG9vbHNcbiAgICAgICAgICpcbiAgICAgICAgICogd2hlcmU6XG4gICAgICAgICAqIC0gc2NyZXdkcml2ZXIgPSBxdWVyeVxuICAgICAgICAgKiAtIDUgICAgICAgICAgID0gb3B0aW9ucy5saW1pdFxuICAgICAgICAgKiAtIHBvd2VyLXRvb2xzID0gb3B0aW9ucy5jYXRlZ29yeVxuICAgICAgICAgKi9cbiAgICAgICAgLy8gcmV0dXJuIGZldGNoKGBodHRwczovL2V4YW1wbGUuY29tL2FwaS9zZWFyY2gvc3VnZ2VzdGlvbnMuanNvbj8ke3FzLnN0cmluZ2lmeSh7IC4uLm9wdGlvbnMsIHF1ZXJ5IH0pfWApXG4gICAgICAgIC8vICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbiAgICAgICAgLy8gVGhpcyBpcyBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3NlcyBvbmx5LiBSZW1vdmUgaXQgYW5kIHVzZSB0aGUgY29kZSBhYm92ZS5cbiAgICAgICAgcmV0dXJuIGdldFN1Z2dlc3Rpb25zKHF1ZXJ5LCBvcHRpb25zKTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvcEFwaTtcbiIsIi8vIHJlYWN0XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBhcHBsaWNhdGlvblxuaW1wb3J0IEFwcExpbmsgZnJvbSAnLi4vc2hhcmVkL0FwcExpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9ja0Jhbm5lcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGJsb2NrLWJhbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8QXBwTGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJsb2NrLWJhbm5lcl9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jay1iYW5uZXJfX2ltYWdlIGJsb2NrLWJhbm5lcl9faW1hZ2UtLWRlc2t0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiL2ltYWdlcy9iYW5uZXJzL2Jhbm5lci0xLmpwZ1wiKScgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2stYmFubmVyX19pbWFnZSBibG9jay1iYW5uZXJfX2ltYWdlLS1tb2JpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiL2ltYWdlcy9iYW5uZXJzL2Jhbm5lci0xLW1vYmlsZS5qcGdcIiknIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stYmFubmVyX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSHVuZHJlZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciBjbGFzc05hbWU9XCJibG9jay1iYW5uZXJfX21vYmlsZS1iclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBIYW5kIFRvb2xzXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWJhbm5lcl9fdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSGFtbWVycywgQ2hpc2VscywgVW5pdmVyc2FsIFBsaWVycywgTmlwcGVycywgSmlnc2F3cywgU2F3c1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1iYW5uZXJfX2J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiPlNob3AgTm93PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0FwcExpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsIi8vIHJlYWN0XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBhcHBsaWNhdGlvblxuaW1wb3J0IEFwcExpbmsgZnJvbSAnLi4vc2hhcmVkL0FwcExpbmsnO1xuaW1wb3J0IFN0cm95a2FTbGljayBmcm9tICcuLi9zaGFyZWQvU3Ryb3lrYVNsaWNrJztcblxuLy8gZGF0YSBzdHVic1xuaW1wb3J0IGRhdGFTaG9wQnJhbmRzIGZyb20gJy4uLy4uL2RhdGEvc2hvcEJyYW5kcyc7XG5cbmNvbnN0IHNsaWNrU2V0dGluZ3MgPSB7XG4gICAgZG90czogZmFsc2UsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNDAwLFxuICAgIHNsaWRlc1RvU2hvdzogNixcbiAgICBzbGlkZXNUb1Njcm9sbDogNSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDExOTksXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBicmVha3BvaW50OiA1NzUsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2NrQnJhbmRzKCkge1xuICAgIGNvbnN0IGJyYW5kc0xpc3QgPSBkYXRhU2hvcEJyYW5kcy5tYXAoKGJyYW5kLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJsb2NrLWJyYW5kc19faXRlbVwiPlxuICAgICAgICAgICAgPEFwcExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YnJhbmQuaW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L0FwcExpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBibG9jay1icmFuZHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1icmFuZHNfX3NsaWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8U3Ryb3lrYVNsaWNrIHsuLi5zbGlja1NldHRpbmdzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHticmFuZHNMaXN0fVxuICAgICAgICAgICAgICAgICAgICA8L1N0cm95a2FTbGljaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiLy8gcmVhY3RcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgQXBwTGluayBmcm9tICcuLi9zaGFyZWQvQXBwTGluayc7XG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAnLi4vc2hhcmVkL0Jsb2NrSGVhZGVyJztcbmltcG9ydCB1cmwgZnJvbSAnLi4vLi4vc2VydmljZXMvdXJsJztcbmltcG9ydCB7IElDYXRlZ29yeSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvY2F0ZWdvcnknO1xuXG5leHBvcnQgdHlwZSBCbG9ja0NhdGVnb3JpZXNMYXlvdXQgPSAnY2xhc3NpYycgfCAnY29tcGFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tDYXRlZ29yaWVzUHJvcHMge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgY2F0ZWdvcmllcz86IElDYXRlZ29yeVtdO1xuICAgIGxheW91dD86IEJsb2NrQ2F0ZWdvcmllc0xheW91dDtcbn1cblxuZnVuY3Rpb24gQmxvY2tDYXRlZ29yaWVzKHByb3BzOiBCbG9ja0NhdGVnb3JpZXNQcm9wcykge1xuICAgIGNvbnN0IHsgdGl0bGUsIGxheW91dCA9ICdjbGFzc2ljJywgY2F0ZWdvcmllcyA9IFtdIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IGNhdGVnb3JpZXNMaXN0ID0gY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gYGJsb2NrLWNhdGVnb3JpZXNfX2l0ZW0gY2F0ZWdvcnktY2FyZCBjYXRlZ29yeS1jYXJkLS1sYXlvdXQtLSR7bGF5b3V0fWA7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbj86IElDYXRlZ29yeVtdIH0gPSBjYXRlZ29yeTtcblxuICAgICAgICBjb25zdCBzdWJjYXRlZ29yaWVzID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubWFwKChzdWIsIHN1YkluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtzdWJJbmRleH0+XG4gICAgICAgICAgICAgICAgPEFwcExpbmsgaHJlZj17dXJsLmNhdGVnb3J5KHN1Yil9PntzdWIubmFtZX08L0FwcExpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhdGVnb3J5LWNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY2F0ZWdvcnktY2FyZF9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9e3VybC5jYXRlZ29yeShjYXRlZ29yeSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjYXRlZ29yeS5pbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXBwTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhdGVnb3J5LWNhcmRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNhdGVnb3J5LWNhcmRfX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXBwTGluayBocmVmPXt1cmwuY2F0ZWdvcnkoY2F0ZWdvcnkpfT57Y2F0ZWdvcnkubmFtZX08L0FwcExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXRlZ29yeS1jYXJkX19saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJjYXRlZ29yaWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktY2FyZF9fYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFwcExpbmsgaHJlZj17dXJsLmNhdGVnb3J5KGNhdGVnb3J5KX0+U2hvdyBBbGw8L0FwcExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktY2FyZF9fcHJvZHVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7Y2F0ZWdvcnkuaXRlbXN9IFByb2R1Y3RzYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BibG9jayBibG9jay0taGlnaGxpZ2h0ZWQgYmxvY2stY2F0ZWdvcmllcyBibG9jay1jYXRlZ29yaWVzLS1sYXlvdXQtLSR7bGF5b3V0fWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8QmxvY2tIZWFkZXIgdGl0bGU9e3RpdGxlfSAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1jYXRlZ29yaWVzX19saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzTGlzdH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0NhdGVnb3JpZXM7XG4iLCIvLyByZWFjdFxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuLy8gdGhpcmQtcGFydHlcbmltcG9ydCBTbGljaywgeyBTZXR0aW5ncyB9IGZyb20gJ3JlYWN0LXNsaWNrJztcblxuLy8gYXBwbGljYXRpb25cbmltcG9ydCBCbG9ja0hlYWRlciBmcm9tICcuLi9zaGFyZWQvQmxvY2tIZWFkZXInO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL3NoYXJlZC9Qb3N0Q2FyZCc7XG5pbXBvcnQgU3Ryb3lrYVNsaWNrIGZyb20gJy4uL3NoYXJlZC9TdHJveWthU2xpY2snO1xuaW1wb3J0IHsgSVBvc3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Bvc3QnO1xuXG5leHBvcnQgdHlwZSBCbG9ja1Bvc3RzTGF5b3V0ID0gJ2xpc3Qtc20nIHwgJ2dyaWQtbmwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrUG9zdHNQcm9wcyB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBsYXlvdXQ/OiBCbG9ja1Bvc3RzTGF5b3V0O1xuICAgIHBvc3RzPzogSVBvc3RbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCbG9ja1Bvc3RzU2xpY2tQcm9wcyB7XG4gICAgW2xheW91dDogc3RyaW5nXTogU2V0dGluZ3M7XG59XG5cbmNvbnN0IHNsaWNrU2V0dGluZ3M6IEJsb2NrUG9zdHNTbGlja1Byb3BzID0ge1xuICAgICdncmlkLW5sJzoge1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA0MDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgICdsaXN0LXNtJzoge1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA0MDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxufTtcblxuZnVuY3Rpb24gQmxvY2tQb3N0cyhwcm9wczogQmxvY2tQb3N0c1Byb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgbGF5b3V0ID0gJ2xpc3Qtc20nLFxuICAgICAgICBwb3N0cyA9IFtdLFxuICAgIH0gPSBwcm9wcztcbiAgICBjb25zdCBzbGlja1JlZiA9IHVzZVJlZjxTbGljayB8IG51bGw+KG51bGwpO1xuXG4gICAgY29uc3QgaGFuZGxlTmV4dENsaWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2xpY2tSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgc2xpY2tSZWYuY3VycmVudC5zbGlja05leHQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVQcmV2Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzbGlja1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzbGlja1JlZi5jdXJyZW50LnNsaWNrUHJldigpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHBvc3RzTGlzdCA9IHBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BibG9jayBibG9jay1wb3N0cyBibG9jay1wb3N0cy0tbGF5b3V0LS0ke2xheW91dH1gfSBkYXRhLWxheW91dD17bGF5b3V0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEJsb2NrSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIGFycm93c1xuICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIG9uTmV4dD17aGFuZGxlTmV4dENsaWNrfVxuICAgICAgICAgICAgICAgICAgICBvblByZXY9e2hhbmRsZVByZXZDbGlja31cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1wb3N0c19fc2xpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTdHJveWthU2xpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17c2xpY2tSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uc2xpY2tTZXR0aW5nc1tsYXlvdXRdfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdHNMaXN0fVxuICAgICAgICAgICAgICAgICAgICA8L1N0cm95a2FTbGljaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1Bvc3RzO1xuIiwiLy8gcmVhY3RcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAnLi4vc2hhcmVkL0Jsb2NrSGVhZGVyJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuLi9zaGFyZWQvUHJvZHVjdENhcmQnO1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Byb2R1Y3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrUHJvZHVjdENvbHVtbnNJdGVtIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHByb2R1Y3RzOiBJUHJvZHVjdFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrUHJvZHVjdENvbHVtbnNQcm9wcyB7XG4gICAgY29sdW1ucz86IEJsb2NrUHJvZHVjdENvbHVtbnNJdGVtW107XG59XG5cbmZ1bmN0aW9uIEJsb2NrUHJvZHVjdENvbHVtbnMocHJvcHM6IEJsb2NrUHJvZHVjdENvbHVtbnNQcm9wcykge1xuICAgIGNvbnN0IHsgY29sdW1ucyA9IFtdIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IGNvbHVtbnNMaXN0ID0gY29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBjb2x1bW4ucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5pZH0gY2xhc3NOYW1lPVwiYmxvY2stcHJvZHVjdC1jb2x1bW5zX19pdGVtXCI+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb2R1Y3R9IGxheW91dD1cImhvcml6b250YWxcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxCbG9ja0hlYWRlciB0aXRsZT17Y29sdW1uLnRpdGxlfSAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1wcm9kdWN0LWNvbHVtbnNfX2NvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgYmxvY2stcHJvZHVjdC1jb2x1bW5zIGQtbGctYmxvY2sgZC1ub25lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zTGlzdH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1Byb2R1Y3RDb2x1bW5zO1xuIiwiLy8gcmVhY3RcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgQmxvY2tIZWFkZXIgZnJvbSAnLi4vc2hhcmVkL0Jsb2NrSGVhZGVyJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuLi9zaGFyZWQvUHJvZHVjdENhcmQnO1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Byb2R1Y3QnO1xuXG5leHBvcnQgdHlwZSBCbG9ja1Byb2R1Y3RzTGF5b3V0ID0gJ2xhcmdlLWZpcnN0JyB8ICdsYXJnZS1sYXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBCbG9ja1Byb2R1Y3RzUHJvcHMge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbGF5b3V0PzogQmxvY2tQcm9kdWN0c0xheW91dDtcbiAgICBmZWF0dXJlZFByb2R1Y3Q/OiBJUHJvZHVjdDtcbiAgICBwcm9kdWN0cz86IElQcm9kdWN0W107XG59XG5cbmZ1bmN0aW9uIEJsb2NrUHJvZHVjdHMocHJvcHM6IEJsb2NrUHJvZHVjdHNQcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGZlYXR1cmVkUHJvZHVjdCxcbiAgICAgICAgbGF5b3V0ID0gJ2xhcmdlLWZpcnN0JyxcbiAgICAgICAgcHJvZHVjdHMgPSBbXSxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBsZXQgbGFyZ2U7XG4gICAgbGV0IHNtYWxscztcblxuICAgIGlmIChmZWF0dXJlZFByb2R1Y3QpIHtcbiAgICAgICAgbGFyZ2UgPSAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLXByb2R1Y3RzX19mZWF0dXJlZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stcHJvZHVjdHNfX2ZlYXR1cmVkLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e2ZlYXR1cmVkUHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChwcm9kdWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzTGlzdCA9IHByb2R1Y3RzLnNsaWNlKDAsIDYpLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmxvY2stcHJvZHVjdHNfX2xpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpO1xuXG4gICAgICAgIHNtYWxscyA9IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stcHJvZHVjdHNfX2xpc3RcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdHNMaXN0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BibG9jayBibG9jay1wcm9kdWN0cyBibG9jay1wcm9kdWN0cy0tbGF5b3V0LS0ke2xheW91dH1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPEJsb2NrSGVhZGVyIHRpdGxlPXt0aXRsZX0gLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stcHJvZHVjdHNfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAge2xheW91dCA9PT0gJ2xhcmdlLWZpcnN0JyAmJiBsYXJnZX1cbiAgICAgICAgICAgICAgICAgICAge3NtYWxsc31cbiAgICAgICAgICAgICAgICAgICAge2xheW91dCA9PT0gJ2xhcmdlLWxhc3QnICYmIGxhcmdlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrUHJvZHVjdHM7XG4iLCIvLyByZWFjdFxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuLy8gdGhpcmQtcGFydHlcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFNsaWNrIGZyb20gJ3JlYWN0LXNsaWNrJztcblxuLy8gYXBwbGljYXRpb25cbmltcG9ydCBCbG9ja0hlYWRlciwgeyBCbG9ja0hlYWRlckdyb3VwIH0gZnJvbSAnLi4vc2hhcmVkL0Jsb2NrSGVhZGVyJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuLi9zaGFyZWQvUHJvZHVjdENhcmQnO1xuaW1wb3J0IFN0cm95a2FTbGljaywgeyBTdHJveWthU2xpY2tQcm9wcyB9IGZyb20gJy4uL3NoYXJlZC9TdHJveWthU2xpY2snO1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Byb2R1Y3QnO1xuXG5mdW5jdGlvbiBnZXRQcm9kdWN0c0NvbHVtbnMocHJvZHVjdHM6IElQcm9kdWN0W10sIHJvd3M6IG51bWJlcikge1xuICAgIGNvbnN0IGNvbHVtbnMgPSBbXTtcblxuICAgIGlmIChyb3dzID4gMCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0c1F1ZXVlID0gcHJvZHVjdHMuc2xpY2UoKTtcblxuICAgICAgICB3aGlsZSAocHJvZHVjdHNRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb2x1bW5zLnB1c2gocHJvZHVjdHNRdWV1ZS5zcGxpY2UoMCwgcm93cykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbHVtbnM7XG59XG5cbmV4cG9ydCB0eXBlIEJsb2NrUHJvZHVjdHNDYXJvdXNlbExheW91dCA9ICdncmlkLTQnIHwgJ2dyaWQtNC1zbScgfCAnZ3JpZC01JyB8ICdob3Jpem9udGFsJztcblxuZXhwb3J0IGludGVyZmFjZSBCbG9ja1Byb2R1Y3RzQ2Fyb3VzZWxQcm9wczxUIGV4dGVuZHMgQmxvY2tIZWFkZXJHcm91cD4ge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbGF5b3V0PzogQmxvY2tQcm9kdWN0c0Nhcm91c2VsTGF5b3V0O1xuICAgIHJvd3M/OiBudW1iZXI7XG4gICAgcHJvZHVjdHM/OiBJUHJvZHVjdFtdO1xuICAgIGdyb3Vwcz86IFRbXTtcbiAgICB3aXRoU2lkZWJhcj86IGJvb2xlYW47XG4gICAgbG9hZGluZz86IGJvb2xlYW47XG4gICAgb25Hcm91cENsaWNrPzogKGdyb3VwOiBUKSA9PiB2b2lkO1xufVxuXG5jb25zdCBzbGlja1NldHRpbmdzOiB7IFtsYXlvdXQ6IHN0cmluZ106IFN0cm95a2FTbGlja1Byb3BzIH0gPSB7XG4gICAgJ2dyaWQtNCc6IHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogNDAwLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDc5LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICAnZ3JpZC00LXNtJzoge1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA0MDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDc0LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICAnZ3JpZC01Jzoge1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA0MDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDUsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDc5LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICBob3Jpem9udGFsOiB7XG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDQwMCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG59O1xuXG5mdW5jdGlvbiBCbG9ja1Byb2R1Y3RzQ2Fyb3VzZWw8VCBleHRlbmRzIEJsb2NrSGVhZGVyR3JvdXA+KHByb3BzOiBCbG9ja1Byb2R1Y3RzQ2Fyb3VzZWxQcm9wczxUPikge1xuICAgIGNvbnN0IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGxheW91dCA9ICdncmlkLTQnLFxuICAgICAgICByb3dzID0gMSxcbiAgICAgICAgcHJvZHVjdHMgPSBbXSxcbiAgICAgICAgZ3JvdXBzID0gW10sXG4gICAgICAgIHdpdGhTaWRlYmFyID0gZmFsc2UsXG4gICAgICAgIGxvYWRpbmcgPSBmYWxzZSxcbiAgICAgICAgb25Hcm91cENsaWNrLFxuICAgIH0gPSBwcm9wcztcbiAgICBjb25zdCBzbGlja1JlZiA9IHVzZVJlZjxTbGljaz4obnVsbCk7XG5cbiAgICBjb25zdCBoYW5kbGVOZXh0Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzbGlja1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzbGlja1JlZi5jdXJyZW50LnNsaWNrTmV4dCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVByZXZDbGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNsaWNrUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHNsaWNrUmVmLmN1cnJlbnQuc2xpY2tQcmV2KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY29sdW1ucyA9IGdldFByb2R1Y3RzQ29sdW1ucyhwcm9kdWN0cywgcm93cykubWFwKChjb2x1bW4sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gY29sdW1uLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cImJsb2NrLXByb2R1Y3RzLWNhcm91c2VsX19jZWxsXCI+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmxvY2stcHJvZHVjdHMtY2Fyb3VzZWxfX2NvbHVtblwiPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYmxvY2tDbGFzc2VzID0gY2xhc3NOYW1lcygnYmxvY2sgYmxvY2stcHJvZHVjdHMtY2Fyb3VzZWwnLCB7XG4gICAgICAgICdibG9jay1wcm9kdWN0cy1jYXJvdXNlbC0tbG9hZGluZyc6IGxvYWRpbmcsXG4gICAgICAgICdibG9jay1wcm9kdWN0cy1jYXJvdXNlbC0taGFzLWl0ZW1zJzogY29sdW1ucy5sZW5ndGggPiAwLFxuICAgIH0pO1xuICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgY29udGFpbmVyOiAhd2l0aFNpZGViYXIsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YmxvY2tDbGFzc2VzfSBkYXRhLWxheW91dD17bGF5b3V0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc2VzfT5cbiAgICAgICAgICAgICAgICA8QmxvY2tIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICBncm91cHM9e2dyb3Vwc31cbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzXG4gICAgICAgICAgICAgICAgICAgIG9uTmV4dD17aGFuZGxlTmV4dENsaWNrfVxuICAgICAgICAgICAgICAgICAgICBvblByZXY9e2hhbmRsZVByZXZDbGlja31cbiAgICAgICAgICAgICAgICAgICAgb25Hcm91cENsaWNrPXtvbkdyb3VwQ2xpY2t9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stcHJvZHVjdHMtY2Fyb3VzZWxfX3NsaWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLXByb2R1Y3RzLWNhcm91c2VsX19wcmVsb2FkZXJcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdHJveWthU2xpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17c2xpY2tSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uc2xpY2tTZXR0aW5nc1tsYXlvdXRdfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgPC9TdHJveWthU2xpY2s+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tQcm9kdWN0c0Nhcm91c2VsO1xuIiwiLy8gcmVhY3RcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuLy8gdGhpcmQtcGFydHlcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vLyBhcHBsaWNhdGlvblxuaW1wb3J0IEFwcExpbmsgZnJvbSAnLi4vc2hhcmVkL0FwcExpbmsnO1xuaW1wb3J0IGRlcGFydG1lbnRzU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9kZXBhcnRtZW50c1NlcnZpY2UnO1xuaW1wb3J0IFN0cm95a2FTbGljayBmcm9tICcuLi9zaGFyZWQvU3Ryb3lrYVNsaWNrJztcbmltcG9ydCB7IHVzZURpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3N0b3JlL2xvY2FsZS9sb2NhbGVIb29rcyc7XG5pbXBvcnQgeyB1c2VNZWRpYSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2hvb2tzJztcblxuZXhwb3J0IGludGVyZmFjZSBCbG9ja1NsaWRlU2hvd1Byb3BzIHtcbiAgICB3aXRoRGVwYXJ0bWVudHM/OiBib29sZWFuO1xufVxuXG5jb25zdCBzbGlja1NldHRpbmdzID0ge1xuICAgIGRvdHM6IHRydWUsXG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNDAwLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbn07XG5cbmNvbnN0IHNsaWRlcyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn4LiZ4Li14LmC4Lit4LmA4LiX4LiEIOC4hOC4reC4oeC5guC4nuC4quC4tOC4lycsXG4gICAgICAgIHRleHQ6ICfguJzguLnguYnguJnguLPguYDguILguYnguLLguK3guLjguJvguIHguKPguJPguYzguITguK3guKHguYLguJ7guKrguLTguJUg4LiX4Li44LiB4LiK4LiZ4Li04LiU4Lij4Liy4LiE4Liy4Lii4LmI4Lit4Lih4LmA4Lii4Liy4Lin4LmMJyxcbiAgICAgICAgaW1hZ2VfY2xhc3NpYzoge1xuICAgICAgICAgICAgbHRyOiAnL2ltYWdlcy9zbGlkZXMvYmFubmVyMTUwMC5qcGcnLFxuICAgICAgICB9LFxuICAgICAgICBpbWFnZV9mdWxsOiB7XG4gICAgICAgICAgICBsdHI6ICcvaW1hZ2VzL3NsaWRlcy9iYW5uZXIxNTAwLmpwZycsXG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlX21vYmlsZToge1xuICAgICAgICAgICAgbHRyOiAnL2ltYWdlcy9zbGlkZXMvYmFubmVyMTUwMC5qcGcnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgICB0aXRsZTogJycsXG4gICAgLy8gICAgIHRleHQ6ICcnLFxuICAgIC8vICAgICBpbWFnZV9jbGFzc2ljOiB7XG4gICAgLy8gICAgICAgICBsdHI6ICcvaW1hZ2VzL3NsaWRlcy9iYW5uZXJzbGlkZTIuanBnJyxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgaW1hZ2VfZnVsbDoge1xuICAgIC8vICAgICAgICAgbHRyOiAnL2ltYWdlcy9zbGlkZXMvYmFubmVyc2xpZGUyLmpwZycsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGltYWdlX21vYmlsZToge1xuICAgIC8vICAgICAgICAgbHRyOiAnL2ltYWdlcy9zbGlkZXMvYmFubmVyc2xpZGUyLmpwZycsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICAgIHRpdGxlOiAnU2NyZXdkcml2ZXJzPGJyPlByb2Zlc3Npb25hbCBUb29scycsXG4gICAgLy8gICAgIHRleHQ6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0Ljxicj5FdGlhbSBwaGFyZXRyYSBsYW9yZWV0IGR1aSBxdWlzIG1vbGVzdGllLicsXG4gICAgLy8gICAgIGltYWdlX2NsYXNzaWM6IHtcbiAgICAvLyAgICAgICAgIGx0cjogJy9pbWFnZXMvc2xpZGVzL3NsaWRlLTItbHRyLmpwZycsXG4gICAgLy8gICAgICAgICBydGw6ICcvaW1hZ2VzL3NsaWRlcy9zbGlkZS0yLXJ0bC5qcGcnLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBpbWFnZV9mdWxsOiB7XG4gICAgLy8gICAgICAgICBsdHI6ICcvaW1hZ2VzL3NsaWRlcy9zbGlkZS0yLWZ1bGwtbHRyLmpwZycsXG4gICAgLy8gICAgICAgICBydGw6ICcvaW1hZ2VzL3NsaWRlcy9zbGlkZS0yLWZ1bGwtcnRsLmpwZycsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGltYWdlX21vYmlsZToge1xuICAgIC8vICAgICAgICAgbHRyOiAnL2ltYWdlcy9zbGlkZXMvc2xpZGUtMi1tb2JpbGUuanBnJyxcbiAgICAvLyAgICAgICAgIHJ0bDogJy9pbWFnZXMvc2xpZGVzL3NsaWRlLTItbW9iaWxlLmpwZycsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICAgIHRpdGxlOiAnT25lIG1vcmU8YnI+VW5pcXVlIGhlYWRlcicsXG4gICAgLy8gICAgIHRleHQ6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0Ljxicj5FdGlhbSBwaGFyZXRyYSBsYW9yZWV0IGR1aSBxdWlzIG1vbGVzdGllLicsXG4gICAgLy8gICAgIGltYWdlX2NsYXNzaWM6IHtcbiAgICAvLyAgICAgICAgIGx0cjogJy9pbWFnZXMvc2xpZGVzL3NsaWRlLTMtbHRyLmpwZycsXG4gICAgLy8gICAgICAgICBydGw6ICcvaW1hZ2VzL3NsaWRlcy9zbGlkZS0zLXJ0bC5qcGcnLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICBpbWFnZV9mdWxsOiB7XG4gICAgLy8gICAgICAgICBsdHI6ICcvaW1hZ2VzL3NsaWRlcy9zbGlkZS0zLWZ1bGwtbHRyLmpwZycsXG4gICAgLy8gICAgICAgICBydGw6ICcvaW1hZ2VzL3NsaWRlcy9zbGlkZS0zLWZ1bGwtcnRsLmpwZycsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIGltYWdlX21vYmlsZToge1xuICAgIC8vICAgICAgICAgbHRyOiAnL2ltYWdlcy9zbGlkZXMvc2xpZGUtMy1tb2JpbGUuanBnJyxcbiAgICAvLyAgICAgICAgIHJ0bDogJy9pbWFnZXMvc2xpZGVzL3NsaWRlLTMtbW9iaWxlLmpwZycsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gfSxcbl07XG5cbmZ1bmN0aW9uIEJsb2NrU2xpZGVTaG93KHByb3BzOiBCbG9ja1NsaWRlU2hvd1Byb3BzKSB7XG4gICAgY29uc3QgeyB3aXRoRGVwYXJ0bWVudHMgPSBmYWxzZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gdXNlRGlyZWN0aW9uKCk7XG4gICAgY29uc3QgZGVwYXJ0bWVudHNBcmVhUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWEoJyhtaW4td2lkdGg6IDk5MnB4KScpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+ICgpID0+IHtcbiAgICAgICAgZGVwYXJ0bWVudHNTZXJ2aWNlLmFyZWEgPSBudWxsO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRlcGFydG1lbnRzU2VydmljZS5hcmVhID0gZGVwYXJ0bWVudHNBcmVhUmVmLmN1cnJlbnQ7XG4gICAgfSwgW2lzRGVza3RvcCwgZGVwYXJ0bWVudHNBcmVhUmVmXSk7XG5cbiAgICBjb25zdCBzZXREZXBhcnRtZW50c0FyZWFSZWYgPSAocmVmOiBIVE1MRGl2RWxlbWVudCB8IG51bGwpID0+IHtcbiAgICAgICAgZGVwYXJ0bWVudHNBcmVhUmVmLmN1cnJlbnQgPSByZWY7XG5cbiAgICAgICAgaWYgKGlzRGVza3RvcCkge1xuICAgICAgICAgICAgZGVwYXJ0bWVudHNTZXJ2aWNlLmFyZWEgPSBkZXBhcnRtZW50c0FyZWFSZWYuY3VycmVudDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBibG9ja0NsYXNzZXMgPSBjbGFzc05hbWVzKFxuICAgICAgICAnYmxvY2stc2xpZGVzaG93IGJsb2NrJyxcbiAgICAgICAge1xuICAgICAgICAgICAgJ2Jsb2NrLXNsaWRlc2hvdy0tbGF5b3V0LS1mdWxsIG1nLXQtbm8nOiAhd2l0aERlcGFydG1lbnRzLFxuICAgICAgICAgICAgJ2Jsb2NrLXNsaWRlc2hvdy0tbGF5b3V0LS13aXRoLWRlcGFydG1lbnRzJzogd2l0aERlcGFydG1lbnRzLFxuICAgICAgICB9LFxuICAgICk7XG5cbiAgICBjb25zdCBsYXlvdXRDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgJ3BkLXgtbm8nLFxuICAgICk7XG5cbiAgICBjb25zdCBzbGlkZXNMaXN0ID0gc2xpZGVzLm1hcCgoc2xpZGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gKHdpdGhEZXBhcnRtZW50cyA/IHNsaWRlLmltYWdlX2NsYXNzaWMgOiBzbGlkZS5pbWFnZV9mdWxsKVtkaXJlY3Rpb25dO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJsb2NrLXNsaWRlc2hvd19fc2xpZGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrLXNsaWRlc2hvd19fc2xpZGUtaW1hZ2UgYmxvY2stc2xpZGVzaG93X19zbGlkZS1pbWFnZS0tZGVza3RvcFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZX0pYCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2stc2xpZGVzaG93X19zbGlkZS1pbWFnZSBibG9jay1zbGlkZXNob3dfX3NsaWRlLWltYWdlLS1tb2JpbGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c2xpZGUuaW1hZ2VfbW9iaWxlW2RpcmVjdGlvbl19KWAsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLXNsaWRlc2hvd19fc2xpZGUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrLXNsaWRlc2hvd19fc2xpZGUtdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2xpZGUudGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2stc2xpZGVzaG93X19zbGlkZS10ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNsaWRlLnRleHQgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJibG9jay1zbGlkZXNob3dfX3NsaWRlLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiPlNob3AgTm93PC9BcHBMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Jsb2NrQ2xhc3Nlc30+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcGQteC1ubyBtZy10LW5vXCI+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xheW91dENsYXNzZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1zbGlkZXNob3dfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Ryb3lrYVNsaWNrIHsuLi5zbGlja1NldHRpbmdzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NsaWRlc0xpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHJveWthU2xpY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cbiAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrU2xpZGVTaG93O1xuIiwiLy8gcmVhY3RcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG4vLyB0aGlyZC1wYXJ0eVxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuLy8gYXBwbGljYXRpb25cbmltcG9ydCBzaG9wQXBpIGZyb20gJy4uLy4uL2FwaS9zaG9wJztcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wcm9kdWN0JztcbmltcG9ydCB7IHVzZURlZmVycmVkRGF0YSwgdXNlUHJvZHVjdENvbHVtbnMsIHVzZVByb2R1Y3RUYWJzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaG9va3MnO1xuXG4vLyBibG9ja3NcbmltcG9ydCBCbG9ja0Jhbm5lciBmcm9tICcuLi9ibG9ja3MvQmxvY2tCYW5uZXInO1xuaW1wb3J0IEJsb2NrQnJhbmRzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja0JyYW5kcyc7XG5pbXBvcnQgQmxvY2tDYXRlZ29yaWVzIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja0NhdGVnb3JpZXMnO1xuaW1wb3J0IEJsb2NrRmVhdHVyZXMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrRmVhdHVyZXMnO1xuaW1wb3J0IEJsb2NrUG9zdHMgZnJvbSAnLi4vYmxvY2tzL0Jsb2NrUG9zdHMnO1xuaW1wb3J0IEJsb2NrUHJvZHVjdENvbHVtbnMsIHsgQmxvY2tQcm9kdWN0Q29sdW1uc0l0ZW0gfSBmcm9tICcuLi9ibG9ja3MvQmxvY2tQcm9kdWN0Q29sdW1ucyc7XG5pbXBvcnQgQmxvY2tQcm9kdWN0cyBmcm9tICcuLi9ibG9ja3MvQmxvY2tQcm9kdWN0cyc7XG5pbXBvcnQgQmxvY2tQcm9kdWN0c0Nhcm91c2VsIGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1Byb2R1Y3RzQ2Fyb3VzZWwnO1xuaW1wb3J0IEJsb2NrU2xpZGVTaG93IGZyb20gJy4uL2Jsb2Nrcy9CbG9ja1NsaWRlU2hvdyc7XG5cbi8vIGRhdGEgc3R1YnNcbmltcG9ydCBkYXRhQmxvZ1Bvc3RzIGZyb20gJy4uLy4uL2RhdGEvYmxvZ1Bvc3RzJztcbmltcG9ydCBkYXRhU2hvcEJsb2NrQ2F0ZWdvcmllcyBmcm9tICcuLi8uLi9kYXRhL3Nob3BCbG9ja0NhdGVnb3JpZXMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL2RhdGEvdGhlbWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXRhIHtcbiAgICBmZWF0dXJlZFByb2R1Y3RzPzogSVByb2R1Y3RbXTtcbiAgICBiZXN0c2VsbGVycz86IElQcm9kdWN0W107XG4gICAgbGF0ZXN0UHJvZHVjdHM/OiBJUHJvZHVjdFtdO1xuICAgIHByb2R1Y3RDb2x1bW5zPzogQmxvY2tQcm9kdWN0Q29sdW1uc0l0ZW1bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIb21lUGFnZU9uZVByb3BzIHtcbiAgICBpbml0RGF0YT86IEluaXREYXRhO1xufVxuXG5mdW5jdGlvbiBIb21lUGFnZVR3byhwcm9wczogSG9tZVBhZ2VPbmVQcm9wcykge1xuICAgIGNvbnN0IHsgaW5pdERhdGEgfSA9IHByb3BzO1xuXG4gICAgLyoqXG4gICAgICogRmVhdHVyZWQgcHJvZHVjdHMuXG4gICAgICovXG4gICAgY29uc3QgZmVhdHVyZWRQcm9kdWN0cyA9IHVzZVByb2R1Y3RUYWJzKFxuICAgICAgICB1c2VNZW1vKCgpID0+IFtcbiAgICAgICAgICAgIHsgaWQ6IDEsIG5hbWU6ICdBbGwnLCBjYXRlZ29yeVNsdWc6IHVuZGVmaW5lZCB9LFxuICAgICAgICAgICAgeyBpZDogMiwgbmFtZTogJ1Bvd2VyIFRvb2xzJywgY2F0ZWdvcnlTbHVnOiAncG93ZXItdG9vbHMnIH0sXG4gICAgICAgICAgICB7IGlkOiAzLCBuYW1lOiAnSGFuZCBUb29scycsIGNhdGVnb3J5U2x1ZzogJ2hhbmQtdG9vbHMnIH0sXG4gICAgICAgICAgICB7IGlkOiA0LCBuYW1lOiAnUGx1bWJpbmcnLCBjYXRlZ29yeVNsdWc6ICdwbHVtYmluZycgfSxcbiAgICAgICAgXSwgW10pLFxuICAgICAgICAodGFiKSA9PiBzaG9wQXBpLmdldFBvcHVsYXJQcm9kdWN0cyh7IGxpbWl0OiAxMiwgY2F0ZWdvcnk6IHRhYi5jYXRlZ29yeVNsdWcgfSksXG4gICAgICAgIGluaXREYXRhPy5mZWF0dXJlZFByb2R1Y3RzLFxuICAgICk7XG5cbiAgICAvKipcbiAgICAgKiBCZXN0c2VsbGVycy5cbiAgICAgKi9cbiAgICBjb25zdCBiZXN0c2VsbGVycyA9IHVzZURlZmVycmVkRGF0YSgoKSA9PiAoXG4gICAgICAgIHNob3BBcGkuZ2V0UG9wdWxhclByb2R1Y3RzKHsgbGltaXQ6IDcgfSlcbiAgICApLCBbXSwgaW5pdERhdGE/LmJlc3RzZWxsZXJzKTtcblxuICAgIC8qKlxuICAgICAqIExhdGVzdCBwcm9kdWN0cy5cbiAgICAgKi9cbiAgICBjb25zdCBsYXRlc3RQcm9kdWN0cyA9IHVzZVByb2R1Y3RUYWJzKFxuICAgICAgICB1c2VNZW1vKCgpID0+IFtcbiAgICAgICAgICAgIHsgaWQ6IDEsIG5hbWU6ICdBbGwnLCBjYXRlZ29yeVNsdWc6IHVuZGVmaW5lZCB9LFxuICAgICAgICAgICAgeyBpZDogMiwgbmFtZTogJ1Bvd2VyIFRvb2xzJywgY2F0ZWdvcnlTbHVnOiAncG93ZXItdG9vbHMnIH0sXG4gICAgICAgICAgICB7IGlkOiAzLCBuYW1lOiAnSGFuZCBUb29scycsIGNhdGVnb3J5U2x1ZzogJ2hhbmQtdG9vbHMnIH0sXG4gICAgICAgICAgICB7IGlkOiA0LCBuYW1lOiAnUGx1bWJpbmcnLCBjYXRlZ29yeVNsdWc6ICdwbHVtYmluZycgfSxcbiAgICAgICAgXSwgW10pLFxuICAgICAgICAodGFiKSA9PiBzaG9wQXBpLmdldExhdGVzdFByb2R1Y3RzKHsgbGltaXQ6IDgsIGNhdGVnb3J5OiB0YWIuY2F0ZWdvcnlTbHVnIH0pLFxuICAgICAgICBpbml0RGF0YT8ubGF0ZXN0UHJvZHVjdHMsXG4gICAgKTtcblxuICAgIC8qKlxuICAgICAqIFByb2R1Y3QgY29sdW1ucy5cbiAgICAgKi9cbiAgICBjb25zdCBjb2x1bW5zID0gaW5pdERhdGE/LnByb2R1Y3RDb2x1bW5zIHx8IHVzZVByb2R1Y3RDb2x1bW5zKFxuICAgICAgICB1c2VNZW1vKCgpID0+IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1RvcCBSYXRlZCBQcm9kdWN0cycsXG4gICAgICAgICAgICAgICAgc291cmNlOiAoKSA9PiBzaG9wQXBpLmdldFRvcFJhdGVkUHJvZHVjdHMoeyBsaW1pdDogMyB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTcGVjaWFsIE9mZmVycycsXG4gICAgICAgICAgICAgICAgc291cmNlOiAoKSA9PiBzaG9wQXBpLmdldERpc2NvdW50ZWRQcm9kdWN0cyh7IGxpbWl0OiAzIH0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Jlc3RzZWxsZXJzJyxcbiAgICAgICAgICAgICAgICBzb3VyY2U6ICgpID0+IHNob3BBcGkuZ2V0UG9wdWxhclByb2R1Y3RzKHsgbGltaXQ6IDMgfSksXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLCBbXSksXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT57YEhvbWUg4oCUICR7dGhlbWUubmFtZX1gfTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IDxCbG9ja1NsaWRlU2hvdyAvPiwgW10pfVxuXG4gICAgICAgICAgICB7Lyoge3VzZU1lbW8oKCkgPT4gPEJsb2NrRmVhdHVyZXMgbGF5b3V0PVwiYm94ZWRcIiAvPiwgW10pfSAqL31cblxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gPEJsb2NrQnJhbmRzIC8+LCBbXSl9XG5cbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IChcbiAgICAgICAgICAgICAgICA8QmxvY2tDYXRlZ29yaWVzXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU3VwcGxpZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiY29tcGFjdFwiXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM9e2RhdGFTaG9wQmxvY2tDYXRlZ29yaWVzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApLCBbXSl9XG5cbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IChcbiAgICAgICAgICAgICAgICA8QmxvY2tQcm9kdWN0c0Nhcm91c2VsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRmVhdHVyZWQgUHJvZHVjdHNcIlxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJncmlkLTVcIlxuICAgICAgICAgICAgICAgICAgICByb3dzPXsyfVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cz17ZmVhdHVyZWRQcm9kdWN0cy5kYXRhfVxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtmZWF0dXJlZFByb2R1Y3RzLmlzTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzPXtmZWF0dXJlZFByb2R1Y3RzLnRhYnN9XG4gICAgICAgICAgICAgICAgICAgIG9uR3JvdXBDbGljaz17ZmVhdHVyZWRQcm9kdWN0cy5oYW5kbGVUYWJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICksIFtmZWF0dXJlZFByb2R1Y3RzXSl9XG5cbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IDxCbG9ja0Jhbm5lciAvPiwgW10pfVxuXG4gICAgICAgICAgICB7dXNlTWVtbygoKSA9PiAoXG4gICAgICAgICAgICAgICAgPEJsb2NrUHJvZHVjdHNcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJCZXN0c2VsbGVyc1wiXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImxhcmdlLWxhc3RcIlxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlZFByb2R1Y3Q9e2Jlc3RzZWxsZXJzLmRhdGFbMF19XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzPXtiZXN0c2VsbGVycy5kYXRhLnNsaWNlKDEsIDcpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApLCBbYmVzdHNlbGxlcnMuZGF0YV0pfVxuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gKFxuICAgICAgICAgICAgICAgIDxCbG9ja1Byb2R1Y3RzQ2Fyb3VzZWxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOZXcgQXJyaXZhbHNcIlxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJncmlkLTVcIlxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cz17bGF0ZXN0UHJvZHVjdHMuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bGF0ZXN0UHJvZHVjdHMuaXNMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBncm91cHM9e2xhdGVzdFByb2R1Y3RzLnRhYnN9XG4gICAgICAgICAgICAgICAgICAgIG9uR3JvdXBDbGljaz17bGF0ZXN0UHJvZHVjdHMuaGFuZGxlVGFiQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApLCBbbGF0ZXN0UHJvZHVjdHNdKX1cblxuICAgICAgICAgICAge3VzZU1lbW8oKCkgPT4gPEJsb2NrUG9zdHMgdGl0bGU9XCJMYXRlc3QgTmV3c1wiIGxheW91dD1cImdyaWQtbmxcIiBwb3N0cz17ZGF0YUJsb2dQb3N0c30gLz4sIFtdKX1cblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIHt1c2VNZW1vKCgpID0+IDxCbG9ja1Byb2R1Y3RDb2x1bW5zIGNvbHVtbnM9e2NvbHVtbnN9IC8+LCBbY29sdW1uc10pfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlVHdvO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gdGhpcmQtcGFydHlcbmltcG9ydCBMaW5rLCB7IExpbmtQcm9wcyB9IGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBJTGlua1Byb3BzIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9tZW51cy9saW5rLXByb3BzJztcblxuZXhwb3J0IHR5cGUgTGlua1R5cGUgPSBzdHJpbmcgfCBJTGlua1Byb3BzO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFwcExpbmtQcm9wcyBleHRlbmRzIFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50Pj4ge1xuICAgIGhyZWY/OiBMaW5rVHlwZTtcbiAgICB0YXJnZXQ/OiBSZWFjdC5BbmNob3JIVE1MQXR0cmlidXRlczxIVE1MQW5jaG9yRWxlbWVudD5bJ3RhcmdldCddO1xufVxuXG5mdW5jdGlvbiBpc0xpbmsoaHJlZjogTGlua1R5cGUgfCB1bmRlZmluZWQpOiBocmVmIGlzIExpbmtUeXBlIHtcbiAgICByZXR1cm4gaHJlZiAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTaW1wbGVMaW5rKGhyZWY6IExpbmtUeXBlIHwgdW5kZWZpbmVkKTogaHJlZiBpcyBzdHJpbmcge1xuICAgIHJldHVybiBocmVmICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnO1xufVxuZnVuY3Rpb24gaXNFeHRlcm5hbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gL14oaHR0cHM/Oik/XFwvXFwvLy50ZXN0KGhyZWYpO1xufVxuXG5mdW5jdGlvbiBBcHBMaW5rKHByb3BzOiBBcHBMaW5rUHJvcHMpIHtcbiAgICBjb25zdCB7IGhyZWYsIGNoaWxkcmVuLCAuLi5hbmNob3JQcm9wcyB9ID0gcHJvcHM7XG5cbiAgICBsZXQgbGluaztcblxuICAgIGlmICghaXNMaW5rKGhyZWYpIHx8IChpc1NpbXBsZUxpbmsoaHJlZikgJiYgaXNFeHRlcm5hbChocmVmKSkpIHtcbiAgICAgICAgbGluayA9IDxhIGhyZWY9e2hyZWZ9IHsuLi5hbmNob3JQcm9wc30+e2NoaWxkcmVufTwvYT47XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbGlua1Byb3BzOiBMaW5rUHJvcHMgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyB7IGhyZWYgfSA6IGhyZWY7XG5cbiAgICAgICAgbGluayA9IChcbiAgICAgICAgICAgIDxMaW5rIHsuLi5saW5rUHJvcHN9PlxuICAgICAgICAgICAgICAgIDxhIHsuLi5hbmNob3JQcm9wc30+e2NoaWxkcmVufTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGluaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwTGluaztcbiIsIi8vIHJlYWN0XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIEFjdGlvbkZuID0gKCkgPT4gUHJvbWlzZTxhbnk+O1xuXG50eXBlIFJlbmRlckZuUHJvcHMgPSB7XG4gICAgcnVuOiAoKSA9PiB2b2lkO1xuICAgIGxvYWRpbmc6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBSZW5kZXJGbiA9IChhcmdzOiBSZW5kZXJGblByb3BzKSA9PiBSZWFjdC5SZWFjdEVsZW1lbnQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXN5bmNBY3Rpb25Qcm9wcyB7XG4gICAgYWN0aW9uOiBBY3Rpb25GbjtcbiAgICByZW5kZXI6IFJlbmRlckZuO1xufVxuXG5mdW5jdGlvbiBBc3luY0FjdGlvbihwcm9wczogQXN5bmNBY3Rpb25Qcm9wcykge1xuICAgIGNvbnN0IHsgYWN0aW9uLCByZW5kZXIgfSA9IHByb3BzO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBjYW5jZWxlZFJlZiA9IHVzZVJlZihmYWxzZSk7XG5cbiAgICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChsb2FkaW5nIHx8ICFhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgYWN0aW9uKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsZWRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4ge1xuICAgICAgICBjYW5jZWxlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9LCBbY2FuY2VsZWRSZWZdKTtcblxuICAgIGlmIChyZW5kZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlbmRlcih7IHJ1biwgbG9hZGluZyB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXN5bmNBY3Rpb247XG4iLCIvLyByZWFjdFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gdGhpcmQtcGFydHlcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vLyBhcHBsaWNhdGlvblxuaW1wb3J0IEFycm93Um91bmRlZExlZnQ3eDExU3ZnIGZyb20gJy4uLy4uL3N2Zy9hcnJvdy1yb3VuZGVkLWxlZnQtN3gxMS5zdmcnO1xuaW1wb3J0IEFycm93Um91bmRlZFJpZ2h0N3gxMVN2ZyBmcm9tICcuLi8uLi9zdmcvYXJyb3ctcm91bmRlZC1yaWdodC03eDExLnN2Zyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tIZWFkZXJHcm91cCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGN1cnJlbnQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmxvY2tIZWFkZXJQcm9wczxUIGV4dGVuZHMgQmxvY2tIZWFkZXJHcm91cD4ge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgYXJyb3dzPzogYm9vbGVhbjtcbiAgICBncm91cHM/OiBUW107XG4gICAgb25OZXh0PzogKCkgPT4gdm9pZDtcbiAgICBvblByZXY/OiAoKSA9PiB2b2lkO1xuICAgIG9uR3JvdXBDbGljaz86IChncm91cDogVCkgPT4gdm9pZDtcbn1cblxuZnVuY3Rpb24gQmxvY2tIZWFkZXI8VCBleHRlbmRzIEJsb2NrSGVhZGVyR3JvdXA+KHByb3BzOiBCbG9ja0hlYWRlclByb3BzPFQ+KSB7XG4gICAgY29uc3Qge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgYXJyb3dzLFxuICAgICAgICBncm91cHMgPSBbXSxcbiAgICAgICAgb25QcmV2LFxuICAgICAgICBvbk5leHQsXG4gICAgICAgIG9uR3JvdXBDbGljayA9ICgpID0+IHt9LFxuICAgIH0gPSBwcm9wcztcblxuICAgIGxldCBncm91cHNMaXN0O1xuXG4gICAgaWYgKGdyb3Vwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGdyb3Vwc0xpc3QgPSBncm91cHMubWFwKChncm91cCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBjbGFzc05hbWVzKCdibG9jay1oZWFkZXJfX2dyb3VwJywge1xuICAgICAgICAgICAgICAgICdibG9jay1oZWFkZXJfX2dyb3VwLS1hY3RpdmUnOiBncm91cC5jdXJyZW50LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2NsYXNzZXN9IG9uQ2xpY2s9eygpID0+IG9uR3JvdXBDbGljayhncm91cCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2dyb3VwLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBncm91cHNMaXN0ID0gKFxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJsb2NrLWhlYWRlcl9fZ3JvdXBzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICB7Z3JvdXBzTGlzdH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJibG9jay1oZWFkZXJfX3RpdGxlXCI+e3RpdGxlfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWhlYWRlcl9fZGl2aWRlclwiIC8+XG4gICAgICAgICAgICB7Z3JvdXBzTGlzdH1cbiAgICAgICAgICAgIHthcnJvd3MgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2staGVhZGVyX19hcnJvd3MtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJsb2NrLWhlYWRlcl9fYXJyb3cgYmxvY2staGVhZGVyX19hcnJvdy0tbGVmdFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvblByZXZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93Um91bmRlZExlZnQ3eDExU3ZnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJsb2NrLWhlYWRlcl9fYXJyb3cgYmxvY2staGVhZGVyX19hcnJvdy0tcmlnaHRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25OZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcnJvd1JvdW5kZWRSaWdodDd4MTFTdmcgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja0hlYWRlcjtcbiIsIi8vIHJlYWN0XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBhcHBsaWNhdGlvblxuaW1wb3J0IHsgSUN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9jdXJyZW5jeSc7XG5pbXBvcnQgeyB1c2VDdXJyZW5jeSB9IGZyb20gJy4uLy4uL3N0b3JlL2N1cnJlbmN5L2N1cnJlbmN5SG9va3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1cnJlbmN5Rm9ybWF0UHJvcHMge1xuICAgIHZhbHVlOiBudW1iZXI7XG4gICAgY3VycmVuY3k/OiBJQ3VycmVuY3k7XG59XG5cbmZ1bmN0aW9uIEN1cnJlbmN5Rm9ybWF0KHByb3BzOiBDdXJyZW5jeUZvcm1hdFByb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgY3VycmVuY3kgfSA9IHByb3BzO1xuICAgIGNvbnN0IGN1cnJlbnRDdXJyZW5jeSA9IHVzZUN1cnJlbmN5KCk7XG4gICAgY29uc3QgeyBzeW1ib2wgfSA9IGN1cnJlbmN5IHx8IGN1cnJlbnRDdXJyZW5jeTtcblxuICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+e2Ake3N5bWJvbH0ke3ZhbHVlLnRvRml4ZWQoMil9YH08L1JlYWN0LkZyYWdtZW50Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVuY3lGb3JtYXQ7XG4iLCIvLyByZWFjdFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gdGhpcmQtcGFydHlcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vLyBhcHBsaWNhdGlvblxuaW1wb3J0IEFwcExpbmsgZnJvbSAnLi9BcHBMaW5rJztcbmltcG9ydCB1cmwgZnJvbSAnLi4vLi4vc2VydmljZXMvdXJsJztcbmltcG9ydCB7IElQb3N0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wb3N0JztcblxuZXhwb3J0IHR5cGUgUG9zdENhcmRMYXlvdXQgPSAnZ3JpZC1ubCcgfCAnZ3JpZC1sZycgfCAnbGlzdC1ubCcgfCAnbGlzdC1zbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdENhcmRQcm9wcyB7XG4gICAgcG9zdDogSVBvc3Q7XG4gICAgbGF5b3V0PzogUG9zdENhcmRMYXlvdXQ7XG59XG5cbmZ1bmN0aW9uIFBvc3RDYXJkKHByb3BzOiBQb3N0Q2FyZFByb3BzKSB7XG4gICAgY29uc3QgeyBwb3N0LCBsYXlvdXQgfSA9IHByb3BzO1xuICAgIGNvbnN0IGNhcmRDbGFzc2VzID0gY2xhc3NOYW1lcyhcbiAgICAgICAgJ3Bvc3QtY2FyZCcsXG4gICAgICAgIHtcbiAgICAgICAgICAgICdwb3N0LWNhcmQtLWxheW91dC0tZ3JpZCc6IGxheW91dCAmJiBbJ2dyaWQtbmwnLCAnZ3JpZC1sZyddLmluY2x1ZGVzKGxheW91dCksXG4gICAgICAgICAgICAncG9zdC1jYXJkLS1sYXlvdXQtLWxpc3QnOiBsYXlvdXQgJiYgWydsaXN0LW5sJywgJ2xpc3Qtc20nXS5pbmNsdWRlcyhsYXlvdXQpLFxuICAgICAgICAgICAgJ3Bvc3QtY2FyZC0tc2l6ZS0tbmwnOiBsYXlvdXQgJiYgWydncmlkLW5sJywgJ2xpc3QtbmwnXS5pbmNsdWRlcyhsYXlvdXQpLFxuICAgICAgICAgICAgJ3Bvc3QtY2FyZC0tc2l6ZS0tbGcnOiBsYXlvdXQgPT09ICdncmlkLWxnJyxcbiAgICAgICAgICAgICdwb3N0LWNhcmQtLXNpemUtLXNtJzogbGF5b3V0ID09PSAnbGlzdC1zbScsXG4gICAgICAgIH0sXG4gICAgKTtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gcG9zdC5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgICAgIDxBcHBMaW5rIGtleT17aW5kZXh9IGhyZWY9e3VybC5ibG9nQ2F0ZWdvcnkoKX0+e2NhdGVnb3J5fTwvQXBwTGluaz5cbiAgICApKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkQ2xhc3Nlc30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY2FyZF9faW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8QXBwTGluayBocmVmPXt1cmwuYmxvZ1Bvc3QoKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDwvQXBwTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNhcmRfX2luZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY2FyZF9fY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNhcmRfX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEFwcExpbmsgaHJlZj17dXJsLmJsb2dQb3N0KCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvQXBwTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY2FyZF9fZGF0ZVwiPntwb3N0LmRhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNhcmRfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgSW4gb25lIGdlbmVyYWwgc2Vuc2UsIHBoaWxvc29waHkgaXMgYXNzb2NpYXRlZCB3aXRoIHdpc2RvbSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZWxsZWN0dWFsIGN1bHR1cmUgYW5kIGEgc2VhcmNoIGZvciBrbm93bGVkZ2UuXG4gICAgICAgICAgICAgICAgICAgIEluIHRoYXQgc2Vuc2UsIGFsbCBjdWx0dXJlcy4uLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jYXJkX19yZWFkLW1vcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEFwcExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxuICAgICAgICAgICAgICAgICAgICA8L0FwcExpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XG4iLCIvLyByZWFjdFxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gdGhpcmQtcGFydHlcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vLyBhcHBsaWNhdGlvblxuaW1wb3J0IEFwcExpbmsgZnJvbSAnLi9BcHBMaW5rJztcbmltcG9ydCBBc3luY0FjdGlvbiBmcm9tICcuL0FzeW5jQWN0aW9uJztcbmltcG9ydCBDb21wYXJlMTZTdmcgZnJvbSAnLi4vLi4vc3ZnL2NvbXBhcmUtMTYuc3ZnJztcbmltcG9ydCBDdXJyZW5jeUZvcm1hdCBmcm9tICcuL0N1cnJlbmN5Rm9ybWF0JztcbmltcG9ydCBRdWlja3ZpZXcxNlN2ZyBmcm9tICcuLi8uLi9zdmcvcXVpY2t2aWV3LTE2LnN2Zyc7XG5pbXBvcnQgUmF0aW5nIGZyb20gJy4vUmF0aW5nJztcbmltcG9ydCB1cmwgZnJvbSAnLi4vLi4vc2VydmljZXMvdXJsJztcbmltcG9ydCBXaXNobGlzdDE2U3ZnIGZyb20gJy4uLy4uL3N2Zy93aXNobGlzdC0xNi5zdmcnO1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Byb2R1Y3QnO1xuaW1wb3J0IHsgdXNlQ29tcGFyZUFkZEl0ZW0gfSBmcm9tICcuLi8uLi9zdG9yZS9jb21wYXJlL2NvbXBhcmVIb29rcyc7XG5pbXBvcnQgeyB1c2VRdWlja3ZpZXdPcGVuIH0gZnJvbSAnLi4vLi4vc3RvcmUvcXVpY2t2aWV3L3F1aWNrdmlld0hvb2tzJztcbmltcG9ydCB7IHVzZVdpc2hsaXN0QWRkSXRlbSB9IGZyb20gJy4uLy4uL3N0b3JlL3dpc2hsaXN0L3dpc2hsaXN0SG9va3MnO1xuaW1wb3J0IHsgdXNlQ2FydEFkZEl0ZW0gfSBmcm9tICcuLi8uLi9zdG9yZS9jYXJ0L2NhcnRIb29rcyc7XG5cbmV4cG9ydCB0eXBlIFByb2R1Y3RDYXJkTGF5b3V0ID0gJ2dyaWQtc20nIHwgJ2dyaWQtbmwnIHwgJ2dyaWQtbGcnIHwgJ2xpc3QnIHwgJ2hvcml6b250YWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RDYXJkUHJvcHMge1xuICAgIHByb2R1Y3Q6IElQcm9kdWN0O1xuICAgIGxheW91dD86IFByb2R1Y3RDYXJkTGF5b3V0O1xufVxuXG5mdW5jdGlvbiBQcm9kdWN0Q2FyZChwcm9wczogUHJvZHVjdENhcmRQcm9wcykge1xuICAgIGNvbnN0IHsgcHJvZHVjdCwgbGF5b3V0IH0gPSBwcm9wcztcbiAgICBjb25zdCBjb250YWluZXJDbGFzc2VzID0gY2xhc3NOYW1lcygncHJvZHVjdC1jYXJkJywge1xuICAgICAgICAncHJvZHVjdC1jYXJkLS1sYXlvdXQtLWdyaWQgcHJvZHVjdC1jYXJkLS1zaXplLS1zbSc6IGxheW91dCA9PT0gJ2dyaWQtc20nLFxuICAgICAgICAncHJvZHVjdC1jYXJkLS1sYXlvdXQtLWdyaWQgcHJvZHVjdC1jYXJkLS1zaXplLS1ubCc6IGxheW91dCA9PT0gJ2dyaWQtbmwnLFxuICAgICAgICAncHJvZHVjdC1jYXJkLS1sYXlvdXQtLWdyaWQgcHJvZHVjdC1jYXJkLS1zaXplLS1sZyc6IGxheW91dCA9PT0gJ2dyaWQtbGcnLFxuICAgICAgICAncHJvZHVjdC1jYXJkLS1sYXlvdXQtLWxpc3QnOiBsYXlvdXQgPT09ICdsaXN0JyxcbiAgICAgICAgJ3Byb2R1Y3QtY2FyZC0tbGF5b3V0LS1ob3Jpem9udGFsJzogbGF5b3V0ID09PSAnaG9yaXpvbnRhbCcsXG4gICAgfSk7XG4gICAgY29uc3QgY2FydEFkZEl0ZW0gPSB1c2VDYXJ0QWRkSXRlbSgpO1xuICAgIGNvbnN0IHdpc2hsaXN0QWRkSXRlbSA9IHVzZVdpc2hsaXN0QWRkSXRlbSgpO1xuICAgIGNvbnN0IGNvbXBhcmVBZGRJdGVtID0gdXNlQ29tcGFyZUFkZEl0ZW0oKTtcbiAgICBjb25zdCBxdWlja3ZpZXdPcGVuID0gdXNlUXVpY2t2aWV3T3BlbigpO1xuXG4gICAgY29uc3QgYmFkZ2VzID0gW107XG4gICAgbGV0IGltYWdlO1xuICAgIGxldCBwcmljZTtcbiAgICBsZXQgZmVhdHVyZXM7XG5cbiAgICBpZiAocHJvZHVjdC5iYWRnZXMuaW5jbHVkZXMoJ3NhbGUnKSkge1xuICAgICAgICBiYWRnZXMucHVzaCg8ZGl2IGtleT1cInNhbGVcIiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRfX2JhZGdlIHByb2R1Y3QtY2FyZF9fYmFkZ2UtLXNhbGVcIj5TYWxlPC9kaXY+KTtcbiAgICB9XG4gICAgaWYgKHByb2R1Y3QuYmFkZ2VzLmluY2x1ZGVzKCdob3QnKSkge1xuICAgICAgICBiYWRnZXMucHVzaCg8ZGl2IGtleT1cImhvdFwiIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZF9fYmFkZ2UgcHJvZHVjdC1jYXJkX19iYWRnZS0taG90XCI+SG90PC9kaXY+KTtcbiAgICB9XG4gICAgaWYgKHByb2R1Y3QuYmFkZ2VzLmluY2x1ZGVzKCduZXcnKSkge1xuICAgICAgICBiYWRnZXMucHVzaCg8ZGl2IGtleT1cIm5ld1wiIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZF9fYmFkZ2UgcHJvZHVjdC1jYXJkX19iYWRnZS0tbmV3XCI+TmV3PC9kaXY+KTtcbiAgICB9XG5cbiAgICBpZiAocHJvZHVjdC5pbWFnZXMgJiYgcHJvZHVjdC5pbWFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBpbWFnZSA9IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkX19pbWFnZSBwcm9kdWN0LWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPEFwcExpbmsgaHJlZj17dXJsLnByb2R1Y3QocHJvZHVjdCl9IGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlX19pbWdcIiBzcmM9e3Byb2R1Y3QuaW1hZ2VzWzBdfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDwvQXBwTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChwcm9kdWN0LmNvbXBhcmVBdFByaWNlKSB7XG4gICAgICAgIHByaWNlID0gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRfX3ByaWNlc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZF9fbmV3LXByaWNlXCI+PEN1cnJlbmN5Rm9ybWF0IHZhbHVlPXtwcm9kdWN0LnByaWNlfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZF9fb2xkLXByaWNlXCI+PEN1cnJlbmN5Rm9ybWF0IHZhbHVlPXtwcm9kdWN0LmNvbXBhcmVBdFByaWNlfSAvPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByaWNlID0gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRfX3ByaWNlc1wiPlxuICAgICAgICAgICAgICAgIDxDdXJyZW5jeUZvcm1hdCB2YWx1ZT17cHJvZHVjdC5wcmljZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChwcm9kdWN0LmF0dHJpYnV0ZXMgJiYgcHJvZHVjdC5hdHRyaWJ1dGVzLmxlbmd0aCkge1xuICAgICAgICBmZWF0dXJlcyA9IChcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRfX2ZlYXR1cmVzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5hdHRyaWJ1dGVzLmZpbHRlcigoeCkgPT4geC5mZWF0dXJlZCkubWFwKChhdHRyaWJ1dGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57YCR7YXR0cmlidXRlLm5hbWV9OiAke2F0dHJpYnV0ZS52YWx1ZXMubWFwKCh4KSA9PiB4Lm5hbWUpLmpvaW4oJywgJyl9YH08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3Nlc30+XG4gICAgICAgICAgICA8QXN5bmNBY3Rpb25cbiAgICAgICAgICAgICAgICBhY3Rpb249eygpID0+IHF1aWNrdmlld09wZW4ocHJvZHVjdC5zbHVnKX1cbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IHJ1biwgbG9hZGluZyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdwcm9kdWN0LWNhcmRfX3F1aWNrdmlldycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvZHVjdC1jYXJkX19xdWlja3ZpZXctLXByZWxvYWQnOiBsb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxRdWlja3ZpZXcxNlN2ZyAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtiYWRnZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRfX2JhZGdlcy1saXN0XCI+e2JhZGdlc308L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aW1hZ2V9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZF9faW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkX19uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9e3VybC5wcm9kdWN0KHByb2R1Y3QpfT57cHJvZHVjdC5uYW1lfTwvQXBwTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZF9fcmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSYXRpbmcgdmFsdWU9e3Byb2R1Y3QucmF0aW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwcm9kdWN0LWNhcmRfX3JhdGluZy1sZWdlbmRcIj57YCR7cHJvZHVjdC5yZXZpZXdzfSBSZXZpZXdzYH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7ZmVhdHVyZXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkX19hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmRfX2F2YWlsYWJpbGl0eVwiPlxuICAgICAgICAgICAgICAgICAgICBBdmFpbGFiaWxpdHk6XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiPkluIFN0b2NrPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtwcmljZX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZF9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8QXN5bmNBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17KCkgPT4gY2FydEFkZEl0ZW0ocHJvZHVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IHJ1biwgbG9hZGluZyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3J1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYnRuIGJ0bi1wcmltYXJ5IHByb2R1Y3QtY2FyZF9fYWRkdG9jYXJ0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdidG4tbG9hZGluZyc6IGxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIFRvIENhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdidG4gYnRuLXNlY29uZGFyeSBwcm9kdWN0LWNhcmRfX2FkZHRvY2FydCBwcm9kdWN0LWNhcmRfX2FkZHRvY2FydC0tbGlzdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYnRuLWxvYWRpbmcnOiBsb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBUbyBDYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QXN5bmNBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17KCkgPT4gd2lzaGxpc3RBZGRJdGVtKHByb2R1Y3QpfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBydW4sIGxvYWRpbmcgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3J1bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdidG4gYnRuLWxpZ2h0IGJ0bi1zdmctaWNvbiBidG4tc3ZnLWljb24tLWZha2Utc3ZnIHByb2R1Y3QtY2FyZF9fd2lzaGxpc3QnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYnRuLWxvYWRpbmcnOiBsb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaXNobGlzdDE2U3ZnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QXN5bmNBY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17KCkgPT4gY29tcGFyZUFkZEl0ZW0ocHJvZHVjdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IHJ1biwgbG9hZGluZyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cnVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2J0biBidG4tbGlnaHQgYnRuLXN2Zy1pY29uIGJ0bi1zdmctaWNvbi0tZmFrZS1zdmcgcHJvZHVjdC1jYXJkX19jb21wYXJlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2J0bi1sb2FkaW5nJzogbG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tcGFyZTE2U3ZnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdENhcmQpO1xuIiwiLy8gcmVhY3RcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIHRoaXJkLXBhcnR5XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuLy8gYXBwbGljYXRpb25cbmltcG9ydCBSYXRpbmcxM3gxMlN2ZyBmcm9tICcuLi8uLi9zdmcvcmF0aW5nLTEzeDEyLnN2Zyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmF0aW5nUHJvcHMge1xuICAgIHZhbHVlPzogbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBSYXRpbmcocHJvcHM6IFJhdGluZ1Byb3BzKSB7XG4gICAgY29uc3QgeyB2YWx1ZSA9IDAgfSA9IHByb3BzO1xuXG4gICAgY29uc3Qgc3RhcnMgPSBbMSwgMiwgMywgNCwgNV0ubWFwKChyYXRpbmcpID0+IHtcbiAgICAgICAgY29uc3Qgcm9vdENsYXNzZXMgPSBjbGFzc05hbWVzKCdyYXRpbmdfX3N0YXInLCB7XG4gICAgICAgICAgICAncmF0aW5nX19zdGFyLS1hY3RpdmUnOiB2YWx1ZSA+PSByYXRpbmcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiA8UmF0aW5nMTN4MTJTdmcga2V5PXtyYXRpbmd9IGNsYXNzTmFtZT17cm9vdENsYXNzZXN9IC8+O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nX19ib2R5XCI+XG4gICAgICAgICAgICAgICAge3N0YXJzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZztcbiIsIi8vIHJlYWN0XG5pbXBvcnQgUmVhY3QsIHtcbiAgICB1c2VDYWxsYmFjayxcbiAgICB1c2VFZmZlY3QsXG4gICAgdXNlUmVmLFxuICAgIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCc7XG5cbi8vIHRoaXJkLXBhcnR5XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBTbGljaywgeyBTZXR0aW5ncyB9IGZyb20gJ3JlYWN0LXNsaWNrJztcblxuLy8gYXBwbGljYXRpb25cbmltcG9ydCB7IHVzZURpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3N0b3JlL2xvY2FsZS9sb2NhbGVIb29rcyc7XG5cbmV4cG9ydCB0eXBlIFNsaWNrUHJvcHMgPSBTZXR0aW5ncztcblxuZXhwb3J0IHR5cGUgU3Ryb3lrYVNsaWNrUHJvcHMgPSBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxTbGlja1Byb3BzPjtcblxuZXhwb3J0IGludGVyZmFjZSBTdHJveWthU2xpY2tJbm5lclByb3BzIGV4dGVuZHMgU2xpY2tQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgICBmb3J3YXJkUmVmOiBSZWFjdC5SZWZDYWxsYmFjazxTbGljayB8IG51bGw+IHwgUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxTbGljayB8IG51bGw+IHwgbnVsbDtcbn1cblxuZnVuY3Rpb24gU3Ryb3lrYVNsaWNrSW5uZXIocHJvcHM6IFN0cm95a2FTbGlja0lubmVyUHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBmb3J3YXJkUmVmLFxuICAgICAgICBiZWZvcmVDaGFuZ2UsXG4gICAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gcHJvcHM7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gdXNlRGlyZWN0aW9uKCk7XG4gICAgY29uc3Qgc2xpY2tSZWYgPSB1c2VSZWY8U2xpY2sgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBvcmlnaW5hbFNsaWNrTmV4dFJlZiA9IHVzZVJlZjwoKSA9PiB2b2lkPigoKSA9PiB7fSk7XG4gICAgY29uc3Qgb3JpZ2luYWxTbGlja1ByZXZSZWYgPSB1c2VSZWY8KCkgPT4gdm9pZD4oKCkgPT4ge30pO1xuICAgIGNvbnN0IHNsaWNrTmV4dFJlZiA9IHVzZVJlZjwoKSA9PiB2b2lkPigoKSA9PiB7fSk7XG4gICAgY29uc3Qgc2xpY2tQcmV2UmVmID0gdXNlUmVmPCgpID0+IHZvaWQ+KCgpID0+IHt9KTtcblxuICAgIGNvbnN0IGdldFNsaWRlc0NvdW50ID0gKCkgPT4gKFxuICAgICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKS5sZW5ndGhcbiAgICApO1xuXG4gICAgY29uc3QgZ2V0U2xpZGVzVG9TaG93ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHJlc3BvbnNpdmUsIHNsaWRlc1RvU2hvdyB9ID0gcHJvcHM7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IHNsaWRlc1RvU2hvdyB8fCAxO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIgJiYgcmVzcG9uc2l2ZSkge1xuICAgICAgICAgICAgcmVzcG9uc2l2ZS5mb3JFYWNoKChvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2V0dGluZ3MgPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgeyBtYXRjaGVzIH0gPSBtYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAke29wdGlvbnMuYnJlYWtwb2ludH1weClgKTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIG9wdGlvbnMuc2V0dGluZ3Muc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9wdGlvbnMuc2V0dGluZ3Muc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLy8gcmVhY3Qtc2xpY2sgaGFzIGEgYnVnIGR1ZSB0byB3aGljaCBpdCBpcyBpbml0aWFsaXplZFxuICAgIC8vIHdpdGggdGhlIGluY29ycmVjdCBwb3NpdGlvbiBpZiB0aGUgUlRMIHByb3BlcnR5IGlzIHRydWVcbiAgICAvLyB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGNvcnJlY3QgdmFsdWVzXG4gICAgY29uc3QgZ2V0U3RhcnRQb3NpdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHsgaW5maW5pdGUgfSA9IHByb3BzO1xuXG4gICAgICAgIGluZmluaXRlID0gaW5maW5pdGUgPT09IHRydWUgfHwgaW5maW5pdGUgPT09IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbHRyJykge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzbGlkZXNUb1Nob3cgPSBnZXRTbGlkZXNUb1Nob3coKTtcbiAgICAgICAgY29uc3Qgc2xpZGVzQ291bnQgPSBnZXRTbGlkZXNDb3VudCgpO1xuXG4gICAgICAgIGlmICghaW5maW5pdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCBzbGlkZXNDb3VudCAtIHNsaWRlc1RvU2hvdyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKE1hdGguY2VpbChzbGlkZXNDb3VudCAvIHNsaWRlc1RvU2hvdykgLSAxKSAqIHNsaWRlc1RvU2hvdztcbiAgICB9O1xuXG4gICAgLy8gcmV0dXJucyBpbmRleGVzIG9mIGFjdGl2ZSBzbGlkZXMgYnkgY3VycmVudEluZGV4XG4gICAgY29uc3QgZ2V0QWN0aXZlU2xpZGVzID0gKGN1cnJlbnRJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHNsaWRlc1RvU2hvdyA9IGdldFNsaWRlc1RvU2hvdygpO1xuICAgICAgICBjb25zdCBhY3RpdmVTbGlkZXMgPSBbXTtcbiAgICAgICAgY29uc3Qgc2xpZGVzQ291bnQgPSBnZXRTbGlkZXNDb3VudCgpO1xuXG4gICAgICAgIGNvbnN0IGZpcnN0U2xpZGUgPSBNYXRoLm1heChcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICBzbGlkZXNDb3VudCAtIHNsaWRlc1RvU2hvdyxcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXgsXG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBsYXN0U2xpZGUgPSBNYXRoLm1pbihcbiAgICAgICAgICAgIHNsaWRlc0NvdW50LFxuICAgICAgICAgICAgZmlyc3RTbGlkZSArIHNsaWRlc1RvU2hvdyxcbiAgICAgICAgKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gZmlyc3RTbGlkZTsgaSA8IGxhc3RTbGlkZTsgaSArPSAxKSB7XG4gICAgICAgICAgICBhY3RpdmVTbGlkZXMucHVzaChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3RpdmVTbGlkZXM7XG4gICAgfTtcblxuICAgIGNvbnN0IFtwcmV2ZW50Q2xpY2ssIHNldFByZXZlbnRDbGlja10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2FjdGl2ZVNsaWRlcywgc2V0QWN0aXZlU2xpZGVzXSA9IHVzZVN0YXRlKGdldEFjdGl2ZVNsaWRlcyhnZXRTdGFydFBvc2l0aW9uKCkpKTtcblxuICAgIGNvbnN0IG9uTW91c2Vkb3duID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgICBjb25zdCBkb3duWCA9IGV2ZW50LnNjcmVlblg7XG4gICAgICAgIGNvbnN0IGRvd25ZID0gZXZlbnQuc2NyZWVuWTtcbiAgICAgICAgbGV0IGNsaWNrUHJldmVudGVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgb25Nb3VzZW1vdmUgPSAobW92ZUV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2xpY2tQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRoYW5rIHlvdSBQeXRoYWdvcmFzLlxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoXG4gICAgICAgICAgICAgICAgKE1hdGguYWJzKGRvd25YIC0gbW92ZUV2ZW50LnNjcmVlblgpICoqIDIpXG4gICAgICAgICAgICAgICAgKyAoTWF0aC5hYnMoZG93blkgLSBtb3ZlRXZlbnQuc2NyZWVuWSkgKiogMiksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAobW92ZUV2ZW50LmNhbmNlbGFibGUgJiYgZGlzdGFuY2UgPiAzKSB7XG4gICAgICAgICAgICAgICAgbW92ZUV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IDE1KSB7XG4gICAgICAgICAgICAgICAgY2xpY2tQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldFByZXZlbnRDbGljayhjbGlja1ByZXZlbnRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9uTW91c2V1cCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNsaWNrUHJldmVudGVkID0gZmFsc2U7XG4gICAgICAgICAgICBzZXRQcmV2ZW50Q2xpY2soY2xpY2tQcmV2ZW50ZWQpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlbW92ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZXVwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlbW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNldXApO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRTbGlja1JlZjogUmVhY3QuUmVmQ2FsbGJhY2s8U2xpY2s+ID0gdXNlQ2FsbGJhY2soKHJlZikgPT4ge1xuICAgICAgICBpZiAoZm9yd2FyZFJlZikge1xuICAgICAgICAgICAgaWYgKCdjdXJyZW50JyBpbiBmb3J3YXJkUmVmKSB7XG4gICAgICAgICAgICAgICAgZm9yd2FyZFJlZi5jdXJyZW50ID0gcmVmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3J3YXJkUmVmKHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVmICYmIHJlZiAhPT0gc2xpY2tSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgLy8gcmVhY3Qtc2xpY2sgZm9yZ290IHRoYXQgaWYgdGhlIFJUTCBwYXJhbWV0ZXIgaXMgdHJ1ZSxcbiAgICAgICAgICAgIC8vIHRoZW4gdGhlIG5leHQgYW5kIHByZXYgbWV0aG9kcyBuZWVkIHRvIGJlIHN3YXBwZWQsIHNvIGxldCdzIGRvIGl0IHlvdXJzZWxmXG4gICAgICAgICAgICBvcmlnaW5hbFNsaWNrTmV4dFJlZi5jdXJyZW50ID0gcmVmLnNsaWNrTmV4dDtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpY2tQcmV2UmVmLmN1cnJlbnQgPSByZWYuc2xpY2tQcmV2O1xuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAgICAgIHJlZi5zbGlja05leHQgPSAoKSA9PiBzbGlja05leHRSZWYuY3VycmVudCAmJiBzbGlja05leHRSZWYuY3VycmVudCgpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgICAgICByZWYuc2xpY2tQcmV2ID0gKCkgPT4gc2xpY2tQcmV2UmVmLmN1cnJlbnQgJiYgc2xpY2tQcmV2UmVmLmN1cnJlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNsaWNrUmVmLmN1cnJlbnQgPSByZWY7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2xpY2tOZXh0UmVmLmN1cnJlbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2xpY2tOZXh0UmVmLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTbGlja05leHRSZWYuY3VycmVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNsaWNrUHJldlJlZi5jdXJyZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNsaWNrTmV4dFJlZi5jdXJyZW50KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2xpY2tQcmV2UmVmLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbZGlyZWN0aW9uXSk7XG5cbiAgICAvLyBJZiB0aGUgc2xpZGVzIGhhdmUgY2hhbmdlZCwgd2UgYWxzbyBuZWVkIHRvIGNoYW5nZSB0aGUgYWN0aXZlIHNsaWRlcy5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0QWN0aXZlU2xpZGVzKGdldEFjdGl2ZVNsaWRlcyhnZXRTdGFydFBvc2l0aW9uKCkpKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIH07XG4gICAgfSwgW2NoaWxkcmVuXSk7XG5cbiAgICAvLyBSZXNldHMgcG9zaXRpb24gd2hlbiBjaGFuZ2luZyBkaXJlY3Rpb24uXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNsaWNrUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHNsaWNrUmVmLmN1cnJlbnQuc2xpY2tHb1RvKGdldFN0YXJ0UG9zaXRpb24oKSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbZGlyZWN0aW9uXSk7XG5cbiAgICBjb25zdCBiZWZvcmVDaGFuZ2VXcmFwcGVyOiBTbGlja1Byb3BzWydiZWZvcmVDaGFuZ2UnXSA9IHVzZUNhbGxiYWNrKChvbGRJbmRleCwgbmV3SW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGJlZm9yZUNoYW5nZSkge1xuICAgICAgICAgICAgYmVmb3JlQ2hhbmdlKG9sZEluZGV4LCBuZXdJbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWFjdC1zbGljayBpbmNvcnJlY3RseSBhZGRzIHRoZSAuc2xpY2stYWN0aXZlIGNsYXNzIHRvIHNsaWRlc1xuICAgICAgICAvLyBpZiB0aGUgUlRMIHBhcmFtZXRlciBpcyB0cnVlIHNvIHdlIHdpbGwgZG8gaXQgb3Vyc2VsdmVzXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0QWN0aXZlU2xpZGVzKGdldEFjdGl2ZVNsaWRlcyhuZXdJbmRleCkpO1xuICAgICAgICB9LCAwKTtcbiAgICB9LCBbYmVmb3JlQ2hhbmdlXSk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcygnc2xpY2stcHJldmVudC1jbGljaycsIHtcbiAgICAgICAgJ3NsaWNrLXByZXZlbnQtY2xpY2stLWFjdGl2ZSc6IHByZXZlbnRDbGljayxcbiAgICB9KTtcblxuICAgIC8vIHdlIG5lZWQgdG8gcmV2ZXJzZSBzbGlkZXMgaWYgZGlyZWN0aW9uIGlzIFJUTFxuICAgIC8vIGJlY2F1c2UgcmVhY3Qtc2xpY2sgZGlzcGxheXMgdGhlbSBpbiB0aGUgd3Jvbmcgb3JkZXJcbiAgICBsZXQgcmV2ZXJzZWRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgcmV2ZXJzZWRDaGlsZHJlbiA9IHJldmVyc2VkQ2hpbGRyZW4uc2xpY2UoMCk7XG4gICAgICAgIHJldmVyc2VkQ2hpbGRyZW4ucmV2ZXJzZSgpO1xuICAgIH1cblxuICAgIHJldmVyc2VkQ2hpbGRyZW4gPSByZXZlcnNlZENoaWxkcmVuLm1hcCgoc2xpZGUsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIHJlYWN0LXNsaWNrIGluY29ycmVjdGx5IGFkZHMgdGhlIC5zbGljay1hY3RpdmUgY2xhc3MgdG8gc2xpZGVzXG4gICAgICAgIC8vIGlmIHRoZSBSVEwgcGFyYW1ldGVyIGlzIHRydWUgc28gd2Ugd2lsbCBkbyBpdCBvdXJzZWx2ZXNcbiAgICAgICAgY29uc3Qgc2xpZGVDbGFzc2VzID0gY2xhc3NOYW1lcyh7ICdjb3JyZWN0LXNsaWNrLWFjdGl2ZSc6IGFjdGl2ZVNsaWRlcy5pbmNsdWRlcyhpbmRleCkgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gZGlyPXtkaXJlY3Rpb259IGNsYXNzTmFtZT17c2xpZGVDbGFzc2VzfT5cbiAgICAgICAgICAgICAgICB7c2xpZGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9uby1zdGF0aWMtZWxlbWVudC1pbnRlcmFjdGlvbnNcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgICAgICAgb25Nb3VzZURvd249e29uTW91c2Vkb3dufVxuICAgICAgICA+XG4gICAgICAgICAgICA8U2xpY2sgey4uLm90aGVyUHJvcHN9IHJ0bD17ZGlyZWN0aW9uID09PSAncnRsJ30gYmVmb3JlQ2hhbmdlPXtiZWZvcmVDaGFuZ2VXcmFwcGVyfSByZWY9e3NldFNsaWNrUmVmfT5cbiAgICAgICAgICAgICAgICB7cmV2ZXJzZWRDaGlsZHJlbn1cbiAgICAgICAgICAgIDwvU2xpY2s+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWY8U2xpY2ssIFN0cm95a2FTbGlja1Byb3BzPihcbiAgICAocHJvcHMsIHJlZikgPT4ge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN0cm95a2FTbGlja0lubmVyIGZvcndhcmRSZWY9e3JlZn0gey4uLnByb3BzfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1N0cm95a2FTbGlja0lubmVyPlxuICAgICAgICApO1xuICAgIH0sXG4pO1xuIiwiaW1wb3J0IHsgSVBvc3QgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3Bvc3QnO1xuXG5jb25zdCBkYXRhQmxvZ1Bvc3RzOiBJUG9zdFtdID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiAnQSBWYXJpZXR5IE9mIE90aGVyIEFjYWRlbWljIEFuZCBOb24tQWNhZGVtaWMgQXBwcm9hY2hlcyBIYXZlIEJlZW4gRXhwbG9yZWQnLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvcG9zdHMvcG9zdC0xLmpwZycsXG4gICAgICAgIGNhdGVnb3JpZXM6IFsnU3BlY2lhbCBPZmZlcnMnXSxcbiAgICAgICAgZGF0ZTogJ09jdG9iZXIgMTksIDIwMTknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgdGl0bGU6ICdMb2dpYyBJcyBUaGUgU3R1ZHkgT2YgUmVhc29uaW5nIEFuZCBBcmd1bWVudCBQYXJ0IDInLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvcG9zdHMvcG9zdC0yLmpwZycsXG4gICAgICAgIGNhdGVnb3JpZXM6IFsnTGF0ZXN0IE5ld3MnXSxcbiAgICAgICAgZGF0ZTogJ1NlcHRlbWJlciA1LCAyMDE5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdGxlOiAnU29tZSBQaGlsb3NvcGhlcnMgU3BlY2lhbGl6ZSBJbiBPbmUgT3IgTW9yZSBIaXN0b3JpY2FsIFBlcmlvZHMnLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvcG9zdHMvcG9zdC0zLmpwZycsXG4gICAgICAgIGNhdGVnb3JpZXM6IFsnTmV3IEFycml2YWxzJ10sXG4gICAgICAgIGRhdGU6ICdBdWd1c3QgMTIsIDIwMTknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgdGl0bGU6ICdQaGlsb3NvcGh5IFRoYXQgQWRkcmVzc2VzIFRvcGljcyBTdWNoIEFzIEdvb2RuZXNzJyxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3Bvc3RzL3Bvc3QtNC5qcGcnLFxuICAgICAgICBjYXRlZ29yaWVzOiBbJ1NwZWNpYWwgT2ZmZXJzJ10sXG4gICAgICAgIGRhdGU6ICdKdWxlIDMwLCAyMDE5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIHRpdGxlOiAnR2VybWFueSBXYXMgVGhlIEZpcnN0IENvdW50cnkgVG8gUHJvZmVzc2lvbmFsaXplIFBoaWxvc29waHknLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvcG9zdHMvcG9zdC01LmpwZycsXG4gICAgICAgIGNhdGVnb3JpZXM6IFsnTmV3IEFycml2YWxzJ10sXG4gICAgICAgIGRhdGU6ICdKdW5lIDEyLCAyMDE5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIHRpdGxlOiAnTG9naWMgSXMgVGhlIFN0dWR5IE9mIFJlYXNvbmluZyBBbmQgQXJndW1lbnQgUGFydCAxJyxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3Bvc3RzL3Bvc3QtNi5qcGcnLFxuICAgICAgICBjYXRlZ29yaWVzOiBbJ1NwZWNpYWwgT2ZmZXJzJ10sXG4gICAgICAgIGRhdGU6ICdNYXkgMjEsIDIwMTknLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNyxcbiAgICAgICAgdGl0bGU6ICdNYW55IElucXVpcmllcyBPdXRzaWRlIE9mIEFjYWRlbWlhIEFyZSBQaGlsb3NvcGhpY2FsIEluIFRoZSBCcm9hZCBTZW5zZScsXG4gICAgICAgIGltYWdlOiAnL2ltYWdlcy9wb3N0cy9wb3N0LTcuanBnJyxcbiAgICAgICAgY2F0ZWdvcmllczogWydTcGVjaWFsIE9mZmVycyddLFxuICAgICAgICBkYXRlOiAnQXByaWwgMywgMjAxOScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICB0aXRsZTogJ0FuIEFkdmFudGFnZSBPZiBEaWdpdGFsIENpcmN1aXRzIFdoZW4gQ29tcGFyZWQgVG8gQW5hbG9nIENpcmN1aXRzJyxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3Bvc3RzL3Bvc3QtOC5qcGcnLFxuICAgICAgICBjYXRlZ29yaWVzOiBbJ0xhdGVzdCBOZXdzJ10sXG4gICAgICAgIGRhdGU6ICdNYXJ0IDI5LCAyMDE5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIHRpdGxlOiAnQSBEaWdpdGFsIENpcmN1aXQgSXMgVHlwaWNhbGx5IENvbnN0cnVjdGVkIEZyb20gU21hbGwgRWxlY3Ryb25pYyBDaXJjdWl0cycsXG4gICAgICAgIGltYWdlOiAnL2ltYWdlcy9wb3N0cy9wb3N0LTkuanBnJyxcbiAgICAgICAgY2F0ZWdvcmllczogWydOZXcgQXJyaXZhbHMnXSxcbiAgICAgICAgZGF0ZTogJ0ZlYnJ1YXJ5IDEwLCAyMDE5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEwLFxuICAgICAgICB0aXRsZTogJ0VuZ2luZWVycyBVc2UgTWFueSBNZXRob2RzIFRvIE1pbmltaXplIExvZ2ljIEZ1bmN0aW9ucycsXG4gICAgICAgIGltYWdlOiAnL2ltYWdlcy9wb3N0cy9wb3N0LTEwLmpwZycsXG4gICAgICAgIGNhdGVnb3JpZXM6IFsnU3BlY2lhbCBPZmZlcnMnXSxcbiAgICAgICAgZGF0ZTogJ0phbnVhcnkgMSwgMjAxOScsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFCbG9nUG9zdHM7XG4iLCJpbXBvcnQgeyBJU2hvcENhdGVnb3J5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jYXRlZ29yeSc7XG5cbmNvbnN0IGRhdGFTaG9wQmxvY2tDYXRlZ29yaWVzOiBJU2hvcENhdGVnb3J5W10gPSBbXG4gICAge1xuICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgIGlkOiAxLFxuICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICBuYW1lOiAnUG93ZXIgVG9vbHMnLFxuICAgICAgICBpdGVtczogNTcyLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yeS0xLmpwZycsXG4gICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NjcmV3ZHJpdmVycycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ01pbGxpbmcgQ3V0dGVycycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NhbmRpbmcgTWFjaGluZXMnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdXcmVuY2hlcycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RyaWxscycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgIG5hbWU6ICdIYW5kIFRvb2xzJyxcbiAgICAgICAgaXRlbXM6IDEzNCxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcnktMi5qcGcnLFxuICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdTY3Jld2RyaXZlcnMnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogOSxcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdIYW1tZXJzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDEwLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NwYW5uZXJzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDExLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0hhbmRzYXdzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDEyLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BhaW50IFRvb2xzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICBpZDogMTMsXG4gICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgIG5hbWU6ICdNYWNoaW5lIFRvb2xzJyxcbiAgICAgICAgaXRlbXM6IDMwMSxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcnktNC5qcGcnLFxuICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMTQsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnTGF0aGVzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDE1LFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ01pbGxpbmcgTWFjaGluZXMnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMTYsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnR3JpbmRpbmcgTWFjaGluZXMnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMTcsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ05DIE1hY2hpbmVzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDE4LFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1NoYXJwZW5pbmcgTWFjaGluZXMnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgIGlkOiAxOSxcbiAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgbmFtZTogJ1Bvd2VyIE1hY2hpbmVyeScsXG4gICAgICAgIGl0ZW1zOiA3OSxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcnktMy5qcGcnLFxuICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMjAsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnR2VuZXJhdG9ycycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiAyMSxcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDb21wcmVzc29ycycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiAyMixcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdXaW5jaGVzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDIzLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BsYXNtYSBDdXR0aW5nJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDI0LFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cmljIE1vdG9ycycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgaWQ6IDI1LFxuICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICBuYW1lOiAnTWVhc3VyZW1lbnQnLFxuICAgICAgICBpdGVtczogMzY2LFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yeS01LmpwZycsXG4gICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiAyNixcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdUYXBlIE1lYXN1cmUnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMjcsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGhlb2RvbGl0ZXMnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMjgsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGhlcm1hbCBJbWFnZXJzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDI5LFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0NhbGlwZXJzJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDMwLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0xldmVscycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgaWQ6IDMxLFxuICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICBuYW1lOiAnQ2xvdGhlcyBhbmQgUFBFJyxcbiAgICAgICAgaXRlbXM6IDgxLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yeS02LmpwZycsXG4gICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Nob3AnLFxuICAgICAgICAgICAgICAgIGlkOiAyNixcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItdG9vbHMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdXaW50ZXIgV29ya3dlYXInLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMjcsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnU3VtbWVyIFdvcmt3ZWFyJyxcbiAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2hvcCcsXG4gICAgICAgICAgICAgICAgaWQ6IDI4LFxuICAgICAgICAgICAgICAgIHNsdWc6ICdwb3dlci10b29scycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0hlbG1ldHMnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMjksXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnQmVsdHMgYW5kIEJhZ3MnLFxuICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgICAgICAgICBpZDogMzAsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnV29yayBTaG9lcycsXG4gICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFTaG9wQmxvY2tDYXRlZ29yaWVzO1xuIiwiaW1wb3J0IHsgSUJyYW5kIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9icmFuZCc7XG5cbmNvbnN0IGRhdGFTaG9wQnJhbmRzOiBJQnJhbmRbXSA9IFtcbiAgICB7XG4gICAgICAgIHNsdWc6ICdkaWFiJyxcbiAgICAgICAgbmFtZTogJ0RpYWInLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvc3VwcGxpZXJzL2RpYWIuanBnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2x1ZzogJ2ZpcnN0JyxcbiAgICAgICAgbmFtZTogJ0ZpcnN0JyxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3N1cHBsaWVycy9maXJzdC5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzbHVnOiAnbm9yZCcsXG4gICAgICAgIG5hbWU6ICdub3JkJyxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3N1cHBsaWVycy9ub3JkLmpwZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNsdWc6ICdzb2x2YXknLFxuICAgICAgICBuYW1lOiAnc29sdmF5JyxcbiAgICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3N1cHBsaWVycy9zb2x2YXkuanBnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2x1ZzogJ3RleG9uaWMnLFxuICAgICAgICBuYW1lOiAndGV4b25pYycsXG4gICAgICAgIGltYWdlOiAnL2ltYWdlcy9zdXBwbGllcnMvdGV4b25pYy5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzbHVnOiAnanVzaGknLFxuICAgICAgICBuYW1lOiAnanVzaGknLFxuICAgICAgICBpbWFnZTogJy9pbWFnZXMvc3VwcGxpZXJzL2p1c2hpLmpwZycsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFTaG9wQnJhbmRzO1xuIiwiaW1wb3J0IHsgSUN1cnJlbmN5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jdXJyZW5jeSc7XG5cbmNvbnN0IGRhdGFTaG9wQ3VycmVuY2llczogSUN1cnJlbmN5W10gPSBbXG4gICAge1xuICAgICAgICBjb2RlOiAnRVVSJyxcbiAgICAgICAgc3ltYm9sOiAn4oKsJyxcbiAgICAgICAgbmFtZTogJ0V1cm8nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb2RlOiAnR0JQJyxcbiAgICAgICAgc3ltYm9sOiAnwqMnLFxuICAgICAgICBuYW1lOiAnUG91bmQgU3RlcmxpbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb2RlOiAnVVNEJyxcbiAgICAgICAgc3ltYm9sOiAnJCcsXG4gICAgICAgIG5hbWU6ICdVUyBEb2xsYXInLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb2RlOiAnUlVCJyxcbiAgICAgICAgc3ltYm9sOiAn4oK9JyxcbiAgICAgICAgbmFtZTogJ1J1c3NpYW4gUnVibGUnLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZGF0YVNob3BEZWZhdWx0Q3VycmVuY3k6IElDdXJyZW5jeSA9IGRhdGFTaG9wQ3VycmVuY2llcy5maW5kKCh4KSA9PiB4LmNvZGUgPT09ICdVU0QnKSE7XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFTaG9wQ3VycmVuY2llcztcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnTmVvIFRlY2gnLFxuICAgIGZ1bGxOYW1lOiAnTmVvIFRlY2gnLFxuICAgIHVybDogJ2h0dHBzOi8vbmVvLmNvLnRoJyxcbiAgICBhdXRob3I6IHtcbiAgICAgICAgbmFtZTogJ0thcG9uZ2Rlc2lnbicsXG4gICAgICAgIHByb2ZpbGVfdXJsOiAnaHR0cHM6Ly9rYXBvbmdkZXNpZ24uY29tJyxcbiAgICB9LFxuICAgIGNvbnRhY3RzOiB7XG4gICAgICAgIGFkZHJlc3M6ICcxMzkg4LiLLiDguJ7guKPguLDguKLguLLguKrguLjguYDguKPguJnguJfguKPguYwgMzAg4LiWLuC4nuC4o+C4sOC4ouC4suC4quC4uOC5gOC4o+C4meC4l+C4o+C5jCDguYHguILguKfguIfguJrguLLguIfguIrguLHguJkg4LmA4LiC4LiV4LiE4Lil4Lit4LiH4Liq4Liy4Lih4Lin4LiyIOC4geC4o+C4uOC4h+C5gOC4l+C4niAxMDUxMCcsXG4gICAgICAgIGVtYWlsOiAnbmF0dGF3dXRAbmVvLmNvLnRoJyxcbiAgICAgICAgcGhvbmU6ICcwODEtNjg2LTI5MjInLFxuICAgIH0sXG4gICAgYXBpdXJsOiAnMTI3LjAuMC4xL2NvcmUtYXBpLycsXG59O1xuIiwiaW1wb3J0IHsgSUF0dHJpYnV0ZURlZiB9IGZyb20gJy4uL2ludGVyZmFjZXMvYXR0cmlidXRlcyc7XG5cbmNvbnN0IGF0dHJpYnV0ZXNEZWY6IElBdHRyaWJ1dGVEZWZbXSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDb2xvcicsXG4gICAgICAgIHNsdWc6ICdjb2xvcicsXG4gICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAgeyBuYW1lOiAnV2hpdGUnLCBzbHVnOiAnd2hpdGUnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdTaWx2ZXInLCBzbHVnOiAnc2lsdmVyJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnTGlnaHQgR3JheScsIHNsdWc6ICdsaWdodC1ncmF5JyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnR3JheScsIHNsdWc6ICdncmF5JyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRGFyayBHcmF5Jywgc2x1ZzogJ2RhcmstZ3JheScgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0NvYWwnLCBzbHVnOiAnY29hbCcgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0JsYWNrJywgc2x1ZzogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUmVkJywgc2x1ZzogJ3JlZCcgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ09yYW5nZScsIHNsdWc6ICdvcmFuZ2UnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdZZWxsb3cnLCBzbHVnOiAneWVsbG93JyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnUGVhciBHcmVlbicsIHNsdWc6ICdwZWFyLWdyZWVuJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnR3JlZW4nLCBzbHVnOiAnZ3JlZW4nIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdFbWVyYWxkJywgc2x1ZzogJ2VtZXJhbGQnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdTaGFtcm9jaycsIHNsdWc6ICdzaGFtcm9jaycgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1NoYWtlc3BlYXJlJywgc2x1ZzogJ3NoYWtlc3BlYXJlJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQmx1ZScsIHNsdWc6ICdibHVlJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRGFyayBCbHVlJywgc2x1ZzogJ2RhcmstYmx1ZScgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1Zpb2xldCcsIHNsdWc6ICd2aW9sZXQnIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdQdXJwbGUnLCBzbHVnOiAncHVycGxlJyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQ2VyaXNlJywgc2x1ZzogJ2NlcmlzZScgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1NwZWVkJyxcbiAgICAgICAgc2x1ZzogJ3NwZWVkJyxcbiAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICB7IG5hbWU6ICc3NTAgUlBNJywgc2x1ZzogJzc1MC1ycG0nIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdQb3dlciBTb3VyY2UnLFxuICAgICAgICBzbHVnOiAncG93ZXItc291cmNlJyxcbiAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICB7IG5hbWU6ICdDb3JkbGVzcy1FbGVjdHJpYycsIHNsdWc6ICdjb3JkbGVzcy1lbGVjdHJpYycgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0JhdHRlcnkgQ2VsbCBUeXBlJyxcbiAgICAgICAgc2x1ZzogJ2JhdHRlcnktY2VsbC10eXBlJyxcbiAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICB7IG5hbWU6ICdMaXRoaXVtJywgc2x1ZzogJ2xpdGhpdW0nIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdWb2x0YWdlJyxcbiAgICAgICAgc2x1ZzogJ3ZvbHRhZ2UnLFxuICAgICAgICB2YWx1ZXM6IFtcbiAgICAgICAgICAgIHsgbmFtZTogJzIwIFZvbHRzJywgc2x1ZzogJzIwLXZvbHRzJyB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnQmF0dGVyeSBDYXBhY2l0eScsXG4gICAgICAgIHNsdWc6ICdiYXR0ZXJ5LWNhcGFjaXR5JyxcbiAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICB7IG5hbWU6ICcyIEFoJywgc2x1ZzogJzItQWgnIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dHJpYnV0ZXNEZWY7XG4iLCJpbXBvcnQgeyBJQnJhbmREZWYgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2JyYW5kcyc7XG5cbmNvbnN0IGJyYW5kc0RhdGE6IElCcmFuZERlZltdID0gW1xuICAgIHsgbmFtZTogJ0JyYW5kaXgnLCBzbHVnOiAnYnJhbmRpeCcsIGltYWdlOiAnYXNzZXRzL2ltYWdlcy9sb2dvcy9sb2dvLTEucG5nJyB9LFxuICAgIHsgbmFtZTogJ1dha2l0YScsIHNsdWc6ICd3YWtpdGEnLCBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvbG9nb3MvbG9nby0yLnBuZycgfSxcbiAgICB7IG5hbWU6ICdab3NjaCcsIHNsdWc6ICd6b3NjaCcsIGltYWdlOiAnYXNzZXRzL2ltYWdlcy9sb2dvcy9sb2dvLTMucG5nJyB9LFxuICAgIHsgbmFtZTogJ1dlVkFMVCcsIHNsdWc6ICd3ZXZhbHQnLCBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvbG9nb3MvbG9nby00LnBuZycgfSxcbiAgICB7IG5hbWU6ICdIYW1tZXInLCBzbHVnOiAnaGFtbWVyJywgaW1hZ2U6ICdhc3NldHMvaW1hZ2VzL2xvZ29zL2xvZ28tNS5wbmcnIH0sXG4gICAgeyBuYW1lOiAnTWl0YXNpYScsIHNsdWc6ICdtaXRhc2lhJywgaW1hZ2U6ICdhc3NldHMvaW1hZ2VzL2xvZ29zL2xvZ28tNi5wbmcnIH0sXG4gICAgeyBuYW1lOiAnTWV0YWdnbycsIHNsdWc6ICdtZXRhZ2dvJywgaW1hZ2U6ICdhc3NldHMvaW1hZ2VzL2xvZ29zL2xvZ28tNy5wbmcnIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBicmFuZHNEYXRhO1xuIiwiaW1wb3J0IHsgbWFrZUlkR2VuZXJhdG9yLCBuYW1lVG9TbHVnIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgSUNhdGVnb3J5RGVmIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jYXRlZ29yaWVzJztcbmltcG9ydCB7IElCYXNlQ2F0ZWdvcnksIElTaG9wQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2NhdGVnb3J5JztcblxuY29uc3QgZ2V0SWQgPSBtYWtlSWRHZW5lcmF0b3IoKTtcblxuY29uc3QgY2F0ZWdvcmllc0RlZjogSUNhdGVnb3J5RGVmW10gPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnSW5zdHJ1bWVudHMnLFxuICAgICAgICBzbHVnOiAnaW5zdHJ1bWVudHMnLFxuICAgICAgICBpdGVtczogMjcyLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdQb3dlciBUb29scycsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ3Bvd2VyLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yeS0xLmpwZycsXG4gICAgICAgICAgICAgICAgaXRlbXM6IDM3MCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRHJpbGxzICYgTWl4ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICdkcmlsbHMtbWl4ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiA1NyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0NvcmRsZXNzIFNjcmV3ZHJpdmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnY29yZGxlc3Mtc2NyZXdkcml2ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1NjcmV3ZHJpdmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnc2NyZXdkcml2ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxMjYsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdXcmVuY2hlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnd3JlbmNoZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnR3JpbmRpbmcgTWFjaGluZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1ZzogJ2dyaW5kaW5nLW1hY2hpbmVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ01pbGxpbmcgQ3V0dGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnbWlsbGluZy1jdXR0ZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiA3OCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VsZWN0cmljIFNwcmF5IEd1bnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1ZzogJ2VsZWN0cmljLXNwcmF5LWd1bnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDMsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0hhbmQgVG9vbHMnLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdoYW5kLXRvb2xzJyxcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yeS0yLmpwZycsXG4gICAgICAgICAgICAgICAgaXRlbXM6IDEzNCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVG9vbCBLaXRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICd0b29sLWtpdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDU3LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSGFtbWVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnaGFtbWVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMTUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTcGFubmVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnc3Bhbm5lcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdIYW5kc2F3cycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnaGFuZHNhd3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDU0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnUGFpbnQgVG9vbHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1ZzogJ3BhaW50LXRvb2xzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnTWFjaGluZSBUb29scycsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ21hY2hpbmUtdG9vbHMnLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnYXNzZXRzL2ltYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3J5LTMuanBnJyxcbiAgICAgICAgICAgICAgICBpdGVtczogMzAyLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdMYXRoZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1ZzogJ2xhdGhlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMTA0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTWlsbGluZyBNYWNoaW5lcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnbWlsbGluZy1tYWNoaW5lcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMTIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdHcmluZGluZyBNYWNoaW5lcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnZ3JpbmRpbmctbWFjaGluZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDY3LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQ05DIE1hY2hpbmVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICdjbmMtbWFjaGluZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdTaGFycGVuaW5nIE1hY2hpbmVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICdzaGFycGVuaW5nLW1hY2hpbmVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiA4OCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnUG93ZXIgTWFjaGluZXJ5JyxcbiAgICAgICAgICAgICAgICBzbHVnOiAncG93ZXItbWFjaGluZXJ5JyxcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yeS00LmpwZycsXG4gICAgICAgICAgICAgICAgaXRlbXM6IDc5LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdHZW5lcmF0b3JzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICdnZW5lcmF0b3JzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyMyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0NvbXByZXNzb3JzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICdjb21wcmVzc29ycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogNzYsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdXaW5jaGVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICd3aW5jaGVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiA0MyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1BsYXNtYSBDdXR0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICdwbGFzbWEtY3V0dGluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMTI4LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRWxlY3RyaWMgTW90b3JzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICdlbGVjdHJpYy1tb3RvcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDc2LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdNZWFzdXJlbWVudCcsXG4gICAgICAgICAgICAgICAgc2x1ZzogJ21lYXN1cmVtZW50JyxcbiAgICAgICAgICAgICAgICBpbWFnZTogJ2Fzc2V0cy9pbWFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yeS01LmpwZycsXG4gICAgICAgICAgICAgICAgaXRlbXM6IDM2NixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVGFwZSBNZWFzdXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICd0YXBlLW1lYXN1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDU3LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVGhlb2RvbGl0ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1ZzogJ3RoZW9kb2xpdGVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiA1LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVGhlcm1hbCBJbWFnZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICd0aGVybWFsLWltYWdlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDMsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdDYWxpcGVycycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnY2FsaXBlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDM3LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTGV2ZWxzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICdsZXZlbHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDE0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdDbG90aGVzIGFuZCBQUEUnLFxuICAgICAgICAgICAgICAgIHNsdWc6ICdjbG90aGVzLWFuZC1wcGUnLFxuICAgICAgICAgICAgICAgIGltYWdlOiAnYXNzZXRzL2ltYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3J5LTYuanBnJyxcbiAgICAgICAgICAgICAgICBpdGVtczogODIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1dpbnRlciBXb3Jrd2VhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnd2ludGVyLXdvcmt3ZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyNCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1N1bW1lciBXb3Jrd2VhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnc3VtbWVyLXdvcmt3ZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiA4NyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0hlbG1ldHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1ZzogJ2hlbG1ldHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdCZWx0cyBhbmQgQmFncycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiAnYmVsdHMtYW5kLWJhZ3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdXb3JrIFNob2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6ICd3b3JrLXNob2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnRWxlY3Ryb25pY3MnLFxuICAgICAgICBzbHVnOiAnZWxlY3Ryb25pY3MnLFxuICAgICAgICBpdGVtczogNTQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdDb21wdXRlcnMnLFxuICAgICAgICBzbHVnOiAnY29tcHV0ZXJzJyxcbiAgICAgICAgaXRlbXM6IDQyMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0F1dG9tb3RpdmUnLFxuICAgICAgICBzbHVnOiAnYXV0b21vdGl2ZScsXG4gICAgICAgIGl0ZW1zOiAxODIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdGdXJuaXR1cmUgJiBBcHBsaWFuY2VzJyxcbiAgICAgICAgc2x1ZzogJ2Z1cm5pdHVyZS1hcHBsaWFuY2VzJyxcbiAgICAgICAgaXRlbXM6IDE1LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTXVzaWMgJiBCb29rcycsXG4gICAgICAgIHNsdWc6ICdtdXNpYy1ib29rcycsXG4gICAgICAgIGl0ZW1zOiA4OSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0hlYWx0aCAmIEJlYXV0eScsXG4gICAgICAgIHNsdWc6ICdoZWFsdGgtYmVhdXR5JyxcbiAgICAgICAgaXRlbXM6IDIwMSxcbiAgICB9LFxuXTtcblxudHlwZSBNYWtlRm48VCBleHRlbmRzIElCYXNlQ2F0ZWdvcnkgPSBJQmFzZUNhdGVnb3J5PiA9IChkZWY6IElDYXRlZ29yeURlZikgPT4gVDtcblxuZnVuY3Rpb24gbWFrZVNob3BDYXRlZ29yeShkZWY6IElDYXRlZ29yeURlZik6IElTaG9wQ2F0ZWdvcnkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdzaG9wJyxcbiAgICAgICAgaWQ6IGdldElkKCksXG4gICAgICAgIG5hbWU6IGRlZi5uYW1lLFxuICAgICAgICBzbHVnOiBkZWYuc2x1ZyB8fCBuYW1lVG9TbHVnKGRlZi5uYW1lKSxcbiAgICAgICAgaW1hZ2U6IGRlZi5pbWFnZSxcbiAgICAgICAgaXRlbXM6IGRlZi5pdGVtcyB8fCAwLFxuICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICBwYXJlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHdhbGtUcmVlPFQgZXh0ZW5kcyBJQmFzZUNhdGVnb3J5ID0gSUJhc2VDYXRlZ29yeT4oXG4gICAgbWFrZUZuOiBNYWtlRm48VD4sXG4gICAgZGVmczogSUNhdGVnb3J5RGVmW10sXG4gICAgcGFyZW50PzogVCxcbik6IFtUW10sIFRbXV0ge1xuICAgIGxldCBsaXN0OiBUW10gPSBbXTtcblxuICAgIGNvbnN0IHRyZWUgPSBkZWZzLm1hcCgoZGVmKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5OiBUID0gbWFrZUZuKGRlZik7XG5cbiAgICAgICAgY29uc3QgW2NoaWxkcmVuVHJlZSwgY2hpbGRyZW5MaXN0XSA9IHdhbGtUcmVlKG1ha2VGbiwgZGVmLmNoaWxkcmVuIHx8IFtdLCBjYXRlZ29yeSk7XG5cbiAgICAgICAgY2F0ZWdvcnkucGFyZW50ID0gcGFyZW50O1xuICAgICAgICBjYXRlZ29yeS5jaGlsZHJlbiA9IGNoaWxkcmVuVHJlZTtcbiAgICAgICAgbGlzdCA9IFsuLi5saXN0LCBjYXRlZ29yeSwgLi4uY2hpbGRyZW5MaXN0XTtcblxuICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gW3RyZWUsIGxpc3RdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZUNhdGVnb3J5PFQgZXh0ZW5kcyBJQmFzZUNhdGVnb3J5PihjYXRlZ29yeTogVCwgZGVwdGg/OiBudW1iZXIpOiBUIHtcbiAgICBsZXQgY2hpbGRyZW47XG5cbiAgICBpZiAoZGVwdGggJiYgZGVwdGggPiAwKSB7XG4gICAgICAgIGNoaWxkcmVuID0gY2F0ZWdvcnkuY2hpbGRyZW4gJiYgY2F0ZWdvcnkuY2hpbGRyZW4ubWFwKCh4KSA9PiBwcmVwYXJlQ2F0ZWdvcnkoeCwgZGVwdGggLSAxKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAuLi5jYXRlZ29yeSxcbiAgICAgICAgcGFyZW50OiBjYXRlZ29yeS5wYXJlbnQgPyBwcmVwYXJlQ2F0ZWdvcnkoY2F0ZWdvcnkucGFyZW50KSA6IG51bGwsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgIH0pKTtcbn1cblxuZXhwb3J0IGNvbnN0IFtjYXRlZ29yaWVzVHJlZURhdGEsIGNhdGVnb3JpZXNMaXN0RGF0YV0gPSB3YWxrVHJlZShtYWtlU2hvcENhdGVnb3J5LCBjYXRlZ29yaWVzRGVmKTtcbiIsImltcG9ydCB7IG1ha2VJZEdlbmVyYXRvciwgbmFtZVRvU2x1ZyB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBicmFuZHNEYXRhIGZyb20gJy4vYnJhbmRzJztcbmltcG9ydCB7IGNhdGVnb3JpZXNMaXN0RGF0YSwgcHJlcGFyZUNhdGVnb3J5IH0gZnJvbSAnLi9jYXRlZ29yaWVzJztcbmltcG9ydCB7IElTaG9wQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2NhdGVnb3J5JztcbmltcG9ydCB7IElQcm9kdWN0LCBJUHJvZHVjdEF0dHJpYnV0ZSwgSVByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcHJvZHVjdCc7XG5pbXBvcnQgYXR0cmlidXRlc0RlZiBmcm9tICcuL2F0dHJpYnV0ZXMnO1xuaW1wb3J0IHtcbiAgICBJUHJvZHVjdEF0dHJpYnV0ZURlZixcbiAgICBJUHJvZHVjdEF0dHJpYnV0ZVZhbHVlc0RlZixcbiAgICBJUHJvZHVjdEJhZGdlc0RlZixcbiAgICBJUHJvZHVjdENhdGVnb3JpZXNEZWYsXG4gICAgSVByb2R1Y3REZWYsIElQcm9kdWN0SW1hZ2VzRGVmLFxufSBmcm9tICcuLi9pbnRlcmZhY2VzL3Byb2R1Y3RzJztcbmltcG9ydCB7IElBdHRyaWJ1dGVEZWYgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2F0dHJpYnV0ZXMnO1xuXG5jb25zdCBnZXRJZCA9IG1ha2VJZEdlbmVyYXRvcigpO1xuXG5jb25zdCBwcm9kdWN0c0RlZjogSVByb2R1Y3REZWZbXSA9IFtcbiAgICB7XG4gICAgICAgIHNsdWc6ICdlbGVjdHJpYy1wbGFuZXItYnJhbmRpeC1rbDM3MDA5MGctMzAwLXdhdHRzJyxcbiAgICAgICAgbmFtZTogJ0VsZWN0cmljIFBsYW5lciBCcmFuZGl4IEtMMzcwMDkwRyAzMDAgV2F0dHMnLFxuICAgICAgICBwcmljZTogNzQ5LFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgICcvaW1hZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtMS5qcGcnLFxuICAgICAgICAgICAgJy9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC0xLTEuanBnJyxcbiAgICAgICAgXSxcbiAgICAgICAgYmFkZ2VzOiAnbmV3JyxcbiAgICAgICAgcmF0aW5nOiA0LFxuICAgICAgICByZXZpZXdzOiAxMixcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnaW4tc3RvY2snLFxuICAgICAgICBicmFuZDogJ2JyYW5kaXgnLFxuICAgICAgICBjYXRlZ29yaWVzOiBbJ3NjcmV3ZHJpdmVycyddLFxuICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICB7IHNsdWc6ICdjb2xvcicsIHZhbHVlczogJ3llbGxvdycgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3NwZWVkJywgdmFsdWVzOiAnNzUwLXJwbScsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdwb3dlci1zb3VyY2UnLCB2YWx1ZXM6ICdjb3JkbGVzcy1lbGVjdHJpYycsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdiYXR0ZXJ5LWNlbGwtdHlwZScsIHZhbHVlczogJ2xpdGhpdW0nLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAndm9sdGFnZScsIHZhbHVlczogJzIwLXZvbHRzJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ2JhdHRlcnktY2FwYWNpdHknLCB2YWx1ZXM6ICcyLUFoJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2x1ZzogJ3VuZGVmaW5lZC10b29sLWlyYWRpeC1kcHMzMDAwc3ktMjcwMC13YXR0cycsXG4gICAgICAgIG5hbWU6ICdVbmRlZmluZWQgVG9vbCBJUmFkaXggRFBTMzAwMFNZIDI3MDAgV2F0dHMnLFxuICAgICAgICBwcmljZTogMTAxOSxcbiAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgICAnL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTIuanBnJyxcbiAgICAgICAgICAgICcvaW1hZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtMi0xLmpwZycsXG4gICAgICAgIF0sXG4gICAgICAgIGJhZGdlczogJ2hvdCcsXG4gICAgICAgIHJhdGluZzogNSxcbiAgICAgICAgcmV2aWV3czogMyxcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnaW4tc3RvY2snLFxuICAgICAgICBicmFuZDogJ3pvc2NoJyxcbiAgICAgICAgY2F0ZWdvcmllczogWydpbnN0cnVtZW50cyddLFxuICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICB7IHNsdWc6ICdjb2xvcicsIHZhbHVlczogWydzaWx2ZXInLCAnY2VyaXNlJ10gfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3NwZWVkJywgdmFsdWVzOiAnNzUwLXJwbScsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdwb3dlci1zb3VyY2UnLCB2YWx1ZXM6ICdjb3JkbGVzcy1lbGVjdHJpYycsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdiYXR0ZXJ5LWNlbGwtdHlwZScsIHZhbHVlczogJ2xpdGhpdW0nLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAndm9sdGFnZScsIHZhbHVlczogJzIwLXZvbHRzJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ2JhdHRlcnktY2FwYWNpdHknLCB2YWx1ZXM6ICcyLUFoJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2x1ZzogJ2RyaWxsLXNjcmV3ZHJpdmVyLWJyYW5kaXgtYWx4NzA1NC0yMDAtd2F0dHMnLFxuICAgICAgICBuYW1lOiAnRHJpbGwgU2NyZXdkcml2ZXIgQnJhbmRpeCBBTFg3MDU0IDIwMCBXYXR0cycsXG4gICAgICAgIHByaWNlOiA4NTAsXG4gICAgICAgIGltYWdlczogW1xuICAgICAgICAgICAgJy9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC0zLmpwZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTMtMS5qcGcnLFxuICAgICAgICBdLFxuICAgICAgICByYXRpbmc6IDQsXG4gICAgICAgIHJldmlld3M6IDgsXG4gICAgICAgIGF2YWlsYWJpbGl0eTogJ2luLXN0b2NrJyxcbiAgICAgICAgYnJhbmQ6ICdicmFuZGl4JyxcbiAgICAgICAgY2F0ZWdvcmllczogWydwb3dlci10b29scyddLFxuICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICB7IHNsdWc6ICdjb2xvcicsIHZhbHVlczogJ3llbGxvdycgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3NwZWVkJywgdmFsdWVzOiAnNzUwLXJwbScsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdwb3dlci1zb3VyY2UnLCB2YWx1ZXM6ICdjb3JkbGVzcy1lbGVjdHJpYycsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdiYXR0ZXJ5LWNlbGwtdHlwZScsIHZhbHVlczogJ2xpdGhpdW0nLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAndm9sdGFnZScsIHZhbHVlczogJzIwLXZvbHRzJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ2JhdHRlcnktY2FwYWNpdHknLCB2YWx1ZXM6ICcyLUFoJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2x1ZzogJ2RyaWxsLXNlcmllcy0zLWJyYW5kaXgta3NyNDU5MHBxcy0xNTAwLXdhdHRzJyxcbiAgICAgICAgbmFtZTogJ0RyaWxsIFNlcmllcyAzIEJyYW5kaXggS1NSNDU5MFBRUyAxNTAwIFdhdHRzJyxcbiAgICAgICAgcHJpY2U6IDk0OSxcbiAgICAgICAgY29tcGFyZUF0UHJpY2U6IDExODksXG4gICAgICAgIGltYWdlczogW1xuICAgICAgICAgICAgJy9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC00LmpwZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTQtMS5qcGcnLFxuICAgICAgICBdLFxuICAgICAgICBiYWRnZXM6ICdzYWxlJyxcbiAgICAgICAgcmF0aW5nOiAzLFxuICAgICAgICByZXZpZXdzOiAxNSxcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnaW4tc3RvY2snLFxuICAgICAgICBicmFuZDogJ2JyYW5kaXgnLFxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgYXR0cmlidXRlczogW1xuICAgICAgICAgICAgeyBzbHVnOiAnY29sb3InLCB2YWx1ZXM6ICd3aGl0ZScgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3NwZWVkJywgdmFsdWVzOiAnNzUwLXJwbScsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdwb3dlci1zb3VyY2UnLCB2YWx1ZXM6ICdjb3JkbGVzcy1lbGVjdHJpYycsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdiYXR0ZXJ5LWNlbGwtdHlwZScsIHZhbHVlczogJ2xpdGhpdW0nLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAndm9sdGFnZScsIHZhbHVlczogJzIwLXZvbHRzJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ2JhdHRlcnktY2FwYWNpdHknLCB2YWx1ZXM6ICcyLUFoJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2x1ZzogJ2JyYW5kaXgtcm91dGVyLXBvd2VyLXRvb2wtMjAxN2VyeHBrJyxcbiAgICAgICAgbmFtZTogJ0JyYW5kaXggUm91dGVyIFBvd2VyIFRvb2wgMjAxN0VSWFBLJyxcbiAgICAgICAgcHJpY2U6IDE3MDAsXG4gICAgICAgIGltYWdlczogW1xuICAgICAgICAgICAgJy9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC01LmpwZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTUtMS5qcGcnLFxuICAgICAgICBdLFxuICAgICAgICByYXRpbmc6IDQsXG4gICAgICAgIHJldmlld3M6IDIsXG4gICAgICAgIGF2YWlsYWJpbGl0eTogJ2luLXN0b2NrJyxcbiAgICAgICAgYnJhbmQ6ICd3YWtpdGEnLFxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgYXR0cmlidXRlczogW1xuICAgICAgICAgICAgeyBzbHVnOiAnY29sb3InLCB2YWx1ZXM6ICdkYXJrLWJsdWUnIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdzcGVlZCcsIHZhbHVlczogJzc1MC1ycG0nLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAncG93ZXItc291cmNlJywgdmFsdWVzOiAnY29yZGxlc3MtZWxlY3RyaWMnLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAnYmF0dGVyeS1jZWxsLXR5cGUnLCB2YWx1ZXM6ICdsaXRoaXVtJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3ZvbHRhZ2UnLCB2YWx1ZXM6ICcyMC12b2x0cycsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdiYXR0ZXJ5LWNhcGFjaXR5JywgdmFsdWVzOiAnMi1BaCcsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNsdWc6ICdicmFuZGl4LWRyaWxsaW5nLW1hY2hpbmUtZG0yMDE5a3c0LTRrdycsXG4gICAgICAgIG5hbWU6ICdCcmFuZGl4IERyaWxsaW5nIE1hY2hpbmUgRE0yMDE5S1c0IDRrVycsXG4gICAgICAgIHByaWNlOiAzMTk5LFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgICcvaW1hZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtNi5qcGcnLFxuICAgICAgICAgICAgJy9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC02LTEuanBnJyxcbiAgICAgICAgXSxcbiAgICAgICAgcmF0aW5nOiAzLFxuICAgICAgICByZXZpZXdzOiAyMSxcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnaW4tc3RvY2snLFxuICAgICAgICBicmFuZDogJ3dha2l0YScsXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICB7IHNsdWc6ICdjb2xvcicsIHZhbHVlczogJ29yYW5nZScgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3NwZWVkJywgdmFsdWVzOiAnNzUwLXJwbScsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdwb3dlci1zb3VyY2UnLCB2YWx1ZXM6ICdjb3JkbGVzcy1lbGVjdHJpYycsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdiYXR0ZXJ5LWNlbGwtdHlwZScsIHZhbHVlczogJ2xpdGhpdW0nLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAndm9sdGFnZScsIHZhbHVlczogJzIwLXZvbHRzJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ2JhdHRlcnktY2FwYWNpdHknLCB2YWx1ZXM6ICcyLUFoJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2x1ZzogJ2JyYW5kaXgtcGxpZXJzJyxcbiAgICAgICAgbmFtZTogJ0JyYW5kaXggUGxpZXJzJyxcbiAgICAgICAgcHJpY2U6IDI0LFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgICcvaW1hZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtNy5qcGcnLFxuICAgICAgICAgICAgJy9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC03LTEuanBnJyxcbiAgICAgICAgXSxcbiAgICAgICAgcmF0aW5nOiAyLFxuICAgICAgICByZXZpZXdzOiAxLFxuICAgICAgICBhdmFpbGFiaWxpdHk6ICdpbi1zdG9jaycsXG4gICAgICAgIGJyYW5kOiAnd2V2YWx0JyxcbiAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgIHsgc2x1ZzogJ2NvbG9yJywgdmFsdWVzOiAncmVkJyB9LFxuICAgICAgICAgICAgeyBzbHVnOiAnc3BlZWQnLCB2YWx1ZXM6ICc3NTAtcnBtJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3Bvd2VyLXNvdXJjZScsIHZhbHVlczogJ2NvcmRsZXNzLWVsZWN0cmljJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ2JhdHRlcnktY2VsbC10eXBlJywgdmFsdWVzOiAnbGl0aGl1bScsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICd2b2x0YWdlJywgdmFsdWVzOiAnMjAtdm9sdHMnLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAnYmF0dGVyeS1jYXBhY2l0eScsIHZhbHVlczogJzItQWgnLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzbHVnOiAnd2F0ZXItaG9zZS00MGNtJyxcbiAgICAgICAgbmFtZTogJ1dhdGVyIEhvc2UgNDBjbScsXG4gICAgICAgIHByaWNlOiAxNSxcbiAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgICAnL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTguanBnJyxcbiAgICAgICAgICAgICcvaW1hZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtOC0xLmpwZycsXG4gICAgICAgIF0sXG4gICAgICAgIHJhdGluZzogMixcbiAgICAgICAgcmV2aWV3czogNSxcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnaW4tc3RvY2snLFxuICAgICAgICBicmFuZDogJ2hhbW1lcicsXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICB7IHNsdWc6ICdjb2xvcicsIHZhbHVlczogWydwZWFyLWdyZWVuJywgJ2JsdWUnXSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAnc3BlZWQnLCB2YWx1ZXM6ICc3NTAtcnBtJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3Bvd2VyLXNvdXJjZScsIHZhbHVlczogJ2NvcmRsZXNzLWVsZWN0cmljJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ2JhdHRlcnktY2VsbC10eXBlJywgdmFsdWVzOiAnbGl0aGl1bScsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICd2b2x0YWdlJywgdmFsdWVzOiAnMjAtdm9sdHMnLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAnYmF0dGVyeS1jYXBhY2l0eScsIHZhbHVlczogJzItQWgnLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzbHVnOiAnc3Bhbm5lci13cmVuY2gnLFxuICAgICAgICBuYW1lOiAnU3Bhbm5lciBXcmVuY2gnLFxuICAgICAgICBwcmljZTogMTksXG4gICAgICAgIGltYWdlczogW1xuICAgICAgICAgICAgJy9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC05LmpwZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTktMS5qcGcnLFxuICAgICAgICBdLFxuICAgICAgICByYXRpbmc6IDQsXG4gICAgICAgIHJldmlld3M6IDM0LFxuICAgICAgICBhdmFpbGFiaWxpdHk6ICdpbi1zdG9jaycsXG4gICAgICAgIGJyYW5kOiAnaGFtbWVyJyxcbiAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgIHsgc2x1ZzogJ2NvbG9yJywgdmFsdWVzOiAnZ3JlZW4nIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdzcGVlZCcsIHZhbHVlczogJzc1MC1ycG0nLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAncG93ZXItc291cmNlJywgdmFsdWVzOiAnY29yZGxlc3MtZWxlY3RyaWMnLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAnYmF0dGVyeS1jZWxsLXR5cGUnLCB2YWx1ZXM6ICdsaXRoaXVtJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3ZvbHRhZ2UnLCB2YWx1ZXM6ICcyMC12b2x0cycsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdiYXR0ZXJ5LWNhcGFjaXR5JywgdmFsdWVzOiAnMi1BaCcsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNsdWc6ICd3YXRlci10YXAnLFxuICAgICAgICBuYW1lOiAnV2F0ZXIgVGFwJyxcbiAgICAgICAgcHJpY2U6IDE1LFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgICcvaW1hZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtMTAuanBnJyxcbiAgICAgICAgICAgICcvaW1hZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtMTAtMS5qcGcnLFxuICAgICAgICBdLFxuICAgICAgICByYXRpbmc6IDUsXG4gICAgICAgIHJldmlld3M6IDMsXG4gICAgICAgIGF2YWlsYWJpbGl0eTogJ2luLXN0b2NrJyxcbiAgICAgICAgYnJhbmQ6ICdoYW1tZXInLFxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgYXR0cmlidXRlczogW1xuICAgICAgICAgICAgeyBzbHVnOiAnY29sb3InLCB2YWx1ZXM6ICdncmF5JyB9LFxuICAgICAgICAgICAgeyBzbHVnOiAnc3BlZWQnLCB2YWx1ZXM6ICc3NTAtcnBtJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3Bvd2VyLXNvdXJjZScsIHZhbHVlczogJ2NvcmRsZXNzLWVsZWN0cmljJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ2JhdHRlcnktY2VsbC10eXBlJywgdmFsdWVzOiAnbGl0aGl1bScsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICd2b2x0YWdlJywgdmFsdWVzOiAnMjAtdm9sdHMnLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAnYmF0dGVyeS1jYXBhY2l0eScsIHZhbHVlczogJzItQWgnLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzbHVnOiAnaGFuZC10b29sLWtpdCcsXG4gICAgICAgIG5hbWU6ICdIYW5kIFRvb2wgS2l0JyxcbiAgICAgICAgcHJpY2U6IDE0OSxcbiAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgICAnL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTExLmpwZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTExLTEuanBnJyxcbiAgICAgICAgXSxcbiAgICAgICAgcmF0aW5nOiA0LFxuICAgICAgICByZXZpZXdzOiA3LFxuICAgICAgICBhdmFpbGFiaWxpdHk6ICdpbi1zdG9jaycsXG4gICAgICAgIGJyYW5kOiAnaGFtbWVyJyxcbiAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgIHsgc2x1ZzogJ2NvbG9yJywgdmFsdWVzOiAnYmxhY2snIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdzcGVlZCcsIHZhbHVlczogJzc1MC1ycG0nLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAncG93ZXItc291cmNlJywgdmFsdWVzOiAnY29yZGxlc3MtZWxlY3RyaWMnLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAnYmF0dGVyeS1jZWxsLXR5cGUnLCB2YWx1ZXM6ICdsaXRoaXVtJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3ZvbHRhZ2UnLCB2YWx1ZXM6ICcyMC12b2x0cycsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdiYXR0ZXJ5LWNhcGFjaXR5JywgdmFsdWVzOiAnMi1BaCcsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNsdWc6ICdhc2gtcy1jaGFpbnNhdy0zLjVrdycsXG4gICAgICAgIG5hbWU6ICdBc2hcXCdzIENoYWluc2F3IDMuNWtXJyxcbiAgICAgICAgcHJpY2U6IDY2Ni45OSxcbiAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgICAnL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTEyLmpwZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTEyLTEuanBnJyxcbiAgICAgICAgXSxcbiAgICAgICAgcmF0aW5nOiA1LFxuICAgICAgICByZXZpZXdzOiAxNyxcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnaW4tc3RvY2snLFxuICAgICAgICBicmFuZDogJ21pdGFzaWEnLFxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgYXR0cmlidXRlczogW1xuICAgICAgICAgICAgeyBzbHVnOiAnY29sb3InLCB2YWx1ZXM6ICd2aW9sZXQnIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdzcGVlZCcsIHZhbHVlczogJzc1MC1ycG0nLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAncG93ZXItc291cmNlJywgdmFsdWVzOiAnY29yZGxlc3MtZWxlY3RyaWMnLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAnYmF0dGVyeS1jZWxsLXR5cGUnLCB2YWx1ZXM6ICdsaXRoaXVtJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3ZvbHRhZ2UnLCB2YWx1ZXM6ICcyMC12b2x0cycsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdiYXR0ZXJ5LWNhcGFjaXR5JywgdmFsdWVzOiAnMi1BaCcsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNsdWc6ICdicmFuZGl4LWFuZ2xlLWdyaW5kZXIta3p4Mzg5MHBxdycsXG4gICAgICAgIG5hbWU6ICdCcmFuZGl4IEFuZ2xlIEdyaW5kZXIgS1pYMzg5MFBRVycsXG4gICAgICAgIHByaWNlOiA2NDksXG4gICAgICAgIGltYWdlczogW1xuICAgICAgICAgICAgJy9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC0xMy5qcGcnLFxuICAgICAgICAgICAgJy9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC0xMy0xLmpwZycsXG4gICAgICAgIF0sXG4gICAgICAgIHJhdGluZzogMixcbiAgICAgICAgcmV2aWV3czogOCxcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnaW4tc3RvY2snLFxuICAgICAgICBicmFuZDogJ21pdGFzaWEnLFxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgYXR0cmlidXRlczogW1xuICAgICAgICAgICAgeyBzbHVnOiAnY29sb3InLCB2YWx1ZXM6ICdwdXJwbGUnIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdzcGVlZCcsIHZhbHVlczogJzc1MC1ycG0nLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAncG93ZXItc291cmNlJywgdmFsdWVzOiAnY29yZGxlc3MtZWxlY3RyaWMnLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAnYmF0dGVyeS1jZWxsLXR5cGUnLCB2YWx1ZXM6ICdsaXRoaXVtJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3ZvbHRhZ2UnLCB2YWx1ZXM6ICcyMC12b2x0cycsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdiYXR0ZXJ5LWNhcGFjaXR5JywgdmFsdWVzOiAnMi1BaCcsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNsdWc6ICdicmFuZGl4LWFpci1jb21wcmVzc29yLWRlbHRha3g1MDAnLFxuICAgICAgICBuYW1lOiAnQnJhbmRpeCBBaXIgQ29tcHJlc3NvciBERUxUQUtYNTAwJyxcbiAgICAgICAgcHJpY2U6IDE4MDAsXG4gICAgICAgIGltYWdlczogW1xuICAgICAgICAgICAgJy9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC0xNC5qcGcnLFxuICAgICAgICAgICAgJy9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC0xNC0xLmpwZycsXG4gICAgICAgIF0sXG4gICAgICAgIHJhdGluZzogMyxcbiAgICAgICAgcmV2aWV3czogMTQsXG4gICAgICAgIGF2YWlsYWJpbGl0eTogJ2luLXN0b2NrJyxcbiAgICAgICAgYnJhbmQ6ICdicmFuZGl4JyxcbiAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgIHsgc2x1ZzogJ2NvbG9yJywgdmFsdWVzOiBbJ2xpZ2h0LWdyYXknLCAnZW1lcmFsZCddIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdzcGVlZCcsIHZhbHVlczogJzc1MC1ycG0nLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAncG93ZXItc291cmNlJywgdmFsdWVzOiAnY29yZGxlc3MtZWxlY3RyaWMnLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAnYmF0dGVyeS1jZWxsLXR5cGUnLCB2YWx1ZXM6ICdsaXRoaXVtJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3ZvbHRhZ2UnLCB2YWx1ZXM6ICcyMC12b2x0cycsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdiYXR0ZXJ5LWNhcGFjaXR5JywgdmFsdWVzOiAnMi1BaCcsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNsdWc6ICdicmFuZGl4LWVsZWN0cmljLWppZ3Nhdy1qaWc3MDAwYnEnLFxuICAgICAgICBuYW1lOiAnQnJhbmRpeCBFbGVjdHJpYyBKaWdzYXcgSklHNzAwMEJRJyxcbiAgICAgICAgcHJpY2U6IDI5MCxcbiAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgICAnL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTE1LmpwZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTE1LTEuanBnJyxcbiAgICAgICAgXSxcbiAgICAgICAgcmF0aW5nOiAyLFxuICAgICAgICByZXZpZXdzOiAxLFxuICAgICAgICBhdmFpbGFiaWxpdHk6ICdpbi1zdG9jaycsXG4gICAgICAgIGJyYW5kOiAnYnJhbmRpeCcsXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICB7IHNsdWc6ICdjb2xvcicsIHZhbHVlczogWydjb2FsJywgJ3NoYW1yb2NrJ10gfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3NwZWVkJywgdmFsdWVzOiAnNzUwLXJwbScsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdwb3dlci1zb3VyY2UnLCB2YWx1ZXM6ICdjb3JkbGVzcy1lbGVjdHJpYycsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdiYXR0ZXJ5LWNlbGwtdHlwZScsIHZhbHVlczogJ2xpdGhpdW0nLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAndm9sdGFnZScsIHZhbHVlczogJzIwLXZvbHRzJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ2JhdHRlcnktY2FwYWNpdHknLCB2YWx1ZXM6ICcyLUFoJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc2x1ZzogJ2JyYW5kaXgtc2NyZXdkcml2ZXItc2NyZXcxNTAwYWNjJyxcbiAgICAgICAgbmFtZTogJ0JyYW5kaXggU2NyZXdkcml2ZXIgU0NSRVcxNTAwQUNDJyxcbiAgICAgICAgcHJpY2U6IDE0OTksXG4gICAgICAgIGltYWdlczogW1xuICAgICAgICAgICAgJy9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC0xNi5qcGcnLFxuICAgICAgICAgICAgJy9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC0xNi0xLmpwZycsXG4gICAgICAgICAgICAnL2ltYWdlcy9wcm9kdWN0cy9wcm9kdWN0LTE2LTIuanBnJyxcbiAgICAgICAgICAgICcvaW1hZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtMTYtMy5qcGcnLFxuICAgICAgICAgICAgJy9pbWFnZXMvcHJvZHVjdHMvcHJvZHVjdC0xNi00LmpwZycsXG4gICAgICAgIF0sXG4gICAgICAgIHJhdGluZzogNSxcbiAgICAgICAgcmV2aWV3czogMyxcbiAgICAgICAgYXZhaWxhYmlsaXR5OiAnaW4tc3RvY2snLFxuICAgICAgICBicmFuZDogJ21ldGFnZ28nLFxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgYXR0cmlidXRlczogW1xuICAgICAgICAgICAgeyBzbHVnOiAnY29sb3InLCB2YWx1ZXM6IFsnZGFyay1ncmF5JywgJ3NoYWtlc3BlYXJlJ10gfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ3NwZWVkJywgdmFsdWVzOiAnNzUwLXJwbScsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdwb3dlci1zb3VyY2UnLCB2YWx1ZXM6ICdjb3JkbGVzcy1lbGVjdHJpYycsIGZlYXR1cmVkOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHNsdWc6ICdiYXR0ZXJ5LWNlbGwtdHlwZScsIHZhbHVlczogJ2xpdGhpdW0nLCBmZWF0dXJlZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBzbHVnOiAndm9sdGFnZScsIHZhbHVlczogJzIwLXZvbHRzJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgc2x1ZzogJ2JhdHRlcnktY2FwYWNpdHknLCB2YWx1ZXM6ICcyLUFoJywgZmVhdHVyZWQ6IHRydWUgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuXTtcblxuZnVuY3Rpb24gbWFrZUJhZGdlcyhkZWY/OiBJUHJvZHVjdEJhZGdlc0RlZik6IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRlZikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBkZWYgPT09ICdzdHJpbmcnID8gW2RlZl0gOiBkZWYuc2xpY2UoKTtcbn1cblxuZnVuY3Rpb24gbWFrZUltYWdlcyhkZWY/OiBJUHJvZHVjdEltYWdlc0RlZik6IHN0cmluZ1tdIHtcbiAgICBpZiAoIWRlZikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBkZWYgPT09ICdzdHJpbmcnID8gW2RlZl0gOiBkZWYuc2xpY2UoKTtcbn1cblxuZnVuY3Rpb24gbWFrZUNhdGVnb3JpZXMoZGVmPzogSVByb2R1Y3RDYXRlZ29yaWVzRGVmKTogSVNob3BDYXRlZ29yeVtdIHtcbiAgICBsZXQgY2F0ZWdvcmllc0RlZjogc3RyaW5nW10gPSBbXTtcblxuICAgIGlmIChkZWYpIHtcbiAgICAgICAgY2F0ZWdvcmllc0RlZiA9IHR5cGVvZiBkZWYgPT09ICdzdHJpbmcnID8gW2RlZl0gOiBkZWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhdGVnb3JpZXNMaXN0RGF0YVxuICAgICAgICAuZmlsdGVyKChjYXRlZ29yeSkgPT4gY2F0ZWdvcmllc0RlZi5pbmNsdWRlcyhjYXRlZ29yeS5zbHVnKSlcbiAgICAgICAgLm1hcCgoY2F0ZWdvcnkpID0+IHByZXBhcmVDYXRlZ29yeShjYXRlZ29yeSkpO1xufVxuXG5mdW5jdGlvbiBtYWtlQXR0cmlidXRlVmFsdWVzKFxuICAgIGRlZnM6IElQcm9kdWN0QXR0cmlidXRlVmFsdWVzRGVmLFxuICAgIGF0dHJpYnV0ZURlZjogSUF0dHJpYnV0ZURlZixcbik6IElQcm9kdWN0QXR0cmlidXRlVmFsdWVbXSB7XG4gICAgY29uc3Qgc2x1Z3MgPSB0eXBlb2YgZGVmcyA9PT0gJ3N0cmluZycgPyBbZGVmc10gOiBkZWZzO1xuXG4gICAgcmV0dXJuIHNsdWdzLm1hcCgoc2x1ZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZURlZiA9IGF0dHJpYnV0ZURlZi52YWx1ZXMuZmluZCgoeCkgPT4geC5zbHVnID09PSBzbHVnKTtcblxuICAgICAgICBpZiAoIXZhbHVlRGVmKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi52YWx1ZURlZixcbiAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXG4gICAgICAgIH07XG4gICAgfSkuZmlsdGVyKCh4KSA9PiB4ICE9PSBudWxsKSBhcyBJUHJvZHVjdEF0dHJpYnV0ZVZhbHVlW107XG59XG5cbmZ1bmN0aW9uIG1ha2VBdHRyaWJ1dGVzKGRlZnM/OiBJUHJvZHVjdEF0dHJpYnV0ZURlZltdKTogSVByb2R1Y3RBdHRyaWJ1dGVbXSB7XG4gICAgaWYgKCFkZWZzKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmcy5tYXAoKGRlZikgPT4ge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVEZWYgPSBhdHRyaWJ1dGVzRGVmLmZpbmQoKHgpID0+IHguc2x1ZyA9PT0gZGVmLnNsdWcpO1xuXG4gICAgICAgIGlmICghYXR0cmlidXRlRGVmKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IG1ha2VBdHRyaWJ1dGVWYWx1ZXMoZGVmLnZhbHVlcywgYXR0cmlidXRlRGVmKTtcblxuICAgICAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IGF0dHJpYnV0ZURlZi5uYW1lLFxuICAgICAgICAgICAgc2x1ZzogYXR0cmlidXRlRGVmLnNsdWcsXG4gICAgICAgICAgICBmZWF0dXJlZDogISFkZWYuZmVhdHVyZWQsXG4gICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxuICAgICAgICB9O1xuICAgIH0pLmZpbHRlcigoeCkgPT4geCAhPT0gbnVsbCkgYXMgSVByb2R1Y3RBdHRyaWJ1dGVbXTtcbn1cblxuY29uc3QgcHJvZHVjdHNEYXRhOiBJUHJvZHVjdFtdID0gcHJvZHVjdHNEZWYubWFwKChwcm9kdWN0RGVmKSA9PiAoe1xuICAgIGlkOiBnZXRJZCgpLFxuICAgIG5hbWU6IHByb2R1Y3REZWYubmFtZSxcbiAgICBza3U6ICc4MzY5MC8zMicsXG4gICAgc2x1ZzogcHJvZHVjdERlZi5zbHVnIHx8IG5hbWVUb1NsdWcocHJvZHVjdERlZi5uYW1lKSxcbiAgICBwcmljZTogcHJvZHVjdERlZi5wcmljZSxcbiAgICBjb21wYXJlQXRQcmljZTogcHJvZHVjdERlZi5jb21wYXJlQXRQcmljZSB8fCBudWxsLFxuICAgIGltYWdlczogbWFrZUltYWdlcyhwcm9kdWN0RGVmLmltYWdlcyksXG4gICAgYmFkZ2VzOiBtYWtlQmFkZ2VzKHByb2R1Y3REZWYuYmFkZ2VzKSxcbiAgICByYXRpbmc6IHByb2R1Y3REZWYucmF0aW5nICE9PSB1bmRlZmluZWQgPyBwcm9kdWN0RGVmLnJhdGluZyA6IDAsXG4gICAgcmV2aWV3czogcHJvZHVjdERlZi5yZXZpZXdzICE9PSB1bmRlZmluZWQgPyBwcm9kdWN0RGVmLnJldmlld3MgOiAwLFxuICAgIGF2YWlsYWJpbGl0eTogcHJvZHVjdERlZi5hdmFpbGFiaWxpdHkgfHwgJ2luLXN0b2NrJyxcbiAgICBicmFuZDogYnJhbmRzRGF0YS5maW5kKCh4KSA9PiB4LnNsdWcgPT09IHByb2R1Y3REZWYuYnJhbmQpIHx8IG51bGwsXG4gICAgY2F0ZWdvcmllczogbWFrZUNhdGVnb3JpZXMocHJvZHVjdERlZi5jYXRlZ29yaWVzKSxcbiAgICBhdHRyaWJ1dGVzOiBtYWtlQXR0cmlidXRlcyhwcm9kdWN0RGVmLmF0dHJpYnV0ZXMpLFxuICAgIGN1c3RvbUZpZWxkczoge30sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzRGF0YTtcbiIsImltcG9ydCB7IGNhdGVnb3JpZXNUcmVlRGF0YSwgY2F0ZWdvcmllc0xpc3REYXRhLCBwcmVwYXJlQ2F0ZWdvcnkgfSBmcm9tICcuLi9kYXRhYmFzZS9jYXRlZ29yaWVzJztcbmltcG9ydCB7IElTaG9wQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2NhdGVnb3J5JztcblxuZXhwb3J0IGludGVyZmFjZSBHZXRDYXRlZ29yaWVzT3B0aW9ucyB7XG4gICAgZGVwdGg/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0Q2F0ZWdvcnlCeVNsdWdPcHRpb25zIHtcbiAgICBkZXB0aD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhdGVnb3JpZXMob3B0aW9uczogR2V0Q2F0ZWdvcmllc09wdGlvbnMgPSB7fSk6IFByb21pc2U8SVNob3BDYXRlZ29yeVtdPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcbiAgICAgICAgY2F0ZWdvcmllc1RyZWVEYXRhLm1hcCgoeCkgPT4gcHJlcGFyZUNhdGVnb3J5KHgsIG9wdGlvbnMuZGVwdGgpKSxcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2F0ZWdvcnlCeVNsdWcoc2x1Zzogc3RyaW5nLCBvcHRpb25zOiBHZXRDYXRlZ29yeUJ5U2x1Z09wdGlvbnMgPSB7fSk6IFByb21pc2U8SVNob3BDYXRlZ29yeT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllc0xpc3REYXRhLmZpbmQoKHgpID0+IHguc2x1ZyA9PT0gc2x1Zyk7XG5cbiAgICByZXR1cm4gY2F0ZWdvcnkgPyBQcm9taXNlLnJlc29sdmUocHJlcGFyZUNhdGVnb3J5KGNhdGVnb3J5LCBvcHRpb25zLmRlcHRoKSkgOiBQcm9taXNlLnJlamVjdCgpO1xufVxuIiwiaW1wb3J0IENhdGVnb3J5RmlsdGVyQnVpbGRlciBmcm9tICcuLi9maWx0ZXJzL2NhdGVnb3J5JztcbmltcG9ydCBDaGVja0ZpbHRlckJ1aWxkZXIgZnJvbSAnLi4vZmlsdGVycy9jaGVjayc7XG5pbXBvcnQgQ29sb3JGaWx0ZXJCdWlsZGVyIGZyb20gJy4uL2ZpbHRlcnMvY29sb3InO1xuaW1wb3J0IHByb2R1Y3RzRGF0YSBmcm9tICcuLi9kYXRhYmFzZS9wcm9kdWN0cyc7XG5pbXBvcnQgUmFkaW9GaWx0ZXJCdWlsZGVyIGZyb20gJy4uL2ZpbHRlcnMvcmFkaW8nO1xuaW1wb3J0IFJhbmdlRmlsdGVyQnVpbGRlciBmcm9tICcuLi9maWx0ZXJzL3JhbmdlJztcbmltcG9ydCB7IElQcm9kdWN0LCBJUHJvZHVjdHNMaXN0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wcm9kdWN0JztcbmltcG9ydCB7IGRlbGF5UmVzcG9uc2UgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UHJvZHVjdHNPcHRpb25zIHtcbiAgICBsaW1pdD86IG51bWJlcjtcbiAgICBjYXRlZ29yeT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZXRQcm9kdWN0c0xpc3RPcHRpb25zIHtcbiAgICBwYWdlPzogbnVtYmVyO1xuICAgIGxpbWl0PzogbnVtYmVyO1xuICAgIHNvcnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2V0UHJvZHVjdHNMaXN0RmlsdGVycyB7XG4gICAgW2ZpbHRlclNsdWc6IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgR2V0U3VnZ2VzdGlvbnNPcHRpb25zID0ge1xuICAgIGxpbWl0PzogbnVtYmVyO1xuICAgIGNhdGVnb3J5Pzogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gZ2V0UHJvZHVjdHMoc2hpZnQ6IG51bWJlciwgb3B0aW9uczogR2V0UHJvZHVjdHNPcHRpb25zKTogUHJvbWlzZTxJUHJvZHVjdFtdPiB7XG4gICAgY29uc3QgbGltaXQgPSBvcHRpb25zLmxpbWl0IHx8IDg7XG4gICAgbGV0IHByb2R1Y3RzID0gWy4uLnByb2R1Y3RzRGF0YS5zbGljZShzaGlmdCksIC4uLnByb2R1Y3RzRGF0YS5zbGljZSgwLCBzaGlmdCldO1xuXG4gICAgaWYgKG9wdGlvbnMuY2F0ZWdvcnkgPT09ICdwb3dlci10b29scycpIHtcbiAgICAgICAgcHJvZHVjdHMgPSBwcm9kdWN0cy5zbGljZSgpLnJldmVyc2UoKTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuY2F0ZWdvcnkgPT09ICdoYW5kLXRvb2xzJykge1xuICAgICAgICBwcm9kdWN0cyA9IFsuLi5wcm9kdWN0cy5zbGljZSg4KSwgLi4ucHJvZHVjdHMuc2xpY2UoMCwgOCldO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5jYXRlZ29yeSA9PT0gJ3BsdW1iaW5nJykge1xuICAgICAgICBwcm9kdWN0cyA9IFsuLi5wcm9kdWN0cy5zbGljZSg4KSwgLi4ucHJvZHVjdHMuc2xpY2UoMCwgOCldLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVsYXlSZXNwb25zZSgzNTAsIHByb2R1Y3RzLnNsaWNlKDAsIGxpbWl0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0QnlTbHVnKHNsdWc6IHN0cmluZykge1xuICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0c0RhdGEuZmluZCgoeCkgPT4geC5zbHVnID09PSBzbHVnKTtcblxuICAgIHJldHVybiBwcm9kdWN0ID8gUHJvbWlzZS5yZXNvbHZlKHByb2R1Y3QpIDogUHJvbWlzZS5yZWplY3QoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbGF0ZWRQcm9kdWN0cyhzbHVnOiBzdHJpbmcsIG9wdGlvbnM6IEdldFByb2R1Y3RzT3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgbGltaXQgPSBvcHRpb25zLmxpbWl0IHx8IDg7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHByb2R1Y3RzRGF0YS5zbGljZSgwLCBsaW1pdCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdHNMaXN0KFxuICAgIG9wdGlvbnM6IEdldFByb2R1Y3RzTGlzdE9wdGlvbnMgPSB7fSxcbiAgICBmaWx0ZXJWYWx1ZXM6IEdldFByb2R1Y3RzTGlzdEZpbHRlcnMgPSB7fSxcbik6IFByb21pc2U8SVByb2R1Y3RzTGlzdD4ge1xuICAgIGNvbnN0IGZpbHRlcnMgPSBbXG4gICAgICAgIG5ldyBDYXRlZ29yeUZpbHRlckJ1aWxkZXIoJ2NhdGVnb3J5JywgJ0NhdGVnb3JpZXMnKSxcbiAgICAgICAgbmV3IFJhbmdlRmlsdGVyQnVpbGRlcigncHJpY2UnLCAnUHJpY2UnKSxcbiAgICAgICAgbmV3IENoZWNrRmlsdGVyQnVpbGRlcignYnJhbmQnLCAnQnJhbmQnKSxcbiAgICAgICAgbmV3IFJhZGlvRmlsdGVyQnVpbGRlcignZGlzY291bnQnLCAnRGlzY291bnQnKSxcbiAgICAgICAgbmV3IENvbG9yRmlsdGVyQnVpbGRlcignY29sb3InLCAnQ29sb3InKSxcbiAgICBdO1xuXG4gICAgbGV0IGl0ZW1zID0gcHJvZHVjdHNEYXRhLnNsaWNlKDApO1xuXG4gICAgZmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IGZpbHRlci5tYWtlSXRlbXMoaXRlbXMsIGZpbHRlclZhbHVlc1tmaWx0ZXIuc2x1Z10pKTtcblxuICAgIC8vIENhbGN1bGF0ZSBpdGVtcyBjb3VudCBmb3IgZmlsdGVyIHZhbHVlcy5cbiAgICBmaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4gZmlsdGVyLmNhbGMoZmlsdGVycykpO1xuXG4gICAgLy8gQXBwbHkgZmlsdGVycyB0byBwcm9kdWN0cyBsaXN0LlxuICAgIGl0ZW1zID0gaXRlbXMuZmlsdGVyKFxuICAgICAgICAocHJvZHVjdCkgPT4gZmlsdGVycy5yZWR1Y2U8Ym9vbGVhbj4oKG1yLCBmaWx0ZXIpID0+IG1yICYmIGZpbHRlci50ZXN0KHByb2R1Y3QpLCB0cnVlKSxcbiAgICApO1xuXG4gICAgY29uc3QgcGFnZSA9IG9wdGlvbnMucGFnZSB8fCAxO1xuICAgIGNvbnN0IGxpbWl0ID0gb3B0aW9ucy5saW1pdCB8fCAxMjtcbiAgICBjb25zdCBzb3J0ID0gb3B0aW9ucy5zb3J0IHx8ICdkZWZhdWx0JztcbiAgICBjb25zdCB0b3RhbCA9IGl0ZW1zLmxlbmd0aDtcbiAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbCh0b3RhbCAvIGxpbWl0KTtcbiAgICBjb25zdCBmcm9tID0gKHBhZ2UgLSAxKSAqIGxpbWl0ICsgMTtcbiAgICBjb25zdCB0byA9IE1hdGgubWF4KE1hdGgubWluKHBhZ2UgKiBsaW1pdCwgdG90YWwpLCBmcm9tKTtcblxuICAgIGl0ZW1zID0gaXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoWyduYW1lX2FzYycsICduYW1lX2Rlc2MnXS5pbmNsdWRlcyhzb3J0KSkge1xuICAgICAgICAgICAgaWYgKGEubmFtZSA9PT0gYi5uYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoYS5uYW1lID4gYi5uYW1lID8gMSA6IC0xKSAqIChzb3J0ID09PSAnbmFtZV9hc2MnID8gMSA6IC0xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc3RhcnQgPSAocGFnZSAtIDEpICogbGltaXQ7XG4gICAgY29uc3QgZW5kID0gc3RhcnQgKyBsaW1pdDtcblxuICAgIGl0ZW1zID0gaXRlbXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgICByZXR1cm4gZGVsYXlSZXNwb25zZSgzNTAsIHtcbiAgICAgICAgcGFnZSxcbiAgICAgICAgbGltaXQsXG4gICAgICAgIHNvcnQsXG4gICAgICAgIHRvdGFsLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgZnJvbSxcbiAgICAgICAgdG8sXG4gICAgICAgIGl0ZW1zLFxuICAgICAgICBmaWx0ZXJzOiBmaWx0ZXJzLm1hcCgoeCkgPT4geC5idWlsZCgpKSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZlYXR1cmVkUHJvZHVjdHMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIGdldFByb2R1Y3RzKDAsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGF0ZXN0UHJvZHVjdHMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIGdldFByb2R1Y3RzKDAsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9wUmF0ZWRQcm9kdWN0cyhvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gZ2V0UHJvZHVjdHMoMCwgb3B0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNjb3VudGVkUHJvZHVjdHMob3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIGdldFByb2R1Y3RzKDMsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9wdWxhclByb2R1Y3RzKG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiBnZXRQcm9kdWN0cyg2LCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN1Z2dlc3Rpb25zKHF1ZXJ5OiBzdHJpbmcsIG9wdGlvbnM6IEdldFN1Z2dlc3Rpb25zT3B0aW9ucykge1xuICAgIGNvbnN0IGxpbWl0ID0gb3B0aW9ucy5saW1pdCB8fCA1O1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcbiAgICAgICAgcHJvZHVjdHNEYXRhLmZpbHRlcihcbiAgICAgICAgICAgICh4KSA9PiB4Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgKS5zbGljZSgwLCBsaW1pdCksXG4gICAgKTtcbn1cbiIsImltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wcm9kdWN0JztcbmltcG9ydCB7IElCYXNlRmlsdGVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9maWx0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEZpbHRlckJ1aWxkZXI8VCBleHRlbmRzIElCYXNlRmlsdGVyID0gSUJhc2VGaWx0ZXI+IHtcbiAgICBzbHVnOiBzdHJpbmc7XG5cbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihzbHVnOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNsdWcgPSBzbHVnO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGFic3RyYWN0IHRlc3QocHJvZHVjdDogSVByb2R1Y3QpOiBib29sZWFuO1xuXG4gICAgYWJzdHJhY3QgbWFrZUl0ZW1zKHByb2R1Y3RzOiBJUHJvZHVjdFtdLCB2YWx1ZT86IHN0cmluZyk6IHZvaWQ7XG5cbiAgICBhYnN0cmFjdCBjYWxjKGZpbHRlcnM6IEFic3RyYWN0RmlsdGVyQnVpbGRlcltdKTogdm9pZDtcblxuICAgIGFic3RyYWN0IGJ1aWxkKCk6IFQ7XG59XG4iLCJpbXBvcnQgQWJzdHJhY3RGaWx0ZXJCdWlsZGVyIGZyb20gJy4vYWJzdHJhY3QnO1xuaW1wb3J0IHsgSUNhdGVnb3J5RmlsdGVyLCBJQ2F0ZWdvcnlGaWx0ZXJWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZmlsdGVyJztcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wcm9kdWN0JztcbmltcG9ydCB7IElTaG9wQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2NhdGVnb3J5JztcbmltcG9ydCB7XG4gICAgY2F0ZWdvcmllc0xpc3REYXRhLFxuICAgIGNhdGVnb3JpZXNUcmVlRGF0YSxcbiAgICBwcmVwYXJlQ2F0ZWdvcnksXG59IGZyb20gJy4uL2RhdGFiYXNlL2NhdGVnb3JpZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeUZpbHRlckJ1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdEZpbHRlckJ1aWxkZXI8SUNhdGVnb3J5RmlsdGVyPiB7XG4gICAgdmFsdWU6IElDYXRlZ29yeUZpbHRlclZhbHVlID0gbnVsbDtcblxuICAgIGl0ZW1zOiBJU2hvcENhdGVnb3J5W10gPSBbXTtcblxuICAgIHRlc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldHVybiBwcm9kdWN0LmNhdGVnb3JpZXMucmVkdWNlKChhY2MsIGNhdGVnb3J5KSA9PiAoXG4gICAgICAgIC8vICAgICBhY2MgfHwgY2F0ZWdvcnkuc2x1ZyA9PT0gdGhpcy52YWx1ZVxuICAgICAgICAvLyApLCBmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgbWFrZUl0ZW1zKHByb2R1Y3RzOiBJUHJvZHVjdFtdLCB2YWx1ZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgbnVsbDtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXNMaXN0RGF0YS5maW5kKCh4KSA9PiB4LnNsdWcgPT09IHZhbHVlKTtcbiAgICAgICAgLy8gY29uc3QgY2F0ZWdvcnlIYXNQcm9kdWN0c0ZuID0gKHgpID0+IGNhdGVnb3J5SGFzUHJvZHVjdHMoeCwgcHJvZHVjdHNEYXRhKTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlIYXNQcm9kdWN0c0ZuID0gKCkgPT4gdHJ1ZTtcblxuICAgICAgICBpZiAoY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbcHJlcGFyZUNhdGVnb3J5KGNhdGVnb3J5LCAxKV0ubWFwKCh4KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLngsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHguY2hpbGRyZW4gPT09IHVuZGVmaW5lZCA/IFtdIDogeC5jaGlsZHJlbi5maWx0ZXIoY2F0ZWdvcnlIYXNQcm9kdWN0c0ZuKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBjYXRlZ29yaWVzVHJlZURhdGFcbiAgICAgICAgICAgICAgICAubWFwKCh4KSA9PiBwcmVwYXJlQ2F0ZWdvcnkoeCkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihjYXRlZ29yeUhhc1Byb2R1Y3RzRm4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBjYWxjKCk6IHZvaWQge31cblxuICAgIGJ1aWxkKCk6IElDYXRlZ29yeUZpbHRlciB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgc2x1ZzogdGhpcy5zbHVnLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgaXRlbXM6IHRoaXMuaXRlbXMsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQWJzdHJhY3RGaWx0ZXJCdWlsZGVyIGZyb20gJy4vYWJzdHJhY3QnO1xuaW1wb3J0IHByb2R1Y3RzRGF0YSBmcm9tICcuLi9kYXRhYmFzZS9wcm9kdWN0cyc7XG5pbXBvcnQgeyBJQmFzZUZpbHRlckl0ZW0sIElDaGVja0ZpbHRlciwgSUNoZWNrRmlsdGVyVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2ZpbHRlcic7XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcHJvZHVjdCc7XG5cbmZ1bmN0aW9uIHBhcnNlVmFsdWUodmFsdWU/OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHZhbHVlID8gdmFsdWUuc3BsaXQoJywnKSA6IFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja0ZpbHRlckJ1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdEZpbHRlckJ1aWxkZXI8SUNoZWNrRmlsdGVyPiB7XG4gICAgaXRlbXM6IElCYXNlRmlsdGVySXRlbVtdID0gW107XG5cbiAgICB2YWx1ZTogSUNoZWNrRmlsdGVyVmFsdWUgPSBbXTtcblxuICAgIHRlc3QocHJvZHVjdDogSVByb2R1Y3QpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnJlZHVjZTxib29sZWFuPigocmVzdWx0LCB2YWx1ZSkgPT4gKFxuICAgICAgICAgICAgcmVzdWx0IHx8IHRoaXMuZXh0cmFjdEl0ZW1zKHByb2R1Y3QpLm1hcCgoeCkgPT4geC5zbHVnKS5pbmNsdWRlcyh2YWx1ZSlcbiAgICAgICAgKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIG1ha2VJdGVtcyhwcm9kdWN0czogSVByb2R1Y3RbXSwgdmFsdWU/OiBzdHJpbmcpIHtcbiAgICAgICAgcHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4gdGhpcy5leHRyYWN0SXRlbXMocHJvZHVjdCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1zLmZpbmQoKHgpID0+IHguc2x1ZyA9PT0gaXRlbS5zbHVnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSBwYXJzZVZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBjYWxjKGZpbHRlcnM6IEFic3RyYWN0RmlsdGVyQnVpbGRlcltdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLmZpbHRlcihcbiAgICAgICAgICAgIChwcm9kdWN0KSA9PiBmaWx0ZXJzLnJlZHVjZTxib29sZWFuPihcbiAgICAgICAgICAgICAgICAoaXNNYXRjaGVkLCBmaWx0ZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgaXNNYXRjaGVkICYmIChmaWx0ZXIgPT09IHRoaXMgfHwgZmlsdGVyLnRlc3QocHJvZHVjdCkpXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gcHJvZHVjdHMucmVkdWNlKChhY2MsIHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgICAgICBhY2MgKyAodGhpcy5leHRyYWN0SXRlbXMocHJvZHVjdCkubWFwKCh4KSA9PiB4LnNsdWcpLmluY2x1ZGVzKGl0ZW0uc2x1ZykgPyAxIDogMClcbiAgICAgICAgICAgICksIDApO1xuXG4gICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBjb3VudCB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBidWlsZCgpOiBJQ2hlY2tGaWx0ZXIge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ2NoZWNrJyxcbiAgICAgICAgICAgIHNsdWc6IHRoaXMuc2x1ZyxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIGl0ZW1zOiB0aGlzLml0ZW1zLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZXh0cmFjdEl0ZW1zKHByb2R1Y3Q6IElQcm9kdWN0KTogSUJhc2VGaWx0ZXJJdGVtW10ge1xuICAgICAgICBpZiAodGhpcy5zbHVnID09PSAnYnJhbmQnKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5icmFuZCA/IFt7XG4gICAgICAgICAgICAgICAgc2x1ZzogcHJvZHVjdC5icmFuZC5zbHVnLFxuICAgICAgICAgICAgICAgIG5hbWU6IHByb2R1Y3QuYnJhbmQubmFtZSxcbiAgICAgICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgICAgIH1dIDogW107XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCBBYnN0cmFjdEZpbHRlckJ1aWxkZXIgZnJvbSAnLi9hYnN0cmFjdCc7XG5pbXBvcnQgcHJvZHVjdHNEYXRhIGZyb20gJy4uL2RhdGFiYXNlL3Byb2R1Y3RzJztcbmltcG9ydCB7IElDb2xvckZpbHRlciwgSUNvbG9yRmlsdGVySXRlbSwgSUNvbG9yRmlsdGVyVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2ZpbHRlcic7XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcHJvZHVjdCc7XG5cbmNvbnN0IGNvbG9ycyA9IFtcbiAgICB7IHNsdWc6ICd3aGl0ZScsIGNvbG9yOiAnI2ZmZicgfSxcbiAgICB7IHNsdWc6ICdzaWx2ZXInLCBjb2xvcjogJyNkOWQ5ZDknIH0sXG4gICAgeyBzbHVnOiAnbGlnaHQtZ3JheScsIGNvbG9yOiAnI2IzYjNiMycgfSxcbiAgICB7IHNsdWc6ICdncmF5JywgY29sb3I6ICcjODA4MDgwJyB9LFxuICAgIHsgc2x1ZzogJ2RhcmstZ3JheScsIGNvbG9yOiAnIzY2NicgfSxcbiAgICB7IHNsdWc6ICdjb2FsJywgY29sb3I6ICcjNGQ0ZDRkJyB9LFxuICAgIHsgc2x1ZzogJ2JsYWNrJywgY29sb3I6ICcjMjYyNjI2JyB9LFxuICAgIHsgc2x1ZzogJ3JlZCcsIGNvbG9yOiAnI2ZmNDA0MCcgfSxcbiAgICB7IHNsdWc6ICdvcmFuZ2UnLCBjb2xvcjogJyNmZjgxMjYnIH0sXG4gICAgeyBzbHVnOiAneWVsbG93JywgY29sb3I6ICcjZmZkMzMzJyB9LFxuICAgIHsgc2x1ZzogJ3BlYXItZ3JlZW4nLCBjb2xvcjogJyNiZWNjMWYnIH0sXG4gICAgeyBzbHVnOiAnZ3JlZW4nLCBjb2xvcjogJyM4ZmNjMTQnIH0sXG4gICAgeyBzbHVnOiAnZW1lcmFsZCcsIGNvbG9yOiAnIzQ3Y2M1ZScgfSxcbiAgICB7IHNsdWc6ICdzaGFtcm9jaycsIGNvbG9yOiAnIzQ3Y2NhMCcgfSxcbiAgICB7IHNsdWc6ICdzaGFrZXNwZWFyZScsIGNvbG9yOiAnIzQ3Y2NjYycgfSxcbiAgICB7IHNsdWc6ICdibHVlJywgY29sb3I6ICcjNDBiZmZmJyB9LFxuICAgIHsgc2x1ZzogJ2RhcmstYmx1ZScsIGNvbG9yOiAnIzNkNmRjYycgfSxcbiAgICB7IHNsdWc6ICd2aW9sZXQnLCBjb2xvcjogJyM3NzY2Y2MnIH0sXG4gICAgeyBzbHVnOiAncHVycGxlJywgY29sb3I6ICcjYjg1MmNjJyB9LFxuICAgIHsgc2x1ZzogJ2NlcmlzZScsIGNvbG9yOiAnI2U1Mzk4MScgfSxcbl07XG5cbmZ1bmN0aW9uIGdldENvbG9yQ29kZShzbHVnOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNvbG9ycy5maW5kKCh4KSA9PiB4LnNsdWcgPT09IHNsdWcpO1xuXG4gICAgcmV0dXJuIHJlc3VsdCA/IHJlc3VsdC5jb2xvciA6ICcjMDAwJztcbn1cblxuZnVuY3Rpb24gcGFyc2VWYWx1ZSh2YWx1ZT86IHN0cmluZyk6IElDb2xvckZpbHRlclZhbHVlIHtcbiAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZS5zcGxpdCgnLCcpIDogW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yRmlsdGVyQnVpbGRlciBleHRlbmRzIEFic3RyYWN0RmlsdGVyQnVpbGRlcjxJQ29sb3JGaWx0ZXI+IHtcbiAgICBpdGVtczogSUNvbG9yRmlsdGVySXRlbVtdID0gW107XG5cbiAgICB2YWx1ZTogSUNvbG9yRmlsdGVyVmFsdWUgPSBbXTtcblxuICAgIHRlc3QocHJvZHVjdDogSVByb2R1Y3QpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLnJlZHVjZTxib29sZWFuPigocmVzdWx0LCB2YWx1ZSkgPT4gKFxuICAgICAgICAgICAgcmVzdWx0IHx8IHRoaXMuZXh0cmFjdEl0ZW1zKHByb2R1Y3QpLm1hcCgoeCkgPT4geC5zbHVnKS5pbmNsdWRlcyh2YWx1ZSlcbiAgICAgICAgKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIG1ha2VJdGVtcyhwcm9kdWN0czogSVByb2R1Y3RbXSwgdmFsdWU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgcHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4gdGhpcy5leHRyYWN0SXRlbXMocHJvZHVjdCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLml0ZW1zLmZpbmQoKHgpID0+IHguc2x1ZyA9PT0gaXRlbS5zbHVnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSBwYXJzZVZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBjYWxjKGZpbHRlcnM6IEFic3RyYWN0RmlsdGVyQnVpbGRlcltdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gcHJvZHVjdHNEYXRhLmZpbHRlcihcbiAgICAgICAgICAgIChwcm9kdWN0KSA9PiBmaWx0ZXJzLnJlZHVjZTxib29sZWFuPihcbiAgICAgICAgICAgICAgICAoaXNNYXRjaGVkLCBmaWx0ZXIpID0+IGlzTWF0Y2hlZCAmJiAoZmlsdGVyID09PSB0aGlzIHx8IGZpbHRlci50ZXN0KHByb2R1Y3QpKSxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gcHJvZHVjdHMucmVkdWNlKChhY2MsIHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMuZXh0cmFjdEl0ZW1zKHByb2R1Y3QpLm1hcCgoeCkgPT4geC5zbHVnKS5pbmNsdWRlcyhpdGVtLnNsdWcpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjYyArIChtYXRjaCA/IDEgOiAwKTtcbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBjb3VudCB9O1xuICAgICAgICB9KS5zb3J0KChhLCBiKSA9PiAoXG4gICAgICAgICAgICBjb2xvcnMuZmluZEluZGV4KCh4KSA9PiB4LnNsdWcgPT09IGEuc2x1ZykgLSBjb2xvcnMuZmluZEluZGV4KCh4KSA9PiB4LnNsdWcgPT09IGIuc2x1ZylcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgYnVpbGQoKTogSUNvbG9yRmlsdGVyIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdjb2xvcicsXG4gICAgICAgICAgICBzbHVnOiB0aGlzLnNsdWcsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBpdGVtczogdGhpcy5pdGVtcyxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGV4dHJhY3RJdGVtcyhwcm9kdWN0OiBJUHJvZHVjdCk6IElDb2xvckZpbHRlckl0ZW1bXSB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IHByb2R1Y3QuYXR0cmlidXRlcy5maW5kKCh4KSA9PiB4LnNsdWcgPT09IHRoaXMuc2x1Zyk7XG5cbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGUudmFsdWVzLm1hcCgodmFsdWUpID0+ICh7XG4gICAgICAgICAgICBzbHVnOiB2YWx1ZS5zbHVnLFxuICAgICAgICAgICAgbmFtZTogdmFsdWUubmFtZSxcbiAgICAgICAgICAgIGNvbG9yOiBnZXRDb2xvckNvZGUodmFsdWUuc2x1ZyksXG4gICAgICAgICAgICBjb3VudDogMCxcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBBYnN0cmFjdEZpbHRlckJ1aWxkZXIgZnJvbSAnLi9hYnN0cmFjdCc7XG5pbXBvcnQgcHJvZHVjdHNEYXRhIGZyb20gJy4uL2RhdGFiYXNlL3Byb2R1Y3RzJztcbmltcG9ydCB7IElCYXNlRmlsdGVySXRlbSwgSVJhZGlvRmlsdGVyLCBJUmFkaW9GaWx0ZXJWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZmlsdGVyJztcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9GaWx0ZXJCdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RGaWx0ZXJCdWlsZGVyIHtcbiAgICBpdGVtczogSUJhc2VGaWx0ZXJJdGVtW10gPSBbXTtcblxuICAgIHZhbHVlOiBJUmFkaW9GaWx0ZXJWYWx1ZSA9IG51bGw7XG5cbiAgICB0ZXN0KHByb2R1Y3Q6IElQcm9kdWN0KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlICE9PSBudWxsICYmIHRoaXMuZXh0cmFjdEl0ZW1zKHByb2R1Y3QpLm1hcCgoeCkgPT4geC5zbHVnKS5pbmNsdWRlcyh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBtYWtlSXRlbXMocHJvZHVjdHM6IElQcm9kdWN0W10sIHZhbHVlPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHRoaXMuZXh0cmFjdEl0ZW1zKHByb2R1Y3QpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pdGVtcy5maW5kKCh4KSA9PiB4LnNsdWcgPT09IGl0ZW0uc2x1ZykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgdGhpcy5pdGVtc1swXS5zbHVnO1xuICAgIH1cblxuICAgIGNhbGMoZmlsdGVyczogQWJzdHJhY3RGaWx0ZXJCdWlsZGVyW10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBwcm9kdWN0c0RhdGEuZmlsdGVyKFxuICAgICAgICAgICAgKHByb2R1Y3QpID0+IGZpbHRlcnMucmVkdWNlPGJvb2xlYW4+KFxuICAgICAgICAgICAgICAgIChpc01hdGNoZWQsIGZpbHRlcikgPT4gaXNNYXRjaGVkICYmIChmaWx0ZXIgPT09IHRoaXMgfHwgZmlsdGVyLnRlc3QocHJvZHVjdCkpLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICApLFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSBwcm9kdWN0cy5yZWR1Y2UoKGFjYywgcHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5leHRyYWN0SXRlbXMocHJvZHVjdCkubWFwKCh4KSA9PiB4LnNsdWcpLmluY2x1ZGVzKGl0ZW0uc2x1Zyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjICsgKG1hdGNoID8gMSA6IDApO1xuICAgICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGNvdW50IH07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJ1aWxkKCk6IElSYWRpb0ZpbHRlciB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgICAgICAgc2x1ZzogdGhpcy5zbHVnLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgaXRlbXM6IHRoaXMuaXRlbXMsXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBleHRyYWN0SXRlbXMocHJvZHVjdDogSVByb2R1Y3QpOiBJQmFzZUZpbHRlckl0ZW1bXSB7XG4gICAgICAgIGlmICh0aGlzLnNsdWcgPT09ICdkaXNjb3VudCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICAgICAgICAgIHsgc2x1ZzogJ2FueScsIG5hbWU6ICdBbnknLCBjb3VudDogMCB9LFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgaWYgKHByb2R1Y3QuY29tcGFyZUF0UHJpY2UpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHsgc2x1ZzogJ3llcycsIG5hbWU6ICdZZXMnLCBjb3VudDogMCB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7IHNsdWc6ICdubycsIG5hbWU6ICdObycsIGNvdW50OiAwIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgIH1cbn1cbiIsImltcG9ydCBBYnN0cmFjdEZpbHRlckJ1aWxkZXIgZnJvbSAnLi9hYnN0cmFjdCc7XG5pbXBvcnQgcHJvZHVjdHNEYXRhIGZyb20gJy4uL2RhdGFiYXNlL3Byb2R1Y3RzJztcbmltcG9ydCB7IElSYW5nZUZpbHRlciwgSVJhbmdlRmlsdGVyVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2ZpbHRlcic7XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcHJvZHVjdCc7XG5cbmZ1bmN0aW9uIHBhcnNlVmFsdWUodmFsdWU6IHN0cmluZyk6IElSYW5nZUZpbHRlclZhbHVlIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoJy0nKS5tYXAoKHgpID0+IHBhcnNlRmxvYXQoeCkpIGFzIElSYW5nZUZpbHRlclZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5nZUZpbHRlckJ1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdEZpbHRlckJ1aWxkZXI8SVJhbmdlRmlsdGVyPiB7XG4gICAgbWluOiBudW1iZXIgPSAwO1xuXG4gICAgbWF4OiBudW1iZXIgPSAwO1xuXG4gICAgdmFsdWU6IElSYW5nZUZpbHRlclZhbHVlID0gWzAsIDBdO1xuXG4gICAgdGVzdChwcm9kdWN0OiBJUHJvZHVjdCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXh0cmFjdFZhbHVlKHByb2R1Y3QpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZSA+PSB0aGlzLnZhbHVlWzBdICYmIHZhbHVlIDw9IHRoaXMudmFsdWVbMV07XG4gICAgfVxuXG4gICAgbWFrZUl0ZW1zKHByb2R1Y3RzOiBJUHJvZHVjdFtdLCB2YWx1ZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLm1heCA9IHByb2R1Y3RzRGF0YS5yZWR1Y2UoXG4gICAgICAgICAgICAoYWNjLCBwcm9kdWN0KSA9PiBNYXRoLm1heChhY2MsIHRoaXMuZXh0cmFjdFZhbHVlKHByb2R1Y3QpKSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubWluID0gcHJvZHVjdHNEYXRhLnJlZHVjZShcbiAgICAgICAgICAgIChhY2MsIHByb2R1Y3QpID0+IE1hdGgubWluKGFjYywgdGhpcy5leHRyYWN0VmFsdWUocHJvZHVjdCkpLFxuICAgICAgICAgICAgdGhpcy5tYXgsXG4gICAgICAgICk7XG5cbiAgICAgICAgLyoqIENhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBkaWdpdHMgZm9yIHJvdW5kaW5nLiAqL1xuICAgICAgICBsZXQgZGlnaXQgPSBNYXRoLm1heChNYXRoLmNlaWwodGhpcy5tYXgpLnRvU3RyaW5nKCkubGVuZ3RoIC0gMiwgMSk7XG5cbiAgICAgICAgZGlnaXQgPSAxMCAqKiBkaWdpdDtcblxuICAgICAgICB0aGlzLm1heCA9IE1hdGguY2VpbCh0aGlzLm1heCAvIGRpZ2l0KSAqIGRpZ2l0O1xuICAgICAgICB0aGlzLm1pbiA9IE1hdGguZmxvb3IodGhpcy5taW4gLyBkaWdpdCkgKiBkaWdpdDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFt0aGlzLm1pbiwgdGhpcy5tYXhdO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHBhcnNlVmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBjYWxjKCkgeyB9XG5cbiAgICBleHRyYWN0VmFsdWUocHJvZHVjdDogSVByb2R1Y3QpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5zbHVnID09PSAncHJpY2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5wcmljZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgfVxuXG4gICAgYnVpbGQoKTogSVJhbmdlRmlsdGVyIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdyYW5nZScsXG4gICAgICAgICAgICBzbHVnOiB0aGlzLnNsdWcsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBtaW46IHRoaXMubWluLFxuICAgICAgICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wcm9kdWN0JztcbmltcG9ydCB7IElDYXRlZ29yeSB9IGZyb20gJy4uL2ludGVyZmFjZXMvY2F0ZWdvcnknO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUlkR2VuZXJhdG9yKCk6ICgpID0+IG51bWJlciB7XG4gICAgbGV0IGxhc3RJZCA9IDA7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBsYXN0SWQgKz0gMTtcblxuICAgICAgICByZXR1cm4gbGFzdElkO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lVG9TbHVnKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0vLCAnLScpLnJlcGxhY2UoLy0rLywgJy0nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhdGVnb3J5SGFzUHJvZHVjdHMoY2F0ZWdvcnk6IElDYXRlZ29yeSwgcHJvZHVjdHM6IElQcm9kdWN0W10pOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiAoXG4gICAgICAgIHByb2R1Y3QuY2F0ZWdvcmllcy5maW5kSW5kZXgoKHgpID0+IHguc2x1ZyA9PT0gY2F0ZWdvcnkuc2x1ZykgIT09IC0xXG4gICAgKSkubGVuZ3RoID4gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5UmVzcG9uc2U8VD4oZGVsYXk6IG51bWJlciwgcmVzcG9uc2U6IFQpOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHJlc3BvbnNlKSwgcHJvY2Vzcy5icm93c2VyID8gZGVsYXkgOiAwKTtcbiAgICB9KTtcbn1cbiIsIi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgZW5NZXNzYWdlcyBmcm9tICcuL21lc3NhZ2VzL2VuLmpzb24nO1xuaW1wb3J0IHRoTWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcy90aC5qc29uJztcbmltcG9ydCB7IElMYW5ndWFnZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvbGFuZ3VhZ2UnO1xuXG5jb25zdCBsYW5ndWFnZXM6IElMYW5ndWFnZVtdID0gW1xuICAgIHtcbiAgICAgICAgbG9jYWxlOiAnZW4nLFxuICAgICAgICBjb2RlOiAnRU4nLFxuICAgICAgICBuYW1lOiAnRW5nbGlzaCcsXG4gICAgICAgIGljb246ICcvaW1hZ2VzL2xhbmd1YWdlcy91ay5wbmcnLFxuICAgICAgICBkaXJlY3Rpb246ICdsdHInLFxuICAgICAgICBtZXNzYWdlczogZW5NZXNzYWdlcyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbG9jYWxlOiAndGgnLFxuICAgICAgICBjb2RlOiAnVEgnLFxuICAgICAgICBuYW1lOiAnVGhhaWxhbmQnLFxuICAgICAgICBpY29uOiAnL2ltYWdlcy9sYW5ndWFnZXMvdGhhaWxhbmQucG5nJyxcbiAgICAgICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgICAgICAgbWVzc2FnZXM6IHRoTWVzc2FnZXMsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGxhbmd1YWdlcztcbiIsIi8vIHJlYWN0XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyB0aGlyZC1wYXJ0eVxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XG5cbi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgSG9tZVBhZ2VUd28sIHsgSW5pdERhdGEgfSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvSG9tZVBhZ2VUd28nO1xuaW1wb3J0IHNob3BBcGkgZnJvbSAnLi4vYXBpL3Nob3AnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VQcm9wcyB7XG4gICAgaW5pdERhdGE/OiBJbml0RGF0YTtcbn1cblxuXG4vLyBub2luc3BlY3Rpb24gSlNVbnVzZWRHbG9iYWxTeW1ib2xzXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHM8UGFnZVByb3BzPiA9IGFzeW5jICgpID0+ICh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgaW5pdERhdGE6IHtcbiAgICAgICAgICAgIGZlYXR1cmVkUHJvZHVjdHM6IGF3YWl0IHNob3BBcGkuZ2V0UG9wdWxhclByb2R1Y3RzKHsgbGltaXQ6IDEyIH0pLFxuICAgICAgICAgICAgYmVzdHNlbGxlcnM6IGF3YWl0IHNob3BBcGkuZ2V0UG9wdWxhclByb2R1Y3RzKHsgbGltaXQ6IDcgfSksXG4gICAgICAgICAgICBsYXRlc3RQcm9kdWN0czogYXdhaXQgc2hvcEFwaS5nZXRMYXRlc3RQcm9kdWN0cyh7IGxpbWl0OiA4IH0pLFxuICAgICAgICAgICAgcHJvZHVjdENvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVG9wIFJhdGVkIFByb2R1Y3RzJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IGF3YWl0IHNob3BBcGkuZ2V0VG9wUmF0ZWRQcm9kdWN0cyh7IGxpbWl0OiAzIH0pLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NwZWNpYWwgT2ZmZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IGF3YWl0IHNob3BBcGkuZ2V0RGlzY291bnRlZFByb2R1Y3RzKHsgbGltaXQ6IDMgfSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQmVzdHNlbGxlcnMnLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czogYXdhaXQgc2hvcEFwaS5nZXRQb3B1bGFyUHJvZHVjdHMoeyBsaW1pdDogMyB9KSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cbmZ1bmN0aW9uIFBhZ2UocHJvcHM6IFBhZ2VQcm9wcykge1xuICAgIGNvbnN0IHsgaW5pdERhdGEgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIDxIb21lUGFnZVR3byBpbml0RGF0YT17aW5pdERhdGF9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIiwiZXhwb3J0IHR5cGUgU3Vic2NyaXB0aW9uRm4gPSAoYXJlYTogSFRNTEVsZW1lbnQgfCBudWxsKSA9PiB2b2lkO1xuXG5jbGFzcyBEZXBhcnRtZW50c1NlcnZpY2Uge1xuICAgIHByaXZhdGUgYXJlYVN0YXRlOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBzdWJzY3JpYmVyOiBTdWJzY3JpcHRpb25GbiB8IG51bGwgPSBudWxsO1xuXG4gICAgc2V0IGFyZWEodmFsdWU6IEhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5hcmVhU3RhdGUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFyZWFTdGF0ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcih0aGlzLmFyZWEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGFyZWEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFyZWFTdGF0ZTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUoZm46IFN1YnNjcmlwdGlvbkZuKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlciA9IGZuO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXIgPSBudWxsO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuY29uc3QgZGVwYXJ0bWVudHNTZXJ2aWNlID0gbmV3IERlcGFydG1lbnRzU2VydmljZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkZXBhcnRtZW50c1NlcnZpY2U7XG4iLCJpbXBvcnQge1xuICAgIHVzZUNhbGxiYWNrLFxuICAgIHVzZUVmZmVjdCxcbiAgICB1c2VNZW1vLCB1c2VSZWYsXG4gICAgdXNlU3RhdGUsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wcm9kdWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lZGlhKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgbWVkaWEgPSB1c2VNZW1vKCgpID0+IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KSwgW3F1ZXJ5XSk7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShtZWRpYS5tYXRjaGVzKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlTWVkaWEgPSAoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdGF0ZShtZWRpYS5tYXRjaGVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobWVkaWEuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgbWVkaWEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgb25DaGFuZ2VNZWRpYSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub2luc3BlY3Rpb24gSlNEZXByZWNhdGVkU3ltYm9sc1xuICAgICAgICAgICAgbWVkaWEuYWRkTGlzdGVuZXIob25DaGFuZ2VNZWRpYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1lZGlhLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBtZWRpYS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbkNoYW5nZU1lZGlhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTRGVwcmVjYXRlZFN5bWJvbHNcbiAgICAgICAgICAgICAgICBtZWRpYS5yZW1vdmVMaXN0ZW5lcihvbkNoYW5nZU1lZGlhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBbbWVkaWFdKTtcblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IHR5cGUgRGVmZXJyZWREYXRhU291cmNlPFQ+ID0gKCkgPT4gUHJvbWlzZTxUPjtcbmV4cG9ydCB0eXBlIERlZmVycmVkRGF0YVN0YXRlPFQ+ID0geyBpc0xvYWRpbmc6IGJvb2xlYW4sIGRhdGE6IFQgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZURlZmVycmVkRGF0YTxUPihcbiAgICBzb3VyY2U6IERlZmVycmVkRGF0YVNvdXJjZTxUPixcbiAgICBkZWZhdWx0RGF0YTogVCxcbiAgICBpbml0aWFsRGF0YT86IFQsXG4gICAgZGVwczogYW55W10gPSBbXSxcbik6IERlZmVycmVkRGF0YVN0YXRlPFQ+IHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XG4gICAgICAgIGlzTG9hZGluZzogaW5pdGlhbERhdGEgPT09IHVuZGVmaW5lZCxcbiAgICAgICAgZGF0YTogaW5pdGlhbERhdGEgfHwgZGVmYXVsdERhdGEsXG4gICAgfSkpO1xuICAgIGNvbnN0IG1lbW9pemVkU291cmNlID0gdXNlQ2FsbGJhY2soc291cmNlLCBkZXBzKTtcbiAgICBjb25zdCBza2lwTmV4dFJlZiA9IHVzZVJlZihpbml0aWFsRGF0YSAhPT0gdW5kZWZpbmVkKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChza2lwTmV4dFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBza2lwTmV4dFJlZi5jdXJyZW50ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYW5jZWxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHNldFN0YXRlKChjdXJTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjdXJTdGF0ZS5pc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJTdGF0ZSwgaXNMb2FkaW5nOiB0cnVlIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjdXJTdGF0ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVtb2l6ZWRTb3VyY2UoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFN0YXRlKCgpID0+ICh7IGlzTG9hZGluZzogZmFsc2UsIGRhdGEgfSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgIH0sIFttZW1vaXplZFNvdXJjZV0pO1xuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgdHlwZSBQcm9kdWN0VGFiID0geyBpZDogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfTtcbmV4cG9ydCB0eXBlIFdpdGhDdXJyZW50PFQ+ID0gVCAmIHtjdXJyZW50OiBib29sZWFufTtcbmV4cG9ydCB0eXBlIFByb2R1Y3RUYWJTb3VyY2U8VCBleHRlbmRzIFByb2R1Y3RUYWI+ID0gKHRhYjogVCkgPT4gUHJvbWlzZTxJUHJvZHVjdFtdPjtcbmV4cG9ydCB0eXBlIFByb2R1Y3RUYWJzU3RhdGU8VCBleHRlbmRzIFByb2R1Y3RUYWI+ID0ge1xuICAgIHRhYnM6IFdpdGhDdXJyZW50PFQ+W107XG4gICAgaGFuZGxlVGFiQ2hhbmdlOiAodGFiOiBXaXRoQ3VycmVudDxUPikgPT4gdm9pZDtcbn0gJiBEZWZlcnJlZERhdGFTdGF0ZTxJUHJvZHVjdFtdPjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVByb2R1Y3RUYWJzPFQgZXh0ZW5kcyBQcm9kdWN0VGFiPihcbiAgICB0YWJzOiBUW10sXG4gICAgcHJvZHVjdHNTb3VyY2U6IFByb2R1Y3RUYWJTb3VyY2U8VD4sXG4gICAgaW5pdGlhbERhdGE/OiBJUHJvZHVjdFtdLFxuKTogUHJvZHVjdFRhYnNTdGF0ZTxUPiB7XG4gICAgY29uc3QgW2N1cnJlbnRUYWJJZCwgc2V0Q3VycmVudFRhYklkXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IG1lbW9pemVkVGFicyA9IHVzZU1lbW8oKCkgPT4gKFxuICAgICAgICB0YWJzLm1hcCgodGFiKSA9PiAoe1xuICAgICAgICAgICAgLi4udGFiLFxuICAgICAgICAgICAgY3VycmVudDogY3VycmVudFRhYklkID09PSB0YWIuaWQsXG4gICAgICAgIH0pKVxuICAgICksIFt0YWJzLCBjdXJyZW50VGFiSWRdKTtcbiAgICBjb25zdCBjdXJyZW50VGFiID0gbWVtb2l6ZWRUYWJzLmZpbmQoKHgpID0+IHguY3VycmVudCk7XG4gICAgY29uc3QgcHJvZHVjdHMgPSB1c2VEZWZlcnJlZERhdGEoKCkgPT4gKFxuICAgICAgICBjdXJyZW50VGFiID8gcHJvZHVjdHNTb3VyY2UoY3VycmVudFRhYikgOiBQcm9taXNlLnJlc29sdmUoW10pXG4gICAgKSwgW10sIGluaXRpYWxEYXRhLCBbY3VycmVudFRhYl0pO1xuICAgIGNvbnN0IGhhbmRsZVRhYkNoYW5nZSA9IHVzZUNhbGxiYWNrKCh0YWIpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFRhYklkKHRhYi5pZCk7XG4gICAgfSwgW3NldEN1cnJlbnRUYWJJZF0pO1xuXG4gICAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gKHtcbiAgICAgICAgdGFiczogbWVtb2l6ZWRUYWJzLFxuICAgICAgICBoYW5kbGVUYWJDaGFuZ2UsXG4gICAgICAgIC4uLnByb2R1Y3RzLFxuICAgIH0pLCBbbWVtb2l6ZWRUYWJzLCBoYW5kbGVUYWJDaGFuZ2UsIHByb2R1Y3RzXSk7XG59XG5cbmV4cG9ydCB0eXBlIFByb2R1Y3RDb2x1bW4gPSB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBzb3VyY2U6IERlZmVycmVkRGF0YVNvdXJjZTxJUHJvZHVjdFtdPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm9kdWN0Q29sdW1ucyhjb2x1bW5zOiBQcm9kdWN0Q29sdW1uW10pIHtcbiAgICBjb25zdCBwcm9kdWN0cyA9IHVzZURlZmVycmVkRGF0YSgoKSA9PiAoXG4gICAgICAgIFByb21pc2UuYWxsKGNvbHVtbnMubWFwKChjb2x1bW4pID0+IGNvbHVtbi5zb3VyY2UoKSkpXG4gICAgKSwgW10sIHVuZGVmaW5lZCwgW2NvbHVtbnNdKTtcblxuICAgIHJldHVybiB1c2VNZW1vKCgpID0+IChcbiAgICAgICAgY29sdW1ucy5tYXAoKGNvbHVtbiwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICAuLi5jb2x1bW4sXG4gICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHMuZGF0YVtpbmRleF0gfHwgW10sXG4gICAgICAgIH0pKVxuICAgICksIFtjb2x1bW5zLCBwcm9kdWN0c10pO1xufVxuIiwiaW1wb3J0IHsgSUxpbmtQcm9wcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvbWVudXMvbGluay1wcm9wcyc7XG5pbXBvcnQgeyBJQ2F0ZWdvcnksIElTaG9wQ2F0ZWdvcnkgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2NhdGVnb3J5JztcblxuY29uc3QgdXJsID0ge1xuICAgIGhvbWU6ICgpOiBJTGlua1Byb3BzID0+ICh7XG4gICAgICAgIGhyZWY6ICcvJyxcbiAgICB9KSxcblxuICAgIGNhdGFsb2c6ICgpID0+ICcvc2hvcC9jYXRhbG9nJyxcblxuICAgIGNhcnQ6ICgpOiBJTGlua1Byb3BzID0+ICh7XG4gICAgICAgIGhyZWY6ICcvc2hvcC9jYXJ0JyxcbiAgICB9KSxcblxuICAgIGNoZWNrb3V0OiAoKTogSUxpbmtQcm9wcyA9PiAoe1xuICAgICAgICBocmVmOiAnL3Nob3AvY2hlY2tvdXQnLFxuICAgIH0pLFxuXG4gICAgY2F0ZWdvcnk6IChjYXRlZ29yeTogSUNhdGVnb3J5KTogSUxpbmtQcm9wcyA9PiB7XG4gICAgICAgIGlmIChjYXRlZ29yeS50eXBlID09PSAnc2hvcCcpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmwuc2hvcENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2F0ZWdvcnkudHlwZSA9PT0gJ2Jsb2cnKSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsLmJsb2dDYXRlZ29yeSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgRXJyb3IoJ1VuZGVmaW5lZCBjYXRlZ29yeSB0eXBlJyk7XG4gICAgfSxcblxuICAgIHNob3BDYXRlZ29yeTogKGNhdGVnb3J5OiBJU2hvcENhdGVnb3J5KTogSUxpbmtQcm9wcyA9PiAoe1xuICAgICAgICBocmVmOiAnL3Nob3AvY2F0YWxvZy9bc2x1Z10nLFxuICAgICAgICBhczogYC9zaG9wL2NhdGFsb2cvJHtjYXRlZ29yeS5zbHVnfWAsXG4gICAgfSksXG5cbiAgICBwcm9kdWN0OiAocHJvZHVjdDogeyBzbHVnOiBzdHJpbmcgfSk6IElMaW5rUHJvcHMgPT4gKHtcbiAgICAgICAgaHJlZjogJy9zaG9wL3Byb2R1Y3RzL1tzbHVnXScsXG4gICAgICAgIGFzOiBgL3Nob3AvcHJvZHVjdHMvJHtwcm9kdWN0LnNsdWd9YCxcbiAgICB9KSxcblxuICAgIHdpc2hsaXN0OiAoKTogSUxpbmtQcm9wcyA9PiAoe1xuICAgICAgICBocmVmOiAnL3Nob3Avd2lzaGxpc3QnLFxuICAgIH0pLFxuXG4gICAgYmxvZ0NhdGVnb3J5OiAoKTogSUxpbmtQcm9wcyA9PiAoe1xuICAgICAgICBocmVmOiAnL2Jsb2cvY2F0ZWdvcnktY2xhc3NpYycsXG4gICAgfSksXG5cbiAgICBibG9nUG9zdDogKCk6IElMaW5rUHJvcHMgPT4gKHtcbiAgICAgICAgaHJlZjogJy9ibG9nL3Bvc3QtY2xhc3NpYycsXG4gICAgfSksXG5cbiAgICBhY2NvdW50U2lnbkluOiAoKTogSUxpbmtQcm9wcyA9PiAoe1xuICAgICAgICBocmVmOiAnL2FjY291bnQvbG9naW4nLFxuICAgIH0pLFxuXG4gICAgYWNjb3VudFNpZ25VcDogKCk6IElMaW5rUHJvcHMgPT4gKHtcbiAgICAgICAgaHJlZjogJy9hY2NvdW50L2xvZ2luJyxcbiAgICB9KSxcblxuICAgIGFjY291bnRTaWduT3V0OiAoKTogSUxpbmtQcm9wcyA9PiAoe1xuICAgICAgICBocmVmOiAnL2FjY291bnQvbG9naW4nLFxuICAgIH0pLFxuXG4gICAgYWNjb3VudERhc2hib2FyZDogKCk6IElMaW5rUHJvcHMgPT4gKHtcbiAgICAgICAgaHJlZjogJy9hY2NvdW50L2Rhc2hib2FyZCcsXG4gICAgfSksXG5cbiAgICBhY2NvdW50UHJvZmlsZTogKCk6IElMaW5rUHJvcHMgPT4gKHtcbiAgICAgICAgaHJlZjogJy9hY2NvdW50L3Byb2ZpbGUnLFxuICAgIH0pLFxuXG4gICAgYWNjb3VudE9yZGVyczogKCk6IElMaW5rUHJvcHMgPT4gKHtcbiAgICAgICAgaHJlZjogJy9hY2NvdW50L29yZGVycycsXG4gICAgfSksXG5cbiAgICBhY2NvdW50T3JkZXI6IChvcmRlcjogeyBpZDogbnVtYmVyIH0pOiBJTGlua1Byb3BzID0+ICh7XG4gICAgICAgIGhyZWY6ICcvYWNjb3VudC9vcmRlcnMvW29yZGVySWRdJyxcbiAgICAgICAgYXM6IGAvYWNjb3VudC9vcmRlcnMvJHtvcmRlci5pZH1gLFxuICAgIH0pLFxuXG4gICAgYWNjb3VudEFkZHJlc3NlczogKCk6IElMaW5rUHJvcHMgPT4gKHtcbiAgICAgICAgaHJlZjogJy9hY2NvdW50L2FkZHJlc3NlcycsXG4gICAgICAgIGFzOiAnL2FjY291bnQvYWRkcmVzc2VzJyxcbiAgICB9KSxcblxuICAgIGFjY291bnRBZGRyZXNzOiAoYWRkcmVzczogeyBpZDogbnVtYmVyIH0pOiBJTGlua1Byb3BzID0+ICh7XG4gICAgICAgIGhyZWY6ICcvYWNjb3VudC9hZGRyZXNzZXMvW2FkZHJlc3NJZF0nLFxuICAgICAgICBhczogYC9hY2NvdW50L2FkZHJlc3Nlcy8ke2FkZHJlc3MuaWR9YCxcbiAgICB9KSxcblxuICAgIGFjY291bnRQYXNzd29yZDogKCk6IElMaW5rUHJvcHMgPT4gKHtcbiAgICAgICAgaHJlZjogJy9hY2NvdW50L3Bhc3N3b3JkJyxcbiAgICAgICAgYXM6ICcvYWNjb3VudC9wYXNzd29yZCcsXG4gICAgfSksXG5cbiAgICBjb250YWN0czogKCk6IElMaW5rUHJvcHMgPT4gKHtcbiAgICAgICAgaHJlZjogJy9zaXRlL2NvbnRhY3QtdXMnLFxuICAgIH0pLFxuXG4gICAgdGVybXM6ICgpOiBJTGlua1Byb3BzID0+ICh7XG4gICAgICAgIGhyZWY6ICcvc2l0ZS90ZXJtcycsXG4gICAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmw7XG4iLCJpbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcHJvZHVjdCc7XG5pbXBvcnQgeyBDYXJ0SXRlbU9wdGlvbiB9IGZyb20gJy4vY2FydFR5cGVzJztcbmltcG9ydCB7IEFwcEFjdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IENBUlRfQUREX0lURU0gPSAnQ0FSVF9BRERfSVRFTSc7XG5leHBvcnQgY29uc3QgQ0FSVF9SRU1PVkVfSVRFTSA9ICdDQVJUX1JFTU9WRV9JVEVNJztcbmV4cG9ydCBjb25zdCBDQVJUX1VQREFURV9RVUFOVElUSUVTID0gJ0NBUlRfVVBEQVRFX1FVQU5USVRJRVMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcnRJdGVtUXVhbnRpdHkge1xuICAgIGl0ZW1JZDogbnVtYmVyO1xuICAgIHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FydEFkZEl0ZW1BY3Rpb24ge1xuICAgIHR5cGU6IHR5cGVvZiBDQVJUX0FERF9JVEVNO1xuICAgIHByb2R1Y3Q6IElQcm9kdWN0O1xuICAgIG9wdGlvbnM6IENhcnRJdGVtT3B0aW9uW107XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJ0UmVtb3ZlSXRlbUFjdGlvbiB7XG4gICAgdHlwZTogdHlwZW9mIENBUlRfUkVNT1ZFX0lURU07XG4gICAgaXRlbUlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FydFVwZGF0ZVF1YW50aXRpZXNBY3Rpb24ge1xuICAgIHR5cGU6IHR5cGVvZiBDQVJUX1VQREFURV9RVUFOVElUSUVTO1xuICAgIHF1YW50aXRpZXM6IENhcnRJdGVtUXVhbnRpdHlbXTtcbn1cblxuZXhwb3J0IHR5cGUgQ2FydEFjdGlvbiA9XG4gICAgQ2FydEFkZEl0ZW1BY3Rpb24gfFxuICAgIENhcnRSZW1vdmVJdGVtQWN0aW9uIHxcbiAgICBDYXJ0VXBkYXRlUXVhbnRpdGllc0FjdGlvbjtcblxuZXhwb3J0IHR5cGUgQ2FydFRodW5rQWN0aW9uPFQgPSB2b2lkPiA9IEFwcEFjdGlvbjxDYXJ0QWN0aW9uLCBUPjtcbiIsIi8vIHRoaXJkLXBhcnR5XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuLy8gYXBwbGljYXRpb25cbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wcm9kdWN0JztcbmltcG9ydCB7IENhcnRJdGVtT3B0aW9uIH0gZnJvbSAnLi9jYXJ0VHlwZXMnO1xuaW1wb3J0IHtcbiAgICBDQVJUX0FERF9JVEVNLFxuICAgIENBUlRfUkVNT1ZFX0lURU0sXG4gICAgQ0FSVF9VUERBVEVfUVVBTlRJVElFUyxcbiAgICBDYXJ0QWRkSXRlbUFjdGlvbixcbiAgICBDYXJ0SXRlbVF1YW50aXR5LFxuICAgIENhcnRSZW1vdmVJdGVtQWN0aW9uLFxuICAgIENhcnRUaHVua0FjdGlvbixcbiAgICBDYXJ0VXBkYXRlUXVhbnRpdGllc0FjdGlvbixcbn0gZnJvbSAnLi9jYXJ0QWN0aW9uVHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FydEFkZEl0ZW1TdWNjZXNzKFxuICAgIHByb2R1Y3Q6IElQcm9kdWN0LFxuICAgIG9wdGlvbnM6IENhcnRJdGVtT3B0aW9uW10gPSBbXSxcbiAgICBxdWFudGl0eSA9IDEsXG4pOiBDYXJ0QWRkSXRlbUFjdGlvbiB7XG4gICAgdG9hc3Quc3VjY2VzcyhgUHJvZHVjdCBcIiR7cHJvZHVjdC5uYW1lfVwiIGFkZGVkIHRvIGNhcnQhYCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBDQVJUX0FERF9JVEVNLFxuICAgICAgICBwcm9kdWN0LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBxdWFudGl0eSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FydFJlbW92ZUl0ZW1TdWNjZXNzKGl0ZW1JZDogbnVtYmVyKTogQ2FydFJlbW92ZUl0ZW1BY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IENBUlRfUkVNT1ZFX0lURU0sXG4gICAgICAgIGl0ZW1JZCxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FydFVwZGF0ZVF1YW50aXRpZXNTdWNjZXNzKHF1YW50aXRpZXM6IENhcnRJdGVtUXVhbnRpdHlbXSk6IENhcnRVcGRhdGVRdWFudGl0aWVzQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBDQVJUX1VQREFURV9RVUFOVElUSUVTLFxuICAgICAgICBxdWFudGl0aWVzLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXJ0QWRkSXRlbShcbiAgICBwcm9kdWN0OiBJUHJvZHVjdCxcbiAgICBvcHRpb25zOiBDYXJ0SXRlbU9wdGlvbltdID0gW10sXG4gICAgcXVhbnRpdHkgPSAxLFxuKTogQ2FydFRodW5rQWN0aW9uPFByb21pc2U8dm9pZD4+IHtcbiAgICAvLyBzZW5kaW5nIHJlcXVlc3QgdG8gc2VydmVyLCB0aW1lb3V0IGlzIHVzZWQgYXMgYSBzdHViXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4gKFxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goY2FydEFkZEl0ZW1TdWNjZXNzKHByb2R1Y3QsIG9wdGlvbnMsIHF1YW50aXR5KSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSlcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FydFJlbW92ZUl0ZW0oaXRlbUlkOiBudW1iZXIpOiBDYXJ0VGh1bmtBY3Rpb248UHJvbWlzZTx2b2lkPj4ge1xuICAgIC8vIHNlbmRpbmcgcmVxdWVzdCB0byBzZXJ2ZXIsIHRpbWVvdXQgaXMgdXNlZCBhcyBhIHN0dWJcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiAoXG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChjYXJ0UmVtb3ZlSXRlbVN1Y2Nlc3MoaXRlbUlkKSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSlcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FydFVwZGF0ZVF1YW50aXRpZXMocXVhbnRpdGllczogQ2FydEl0ZW1RdWFudGl0eVtdKTogQ2FydFRodW5rQWN0aW9uPFByb21pc2U8dm9pZD4+IHtcbiAgICAvLyBzZW5kaW5nIHJlcXVlc3QgdG8gc2VydmVyLCB0aW1lb3V0IGlzIHVzZWQgYXMgYSBzdHViXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4gKFxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goY2FydFVwZGF0ZVF1YW50aXRpZXNTdWNjZXNzKHF1YW50aXRpZXMpKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KVxuICAgICk7XG59XG4iLCIvLyBhcHBsaWNhdGlvblxuaW1wb3J0IHsgY2FydEFkZEl0ZW0sIGNhcnRSZW1vdmVJdGVtLCBjYXJ0VXBkYXRlUXVhbnRpdGllcyB9IGZyb20gJy4vY2FydEFjdGlvbnMnO1xuaW1wb3J0IHsgdXNlQXBwQWN0aW9uLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uL2hvb2tzJztcblxuZXhwb3J0IGNvbnN0IHVzZUNhcnQgPSAoKSA9PiB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnQpO1xuXG5leHBvcnQgY29uc3QgdXNlQ2FydEFkZEl0ZW0gPSAoKSA9PiB1c2VBcHBBY3Rpb24oY2FydEFkZEl0ZW0pO1xuXG5leHBvcnQgY29uc3QgdXNlQ2FydFJlbW92ZUl0ZW0gPSAoKSA9PiB1c2VBcHBBY3Rpb24oY2FydFJlbW92ZUl0ZW0pO1xuXG5leHBvcnQgY29uc3QgdXNlQ2FydFVwZGF0ZVF1YW50aXRpZXMgPSAoKSA9PiB1c2VBcHBBY3Rpb24oY2FydFVwZGF0ZVF1YW50aXRpZXMpO1xuIiwiLy8gdGhpcmQtcGFydHlcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ3JlZHV4Jztcbi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgeyBBcHBSZWR1Y2VyIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VBcHBBY3Rpb24gfSBmcm9tICcuL2hvb2tzJztcblxuY29uc3QgQVBQTFlfQ0xJRU5UX1NUQVRFID0gJ0FQUExZX0NMSUVOVF9TVEFURSc7XG5cbnR5cGUgQXBwbHlDbGllbnRTdGF0ZUFjdGlvbjxUPiA9IHtcbiAgICB0eXBlOiB0eXBlb2YgQVBQTFlfQ0xJRU5UX1NUQVRFO1xuICAgIHN0YXRlOiBUO1xufTtcblxuZnVuY3Rpb24gaXNBcHBseUNsaWVudFN0YXRlQWN0aW9uPFQgZXh0ZW5kcyBhbnk+KGFjdGlvbjogQWN0aW9uKTogYWN0aW9uIGlzIEFwcGx5Q2xpZW50U3RhdGVBY3Rpb248VD4ge1xuICAgIHJldHVybiBhY3Rpb24udHlwZSA9PT0gQVBQTFlfQ0xJRU5UX1NUQVRFO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlDbGllbnRTdGF0ZTxUIGV4dGVuZHMgb2JqZWN0PihzdGF0ZTogVCk6IEFwcGx5Q2xpZW50U3RhdGVBY3Rpb248VD4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFQUExZX0NMSUVOVF9TVEFURSxcbiAgICAgICAgc3RhdGUsXG4gICAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZUFwcGx5Q2xpZW50U3RhdGUgPSAoKSA9PiB1c2VBcHBBY3Rpb24oYXBwbHlDbGllbnRTdGF0ZSk7XG5cbmV4cG9ydCB0eXBlIFN0YXRlRnJvbVNlcnZlciA9ICdzZXJ2ZXInO1xuZXhwb3J0IHR5cGUgU3RhdGVGcm9tQ2xpZW50ID0gJ2NsaWVudCc7XG5leHBvcnQgdHlwZSBTdGF0ZUZyb20gPSBTdGF0ZUZyb21TZXJ2ZXIgfCBTdGF0ZUZyb21DbGllbnQ7XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoQ2xpZW50U3RhdGU8XG4gICAgVCBleHRlbmRzIEFwcFJlZHVjZXI8YW55LCBhbnk+LFxuICAgIFMgZXh0ZW5kcyBSZXR1cm5UeXBlPFQ+LFxuICAgIFIgZXh0ZW5kcyBTICYgeyBzdGF0ZUZyb206IFN0YXRlRnJvbSB9XG4+KFxuICAgIHJlZHVjZXI6IFQgZXh0ZW5kcyBBcHBSZWR1Y2VyPFJldHVyblR5cGU8VD4gJiB7IHN0YXRlRnJvbTogYW55IH0sIGFueT5cbiAgICAgICAgPyBBcHBSZWR1Y2VyPFJldHVyblR5cGU8VD4gJiB7IHN0YXRlRnJvbTogbmV2ZXIgfSwgYW55PlxuICAgICAgICA6IFQsXG4gICAgbmFtZXNwYWNlOiBzdHJpbmcsXG4pOiBBcHBSZWR1Y2VyPFI+IHtcbiAgICByZXR1cm4gKHN0YXRlOiBTLCBhY3Rpb246IEFjdGlvbiB8IEFwcGx5Q2xpZW50U3RhdGVBY3Rpb248eyBbbnM6IHN0cmluZ106IGFueSB9Pik6IFIgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZFN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgICBpZiAoaXNBcHBseUNsaWVudFN0YXRlQWN0aW9uKGFjdGlvbikgJiYgbmFtZXNwYWNlIGluIGFjdGlvbi5zdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5hY3Rpb24uc3RhdGVbbmFtZXNwYWNlXSxcbiAgICAgICAgICAgICAgICBzdGF0ZUZyb206ICdjbGllbnQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnc3RhdGVGcm9tJyBpbiBjaGlsZFN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRTdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jaGlsZFN0YXRlLFxuICAgICAgICAgICAgc3RhdGVGcm9tOiBwcm9jZXNzLmJyb3dzZXIgPyAnY2xpZW50JyA6ICdzZXJ2ZXInLFxuICAgICAgICB9O1xuICAgIH07XG59XG4iLCIvLyBhcHBsaWNhdGlvblxuaW1wb3J0IHsgQXBwQWN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Byb2R1Y3QnO1xuXG5leHBvcnQgY29uc3QgQ09NUEFSRV9BRERfSVRFTSA9ICdDT01QQVJFX0FERF9JVEVNJztcbmV4cG9ydCBjb25zdCBDT01QQVJFX1JFTU9WRV9JVEVNID0gJ0NPTVBBUkVfUkVNT1ZFX0lURU0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBhcmVBZGRJdGVtQWN0aW9uIHtcbiAgICB0eXBlOiB0eXBlb2YgQ09NUEFSRV9BRERfSVRFTTtcbiAgICBwcm9kdWN0OiBJUHJvZHVjdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wYXJlUmVtb3ZlSXRlbUFjdGlvbiB7XG4gICAgdHlwZTogdHlwZW9mIENPTVBBUkVfUkVNT1ZFX0lURU07XG4gICAgcHJvZHVjdElkOiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIENvbXBhcmVBY3Rpb24gPVxuICAgIENvbXBhcmVBZGRJdGVtQWN0aW9uIHxcbiAgICBDb21wYXJlUmVtb3ZlSXRlbUFjdGlvbjtcblxuZXhwb3J0IHR5cGUgQ29tcGFyZVRodW5rQWN0aW9uPFQgPSB2b2lkPiA9IEFwcEFjdGlvbjxDb21wYXJlQWN0aW9uLCBUPjtcbiIsIi8vIHRoaXJkLXBhcnR5XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5Jztcbi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcHJvZHVjdCc7XG5pbXBvcnQge1xuICAgIENPTVBBUkVfQUREX0lURU0sXG4gICAgQ09NUEFSRV9SRU1PVkVfSVRFTSxcbiAgICBDb21wYXJlQWRkSXRlbUFjdGlvbixcbiAgICBDb21wYXJlUmVtb3ZlSXRlbUFjdGlvbixcbiAgICBDb21wYXJlVGh1bmtBY3Rpb24sXG59IGZyb20gJy4vY29tcGFyZUFjdGlvblR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVBZGRJdGVtU3VjY2Vzcyhwcm9kdWN0OiBJUHJvZHVjdCk6IENvbXBhcmVBZGRJdGVtQWN0aW9uIHtcbiAgICB0b2FzdC5zdWNjZXNzKGBQcm9kdWN0IFwiJHtwcm9kdWN0Lm5hbWV9XCIgYWRkZWQgdG8gY29tcGFyZSFgKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IENPTVBBUkVfQUREX0lURU0sXG4gICAgICAgIHByb2R1Y3QsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVSZW1vdmVJdGVtU3VjY2Vzcyhwcm9kdWN0SWQ6IG51bWJlcik6IENvbXBhcmVSZW1vdmVJdGVtQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBDT01QQVJFX1JFTU9WRV9JVEVNLFxuICAgICAgICBwcm9kdWN0SWQsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhcmVBZGRJdGVtKHByb2R1Y3Q6IElQcm9kdWN0KTogQ29tcGFyZVRodW5rQWN0aW9uPFByb21pc2U8dm9pZD4+IHtcbiAgICAvLyBzZW5kaW5nIHJlcXVlc3QgdG8gc2VydmVyLCB0aW1lb3V0IGlzIHVzZWQgYXMgYSBzdHViXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4gKFxuICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goY29tcGFyZUFkZEl0ZW1TdWNjZXNzKHByb2R1Y3QpKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KVxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlUmVtb3ZlSXRlbShwcm9kdWN0SWQ6IG51bWJlcik6IENvbXBhcmVUaHVua0FjdGlvbjxQcm9taXNlPHZvaWQ+PiB7XG4gICAgLy8gc2VuZGluZyByZXF1ZXN0IHRvIHNlcnZlciwgdGltZW91dCBpcyB1c2VkIGFzIGEgc3R1YlxuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IChcbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNvbXBhcmVSZW1vdmVJdGVtU3VjY2Vzcyhwcm9kdWN0SWQpKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KVxuICAgICk7XG59XG4iLCIvLyBhcHBsaWNhdGlvblxuaW1wb3J0IHsgQ09NUEFSRV9OQU1FU1BBQ0UgfSBmcm9tICcuL2NvbXBhcmVSZWR1Y2VyJztcbmltcG9ydCB7IGNvbXBhcmVBZGRJdGVtLCBjb21wYXJlUmVtb3ZlSXRlbSB9IGZyb20gJy4vY29tcGFyZUFjdGlvbnMnO1xuaW1wb3J0IHsgdXNlQXBwQWN0aW9uLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uL2hvb2tzJztcblxuZXhwb3J0IGNvbnN0IHVzZUNvbXBhcmUgPSAoKSA9PiB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlW0NPTVBBUkVfTkFNRVNQQUNFXSk7XG5cbmV4cG9ydCBjb25zdCB1c2VDb21wYXJlQWRkSXRlbSA9ICgpID0+IHVzZUFwcEFjdGlvbihjb21wYXJlQWRkSXRlbSk7XG5cbmV4cG9ydCBjb25zdCB1c2VDb21wYXJlUmVtb3ZlSXRlbSA9ICgpID0+IHVzZUFwcEFjdGlvbihjb21wYXJlUmVtb3ZlSXRlbSk7XG4iLCIvLyBhcHBsaWNhdGlvblxuaW1wb3J0IHsgQ09NUEFSRV9BRERfSVRFTSwgQ09NUEFSRV9SRU1PVkVfSVRFTSwgQ29tcGFyZUFjdGlvbiB9IGZyb20gJy4vY29tcGFyZUFjdGlvblR5cGVzJztcbmltcG9ydCB7IENvbXBhcmVTdGF0ZSB9IGZyb20gJy4vY29tcGFyZVR5cGVzJztcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wcm9kdWN0JztcbmltcG9ydCB7IHdpdGhDbGllbnRTdGF0ZSB9IGZyb20gJy4uL2NsaWVudCc7XG5cbmZ1bmN0aW9uIGFkZEl0ZW0oc3RhdGU6IENvbXBhcmVTdGF0ZSwgcHJvZHVjdDogSVByb2R1Y3QpOiBDb21wYXJlU3RhdGUge1xuICAgIGNvbnN0IGl0ZW1JbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleCgoeCkgPT4geC5pZCA9PT0gcHJvZHVjdC5pZCk7XG5cbiAgICBpZiAoaXRlbUluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS5pdGVtcyxcbiAgICAgICAgICAgICAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHByb2R1Y3QpKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtKHN0YXRlOiBDb21wYXJlU3RhdGUsIHByb2R1Y3RJZDogbnVtYmVyKTogQ29tcGFyZVN0YXRlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMuZmlsdGVyKCh4KSA9PiB4LmlkICE9PSBwcm9kdWN0SWQpLFxuICAgIH07XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQ29tcGFyZVN0YXRlID0ge1xuICAgIGl0ZW1zOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBDT01QQVJFX05BTUVTUEFDRSA9ICdjb21wYXJlJztcblxuZnVuY3Rpb24gY29tcGFyZUJhc2VSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IENvbXBhcmVBY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBDT01QQVJFX0FERF9JVEVNOlxuICAgICAgICByZXR1cm4gYWRkSXRlbShzdGF0ZSwgYWN0aW9uLnByb2R1Y3QpO1xuXG4gICAgY2FzZSBDT01QQVJFX1JFTU9WRV9JVEVNOlxuICAgICAgICByZXR1cm4gcmVtb3ZlSXRlbShzdGF0ZSwgYWN0aW9uLnByb2R1Y3RJZCk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5jb25zdCBjb21wYXJlUmVkdWNlciA9IHdpdGhDbGllbnRTdGF0ZShjb21wYXJlQmFzZVJlZHVjZXIsIENPTVBBUkVfTkFNRVNQQUNFKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcGFyZVJlZHVjZXI7XG4iLCIvLyBhcHBsaWNhdGlvblxuaW1wb3J0IHsgSUN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9jdXJyZW5jeSc7XG5cbmV4cG9ydCBjb25zdCBDVVJSRU5DWV9DSEFOR0UgPSAnQ1VSUkVOQ1lfQ0hBTkdFJztcblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW5jeUNoYW5nZUFjdGlvbiB7XG4gICAgdHlwZTogdHlwZW9mIENVUlJFTkNZX0NIQU5HRTtcbiAgICBjdXJyZW5jeTogSUN1cnJlbmN5O1xufVxuXG5leHBvcnQgdHlwZSBDdXJyZW5jeUFjdGlvbiA9IEN1cnJlbmN5Q2hhbmdlQWN0aW9uO1xuIiwiLy8gYXBwbGljYXRpb25cbmltcG9ydCB7IENVUlJFTkNZX0NIQU5HRSwgQ3VycmVuY3lDaGFuZ2VBY3Rpb24gfSBmcm9tICcuL2N1cnJlbmN5QWN0aW9uVHlwZXMnO1xuaW1wb3J0IHsgSUN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9jdXJyZW5jeSc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gY3VycmVuY3lDaGFuZ2UoY3VycmVuY3k6IElDdXJyZW5jeSk6IEN1cnJlbmN5Q2hhbmdlQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBDVVJSRU5DWV9DSEFOR0UsXG4gICAgICAgIGN1cnJlbmN5LFxuICAgIH07XG59XG4iLCIvLyBhcHBsaWNhdGlvblxuaW1wb3J0IHsgQ1VSUkVOQ1lfTkFNRVNQQUNFIH0gZnJvbSAnLi9jdXJyZW5jeVJlZHVjZXInO1xuaW1wb3J0IHsgY3VycmVuY3lDaGFuZ2UgfSBmcm9tICcuL2N1cnJlbmN5QWN0aW9ucyc7XG5pbXBvcnQgeyB1c2VBcHBBY3Rpb24sIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vaG9va3MnO1xuXG5leHBvcnQgY29uc3QgdXNlQ3VycmVuY3kgPSAoKSA9PiB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlW0NVUlJFTkNZX05BTUVTUEFDRV0uY3VycmVudCk7XG5cbmV4cG9ydCBjb25zdCB1c2VDdXJyZW5jeUNoYW5nZSA9ICgpID0+IHVzZUFwcEFjdGlvbihjdXJyZW5jeUNoYW5nZSk7XG4iLCIvLyBhcHBsaWNhdGlvblxuaW1wb3J0IHsgQ1VSUkVOQ1lfQ0hBTkdFLCBDdXJyZW5jeUFjdGlvbiB9IGZyb20gJy4vY3VycmVuY3lBY3Rpb25UeXBlcyc7XG5pbXBvcnQgeyBDdXJyZW5jeVN0YXRlIH0gZnJvbSAnLi9jdXJyZW5jeVR5cGVzJztcbmltcG9ydCB7IGRhdGFTaG9wRGVmYXVsdEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vZGF0YS9zaG9wQ3VycmVuY2llcyc7XG5pbXBvcnQgeyB3aXRoQ2xpZW50U3RhdGUgfSBmcm9tICcuLi9jbGllbnQnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IEN1cnJlbmN5U3RhdGUgPSB7XG4gICAgY3VycmVudDogZGF0YVNob3BEZWZhdWx0Q3VycmVuY3ksXG59O1xuXG5leHBvcnQgY29uc3QgQ1VSUkVOQ1lfTkFNRVNQQUNFID0gJ2N1cnJlbmN5JztcblxuZnVuY3Rpb24gY3VycmVuY3lCYXNlUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBDdXJyZW5jeUFjdGlvbik6IEN1cnJlbmN5U3RhdGUge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gQ1VSUkVOQ1lfQ0hBTkdFICYmIHN0YXRlLmN1cnJlbnQuY29kZSAhPT0gYWN0aW9uLmN1cnJlbmN5LmNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgY3VycmVudDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShhY3Rpb24uY3VycmVuY3kpKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbmNvbnN0IGN1cnJlbmN5UmVkdWNlciA9IHdpdGhDbGllbnRTdGF0ZShjdXJyZW5jeUJhc2VSZWR1Y2VyLCBDVVJSRU5DWV9OQU1FU1BBQ0UpO1xuXG5leHBvcnQgZGVmYXVsdCBjdXJyZW5jeVJlZHVjZXI7XG4iLCIvLyByZWFjdFxuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG4vLyB0aGlyZC1wYXJ0eVxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy8gYXBwbGljYXRpb25cbmltcG9ydCB7IEZuLCBUaHVua0FjdGlvbkZuLCBUaHVua1JldHVyblR5cGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4vcm9vdC9yb290VHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQWN0aW9uPFQgZXh0ZW5kcyBGbj4oYWN0aW9uOiBUKTogKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IChcbiAgICBUIGV4dGVuZHMgVGh1bmtBY3Rpb25GbiA/IFRodW5rUmV0dXJuVHlwZTxUPiA6IFJldHVyblR5cGU8VD5cbikge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIHJldHVybiB1c2VDYWxsYmFjaygoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4gKFxuICAgICAgICBkaXNwYXRjaChhY3Rpb24oLi4uYXJncykpXG4gICAgKSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwU2VsZWN0b3I8VCBleHRlbmRzKHN0YXRlOiBSb290U3RhdGUpID0+IGFueT4oc2VsZWN0b3I6IFQpOiBSZXR1cm5UeXBlPFQ+IHtcbiAgICByZXR1cm4gdXNlU2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuIiwiLy8gYXBwbGljYXRpb25cbmV4cG9ydCBjb25zdCBMT0NBTEVfQ0hBTkdFID0gJ0xPQ0FMRV9DSEFOR0UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsZUNoYW5nZUFjdGlvbiB7XG4gICAgdHlwZTogdHlwZW9mIExPQ0FMRV9DSEFOR0U7XG4gICAgbG9jYWxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIExvY2FsZUFjdGlvbiA9IExvY2FsZUNoYW5nZUFjdGlvbjtcbiIsIi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgeyBMT0NBTEVfQ0hBTkdFLCBMb2NhbGVDaGFuZ2VBY3Rpb24gfSBmcm9tICcuL2xvY2FsZUFjdGlvblR5cGVzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBsb2NhbGVDaGFuZ2UobG9jYWxlOiBzdHJpbmcpOiBMb2NhbGVDaGFuZ2VBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IExPQ0FMRV9DSEFOR0UsXG4gICAgICAgIGxvY2FsZSxcbiAgICB9O1xufVxuIiwiLy8gYXBwbGljYXRpb25cbmltcG9ydCBsYW5ndWFnZXMgZnJvbSAnLi4vLi4vaTE4bic7XG5pbXBvcnQgeyBJTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2xhbmd1YWdlJztcbmltcG9ydCB7IExPQ0FMRV9OQU1FU1BBQ0UgfSBmcm9tICcuL2xvY2FsZVJlZHVjZXInO1xuaW1wb3J0IHsgbG9jYWxlQ2hhbmdlIH0gZnJvbSAnLi9sb2NhbGVBY3Rpb25zJztcbmltcG9ydCB7IFJvb3RTdGF0ZSB9IGZyb20gJy4uL3Jvb3Qvcm9vdFR5cGVzJztcbmltcG9ydCB7IHVzZUFwcEFjdGlvbiwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi9ob29rcyc7XG5cbmNvbnN0IGxvY2FsZVNlbGVjdG9yID0gKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlW0xPQ0FMRV9OQU1FU1BBQ0VdLmN1cnJlbnQ7XG5cbmV4cG9ydCBjb25zdCB1c2VMb2NhbGUgPSAoKSA9PiB1c2VBcHBTZWxlY3Rvcihsb2NhbGVTZWxlY3Rvcik7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMYW5ndWFnZSgpOiBJTGFuZ3VhZ2U7XG5leHBvcnQgZnVuY3Rpb24gdXNlTGFuZ3VhZ2U8VCBleHRlbmRzKGxhbmc6IElMYW5ndWFnZSkgPT4gYW55PihzZWxlY3RvcjogVCk6IFJldHVyblR5cGU8VD47XG5leHBvcnQgZnVuY3Rpb24gdXNlTGFuZ3VhZ2U8VCBleHRlbmRzKGxhbmc6IElMYW5ndWFnZSkgPT4gYW55PihzZWxlY3Rvcj86IFQpOiAoSUxhbmd1YWdlIHwgUmV0dXJuVHlwZTxUPikge1xuICAgIHJldHVybiB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgbG9jYWxlID0gbG9jYWxlU2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgICBjb25zdCBsYW5ndWFnZSA9IGxhbmd1YWdlcy5maW5kKCh4KSA9PiB4LmxvY2FsZSA9PT0gbG9jYWxlKTtcblxuICAgICAgICBpZiAoIWxhbmd1YWdlKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgTGFuZ3VhZ2Ugd2l0aCBsb2NhbGU6ICR7bG9jYWxlfSBub3QgZm91bmQhYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcihsYW5ndWFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGFuZ3VhZ2U7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VEaXJlY3Rpb24gPSAoKSA9PiB1c2VMYW5ndWFnZSgobGFuZ3VhZ2UpID0+IGxhbmd1YWdlLmRpcmVjdGlvbik7XG5cbmV4cG9ydCBjb25zdCB1c2VNZXNzYWdlcyA9ICgpID0+IHVzZUxhbmd1YWdlKChsYW5ndWFnZSkgPT4gbGFuZ3VhZ2UubWVzc2FnZXMpO1xuXG5leHBvcnQgY29uc3QgdXNlTG9jYWxlQ2hhbmdlID0gKCkgPT4gdXNlQXBwQWN0aW9uKGxvY2FsZUNoYW5nZSk7XG4iLCIvLyBhcHBsaWNhdGlvblxuaW1wb3J0IHsgTE9DQUxFX0NIQU5HRSwgTG9jYWxlQWN0aW9uIH0gZnJvbSAnLi9sb2NhbGVBY3Rpb25UeXBlcyc7XG5pbXBvcnQgeyBMb2NhbGVTdGF0ZSB9IGZyb20gJy4vbG9jYWxlVHlwZXMnO1xuaW1wb3J0IHsgd2l0aENsaWVudFN0YXRlIH0gZnJvbSAnLi4vY2xpZW50JztcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBMb2NhbGVTdGF0ZSA9IHtcbiAgICBjdXJyZW50OiAnZW4nLFxufTtcblxuZXhwb3J0IGNvbnN0IExPQ0FMRV9OQU1FU1BBQ0UgPSAnbG9jYWxlJztcblxuZnVuY3Rpb24gbG9jYWxlQmFzZVJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogTG9jYWxlQWN0aW9uKTogTG9jYWxlU3RhdGUge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gTE9DQUxFX0NIQU5HRSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBjdXJyZW50OiBhY3Rpb24ubG9jYWxlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuY29uc3QgbG9jYWxlUmVkdWNlciA9IHdpdGhDbGllbnRTdGF0ZShsb2NhbGVCYXNlUmVkdWNlciwgTE9DQUxFX05BTUVTUEFDRSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsZVJlZHVjZXI7XG4iLCIvLyBhcHBsaWNhdGlvblxuaW1wb3J0IHsgQXBwQWN0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Byb2R1Y3QnO1xuXG5leHBvcnQgY29uc3QgUVVJQ0tWSUVXX09QRU4gPSAnUVVJQ0tWSUVXX09QRU4nO1xuZXhwb3J0IGNvbnN0IFFVSUNLVklFV19DTE9TRSA9ICdRVUlDS1ZJRVdfQ0xPU0UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFF1aWNrdmlld09wZW5BY3Rpb24ge1xuICAgIHR5cGU6IHR5cGVvZiBRVUlDS1ZJRVdfT1BFTjtcbiAgICBwcm9kdWN0OiBJUHJvZHVjdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWlja3ZpZXdDbG9zZUFjdGlvbiB7XG4gICAgdHlwZTogdHlwZW9mIFFVSUNLVklFV19DTE9TRTtcbn1cblxuZXhwb3J0IHR5cGUgUXVpY2t2aWV3QWN0aW9uID1cbiAgICBRdWlja3ZpZXdPcGVuQWN0aW9uIHxcbiAgICBRdWlja3ZpZXdDbG9zZUFjdGlvbjtcblxuZXhwb3J0IHR5cGUgUXVpY2t2aWV3VGh1bmtBY3Rpb248VCA9IHZvaWQ+ID0gQXBwQWN0aW9uPFF1aWNrdmlld0FjdGlvbiwgVD47XG4iLCIvLyBhcHBsaWNhdGlvblxuaW1wb3J0IHNob3BBcGkgZnJvbSAnLi4vLi4vYXBpL3Nob3AnO1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Byb2R1Y3QnO1xuaW1wb3J0IHtcbiAgICBRVUlDS1ZJRVdfQ0xPU0UsXG4gICAgUVVJQ0tWSUVXX09QRU4sXG4gICAgUXVpY2t2aWV3Q2xvc2VBY3Rpb24sXG4gICAgUXVpY2t2aWV3T3BlbkFjdGlvbixcbiAgICBRdWlja3ZpZXdUaHVua0FjdGlvbixcbn0gZnJvbSAnLi9xdWlja3ZpZXdBY3Rpb25UeXBlcyc7XG5cbmxldCBjYW5jZWxQcmV2aW91c1JlcXVlc3QgPSAoKSA9PiB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrdmlld09wZW5TdWNjZXNzKHByb2R1Y3Q6IElQcm9kdWN0KTogUXVpY2t2aWV3T3BlbkFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogUVVJQ0tWSUVXX09QRU4sXG4gICAgICAgIHByb2R1Y3QsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrdmlld0Nsb3NlKCk6IFF1aWNrdmlld0Nsb3NlQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBRVUlDS1ZJRVdfQ0xPU0UsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1aWNrdmlld09wZW4ocHJvZHVjdFNsdWc6IHN0cmluZyk6IFF1aWNrdmlld1RodW5rQWN0aW9uPFByb21pc2U8dm9pZD4+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgICAgIGNhbmNlbFByZXZpb3VzUmVxdWVzdCgpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNhbmNlbGVkID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBzZW5kaW5nIHJlcXVlc3QgdG8gc2VydmVyLCB0aW1lb3V0IGlzIHVzZWQgYXMgYSBzdHViXG4gICAgICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNob3BBcGkuZ2V0UHJvZHVjdEJ5U2x1Zyhwcm9kdWN0U2x1ZykudGhlbigocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FuY2VsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChxdWlja3ZpZXdPcGVuU3VjY2Vzcyhwcm9kdWN0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAzNTApO1xuXG4gICAgICAgICAgICBjYW5jZWxQcmV2aW91c1JlcXVlc3QgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbiIsIi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgeyBRVUlDS1ZJRVdfTkFNRVNQQUNFIH0gZnJvbSAnLi9xdWlja3ZpZXdSZWR1Y2VyJztcbmltcG9ydCB7IHF1aWNrdmlld0Nsb3NlLCBxdWlja3ZpZXdPcGVuIH0gZnJvbSAnLi9xdWlja3ZpZXdBY3Rpb25zJztcbmltcG9ydCB7IHVzZUFwcEFjdGlvbiwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBjb25zdCB1c2VRdWlja3ZpZXcgPSAoKSA9PiB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlW1FVSUNLVklFV19OQU1FU1BBQ0VdKTtcblxuZXhwb3J0IGNvbnN0IHVzZVF1aWNrdmlld09wZW4gPSAoKSA9PiB1c2VBcHBBY3Rpb24ocXVpY2t2aWV3T3Blbik7XG5cbmV4cG9ydCBjb25zdCB1c2VRdWlja3ZpZXdDbG9zZSA9ICgpID0+IHVzZUFwcEFjdGlvbihxdWlja3ZpZXdDbG9zZSk7XG4iLCIvLyBhcHBsaWNhdGlvblxuaW1wb3J0IHsgUVVJQ0tWSUVXX0NMT1NFLCBRVUlDS1ZJRVdfT1BFTiwgUXVpY2t2aWV3QWN0aW9uIH0gZnJvbSAnLi9xdWlja3ZpZXdBY3Rpb25UeXBlcyc7XG5pbXBvcnQgeyBRdWlja3ZpZXdTdGF0ZSB9IGZyb20gJy4vcXVpY2t2aWV3VHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IFF1aWNrdmlld1N0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIHByb2R1Y3Q6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgUVVJQ0tWSUVXX05BTUVTUEFDRSA9ICdxdWlja3ZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxdWlja3ZpZXdSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFF1aWNrdmlld0FjdGlvbikge1xuICAgIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBRVUlDS1ZJRVdfT1BFTikge1xuICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgIHByb2R1Y3Q6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnByb2R1Y3QpKSxcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBRVUlDS1ZJRVdfQ0xPU0UpIHtcbiAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBuZXdTdGF0ZTtcbn1cbiIsIi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgeyBBcHBBY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcHJvZHVjdCc7XG5cbmV4cG9ydCBjb25zdCBXSVNITElTVF9BRERfSVRFTSA9ICdXSVNITElTVF9BRERfSVRFTSc7XG5leHBvcnQgY29uc3QgV0lTSExJU1RfUkVNT1ZFX0lURU0gPSAnV0lTSExJU1RfUkVNT1ZFX0lURU0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdpc2hsaXN0QWRkSXRlbUFjdGlvbiB7XG4gICAgdHlwZTogdHlwZW9mIFdJU0hMSVNUX0FERF9JVEVNO1xuICAgIHByb2R1Y3Q6IElQcm9kdWN0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdpc2hsaXN0UmVtb3ZlSXRlbUFjdGlvbiB7XG4gICAgdHlwZTogdHlwZW9mIFdJU0hMSVNUX1JFTU9WRV9JVEVNO1xuICAgIHByb2R1Y3RJZDogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBXaXNobGlzdEFjdGlvbiA9XG4gICAgV2lzaGxpc3RBZGRJdGVtQWN0aW9uIHxcbiAgICBXaXNobGlzdFJlbW92ZUl0ZW1BY3Rpb247XG5cbmV4cG9ydCB0eXBlIFdpc2hsaXN0VGh1bmtBY3Rpb248VCA9IHZvaWQ+ID0gQXBwQWN0aW9uPFdpc2hsaXN0QWN0aW9uLCBUPjtcbiIsIi8vIHRoaXJkLXBhcnR5XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5Jztcbi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvcHJvZHVjdCc7XG5pbXBvcnQge1xuICAgIFdJU0hMSVNUX0FERF9JVEVNLFxuICAgIFdJU0hMSVNUX1JFTU9WRV9JVEVNLFxuICAgIFdpc2hsaXN0QWRkSXRlbUFjdGlvbixcbiAgICBXaXNobGlzdFJlbW92ZUl0ZW1BY3Rpb24sXG4gICAgV2lzaGxpc3RUaHVua0FjdGlvbixcbn0gZnJvbSAnLi93aXNobGlzdEFjdGlvblR5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHdpc2hsaXN0QWRkSXRlbVN1Y2Nlc3MocHJvZHVjdDogSVByb2R1Y3QpOiBXaXNobGlzdEFkZEl0ZW1BY3Rpb24ge1xuICAgIHRvYXN0LnN1Y2Nlc3MoYFByb2R1Y3QgXCIke3Byb2R1Y3QubmFtZX1cIiBhZGRlZCB0byB3aXNoIGxpc3QhYCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBXSVNITElTVF9BRERfSVRFTSxcbiAgICAgICAgcHJvZHVjdCxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2lzaGxpc3RSZW1vdmVJdGVtU3VjY2Vzcyhwcm9kdWN0SWQ6IG51bWJlcik6IFdpc2hsaXN0UmVtb3ZlSXRlbUFjdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogV0lTSExJU1RfUkVNT1ZFX0lURU0sXG4gICAgICAgIHByb2R1Y3RJZCxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2lzaGxpc3RBZGRJdGVtKHByb2R1Y3Q6IElQcm9kdWN0KTogV2lzaGxpc3RUaHVua0FjdGlvbjxQcm9taXNlPHZvaWQ+PiB7XG4gICAgLy8gc2VuZGluZyByZXF1ZXN0IHRvIHNlcnZlciwgdGltZW91dCBpcyB1c2VkIGFzIGEgc3R1YlxuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IChcbiAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHdpc2hsaXN0QWRkSXRlbVN1Y2Nlc3MocHJvZHVjdCkpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0pXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpc2hsaXN0UmVtb3ZlSXRlbShwcm9kdWN0SWQ6IG51bWJlcik6IFdpc2hsaXN0VGh1bmtBY3Rpb248UHJvbWlzZTx2b2lkPj4ge1xuICAgIC8vIHNlbmRpbmcgcmVxdWVzdCB0byBzZXJ2ZXIsIHRpbWVvdXQgaXMgdXNlZCBhcyBhIHN0dWJcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PiAoXG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh3aXNobGlzdFJlbW92ZUl0ZW1TdWNjZXNzKHByb2R1Y3RJZCkpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0pXG4gICAgKTtcbn1cbiIsIi8vIGFwcGxpY2F0aW9uXG5pbXBvcnQgeyB1c2VBcHBBY3Rpb24sIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vaG9va3MnO1xuaW1wb3J0IHsgV0lTSExJU1RfTkFNRVNQQUNFIH0gZnJvbSAnLi93aXNobGlzdFJlZHVjZXInO1xuaW1wb3J0IHsgd2lzaGxpc3RBZGRJdGVtLCB3aXNobGlzdFJlbW92ZUl0ZW0gfSBmcm9tICcuL3dpc2hsaXN0QWN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCB1c2VXaXNobGlzdCA9ICgpID0+IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGVbV0lTSExJU1RfTkFNRVNQQUNFXSk7XG5cbmV4cG9ydCBjb25zdCB1c2VXaXNobGlzdEFkZEl0ZW0gPSAoKSA9PiB1c2VBcHBBY3Rpb24od2lzaGxpc3RBZGRJdGVtKTtcblxuZXhwb3J0IGNvbnN0IHVzZVdpc2hsaXN0UmVtb3ZlSXRlbSA9ICgpID0+IHVzZUFwcEFjdGlvbih3aXNobGlzdFJlbW92ZUl0ZW0pO1xuIiwiLy8gYXBwbGljYXRpb25cbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wcm9kdWN0JztcbmltcG9ydCB7IFdJU0hMSVNUX0FERF9JVEVNLCBXSVNITElTVF9SRU1PVkVfSVRFTSwgV2lzaGxpc3RBY3Rpb24gfSBmcm9tICcuL3dpc2hsaXN0QWN0aW9uVHlwZXMnO1xuaW1wb3J0IHsgV2lzaGxpc3RTdGF0ZSB9IGZyb20gJy4vd2lzaGxpc3RUeXBlcyc7XG5pbXBvcnQgeyB3aXRoQ2xpZW50U3RhdGUgfSBmcm9tICcuLi9jbGllbnQnO1xuXG5mdW5jdGlvbiBhZGRJdGVtKHN0YXRlOiBXaXNobGlzdFN0YXRlLCBwcm9kdWN0OiBJUHJvZHVjdCk6IFdpc2hsaXN0U3RhdGUge1xuICAgIGNvbnN0IGl0ZW1JbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleCgoeCkgPT4geC5pZCA9PT0gcHJvZHVjdC5pZCk7XG5cbiAgICBpZiAoaXRlbUluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS5pdGVtcyxcbiAgICAgICAgICAgICAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHByb2R1Y3QpKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtKHN0YXRlOiBXaXNobGlzdFN0YXRlLCBwcm9kdWN0SWQ6IG51bWJlcik6IFdpc2hsaXN0U3RhdGUge1xuICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5maWx0ZXIoKHgpID0+IHguaWQgIT09IHByb2R1Y3RJZCksXG4gICAgfTtcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBXaXNobGlzdFN0YXRlID0ge1xuICAgIGl0ZW1zOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBXSVNITElTVF9OQU1FU1BBQ0UgPSAnd2lzaGxpc3QnO1xuXG5mdW5jdGlvbiB3aXNobGlzdEJhc2VSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFdpc2hsaXN0QWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgV0lTSExJU1RfQUREX0lURU06XG4gICAgICAgIHJldHVybiBhZGRJdGVtKHN0YXRlLCBhY3Rpb24ucHJvZHVjdCk7XG5cbiAgICBjYXNlIFdJU0hMSVNUX1JFTU9WRV9JVEVNOlxuICAgICAgICByZXR1cm4gcmVtb3ZlSXRlbShzdGF0ZSwgYWN0aW9uLnByb2R1Y3RJZCk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5jb25zdCB3aXNobGlzdFJlZHVjZXIgPSB3aXRoQ2xpZW50U3RhdGUod2lzaGxpc3RCYXNlUmVkdWNlciwgV0lTSExJU1RfTkFNRVNQQUNFKTtcblxuZXhwb3J0IGRlZmF1bHQgd2lzaGxpc3RSZWR1Y2VyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9