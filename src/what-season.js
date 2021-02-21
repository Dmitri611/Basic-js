module.exports = function getSeason(strDate) {
  if (strDate === undefined) return "Unable to determine the time of year!";

  const timeStamp = Date.parse(strDate);
  if (isNaN(timeStamp) || strDate.toString !== Date.prototype.toString)
    throw new Error("Error");

  const date = new Date(timeStamp);
  const month = date.getMonth();

  if (month < 2 || month === 11) return "winter";
  if (month < 5) return "spring";
  if (month < 8) return "summer";

  return "autumn";
};