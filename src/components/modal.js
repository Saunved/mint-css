class Modal{

    // Define the trigger for the modal
    // Define whether modal closes on Esc
    // TODO: Close only 1 modal per esc / outside click
    // static opened = [];
    // static overlay = null;

    constructor(id, options = {}){
        Modal.opened = [];
        Modal.overlay = null;
        this.id = id;
        this.modal = document.getElementById(id);
        this.properties = {};
        this._setModalMargins();
        this._setupOverlay();
        this._setOptions(options);
        if(this.options.closeOnEsc && this.options.canBeDismissed){
            this._bindEsc();
        }
    }

    _setModalMargins(){
        if(this.modal.classList.contains('modal')){
            this.modal.style.marginLeft = `-${(this.modal.offsetWidth/2).toString()}px`;
            this.modal.style.marginTop = `-${(this.modal.offsetHeight/2).toString()}px`;
        }
    }

    // Use Object.extend here
    _setOptions(userOptions){
        this.options = {};
        this.options.closeOnEsc = true;
        this.options.canBeDismissed = true;
        this.options.preventScrolling = true;
        this.options.beforeOpen = () => {};
        this.options.beforeClose = () => {};
        this.options.afterClose = () => {};
        this.options.afterOpen = () => {};

        if(userOptions){
            for(var key of Object.keys(userOptions)){
                this.options[key] = userOptions[key];
            }
        }
    }

    _isVisible(){
        var _isVisible = !! this.modal && !!( this.modal.offsetWidth || this.modal.offsetHeight || this.modal.getClientRects().length )
        return _isVisible;
    }

    _setupListener(){
        this.options.trigger.addEventListener('click', () => {
            this.open();
        })    
    }

    _bindEsc(){
        document.addEventListener('keyup', event => {
			if (event.key === 'Escape') {
                this.close();
			}
		});
    }

    _setupOverlay(){
        if(!Modal.overlay){
            Modal.overlay = document.createElement('div');
            Modal.overlay.className = 'modal-overlay';
            document.querySelector('body').appendChild(Modal.overlay);
            Modal.overlay.classList.toggle('hidden');
        }
    }

    _toggleModal(show){
        if(show){
            Modal.overlay.classList.remove('hidden');
            this.modal.style.visibility = 'visible';
            if(this.modal.classList.contains('modal-bottom')){
                    animateCSS(`#${this.id}`, 'slideInUp', () => {
                        Modal.overlay.classList.remove('hidden');
                    });
            }
            else{
                    animateCSS(`#${this.id}`, 'fadeIn zoomIn', () => {
                        Modal.overlay.classList.remove('hidden');
                    });
            }
        }
        else{
            if(Modal.opened.length==0){
                Modal.overlay.classList.add('hidden');
            }
            if(this.modal.classList.contains('modal-bottom')){
                    animateCSS(`#${this.id}`, 'slideOutDown', () => {
                        this.modal.style.visibility = 'hidden';
                    });
            }
            else{
                    animateCSS(`#${this.id}`, 'fadeOut zoomOut', () => {
                        this.modal.style.visibility = 'hidden';
                    });
            }
        }
    }

    _attachClickListener() {
        document.addEventListener('click', this._outsideClickListener, false);
    }

    _removeClickListener() {
        document.removeEventListener('click', this._outsideClickListener, false);
    }

    _outsideClickListener = event => {
        event.preventDefault();
        if (!this.modal.contains(event.target) && this._isVisible(this.modal)) { // or use: event.target.closest(selector) === null
          this.close();
        }
    }

    open(){
        this.options.beforeOpen();
        if(this.options.preventScrolling){
            document.querySelector('body').style.overflowY = 'hidden';
        }

        this._toggleModal(true);
        this.properties.opened = Date.now();
        Modal.opened.push(this.properties.opened);
        
        if(this.options.canBeDismissed){
            setTimeout(() => {
                this._attachClickListener();
                this.options.afterOpen();
            }, 0)
        }
    }

    close(){
        if(this.properties.opened == Modal.opened[Modal.opened.length-1] ){
            this.options.beforeClose();
            Modal.opened.pop();
            this._toggleModal(false);
            this.properties.opened = 0;
            setTimeout(() => {
                this._removeClickListener();
                if(Modal.opened.length === 0){
                    document.querySelector('body').style.overflowY = 'auto';
                }
            }, 0);
            this.options.afterClose();
        }
    }
}

// "use strict";

// function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

// function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

// function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// var Modal = /*#__PURE__*/function () {
//   // Define the trigger for the modal
//   // Define whether modal closes on Esc
//   // TODO: Close only 1 modal per esc / outside click
//   function Modal(id) {
//     var _this = this;

//     var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

//     _classCallCheck(this, Modal);

//     _defineProperty(this, "_outsideClickListener", function (event) {
//       event.preventDefault();

//       if (!_this.modal.contains(event.target) && _this._isVisible(_this.modal)) {
//         // or use: event.target.closest(selector) === null
//         _this.close();
//       }
//     });

//     Modal.opened = [];
//     Modal.overlay = null;
//     this.id = id;
//     this.modal = document.getElementById(id);
//     this.properties = {};

