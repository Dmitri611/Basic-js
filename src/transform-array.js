module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  const commands = "--discard-next --discard-prev --double-next --double-prev";
  const result = [...arr];
  const commandIndex = arr.findIndex((item) => commands.includes(item));
  switch (result[commandIndex]) {
    case "--discard-next":
      result[commandIndex] = null;
      if (commandIndex !== result.length - 1) {
        result.splice(commandIndex + 1, 1);
      }
      break;
    case "--discard-prev":
      result[commandIndex] = null;
      if (commandIndex !== 0) {
        result.splice(commandIndex - 1, 1);
      }
      break;
    case "--double-next":
      result[commandIndex] = null;
      if (commandIndex !== result.length - 1) {
        result.splice(commandIndex, 0, result[commandIndex + 1]);
      }
      break;
    case "--double-prev":
      result[commandIndex] = null;
      if (commandIndex !== 0) {
        result.splice(commandIndex, 0, result[commandIndex - 1]);
      }
      break;
  }
  if (result.some((item) => commands.includes(item))) {
    return transform(result);
  } else {
    return result.filter((item) => item !== null);
  }
};