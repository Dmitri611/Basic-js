module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!arr.some((item) => Array.isArray(item))) {
      return 1;
    } else {
      return 1 + this.calculateDepth(arr.flat());
    }
  }
};