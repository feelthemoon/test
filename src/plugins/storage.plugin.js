export default {
  install(Vue, options) {
    Vue.prototype.$getFromStorage = (key) => {
      return localStorage.getItem(key);
    };
    Vue.prototype.$saveToStorage = (key, value) =>
      localStorage.setItem(key, value);
    Vue.prototype.$clearStorage = () => localStorage.clear();
    Vue.prototype.$removeStorageItems = (...keys) => {
      keys.forEach((key) => localStorage.removeItem(key));
    };
  },
};
