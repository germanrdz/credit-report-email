const fs = require("fs");
const { parse } = require("csv-parse");

const calculations = require("./calculations");
const email = require("./email");
const config = require("./config");

//
// App:
//    Using the provided file at file.csv, calculates:
// Total balance is 39.74
// Average debit amount: -15.38
// Average credit amount: 35.25

// Number of transactions in July: 2
// Number of transactions in August: 2
//
const app = () => {
  const parseConfig = {
    columns: true,
    skip_empty_lines: true,
  };

  try {
    // Read data from file
    const data = fs.readFileSync("./file.csv", "utf8");

    // Convert CSV to JS Object
    parse(data, parseConfig, function (err, records) {
      if (err) throw err;

      // calculate all totals
      const { total, averageCredit, averageDebit, byMonth } =
        calculations(records);

      // sending email
      email(config.to, {
        total,
        averageCredit,
        averageDebit,
        byMonth,
      });
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = app;
