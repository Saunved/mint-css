class SN{

    init(){
        for(let i=0; i < arguments.length; i++){
            this.setupSidenavs(arguments[i]);
        }
        this.bindEsc();
    }

    setupSidenavs(id){
        const openTrigger = document.querySelector(`#${id} .trigger`);
        const sidenav = document.querySelector(`#${id} .sidenav`);
        const closeTrigger = document.querySelector(`#${id} .close-trigger`);
        
        addPlainClass();

        if(!errorsPresent()){
            setupClickListeners();
        }

        function addPlainClass(){
            if(!sidenav.classList.contains('slide-left') && !sidenav.classList.contains('slide-right') && !sidenav.classList.contains('rise') && !sidenav.classList.contains('drop')){
                sidenav.classList.add('plain');
            }
        }

        function errorsPresent(){
            var isError = false;
            if(!openTrigger){
                console.error('The trigger class must be defined');
                isError=true;
            }
            if(!sidenav){
                console.error('The sidenav class must be defined');
                isError=true;
            }
            if(!closeTrigger){
                console.error('The close-trigger class must be defined');
                isError=true;
            }
            return isError;
        }

        function setupClickListeners(){
            if(openTrigger && sidenav && closeTrigger){
                openTrigger.addEventListener('click', () => {
                    sidenav.classList.add('active');
                })
        
                closeTrigger.addEventListener('click', () => {
                    sidenav.classList.remove('active');
                })
            }
        }
    }

    bindEsc(){
        document.onkeyup = function(e){
            if(e.which==27){
                var sidenavs = document.getElementsByClassName('sidenav');
                for(let i=0; i<elems.length; i++){
                    sidenavs[i].classList.remove('active');
                }
            }
        }
    }
}

const Sidenav = new SN();