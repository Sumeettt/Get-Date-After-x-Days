const addDays = require("date-fns/addDays");
const getDaysAfterSpecifiedDate = (days) => {
  const resultDate = addDays(new Date(2020, 07, 22), days);

  return `${resultDate.getDate()}-${
    resultDate.getMonth() + 1
  }-${resultDate.getFullYear()}`;
};

module.exports = getDaysAfterSpecifiedDate;
