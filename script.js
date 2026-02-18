function debounce(callback, delay, immediate = false) {
  let timer;

  return function (...args) {
    const context = this;

    if (timer) clearTimeout(timer);

    if (immediate) {
      const callNow = !timer;

      timer = setTimeout(() => {
        timer = null;
      }, delay);

      if (callNow) {
        callback.apply(context, args);
      }
    } else {
      timer = setTimeout(() => {
        callback.apply(context, args);
      }, delay);
    }
  };
}

module.exports = debounce;


  
  module.exports = debounce;
