function getOrdinalNumber(num) {
  const lastDigit = num % 10;
  const lastTwoDigit = num % 100;

  if (lastTwoDigit >= 11 && lastTwoDigit <= 13) {
    return `${num}th`;
  }

  if (lastDigit === 1) {
    return `${num}st`;
  } else if (lastDigit === 2) {
    return `${num}nd`;
  } else if (lastDigit === 3) {
    return `${num}rd`;
  } else {
    return `${num}th`;
  }
}
module.exports = getOrdinalNumber;
