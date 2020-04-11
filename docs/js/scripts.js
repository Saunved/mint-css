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

      if (userOptions) {
        for (var _i = 0, _Object$keys = Object.keys(userOptions); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          this.options[key] = userOptions[key];
        }
      }
    }
  }, {
    key: "_isVisible",
    value: function _isVisible() {
      var _isVisible = !!this.modal && !!(this.modal.offsetWidth || this.modal.offsetHeight || this.modal.getClientRects().length);

      return _isVisible;
    }
  }, {
    key: "_setupListener",
    value: function _setupListener() {
      var _this2 = this;

      this.options.trigger.addEventListener('click', function () {
        _this2.open();
      });
    }
  }, {
    key: "_bindEsc",
    value: function _bindEsc() {
      var _this3 = this;

      document.addEventListener('keyup', function (event) {
        if (event.key === 'Escape') {
          _this3.close();
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
      var _this4 = this;

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
            _this4.modal.style.visibility = 'hidden';
          });
        } else {
          animateCSS("#".concat(this.id), 'fadeOut zoomOut', function () {
            _this4.modal.style.visibility = 'hidden';
          });
        }
      }
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

    Sidenav._bindEsc();
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

          switch (_this.options.enterFrom) {
            case 'left':
              animateCSS("#".concat(_this.id, " .sidenav"), 'slideOutLeft', function () {
                _this._hideSidenav();
              });
              break;

            case 'right':
              animateCSS("#".concat(_this.id, " .sidenav"), 'slideOutRight', function () {
                _this._hideSidenav();
              });
              break;

            case 'top':
              animateCSS("#".concat(_this.id, " .sidenav"), 'slideOutUp', function () {
                _this._hideSidenav();
              });
              break;

            case 'bottom':
              animateCSS("#".concat(_this.id, " .sidenav"), 'slideOutDown', function () {
                _this._hideSidenav();
              });
              break;

            case 'plain':
              _this._hideSidenav();

              break;

            default:
              animateCSS("#".concat(_this.id, " .sidenav"), 'slideOutLeft', function () {
                _this._hideSidenav();
              });
              break;
          }
        });
      }
    }
  }, {
    key: "_hideSidenav",
    value: function _hideSidenav() {
      this.sidenav.style.visibility = 'hidden';
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
  }], [{
    key: "_bindEsc",
    value: function _bindEsc() {
      document.addEventListener('keyup', function (event) {
        if (event.key === 'Escape') {
          var sidenavs = document.querySelectorAll('.sidenav');
          sidenavs.forEach(function (sidenav) {
            sidenav.classList.remove('active');
          });
        }
      });
    }
  }]);

  return Sidenav;
}();

