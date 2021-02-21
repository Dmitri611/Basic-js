module.exports = function countCats(matrix) {
  const arr = [];
  matrix.forEach((item) => {
    arr.push(...item.filter((el) => el === "^^"));
  });
  return arr.length;
};