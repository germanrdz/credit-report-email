const ejs = require("ejs");

const TEMPLATE = `
  <html>
  <body>
  <p>
    <img src="https://www.storicard.com/_next/static/media/logo.9a85efb3.svg">
  </p>
  <hr />
  <p>Hello, this is your credit report</p>
  <ul>
    <li>Total balance is <strong>$<%= total %></strong></li>
    <li>Average debit amount: <strong>$<%= averageCredit %></strong></li>
    <li>Average credit amount: <strong>$<%= averageDebit %></strong></li>
  </ul>
  <ul>
    <% byMonth.forEach(function(month) { %>
      <% for (const [key, value] of Object.entries(month)) { %>
        <% if (value > 0) { %>
          <li>Number of transactions in <strong><%= key %></strong>: <strong><%= value %></strong></li>
        <% } %>
      <% } %>
    <% }); %>
  </ul>
  </body>
  </html>
`;

const view = (data) => {
  return ejs.render(TEMPLATE, data);
};

module.exports = view;
