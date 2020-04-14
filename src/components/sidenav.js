class Sidenav {
	// OpenTrigger;
	// closeTrigger;
	// sidenav;
	// id;

	static sidenavs = [];

	constructor(id, options = {}) {
		this._setupOptions(options);
		this._setupSelectors(id);
		this._setupClickListeners();
		this._bindEsc();
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
					case 'grow':
						animateCSS(`#${this.id} .sidenav`, 'zoomIn FadeIn');
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
				this._handleClosing();
			});
		}

		var closeOnClickElements = document.querySelectorAll(`#${this.id} .sidenav .click-close`);
		closeOnClickElements.forEach(element => {
			element.addEventListener('click', () => {
				this._handleClosing();
			})
		})
	}

	_handleClosing(){
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
			case 'grow':
				animateCSS(`#${this.id} .sidenav`, 'zoomOut fadeOut', () => { this._hideSidenav() });
				break;
			case 'plain':
				this._hideSidenav();
				break;
			default:
				animateCSS(`#${this.id} .sidenav`, 'slideOutLeft', () => { this._hideSidenav() });
				break;
		}
	}

	_hideSidenav(){
		this.sidenav.style.visibility = 'hidden';
	}

	_bindEsc() {
		document.addEventListener('keyup', event => {
			if (event.key === 'Escape') {
				this._handleClosing();
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