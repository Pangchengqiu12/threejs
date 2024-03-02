/**
 *防抖
 * @param {function} fn 延迟要执行的函数
 * @param {number} delay 默认时间为 300ms
 * @returns
 */
export function debounce(fn, delay = 300) {
  let timer = null;

  return async function (...args) {
    clearTimeout(timer);

    timer = setTimeout(async () => {
      await fn.apply(this, args);
    }, delay);
  };
}
