const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members && members.length) {
    return members
      .filter((item) => typeof item === "string")
      .map((item) => item.trim()[0].toUpperCase())
      .sort()
      .join("");
  }
  return false;
};