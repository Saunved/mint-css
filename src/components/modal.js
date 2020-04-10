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
        this.options.animate = true;
        this.options.beforeOpen = () => {};
        this.options.beforeClose = () => {};
        this.options.afterClose = () => {};
        this.options.afterOpen = () => {};

        if(userOptions){
            for(var key of Object.keys(userOptions)){
                this.options[key] = userOptions[key];
            }
        }

        if(screen.width < 364){
            this.options.animate = false;
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
            if(this.options.animate){
                Modal.overlay.classList.remove('hidden');
            }
            this.modal.style.visibility = 'visible';
            if(this.modal.classList.contains('modal-bottom')){
                if(this.options.animate){
                    animateCSS(`#${this.id}`, 'slideInUp', () => {
                        Modal.overlay.classList.remove('hidden');
                    });
                }
            }
            else{
                if(this.options.animate){
                    animateCSS(`#${this.id}`, 'fadeIn zoomIn', () => {
                        Modal.overlay.classList.remove('hidden');
                    });
                }
            }
        }
        else{
            if(Modal.opened.length==0){
                Modal.overlay.classList.add('hidden');
            }
            if(this.modal.classList.contains('modal-bottom')){
                if(this.options.animate){
                    animateCSS(`#${this.id}`, 'slideOutDown', () => {
                        this.modal.style.visibility = 'hidden';
                    });
                }
                else{
                    this.modal.style.visibility = 'hidden';
                }
            }
            else{
                if(this.options.animate){
                    animateCSS(`#${this.id}`, 'fadeOut zoomOut', () => {
                        this.modal.style.visibility = 'hidden';
                    });
                }
                else{
                        this.modal.style.visibility = 'hidden';
                }
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