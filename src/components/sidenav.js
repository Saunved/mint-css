class Sidenav {
	// OpenTrigger;
	// closeTrigger;
	// sidenav;
	// id;

	constructor(id, options = {}) {
		this._setupOptions(options);
		this._setupSelectors(id);
		this._setupClickListeners();
		Sidenav._bindEsc();
	}

	_setupOptions(userOptions){
		this.options = {};
		this.options.enterFrom = 'left';

		if(userOptions){
            for(var key of Object.keys(userOptions)){
                this.options[key] = userOptions[key];
            }
		}
	}

	_setupSelectors(id) {
		this.id = id;
		this.openTrigger = document.querySelector(`#${id} .trigger`);
		this.sidenav = document.querySelector(`#${id} .sidenav`);
		this.closeTrigger = document.querySelector(`#${id} .close-trigger`);
	}

	_setupClickListeners() {
		if (this.openTrigger) {
			this.openTrigger.addEventListener('click', () => {
				this.sidenav.style.visibility = 'visible';
				switch(this.options.enterFrom){
					case 'left':
						animateCSS(`#${this.id} .sidenav`, 'slideInLeft');
						break;
					case 'right':
						animateCSS(`#${this.id} .sidenav`, 'slideInRight');
						break;
					case 'top':
						animateCSS(`#${this.id} .sidenav`, 'slideInDown');
						break;
					case 'bottom':
						animateCSS(`#${this.id} .sidenav`, 'slideInUp');
						break;
					case 'plain':
						break;
					default:
						animateCSS(`#${this.id} .sidenav`, 'slideInLeft');
						break;
				}	
			});
		}

		if (this.closeTrigger) {
			this.closeTrigger.addEventListener('click', (event) => {
				event.preventDefault();
				switch(this.options.enterFrom){
					case 'left':
						animateCSS(`#${this.id} .sidenav`, 'slideOutLeft', () => { this._hideSidenav() });
						break;
					case 'right':
						animateCSS(`#${this.id} .sidenav`, 'slideOutRight', () => { this._hideSidenav() });
						break;
					case 'top':
						animateCSS(`#${this.id} .sidenav`, 'slideOutUp', () => { this._hideSidenav() });
						break;
					case 'bottom':
						animateCSS(`#${this.id} .sidenav`, 'slideOutDown', () => { this._hideSidenav() });
						break;
					case 'plain':
						this._hideSidenav();
						break;
					default:
						animateCSS(`#${this.id} .sidenav`, 'slideOutLeft', () => { this._hideSidenav() });
						break;
				}
			});
		}
	}

	_hideSidenav(){
		this.sidenav.style.visibility = 'hidden';
	}

	static _bindEsc() {
		document.addEventListener('keyup', event => {
			if (event.key === 'Escape') {
				const sidenavs = document.querySelectorAll('.sidenav');
				sidenavs.forEach(sidenav => {
					sidenav.classList.remove('active');
				});
			}
		});
	}

	close() {
		this.sidenav.classList.remove('active');
	}

	open() {
		this.sidenav.classList.add('active');
	}
}

class Overlay extends Sidenav {
	constructor(id, options) {
		super(id);
		this.options.enterFrom = 'plain';
	}
}

// "use strict";

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