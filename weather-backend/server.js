const express = require("express");
const cors = require("cors");
const app = express();
const weatherRoute = require("./routes/weather");

app.use(cors());

app.use("/weather", weatherRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
