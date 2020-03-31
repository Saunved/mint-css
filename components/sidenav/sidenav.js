class SN{
    static sidenavs = [];

    init(){
        for(let i=0; i < arguments.length; i++){
            this.setup(arguments[i]);
        }
        this.esc();
    }

    setup(id){
        const trigger = document.querySelector(`#${id} .trigger`);
        const sidenav = document.querySelector(`#${id} .sidenav`);
        const closeTrigger = document.querySelector(`#${id} .close-trigger`);

        console.log(sidenav.classList);
        if(!sidenav.classList.contains('slide-left') && !sidenav.classList.contains('slide-right') && !sidenav.classList.contains('rise') && !sidenav.classList.contains('drop')){
            sidenav.classList.add('plain');
        }

        if(!trigger){
            console.error('The trigger class must be defined');
        }
        if(!sidenav){
            console.error('The sidenav class must be defined');
        }
        if(!closeTrigger){
            console.error('The close-trigger class must be defined');
        }

        if(trigger && sidenav && closeTrigger){
            trigger.addEventListener('click', () => {
                sidenav.classList.add('active');
            })
    
            closeTrigger.addEventListener('click', () => {
                sidenav.classList.remove('active');
            })
        }
    }

    esc(){
        document.onkeyup = function(e){
            if(e.which==27){
                var elems = document.getElementsByClassName('sidenav');
                for(let i=0; i<elems.length; i++){
                    elems[i].classList.remove('active');
                }
            }
        }
    }

}

const Sidenav = new SN();