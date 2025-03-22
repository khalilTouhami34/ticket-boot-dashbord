const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { botName: "TicketX", owner: "Khalil A.Stockholm" });
});

app.listen(3000, () => {
  console.log("✅ Dashboard is running on port 3000!");
});
