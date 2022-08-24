const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const calculations = (data) => {
  console.log("Calculating totals...");

  const parsed = data.map((entry) => {
    const [month, day] = splitDate(entry.Date);

    return {
      id: entry.Id,
      day,
      month,
      amount: toNumber(entry.Transaction),
    };
  });

  const total = parsed.reduce((acc, curr) => acc + curr.amount, 0);
  const totalCredit = parsed.filter((e) => e.amount >= 0);
  const totalDebit = parsed.filter((e) => e.amount < 0);

  const averageCredit =
    totalCredit.reduce((acc, curr) => acc + curr.amount, 0) /
    totalCredit.length;
  const averageDebit =
    totalDebit.reduce((acc, curr) => acc + curr.amount, 0) / totalDebit.length;

  const byMonth = totalPerMonth(parsed);

  console.log("Calculated:");
  console.log({ total, averageCredit, averageDebit, byMonth });

  return {
    total,
    averageCredit,
    averageDebit,
    byMonth,
  };
};

const toNumber = (string) => {
  return parseFloat(string.replace(/\+/g, ""));
};

const splitDate = (string) => {
  return string.split("/");
};

const totalPerMonth = (data) => {
  const totals = MONTHS.map(() => 0);

  data.forEach((e) => {
    totals[e.month - 1] = totals[e.month - 1] + 1;
  });

  return totals.map((m, i) => ({
    [MONTHS[i]]: m,
  }));
};

module.exports = calculations;
