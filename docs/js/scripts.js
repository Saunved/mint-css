function animateCSS(element, animations, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated');
    const cssClasses = animations.split(' ');
    cssClasses.forEach(cssClass => {
        node.classList.add(cssClass);
    });

    function handleAnimationEnd() {
        node.classList.remove('animated');
        cssClasses.forEach(cssClass => {
            node.classList.remove(cssClass);
        });
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
// import anime from './anime';
class Modal{

    // Define the trigger for the modal
    // Define whether modal closes on Esc
    // TODO: Close only 1 modal per esc / outside click

    // static instances = [];
    // static lastOpened = 0;
    static opened = [];
    static overlay = null;

    constructor(id, options = {}){
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
                animateCSS(`#${this.id}`, 'slideInUp');
            }
            else{
                animateCSS(`#${this.id}`, 'fadeIn zoomIn');
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

    _removeClickListener = () => {
        document.removeEventListener('click', this._outsideClickListener, false);
    }

    _outsideClickListener = event => {
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
class CodeViewer extends HTMLElement {
    
    constructor(){
        super();
    }

    connectedCallback() {
        var id = Date.now()+Math.floor(Math.random()*9999).toString();
        var template =`<div class="clearfix"><h5 style="max-width:70%">${this.title}</h5><button id="button-${id}" class="btn btn-small btn-dark tiny btn-rounded">View code</button><pre id="pre-${id}" style="margin-top: 8px"><code>${this.content}</pre></code></div>`;
        this.innerHTML = template;
        var pre = document.getElementById(`pre-${id}`);
        pre.style.display = 'none';
        var button = document.getElementById(`button-${id}`);
        var state = false;

        button.addEventListener('click', function() {
            if(!state){
                pre.style.display = 'block';
                this.innerText = 'Hide code';
                state=!state;
            }
            else{
                pre.style.display = 'none';
                this.innerText = 'View code';
                state=!state;
            }
        })
      }

      get content(){
          return this.getAttribute('content');
      }

      get title(){
          return this.getAttribute('title');
      }

}

customElements.define('code-viewer', CodeViewer);