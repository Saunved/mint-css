"use strict";

function animateCSS(element, animations, callback) {
  var node = document.querySelector(element);
  node.classList.add('animated');
  var cssClasses = animations.split(' ');
  cssClasses.forEach(function (cssClass) {
    node.classList.add(cssClass);
  });

  function handleAnimationEnd() {
    node.classList.remove('animated');
    cssClasses.forEach(function (cssClass) {
      node.classList.remove(cssClass);
    });
    node.removeEventListener('animationend', handleAnimationEnd);
    if (typeof callback === 'function') callback();
  }

  node.addEventListener('animationend', handleAnimationEnd);
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CodeViewer = /*#__PURE__*/function (_HTMLElement) {
  _inherits(CodeViewer, _HTMLElement);

  var _super = _createSuper(CodeViewer);

  function CodeViewer() {
    _classCallCheck(this, CodeViewer);

    return _super.call(this);
  }

  _createClass(CodeViewer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var id = Date.now() + Math.floor(Math.random() * 9999).toString();
      var template = "<div class=\"clearfix\"><h5 style=\"max-width:70%\">".concat(this.title, "</h5><button id=\"button-").concat(id, "\" class=\"btn btn-small btn-dark tiny btn-rounded\">View code</button><pre id=\"pre-").concat(id, "\" style=\"margin-top: 8px\"><code>").concat(this.content, "</pre></code></div>");
      this.innerHTML = template;
      var pre = document.getElementById("pre-".concat(id));
      pre.style.display = 'none';
      var button = document.getElementById("button-".concat(id));
      var state = false;
      button.addEventListener('click', function () {
        if (!state) {
          pre.style.display = 'block';
          this.innerText = 'Hide code';
          state = !state;
        } else {
          pre.style.display = 'none';
          this.innerText = 'View code';
          state = !state;
        }
      });
    }
  }, {
    key: "content",
    get: function get() {
      return this.getAttribute('content');
    }
  }, {
    key: "title",
    get: function get() {
      return this.getAttribute('title');
    }
  }]);

  return CodeViewer;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('code-viewer', CodeViewer);
"use strict";

