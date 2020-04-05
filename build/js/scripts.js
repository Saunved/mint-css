var withinViewport = (function() {

    'use strict';
    console.log('Working here');
  
    // Cutting the mustard
    // http://webfieldmanual.com/guides/cutting-the-mustard.html
  
    if (window.requestAnimationFrame && document.documentElement.classList) {
  
      // Passes the test so add enhanced class to HTML tag
      document.documentElement.classList.add('enhanced');
  
      // Throttle
      // https://underscorejs.org/#throttle
      var throttle = function(func, wait, options) {
        var _ = {
          now: Date.now || function() {
            return new Date().getTime();
          }
        };
        var context, args, result;
        var timeout = null;
        var previous = 0;
        if (!options) {
          options = {};
        }
        var later = function() {
          previous = options.leading === false ? 0 : _.now();
          timeout = null;
          result = func.apply(context, args);
          if (!timeout) {
            context = args = null;
          }
        };
        return function() {
          var now = _.now();
          if (!previous && options.leading === false) {
            previous = now;
          }
          var remaining = wait - (now - previous);
          context = this;
          args = arguments;
          if (remaining <= 0 || remaining > wait) {
            if (timeout) {
              clearTimeout(timeout);
              timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) {
              context = args = null;
            }
          } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
          }
          return result;
        };
      };
      
      // requestAnimationFrame
      // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
      var _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
  
      // Global class for revealing element
      var reveal = document.querySelectorAll('.reveal');
      console.log(reveal);
  
      // Get the viewport (window) dimensions
      var getViewportSize = function() {
        return {
          width: window.document.documentElement.clientWidth,
          height: window.document.documentElement.clientHeight
        };
      };
  
      // Get the current scoll position
      var getCurrentScroll = function() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      };
  
      // Get element dimensions and position
      var getElemInfo = function(elem) {
        var offsetTop = 0;
        var offsetLeft = 0;
        var offsetHeight = elem.offsetHeight;
        var offsetWidth = elem.offsetWidth;
  
        do {
          if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
          }
          if (!isNaN(elem.offsetLeft)) {
            offsetLeft += elem.offsetLeft;
          }
        } while ((elem = elem.offsetParent) !== null);
  
        return {
          top: offsetTop,
          left: offsetLeft,
          height: offsetHeight,
          width: offsetWidth
        };
      };
  
      // Check visibility of the element in the viewport
      var checkVisibility = function(elem) {
        var viewportSize = getViewportSize();
        var currentScroll = getCurrentScroll();
        var elemInfo = getElemInfo(elem);
        var spaceOffset = 0.2;
        var elemHeight = elemInfo.height;
        var elemWidth = elemInfo.width;
        var elemTop = elemInfo.top;
        var elemLeft = elemInfo.left;
        var elemBottom = elemTop + elemHeight;
        var elemRight = elemLeft + elemWidth;
  
        var checkBoundaries = function() {
          // Defining the element boundaries and extra space offset
          var top = elemTop + elemHeight * spaceOffset;
          var left = elemLeft + elemWidth * spaceOffset;
          var bottom = elemBottom - elemHeight * spaceOffset;
          var right = elemRight - elemWidth * spaceOffset;
  
          // Defining the window boundaries and window offset
          var wTop = currentScroll.y + 0;
          var wLeft = currentScroll.x + 0;
          var wBottom = currentScroll.y - 0 + viewportSize.height;
          var wRight = currentScroll.x - 0 + viewportSize.width;
  
          // Check if the element is within boundary
          return (top < wBottom) && (bottom > wTop) && (left > wLeft) && (right < wRight);
        };
  
        return checkBoundaries();
      };
  
      // Run a loop with checkVisibility() and add / remove classes to the elements
      var toggleElement = function() {
        for (var i = 0; i < reveal.length; i++) {
          if (checkVisibility(reveal[i])) {
              console.log('Revealing');
            reveal[i].classList.add('revealed');
          } else {
            reveal[i].classList.remove('revealed');
          }
        }
      };
  
      // Throttle events and requestAnimationFrame
      var scrollHandler = throttle(function() {
        _requestAnimationFrame(toggleElement);
      }, 300);
  
      var resizeHandler = throttle(function() {
        _requestAnimationFrame(toggleElement);
  
        // For demo purposes only
        // fullscreenIntro();
      }, 300);
  
      scrollHandler();
  
      // Listening for events
      if (window.addEventListener) {
        addEventListener('scroll', scrollHandler, false);
        addEventListener('resize', resizeHandler, false);
      } else if (window.attachEvent) {
        window.attachEvent('onscroll', scrollHandler);
        window.attachEvent('onresize', resizeHandler);
      } else {
        window.onscroll = scrollHandler;
        window.onresize = resizeHandler;
      }
  
    }

    return withinViewport;
}());
'use strict';
class Sidenav {
	// OpenTrigger;
	// closeTrigger;
	// sidenav;
	// id;

	constructor(id) {
		this._setupSelectors(id);
		this._setupClickListeners();
		Sidenav._bindEsc();
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
				this.sidenav.classList.add('active');
			});
		}

		if (this.closeTrigger) {
			this.closeTrigger.addEventListener('click', () => {
				this.sidenav.classList.remove('active');
			});
		}
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
	constructor(id) {
		super(id);
		this.sidenav.classList.add('plain');
	}
}
