module.exports = function repeater(str, options) {
  const repeatTimes =
    options.repeatTimes === undefined ? "1" : options.repeatTimes;
  const separator = options.separator === undefined ? "+" : options.separator;

  const addition = options.addition === undefined ? "" : options.addition;
  const additionSeparator =
    options.additionSeparator === undefined ? "|" : options.additionSeparator;
  const additionRepeatTimes =
    options.additionRepeatTimes === undefined
      ? "1"
      : options.additionRepeatTimes;

  const additionPattern =
    addition === ""
      ? ""
      : `${addition}${additionSeparator}`
          .repeat(additionRepeatTimes)
          .slice(0, -additionSeparator.length);

  return `${str}${additionPattern}${separator}`
    .repeat(repeatTimes)
    .slice(0, -separator.length);
};