// https://gist.github.com/peduarte/969217eac456538789e8fac8f45143b4
var throttle = function throttle(func, wait) {
  var timer = null;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer === null) {
      timer = setTimeout(function () {
        func.apply(_this, args);
        timer = null;
      }, wait);
    }
  };
};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modal = /*#__PURE__*/function () {
  // Define the trigger for the modal
  // Define whether modal closes on Esc
  // TODO: Close only 1 modal per esc / outside click
  function Modal(id) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Modal);

    _defineProperty(this, "_outsideClickListener", function (event) {
      event.preventDefault();

      if (!_this.modal.contains(event.target) && _this._isVisible(_this.modal) && _this.properties.opened == Modal.opened[Modal.opened.length - 1]) {
        // or use: event.target.closest(selector) === null
        if (_this.options.canBeDismissed) {
          _this.close();
        } else if (_this.options.shake) {
          animateCSS("#".concat(_this.id), 'tada fast');
        }
      }
    });

    this.id = id;
    this.modal = document.getElementById(id);
    this.properties = {};

    this._setModalMargins();

    this._setupOverlay();

    this._setOptions(options);

    if (this.options.closeOnEsc && this.options.canBeDismissed) {
      this._bindEsc();
    }
  }

  _createClass(Modal, [{
    key: "_setModalMargins",
    value: function _setModalMargins() {
      if (this.modal.classList.contains('modal')) {
        this.modal.style.marginLeft = "-".concat((this.modal.offsetWidth / 2).toString(), "px");
        this.modal.style.marginTop = "-".concat((this.modal.offsetHeight / 2).toString(), "px");
      }
    } // Use Object.extend here

  }, {
    key: "_setOptions",
    value: function _setOptions(userOptions) {
      this.options = {};
      this.options.closeOnEsc = true;
      this.options.canBeDismissed = true;
      this.options.preventScrolling = true;
      this.options.shake = true;

      this.options.beforeOpen = function () {};

      this.options.beforeClose = function () {};

      this.options.afterClose = function () {};

      this.options.afterOpen = function () {};

      Object.assign(this.options, userOptions);
    }
  }, {
    key: "_isVisible",
    value: function _isVisible() {
      var _isVisible = !!this.modal && !!(this.modal.offsetWidth || this.modal.offsetHeight || this.modal.getClientRects().length);

      return _isVisible;
    }
  }, {
    key: "_bindEsc",
    value: function _bindEsc() {
      var _this2 = this;

      document.addEventListener('keyup', function (event) {
        if (event.key === 'Escape') {
          _this2.close();
        }
      });
    }
  }, {
    key: "_setupOverlay",
    value: function _setupOverlay() {
      if (!Modal.overlay) {
        Modal.overlay = document.createElement('div');
        Modal.overlay.className = 'modal-overlay';
        document.querySelector('body').appendChild(Modal.overlay);
        Modal.overlay.classList.toggle('hidden');
      }
    }
  }, {
    key: "_toggleModal",
    value: function _toggleModal(show) {
      var _this3 = this;

      if (show) {
        Modal.overlay.classList.remove('hidden');
        this.modal.style.visibility = 'visible';

        if (this.modal.classList.contains('modal-bottom')) {
          animateCSS("#".concat(this.id), 'slideInUp', function () {
            Modal.overlay.classList.remove('hidden');
          });
        } else {
          animateCSS("#".concat(this.id), 'fadeIn zoomIn', function () {
            Modal.overlay.classList.remove('hidden');
          });
        }
      } else {
        if (Modal.opened.length == 0) {
          Modal.overlay.classList.add('hidden');
        }

        if (this.modal.classList.contains('modal-bottom')) {
          animateCSS("#".concat(this.id), 'slideOutDown', function () {
            _this3.modal.style.visibility = 'hidden';
          });
        } else {
          animateCSS("#".concat(this.id), 'fadeOut zoomOut', function () {
            _this3.modal.style.visibility = 'hidden';
          });
        }
      }
    }
  }, {
    key: "_setupTriggerListener",
    value: function _setupTriggerListener() {
      var _this4 = this;

      this.options.trigger.addEventListener('click', function () {
        _this4.open();
      });
    }
  }, {
    key: "_attachClickListener",
    value: function _attachClickListener() {
      document.addEventListener('click', this._outsideClickListener, false);
    }
  }, {
    key: "_removeClickListener",
    value: function _removeClickListener() {
      document.removeEventListener('click', this._outsideClickListener, false);
    }
  }, {
    key: "open",
    value: function open() {
      var _this5 = this;

      this.options.beforeOpen();

      if (this.options.preventScrolling) {
        document.querySelector('body').style.overflowY = 'hidden';
      }

      this._toggleModal(true);

      this.properties.opened = Date.now();
      Modal.opened.push(this.properties.opened);
      setTimeout(function () {
        _this5._attachClickListener();

        _this5.options.afterOpen();
      }, 0);
    }
  }, {
    key: "close",
    value: function close() {
      var _this6 = this;

      if (this.properties.opened == Modal.opened[Modal.opened.length - 1]) {
        this.options.beforeClose();
        Modal.opened.pop();

        this._toggleModal(false);

        this.properties.opened = 0;
        setTimeout(function () {
          _this6._removeClickListener();

          if (Modal.opened.length === 0) {
            document.querySelector('body').style.overflowY = 'auto';
          }
        }, 0);
        this.options.afterClose();
      }
    }
  }]);

  return Modal;
}();

_defineProperty(Modal, "opened", []);