var Overlay = /*#__PURE__*/function (_Sidenav) {
  _inherits(Overlay, _Sidenav);

  var _super = _createSuper(Overlay);

  function Overlay(id, options) {
    var _this2;

    _classCallCheck(this, Overlay);

    _this2 = _super.call(this, id);
    _this2.options.enterFrom = 'plain';
    return _this2;
  }

  return Overlay;
}(Sidenav); // "use strict";
// function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
// function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
// function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
// function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
// function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
// function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
// function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
// function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }
// function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
// function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
// function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
// var Sidenav = /*#__PURE__*/function () {
//   // OpenTrigger;
//   // closeTrigger;
//   // sidenav;
//   // id;
//   function Sidenav(id) {
//     var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
//     _classCallCheck(this, Sidenav);
//     this._setupOptions(options);
//     this._setupSelectors(id);
//     this._setupClickListeners();
//     Sidenav._bindEsc();
//   }
//   _createClass(Sidenav, [{
//     key: "_setupOptions",
//     value: function _setupOptions(userOptions) {
//       this.options = {};
//       this.options.enterFrom = 'left';
//       if (userOptions) {
//         for (var _i = 0, _Object$keys = Object.keys(userOptions); _i < _Object$keys.length; _i++) {
//           var key = _Object$keys[_i];
//           this.options[key] = userOptions[key];
//         }
//       }
//     }
//   }, {
//     key: "_setupSelectors",
//     value: function _setupSelectors(id) {
//       this.id = id;
//       this.openTrigger = document.querySelector("#".concat(id, " .trigger"));
//       this.sidenav = document.querySelector("#".concat(id, " .sidenav"));
//       this.closeTrigger = document.querySelector("#".concat(id, " .close-trigger"));
//     }
//   }, {
//     key: "_setupClickListeners",
//     value: function _setupClickListeners() {
//       var _this = this;
//       if (this.openTrigger) {
//         this.openTrigger.addEventListener('click', function () {
//           _this.sidenav.style.visibility = 'visible';
//           switch (_this.options.enterFrom) {
//             case 'left':
//               animateCSS("#".concat(_this.id, " .sidenav"), 'slideInLeft');
//               break;
//             case 'right':
//               animateCSS("#".concat(_this.id, " .sidenav"), 'slideInRight');
//               break;
//             case 'top':
//               animateCSS("#".concat(_this.id, " .sidenav"), 'slideInDown');
//               break;
//             case 'bottom':
//               animateCSS("#".concat(_this.id, " .sidenav"), 'slideInUp');
//               break;
//             case 'plain':
//               break;
//             default:
//               animateCSS("#".concat(_this.id, " .sidenav"), 'slideInLeft');
//               break;
//           }
//         });
//       }
//       if (this.closeTrigger) {
//         this.closeTrigger.addEventListener('click', function (event) {
//           event.preventDefault();
//           switch (_this.options.enterFrom) {
//             case 'left':
//               animateCSS("#".concat(_this.id, " .sidenav"), 'slideOutLeft', function () {
//                 _this._hideSidenav();
//               });
//               break;
//             case 'right':
//               animateCSS("#".concat(_this.id, " .sidenav"), 'slideOutRight', function () {
//                 _this._hideSidenav();
//               });
//               break;
//             case 'top':
//               animateCSS("#".concat(_this.id, " .sidenav"), 'slideOutUp', function () {
//                 _this._hideSidenav();
//               });
//               break;
//             case 'bottom':
//               animateCSS("#".concat(_this.id, " .sidenav"), 'slideOutDown', function () {
//                 _this._hideSidenav();
//               });
//               break;
//             case 'plain':
//               _this._hideSidenav();
//               break;
//             default:
//               animateCSS("#".concat(_this.id, " .sidenav"), 'slideOutLeft', function () {
//                 _this._hideSidenav();
//               });
//               break;
//           }
//         });
//       }
//     }
//   }, {
//     key: "_hideSidenav",
//     value: function _hideSidenav() {
//       this.sidenav.style.visibility = 'hidden';
//     }
//   }, {
//     key: "close",
//     value: function close() {
//       this.sidenav.classList.remove('active');
//     }
//   }, {
//     key: "open",
//     value: function open() {
//       this.sidenav.classList.add('active');
//     }
//   }], [{
//     key: "_bindEsc",
//     value: function _bindEsc() {
//       document.addEventListener('keyup', function (event) {
//         if (event.key === 'Escape') {
//           var sidenavs = document.querySelectorAll('.sidenav');
//           sidenavs.forEach(function (sidenav) {
//             sidenav.classList.remove('active');
//           });
//         }
//       });
//     }
//   }]);
//   return Sidenav;
// }();
// var Overlay = /*#__PURE__*/function (_Sidenav) {
//   _inherits(Overlay, _Sidenav);
//   var _super = _createSuper(Overlay);
//   function Overlay(id, options) {
//     var _this2;
//     _classCallCheck(this, Overlay);
//     _this2 = _super.call(this, id);
//     _this2.options.enterFrom = 'plain';
//     return _this2;
//   }
//   return Overlay;
// }(Sidenav);