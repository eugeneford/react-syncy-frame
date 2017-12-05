(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["SyncyFrame"] = factory(require("react"), require("prop-types"));
	else
		root["SyncyFrame"] = factory(root["react"], root["prop-types"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _syncyFrame = __webpack_require__(3);

var _syncyFrame2 = _interopRequireDefault(_syncyFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _syncyFrame2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _frame = __webpack_require__(4);

var _frame2 = _interopRequireDefault(_frame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SyncyFrame = function (_React$Component) {
  _inherits(SyncyFrame, _React$Component);

  function SyncyFrame() {
    _classCallCheck(this, SyncyFrame);

    var _this = _possibleConstructorReturn(this, (SyncyFrame.__proto__ || Object.getPrototypeOf(SyncyFrame)).call(this));

    _this.state = {
      display: 'first'
    };
    _this.onFrameBeforeLoad = _this.onFrameBeforeLoad.bind(_this);
    _this.onFrameLoad = _this.onFrameLoad.bind(_this);
    _this.renderFrame = _this.renderFrame.bind(_this);
    return _this;
  }

  _createClass(SyncyFrame, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var nextId = _ref.nextId,
          nextSrc = _ref.nextSrc;
      var _props = this.props,
          id = _props.id,
          src = _props.src;


      if (id === nextId && src === nextSrc) {
        return;
      }

      this.setState({ display: 'both' });
    }
  }, {
    key: 'onFrameBeforeLoad',
    value: function onFrameBeforeLoad(frameWindow) {
      this.props.onBeforeLoad(frameWindow);
    }
  }, {
    key: 'onFrameLoad',
    value: function onFrameLoad(display, frameWindow) {
      this.setState(display);
      this.props.onLoad(frameWindow);
    }
  }, {
    key: 'renderFrames',
    value: function renderFrame(display) {
      var _this2 = this;

      if (!display) {
        return null;
      }

      var _props2 = this.props,
          id = _props2.id,
          src = _props2.src;


      return _react2.default.createElement(_frame2.default, {
        id: id,
        src: src,
        onBeforeLoad: this.onFrameBeforeLoad(),
        onLoad: function onLoad(frameWindow) {
          return _this2.onFrameLoad('first', frameWindow);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var display = this.state.display;

      var displayFirst = display === 'first' || display === 'both';
      var displaySecond = display === 'second' || display === 'both';

      return _react2.default.createElement(
        'div',
        { className: 'syncy-frame' },
        this.renderFrames(displayFirst),
        this.renderFrames(displaySecond)
      );
    }
  }]);

  return SyncyFrame;
}(_react2.default.Component);

_frame2.default.defaultProps = {
  id: 'syncy-frame-instance',
  onBeforeLoad: function onBeforeLoad() {},
  onLoad: function onLoad() {}
};

_frame2.default.propTypes = {
  id: _propTypes2.default.string,
  src: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  onBeforeLoad: _propTypes2.default.func,
  onLoad: _propTypes2.default.func
};

exports.default = SyncyFrame;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Frame = function (_React$Component) {
  _inherits(Frame, _React$Component);

  function Frame() {
    _classCallCheck(this, Frame);

    var _this = _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this));

    _this.initCallbacks = _this.initCallbacks.bind(_this);
    _this.injectDOM = _this.injectDOM.bind(_this);
    return _this;
  }

  _createClass(Frame, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref) {
      var nextId = _ref.nextId,
          nextSrc = _ref.nextSrc;
      var _props = this.props,
          id = _props.id,
          src = _props.src;

      return id !== nextId || src !== nextSrc;
    }
  }, {
    key: 'initCallbacks',
    value: function initCallbacks(iframe) {
      var element = iframe;
      var contentWindow = element.contentWindow;
      var _props2 = this.props,
          src = _props2.src,
          onBeforeLoad = _props2.onBeforeLoad,
          onLoad = _props2.onLoad;


      onBeforeLoad(contentWindow);

      // Inject DOM if src is not a string
      if (src && typeof src !== 'string') {
        this.injectDOM(contentWindow);
      }

      contentWindow.addEventListener('load', function () {
        onLoad(contentWindow);
        element.style.zIndex = 1;
      });
    }
  }, {
    key: 'injectDOM',
    value: function injectDOM(contentWindow) {
      var document = contentWindow.document;

      var dom = this.props.src;

      document.open();
      document.write(dom.documentElement.outerHTML);
      document.close();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          id = _props3.id,
          src = _props3.src;

      var srcLink = typeof src === 'string' ? src : 'about:blank';
      var key = id + '_' + new Date().getTime();

      return _react2.default.createElement('iframe', {
        key: key,
        id: id,
        title: id,
        src: srcLink,
        ref: this.initCallbacks,
        className: 'syncy-frame-window',
        allowFullScreen: 'true'
      });
    }
  }]);

  return Frame;
}(_react2.default.Component);

Frame.defaultProps = {
  id: 'frame-instance',
  onBeforeLoad: function onBeforeLoad() {},
  onLoad: function onLoad() {}
};

Frame.propTypes = {
  id: _propTypes2.default.string,
  src: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  onBeforeLoad: _propTypes2.default.func,
  onLoad: _propTypes2.default.func
};

exports.default = Frame;

/***/ })
/******/ ])["default"];
});
