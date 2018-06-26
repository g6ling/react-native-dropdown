const ReactNative = require("react-native");

const {
  NativeModules: { UIManager }
} = ReactNative;

module.exports = function(ref, debug) {
  const handle = ReactNative.findNodeHandle(ref);
  setTimeout(() => {
    UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
      if (debug) {
        console.log(x, y, width, height, pageX, pageY);
      }
      ref._currentPosition(pageX, pageY);
    });
  }, 0);
};
