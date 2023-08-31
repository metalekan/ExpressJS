const express = require("express");
const app = express();

const people = require('./routes/people')
const auth = require('./routes/auth')

// Static assets
app.use(express.static("./methods-public"));
// Parse from data
app.use(express.urlencoded({ extended: false }));
// Parse json
app.use(express.json());

app.use('/api/people', people)
app.use('/login', auth)

app.listen(5173, () => {
  console.log("Server is live.......");
});
