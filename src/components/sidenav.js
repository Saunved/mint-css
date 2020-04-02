class Sidenav {
    
    openTrigger;
    closeTrigger;
    sidenav;
    id;

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
            })
        }

        if (this.closeTrigger) {
            this.closeTrigger.addEventListener('click', () => {
                this.sidenav.classList.remove('active');
            })
        }
    }

    static _bindEsc() {
        document.onkeyup = (e) => {
            if (e.which == 27) {
                let sidenavs = document.querySelectorAll('.sidenav');
                sidenavs.forEach(sidenav => {
                    sidenav.classList.remove('active');
                })
            }
        }
    }

    close(){
        this.sidenav.classList.remove('active');
    }

    open(){
        this.sidenav.classList.add('active');
    }

}

class Overlay extends Sidenav{
    constructor(id){
        super(id);
        this.sidenav.classList.add('plain');
    }
}
