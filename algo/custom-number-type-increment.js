/**
 * Returns an incremented number
 * @param {array} number
 * @returns {array} number incremented by 1
 */
function increment(number) {
  const incrementedNumber = []; // build a new array number

  let lastNumberReset = false; // let the loop know if the previous number has been resetted

  // iterate through array number from last index
  for (let i = number.length - 1; i >= 0; i--) {
    // Check if incrementation required
    if (i === number.length - 1 || lastNumberReset) {
      if (number[i] + 1 >= 10) {
        // reset actual number and increment next one
        incrementedNumber.unshift(0);
        lastNumberReset = true;

        // If it is the first number, we need to add one more when it has been resetted
        if (i === 0) {
          incrementedNumber.unshift(1);
        }
      } else {
        // Increment normally
        incrementedNumber.unshift(number[i] + 1);
        lastNumberReset = false;
      }
    } else {
      // Put number without incrementation
      incrementedNumber.unshift(number[i]);
    }
  }

  // Really, do I need to comment the last instruction? ;-)
  return incrementedNumber;
}