_defineProperty(Modal, "overlay", null);
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Scroll = /*#__PURE__*/function () {
  function Scroll() {
    var _this = this;

    var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    var userOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Scroll);

    _defineProperty(this, "_attachScrollListener", function () {
      document.addEventListener('wheel', throttle(_this._scrollListener, _this.options.throttle));
    });

    _defineProperty(this, "_detatchScrollListener", function () {
      document.removeEventListener('wheel', throttle(_this._scrollListener, _this.options.throttle));
    });

    _defineProperty(this, "_scrollListener", function () {
      _this.cb();
    });

    this.cb = cb;
    this.options = {};

    this._setOptions(userOptions);

    this._attachScrollListener(); // this._throttledScroll = this._throttle(this._scrollListener, this.options.throttle);

  }

  _createClass(Scroll, [{
    key: "_setOptions",
    value: function _setOptions(userOptions) {
      this.options.throttle = 100;
      Object.assign(this.options, userOptions);
    }
    /* Wheel event is also possible, but Safari does not support it */

  }]);

  return Scroll;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Scrollspy = /*#__PURE__*/function () {
  function Scrollspy() {
    var _this = this;

    var userOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Scrollspy);

    _defineProperty(this, "_onScroll", function () {
      _this._setupVisibility();

      _this._setupHighlights();
    });

    _defineProperty(this, "_setupVisibility", function () {
      _this.trackIds.forEach(function (tracker) {
        if (_this._isElementVisible(tracker.id)) {
          if (!tracker.visible) {
            tracker.visible = Date.now();
          }
        } else {
          tracker.visible = 0;
        }
      });
    });

    this.options = {};
    this.trackIds = [];

    this._setOptions(userOptions);

    this.elems = document.querySelectorAll(this.options.selector);
    this.elems.forEach(function (elem) {
      _this.trackIds.push({
        id: elem.getAttribute("href"),
        visible: 0
      });
    });
    new Scroll(this._onScroll, {
      throttle: this.options.throttle
    });
  }

  _createClass(Scrollspy, [{
    key: "_setOptions",
    value: function _setOptions(userOptions) {
      this.options.activeClass = 'highlight';
      this.options.selector = '#main-menu a';
      this.options.throttle = 250;
      Object.assign(this.options, userOptions);
    }
  }, {
    key: "_setupHighlights",
    value: function _setupHighlights() {
      var latest = this.trackIds.reduce(function (max, tracker) {
        return max.visible > tracker.visible ? max : tracker;
      });
      var nav = document.querySelector("".concat(this.options.selector, "[href=\"").concat(latest.id, "\"]"));
      nav.classList.add(this.options.activeClass);

      this._clearOldHighlights(nav);
    }
  }, {
    key: "_clearOldHighlights",
    value: function _clearOldHighlights(nav) {
      var _this2 = this;

      this.trackIds.forEach(function (tracker) {
        var elem = document.querySelector("".concat(_this2.options.selector, "[href=\"").concat(tracker.id, "\"]"));

        if (elem != nav) {
          elem.classList.remove(_this2.options.activeClass);
        }
      });
    }
  }, {
    key: "_isElementVisible",
    value: function _isElementVisible(id) {
      var elem = document.querySelector("".concat(id));
      var rect = elem.getBoundingClientRect();
      return rect.bottom >= 0 && rect.right >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth);
    }
  }]);

  return Scrollspy;
}();
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Sidenav = /*#__PURE__*/function () {
  // OpenTrigger;
  // closeTrigger;
  // sidenav;
  // id;
  function Sidenav(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Sidenav);

    this._setupOptions(options);

    this._setupSelectors(id);

    this._setupClickListeners();

    this._bindEsc();
  }

  _createClass(Sidenav, [{
    key: "_setupOptions",
    value: function _setupOptions(userOptions) {
      this.options = {};
      this.options.enterFrom = 'left';

      if (userOptions) {
        for (var _i = 0, _Object$keys = Object.keys(userOptions); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          this.options[key] = userOptions[key];
        }
      }
    }
  }, {
    key: "_setupSelectors",
    value: function _setupSelectors(id) {
      this.id = id;
      this.openTrigger = document.querySelector("#".concat(id, " .trigger"));
      this.sidenav = document.querySelector("#".concat(id, " .sidenav"));
      this.closeTrigger = document.querySelector("#".concat(id, " .close-trigger"));
    }
  }, {
    key: "_setupClickListeners",
    value: function _setupClickListeners() {
      var _this = this;

      if (this.openTrigger) {
        this.openTrigger.addEventListener('click', function () {
          _this.sidenav.style.visibility = 'visible';

          switch (_this.options.enterFrom) {
            case 'left':
              animateCSS("#".concat(_this.id, " .sidenav"), 'slideInLeft');
              break;

            case 'right':
              animateCSS("#".concat(_this.id, " .sidenav"), 'slideInRight');
              break;

            case 'top':
              animateCSS("#".concat(_this.id, " .sidenav"), 'slideInDown');
              break;

            case 'bottom':
              animateCSS("#".concat(_this.id, " .sidenav"), 'slideInUp');
              break;

            case 'grow':
              animateCSS("#".concat(_this.id, " .sidenav"), 'zoomIn FadeIn');
              break;

            case 'plain':
              break;

            default:
              animateCSS("#".concat(_this.id, " .sidenav"), 'slideInLeft');
              break;
          }
        });
      }

      if (this.closeTrigger) {
        this.closeTrigger.addEventListener('click', function (event) {
          event.preventDefault();

          _this._handleClosing();
        });
      }

      var closeOnClickElements = document.querySelectorAll("#".concat(this.id, " .sidenav .click-close"));
      closeOnClickElements.forEach(function (element) {
        element.addEventListener('click', function () {
          _this._handleClosing();
        });
      });
    }
  }, {
    key: "_handleClosing",
    value: function _handleClosing() {
      var _this2 = this;

      switch (this.options.enterFrom) {
        case 'left':
          animateCSS("#".concat(this.id, " .sidenav"), 'slideOutLeft', function () {
            _this2._hideSidenav();
          });
          break;

        case 'right':
          animateCSS("#".concat(this.id, " .sidenav"), 'slideOutRight', function () {
            _this2._hideSidenav();
          });
          break;

        case 'top':
          animateCSS("#".concat(this.id, " .sidenav"), 'slideOutUp', function () {
            _this2._hideSidenav();
          });
          break;

        case 'bottom':
          animateCSS("#".concat(this.id, " .sidenav"), 'slideOutDown', function () {
            _this2._hideSidenav();
          });
          break;

        case 'grow':
          animateCSS("#".concat(this.id, " .sidenav"), 'zoomOut fadeOut', function () {
            _this2._hideSidenav();
          });
          break;

        case 'plain':
          this._hideSidenav();

          break;

        default:
          animateCSS("#".concat(this.id, " .sidenav"), 'slideOutLeft', function () {
            _this2._hideSidenav();
          });
          break;
      }
    }
  }, {
    key: "_hideSidenav",
    value: function _hideSidenav() {
      this.sidenav.style.visibility = 'hidden';
    }
  }, {
    key: "_bindEsc",
    value: function _bindEsc() {
      var _this3 = this;

      document.addEventListener('keyup', function (event) {
        if (event.key === 'Escape') {
          _this3._handleClosing();
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.sidenav.classList.remove('active');
    }
  }, {
    key: "open",
    value: function open() {
      this.sidenav.classList.add('active');
    }
  }]);

  return Sidenav;
}();

_defineProperty(Sidenav, "sidenavs", []);

var Overlay = /*#__PURE__*/function (_Sidenav) {
  _inherits(Overlay, _Sidenav);

  var _super = _createSuper(Overlay);

  function Overlay(id, options) {
    var _this4;

    _classCallCheck(this, Overlay);

    _this4 = _super.call(this, id);
    _this4.options.enterFrom = 'plain';
    return _this4;
  }

  return Overlay;
}(Sidenav);