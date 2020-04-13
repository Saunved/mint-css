class Scroll{
    constructor(cb = () => {}, userOptions = {}){
        this.cb = cb;
        this.options = {};
        this._setOptions(userOptions);
        this._attachScrollListener();
        // this._throttledScroll = this._throttle(this._scrollListener, this.options.throttle);
    }

    _setOptions(userOptions){
        this.options.throttle = 100;
        Object.assign(this.options, userOptions);
    }

    /* Wheel event is also possible, but Safari does not support it */
    _attachScrollListener = () => {
        document.addEventListener( 'wheel', throttle(this._scrollListener, this.options.throttle));
    }

    _detatchScrollListener = () => {
        document.removeEventListener( 'wheel', throttle(this._scrollListener, this.options.throttle));
    }

    _scrollListener = () => {
        this.cb();
    }

}