//     this._setModalMargins();

//     this._setupOverlay();

//     this._setOptions(options);

//     if (this.options.closeOnEsc && this.options.canBeDismissed) {
//       this._bindEsc();
//     }
//   }

//   _createClass(Modal, [{
//     key: "_setModalMargins",
//     value: function _setModalMargins() {
//       if (this.modal.classList.contains('modal')) {
//         this.modal.style.marginLeft = "-".concat((this.modal.offsetWidth / 2).toString(), "px");
//         this.modal.style.marginTop = "-".concat((this.modal.offsetHeight / 2).toString(), "px");
//       }
//     } // Use Object.extend here

//   }, {
//     key: "_setOptions",
//     value: function _setOptions(userOptions) {
//       this.options = {};
//       this.options.closeOnEsc = true;
//       this.options.canBeDismissed = true;
//       this.options.preventScrolling = true;

//       this.options.beforeOpen = function () {};

//       this.options.beforeClose = function () {};

//       this.options.afterClose = function () {};

//       this.options.afterOpen = function () {};

//       if (userOptions) {
//         for (var _i = 0, _Object$keys = Object.keys(userOptions); _i < _Object$keys.length; _i++) {
//           var key = _Object$keys[_i];
//           this.options[key] = userOptions[key];
//         }
//       }
//     }
//   }, {
//     key: "_isVisible",
//     value: function _isVisible() {
//       var _isVisible = !!this.modal && !!(this.modal.offsetWidth || this.modal.offsetHeight || this.modal.getClientRects().length);

//       return _isVisible;
//     }
//   }, {
//     key: "_setupListener",
//     value: function _setupListener() {
//       var _this2 = this;

//       this.options.trigger.addEventListener('click', function () {
//         _this2.open();
//       });
//     }
//   }, {
//     key: "_bindEsc",
//     value: function _bindEsc() {
//       var _this3 = this;

//       document.addEventListener('keyup', function (event) {
//         if (event.key === 'Escape') {
//           _this3.close();
//         }
//       });
//     }
//   }, {
//     key: "_setupOverlay",
//     value: function _setupOverlay() {
//       if (!Modal.overlay) {
//         Modal.overlay = document.createElement('div');
//         Modal.overlay.className = 'modal-overlay';
//         document.querySelector('body').appendChild(Modal.overlay);
//         Modal.overlay.classList.toggle('hidden');
//       }
//     }
//   }, {
//     key: "_toggleModal",
//     value: function _toggleModal(show) {
//       var _this4 = this;

//       if (show) {
//         Modal.overlay.classList.remove('hidden');
//         this.modal.style.visibility = 'visible';

//         if (this.modal.classList.contains('modal-bottom')) {
//           animateCSS("#".concat(this.id), 'slideInUp', function () {
//             Modal.overlay.classList.remove('hidden');
//           });
//         } else {
//           animateCSS("#".concat(this.id), 'fadeIn zoomIn', function () {
//             Modal.overlay.classList.remove('hidden');
//           });
//         }
//       } else {
//         if (Modal.opened.length == 0) {
//           Modal.overlay.classList.add('hidden');
//         }

//         if (this.modal.classList.contains('modal-bottom')) {
//           animateCSS("#".concat(this.id), 'slideOutDown', function () {
//             _this4.modal.style.visibility = 'hidden';
//           });
//         } else {
//           animateCSS("#".concat(this.id), 'fadeOut zoomOut', function () {
//             _this4.modal.style.visibility = 'hidden';
//           });
//         }
//       }
//     }
//   }, {
//     key: "_attachClickListener",
//     value: function _attachClickListener() {
//       document.addEventListener('click', this._outsideClickListener, false);
//     }
//   }, {
//     key: "_removeClickListener",
//     value: function _removeClickListener() {
//       document.removeEventListener('click', this._outsideClickListener, false);
//     }
//   }, {
//     key: "open",
//     value: function open() {
//       var _this5 = this;

//       this.options.beforeOpen();

//       if (this.options.preventScrolling) {
//         document.querySelector('body').style.overflowY = 'hidden';
//       }

//       this._toggleModal(true);

//       this.properties.opened = Date.now();
//       Modal.opened.push(this.properties.opened);

//       if (this.options.canBeDismissed) {
//         setTimeout(function () {
//           _this5._attachClickListener();

//           _this5.options.afterOpen();
//         }, 0);
//       }
//     }
//   }, {
//     key: "close",
//     value: function close() {
//       var _this6 = this;

//       if (this.properties.opened == Modal.opened[Modal.opened.length - 1]) {
//         this.options.beforeClose();
//         Modal.opened.pop();

//         this._toggleModal(false);

//         this.properties.opened = 0;
//         setTimeout(function () {
//           _this6._removeClickListener();

//           if (Modal.opened.length === 0) {
//             document.querySelector('body').style.overflowY = 'auto';
//           }
//         }, 0);
//         this.options.afterClose();
//       }
//     }
//   }]);

//   return Modal;
// }();

// _defineProperty(Modal, "opened", []);

// _defineProperty(Modal, "overlay", null);