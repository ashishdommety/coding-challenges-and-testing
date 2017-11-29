module.exports = (arr, target) => {
  // let remainder = target;

  function loop(remainder){
    for (let i = 0; i < arr.length + 1; i++) {
      remainder = remainder - arr[i];
      if (remainder === 0) {
        return true;
      } else if (remainder < 0) {
        return false;
      }
    }
    // if(remainder > 0){
    //   return loop(remainder);
    // }
  }

  return loop(target);

//re-name so that we don't have so many 'remainders'
};
