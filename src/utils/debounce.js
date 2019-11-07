export const debounce = (func, wait, imediate, args) => {
  let timeout;

  return () => {
    const context = this;
    const callNow = imediate && !timeout;
    const later = () => {
      timeout = null;
      if(!imediate) func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  }
}
