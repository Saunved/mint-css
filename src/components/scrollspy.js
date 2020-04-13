class Scrollspy{
    constructor(userOptions = {}){
        this.options = {};
        this.trackIds = [];
        this._setOptions();
        this.elems = document.querySelectorAll(this.options.selector);
        this.elems.forEach((elem) => {
            this.trackIds.push({id: elem.getAttribute("href"), visible: 0});
        })
        new Scroll(this._onScroll, {throttle: 350});
    }

    _setOptions(userOptions){
        this.options.activeClass = 'highlight';
        this.options.selector = '#main-menu a';
        Object.assign(this.options, userOptions);
    }

    _onScroll = () => {
        this._setupVisibility();
        this._setupHighlights()
    }

    _setupVisibility = () => {
        this.trackIds.forEach(tracker => {
            if(this._isElementInViewport(tracker.id)) {
                if(!tracker.visible){ tracker.visible = Date.now(); 
                }
            }
            else{ 
                tracker.visible = 0; 
            }
        })
    }

    _setupHighlights(){
        let latest = this.trackIds.reduce((max, tracker) => max.visible > tracker.visible ? max : tracker);
        var nav = document.querySelector(`${this.options.selector}[href="${latest.id}"]`);
        nav.classList.add(this.options.activeClass);
        this._clearRemainingHighlights(nav);
    }

    _clearRemainingHighlights(nav){
        this.trackIds.forEach(tracker => {
            var elem = document.querySelector(`${this.options.selector}[href="${tracker.id}"]`);
            if(elem!=nav){
                elem.classList.remove(this.options.activeClass);
            }
        })
    }

    _isElementInViewport (id) {
        var elem = document.querySelector(`${id}`);
        var rect = elem.getBoundingClientRect();

        return (
            rect.bottom >= 0 && 
            rect.right >= 0 && 
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
            rect.left <= (window.innerWidth || document.documentElement.clientWidth));
    }
}