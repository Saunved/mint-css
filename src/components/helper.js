// https://gist.github.com/peduarte/969217eac456538789e8fac8f45143b4
const throttle = (func, wait) => {
    let timer = null;
    return function(...args) {
      if (timer === null) {
        timer = setTimeout(() => {
          func.apply(this, args);
          timer = null;
        }, wait); 
      }
    };
}