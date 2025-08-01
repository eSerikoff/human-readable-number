module.exports = function toReadable(number) {
  const words = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  const dozens = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  if (number < 20) {
    return words[number];
  }

  if (number < 100) {
    if (number % 10 === 0) {
      return dozens[number];
    }
    return `${dozens[Math.floor(number / 10) * 10]} ${words[number % 10]}`;
  }

  const hundred = Math.floor(number / 100);
  const remainder = number % 100;

  if (remainder === 0) {
    return `${words[hundred]} hundred`;
  }

  if (remainder < 20) {
    return `${words[hundred]} hundred ${words[remainder]}`;
  }

  if (remainder % 10 === 0) {
    return `${words[hundred]} hundred ${dozens[remainder]}`;
  }

  return `${words[hundred]} hundred ${
    dozens[Math.floor(remainder / 10) * 10]
  } ${words[remainder % 10]}`;
};
