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