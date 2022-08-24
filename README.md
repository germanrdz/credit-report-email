# App

This app calculates a credit report from a CSV file and sends it to an email address.

- I use NodeJS (fs) to read CSV file from disk.
- I use `csv-parse` to parse CSV string to JS
- I use `nodemon` to send and email
- I use `ejs` to generate HTML from a template
- I used [Mailtrap](https://mailtrap.io/) to setup a fake Inbox connected to a SMTP server to send the emails

# Setup

To use this app you must update values at `config.js` file.

```js
const config = {
  to: "email@address.com",
  smtp: {
    host: "smtp.server.com",
    port: 25,
    auth: {
      user: "", // mailtrap username
      pass: "", // mailtrap password
    },
  },
};
```

# Run

To download and install all dependencies use: `npm install`

To run the app use: `npm start`
