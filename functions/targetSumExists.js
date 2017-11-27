module.exports = (arr, target) => {
  let remainder = target;

  for (let i = 0; i < arr.length + 1; i++) {
    remainder = remainder - arr[i];
    if (remainder === 0) {
      return true;
    } else if (remainder < 0) {
      return false;
    }
  }

};
